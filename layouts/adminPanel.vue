<template>
  <div>
    <div class="layout">
      <Layout :style="{minHeight: '100vh'}">
        <Sider 
          breakpoint="md" 
          :collapsed-width="78">
          <!-- MENU -->
          <AppMenu/>
          <!-- CONTENT -->
        </Sider>
        <Layout :style="{minHeight: '100%'}">
          <Header class="header">
            <AppPanelHeader/>
          </Header>
          <Content :style="{padding: '16px'}">
            <Card 
              shadow 
              :style="{minHeight:'88vh', padding:'5px'}">
              <nuxt/>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
import AppMenu from "~/components/AppMenu";
import AppPanelHeader from "~/components/AppPanelHeader";
export default {
  components: {
    AppMenu,
    AppPanelHeader
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0;
  height: 50px;
}
</style>