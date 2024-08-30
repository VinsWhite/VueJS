<script>
import KnowledgeElementVue from './KnowledgeElement.vue';
export default {
  components: {
    KnowledgeElementVue
  },
  inject: ['topics'], // provide - inject works just with parent/child
  emits: ['select-topic']
};
</script>

<template>
  <ul>
    <KnowledgeElementVue
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></KnowledgeElementVue>
  </ul>
</template>
