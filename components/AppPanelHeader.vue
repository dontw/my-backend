<template>
  <Menu 
    class="menu" 
    mode="horizontal" 
    theme="light" 
    width="auto" 
    :active-name="routerName"
  >
    <h3>{{ $t(routerNameWithPage) }}</h3>
    <Submenu 
      class="submenu" 
      name="setting"
    >
      <template slot="title">
        <Icon 
          size="18" 
          type="settings"
        />
        系统设置
      </template>
      <i-menuItem 
        name="changePassword" 
        　@click.native="toChangePwd">修改管理员密码</i-menuItem>
      <i-menuItem 
        name="logout" 
        @click.native="onLogout">登出</i-menuItem>
    </Submenu>
  </Menu>
</template>
<script>
import { MenuItem } from "iview";
export default {
  components: {
    "i-menuItem": MenuItem
  },
  computed: {
    routerNameWithPage() {
      return (
        "page." +
        this.$route.path.split("/")[this.$route.path.split("/").length - 1]
      );
    },
    routerName() {
      return this.$route.path.split("/")[
        this.$route.path.split("/").length - 1
      ];
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    toChangePwd() {
      this.$router.push("/admin/changePassword");
    }
  }
};
</script>
<style lang="scss" scoped>
.menu {
  height: 100%;
  padding: 0 15px 5px 15px;
  h3 {
    height: 100%;
    float: left;
  }
}
.submenu {
  float: right;
}
</style>