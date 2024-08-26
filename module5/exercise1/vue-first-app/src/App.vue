<script>
import FriendContactVue from './components/FriendContact.vue';
import NewFriendVue from './components/NewFriend.vue';

export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  components: {
    FriendContactVue,
    NewFriendVue
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const friend = this.friends.find(f => f.id === friendId);
      if (friend) {
        friend.isFavorite = !friend.isFavorite;
      }
    },
  },
};
</script>

<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <NewFriendVue />
    <ul>
      <FriendContactVue
        v-for="friend in friends"
        :key="friend.id"
        :friend="friend"
        @toggle-favorite="toggleFavoriteStatus"
      />
    </ul>
  </section>
</template>
