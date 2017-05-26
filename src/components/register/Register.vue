<template lang="jade">
  div.container
    div.hotel-container.mobile-hotel-container
        form.hotel-register
            div.form-group.row
                label.col-2.col-form-label.align-left(for="name" ) 用户名
                div.col-sm-9
                    input.form-control.hotel-input(type="text" id="name" v-model="name" v-validate:red="" @input="changeName" v-bind:class="{'invalid': dirty.name && invalid.name != ''}")
            div.form-group.row
                label.form-control(v-if="dirty.name && invalid.name != ''") {{invalid.name}}
            div.form-group.row
                label.col-2.col-form-label.align-left(for="password") 密码
                div.col-sm-9
                    input.form-control.hotel-input(type="password" id="password" v-model="password")
            div.form-group.row
                label.col-2.col-form-label.align-left(for="verifyPassword") 确认密码
                div.col-sm-9
                    input.form-control.hotel-input(type="password" id="verifyPassword" v-model="verifyPassword")
            div.form-group.row
                label.col-2.col-form-label.align-left(for="password") 性别
                div.col-sm-9
                    input.hotel-input(type="radio" id="man" value=0 v-model="sex")
                    label.col-2.col-form-label.align-left(for="man") 男
                    input.hotel-input(type="radio" id="woman" value=1 v-model="sex")
                    label.col-2.col-form-label.align-left(for="man") 女
            div.form-group.row
                button.btn.btn-primary.col-12.btn-login-submit(type="submit" @click="submit") 注册
</template>
<script>
// import * as validatefuns from '../../validate/functions/functions'
import validateRequired from '../../validate/functions/functions'
export default {
  data () {
      return {
        name: '',
        password: '',
        verifyPassword: '',
        sex: 0,
        dirty: {
            name: false,
            password: false,
            verifyPassword: false,
            sex: false
        },
        invalid: {
            name: '',
            password: '',
            verifyPassword: '',
            sex: ''
        }
      }
  },
  methods: {
    submit: function () {
        this.$router.push('hotel/index')
    },
    changeName: function () {
        // this.dirty.name = true
        // for (let index in validatefuns) {
        //     let rst = validatefuns[index]
        //     if (rst) {
        //         this.invalid.name = rst
        //         return
        //     }
        // }
        // let rst = validateRequired(this.register.name)
        if (this.name.length > 5) {
            this.invalid.name = '大于5'
        }
    }
  }
}
</script>
<style lang="scss" scoped>
    .hotel-container {
        margin: 200px 270px;
    }
    input.invalid {
        border-bottom: 2px solid #F44336;
    }
    @media all and (max-width: 600px), (orientation:portrait){
        .mobile-hotel-container {
            margin: 0;
            margin-top: 400px;
        }
    }
</style>
