<template>
  <div class="Home">
    Hello this is PL Laboratory Hompage!.
  </div>
</template>

<script lang = 'ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  created() {
    console.log('hello world');
  }

  mounted() {
  }
};
</script>

<style>
</style>