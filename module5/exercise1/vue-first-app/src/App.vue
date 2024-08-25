<script>
import FriendContactVue from './components/FriendContact.vue';

export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: 1,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: 0,
        },
      ],
    };
  },
  components: {
    FriendContactVue
  }
};
</script>

<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <FriendContactVue v-for="friend in friends" :key="friend.id" :friend="friend" />
    </ul>
  </section>
</template>
