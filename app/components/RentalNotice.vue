<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'Σημαντική σημείωση',
  },
)
</script>

<template>
  <aside class="rental-notice">
    <strong class="rental-notice__title">
      <span class="rental-notice__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M12 3.5L21 20H3L12 3.5ZM12 9.1C11.45 9.1 11 9.55 11 10.1V13.9C11 14.45 11.45 14.9 12 14.9C12.55 14.9 13 14.45 13 13.9V10.1C13 9.55 12.55 9.1 12 9.1ZM12 18C12.69 18 13.25 17.44 13.25 16.75C13.25 16.06 12.69 15.5 12 15.5C11.31 15.5 10.75 16.06 10.75 16.75C10.75 17.44 11.31 18 12 18Z"
          />
        </svg>
      </span>
      <span>{{ title }}</span>
    </strong>
    <div class="rental-notice__body">
      <slot />
    </div>
  </aside>
</template>

<style scoped>
.rental-notice {
  margin: 24px 0;
  padding: 16px 18px;
  background: #fbefad;
}

.rental-notice__title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rental-notice__mark {
  display: inline-flex;
  width: 26px;
  height: 26px;
  flex: 0 0 26px;
}

.rental-notice__mark svg {
  width: 100%;
  height: 100%;
  fill: currentcolor;
}

.rental-notice__body {
  margin-top: 8px;
}

.rental-notice__body:deep(p:first-child) {
  margin-top: 0;
}

.rental-notice__body:deep(p:last-child) {
  margin-bottom: 0;
}
</style>
