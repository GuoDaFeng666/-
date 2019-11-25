<template>
  <div class="home">
    <el-container>
    <el-header><div class="header"><div class="title">私脸定治后台管理系统</div><div class="name"><div>姓名：{{name}}</div><div>账号：{{username}}</div></div><div> <el-button @click="logout" type="primary" icon="el-icon-right" circle></el-button></div></div></el-header>
    <el-container>
        <el-aside width="200px" style="background-color:#fff">
        <el-menu :default-openeds="['1','2','3','4']" :unique-opened="true" router :default-active="$route.path" >
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-shopping-bag-1"></i>产品管理</template>
            <el-menu-item-group>
              
              <el-menu-item index="/admin/productlist">产品列表</el-menu-item>
              
            </el-menu-item-group>
            
           
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>订单管理</template>
            <el-menu-item-group>
              
              <el-menu-item index="/admin/orderlist">订单管理</el-menu-item>
             
            </el-menu-item-group>
            
           
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-user"></i>用户管理</template>
            <el-menu-item-group>
              
              <el-menu-item index="/admin/userlist">用户列表</el-menu-item>
              
            </el-menu-item-group>
            
           
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              
              <el-menu-item index="4-1">选项1</el-menu-item>
              
            </el-menu-item-group>
            
           
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
         <router-view  v-if="isRouterAlive"/>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
    provide(){
        return{
           reload:this.reload
        }
    },
  computed:{
    name:function(){
      return localStorage.getItem('admin_name')
    },
    username:function(){
      return localStorage.getItem('username')
    }
  },
  components: {
    HelloWorld
  },
   data() {
      
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        isRouterAlive:true,
        tableData: Array(20).fill(item),
        val:''
      }
    },
    methods:{
       reload(){
           this.isRouterAlive =false;
           this.$nextTick(function(){
                this.isRouterAlive=true
           })
        },
 
      logout:function(){
        localStorage.removeItem('token')
        this.$message({
           message: '已退出账号',
           type: 'success'
        })
        this.$router.push('/admin/login')
      }
      // sub:function(){
      //   console.log(this.val)
      // }
    }
}
</script>
<style lang="less" scoped>
.name{
  display:flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
 
  div{
     color:#555;
  font-weight: bold;
  font-size: 12px;
    line-height: 20px;
  }

}
  .home{
      height:100%;
      .header{
        display: flex;
        .title{
          flex: 1;
          font-weight: bold;
        }
      }
  }
   .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    
  }
  .el-container{
height:100%
  }
  body > .el-container {
    margin-bottom: 40px;
    
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
