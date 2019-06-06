<template>
<footer class="bg-green-darker mt-32 w-full  z-0 relative">
        
      <div class="container relative ">
          <div class="flex lg:flex-row s:flex-col  Links__Container absolute mt-32 pt-32">
           <FeatureText
           text="Contact Us"
           class="mr-4 mt-3 text-white "
           />
            <FeatureText
           text="Support"
           class="mr-4 mt-3 text-white "
           />
           <FeatureText
           text="Privacy"
           class="mr-4 mt-3 text-white"
           />
           
           <FeatureText
           text="Terms of Service"
           class="mr-4 mt-3 text-white "
           />
          </div>
        
      </div>

      <div class="container relative py-32 s:py-38">
          <div class="flex lg:flex-row s:flex-col pt-10 self-end Copyright__Container absolute mt-32 s:pt-20 lg:pt-32">
           <Credits/>
           
           <Copyright/>
          </div>
      </div>
    </footer>
</template>

<script>
export default{
    name: 'Footer'
}
</script>