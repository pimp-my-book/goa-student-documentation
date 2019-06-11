<template>
    <header
    class="bg-green-graident h-250"
    >
    <DisplayXLarge
    text="How can we help you?"
    class="text-white"
    />
    <FeatureText
    text="We have made articles for you to follow if you get stuck or do not understand how to do something. "
    />
    </header>
</template>
<script>
 import DisplayXLarge from '../components/typography/DisplayXLarge'
 import FeatureText from '../components/typography/FeatureText'

export default {
    name: 'HomeLayout',
    components:{
        DisplayXLarge,
        FeatureText
    }
}
</script>

<style >
header{
    background: linear-gradient(179.9deg, #A0FFAB 23.23%, #94B5E3 99.68%);
}


</style>