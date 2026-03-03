export type StandardCard = {
  title: string
  description: string
}

export type StandardSection = {
  heading: string
  intro?: string
  cards: StandardCard[]
}

export type StandardPageContent = {
  seoTitle: string
  eyebrow: string
  title: string
  lead: string
  sections: StandardSection[]
  cta: {
    title: string
    text: string
    actionLabel: string
    actionTo: string
  }
}

export const standardPages: Record<'services' | 'aboutus', StandardPageContent> = {
  services: {
    seoTitle: 'Υπηρεσίες | Retina Studios',
    eyebrow: 'What We Do',
    title: 'Υπηρεσίες παραγωγής για brands και creators',
    lead: 'Αναλαμβάνουμε πλήρη δημιουργική παραγωγή, από ιδέα και pre-production μέχρι γύρισμα, μοντάζ και τελικό παραδοτέο για web, social και events.',
    sections: [
      {
        heading: 'Κύριες υπηρεσίες',
        cards: [
          {
            title: 'Video Production',
            description: 'Commercials, branded content, social videos, event coverage και behind-the-scenes με cinematic προσέγγιση.',
          },
          {
            title: 'Photography',
            description: 'Product, portrait, lifestyle και campaign φωτογράφιση με καλλιτεχνική επιμέλεια και έμφαση στην ταυτότητα του brand.',
          },
          {
            title: 'Post-Production',
            description: 'Editing, color grading, sound design και optimization για κάθε κανάλι διανομής.',
          },
          {
            title: 'Creative Direction',
            description: 'Σχεδιασμός concept, moodboards και visual storytelling για συνεπή και ισχυρή επικοινωνία.',
          },
        ],
      },
      {
        heading: 'Πώς δουλεύουμε',
        intro: 'Στόχος μας είναι ξεκάθαρα milestones, ταχύτητα και ποιοτικό τελικό αποτέλεσμα.',
        cards: [
          {
            title: '1. Discovery',
            description: 'Κατανοούμε στόχους, κοινό και πλαίσιο καμπάνιας πριν ξεκινήσει η παραγωγή.',
          },
          {
            title: '2. Planning',
            description: 'Ορίζουμε δημιουργικό πλάνο, παραγωγικό χρονοδιάγραμμα και budget.',
          },
          {
            title: '3. Production',
            description: 'Εκτέλεση γυρίσματος/φωτογράφισης με έλεγχο ποιότητας σε πραγματικό χρόνο.',
          },
          {
            title: '4. Delivery',
            description: 'Παράδοση τελικών assets σε formats κατάλληλα για website, social και paid media.',
          },
        ],
      },
    ],
    cta: {
      title: 'Θέλεις πρόταση παραγωγής για το επόμενο project σου;',
      text: 'Στείλε μας σύντομο brief και θα σου απαντήσουμε με ρεαλιστικό πλάνο υλοποίησης.',
      actionLabel: 'Επικοινωνία',
      actionTo: '/contact',
    },
  },
  aboutus: {
    seoTitle: 'Ποιοι είμαστε | Retina Studios',
    eyebrow: 'About Retina',
    title: 'Ο φακός μας, η ιστορία σας',
    lead: 'Η Retina Studios ξεκίνησε με στόχο να ενώνει στρατηγική, αισθητική και παραγωγική συνέπεια σε κάθε project φωτογραφίας και βίντεο.',
    sections: [
      {
        heading: 'Η φιλοσοφία μας',
        cards: [
          {
            title: 'Story-first προσέγγιση',
            description: 'Κάθε παραγωγή ξεκινά από το μήνυμα που θέλει να μεταφέρει το brand και όχι μόνο από το format.',
          },
          {
            title: 'Συνέπεια σε ποιότητα',
            description: 'Από το πρώτο draft μέχρι το τελικό export, επιμένουμε σε προσεγμένη εικόνα και καθαρή αφήγηση.',
          },
          {
            title: 'Συνεργασία με διαφάνεια',
            description: 'Δουλεύουμε με ξεκάθαρα στάδια, γρήγορη επικοινωνία και κοινές αποφάσεις σε κρίσιμα σημεία.',
          },
        ],
      },
      {
        heading: 'Τι μας ξεχωρίζει',
        intro: 'Συνδυάζουμε δημιουργικότητα και execution ώστε το περιεχόμενο να είναι και όμορφο και χρήσιμο.',
        cards: [
          {
            title: 'Brand understanding',
            description: 'Αντιλαμβανόμαστε το ύφος και την εμπορική στόχευση κάθε πελάτη πριν ξεκινήσει η παραγωγή.',
          },
          {
            title: 'End-to-end delivery',
            description: 'Παρέχουμε ολοκληρωμένο workflow χωρίς να χρειάζεται πολλαπλοί εξωτερικοί συνεργάτες.',
          },
          {
            title: 'Platform-ready output',
            description: 'Προσαρμόζουμε το ίδιο creative για website, social feeds, reels και performance καμπάνιες.',
          },
        ],
      },
    ],
    cta: {
      title: 'Ας γνωριστούμε από κοντά',
      text: 'Είμαστε διαθέσιμοι για συνεργασίες σε εμπορικές παραγωγές, events και branded καμπάνιες.',
      actionLabel: 'Μίλησε μαζί μας',
      actionTo: '/contact',
    },
  },
}
