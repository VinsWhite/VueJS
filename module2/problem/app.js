const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            visible: true
        }
    },
    computed: {
        buttonCaption() {
            return this.visible ? 'Hide List' : 'Show List'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask)
        },
        handleVisibility() {
            this.visible = !this.visible;
        }
    }
});

app.mount('#assignment')
