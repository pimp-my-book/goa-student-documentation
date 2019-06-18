<template>
  <div class="layout">
    <NavigationBar/>
    <slot/>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'
export default {
  name: 'Default',
  components:{
       NavigationBar
  }
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>



</style>
