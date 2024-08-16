const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      /* fullname: '', */
      lastName: '',
    };
  },
  watch: {
    /* name(value) { // the name should be the same of data we need to use
      if (value === '') {
        this.fullname = '';
      } else {
         this.fullname = value + ' ' + this.lastName // value = automatic passed by vue; value = name
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullname = '';
      } else {
         this.fullname = this.name + ' ' + value;
      }
    } */
   counter(value) {
    if (value > 50) {
      this.counter = 0;
    }
   }
  },
  computed: { /* better performance */
    fullname() { /* when name changes */
      console.log('Running again...')
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + 'Saccone'
    }
  },
  methods: {
    outputFullname() {
      console.log('Running again...')
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Saccone'
    },
    resetInput() {
      this.name="";
    },
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
