<template>
  <div @click="change">
    {{title}}
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    change() {
      this.$emit('update:title', 'bbb')
    }
  }
}
</script>
<style>
</style>

