import { ref } from 'vue'

export function useTodoList() {
  const todos = ref([])
  const newTodoText = ref('')

  function addTodo() {
    if (newTodoText.value.trim() !== '') {
      todos.value.push({
        id: Date.now(),
        text: newTodoText.value.trim(),
        completed: false
      })
      newTodoText.value = ''
    }
  }

  function removeTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  return {
    todos,
    newTodoText,
    addTodo,
    removeTodo
  }
}
