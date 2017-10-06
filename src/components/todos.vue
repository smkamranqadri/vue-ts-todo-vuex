<template>
  <div>
    <todo :todo="activeTodo" :editTodo="editTodo" :addTodo="addTodo"></todo>
    <h2>todos</h2>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.index">
        {{todo.text}}
        <button v-on:click="toggleTodo(todo)">
          done
        </button>
        <button v-on:click="selectTodo(todo)">
          e
        </button>
        <button v-on:click="removeTodo(todo)">
          x
        </button>
      </li>
    </ul>
    <h2>dones</h2>
    <ul>
      <li v-for="todo in dones" v-bind:key="todo.index">
        {{todo.text}}
        <button v-on:click="toggleTodo(todo)">
          undone
        </button>
        <button v-on:click="showEdit(todo)">
          e
        </button>
        <button v-on:click="removeTodo(todo)">
          x
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import { ITodo } from '../store';

import Todo from '../components/todo.vue';

@Component({
  components: {
    Todo
  }
})
export default class Todos extends Vue {
  @Getter todos: ITodo[];
  @Getter dones: ITodo[];
  @Getter activeTodo: ITodo;
  @Mutation selectTodo;
  @Mutation addTodo;
  @Mutation editTodo;
  @Mutation toggleTodo;
  @Mutation removeTodo;

  constructor() {
    super();
  }

  created() {
    console.log('created!')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
