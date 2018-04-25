<template>
  <Menu 
    class="menu" 
    
    :open-names="['users', 'orders', 'applications', 'products']" 
    theme="dark" 
    width="auto">
    <!-- :active-name="currRoute"  -->
    <!-- MENU TITLE -->
    <div class="menu-title">
      <h2>{{ $t('myBackend') }}</h2>
    </div>
    <!-- SUBMENU:USERS -->
    <Submenu name="users">
      <template slot="title">
        <Icon type="person"/>
        {{ $t('SUBMENU') }}
      </template>
      <!-- MENU ITEMS -->
      <i-menuItem 
        name="userAll" 
      >
        <span>{{ $t('OPTION') }}</span>
      </i-menuItem>
    </Submenu>

    <!-- SUBMENU:APPS -->
    <Submenu name="applications">
      <!-- MENU TITLE -->
      <template slot="title">
        <Icon type="android-apps"/>
        {{ $t('SUBMENU') }}
      </template>
      <!-- MENU ITEMS -->
      <i-menuItem 
        name="recuperationSyStem" 
        
      >
        <span>{{ $t('OPTION') }}</span>
      </i-menuItem>
      <i-menuItem 
        name="healthPassport" 
      >
        <span>{{ $t('OPTION') }}</span>
      </i-menuItem>
    </Submenu>

    <!-- SUBMENU:PRODUCTS -->
    <Submenu name="products">
      <!-- MENU TITLE -->
      <template slot="title">
        <Icon type="bag"/>
        {{ $t('SUBMENU') }}
      </template>
      <!-- MENU ITEMS -->
      <i-menuItem 
        name="productList" 
      >
        <span>{{ $t('OPTION') }}</span>
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