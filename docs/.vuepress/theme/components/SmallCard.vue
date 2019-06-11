<template>
<div class= "shadow-lg x:w-4/5 x:h-full Card rounded-lg lg:mr-10">
 
  <div>
   <DisplaySmall 
   class="mt-5 text-blue-dark"
   :text="cardTitle"
   />
  </div>
  <div>
   <FeatureText
   class="mt-5 p-3"
   :text="cardText"
   small
   />

  </div>
</div>
</template>

<script>
import DisplaySmall from "./Typography/DisplaySmall"
import FeatureText from "./Typography/FeatureText"

export default {
    name: 'SmallCard',
    components:{
    DisplaySmall,
    FeatureText
    },
    props: {
       
        cardTitle: String,
        cardText: String
    }
}
</script>

<style>
.Card{
    width: 300px;
    height: 300px;
}


</style>

