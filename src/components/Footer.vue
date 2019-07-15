<template>
<footer class="bg-green-darker mt-32 w-full s:h-f-sm ">
        
      <div class="container  ">
          <div class="flex lg:flex-row s:flex-col  Links__Container absolute mt-32 pt-32">
          
         <!-- Contact -->
         <a
         href="https://gogoa.co.za/contact"
         target="_blank"
         class="no-underline"
         >
           <FeatureText
           text="Contact Us"
          
           class="mr-4 mt-3 text-white "
           />
           </a>
           

           <!-- help -->
             <a
         href="https://help.gogoa.co.za"
         class="no-underline"
         >
            <FeatureText
           text="Help"
           class="mr-4 mt-3 text-white "
           />
            </a>


 <!-- privacy -->
  <a
         href="https://gogoa.co.za/privacy"
         class="no-underline"
         >
           <FeatureText
           text="Privacy"
           class="mr-4 mt-3 text-white"
           />
           </a>

            <!-- TERMS OF SERVICE -->
             <a
         href="https://gogoa.co.za/terms"
         class="no-underline"
         >
           <FeatureText
           text="Terms of Service"
           class="mr-4 mt-3 text-white "
           />
           </a>
          </div>
        
      </div>

      <div class="container  py-32 s:py-38">
          <div class="flex lg:flex-row s:flex-col pt-10 self-end Copyright__Container absolute mt-32 s:pt-20 lg:pt-32">
           <Credits/>
           
           <Copyright/>
          </div>
      </div>
    </footer>
</template>

<script>
import FeatureText from './typography/FeatureText.vue'
import Credits from './typography/Credits.vue'
import Copyright from './typography/Copyright.vue'

export default {
    name: 'Footer',
    components: {
        FeatureText,
        Credits,
        Copyright
    }
}
</script>

<style>
footer {
    clip-path: polygon(59% 21%, 100% 1%, 100% 100%, 0 100%, 0 49%);
    height: 600px;
    /*transform: matrix(0.98, -0.2, 0.21, 0.98,0,0);*/
    
}
.Links__Container, .Copyright__Container{
    left:35vw;
}
</style>