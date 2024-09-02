<script>
import TheHeaderVue from './components/layout/TheHeader.vue'
import ActiveGoalsVue from './components/ActiveGoals.vue'
import ManageGoalsVue from './components/ManageGoals.vue'

export default {
  data() {
    return {
      selectedComponent: 'ActiveGoalsVue',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  },
  components: {
    TheHeaderVue,
    ActiveGoalsVue,
    ManageGoalsVue
  }
};
</script>

<template>
  <div>
    <TheHeaderVue></TheHeaderVue>
    <button @click="setSelectedComponent('ActiveGoalsVue')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoalsVue')">Manage Goals</button>
    <!-- component is a dynamic component -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>
