const getOpenId = require('./getOpenId/index')
const getCarRecordList = require('./getCarRecordList/index')
const addCarRecord = require('./addCarRecord/index')
const getCarChartData = require('./getCarChartData/index')
const outputExcel = require('./outputExcel/index')
const deleteCarRecord = require('./deleteCarRecord/index')
const updateCarRecord = require('./updateCarRecord/index')

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getOpenId':
      return await getOpenId.main(event, context)
    case 'getCarRecordList':
      return await getCarRecordList.main(event, context)
    case 'addCarRecord':
      return await addCarRecord.main(event, context)
    case 'getCarChartData':
      return await getCarChartData.main(event, context)
    case 'outputExcel':
      return await outputExcel.main(event, context)
    case 'deleteCarRecord':
      return await deleteCarRecord.main(event, context)
    case 'updateCarRecord':
      return await updateCarRecord.main(event, context)
  }
}