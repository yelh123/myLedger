// components/file-uploader/index.js
Component({
  properties: {
    name: {
      type: String,
      value: ''
    },

    field_name: {
      type: String,
      value: ''
    },

    value: {
      type: Array,
      value: []
    }
  },
  behaviors: ["wx://form-field"],
  data: {

  },
  methods: {
    chooseFile() {
      var that = this
      wx.chooseMessageFile({
        count: 5,
        type: 'file',
        success: async function(res) {
          const tempFilePaths = res.tempFiles
          console.log(tempFilePaths)
          await that.uploadFile(tempFilePaths)
        },
        fail: function(err) {
          console.log(err)
        }
      })
    },
  
    async uploadFile(files) {
      var that = this
      let files_arr = []
      files.forEach((item, index) => {
        wx.cloud.uploadFile({
          cloudPath: item.name, // 上传至云端的路径
          filePath: item.path, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            let file = {
              fileID: res.fileID,
              fileName: item.name,
              imageSrc: that.processFileImage(item.name)
            }
            files_arr.push(file)
            that.setData({
              value: files_arr
            })
          },
          fail: console.error
        })    
      })
    },
  
    processFileImage(name) {
      const idx = name.lastIndexOf('.')
      const type = name.substring(idx + 1)
      console.log(type)
      let src = ""
      switch(type) {
        case 'xls':
          src = "../../images/xls.png"
          break
        case 'xlsx':
          src = "../../images/xls.png"
          break
        case 'doc':
          src = "../../images/doc.png"
          break
        case 'docx':
          src = "../../images/doc.png"
          break
        default:
          src = "../../images/default.png"
          break
      }
      return src
    }
  }
})
