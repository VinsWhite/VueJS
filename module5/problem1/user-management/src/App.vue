<script setup>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

components: { 
  UserData,
  ActiveUser 
} 
</script>

<template>
  <div id="mainContainer">
    <UserData />
    <ActiveUser />
  </div>
</template>
