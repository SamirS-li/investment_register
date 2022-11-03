import ContactDetails from "./components/content/ContactDetails"
import InvestmentPlans from "./components/content/InvestmentPlans"
import InvestmentPreferences from "./components/content/InvestmentPreferences"


export const routes = [{
        path: '/',
        component: ContactDetails,
        name: 'contact',
        meta: {
            next: 'plans',
        }
    },

    {
        path: '/plans',
        component: InvestmentPlans,
        name: 'plans',
        meta: {
            next: 'preferences',
            prev: 'contact'
        }
    },

    {
        path: '/preferences',
        component: InvestmentPreferences,
        name: 'preferences',
        meta: {
            prev: 'plans',
        }
    },
];