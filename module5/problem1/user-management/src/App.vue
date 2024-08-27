<script setup>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

components: { 
  UserData,
  ActiveUser 
} 
</script>

<template>
  <div>
    <UserData />
    <ActiveUser />
  </div>
</template>
