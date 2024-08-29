<script>
import KnowledgeElementVue from './KnowledgeElement.vue';
export default {
  components: {
    KnowledgeElementVue
  },
  props: ['topics'],
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
      @select-topic="$emit('select-topic', $event)"
    ></KnowledgeElementVue>
  </ul>
</template>
