<script>
import KnowledgeGridVue from './KnowledgeGrid.vue';

export default {
  components: {
    KnowledgeGridVue
  },
  props: ['topics'],
  emits: ['select-topic'],
};
</script>

<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGridVue :topics="topics" @select-topic="$emit('select-topic', $event)"></KnowledgeGridVue>
  </section>
</template>
