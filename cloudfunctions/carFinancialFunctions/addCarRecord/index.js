const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  event.record['open_id'] = event.open_id
  // 返回数据库查询结果
  return await db.collection('car_record').add({
    data: event.record
  }).then(res => {
    return res
  }).catch(err => {
    return err
  })
}