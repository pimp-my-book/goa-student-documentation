<template>
  <Layout>
   <header
    class="bg-green-graident h-250 text-center"
    >
    <DisplayXLarge
    text="How can we help you?"
    class="text-white p-5"
    />
    <FeatureText
    text="We have made articles for you to follow if you get stuck or do not understand how to do something. "
    />
</header>
   
  </Layout>
</template>

<script>
import FeatureText from '~/components/typography/FeatureText.vue'
import DisplayXLarge from '~/components/typography/FeatureText.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components:{
    DisplayXLarge,
    FeatureText
  }
}
</script>

<style>
header{
    background: linear-gradient(179.9deg, #A0FFAB 23.23%, #94B5E3 99.68%);
}
.Card__Grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
}
</style>
