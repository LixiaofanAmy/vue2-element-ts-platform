<template>
  <div class="layout-main-inner">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutMain',
})
</script>
<style scoped>
.layout-main-inner {
  height: 100%;
  overflow-y: auto;
}
</style>
