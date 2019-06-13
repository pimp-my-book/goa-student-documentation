<template>
<div>
    <NavigationBar/>
    
    
    <component :is="layout"></component>
    <Content/>
    <Footer/>
</div>
</template>
<script>
import HomeLayout from './layouts/HomeLayout.vue'
import ArticleLayout from './layouts/ArticleLayout.vue'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'Layout',
    components:{
        
        HomeLayout,
        ArticleLayout,
        NavigationBar,
        Footer,
    },
    computed: {
        layout(){
            return this.$page.frontmatter.layout || "HomeLayout";
        }
    }
}
</script>

<style lang="stylus">
@import './styles/index.styl';
</style>

