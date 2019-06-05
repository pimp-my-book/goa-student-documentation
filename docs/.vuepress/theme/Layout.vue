<template>
<div>
    <NavigationBar/>
    
    <Content/>
</div>
</template>
<script>
import NavigationBar from './components/NavigationBar'

export default {
    name: 'Layout',
    components:{
        NavigationBar
    }
}
</script>

<style lang="stylus">
@import './styles/theme.styl';
</style>

