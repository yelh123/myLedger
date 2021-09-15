const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const MAX_LIMIT = 100
  const countResult = await db.collection('car_record').count()
  const total = countResult.total
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
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('car_record').skip(i * MAX_LIMIT).limit(MAX_LIMIT).where(where_options).get()
    tasks.push(promise)
  }
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
  // // 返回数据库查询结果
  // return await db.collection('car_record').where({
  //   open_id: event.open_id
  // }).get().then(res => {
  //   return res.data
  // })
}