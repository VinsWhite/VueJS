const app = Vue.createApp({ // object to configure the app
    data() { // key: it HAS TO be data 
        return { // everything here can use on #user-goal
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: { // methods takes an object with a lot of functions
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA; // with "this" we refers to data
            } else {
                return this.courseGoalB;
            }
        }
    } 
});

app.mount('#user-goal'); // to connect vue system with html page