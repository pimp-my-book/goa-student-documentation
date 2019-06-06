<template>
<div>
    <NavigationBar/>
    
    <Content/>

    <Footer/>
</div>
</template>
<script>
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

export default {
    name: 'Layout',
    components:{
        NavigationBar,
        Footer
    }
}
</script>

<style lang="stylus">
@import './styles/theme.styl';
</style>

