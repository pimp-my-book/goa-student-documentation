<template>
  <div class="layout">
    <NavigationBar/>
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'
import Footer from '~/components/Footer.vue'
import SmallCard from '~/components/SmallCard'
export default {
  name: 'Default',
  components:{
       NavigationBar,
       
       Footer
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
