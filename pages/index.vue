<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <v-main>
    <v-container flex flex-col items-center gap-4>
      <h1 b-1 text-red w="200px" text-center>Home</h1>
      <div flex gap-2></div>
      <div flex justify-center gap-4>
        <v-btn> Button </v-btn>
        <v-btn color="primary">Primary</v-btn>
        <v-btn color="secondary">Secondary</v-btn>
        <v-btn color="warning">Warning</v-btn>
        <v-btn color="error">Error</v-btn>
        <v-btn color="success">Success</v-btn>
        <v-btn color="info">Info</v-btn>
      </div>
    </v-container>
  </v-main>
</template>
