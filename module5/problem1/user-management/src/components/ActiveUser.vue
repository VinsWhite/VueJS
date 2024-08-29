<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>
  <div>
    <!-- <p>UserData component</p> -->
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ age }}</h3>
  </div>
</template>
