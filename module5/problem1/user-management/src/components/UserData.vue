<script>
export default {
    data() {
        return {
            users: [
                {
                    id: 1,
                    username: 'vin',
                    age: 20
                }
            ]
        }
    }
}   
</script>

<template>
  <div>
    <!-- <p>UserData component</p> -->
    <div v-for="user in users" :key="user.id">
        <h2>Username: {{ user.username }}</h2>
        <h3>Age: {{ user.age }}</h3>
    </div>
  </div>
</template>
