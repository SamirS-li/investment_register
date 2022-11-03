<template>
    <div>
        <section class="class">
            <div class="container">
               
           <left-block></left-block> 
         <right-block></right-block>
             </div>
        </section>
        
       </div>
</template>




<script>


import LeftBlock from "./LeftBlock.vue";
import RightBlock from "./RightBlock.vue";

export default{
    components:{
    LeftBlock,
    RightBlock,
    }


    
}

</script>


<style>
* {
    margin: 0;
    padding: 0;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}



</style>


