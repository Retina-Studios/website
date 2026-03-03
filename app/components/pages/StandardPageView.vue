<script setup lang="ts">
import type { StandardPageContent } from '~/data/standardPages'

defineProps<{
  page: StandardPageContent
}>()
</script>

<template>
  <PageHeroBlock :eyebrow="page.eyebrow" :title="page.title" :lead="page.lead" />

  <CardSection
    v-for="section in page.sections"
    :key="section.heading"
    :heading="section.heading"
    :intro="section.intro"
    :cards="section.cards"
  />

  <CtaSection
    :title="page.cta.title"
    :text="page.cta.text"
    :action-label="page.cta.actionLabel"
    :action-to="page.cta.actionTo"
  />
</template>
