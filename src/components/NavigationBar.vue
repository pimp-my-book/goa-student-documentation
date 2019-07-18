<template>
    <nav class="border-top flex items-center justify-between flex-wrap bg-green-darker p-6">
        <div class="flex items-center flex-no-shrink text">
            <h1 class="font-display text-white l xl:text-4xl">
           <a 
            class="no-underline text-white"
            href="/">
            GOA
            </a>
            </h1>
        </div>
        <div class="block sm:hidden">
            <span @click="toggle" class="flex items-center px-3 py-2">
                <img src="https://goa-assets.s3.amazonaws.com/Icons/menu.svg"/>
                </span>
        </div>
        <div :class="open ? 'block':'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto ml-10 ">
            <div class=" text-md sm:flex-grow ">
                <a href="#" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                  
                 </a>

            </div>
            <div class="nav__drawer--right">
                <p class="text-white font-body mr-4 hover:text-green text-lg xl:text-2xl">
                    <a 
                    href="http://app.gogoa.co.za/login"
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
    name: 'NavigationBar',
    data: () => {
    return {
        open: false
    }
},
methods: {
    toggle(){
        this.open  = !this.open
    }
}
}

</script>
