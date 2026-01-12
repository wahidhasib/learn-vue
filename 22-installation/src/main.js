import { createApp } from "vue";
import App from "./App.vue";
import Counter from "./components/Counter.vue";

const app = createApp(App);

// Added button counter as globally
// * There is no need to inclue it where I should use it
app.component("button-counter", Counter);

app.mount("#app");