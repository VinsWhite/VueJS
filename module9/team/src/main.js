import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* { path: '/', redirect: '/teams' }, */ // we'll redirect to the teams path
    // with the alias the path won't change as redirect do
    {
      name: 'teams',
      path: "/teams",
      component: TeamsList,
      alias: "/",
      children: [
        // we need to handle the children components in TeamsList
        { name: 'team-members', path: ":teamId", component: TeamMembers, props: true }, // child - /teams/:teamId
      ],
    }, // our-domain.com/teams => TeamsList
    { path: "/users", component: UsersList },
    { path: "/:notFound(.*)", component: NotFound }, // actually this is a regular expression
  ],
  linkActiveClass: "active",
});

const app = createApp(App);

app.use(router);

app.mount("#app");
