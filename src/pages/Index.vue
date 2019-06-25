<template>
  <Layout>
   <header
    class="h-250 text-center "
    >
    <DisplayXLarge
    text="How can we help you?"
    class="text-white p-5 "
    />
    <FeatureText
    text="We have made articles for you to follow if you get stuck or do not understand how to do something. "
    />
</header>
   



   <div>
           <DisplayLarge
           text="Topics"
           class="text-center"
           />
           
           <div class="Card__Grid ">

            <div 
            v-for="item in $page.docs.edges"
            :key="item.node.id"
            >
                <router-link 
                class="no-underline text-black"
                :to="item.node.path"
                target="_blank"
                >
               <SmallCard
               :cardTitle="item.node.title"
               :cardText="item.node.excerpt"
               class="ml-16"
               />
                </router-link>
               
               
           </div> 
               
           </div>
    </div>


  </Layout>
</template>

<script>
import FeatureText from '~/components/typography/FeatureText.vue'
import DisplayXLarge from '~/components/typography/DisplayXLarge.vue'
import SmallCard from '~/components/SmallCard'
import DisplayLarge from '~/components/typography/DisplayLarge.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components:{
    DisplayXLarge,
    FeatureText,
    SmallCard,
    DisplayLarge
  }
}
</script>

<page-query>
query Docs {
  docs: allArticle{
    edges{
      node{
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

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
