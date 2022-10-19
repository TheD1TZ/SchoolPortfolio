<template>
  <div class="w-full bg-black">
    <div class="grid text-center justify-center p-20">
      <h1 class="text-pGreen text-7xl font-extrabold">Development</h1>
      <h2 class="text-pGray text-3xl font-extrabold">All My Coding Projects</h2>
    </div>
    <div class="p-12">
      <div class="flex justify-center gap-12">
        <Project
          Title="Project Title"
          Description="Project Description"
          Image="public/econvert.jpeg"
          Link="https://www.google.com"
        />

        <Project
          Title="Project Title"
          Description="Project Description"
          Image="public/econvert.jpeg"
          Link="https://www.google.com"
        />

        <Project
          Title="Project Title"
          Description="Project Description"
          Image="public/econvert.jpeg"
          Link="https://www.google.com"
        />

        <Project
          Title="Project Title"
          Description="Project Description"
          Image="public/econvert.jpeg"
          Link="https://www.google.com"
        />

        <Project
          Title="Project Title"
          Description="Project Description"
          Image="public/econvert.jpeg"
          Link="https://www.google.com"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../../components/Project.vue";
export default {
  name: "Develop",
  data() {
    return {
      // ...
    };
  },
  methods: {
    // ...
  },
  components: { Project },
};
</script>
