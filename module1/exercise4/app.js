const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    computed: {
        boxAClasses() { // especially for more complex activities
            return {active: this.boxASelected};
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
})

app.mount('#styling')