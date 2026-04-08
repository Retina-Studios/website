<script setup lang="ts">
import { siteSocialLinks } from '~/data/siteSocialLinks'
</script>

<template>
  <footer class="site-footer-clone">
    <div class="footer-inner">
      <NuxtLink to="/" class="footer-logo" aria-label="Retina Studios">
        <img
          src="/images/branding/retina-logo-invert.png"
          alt="Retina Brand logo invert"
          width="134"
          height="103"
        />
      </NuxtLink>

      <div class="footer-columns">
        <section>
          <h3>Διεύθυνση</h3>
          <p>Γερολυμπου 1Δ</p>
          <p>66132, Δράμα</p>
        </section>

        <section>
          <h3>Επικοινωνία</h3>
          <p>2521032666</p>
          <p>693 466 9832</p>
          <p><a href="mailto:info@retinastudios.gr">info@retinastudios.gr</a></p>
        </section>
      </div>

      <div class="footer-bottom">
        <ul class="social-list" aria-label="Γραμμή κοινωνικών μέσων">
          <li v-for="social in siteSocialLinks" :key="social.label">
            <a :href="social.href" target="_blank" rel="noreferrer noopener" :aria-label="social.label">
              <img :src="social.icon" :alt="social.label" width="30" height="30" />
            </a>
          </li>
        </ul>

        <p>© 2026 Retina Studios</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer-clone {
  background: #000;
}

.footer-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 64px 0 28px;
  box-sizing: border-box;
}

.footer-logo {
  width: 134px;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 36px;
}

.footer-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  margin-bottom: 44px;
}

.footer-columns h3 {
  margin: 0 0 18px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  color: #fff;
}

.footer-columns p,
.footer-columns a {
  margin: 0 0 12px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 15px;
  line-height: 1.4;
  color: #e7e7e7;
  text-decoration: none;
}

.footer-bottom {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 22px;
}

.social-list {
  list-style: none;
  display: flex;
  gap: 14px;
  padding: 0;
  margin: 0;
}

.social-list img {
  display: block;
  width: 30px;
  height: 30px;
}

.footer-bottom p {
  grid-column: 3;
  justify-self: end;
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1;
  color: #fff;
}

@media (max-width: 1020px) {
  .footer-inner {
    width: auto;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }

  .footer-bottom {
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 1rem;
  }

  .social-list,
  .footer-bottom p {
    grid-column: 1;
    justify-self: start;
  }
}
</style>
