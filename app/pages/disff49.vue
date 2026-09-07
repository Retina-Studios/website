<script setup lang="ts">
import { disffProgrammeDetails, type ProgrammeDetail } from '~/data/disffProgrammeDetails'

definePageMeta({
  layout: false,
  alias: ['/disff'],
})

type Event = {
  time: string
  title: string
  eyebrow?: string
  note?: string
  free?: boolean
  detailsKey?: string
}

type Day = {
  iso: string
  weekday: string
  shortWeekday: string
  date: string
}

const days: Day[] = [
  { iso: '2026-09-06', weekday: 'Κυριακή', shortWeekday: 'Κυρ', date: '6 Σεπ' },
  { iso: '2026-09-07', weekday: 'Δευτέρα', shortWeekday: 'Δευ', date: '7 Σεπ' },
  { iso: '2026-09-08', weekday: 'Τρίτη', shortWeekday: 'Τρι', date: '8 Σεπ' },
  { iso: '2026-09-09', weekday: 'Τετάρτη', shortWeekday: 'Τετ', date: '9 Σεπ' },
  { iso: '2026-09-10', weekday: 'Πέμπτη', shortWeekday: 'Πεμ', date: '10 Σεπ' },
  { iso: '2026-09-11', weekday: 'Παρασκευή', shortWeekday: 'Παρ', date: '11 Σεπ' },
  { iso: '2026-09-12', weekday: 'Σάββατο', shortWeekday: 'Σαβ', date: '12 Σεπ' },
]

const venues = [
  { id: 'olympia', name: 'Ολύμπια', detail: 'Κινηματογράφος Ολύμπια' },
  { id: 'alexandros', name: 'Αλέξανδρος', detail: 'Θερινός Κινηματογράφος' },
  { id: 'cyclops', name: 'Κύκλωψ', detail: 'Πολιτιστικός χώρος «Κύκλωψ»' },
  { id: 'arrenon', name: 'Αρρένων', detail: 'Γυμνάσιο Αρρένων' },
  { id: 'conservatory', name: 'Δημοτικό Ωδείο', detail: 'Αίθουσα Δημοτικού Ωδείου' },
  { id: 'eleftheria', name: 'Αίθουσα Ελευθερία', detail: '1ος όροφος' },
] as const

