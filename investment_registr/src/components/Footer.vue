<template>
    <div>
         <div class="right-footer">
                    <div class="footer-main">
                        <div class="back">
                            <i></i>
                            <a href="#">Back to the homepage</a>
                        </div>
                        <div class="footer-buttons">
                            <button class="skip-button" type="button">Skip for now</button>
                            <button class="next-button" type="button">Next step <i></i></button>
                        </div>
                    </div>
                </div> 
                <!-- <h2>footer</h2> -->
    </div>
    
</template>




<script>

export default{


    
}

</script>

<style >
.footer-main {
        display: flex;
        justify-content: space-between;
        width: 650px;
        margin-top: 30px;
    }
    
    .footer-buttons :hover {
        outline: 1px solid #2696E8;
    }
    
    .back {
        padding: 10px 0;
    }
    
    .back i {
        display: inline-block;
        width: 15px;
        height: 8px;
        background: url(../../Template/image/arrow.svg);
        background-repeat: no-repeat;
        background-size: contain;
        transform: rotate(181deg);
    }
    
    .skip-button {
        border: 0px;
        background-color: #35a0ee1f;
        color: #35A0EE;
        padding: 12px 24px;
        border-radius: 4px;
    }
    
    .next-button {
        border: 0px;
        background-color: #35A0EE;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        margin-left: 10px;
    }
    
    .next-button i {
        display: inline-block;
        width: 15px;
        height: 8px;
        background: url(../../Template/image/arrow-white.svg);
        background-repeat: no-repeat;
        background-size: contain;
    }

</style>