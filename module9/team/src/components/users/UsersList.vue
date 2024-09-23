<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
    // do something
    this.$router.push('/teams');
    }
  },
  beforeRouteEnter(to, from, next) { // before the navigation to this component is confirmed
    console.log('UserList cmp beforeRouteEnter');
    next();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>