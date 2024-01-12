<script setup>
import { useTodoList } from '../shared/Todo'
const todoList = useTodoList()
console.log(todoList)
</script>

<template>
  <div>
    <input v-model="todoList.newTodoText.value" placeholder="Add a new todo" />
    <button @click="todoList.addTodo">Add</button>
  </div>

  <ul>
    <li v-for="todo in todoList.todos.value" :key="todo.id">
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <button @click="() => todoList.removeTodo(todo.id)">Remove</button>
    </li>
  </ul>
</template>
