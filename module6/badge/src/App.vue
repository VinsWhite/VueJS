<script>
import TheHeaderVue from './components/TheHeader.vue'
import BadgeListVue from './components/BadgeList.vue'
import UserInfoVue from './components/UserInfo.vue'
import CourseGoalsVue from './components/CourseGoals.vue'

export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  components: {
    TheHeaderVue,
    BadgeListVue,
    UserInfoVue,
    CourseGoalsVue
  }
};
</script>

<template>
  <div>
    <TheHeaderVue></TheHeaderVue>
    <BadgeListVue></BadgeListVue>
    <UserInfoVue
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfoVue>
    <CourseGoalsVue #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['another-prop'] }}</p>
    </CourseGoalsVue>
  </div>
</template>