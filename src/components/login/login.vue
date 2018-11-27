<template>
  <div class="login-form1">
<el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
    <el-form-item label="用户名">
      <el-input v-model="formdata.username"></el-input>
     </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formdata.password"></el-input>
      <el-button class="login-button" type="primary" @click.prevent="login">登录</el-button>
    </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$axios.post('login', this.formdata).then(res => {
        const data = res.data
        const {
          meta: { status, msg }
        } = data
        if (status === 200) {
          console.log(res)
          const token = data.data.token
          sessionStorage.setItem('token', token)
          this.$message.success(msg)
          this.$router.push('/home')
        } else {
          this.$message.error(msg)
        }
      })
    }
  }
}
</script>
<style>
.login-form1 {
  display: flex;
  background-color: #324152;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.login-form1 .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login-form1 .login-form .login-button {
  width: 100%;
}
</style>
