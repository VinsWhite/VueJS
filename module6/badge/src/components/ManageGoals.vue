<script>
import ErrorAlertVue from './ErrorAlert.vue';
export default {
    components: {
        ErrorAlertVue
    },
    data() {
        return {
            inputIsInvalid: false, // at first is false
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value; 
            if (enteredValue === '') {
                /* alert('Input must not be empty!') */
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>

<template>
    <div>
        <h2>Manage Goal</h2>
        <input type="text" ref="goal" /> 
        <button @click="setGoal">Set Goal</button>
        <Teleport to="body"> <!-- it will be render somewhere else in the html structure; in this case in the body element -->
            <ErrorAlertVue v-if="inputIsInvalid">
                <h2>Input is invalid!</h2>
                <p>Please enter at least a few characters</p>
                <button @click="confirmError">Okay</button>
            </ErrorAlertVue>
        </Teleport>
    </div>
</template>