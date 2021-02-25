<template>
<SignUpForm/>
<h1>Hello</h1>
</template>

<script>
import SignUpForm from './components/SignUpForm.vue'
export default {
  name: 'App',
  components: {
    SignUpForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  margin:0;
  background:#eee;

}
</style>
