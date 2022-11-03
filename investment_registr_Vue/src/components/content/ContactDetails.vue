<template>
    <div>
         
                    <div class="contact-title">
                        <h2>Contact details</h2>
                        <span>Welcome to United Properties, we are glad to see you! 
                        Let’s get started by letting us know a little bit about you</span>
                    </div>
                    <form action="">
                        <div class="full-name-div">
                            <label for="name">Full name</label>
                            <input v-model="contactDetails.fullName" type="text" id="name" value="">
                        </div>
                        <div class="phone-div">
                            <select v-model="contactDetails.flagCountry" name="flag" id="flag">
                                <option value="Aze">AZ</option>
                                <option value="TR">Tr</option>
                                <option value="EN">EN</option>
                            </select>
                            <input  v-model="contactDetails.phone" type="number" name="" id="">
                        </div>
                        <div class="email-div">
                            <label for="email">E-mail address</label>
                            <input v-model="contactDetails.mail" type="email" name="" id="email">
                        </div>
                        <div class="country-div">
                            <label for="country">Country</label>
                            <select v-model="contactDetails.country" name="country" id="country">
                                <option value="AZE">Azerbaijan</option>
                                <option value="TR">Turkie</option>
                            </select>
                        </div>
                    </form>
                    <div class="policy-text">
                        <h2 @click="show">Privacy policy</h2>
                        <span>We know you care about how your personal 
                            information is used and shared, so we take 
                            your privacy seriously
                        </span>
                        <a href="">Expand privacy policy</a>
                        <i></i>

                    </div>
         
      
       
    </div>

</template>




<script>

export default{
    data(){
        return{
            contactDetails:{
                    fullName:"",
                    phone:null,
                    mail:"",
                    flagCountry:"",
                    country:"",
            }
        }
    },
    methods:{
        show(){
            console.log(this.contactDetails)
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
    .full-name-div {
        display: inline-block;
        width: 47%;
    }
    
    .phone-div {
        margin-left: 15px;
        display: inline-block;
        width: 47%;
    }
    
    .phone-div>input {
        width: 80%;
        display: inline-block;
        padding-bottom: 4px;
    }
    
    #flag {
        display: inline-block;
        width: 45px;
        margin: 1px -4px 0 0;
        padding-bottom: 3px;
    }
    
    .full-name-div>label {
        display: block;
        color: #A4AEB4;
        font-size: 11px;
    }
    
    .email-div {
        color: #2696E8;
        margin-top: 20px;
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
    
    .policy-text {
        margin: 60px 0 0 0;
    }
    
    .policy-text h2 {
        font-size: 16px;
        font-weight: 900;
    }
    
    .policy-text span {
        margin: 10px 0;
        display: block;
        color: #A4AEB4;
        font-family: "Montserrat";
        font-size: 14px;
    }
    
    .policy-text i {
        display: inline-block;
        width: 15px;
        height: 8px;
        background: url(../../../Template/image/arrow.svg);
        background-repeat: no-repeat;
        background-size: contain;
    }

</style>

