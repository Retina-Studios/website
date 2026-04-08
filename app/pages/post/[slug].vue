<script setup lang="ts">
import { getBlogPostBySlug } from '~/data/blogPosts'

type SocialLink = {
  label: string
  href: string
  icon: string
}

const route = useRoute()

const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/retinastudios.gr/',
    icon: '/images/social/instagram.png',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/retinastudios.gr',
    icon: '/images/social/facebook.png',
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@retinastudiosgr',
    icon: '/images/social/youtube.png',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@retinastudiosgr',
    icon: '/images/social/tiktok.png',
  },
]


const slug = computed(() => {
  const value = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
  if (!value) {
    return ''
  }

  const asString = String(value)

  try {
    return decodeURIComponent(asString)
  } catch {
    return asString
  }
})

const post = computed(() => getBlogPostBySlug(slug.value))

const firstParagraph = computed(() => {
  const paragraph = post.value?.blocks.find((block) => block.type === 'paragraph')
  if (!paragraph || paragraph.type !== 'paragraph') {
    return null
  }

  return paragraph.text
})

useHead(() => ({
  title: post.value ? `${post.value.title} | Retina Studios` : 'Blog Post | Retina Studios',
  meta: firstParagraph.value
    ? [
        {
          name: 'description',
          content: firstParagraph.value,
        },
      ]
    : [],
}))


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

.wix-blog-post-page {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.site-header-clone {
  background: #fff;
}

.header-container {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  min-height: 116px;
  position: relative;
  display: block;
}

.brand-link {
  display: block;
  width: 282px;
  height: 31px;
  position: absolute;
  left: -141px;
  top: 42px;
}

.brand-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-nav {
  width: 882px;
  height: 50px;
  position: absolute;
  left: 308px;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
}

.nav-group {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.nav-item {
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: #000;
  text-decoration: none;
  padding: 5px 11px;
  transition: background-color 0.4s ease, color 0.4s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgb(249 211 66);
  color: #fff;
}

.nav-caret {
  font-size: 10px;
  line-height: 1;
  margin-left: -7px;
  margin-right: 8px;
  color: #000;
}

.sub-menu {
  list-style: none;
  margin: 0;
  padding: 4px 0;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: #fff;
  border: 1px solid #dbdbd1;
  display: none;
  z-index: 30;
}

.sub-menu li a {
  display: block;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 13px;
  line-height: 1.35;
  color: #000;
  text-decoration: none;
  padding: 8px 12px;
  white-space: nowrap;
}

.sub-menu li a:hover {
  background: rgb(249 211 66);
  color: #fff;
}

.has-children:hover .sub-menu,
.has-children:focus-within .sub-menu {
  display: block;
}

.post-main {
  background: #fff;
}

.post-shell {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding-bottom: 50px;
}

.post-title-block {
  width: 940px;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 26px;
}

.back-link {
  display: inline-block;
  margin-bottom: 14px;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 13px;
  line-height: 1.4;
  color: #1d1d1d;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

.post-title-block h1 {
  margin: 0;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: clamp(2rem, 4vw, 48px);
  line-height: 1.12;
  font-weight: 700;
  color: #000;
}

.post-meta {
  margin-top: 14px;
  margin-bottom: 18px;
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

.hero-image {
  width: 940px;
  max-width: 100%;
  margin: 0 auto 30px;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.post-content {
  width: 940px;
  max-width: 100%;
  margin: 0 auto;
}

.body-paragraph {
  margin: 0 0 18px;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  line-height: 1.55;
  color: #1b1b1b;
}

.content-heading {
  margin: 32px 0 16px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 700;
  color: #000;
}

.content-heading.small {
  font-size: 28px;
}

.content-list {
  margin: 0 0 20px;
  padding: 0 0 0 25px;
  list-style: disc;
}

.content-list li {
  margin: 0 0 10px;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  line-height: 1.55;
  color: #1b1b1b;
}

.inline-image {
  margin: 26px 0;
}

.inline-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.post-gallery {
  margin: 10px 0 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.gallery-item {
  margin: 0;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.missing-post {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 1.5rem auto 3rem;
}

.missing-post h1 {
  margin: 0 0 0.8rem;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 32px;
  font-weight: 400;
}

.missing-post p,
.missing-post a {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #000;
}

.site-footer-clone {
  background: #000;
  color: #fff;
}

.footer-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 62px 0 45px;
}

.footer-logo {
  display: block;
  width: 134px;
  height: 103px;
  margin: 0 auto 44px;
}

.footer-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-columns {
  display: grid;
  grid-template-columns: 247px 257px 321px;
  justify-content: space-between;
  gap: 1.2rem;
}

.footer-columns h3 {
  margin: 0 0 21px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 26px;
  line-height: 1;
  font-weight: 400;
}

.footer-columns p,
.footer-columns a,
.hours-grid span {
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.85;
  color: #fff;
  text-decoration: none;
}

.footer-columns p {
  margin: 0;
}

.hours-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 12px;
}

.hours-grid span:nth-child(even) {
  text-align: right;
}

.footer-bottom {
  margin-top: 34px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.social-list {
  grid-column: 2;
  justify-self: center;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.social-list a,
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
  .header-container {
    width: auto;
    min-height: auto;
    padding: 1.2rem 0 1rem;
    position: static;
  }

  .brand-link {
    position: static;
    margin-bottom: 0.8rem;
  }

  .main-nav {
    width: auto;
    height: auto;
    position: static;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .post-shell,
  .footer-inner {
    width: auto;
  }

  .post-title-block,
  .hero-image,
  .post-content {
    width: 100%;
  }

  .post-title-block h1 {
    font-size: clamp(2rem, 10vw, 42px);
  }

  .body-paragraph,
  .content-list li {
    font-size: 18px;
  }

  .content-heading,
  .content-heading.small {
    font-size: clamp(1.5rem, 8vw, 32px);
  }

  .post-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
.nav-toggle {
  display: none;
  width: 40px;
  height: 36px;
  border: 1px solid #000;
  background: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  padding: 0;
  cursor: pointer;
}

.nav-toggle-bar {
  width: 20px;
  height: 2px;
  background: #000;
  display: block;
}

.nav-close {
  display: none;
}
@media (max-width: 1020px) {
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
  }

  .brand-link {
    margin-bottom: 0;
  }

  .nav-toggle {
    display: inline-flex;
    z-index: 60;
  }

  .main-nav {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 18px;
    background: rgb(249 211 66);
    padding: 6rem 2rem 2.5rem;
    overflow-y: auto;
    z-index: 80;
  }

  .main-nav.is-open {
    display: flex;
  }

  .nav-close {
    display: block;
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: 0;
    font-size: 32px;
    line-height: 1;
    color: #000;
    cursor: pointer;
  }

  .nav-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .nav-item {
    width: auto;
    padding: 6px 0;
    font-size: 18px;
    text-align: center;
  }

  .nav-item:hover,
  .nav-item.active {
    background: transparent;
    color: #000;
  }

  .nav-caret {
    margin-left: 8px;
  }

  .sub-menu {
    position: static;
    display: flex;
    flex: 0 0 100%;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    border: 0;
    background: transparent;
    padding: 0;
  }

  .sub-menu li a {
    white-space: normal;
    padding: 2px 0;
    color: #000;
  }
}

</style>
