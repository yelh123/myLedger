const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const MAX_LIMIT = 100
  let options = {}
  let {open_id, searchInput, start_date, end_date, depature, arrival} = event
  const _ = db.command
  let delivery_code_options = {},
      contact_options = {},
      date_options = {},
      depature_options = {},
      arrival_options = {}
  // 判断搜索条件
  if(searchInput) {
    let flag = searchInput.match('^[A-Za-z0-9]+$')
    if(flag) {
      delivery_code_options = {
        delivery_code: searchInput
      }
    } else {
      contact_options = {
        contact: searchInput
      }
    }
  }
  if(start_date && end_date) {
    date_options = {
      date: _.gt(start_date).and(_.lt(end_date))
    }
  }
  if(depature) {
    depature_options = {
      depature: _.eq(depature)
    }
  }
  if(arrival) {
    arrival_options = {
      arrival: _.eq(arrival)
    }
  }
  let where_options = Object.assign({
    open_id: open_id
  }, delivery_code_options, contact_options, date_options, depature_options, arrival_options)
  const countResult = await db.collection('car_record').where(where_options).count()
  const total = countResult.total
  console.log(total)
  if(total) {
    // 计算需分几次取
    const batchTimes = Math.ceil(total / 100)
    // 承载所有读操作的 promise 的数组
    const tasks = []
    for (let i = 0; i < batchTimes; i++) {
      const promise = db.collection('car_record').skip(i * MAX_LIMIT).limit(MAX_LIMIT).where(where_options).get()
      tasks.push(promise)
    }
    console.log('tasks', tasks)
    // 等待所有
    let all = await Promise.all(tasks).then(res => {
      return res.reduce((acc, cur) => {
        console.log('acc', acc)
        console.log('cur', cur)
        return acc.data.concat(cur.data)
      })
    })
    let allData = all.data
    allData.sort((a, b) => {
      let a_date = new Date(a.date).getTime()
      let b_date = new Date(b.date).getTime()
      return a_date - b_date
    })
    console.log(allData)
    return {
      code: 200,
      data: allData,
      errMsg: all.errMsg
    }
  } else {
    return {
      code: 300,
      errMsg: '暂无数据'
    }
  }
}