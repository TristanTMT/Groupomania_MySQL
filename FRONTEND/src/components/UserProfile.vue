<template>
    <div class="UserProfile">
        <div class="profile-info">
            <h2>Bonjour,</h2>
            <span>{{this.$user.nom}}</span> <span>{{this.$user.prenom}}</span>
        </div>

        <button><router-link to="/">Tous les articles</router-link></button>
        <div class="delete-profile" @click="deleteUser()">Se déconnecter</div>

        <h3>Vos posts :</h3>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserProfile',


  methods: {

    deleteUser(){
      const userId = this.$user.userId;

      axios.delete(`${this.$apiUrl}/auth/${userId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.$token}`
            }
          }
      )
      .then(localStorage.removeItem('user'))
      this.$router.push({ path: '/signup' });
    }

  }
}
</script>

<style scoped>

    .profile-info{
        margin: 50px auto;
        max-width: 800px;
        /* text-align: left; */
    }

    .profile-info h2 {
        margin-bottom: 20px;
        font-size: 3rem;
    }

    

    .profile-info span {
        font-size: 3rem;
    }

    button {
      margin-bottom: 1rem;
      padding: 10px;
      font-size: 1.1rem;
      color: white;
      background-color: rgb(43, 42, 42);
      border: none;
      border-radius: 10px;
      transition-duration: 0.2s;
      cursor: pointer;
    }

    .delete-profile{
      color: red;
      margin-bottom: 30px;
      font-size: 24px;
      cursor: pointer;
    }
</style>