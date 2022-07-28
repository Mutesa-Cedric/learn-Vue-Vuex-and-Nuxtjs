<template>
  <button @click="clickButton()" :style="{ background: color }" class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: "button",
  props: ["text", "color"],
  methods: {
    clickButton(){
        console.log('clicking a button')
    }
  }
};
</script>

<style scoped>
</style>