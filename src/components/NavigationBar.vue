<template>
    <nav class="border-top flex items-center justify-between flex-wrap bg-green-darker p-6">
        <div class="flex items-center flex-no-shrink text">
            <h1 class="font-display text-white">
            <router-link
            class="no-underline text-white cursor-pointer"
            :to="$withBase('/')"
            >
                 GOA
            </router-link>
            
            
            </h1>
        </div>
        <div class="block sm:hidden">
            <span @click="toggle" class="flex items-center px-3 py-2">
                <!--<img src="../../assets/menu.svg"/> -->
                </span>
        </div>
        <div :class="open ? 'block':'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto ml-10 ">
            <div class=" text-md sm:flex-grow ">
                <a href="#" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                   <span v-for="item in $site.themeConfig.nav">
                       <router-link 
                       class="text-white no-underline" 
                       :to="$withBase(item.link)"
                       >
                       <p class="font-body hover:text-green">
                        {{item.text}}
                        </p>
                        </router-link>
                        </span>
                 </a>

            </div>
            <div class="nav__drawer--right">
                <p class="text-white font-body mr-4 hover:text-green">
                    <a 
                    href="http://webnmobidev.net/pmb/login"
                    class="no-underline text-white">
                    Back To GOA
                    </a>
                </p>
            </div>
            <div class="nav__drawer--right ">
                <a href="http://webnmobidev.net/pmb/login"
                    class="no-underline text-white">
               
               </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar'
}
</script>