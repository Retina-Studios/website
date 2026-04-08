<script setup lang="ts">
import { blogPostCards } from '~/data/blogPosts'

definePageMeta({
  path: '/news',
})

useHead({
  title: 'Νέα | Retina Studios',
})
</script>

<template>
  <div class="wix-blog-page">
    <main class="blog-main">
      <section class="blog-feed-section">
        <div class="blog-shell">
          <div class="blog-heading-wrap">
            <h1>Νέα</h1>
          </div>

          <div class="blog-feed">
            <article v-for="post in blogPostCards" :key="post.to" class="blog-post-card">
              <NuxtLink :to="post.to" class="post-image-link">
                <img
                  :src="post.image"
                  :alt="post.alt"
                  width="454"
                  height="341"
                  loading="lazy"
                  decoding="async"
                />
              </NuxtLink>

              <div class="post-content">
                <div class="post-copy">
                  <NuxtLink :to="post.to" class="post-title-link">
                    <h2>{{ post.title }}</h2>
                  </NuxtLink>
                  <p>{{ post.excerpt }}</p>
                </div>

                <div class="post-meta">
                  <span>{{ post.dateLabel }}</span>
                  <span class="post-meta-dot" aria-hidden="true" />
                  <span>{{ post.readTimeLabel }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'RetinaProxima';
  src: url('/fonts/proxima-reg.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'RetinaAvenirHeavy';
  src: url('/fonts/avenir-heavy.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'RetinaAvenirLight';
  src: url('/fonts/avenir-light.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:global(body) {
  margin: 0;
  background: #fff;
  color: #000;
}

.wix-blog-page {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blog-main {
  background: #fff;
}

.blog-feed-section {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding-bottom: 2px;
}

.blog-shell {
  width: 100%;
}

.blog-heading-wrap {
  width: 70%;
  max-width: 658px;
  padding: 40px 20px;
  box-sizing: border-box;
}

.blog-heading-wrap h1 {
  margin: 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
}

.blog-feed {
  width: 940px;
  max-width: 100%;
  margin: 20px auto;
  display: grid;
  gap: 32px;
}

.blog-post-card {
  width: 940px;
  max-width: 100%;
  min-height: 340.5px;
  border: 1px solid rgb(242 242 242 / 75%);
  background: #fff;
  display: grid;
  grid-template-columns: 454px minmax(0, 486px);
  overflow: hidden;
}

.post-image-link {
  display: block;
  width: 454px;
  height: 340.5px;
}

.post-image-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.post-content {
  min-height: 340.5px;
  padding: 28px 36px 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.post-copy {
  flex: 1;
}

.post-title-link {
  color: inherit;
  text-decoration: none;
}

.post-copy h2 {
  margin: 0 0 11px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 22px;
  line-height: 1.4;
  font-weight: 700;
  color: #000;
}

.post-copy p {
  margin: 0;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: #000;
}

.post-meta {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  line-height: 1.4;
  color: #000;
}

.post-meta-dot {
  width: 3px;
  height: 3px;
  border-radius: 999px;
  background: #000;
}

@media (max-width: 1020px) {
  .blog-feed-section {
    width: auto;
  }

  .blog-heading-wrap {
    width: 100%;
    max-width: none;
    padding: 20px 0;
  }

  .blog-heading-wrap h1 {
    font-size: clamp(1.8rem, 8vw, 36px);
  }

  .blog-feed {
    width: 100%;
    margin: 8px 0 20px;
    gap: 20px;
  }

  .blog-post-card {
    width: 100%;
    min-height: 0;
    grid-template-columns: 1fr;
  }

  .post-image-link {
    width: 100%;
    height: auto;
    aspect-ratio: 454 / 341;
  }

  .post-content {
    min-height: 0;
    padding: 20px 18px 18px;
  }
}
</style>
