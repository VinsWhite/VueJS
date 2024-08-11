const app = Vue.createApp({
    data() {
        return {
            name: 'Vincenzo',
            age: 20,
            link: 'https://www.thecolvinco.com/it/c/wp-content/uploads/sites/2/2020/06/ROSA_SWEET-PINK-DOLOMITI.jpg'
        }
    },
    methods: {
        myAgePlusFive() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');