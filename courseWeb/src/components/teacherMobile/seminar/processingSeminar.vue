<template>
  <div class="root">
    <div class="head1">
      <span><Icon type="ios-arrow-back" size="large"/></span>
      <span style="width:85%">{{name}}-讨论课</span>
      <span><Icon type="md-add" size="large"/></span>
    </div>
    <div class="head2">
      <span style="width:70%;margin-left: 15%">{{seminar}}</span>
      <span style="height: 25px;width:15%"><img src="../../../assets/pause.jpg" style="width:25px;height: 25px" @click="pauseDialogVisible=true"></span>
    </div>
    <div class="main">
      <div class="main1">
        <span style="width:70%;letter-spacing:1px;">展示时间：{{showTime}}，被提问时间：{{askTime}}</span>
        <span style="margin-right: 5%;">已有{{askTimes}}位同学提问</span>
      </div>
      <div class="main2">
        <div style="width: 25%;height: 100%;background: #fff">
          <div class="group1">{{showGroup[0].num}}</div>
          <div class="group2">{{showGroup[1].num}}</div>
          <div class="group1">{{showGroup[2].num}}</div>
          <div class="group2">{{showGroup[3].num}}</div>
          <div class="group2">{{showGroup[4].num}}</div>
          <div class="group2">{{showGroup[5].num}}</div>
        </div>
        <div style="width: 55%;height: 100%;display: flex;align-items: center;justify-content: center;flex-direction: column">
          <div class="score">{{currentType==1?"展示分数":"提问分数"}}</div>
          <div class="score-input"><input class="input" placeholder="输入成绩" v-model="currentType==1?showGroup[chooseShowing].score:askGroup[chooseAsking].score"></input></div>
        </div>
        <div style="width: 20%;height: 100%;background: #fff;">
          <div class="asking">{{askGroup[0].group}}  {{askGroup[0].name}}</div>
          <div class="asking">{{askGroup[1].group}}  {{askGroup[1].name}}</div>
          <div class="asking">{{askGroup[2].group}}  {{askGroup[2].name}}</div>
          <div class="asking">{{askGroup[3].group}}  {{askGroup[3].name}}</div>
          <div class="asking">{{askGroup[4].group}}  {{askGroup[4].name}}</div>
          <div class="asking">{{askGroup[5].group}}  {{askGroup[5].name}}</div>
          <div class="asking">{{askGroup[6].group}}  {{askGroup[6].name}}</div>
          <div class="asking">{{askGroup[7].group}}  {{askGroup[7].name}}</div>
          <div class="asking">{{askGroup[8].group}}  {{askGroup[8].name}}</div>
          <div class="asking">{{askGroup[9].group}}  {{askGroup[9].name}}</div>
        </div>
      </div>
      <div class="main3">
        <button class="button1"><span>{{currentType==1?"抽取提问":"下个提问"}}</span></button>
        <button class="button2"><span>下组展示</span></button>
      </div>
    </div>
    <el-dialog :visible.sync="pauseDialogVisible" :show-close="false" top="40%" width="60%" center>
      <div slot="title" style="color:red">
        <Icon type="md-information-circle" size="35"/>
      </div>
      <div style="text-align: center;font-size: 18px;color: #000;">
        <p>确认暂停</p>
        <p>{{name}}</p>
        <p>{{seminar}}讨论课</p>
      </div>
      <div slot="footer">
        <button class="textButton" onclick="window.location.href='../../seminar/MTpauseSeminar'">确认</button>
        <button class="textButton" @click="pauseDialogVisible=false">取消</button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="endDialogVisible" :show-close="false" top="40%" width="60%" center>
      <div slot="title" style="color:red">
        <Icon type="md-information-circle" size="35"/>
      </div>
      <div style="text-align:center ;font-size: 18px;color: #000;">
        <p>讨论课已结束</p>
        <p>请设置书面报告截止时间</p>
        <DatePicker type="datetime" placeholder="选择日期和时间" style="width: 100%;margin-top: 5%" size="small"></DatePicker>
      </div>
      <div slot="footer">
        <button class="textButton" onclick="confirmEnd">确认</button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "processingSeminar",
    data() {
      return {
        name:'OOAD',
        seminar:'业务流程分析',
        //当前类型(提问/展示) 1表示展示 0表示提问
        currentType:'0',

        //当前展示时间
        showTime:'5:00',
        //被提问的时间
        askTime:'1:00',
        //被提问的次数
        askTimes:'1',

        //展示的小组
        showGroup:[{
          order:'1',
          num:'1-2',
          score:'1',
        },
          {
            order:'2',
            num: '1-4',
            score: '',
          },
          {
            order:'3',
            num: '1-3 ▶',
            score: '',
          },
          {
            order:'4',
            num: '1-5',
            score: '',
          },
          {
            order:'5',
            num: '1-1',
            score: '',
          },
          {
            order:'6',
            num: '1-6',
            score: '',
          }],

        //提问的人
        askGroup:[{
          group:'1-1',
          name:'燕小六',
          score:'3',
        },
          {
            group:'1-2',
            name:'赵四',
            score:'',
          },
          {
            group:'1-4',
            name:'钱六',
            score:'',
          },
          {
            group:'2-3',
            name:'王楞奇',
            score:'',
          },
          {
            group:'',
            name:'',
            score:'',
          },
          {
            group:'',
            name:'',
            score:'',
          },
          {
            group:'',
            name:'',
            score:'',
          },
          {
            group:'',
            name:'',
            score:'',
          },
          {
            group:'',
            name:'',
            score:'',
          },
          {
            group:'',
            name:'',
            score:'',
          }],
        chooseShowing:'0',
        chooseAsking:'0',
        pauseDialogVisible:false,
        endDialogVisible:true,
      }
    },
    methods:{
      confirmEnd:function(){
      }
    },
    created(){
      let _this=this;
      _this.confirmEnd();
    }
  }
