<script>
import TheHeaderVue from './components/TheHeader.vue'
import BadgeListVue from './components/BadgeList.vue'
import UserInfoVue from './components/UserInfo.vue'

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
    UserInfoVue
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
  </div>
</template>