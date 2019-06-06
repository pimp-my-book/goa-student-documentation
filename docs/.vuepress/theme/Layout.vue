<template>
<div>
    <NavigationBar/>
    
    <Content/>

    <Footer/>
</div>
</template>
<script>
import HomeLayout from './components/HomeLayout'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

export default {
    name: 'Layout',
    components:{
        NavigationBar,
        Footer,
        HomeLayout
    }
}
</script>

<style lang="stylus">
@import './styles/theme.styl';
</style>