</script>

<style scoped>
  .head1{
    text-align: center;
    background: #96C864;
    width:100%;
    height: 8%;
    border:1px solid transparent;
    font-family:思源黑体;
    font-size: 19px;
    color:#000;
    letter-spacing:1px;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  .head2{
    text-align: center;
    background: #fff;
    width:100%;
    height: 8%;
    font-size: 19px;
    color:#000;
    letter-spacing:1px;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  .root {
    height: 100%;
    width: 100%;
    background: #f2f2f2;
  }
  .main{
    height: 84%;
    width:100%;
    background: #f2f2f2;
  }
  .main1{
    height: 7%;
    width:100%;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    font-size:14px;
    margin-left: 3%;
    color:#0B710A;
  }
  .main2{
    height: 57%;
    width:100%;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  .main3{
    height: 36%;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .score{
    font-size: 20px;
  }
  .score-input{
    width:80%;
    height:50%;
    border: #BBBBBB solid 1px;
    margin-bottom:5%;
    margin-top:15%;
    background: #FFFFFF;
  }
  .input{
    background-color:#FFFFFF;
    border: #BBBBBB solid 1px;
    height:60%;
    width:60%;
    margin-top: 15%;
    margin-left: 10%;
    font-size: 55px;
    text-align: center;
  }
  .button1 {
    display: inline-block;
    background-color: #96c864;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    /*padding: 20px;*/
    height: 20%;
    width: 50%;
    margin-top: 3%;
    border-radius:6px
  }
  .button2 {
    display: inline-block;
    background-color: #ffffff;
    border: solid 1px #BBBBBB;
    color: #96C864;
    text-align: center;
    font-size: 18px;
    /*padding: 20px;*/
    height: 20%;
    width: 50%;
    margin-top: 3%;
    border-radius:6px
  }
  .input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { /* WebKit*/
    color:#CCCCCC;
    font-size:20px;
    padding: 5%;
  }
  .group1{
    font-size: 14px;
    height: 16%;
    width: 100%;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  .group2{
    font-size: 14px;
    height: 17%;
    width: 100%;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  .asking{
    height:10%;
    width:100%;
    font-size:13px;
    display: flex;
    align-items: center;
    margin-left: 5%;
    border-bottom:1px solid #f2f2f2;
    font-weight: bold;
  }
  .textButton{
    border: 0px;
    background: #fff;
    font-size:15px;
    color:#259B24;
    width: 30%;
  }
</style>
