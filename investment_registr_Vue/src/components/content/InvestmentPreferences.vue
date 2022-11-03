<template>
    <div>
        <div class="Investment-preferences ">
                        <h2>Investment-preferences </h2>
                        <span>This will help us figure out what your investment 
                            options are so that we can show you only possibly intresting for you deals</span>
                    </div>
                    <h3>What kind of real estate are you interested in?</h3>

                    <!-- interestes -->

                    <div class="interestes">
                        <form  @change="change2" action="">
                            <div>
                                <input v-model="investmentOptions" type="checkbox" id="Single family" name="Single family" value="Single family">
                                <label for="Single family">Single family</label>
                            </div>
                            <div>
                                <input v-model="investmentOptions" type="checkbox" id="Residential multifamily" name="Residential multifamily" value="Residential multifamily">
                                <label for="Residential multifamily">Residential multifamily</label>
                            </div>
                            <div>
                                <input v-model="investmentOptions" type="checkbox" id="Commercial retail" name="Commercial retail" value="Commercial retail">
                                <label for="Commercial retail">Commercia retail</label>
                            </div>
                            <div>
                                <input v-model="investmentOptions" type="checkbox" id="Commercial industrial" name="Commercial industrial" value="Commercial industrial">
                                <label for="Commercial industrial">Commercial industrial</label>
                            </div>
                            <div>
                                <input v-model="investmentOptions" type="checkbox" id="Commercial hospitality" name="Commercial hospitality" value="Commercial hospitality">
                                <label for="Commercial hospitality">Commercial hospitality</label>
                            </div>
                            <div>
                                <input v-model="investmentOptions" type="checkbox" id="Commercial warehousing" name="Commercial warehousing" value="Commercial warehousing">
                                <label for="Commercial warehousing">Commercial warehousing</label>
                            </div>
                            <div>
                                <input v-model="investmentOptions" type="checkbox" id="Commercial office" name="Commercial office" value="Commercial office">
                                <label for="Commercial office">Commercial office</label>
                            </div>
                            <div>
                                <input v-model="investmentOptions" type="checkbox" id="Other" name="Other" value="Other">
                                <label for="Other">Other</label>
                            </div>

                        </form>
                    </div>
    </div>
</template>




<script>

export default{
        data(){
            return {
                investmentOptions:[]
            }
        },
        methods:{
            change2(){
                console.log(this.investmentOptions)
            }
        }


    
}

</script>

<style scoped>
 .Investment-preferences {
        width: 520px;
        margin-bottom: 40px;
        margin-top: -10px;
    }
    
    .Investment-preferences h2 {
        font-size: 22px;
    }
    
    .Investment-preferences span {
        color: #A4AEB4;
        font-family: "Montserrat Alternates";
        font-size: 12px;
        margin-top: 10px;
        display: block;
    }
    
    .interestes {
        width: 670px;
        margin-top: 16px;
    }
    
    .interestes form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .interestes form div {
        position: relative;
        padding: 15px;
        width: 100px;
        height: 110px;
        border: 1px solid #D5D9DC;
        border-radius: 4px;
        margin: 10px 20px 10px 0;
    }
    
    .interestes input {
        display: block;
        width: 15px;
        height: 15px;
    }
    
    .interestes label {
        position: absolute;
        bottom: 15px;
        font-size: 12px;
        font-weight: 600;
    }

</style>