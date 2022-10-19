<template>
  <div class="bg-pWhite rounded-sm w-32">
    <h1 class="text-xl">{{ Title }}</h1>
    <img class="2-" :src="Image" />
    <p class="text-sm">{{ Description }}</p>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    Title: String,
    Description: String,
    Image: String,
    Link: String,
  },
};
</script>
