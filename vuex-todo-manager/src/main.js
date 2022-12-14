import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// App.use(store);
const app = createApp(App).mount("#app");
app.use(store);
