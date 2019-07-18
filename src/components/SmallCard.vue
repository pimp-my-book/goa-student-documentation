<template>
<div class= "shadow-lg x:w-4/5 x:h-full xl:h-500 Card rounded-lg lg:mr-10">
 
  <div>
   <DisplaySmall 
   class="mt-5  text-center text-bold"
   :text="cardTitle"
   />
  </div>
  <div>
   <FeatureText
   class="mt-5 p-3 xl:text-2xl"
   :text="cardText"
   small
   />

  </div>
</div>
</template>

<script>
import DisplaySmall from "./typography/DisplaySmall"
import FeatureText from "./typography/FeatureText"
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


