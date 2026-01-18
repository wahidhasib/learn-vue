import Login from "@/Authentication/Login.vue";
import NotFound from "@/Layout/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";
import Hero from "../Home/Hero.vue";
import Service from "../Home/Service.vue";
import ProductDetails from "../Products/ProductDetails.vue";
import ProductList from "../Products/ProductList.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            component: Hero,
        },
        {
            path: "/login",
            component: Login,
            name: "login",
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
            path: "/product-list",
            component: ProductList
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

export default router;