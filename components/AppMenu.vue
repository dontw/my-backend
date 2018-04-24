<template>
  <Menu 
    class="menu" 
    :active-name="currRoute" 
    :open-names="['users', 'orders', 'applications', 'products']" 
    theme="dark" 
    width="auto">
    <!-- MENU TITLE -->
    <div class="menu-title">
      <h2>{{ $t('page.userAll') }}</h2>
    </div>
    <!-- SUBMENU:USERS -->
    <Submenu name="users">
      <template slot="title">
        <Icon type="person"/>
        {{ $t('page.userManagement') }}
      </template>
      <!-- MENU ITEMS -->
      <i-menuItem 
        name="userAll" 
      >
        <span>{{ $t('page.userAll') }}</span>
      </i-menuItem>
    </Submenu>

    <!-- SUBMENU:APPS -->
    <Submenu name="applications">
      <!-- MENU TITLE -->
      <template slot="title">
        <Icon type="android-apps"/>
        {{ $t('page.applicationManagement') }}
      </template>
      <!-- MENU ITEMS -->
      <i-menuItem 
        name="recuperationSyStem" 
        
      >
        <span>{{ $t('page.recuperationSyStem') }}</span>
      </i-menuItem>
      <i-menuItem 
        name="healthPassport" 
      >
        <span>{{ $t('page.healthPassport') }}</span>
      </i-menuItem>
    </Submenu>

    <!-- SUBMENU:PRODUCTS -->
    <Submenu name="products">
      <!-- MENU TITLE -->
      <template slot="title">
        <Icon type="bag"/>
        {{ $t('page.productsManagement') }}
      </template>
      <!-- MENU ITEMS -->
      <i-menuItem 
        name="productList" 
      >
        <span>{{ $t('page.productList') }}</span>
      </i-menuItem>
    </Submenu>
  </Menu>
</template>
<script>
import { MenuItem } from "iview";
export default {
  components: {
    "i-menuItem": MenuItem
  }
};
</script>
<style lang="scss" scoped>
.menu {
  height: 100vh;
  overflow: auto;
}
.menu-title {
  color: #fff;
  padding: 0.8rem 0.8rem 0.2rem 0.8rem;
  height: 50px;
  cursor: pointer;
  h2 {
    font-weight: normal;
  }
}
</style>