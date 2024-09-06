<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      axios.get('https://vue-http-demo-92cae-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
        .then(response => {
          if (response.status === 200) {
            return response.data; // firebase already returns data in JSON format
          }
        })
        .then(data => {
          this.isLoading = false; // back to false
          const experiences = [];
          for (let key in data) {
            experiences.push({
              id: key,
              name: data[key].name,
              rating: data[key].rating
            });
          }
          this.results = experiences;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
        .catch((error) => {
          this.isLoading = false
          console.log(error)
          this.error ="Failed to fetch data, please try again!"
        });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Start adding some datas!</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
