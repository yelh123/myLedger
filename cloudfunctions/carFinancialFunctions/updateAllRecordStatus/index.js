const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('car_record').where({
      status: _.exists(false).or(_.eq('0'))
    }).update({
      data: {
        status: '1'
      }
    })
  } catch(e) {
    console.error(e)
    return(e)
  }
}