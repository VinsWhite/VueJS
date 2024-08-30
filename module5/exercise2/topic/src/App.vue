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
  provide() {
    return { // it refers to topics data
      topics: this.topics,
      selectTopic: this.activateTopic
    }
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
  mounted() {
    setTimeout(() => {
      this.topics.push({
        id: 'events',
        title: 'Events',
        description: 'Events are important in Vue',
        fullText: 'Events allow you to trigger code on demand!'
      })
    }, 3000);
  }
};
</script>

<template>
  <div>
    <ActiveElementVue
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></ActiveElementVue>
    <KnowledgeBaseVue></KnowledgeBaseVue>
  </div>
</template>