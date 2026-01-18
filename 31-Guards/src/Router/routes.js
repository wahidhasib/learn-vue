import Login from "@/Authentication/Login.vue";
import NotFound from "@/Layout/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";
import Hero from "../Home/Hero.vue";
import Service from "../Home/Service.vue";
import ProductDetails from "../Products/ProductDetails.vue";
import ProductList from "../Products/ProductList.vue";

function isAdmin() {
    // Simulated admin check logic
    const adminStatus = false; // Change this to true to simulate admin user

    if (adminStatus) {
        return true;
    }

    return { name: "no-access" };
}

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            component: Hero,
            name: "home"
        },
        {
            path: "/login",
            component: Login,
            name: "login",
        },
        {
            path: "/no-access",
            component: NotFound,
            name: "no-access"
        },
        {
            path: "/service-page",
            component: Service,
            name: "service"
        },
        {
            path: "/service",
            // Redirect to service-page with different syntax
            // redirect: "/service-page",
            redirect: { name: "service" },
        },
        {
            // Added another route guard by checking user is admin or not
            // if admin allow to go product list else redirect to home

            path: "/product-list",
            component: ProductList,
            name: "product-list",
            beforeEnter: [isAdmin],
        },
        {
            path: "/product-detail/:id/:category?",
            component: ProductDetails,
            name: "product-detail",
            props: true
        },
        {
            path: "/product-detail",
            component: ProductDetails
        },
        // 404 Not Found Route
        {
            path: "/:pathMatch(.*)*",
            component: NotFound,
        }
    ],
});


const isAuthenticated = true; // Simulated authentication status


// Global Before Each Guard
router.beforeEach((to, from) => {
    console.log("Global beforeEach");

    // console.log(to, from);

    // if user is not authenticated and trying to access home page they should be allowed
    if (to.name === "home") {
        return true; // Allow navigation to home
    }

    if (!isAuthenticated && to.name !== "login") {
        // Redirect to login page if not authenticated
        return { name: "login" };
    }
});

export default router;