<template>
  <div class="posts">
    <h2 class="allPosts">Tous les articles :</h2>
    <article class="post" v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'Post', params: { id: post.id } }">
        <div class="post-header">
          <span class="post-info"
            >Posté le {{ dateFormat(post.date) }} par
            <span class="post-userName">
              {{ post.prenom }} {{ post.nom }}</span
            ></span
          >
          <span
            class="post-modify"
            v-if="post.userId == $user.userId || $user.admin == 1"
            >Voir article</span
          >
        </div>
        <h2 class="post-title">{{ post.title }}</h2>
        <div class="post-content" v-html="characterLimit(post.content)"></div>
      </router-link>
    </article>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  components: {
  },

  data() {
    return {
      posts: [],
      show: false,
    };
  },

  mounted() {
    if (localStorage.user != undefined) {
      this.getAllPost();
    }

    //Export de la fonction
    this.$root.$on("Posts", () => {
      this.getAllPost();
    });
  },

  methods: {
    getAllPost() {
      axios
        .get(`${this.$apiUrl}/posts/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((res) => {
          this.posts = res.data;
        });
    },

    characterLimit(content) {
      let text = content;
      const maxLength = 350;

      if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + "...";
      } else {
        return text;
      }
    },

    dateFormat(date) {
      const event = new Date(date);

      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };

      return event.toLocaleDateString("fr-FR", options);
    },
  },
};
</script>

<style scoped lang="scss">

.posts {
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 20px;
  max-width: 800px;
  border-radius: 10px;
}
.post {
  position: relative;
  padding: 10px 20px 10px 20px;
  margin-bottom: 30px;
  border-left: 1px  solid #d1515a;
  box-shadow: 0px 0px 50px -7px rgba(0, 0, 0, 0.1);
  text-align: left;
  border-radius: 5px;
  transition-duration: 0.1s;
  &:hover {
    box-shadow: 0px 0px 50px -7px rgba(0, 0, 0, 0.2);
    border: 1px solid #d1515a;
  }
}

.post-userName {
  font-weight: bolder;
}

.post h2 {
  margin-top: 7px;
  color: #d1515a;
}
.post-header {
  display: flex;
  justify-content: space-between;
  color: rgb(0, 0, 0);
  font-size: 0.8rem;
}
.post-modify {
  color: rgb(219, 17, 17);
  font-size: 1rem;
  font-weight: bold;
}
.post-content {
  font-size: 0.9rem;
}
</style>
