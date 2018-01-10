<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>ElmentUI table</h2>
    <!--列表-->
    <template>
      <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column prop="id" label="ID" >
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" >
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="120" >
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="120" >
        </el-table-column>
        <el-table-column prop="birth" label="生日" width="120" >
        </el-table-column>
        <el-table-column prop="icon" label="头像" width="100">
          <template scope="scope">
            <img :src="scope.row.icon" alt="">
          </template>
        </el-table-column>
        <el-table-column prop="subName" label="别名" >
          <template scope="scope">
            <span v-for=" item in scope.row.subName">{{item.name}},</span>
          </template>
        </el-table-column>
        <el-table-column prop="addr" label="地址" min-width="180" sortable>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import {getUserList} from "../api/api.js"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'',
      loading:false,
      users:[]
    }
  },
  mounted(){
    this.getuser()
  },
  methods:{
    getuser(){
        getUserList(this.name).then((res)=>{
          this.users = res.data.users
        }).catch((err)=>{
          console.log(err)
        })
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
