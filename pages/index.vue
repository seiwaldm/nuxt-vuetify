<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <v-main>
    <v-container flex flex-col items-center gap-4>
      <h1 b-1 text-red w="200px" text-center>Home</h1>
      <div flex gap-2></div>
      <div flex flex-wrap justify-center gap-4>
        <v-btn> Button </v-btn>
        <v-btn color="primary">Primary</v-btn>
        <v-btn color="secondary">Secondary</v-btn>
        <v-btn color="accent">Accent</v-btn>
        <v-btn color="warning" variant="outlined">Warning</v-btn>
        <v-btn color="error" variant="outlined">Error</v-btn>
        <v-btn color="success" variant="outlined">Success</v-btn>
        <v-btn color="info" variant="outlined">Info</v-btn>
      </div>
    </v-container>
  </v-main>
</template>
