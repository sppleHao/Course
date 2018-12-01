<template>
    <div>
      <mt-button type="primary" @click="showModal">提交PPT</mt-button>
      <mt-button type="primary" @click="showModal">提交书面报告</mt-button>
      <mt-popup v-model="popupVisible">
        <div>
          <mt-button @click="uploadFile">上传文件</mt-button>
          <mt-progress :value="percent" :bar-height="10">
            <div slot="end">{{Math.ceil(percent)}}%</div>
          </mt-progress>
        </div>
      </mt-popup>
    </div>
</template>

<script>
    import {Popup} from 'mint-ui'
    import axios from 'axios'
    export default {
        name: "SeminarSignUp",
        data() {
          return{
            popupVisible:false,
            percent:10
          }
        },
        methods:{
          showModal: function () {
            this.popupVisible= true
          },
          refreshProcess: function (progressEvent) {
            const _this =this
            let loaded = progressEvent.loaded
            let total = progressEvent.total
            _this.$nextTick(()=>{
              _this.persent = (loaded/total) * 100
            })
          },
          uploadFile: function (file) {
            // axios({
            //   url:'',
            //   method:'post',
            //   onUploadProgress:function (progressEvent) {
            //     if (progressEvent.lengthComputable){
            //         this.refreshProcess(progressEvent)
            //     }
            //   },
            //   data:file,
            // }).then((res)=>{
            //   if (res.status =='200'){
            //     console.log('上传成功')
            //   }
            // }).catch((error)=>{
            //   console.log(error)
            // })

            
          }
        }
    }
</script>

<style scoped>

</style>
