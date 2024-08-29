<script>
export default {
  emits: [
    'set-data'
  ],
  data() {
    return {
      enteredUsername: '',
      enteredAge: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('set-data', this.enteredUsername, this.enteredAge); // 'set-data' name is up to us
    }
  }
}
</script>

<template>
  <div>
    <!-- <p>ActiveUser component</p> -->
    <form @submit.prevent="handleSubmit">
        <input type="text" name="username" placeholder="username..." v-model="enteredUsername">
        <input type="text" name="age" placeholder="age..." v-model="enteredAge">
        <button>Set user data</button>
    </form>
  </div>
</template>
