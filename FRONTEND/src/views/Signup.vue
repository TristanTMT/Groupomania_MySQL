<template>
  <div class="signup">
    <SignupForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from '@/components/SignupForm.vue';

export default {
  name: 'Signup',

  components: {
    SignupForm
  },
}
</script>

<style lang="scss">
body{
  background: url("../../public/assets/fond.jpg") no-repeat center fixed; 
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisée */
}

form {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 0 1rem 1rem 1rem;
  max-width: 500px;
  background: rgba(209, 81, 90, .5);
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px rgba(0,0,0,0.68);
}
</style>