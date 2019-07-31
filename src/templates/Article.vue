<template>
<Layout>
<div class="flex flex-col">
        
        <span 
        class="font-body p-5 pl-5 text-center" 
        v-html="$page.doc.content"
        />
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
