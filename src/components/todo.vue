<template>
  <div>
    <input type="text" v-model="todo.text">
    <button @click="handleTodo(todo.text)">
      +
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ITodo } from '../store';

@Component({})
export default class Todo extends Vue {
  @Prop() addTodo: Function;
  @Prop() editTodo: Function;
  @Prop() todo: ITodo;

  handleTodo() {
    if (this.todo.index !== 0) return this.editTodo(this.todo);
    this.addTodo({ text: this.todo.text });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
