<template>
  <div class="login_backgournd">
    <h1 class="title">{{ $t('test') }}</h1>
    <Card
      class="card"
      shadow
    >
      <h3 class="card__title">{{ $t('login.title') }}</h3>
      <form @submit.prevent="onSubmit">
        <p>{{ $t('login.acc') }}</p>
        <i-input
          @keyup="loginTyping(user,pwd)"
          v-model.trim="user"
          class="input"
          type="text"
          :placeholder="$t('login.accPlaceholder')"
          size="large"
          :maxlength="20"
        >
          <span slot="prepend">
            <Icon
              class="icon"
              type="person"
              color="#CCCCCC"
              size="20"
            />
          </span>
        </i-input>
        <p>{{ $t('login.pwd') }}</p>
        <i-input
          @keyup="loginTyping(user,pwd)"
          v-model.trim="pwd"
          class="input"
          :class="{'has-error':false}"
          type="password"
          :placeholder="$t('login.pwdPlaceholder')"
          size="large"
          :maxlength="10"
        >
          <span slot="prepend">
            <Icon
              class="icon"
              type="key"
              color="#CCCCCC"
              size="20"
            />
          </span>
        </i-input>
        <div class="card__bottom-wrap">
          <div class="message-wrap">
            <p
              class="message message--success"
              v-if="successMsgStatus"
            >
              <Icon
                type="checkmark-circled"
                size="16"
              />
              {{ successMsg }}
            </p>
            <p
              class="message message--error"
              v-if="failMsgStatus">
              <Icon
                type="android-warning"
                size="18"
              />
              {{ failMsg }}
            </p>
          </div>
          <div class="lang-wrap">
            <nuxt-link
              :to="switchLocalePath('en')"
              tag="a"
            >
              English
            </nuxt-link>
            <nuxt-link
              :to="switchLocalePath('tw')"
              tag="a">
              中文
            </nuxt-link>
          </div>
          <Button
            class="button"
            size="large"
            type="primary"
            html-type="submit"
            :disabled="disableStatus"
            :loading="loginStatus"
            long
          >
            {{ $t('login.submit') }}
          </Button>
        </div>
      </form>
    </Card>
  </div>
</template>
<script>
export default {
    mounted() {},
    data() {
        return {
            loginStatus: false,
            disableStatus: false,
            successMsgStatus: false,
            successMsg: '',
            failMsgStatus: false,
            failMsg: '',
            user: '',
            pwd: ''
        }
    },
    methods: {
        onSubmit() {
            this.$router.push('admin')
            //turn off error msg
            // this.toggleErrMsg(null, false)
            // this.loginStatus = true
            // auth user
            // this.$store
            //     .dispatch('auth/authUser', {
            //         user: this.user,
            //         pwd: md5(this.pwd)
            //     })
            //     .then(result => {
            //         // if ok, pop success msg then go to admin page
            //         if (result.code === 'ok') {
            //             this.toggleSuccessMsg('恭喜登录成功！', true)
            //             setTimeout(() => {
            //                 this.$router.push('/admin')
            //             }, 2000)
            //             return
            //         }
            //         // if there's error code, pop error msg
            //         if (result.code) {
            //             this.toggleErrMsg(this.errCodeMsg(result.code), true)
            //             return
            //         }
            //     })
        },
        //侦测是否所有输入格均被输入内容，若都有输入内容，改变登录鈕状态
        loginTyping(user, pwd) {
            console.log(user, pwd)
            user && pwd
                ? (this.disableStatus = false)
                : (this.disableStatus = true)
        },
        //密码格式验证
        userPwdValidate(pwd) {
            let re = /^[a-zA-Z0-9]{6,10}$/
            if (!re.test(pwd)) {
                this.toggleErrMsg('密码输入错误', true)
                return false
            }
            return true
        },
        toggleErrMsg(errMsg, val) {
            this.failMsg = errMsg
            this.failMsgStatus = val
            this.loginStatus = false
        },
        toggleSuccessMsg(msg, val) {
            this.successMsg = msg
            this.successMsgStatus = val
        }
    }
}
</script>
<style lang="scss" scoped>
.login_backgournd {
    height: 100vh;
    width: 100vw;
    background: #f5f7f9;
    display: flex;
    align-items: center;
    justify-content: top;
    flex-direction: column;
}
.title {
    font-weight: normal;
    margin: 5% 0 15px 0;
}
.card {
    padding: 15px 15px 30px 15px;
    width: 350px;
    &__title {
        text-align: center;
        margin-bottom: 5px;
        font-weight: normal;
    }
    &__bottom-wrap {
        margin-top: 50px;
    }
}
.message-wrap {
    height: 50px;
}
// .message {
//     text-align: center;
//     margin-bottom: 15px;
//     &--error {
//         color: @error-color;
//         animation: bounceIn 0.75s;
//     }
//     &--success {
//         color: @success-color;
//         animation: fadeInDown 0.75s;
//     }
// }
form {
    width: 100%;
}
p {
    margin-bottom: 3px;
}
.icon {
    width: 25px;
}
.input {
    margin-bottom: 15px;
}
// .has-error {
//     box-shadow: 0 0 0 1px @error-color;
//     border-radius: 4px;
//     transition: 0.3s;
// }
.lang-wrap {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
}
</style>
