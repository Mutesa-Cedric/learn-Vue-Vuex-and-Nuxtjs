import { createStore } from "vuex";
import todos from "./modules/todos";

// create store

const store = createStore({
  modules: {
    todos,
  },
});

export default store;
