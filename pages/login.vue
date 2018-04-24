<template>
  <div class="login_backgournd">
    <h1 class="title">{{ $t('myBackend') }}</h1>
    <Card
      class="card"
      shadow
    >
      <h3 class="card__title">{{ $t('login.title') }}</h3>
      <form @submit.prevent="onSubmit">
        <p>{{ $t('login.acc') }}</p>
        <i-input
          v-model.trim="email"
          class="input"
          type="text"
          :placeholder="$t('login.accPlaceholder')"
          size="large"
          required
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
          v-model.trim="password"
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
      successMsg: "",
      failMsgStatus: false,
      failMsg: "",
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.email && !this.password)
        return this.$Message.warning(this.$t("message.login"));
      this.$store
        .dispatch("auth/authenticateUser", {
          email: this.email,
          password: this.password
        })
        .then(result => {
          if (result.status === "ok") return this.$router.push("admin");
          if (result.status === "error")
            return this.$Message.warning(result.message);
        });
    },

    toggleErrMsg(errMsg, val) {
      this.failMsg = errMsg;
      this.failMsgStatus = val;
      this.loginStatus = false;
    },

    toggleSuccessMsg(msg, val) {
      this.successMsg = msg;
      this.successMsgStatus = val;
    }
  }
};
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
