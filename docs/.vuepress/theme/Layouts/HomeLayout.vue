<template>
<div>
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

    <div>
           <DisplayLarge
           text="Topics"
           class="text-center"
           />
    </div>
</div>
    
</template>
<script>
 import DisplayXLarge from '../components/typography/DisplayXLarge'
 import FeatureText from '../components/typography/FeatureText'
 import DisplayLarge from '../components/typography/DisplayLarge'

export default {
    name: 'HomeLayout',
    components:{
        DisplayXLarge,
        FeatureText,
        DisplayLarge
    }
}
</script>

<style >
header{
    background: linear-gradient(179.9deg, #A0FFAB 23.23%, #94B5E3 99.68%);
}


</style>