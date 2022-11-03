<template>
    <div> 
        <div class="left-page">



             <h2 class="header-title">UNITED<span>PROPERTIES</span></h2>

                
                <div class="prosess-divs">
                    <div class="div-prosess">
                        <div>
                            <div class="square">
                                <div class="small-square"></div>
                            </div>
                            <router-link
                            class="process-title"
                            active-class="router-active"
                            tag="h3"
                            to="/"
                            exact=""
                            >
                            Contact details
                            </router-link>
                            <!-- <h3 class="process-title">Contact details</h3> -->
                        </div>
                        <div class="beetwean-div">
                            <span class="beetwean-of-process"></span>
                            <span class="beetwean-of-process"></span>
                        </div>
                    </div>


                    <div class="div-prosess">
                        <div>
                            <div class="square" style="border:3px solid #ffffff80;">
                                <div class="small-square" style="display: none;"></div>
                            </div>
                            <router-link
                            tag="h3"
                            to="/plans"
                            class="process-title"
                            active-class="router-active"
                            >
                                Investment plans
                            </router-link>

                            <!-- <h3 class="process-title">Investment plans</h3> -->
                        </div>
                        <div class="beetwean-div">
                            <span class="beetwean-of-process"></span>
                            <span class="beetwean-of-process"></span>
                        </div>
                    </div>

                    <div class="div-prosess">
                        <div class="square" style="border:3px solid #ffffff80;">
                            <div class="small-square" style="display: none;"></div>
                        </div>
                        <router-link
                        tag="h3"
                        to="/preferences"
                        class="process-title"
                        active-class="router-active"
                        
                        >
                            Investment preferences
                        </router-link>
                
                    </div>

                </div>
                <div class="left-info">
                    <span><i></i></span>
                    <div class="shadow"></div>
                    <p>We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete</p>
                    <div class="author">
                        <h3>William Mac</h3>
                        <span>CO-FOUNDER, INVESTOR</span>
                        <i></i>
                    </div>
                </div>



        </div>
      
    </div>
</template>




<script>

export default{


    
}

</script>


<style>
.router-active{
    display: inline-block;
    vertical-align: super;
    color: rgb(243, 239, 239) !important;
    font-size: 16px;
    margin-left: 4px;

}


.left-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #35A0EE;
    flex-basis: 1000px;
    box-sizing: border-box;
    padding: 18px 80px 40px 71px;
} 

.header-title {
    color: white;
}

.header-title span {
    color: #ffffff80
}

.prosess-divs {
    margin-top: 100px;
}

.square {
    width: 25px;
    height: 25px;
    border: 3px solid #ffffff;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 5px;
    display: inline-block;
}

.small-square {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: #ffffff;
}

.process-title {
    display: inline-block;
    vertical-align: super;
    color: #ffffff80;
    font-size: 16px;
    margin-left: 4px;
}

.beetwean-div {
    margin: 13px 0;
}

.beetwean-of-process {
    width: 4px;
    height: 9px;
    background-color: #ffffff80;
    display: block;
    margin: 10px 0 10px 11px;
}

.left-info {
    position: relative;
    background-color: white;
    max-width: 368px;
    width: max-content;
    border-radius: 4px;
    color: #A4AEB4;
    font-family: "Montserrat";
    padding: 36px 30px 25px;
    font-size: 13px;
    box-sizing: border-box;
    margin-top: 100px;
}

.left-info>span {
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    z-index: 2;
    top: -17px;
    left: -11px;
    color: red;
    background-color: rgb(255, 252, 252);
    border-radius: 4px;
    font-size: 40px;
    box-sizing: border-box;
    padding: 10px;
}

.left-info>span>i {
    display: block;
    width: 18px;
    background: url(../../Template/image/w.svg);
    background-repeat: no-repeat;
    height: 20px;
    background-size: contain;
    background-color: white;
    margin-top: 2px;
}

.shadow{
    left: 0px;
    top: 0px;
    position: absolute;
    width: 141px;
    height: 37px;
    background-color: red;
    box-sizing: border-box;
    border-bottom: 37px solid white;
    border-left: 141px solid #ebf2f8;
}


.left-info p {
    width: 230px;
}

.author {
    position: relative;
    margin-top: 20px;
}

.author h3 {
    font-family: "Montserrat Alternates";
    color: black;
    margin-bottom: 2px;
}

.author span {
    font-size: 12px;
}

.author i {
    position: absolute;
    top: 22px;
    display: inline-block;
    width: 40px;
    height: 20px;
    background: url(../../Template/image/Up.svg);
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 35px;
}

</style>

