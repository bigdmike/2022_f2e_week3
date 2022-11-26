import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stage: 1,
    header_color: 'white',
    main_menu: false,
    main_dialog: {
      status: false,
      content: '',
    },
  },
  getters: {},
  mutations: {
    SetMainDialog(state, { action, content }) {
      state.main_dialog.status = action;
      state.main_dialog.content = content;
    },
    SetMainMenu(state, action) {
      state.main_menu = action;
    },
    SetStage(state, next_stage) {
      state.stage = next_stage;
    },
    SetHeaderColor(state, color) {
      state.header_color = color;
    },
  },
  actions: {},
  modules: {},
});
