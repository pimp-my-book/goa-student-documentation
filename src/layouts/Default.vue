<template>
  <div class="layout">
    <NavigationBar/>
    <slot/>
    
    <Footer/>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import Footer from '@/components/Footer.vue'
import SmallCard from '~/components/SmallCard'
import FeatureText from '~/components/typography/FeatureText'

export default {
  name: 'Default',
  components:{
       NavigationBar,
       FeatureText,
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

body {
   margin:0;
  padding:0;
}


</style>


