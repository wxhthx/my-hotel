<template lang="jade">
  div.container
    div.hotel-container
        form.hotel-register
            div.form-group.row
                label.col-2.col-form-label.align-left(for="name") 用户名
                div.col-sm-9
                    input.form-control.hotel-input(type="text" id="name" v-model="register.name" required maxlength="5")
            div.form-group.row
                label.col-2.col-form-label.align-left(for="password") 密码
                div.col-sm-9
                    input.form-control.hotel-input(type="password" id="password" v-model="register.password")
            div.form-group.row
                label.col-2.col-form-label.align-left(for="verifyPassword") 确认密码
                div.col-sm-9
                    input.form-control.hotel-input(type="password" id="verifyPassword" v-model="register.verifyPassword")
            div.form-group.row
                label.col-2.col-form-label.align-left(for="password") 性别
                div.col-sm-9
                    input.hotel-input(type="radio" id="man" value=0 v-model="register.sex")
                    label.col-2.col-form-label.align-left(for="man") 男
                    input.hotel-input(type="radio" id="woman" value=1 v-model="register.sex")
                    label.col-2.col-form-label.align-left(for="man") 女
            div.form-group.row
                button.btn.btn-primary.col-12.btn-login-submit(type="submit" @click="submit") 注册
</template>
<script>
export default {
  data () {
      return {
        register: {
            name: '',
            password: '',
            verifyPassword: '',
            sex: 0
        }
      }
  },
  methods: {
    submit: function () {
        this.$router.push('hotel/index')
    }
  }
}
</script>
<style lang="scss" scoped>
    .hotel-container {
        margin: 200px 270px;
    }
</style>
