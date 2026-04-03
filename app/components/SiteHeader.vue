<template>
  <header class="site-header">
    <div class="inner">
      <NuxtLink to="/" class="brand">Retina Studios</NuxtLink>
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/aboutus">About</NuxtLink>
        <NuxtLink to="/work">Work</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/film-productions">Productions</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/news">Blog</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/post/white-night-2025">Blog Post</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(245, 245, 241, 0.9);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid #e4e4dd;
}

.inner {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  color: #111;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.nav a {
  text-decoration: none;
  color: #333;
  padding: 0.4rem 0.6rem;
  border-radius: 0.4rem;
}

.nav a:hover,
.nav a.router-link-active {
  background: #e9e9df;
  color: #111;
}
</style>
