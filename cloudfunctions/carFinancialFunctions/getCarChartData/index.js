const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  let {open_id, year, month} = event
  const _ = db.command
  const MAX_LIMIT = 100
  let year_start = year + "-01-01",
      year_end = year + "-12-31",
      day = calculateDay(year, month),
      month_start = year + "-" + month + "-01",
      month_end = year + "-" + month + "-" + day
      year_options = {
        open_id: open_id,
        date: _.gt(year_start).and(_.lt(year_end))
      },
      month_options = {
        open_id: open_id,
        date: _.gt(month_start).and(_.lt(month_end))
      }
  const year_countResult = await db.collection('car_record').where(year_options).count()
  const month_countResult = await db.collection('car_record').where(month_options).count()

  const year_total = year_countResult.total
  const month_total = month_countResult.total
  console.log('month_total', month_total)
  // 计算需分几次取
  const year_batchTimes = Math.ceil(year_total / 100)
  const month_batchTimes = Math.ceil(month_total / 100)
  const year_tasks = []
  const month_tasks = []
  let year_result = []
  let month_result = [] 
  let month_data = []
  let year_data = []
  //月如果有数据
  if(month_total != 0) {
    for (let j = 0; j < month_batchTimes; j++) {
      const month_promise = db.collection('car_record').skip(j * MAX_LIMIT).limit(MAX_LIMIT).where(month_options).get()
      month_tasks.push(month_promise)
    }
    console.log(month_tasks)
    // 承载所有读操作的 promise 的数组
    await Promise.all(month_tasks).then(res => {
      month_result = res.reduce((acc, cur) => {
        return acc.data.concat(cur.data)
      })
    })
    console.log(month_result)
    month_data = month_result.data.map((item, index) => {
      return {
        date: item.date,
        money: Number(item.freight) + Number(item.entry_fee)
      }
    })
  }
  //年如果有数据
  for (let i = 0; i < year_batchTimes; i++) {
    const year_promise = db.collection('car_record').skip(i * MAX_LIMIT).limit(MAX_LIMIT).where(year_options).get()
    year_tasks.push(year_promise)
  }
  console.log(year_tasks)
  // 承载所有读操作的 promise 的数组
  await Promise.all(year_tasks).then(res => {
    year_result = res.reduce((acc, cur) => {
      return acc.data.concat(cur.data)
    })
  })
  console.log(year_result)
  year_data = year_result.data.map((item, index) => {
    return {
      date: item.date,
      money: Number(item.freight) + Number(item.entry_fee)
    }
  })

  if(year_data || month_data) {
    return {
      code: 200,
      year_data,
      month_data
    }
  } else {
    return {
      code: 300,
      errMsg: '暂无数据'
    }
  }
}

function calculateDay(year, month) {
  var date = new Date(year, month - 1, '01')
  console.log('1', date)
  date.setDate(1)
  console.log('2', date)
  date.setMonth(date.getMonth() + 1)
  console.log('3', date)
  let cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24)
  console.log(cdate.getFullYear() + "年" + (Number(cdate.getMonth()) + 1) + "月最后一天的日期:" + cdate.getDate() + "日");
  return cdate.getDate()
}