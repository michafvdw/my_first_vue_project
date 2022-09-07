<template>
   

      <div id="TodoList">
		<h1>{{ msg }}</h1>
        <div v-for="(todo, index) in $store.state.todos" :key="index">
          {{index}}
		  <input type="checkbox" :checked="todo.done" @click="() => onClick(index, todo)" />
          <input v-model="todo.value">
          <button @click="deleteTodo(index)">
            Delete task
          </button>
        </div>
        <button @click="addTodo">
          New task
        </button>
      
      </div>
      
</template>
  
  <script>
  export default {
	name: 'TodoList',
	props: {
	  msg: String
	},
	
	methods: {
		addTodo: function() {
        const todo = {
          name: 'Some Task',
        };

        this.$store.commit('addTodo', todo);
	},

		deleteTodo: function(index) {
			this.$store.commit('deleteTodo', index)
		},

		onClick (index, todo) {
			const value = {...todo};
			value.done = !todo.done;
			this.$store.commit('setValue', { index,value}  )

		}
	}
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1 {
	margin: 40px 0 0;
  }
  ul {
	list-style-type: none;
	padding: 0;
  }
  li {
	display: inline-block;
	margin: 0 10px;
  }
  a {
	color: #42b983;
  }
  </style>
  