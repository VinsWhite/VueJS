const app = Vue.createApp({
  data() {
    return { /* something that vue keeps track on; it uses proxy*/
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) { // aware of changing 
      this.currentUserInput = event.target.value;
    },
    setText() { // when update a value, vue is made aware of that
      this.message = this.$refs.userText.value; // extract the value
    },
    beforeCreate() {
      console.log('beforeCreate()')
    },
    created() {
      console.log('created()')
    },
    beforeMount() {
      console.log('beforeMount()')
    },
    mounted() {
      console.log('mounted()')
    }
  },
});

app.mount('#app');

// we can have another vue app
const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal: 'pizza'
    }
  }
})

app.mount('#app2')