<script>
import LearningResource from './LearningResource.vue'
export default {
    inject: ['resources'],
    components: {
        LearningResource
    }
}
</script>

<template>
    <div>
        <ul>
        <LearningResource 
            v-for="resource in resources" 
            :key="resource.id"
            :title="resource.title"
            :description="resource.description"
            :link="resource.link"
        >
        </LearningResource>
        </ul>
    </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>