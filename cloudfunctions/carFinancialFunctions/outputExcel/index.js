const xlsx = require('node-xlsx');
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  try {
    console.log(event)
    let {data_arr} = event

    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
      : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
      .getDate();
    var dateStr = year + "-" + month + "-" + day;

    //1.定义表格的名字
    let excel_name = '驳货单' + dateStr + '_' + nowDate.getMilliseconds() + ".xlsx"
    //2.定义表内容
    let allData = []
    let row = ['id', '日期', '驳货单号', '出发地', '目的地', '运费', '进仓费', '合计'] //表头
    allData.push(row)
  
    data_arr.forEach((item, index) => {
      let arr = []
      arr.push(index + 1)
      arr.push(item.date)
      arr.push(item.delivery_code)
      arr.push(item.depature)
      arr.push(item.arrival)
      arr.push(item.freight)
      arr.push(item.entry_fee)
      arr.push(item.total)
      allData.push(arr)
    })
  
    //3. 把数据保存在excel中
    var buffer = await xlsx.build([{
      name: "sheet1",
      data: allData
    }])
  
    console.log(excel_name, buffer)

    //4. 把excel上传到云存储里
    return await cloud.uploadFile({
      cloudPath: excel_name,
      fileContent: buffer
    })
  } catch(e) {
    console.error(e)
    return e
  }
}