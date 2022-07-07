<template>
  <div>
    <company-info></company-info>
    <menu-list></menu-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CompanyInfo from './CompanyInfo.vue'
import MenuList from './MenuList.vue'

export default Vue.extend({
  name: 'LayoutAside',
  components: {
    CompanyInfo,
    MenuList,
  },
})
</script>

<style></style>
