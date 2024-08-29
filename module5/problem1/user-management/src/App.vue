<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: { 
     UserData,
     ActiveUser 
  },
  data() {
      return {
          user: {
              username: 'Vincenzo',
              age: 20
          }
      }
  },
  methods: {
    setUserData(username, age) {
      this.user = {
        username: username,
        age: +age // that plus will convert a string to a number
      }
    }
  }
}   
</script>

<template>
  <div id="mainContainer">
    <UserData @set-data="setUserData" />
    <ActiveUser :username="user.username" :age="user.age" />
  </div>
</template>