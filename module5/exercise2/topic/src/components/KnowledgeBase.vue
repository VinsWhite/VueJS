<script>
import KnowledgeGridVue from './KnowledgeGrid.vue';

export default {
  components: {
    KnowledgeGridVue
  },
  emits: ['select-topic'],
};
</script>

<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGridVue></KnowledgeGridVue>
  </section>
</template>
