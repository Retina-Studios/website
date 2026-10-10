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

export const standardPages: Record<'aboutus', StandardPageContent> = {
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
