import axios from "axios";
// state
const state = {
  todos: [
    {
      id: 1,
      title: "todo 1",
    },
    {
      id: 2,
      title: "todo 2",
    },
  ],
};

// getter
const getters = {
  allTodos: (state) => state.todos,
};

// action
const actions = {};

// mutation
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
