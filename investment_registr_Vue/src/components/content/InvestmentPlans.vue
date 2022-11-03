<template>
    <div>
        <div class="contact-title">
                        <h2>Investment plans</h2>
                        <span>Let us know about your investment plans. 
                            This will help us get you to the right expert who will help you further</span>
                    </div>
                    <h3>Ho much are you planning to invest in this year?</h3>
                    <form action="">
                        <div class="from-div">
                            <label for="from">From</label>
                            <input v-model="investmentPlans.investFrom" type="number" id="from" value="">
                        </div>
                        <div class="to-div">
                            <label for="to">To</label>
                            <input v-model="investmentPlans.investTo" type="number" name="to" id="to">
                        </div>


                    </form>
                    <!-- progress bar -->

                    <div class="progress-bar">
                        <div class="progress-default-line">
                            <div class="progress-blue-line">
                                <div class="progress-first-square"></div>
                                <div class="progress-second-square"></div>
                                <div class="progress-last"></div>
                            </div>
                            <div class="progress-up-row">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="progress-down-row">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                        </div>
                        <div class="progress-numbers">
                            <span>$10,000</span>
                            <span>$50,000</span>
                            <span>$100,000</span>
                            <span>$200,000</span>
                            <span>$500,000</span>
                            <span>$1,000,000</span>
                        </div>
                    </div>

                    <!-- radio buttons -->
                    <div class="accredite-button">
                        <h2>Are you an accredited investor?</h2>
                        <form @change="change" action="">
                            <div  class="accredite-yes">
                                <label for="yes">Yes</label>
                                <input v-model="investmentPlans.accreditedInvestor" type="radio" id="yes" name="accredited" value="true">

                            </div>
                            <div class="accredite-no">
                                <label for="no">No</label>
                                <input v-model="investmentPlans.accreditedInvestor" type="radio" id="no" name="accredited" value="false">
                            </div>
                        </form>


                    </div>
                </div>
    
</template>




<script>

export default{
    data(){
        return {
            investmentPlans: {
                investTo:null,
                investFrom:null,
                accreditedInvestor:"",
            }
        }
    },
    methods:{
        change(){
            console.log(this.investmentPlans);
        }
    }


    
}

</script>

<style scoped>

.contact-title {
        width: 520px;
        margin-bottom: 50px;
    }
    
    .contact-title span {
        color: #A4AEB4;
        font-family: "Montserrat";
        font-size: 12px;
        margin-top: 10px;
        display: block;
    }
    
    .from-div {
        display: inline-block;
        width: 47%;
        margin-top: 17px;
    }
    
    .to-div {
        margin-left: 20px;
        display: inline-block;
        width: 47%;
    }
    
    .to-div label {
        color: #A4AEB4;
        font-size: 11px;
    }
    
    .from-div>label {
        display: block;
        color: #A4AEB4;
        font-size: 11px;
    }
    
    .country-div {
        width: 100%;
        margin-top: 20px;
    }
    
    .country-div>label {
        color: #A4AEB4;
        font-size: 11px;
        margin-bottom: 4px;
    }
    /* progress bar */
    
    .progress-bar {
        margin: 30px 0 0 0;
        width: 700px;
    }
    
    .progress-default-line {
        width: 610px;
        height: 17px;
        background-color: #E9F0F5;
    }
    
    .progress-blue-line {
        position: relative;
        width: 200px;
        height: 17px;
        background-color: #35A0EE;
    }
    
    .progress-second-square {
        position: relative;
        width: 17px;
        height: 17px;
        background-color: #35A0EE;
        float: right;
        border-radius: 2px;
        z-index: 3;
    }
    
    .progress-first-square {
        position: absolute;
        width: 17px;
        height: 17px;
        background-color: #35A0EE;
        float: right;
        border-radius: 2px;
    }
    
    .progress-last {
        position: relative;
        left: 608px;
        width: 2px;
        height: 17px;
        background-color: #A1AFB8;
    }
    
    .progress-up-row {
        position: relative;
        bottom: 26px;
        margin: 0 0 0 16px;
    }
    
    .progress-down-row {
        position: relative;
        bottom: 34px;
        margin: 0 0 0 16px;
    }
    
    .progress-up-row div,
    .progress-down-row div {
        width: 115px;
        height: 8px;
        background-color: white;
        display: inline-block;
    }
    
    .progress-numbers {
        font-family: "Montserrat Alternates";
        font-size: 13px;
        font-weight: 600;
        margin: 15px 0 0 0;
    }
    
    .progress-numbers span {
        margin-right: 52px;
    }
    /* Accredited */
    
    .accredite-button {
        margin: 56px 0 120px 0;
    }
    
    .accredite-button h2 {
        font-size: 16px;
        font-weight: 900;
        font-family: "Montserrat Alternates";
    }
    
    .accredite-yes,
    .accredite-no {
        justify-content: flex-end;
        width: 85px;
        display: flex;
        flex-direction: row-reverse;
        border: 1px solid #d5d9dc;
        padding: 9px;
        border-radius: 4px;
        margin: 20px 15px 0 0;
        float: left;
    }
    
    .accredite-yes input,
    .accredite-no input {
        width: 26px;
        height: 15px;
    }
    
    .accredite-yes label,
    .accredite-no label {
        font-size: 13px;
        font-weight: 600;
        margin-left: 7px;
    }
</style>