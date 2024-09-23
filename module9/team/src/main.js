import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* { path: '/', redirect: '/teams' }, */ // we'll redirect to the teams path
    // with the alias the path won't change as redirect do
    {
      name: "teams",
      path: "/teams",
      /* component: TeamsList, */
      components: { default: TeamsList, footer: TeamsFooter },
      alias: "/",
      children: [
        // we need to handle the children components in TeamsList
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        }, // child - /teams/:teamId
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
      }
    },
    { path: "/:notFound(.*)", component: NotFound }, // actually this is a regular expression
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) { // when the browser should scroll when the page changes
    if (savedPosition) { // if savedPosition are available
      return savedPosition; // return to that space
    } else {
      return { left: 0, top: 0 }; // go to top 
    }
  }
});

router.beforeEach(function(to, from, next) {
  // console.log('global beforeach')
  console.log(to, from);
  
  /* if(to.name === 'team-members') {
    next()
  } else {
    next({ name: 'team-members', params: { teamId: 't2' } });
  } */
  next('/users'); // you confirm the navigation ----- on the other hand, next(false) will disabled it
}); // when ever we navigate from a page to another

const app = createApp(App);

app.use(router);

app.mount("#app");
