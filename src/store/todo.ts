import Vue from 'vue';
import { GetterTree, MutationTree } from 'vuex';

export interface ITodo {
  index: number;
  text: string;
  checked: boolean;
}

export interface IState {
  todos: ITodo[],
  activeTodo: ITodo
}

export const state: IState = {
  todos: [
    { index: 1, text: 'Task 1', checked: false },
    { index: 2, text: 'Task 2', checked: true },
    { index: 3, text: 'Task 3', checked: false }
  ],
  activeTodo: {
    index: 0,
    text: '',
    checked: false
  }
}

export const getters: GetterTree<IState, any> = {
  todos: state => state.todos.filter(todo => !todo.checked),
  dones: state => state.todos.filter(todo => todo.checked),
  activeTodo: state => state.activeTodo,
}

export const mutations: MutationTree<IState> = {
  selectTodo: (state, { index, text, checked }) => {
    state.activeTodo = { index, text, checked };
  },
  addTodo: (state, { text }) => {
    state.todos.push({ index: state.todos.length + 1, text, checked: false });
    state.activeTodo = { index: 0, text: '', checked: false }
  },
  editTodo: (state, payload) => {
    Vue.set(state.todos, payload.index - 1, payload);
    state.activeTodo = { index: 0, text: '', checked: false }
  },
  toggleTodo: (state, payload) => {
    Vue.set(state.todos, payload.index - 1, { ...payload, checked: !payload.checked });
  },
  removeTodo: (state, payload) => {
    state.todos.splice(payload.index - 1, 1);
  }
}
