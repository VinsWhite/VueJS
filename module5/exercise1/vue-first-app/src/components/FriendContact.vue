<script>
export default {
  props: {
    friend: { // we passed as an object and it should be required
      type: Object,
      required: true
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendIsFavorite === 1) {
        this.friendIsFavorite = 0;
      } else {
        this.friendIsFavorite = 1;
      }
    }
  }
};
</script>


<template>
  <li>
    <h2>{{ friend.name }} {{ friendIsFavorite === 1 ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong> {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong> {{ friend.email }}
      </li>
    </ul>
  </li>
</template>
