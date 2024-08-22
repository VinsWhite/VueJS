const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Ciao",
          phone: "0123 456 789",
          email: 'manuel@example.com'
        },
        {
          id: "vins",
          name: "Vins Ciao",
          phone: "0123 456 789",
          email: 'vins@example.com'
        }
      ],
    };
  },
});

app.component('friend-contact', {
  props: ['friend'],
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">
            {{ detailsVisibility ? 'Hide' : 'Show' }} Details
          </button>
          <ul v-if="detailsVisibility">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
  `,
  data() {
    return { 
      detailsVisibility: false 
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisibility = !this.detailsVisibility;
    }
  }
});

app.mount("#app");
