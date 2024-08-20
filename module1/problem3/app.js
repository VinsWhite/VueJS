const vue = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counter(value) {
            const that = this;
            setInterval(() => {
                that.counter = 0;
                console.log('Reset successfully!', value)
            }, 5000);
        }
    },
    computed: {
        showCounter() {
            if (this.counter === 37) {
                return this.counter;
            } else if (this.counter < 37) {
                return 'Not There Yet!';
            } else {
                return 'Too much!'
            }
        }
    },
    methods: {
        /* addFive() {
            console.log(this.counter)
            this.counter = this.counter + 5;
        },
        addOne() {
            console.log(this.counter)
            this.counter = this.counter + 1;
        } */
       add(num) { // more reusable
        console.log(this.counter),
        this.counter = this.counter + num;
       }
    }
})

vue.mount('#assignment')