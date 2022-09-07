<template>
   
   <div>Checked names: {{ $store.state.checkedNames }}

<input type="checkbox" id="jack" value="Jack" v-model="$store.state.checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="$store.state.checkedNames">
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="$store.state.checkedNames">
<label for="mike">Mike</label>

	<br>
	<br>

Selected: {{ $store.state.selected }}

<select v-model="$store.state.selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>-
	
	<br>
	<br>

<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ $store.state.message }}</p>
<textarea v-model="$store.state.message" placeholder="add multiple lines"></textarea>

	</div>

</template>

<script>
//Vragen ricardo: computed gebruiken?

export default {
  name: 'FormComponent',
  props: {
	msg: String
  }
}
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
