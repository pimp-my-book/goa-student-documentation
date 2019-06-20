<template>
    <div>
        <span>{{$page.doc.title}}</span>
        <span v-text="$page.doc.content"/>
    </div>
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
