<script>
import ActiveElementVue from './components/ActiveElement.vue';
import KnowledgeBaseVue from './components/KnowledgeBase.vue';

export default {
  components: {
    ActiveElementVue,
    KnowledgeBaseVue
  },
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
};
</script>

<template>
  <div>
    <ActiveElementVue
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></ActiveElementVue>
    <KnowledgeBaseVue :topics="topics" @select-topic="activateTopic"></KnowledgeBaseVue>
  </div>
</template>