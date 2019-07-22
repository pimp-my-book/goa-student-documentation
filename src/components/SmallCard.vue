<template>
<div class= "shadow-lg x:w-4/5 x:h-full xl:h-200 Card rounded-lg lg:mr-10">
 
  <div>
   <DisplaySmall 
   class="mt-5  text-center text-bold xl:text-4xl"
   :text="cardTitle"
   />
  </div>
  <div>
   <FeatureText
   class="mt-5 p-3 text-center xl:text-2xl"
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

<style>
.Card:hover {
    -webkit-animation: scale-up-bottom 0.4s ease-out both;
	        animation: scale-up-bottom 0.4s ease-out both;
}

@-webkit-keyframes scale-up-bottom {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
}
@keyframes scale-up-bottom {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
}
</style>


