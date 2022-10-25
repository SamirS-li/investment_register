<template>

    <div>
    
    <div class="right-page">
        <header-block></header-block>
        <div class="right-container">
             <!-- <contact-details></contact-details> -->
             <!-- <investment-plans></investment-plans> -->

            <investment-preferences></investment-preferences>
        </div>
        <footer-block></footer-block>
       
    </div>
</div>
</template>




<script>

import FooterBlock from "./Footer.vue";
import HeaderBlock from "./Header.vue";
import ContactDetails from "./content/ContactDetails.vue";
import InvestmentPlans from "./content/InvestmentPlans.vue";
import InvestmentPreferences from "./content/InvestmentPreferences.vue";


export default{

    components:{
        FooterBlock,
        HeaderBlock,
        ContactDetails,
        InvestmentPlans,
        InvestmentPreferences

    }


    
}

</script>

<style>

/* Chrome, Safari, Edge, Opera */

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Firefox */

input[type=number] {
    -moz-appearance: textfield;
}

input,
select {
    border: 0px;
    border-bottom: 2px solid #D5D9DC;
    width: 100%;
    font-family: "Montserrat";
    font-size: 15px;
    font-weight: 600;
    padding-bottom: 4px;
}

input:focus,
select:focus {
    outline: none;
}

select {
    background-image: linear-gradient(45deg, transparent 50%, #080808 50%), linear-gradient(135deg, #070606 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 8px) calc(1em + -5px), calc(100% - 2px) calc(1em + -5px), calc(100% - 2.5em) 0.5em;
    background-size: 8px 5px, 6px 6px, 0px 1.5em;
    background-repeat: no-repeat;
}

select option {
    background-color: #2696E8;
}
.right-page {
    background-color: white;
    flex-basis: 1440px;
    padding: 7px 150px 30px 125px;
    box-sizing: border-box;
    font-family: "Montserrat";
}

a {
    color: #2696E8;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
}

.right-container {
    width: 520px;
    margin-top: 56px;
}
.right-container h3 {
        font-family: "Montserrat Alternates";
        font-size: 16px;
    }



 
</style>