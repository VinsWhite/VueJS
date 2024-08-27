<script>
export default {
  props: {
    friend: {
      type: Object,
      required: true,
    },
  },
  emits: {
    'toggle-favorite': function(id) {
      if (id) {
        return true;
      } else {
        console.warn('id is missing!');
        return false;
      }
    },
    'delete': function(id) {
      if (id) {
        return true;
      } else {
        console.warn('id is missing!');
        return false;
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.friend.id); // emit event with friend's id
    },
  },
};
</script>

<template>
  <li>
    <h2>{{ friend.name }} {{ friend.isFavorite ? '(Favorite)' : '' }}</h2>
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
    <button @click="$emit('delete', friend.id)">Delete</button> <!-- we can call the function here directly -->
  </li>
</template>
