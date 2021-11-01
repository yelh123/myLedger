const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    let id = event.id
    db.collection('car_record').doc(id).remove({
      success: function(res) {
        return res
      }
    })
  } catch (e) {
    console.error(e)
    return e
  }

}