<template>
    <header
    class="bg-green-graident h-250"
    >
    <DisplayXarge
    text="GOA Documentation"
    />

    </header>
</template>
<script>
 import DisplayXLarge from '../components/typography/DisplayXLarge'

export default {
    name: 'HomeLayout',
    components:{
        DisplayXLarge
    }
}
</script>

<style >
header{
    background: linear-gradient(179.9deg, #A0FFAB 23.23%, #94B5E3 99.68%);
}


</style>