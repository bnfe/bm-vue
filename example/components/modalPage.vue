<template lang="html">
  <Container class="modal-page">
    <PageHeader title="模态框 Modal" />
     <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/modal.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/BadgePage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>
