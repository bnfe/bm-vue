<template lang="html">
  <Container class="message-page">
    <PageHeader title="消息 Message" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/message.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/MessagePage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>
