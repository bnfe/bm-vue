<template lang="html">
  <Container class="document-quick-start">
    <Demo></Demo>
    <Simulator :url="path" />
  </Container>
</template>

<script>
import Container from '../../components/Container';
import Demo from '../../../README.md';
import Simulator from "../components/Simulator";

export default {
  components: {
    Container,
    Demo,
    Simulator
  },
  data() {
    return {
      path: ''
    }
  },
};
</script>

<style scoped lang='scss'>

</style>
