<template>
  <div class="site-shell">
    <SiteHeader />
    <main class="page-content">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.site-shell {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #f5f5f1;
  color: #111;
}

.page-content {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
  padding: 1.5rem 0 3rem;
}
</style>
