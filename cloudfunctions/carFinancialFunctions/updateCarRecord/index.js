const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

exports.main = async (event, context) => {
  console.log(event)
  event.record['open_id'] = event.open_id
  try {
    let record = event.record
    let id = event.id
    db.collection('car_record').doc(id).set({
      data: record,
      success: function(res) {
        console.log(res)
        return res
      }
    })
  } catch (e) {
    console.error(e)
    return e
  }

}