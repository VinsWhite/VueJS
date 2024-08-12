const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      /* event.preventDefault(); */ /* vue has a better way to do this */
      alert('submitted!')
    },
    setName(event, ex) {
      this.name = event.target.value + ' ' + ex;
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
