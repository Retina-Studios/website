<script setup lang="ts">
import { standardPages } from '~/data/standardPages'

const page = standardPages.aboutus

useHead({
  title: page.seoTitle,
})
</script>

<template>
  <StandardPageView :page="page" />
</template>