const schedule: Record<string, Record<string, Event[]>> = {
  '2026-09-06': {
    olympia: [{ time: '21:30', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 1' }],
    alexandros: [{ time: '23:15', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 1 · Επανάληψη', note: 'Σε περίπτωση βροχής: Δημοτικό Ωδείο στις 23:00.' }],
    conservatory: [{ time: '19:30', title: 'Τελετή Έναρξης' }],
  },
  '2026-09-07': {
    olympia: [
      { time: '17:00', eyebrow: 'Διεθνές Σπουδαστικό Διαγωνιστικό', title: 'Πρόγραμμα 1' },
      { time: '19:30', eyebrow: 'Διεθνές Διαγωνιστικό', title: 'Πρόγραμμα 1' },
      { time: '21:30', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 2' },
    ],
    alexandros: [
      { time: '20:30', eyebrow: 'DISFF × Φεστιβάλ Ταινιών Μικρού Μήκους Γλασκώβης', title: 'Ποιος Δρόμος για το Σπίτι;', note: 'Σε περίπτωση βροχής: Δημοτικό Ωδείο στις 21:00.' },
      { time: '23:15', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 2 · Επανάληψη', note: 'Σε περίπτωση βροχής: Δημοτικό Ωδείο στις 23:30.' },
    ],
    cyclops: [{ time: '20:30', title: 'Αφιέρωμα στην Αλίντα Δημητρίου 1', free: true, note: 'Σε περίπτωση βροχής: Αμφιθέατρο 1ου ΕΠΑΛ στις 21:00.' }],
    arrenon: [{ time: '20:30', title: 'Κινηματογραφικό Εργαστήριο Δράμας 1', free: true, note: 'Σε περίπτωση βροχής: Αμφιθέατρο «Κωνσταντίνος Καραμανλής» στις 20:30.' }],
    conservatory: [{ time: '18:30', title: 'KIDDO 1', eyebrow: 'Ηλικίες 4+', free: true }],
  },
  '2026-09-08': {
    olympia: [
      { time: '17:00', eyebrow: 'Διεθνές Σπουδαστικό Διαγωνιστικό', title: 'Πρόγραμμα 2' },
      { time: '19:30', eyebrow: 'Διεθνές Διαγωνιστικό', title: 'Πρόγραμμα 2' },
      { time: '21:30', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 3' },
    ],
    alexandros: [
      { time: '18:00', title: 'Λογοτεχνικά Απογεύματα', detailsKey: 'literatureAtalanti' },
      { time: '20:30', title: 'Αφιέρωμα στον Χρήστο Δήμα' },
      { time: '23:15', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 3 · Επανάληψη' },
    ],
    cyclops: [{ time: '20:30', title: 'Αφιέρωμα στην Αλίντα Δημητρίου 2' }],
    eleftheria: [{ time: '15:00', title: 'Ομιλία SFH', note: 'Ολοκληρώνεται στις 16:30.', detailsKey: 'sfhGroupDynamics' }],
  },
  '2026-09-09': {
    olympia: [
      { time: '17:00', eyebrow: 'Εθνικό Σπουδαστικό Διαγωνιστικό', title: 'Πρόγραμμα 1' },
      { time: '19:30', eyebrow: 'Διεθνές Διαγωνιστικό', title: 'Πρόγραμμα 3' },
      { time: '21:30', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 4' },
    ],
    alexandros: [
      { time: '20:30', eyebrow: 'Διεθνές Διαγωνιστικό Ντοκιμαντέρ', title: 'Πρόγραμμα 1' },
      { time: '23:15', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 4 · Επανάληψη' },
    ],
    cyclops: [{ time: '20:30', title: 'Βαλκανικές Ιστορίες 1' }],
    arrenon: [{ time: '20:30', title: 'Κινηματογραφικό Εργαστήριο Δράμας 2' }],
    conservatory: [
      { time: '18:30', title: 'KIDDO 2', eyebrow: 'Ηλικίες 8+', free: true },
      { time: '18:30', title: 'Παρουσίαση Φοιτητικών Ταινιών ΕΑΠ', free: true, note: 'Μικρή αίθουσα.' },
    ],
    eleftheria: [
      { time: '14:00', title: 'Παρουσίαση Pitching Lab', detailsKey: 'pitchingLab' },
      { time: '16:00', title: 'Εργαστήριο SFH', detailsKey: 'sfhStoryboard' },
    ],
  },
  '2026-09-10': {
    olympia: [
      { time: '17:00', eyebrow: 'Εθνικό Σπουδαστικό Διαγωνιστικό', title: 'Πρόγραμμα 2' },
      { time: '19:30', eyebrow: 'Διεθνές Διαγωνιστικό', title: 'Πρόγραμμα 4' },
      { time: '21:30', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 5' },
    ],
    alexandros: [
      { time: '12:30', title: 'Ομιλία SFH', detailsKey: 'sfhDocumentary' },
      { time: '20:30', eyebrow: 'Διεθνές Διαγωνιστικό Ντοκιμαντέρ', title: 'Πρόγραμμα 2' },
      { time: '23:15', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 5 · Επανάληψη' },
    ],
    cyclops: [{ time: '20:30', title: 'Βαλκανικές Ιστορίες 2' }],
    conservatory: [{ time: '18:30', title: 'KIDDO 3', eyebrow: 'Ηλικίες 12+', free: true }],
    eleftheria: [
      { time: '11:00', title: 'Εργαστήριο SFH', detailsKey: 'sfhComposer' },
      { time: '17:30', title: 'Ομιλία SFH', detailsKey: 'sfhForensics' },
    ],
  },
  '2026-09-11': {
    olympia: [
      { time: '17:00', eyebrow: 'Εθνικό Σπουδαστικό Διαγωνιστικό', title: 'Πρόγραμμα 3' },
      { time: '19:30', eyebrow: 'Διεθνές Διαγωνιστικό', title: 'Πρόγραμμα 5' },
      { time: '21:30', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 6' },
    ],
    alexandros: [
      { time: '18:00', title: 'Λογοτεχνικά Απογεύματα', detailsKey: 'literatureMavroeidis' },
      { time: '20:30', eyebrow: 'Διεθνές Διαγωνιστικό Ντοκιμαντέρ', title: 'Πρόγραμμα 3' },
      { time: '23:15', eyebrow: 'Εθνικό Διαγωνιστικό', title: 'Πρόγραμμα 6 · Επανάληψη' },
    ],
    cyclops: [{ time: '20:30', title: 'Βαλκανικές Ιστορίες 3' }],
    eleftheria: [
      { time: '11:00', title: 'Εργαστήριο SFH', detailsKey: 'sfhYoungProducers' },
      { time: '16:00', title: 'Ομιλία SFH', detailsKey: 'sfhCopyright' },
    ],
  },
  '2026-09-12': {
    olympia: [
      { time: '09:30', title: 'KIDDO 1 · Επανάληψη', eyebrow: 'Ηλικίες 4+' },
      { time: '11:00', title: 'KIDDO 2 · Επανάληψη', eyebrow: 'Ηλικίες 8+' },
      { time: '12:30', title: 'KIDDO 3 · Επανάληψη', eyebrow: 'Ηλικίες 12+' },
      { time: '16:00', title: 'Electric Swan & Ομιλία SFH', eyebrow: 'Ειδική Προβολή' },
    ],
    alexandros: [{ time: '11:30', title: 'Τελετή Εθνικών Βραβείων' }],
    conservatory: [{ time: '20:00', title: 'Τελετή Λήξης' }],
    eleftheria: [{ time: '14:00', title: 'Εργαστήριο SFH', detailsKey: 'sfhYoungProducers' }],
  },
}

const tutorialOpen = ref(true)
const dayIndex = ref(0)
const venueIndex = ref(0)
const direction = ref<'next' | 'prev'>('next')
const content = ref<HTMLElement | null>(null)
let touchStartX = 0

const activeDay = computed(() => days[dayIndex.value]!)
const activeVenue = computed(() => venues[venueIndex.value]!)
const activeEvents = computed(() => schedule[activeDay.value.iso]?.[activeVenue.value.id] ?? [])

function programmeDetail(event: Event): ProgrammeDetail | undefined {
  if (event.detailsKey) return disffProgrammeDetails[event.detailsKey]
  const number = event.title.match(/(?:Πρόγραμμα|KIDDO|Ιστορίες)\s*(\d)/i)?.[1]

  if (event.title.includes('Πρόγραμμα') && number) {
    if (event.eyebrow?.includes('Εθνικό Σπουδαστικό')) return disffProgrammeDetails[`nationalStudent${number}`]
    if (event.eyebrow?.includes('Διεθνές Σπουδαστικό')) return disffProgrammeDetails[`internationalStudent${number}`]
    if (event.eyebrow?.includes('Ντοκιμαντέρ')) return disffProgrammeDetails[`documentary${number}`]
    if (event.eyebrow?.includes('Εθνικό')) return disffProgrammeDetails[`national${number}`]
    if (event.eyebrow?.includes('Διεθνές')) return disffProgrammeDetails[`international${number}`]
  }

  if (event.title.startsWith('KIDDO') && number) return disffProgrammeDetails[`kiddo${number}`]
  if (event.title.includes('Βαλκανικές Ιστορίες') && number) return disffProgrammeDetails[`balkan${number}`]
  if (event.title.includes('Ποιος Δρόμος')) return disffProgrammeDetails.glasgow
  if (event.title.includes('Αλίντα Δημητρίου 1')) return disffProgrammeDetails.alinda1
  if (event.title.includes('Αλίντα Δημητρίου 2')) return disffProgrammeDetails.alinda2
  if (event.title.includes('Χρήστο Δήμα')) return disffProgrammeDetails.christosDemas
  if (event.title.includes('Εργαστήριο Δράμας 1')) return disffProgrammeDetails.filmLab1
  if (event.title.includes('Εργαστήριο Δράμας 2')) return disffProgrammeDetails.filmLab2
  if (event.title.includes('Φοιτητικών Ταινιών')) return disffProgrammeDetails.houShowcase
  if (event.title.includes('Electric Swan')) return disffProgrammeDetails.electricSwan
}

function moveDay(amount: number) {
  if (tutorialOpen.value) {
    tutorialOpen.value = false
    return
  }
  const next = dayIndex.value + amount
  if (next < 0 || next >= days.length) return
  direction.value = amount > 0 ? 'next' : 'prev'
  dayIndex.value = next
  content.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

function moveVenue(amount: number) {
  if (tutorialOpen.value) tutorialOpen.value = false
  direction.value = amount > 0 ? 'next' : 'prev'
  venueIndex.value = (venueIndex.value + amount + venues.length) % venues.length
  content.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

function onTouchStart(event: TouchEvent) {
  touchStartX = event.touches[0]?.clientX ?? 0
}

function onTouchEnd(event: TouchEvent) {
  const delta = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX
  if (Math.abs(delta) < 70) return
  moveDay(delta < 0 ? 1 : -1)
}

useHead({
  title: 'DISFF49 · Πρόγραμμα',
  htmlAttrs: { lang: 'el' },
  meta: [
    { name: 'description', content: 'Το πρόγραμμα του 49ου Διεθνούς Φεστιβάλ Ταινιών Μικρού Μήκους Δράμας, 6–12 Σεπτεμβρίου 2026.' },
    { name: 'theme-color', content: '#252f80' },
  ],
})
</script>

<template>
  <div class="festival-app">
    <header class="date-nav">
      <button type="button" :disabled="!tutorialOpen && dayIndex === 0" aria-label="Προηγούμενη ημέρα" @click="moveDay(-1)">←</button>
      <div class="nav-title" aria-live="polite">
        <span>{{ tutorialOpen ? '6–12 ΣΕΠΤΕΜΒΡΙΟΥ' : activeDay.weekday }}</span>
        <strong>{{ tutorialOpen ? 'ΕΠΙΛΕΞΕ ΗΜΕΡΑ' : activeDay.date }}</strong>
      </div>
      <button type="button" :disabled="!tutorialOpen && dayIndex === days.length - 1" aria-label="Επόμενη ημέρα" @click="moveDay(1)">→</button>
    </header>

    <div class="day-progress" aria-hidden="true">
      <i v-for="(_, index) in days" :key="index" :class="{ active: !tutorialOpen && index === dayIndex }" />
    </div>

    <main v-if="tutorialOpen" class="tutorial-content">
      <div class="choose-day">
        <span class="instruction-arrow arrow-up" aria-hidden="true" />
        <p>ΕΠΙΛΕΞΕ ΗΜΕΡΑ</p>
      </div>

      <h1><span>DISFF 49</span>ΠΡΟΓΡΑΜΜΑ</h1>

      <div class="choose-venue">
        <p>ΕΠΙΛΕΞΕ ΧΩΡΟ</p>
        <span class="instruction-arrow arrow-down" aria-hidden="true" />
      </div>
    </main>

    <main v-else ref="content" class="schedule" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
      <div class="schedule-heading">
        <p>{{ activeVenue.detail }}</p>
        <h2>Πρόγραμμα</h2>
        <span>{{ activeEvents.length }} {{ activeEvents.length === 1 ? 'εκδήλωση' : 'εκδηλώσεις' }}</span>
      </div>

      <Transition :name="direction === 'next' ? 'slide-next' : 'slide-prev'" mode="out-in">
        <div :key="`${activeDay.iso}-${activeVenue.id}`" class="event-list">
          <article v-for="event in activeEvents" :key="`${event.time}-${event.title}`" class="event-card">
            <time>{{ event.time }}</time>
            <div class="event-info">
              <p v-if="event.eyebrow" class="event-eyebrow">{{ event.eyebrow }}</p>
              <h3>{{ event.title }}</h3>
              <p v-if="event.note" class="event-note">{{ event.note }}</p>
              <span v-if="event.free" class="free-tag">Ελεύθερη είσοδος</span>

              <div v-if="programmeDetail(event)" class="programme-detail">
                <h4 v-if="programmeDetail(event)?.heading" class="detail-heading">{{ programmeDetail(event)?.heading }}</h4>
                <p v-if="programmeDetail(event)?.description" class="programme-description">
                  {{ programmeDetail(event)?.description }}
                </p>
                <ol v-if="programmeDetail(event)?.items?.length" class="film-list">
                  <li v-for="film in programmeDetail(event)?.items" :key="`${film.title}-${film.creator}`">
                    <h4>{{ film.title }}</h4>
                    <p v-if="film.creator">{{ film.creator }}</p>
                    <small v-if="film.meta">{{ film.meta }}</small>
                  </li>
                </ol>
                <p v-if="programmeDetail(event)?.qa" class="qa-label">Θα ακολουθήσει Q&amp;A</p>
              </div>
            </div>
          </article>

          <div v-if="!activeEvents.length" class="empty-state">
            <div class="sleepy-eye" aria-hidden="true">— ◡ —</div>
            <h3>Δεν υπάρχει κάτι σήμερα</h3>
            <p>Δοκίμασε έναν άλλο χώρο με τα παρακάτω βέλη.</p>
          </div>
        </div>
      </Transition>

    </main>

    <div class="venue-progress" aria-hidden="true">
      <i v-for="(_, index) in venues" :key="index" :class="{ active: !tutorialOpen && index === venueIndex }" />
    </div>

    <nav class="venue-nav" aria-label="Επιλογή χώρου">
      <button type="button" aria-label="Προηγούμενος χώρος" @click="moveVenue(-1)">←</button>
      <div class="nav-title" aria-live="polite">
        <span>ΧΩΡΟΣ ΠΡΟΒΟΛΗΣ</span>
        <strong>{{ tutorialOpen ? 'ΕΠΙΛΕΞΕ ΧΩΡΟ' : activeVenue.name }}</strong>
      </div>
      <button type="button" aria-label="Επόμενος χώρος" @click="moveVenue(1)">→</button>
    </nav>
  </div>
</template>

<style scoped>
@font-face { font-family: 'Avenir'; src: url('/fonts/avenir-light.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Avenir'; src: url('/fonts/avenir-heavy.woff2') format('woff2'); font-weight: 800; font-display: swap; }

:global(*) { box-sizing: border-box; }
:global(html) { background: #252f80; }
:global(body) { margin: 0; overscroll-behavior: none; }
:global(button) { font: inherit; }

.festival-app {
  --indigo: #252f80;
  --ink: #111426;
  --yellow: #ffc63d;
  --pink: #f496c4;
  --paper: #f5f2e9;
  position: fixed;
  inset: 0;
  display: grid;
  grid-template-rows: 76px 11px minmax(0, 1fr) 11px 88px;
  overflow: hidden;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Avenir', Arial, sans-serif;
}

.date-nav, .venue-nav {
  z-index: 10;
  display: grid;
  grid-template-columns: 72px 1fr 72px;
  align-items: stretch;
}

.date-nav { background: var(--indigo); color: #fff; }
.venue-nav { background: var(--yellow); color: var(--ink); padding-bottom: env(safe-area-inset-bottom); }

.date-nav button, .venue-nav button {
  border: 0;
  background: transparent;
  color: inherit;
  font-size: 29px;
  font-weight: 400;
  cursor: pointer;
  touch-action: manipulation;
}

.date-nav button:disabled { opacity: .22; cursor: default; }
.date-nav button:not(:disabled):active, .venue-nav button:active { background: rgb(255 255 255 / 12%); }

.nav-title { display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 0; line-height: 1.05; }
.nav-title span { margin-bottom: 4px; font-size: 10px; font-weight: 800; letter-spacing: .17em; text-transform: uppercase; opacity: .72; }
.nav-title strong { max-width: 100%; overflow: hidden; font-size: 21px; font-weight: 800; text-overflow: ellipsis; white-space: nowrap; }
.venue-nav .nav-title strong { font-size: 19px; }

.day-progress, .venue-progress { z-index: 11; display: grid; background: #151c5d; }
.day-progress { grid-template-columns: repeat(7, 1fr); }
.venue-progress { grid-template-columns: repeat(6, 1fr); background: #dca719; }
.day-progress i, .venue-progress i { background: transparent; transition: background .25s ease; }
.day-progress i.active { background: var(--pink); }
.venue-progress i.active { background: #d94827; }

.schedule { overflow-y: auto; -webkit-overflow-scrolling: touch; padding: 28px 20px 38px; }
.schedule-heading { position: relative; max-width: 700px; margin: 0 auto 26px; }
.schedule-heading p { margin: 0 0 4px; color: var(--indigo); font-size: 11px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
.schedule-heading h2 { margin: 0; font-size: clamp(36px, 10vw, 58px); line-height: .95; letter-spacing: -.055em; }
.schedule-heading > span { position: absolute; right: 2px; bottom: 4px; color: #696a72; font-size: 12px; }

.event-list { max-width: 700px; min-height: 260px; margin: 0 auto; }
.event-card { display: grid; grid-template-columns: 70px 1fr; gap: 14px; padding: 22px 0; border-top: 1px solid rgb(17 20 38 / 18%); }
.event-card:last-child { border-bottom: 1px solid rgb(17 20 38 / 18%); }
.event-card time { color: var(--indigo); font-size: 21px; font-weight: 800; line-height: 1; letter-spacing: -.04em; }
.event-info { min-width: 0; }
.event-eyebrow { margin: 0 0 5px; color: #d94827; font-size: 10px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.event-info h3 { margin: 0; font-size: 22px; line-height: 1.05; letter-spacing: -.025em; }
.event-note { margin: 10px 0 0; color: #5a5b64; font-size: 13px; line-height: 1.4; }
.free-tag { display: inline-block; margin-top: 11px; padding: 5px 8px 4px; background: var(--pink); font-size: 9px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.programme-detail { margin-top: 20px; padding-top: 18px; border-top: 1px solid rgb(17 20 38 / 12%); }
.detail-heading { margin: 0 0 8px; color: var(--indigo); font-size: 16px; line-height: 1.2; }
.programme-description { margin: 0 0 18px; font-size: 14px; line-height: 1.55; }
.film-list { display: grid; gap: 0; margin: 0; padding: 0; list-style: none; }
.film-list li { position: relative; padding: 13px 0 13px 20px; border-top: 1px solid rgb(17 20 38 / 9%); }
.film-list li::before { position: absolute; top: 18px; left: 0; width: 7px; height: 7px; background: var(--pink); border-radius: 50%; content: ''; }
.film-list h4 { margin: 0 0 4px; font-size: 16px; line-height: 1.2; }
.film-list p { margin: 0 0 3px; color: #51525a; font-size: 12px; line-height: 1.35; }
.film-list small { display: block; color: var(--indigo); font-size: 11px; font-weight: 800; line-height: 1.35; }
.qa-label { margin: 14px 0 0; color: #d94827; font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }

.empty-state { display: flex; min-height: 280px; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.sleepy-eye { margin-bottom: 20px; color: var(--pink); font-size: 34px; font-weight: 800; letter-spacing: .15em; }
.empty-state h3 { margin: 0 0 7px; font-size: 24px; }
.empty-state p { max-width: 230px; margin: 0; color: #696a72; font-size: 14px; }

.tutorial-content {
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  overflow: hidden;
  padding: 12px 24px;
  background: var(--paper);
  text-align: center;
}

.tutorial-content h1 {
  align-self: center;
  margin: 0;
  color: var(--indigo);
  font-size: clamp(42px, 13vw, 72px);
  font-weight: 800;
  line-height: .85;
  letter-spacing: -.065em;
}

.tutorial-content h1 span { display: block; color: #d94827; }
.choose-day, .choose-venue {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--indigo);
}
.choose-day { align-self: start; padding-top: 18px; }
.choose-venue { align-self: end; padding-bottom: 8px; }
.choose-day p, .choose-venue p { margin: 18px 0 0; font-size: 18px; font-weight: 800; letter-spacing: .04em; }
.choose-venue p { margin: 0 0 18px; }

.instruction-arrow {
  position: relative;
  display: block;
  width: 86px;
  height: clamp(86px, 16vh, 150px);
  flex: 0 0 auto;
  color: currentColor;
}
.instruction-arrow::before {
  position: absolute;
  left: 50%;
  width: 12px;
  height: 100%;
  background: currentColor;
  content: '';
  transform: translateX(-50%);
}
.instruction-arrow::after {
  position: absolute;
  left: 50%;
  width: 52px;
  height: 52px;
  border-top: 12px solid currentColor;
  border-left: 12px solid currentColor;
  content: '';
}
.arrow-up::after { top: 2px; transform: translateX(-50%) rotate(45deg); }
.arrow-down { color: #d94827; }
.arrow-down::after { bottom: 2px; transform: translateX(-50%) rotate(225deg); }
.slide-next-enter-active, .slide-next-leave-active, .slide-prev-enter-active, .slide-prev-leave-active { transition: opacity .16s ease, transform .16s ease; }
.slide-next-enter-from, .slide-prev-leave-to { opacity: 0; transform: translateX(18px); }
.slide-next-leave-to, .slide-prev-enter-from { opacity: 0; transform: translateX(-18px); }

@media (min-width: 760px) {
  .festival-app { width: min(100%, 900px); margin: 0 auto; box-shadow: 0 0 80px rgb(0 0 0 / 35%); }
  .schedule { padding-inline: 52px; }
  .tutorial-content { padding-inline: 52px; }
}

@media (max-height: 620px) {
  .tutorial-content h1 { font-size: 42px; }
  .instruction-arrow { height: 68px; }
  .choose-day p, .choose-venue p { font-size: 15px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
</style>
