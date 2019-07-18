<template>
    


<footer class="bg-green-darker mt-32 w-full ">
        
      <div class="container  ">
          <div class="flex lg:flex-row s:flex-col  justify-center Links__Container absolute mt-32 pt-32">
         
         <!-- Contact -->
         <router-link
         to="/contact"
         class="no-underline"
         >
           <FeatureText
           text="Contact Us"
          
           class="mr-4 mt-3 text-white xl:text-2xl"
           />
           </router-link>
           

           <!-- help -->
             <a
         href="https://help.gogoa.co.za"
         class="no-underline"
         >
            <FeatureText
           text="Help"
           class="mr-4 mt-3 text-white xl:text-2xl"
           />
            </a>


 <!-- privacy -->
  <router-link
         to="/privacy"
         class="no-underline"
         >
           <FeatureText
           text="Privacy"
           class="mr-4 mt-3 text-white xl:text-2xl"
           />
           </router-link>

            <!-- TERMS OF SERVICE -->
             <router-link
         to="/terms"
         class="no-underline"
         >
           <FeatureText
           text="Terms of Service"
           class="mr-4 mt-3 text-white xl:text-2xl"
           />
           </router-link>
          </div>
        
      </div>

 <!-- CREDITS AND COPYWRIGHT -->
      <div class="container  py-32 s:py-38">
          <div class="flex lg:flex-row s:flex-col pt-10 self-end Copyright__Container absolute mt-32 s:pt-20 lg:pt-32">
           <Credits/>
           
           <Copyright/>
          </div>
      </div>
    </footer>
</template>
<script>
import FeatureText from "./typography/FeatureText"
import Credits from "./typography/Credits"
import Copyright from "./typography/Copyright"
export default {
    name:'Footer',
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
    
    
}
.Links__Container, .Copyright__Container{
    left:35vw;
}
</style>