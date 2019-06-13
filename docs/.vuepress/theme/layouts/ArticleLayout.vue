<template>
    <div class="markdown-body">
        {{$page.frontmatter.title}}
        <Content/>
    </div>
</template>
<script>
export default {
    name: 'ArticleLayout'
}
</script>
