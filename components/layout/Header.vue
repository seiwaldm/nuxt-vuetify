<script setup>
const router = useRouter();
</script>

<template>
  <header>
    <nav p-2 flex justify-end gap-2 underline>
      <span cursor-pointer @click="router.push('/')"
        >Home-Link with router.push()</span
      >
      <NuxtLink to="/dummy">Dummy-Link with NuxtLink</NuxtLink>
    </nav>
  </header>
</template>
