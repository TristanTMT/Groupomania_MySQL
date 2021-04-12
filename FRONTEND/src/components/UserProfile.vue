<template>
    <div class="UserProfile">
        <div class="profile-info">
            <h2>Bonjour,</h2>
            <span>{{this.$user.nom}}</span> <span>{{this.$user.prenom}}</span>
        </div>
        <div class="test">
          <button><router-link to="/">Tous les articles</router-link></button>
          <div v-if="authorized" class="delete-profile" @click="deleteUser()">Supprimer son compte</div>
        </div>

        <h3>Vos posts :</h3>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserProfile',

  data() {
    return {
      authorized: true,
    }
  },


  methods: {
    // checkAdmin(){
    //   if(this.$user.admin == 0){
    //     this.authorized = false;
    //   }
    // },

    deleteUser(){
      const userId = this.$user.userId;
      // Verbe API DELETE pour supprimer dans la BDD
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
      if(this.$user.admin == 0){
        this.authorized = false;
        alert("Interdit")
      }
    },

  }
}
</script>

<style scoped>

    .profile-info{
        margin: 50px auto;
        max-width: 800px;
    }

    .profile-info h2 {
        margin-bottom: 20px;
        font-size: 2.5rem;
    }
    .profile-info span {
        font-size: 3rem;
        color: #d1515a;
        margin: 0 1rem;
    }

    .test {
      display: flex;
      justify-content: space-evenly;
    }

    button {
      margin-bottom: 1rem;
      padding: 8px;
      font-size: .9rem;
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

    @media (max-width: 426px) {
      .test {
        flex-direction: column;
      }
    }
</style>