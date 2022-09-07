import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	todos: [
		{ id: 1, text: '...', done: true },
		{ id: 2, text: '...', done: false }
	],

	checkedNames: [

	],
	selected: [

	],
	message: [
		
	]
  },
  getters: {

  },
  mutations: {
	addTodo: function (state, todo) {
		state.todos.push(todo);
	},
	deleteTodo: function (state, index){
		state.todos.splice(index, 1);
	}
  },
  actions: {

  },
  modules: {
  }
})
