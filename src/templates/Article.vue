<template>
<Layout>
<div>
        
        <span v-html="$page.doc.content"/>
    </div>
</Layout>
</template>
<script>
export default {
    name: 'Article'
}
</script>
<page-query>
query DocPost ($path: String!){
  doc: article (path: $path){
    title
    content
  }
}
</page-query>
