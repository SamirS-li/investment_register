import ContactDetails from "./components/content/ContactDetails"
import InvestmentPlans from "./components/content/InvestmentPlans"
import InvestmentPreferences from "./components/content/InvestmentPreferences"


export const routes = [
    { path: '/contact', component: ContactDetails },
    { path: '/plans', component: InvestmentPlans },
    { path: '/preferences', component: InvestmentPreferences },
];