import Vue from 'vue';
import Vuex from 'vuex';

import { state, getters, mutations } from './todo';
export { ITodo } from './todo';

Vue.use(Vuex);
export const store = new Vuex.Store({ state, getters, mutations });
