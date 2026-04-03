export type BlogParagraphBlock = {
  type: 'paragraph'
  text: string
}

export type BlogHeadingBlock = {
  type: 'heading'
  level: number
  text: string
}

export type BlogListBlock = {
  type: 'list'
  items: string[]
}

export type BlogImageBlock = {
  type: 'image'
  src: string
}

export type BlogGalleryBlock = {
  type: 'gallery'
  sources: string[]
}

export type BlogPostBlock =
  | BlogParagraphBlock
  | BlogHeadingBlock
  | BlogListBlock
  | BlogImageBlock
  | BlogGalleryBlock

export type BlogPost = {
  slug: string
  title: string
  dateLabel: string
  readTimeLabel: string
  excerpt: string
  cardImage: string
  cardAlt: string
  heroImage: string
  blocks: BlogPostBlock[]
}

export type BlogPostCard = {
  title: string
  excerpt: string
  image: string
  alt: string
  dateLabel: string
  readTimeLabel: string
  to: string
}

export const blogPosts: BlogPost[] = [
  {
    "slug": "ευχαριστούμε-που-ήσασταν-εκεί",
    "title": "Ευχαριστούμε που ήσασταν εκεί!",
    "dateLabel": "17 Σεπ 2025",
    "readTimeLabel": "διαβάστηκε 1 λεπτά",
    "excerpt": "Φέτος η Retina Studios συμμετείχε στο 48ο Φεστιβάλ Ταινιών Μικρού Μήκους Δράμας (DISFF), αναλαμβάνοντας την παραγωγή τριών ταινιών...",
    "cardImage": "/images/blog/post-eyxaristoume.jpg",
    "cardAlt": "Ευχαριστούμε που ήσασταν εκεί!",
    "heroImage": "/images/blog/posts/dab716_85fe0d374ff94d629312b9453408437e~mv2.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Φέτος η Retina Studios συμμετείχε στο 48ο Φεστιβάλ Ταινιών Μικρού Μήκους Δράμας (DISFF) , αναλαμβάνοντας την παραγωγή τριών ταινιών του workshop:"
      },
      {
        "type": "list",
        "items": [
          "Το πουλί και το κλουβί",
          "Μη φοβάσαι",
          "Μια ανάσα"
        ]
      },
      {
        "type": "paragraph",
        "text": "Η προβολή έγινε στο σχολείο \"Αρρένων\" όπου περισσότεροι από 500 θεατές ήρθαν να παρακολουθούν τις ταινίες – ένα γεγονός που μας γέμισε χαρά και περηφάνια. Η εμπειρία για την ομάδα μας ήταν μοναδική. Από τα γυρίσματα μέχρι τη στιγμή της προβολής, ζήσαμε από κοντά τη μαγεία που γεννιέται όταν νέοι δημιουργοί, ιδέες και εικόνες ενώνονται."
      },
      {
        "type": "image",
        "src": "/images/blog/posts/dab716_85fe0d374ff94d629312b9453408437e~mv2.jpg"
      },
      {
        "type": "paragraph",
        "text": "Σήμερα, Τετάρτη 17 Σεπτεμβρίου , ο ιδρυτής της Retina Studios, Παναγιώτης Πεικίδης , μαζί με τη σκηνοθέτιδα της ταινίας \"Μια Ανάσα\" Ελευθερία Καλπάκη , έδωσαν συνέντευξη στο ραδιόφωνο Alpha News , μιλώντας για τη συμμετοχή μας στο DISFF, τις εμπειρίες πίσω από τις κάμερες, αλλά και τα σχέδια για το μέλλον. Για εμάς στη Retina Studios, το φεστιβάλ δεν είναι μόνο μια ευκαιρία να δείξουμε τη δουλειά μας, αλλά και μια αφορμή να εμπνευστούμε και να προχωρήσουμε σε νέες δημιουργικές συνεργασίες."
      },
      {
        "type": "image",
        "src": "/images/blog/posts/dab716_bef08077aace4bbaabe869a88e69c983~mv2.png"
      },
      {
        "type": "paragraph",
        "text": "Για τον λόγο αυτό, είμαστε ανοιχτοί σε νέα σενάρια και ιδέες για επόμενες ταινίες μικρού μήκους. Στοχεύουμε να σημμετέχουμε στο διαγωνιστικό κομμάτι του χρόνου. Καλούμε όλους όσοι έχουν μια ιστορία να μοιραστούν να μας τη φέρουν – μπορεί να είναι η επόμενη ταινία που θα δούμε στη μεγάλη οθόνη! Στείλτε τα σενάρια στο info@retinastudios.gr"
      },
      {
        "type": "paragraph",
        "text": "Για όσους δεν πρόλαβαν να δουν τις ταινίες μας κατα την διάρκεια του φεστιβάλ, είναι πλέον διαθέσιμες στο κανάλι μας στο Youtube (θα βρεςι σχετικό link παρακάτω)."
      },
      {
        "type": "image",
        "src": "/images/blog/posts/dab716_e4ce09482e9049619dc180f4aca33c2a~mv2.png"
      },
      {
        "type": "paragraph",
        "text": "Με ενθουσιασμό και αφοσίωση, συνεχίζουμε το ταξίδι μας στον χώρο του κινηματογράφου και της οπτικοακουστικής παραγωγής."
      }
    ]
  },
  {
    "slug": "retina-at-disff-2025",
    "title": "H Retina στο DISFF 2025",
    "dateLabel": "2 Σεπ 2025",
    "readTimeLabel": "διαβάστηκε 1 λεπτά",
    "excerpt": "H Retina Studios συμμετέχει στο Κινηματογραφικό Εργαστήρι του 48ου Φεστιβάλ Ταινιών Μικρού Μήκους Δράμας με τρεις παραγωγές.",
    "cardImage": "/images/blog/post-disff.jpg",
    "cardAlt": "H Retina στο DISFF 2025",
    "heroImage": "/images/blog/posts/dab716_8223dc54e9cd4d949f138120b46a0dcf~mv2.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "H Retina Studios συμμετέχει στο Κινηματογραφικό Εργαστήρι του 48ου Φεστιβάλ Ταινιών Μικρού Μήκους Δράμας με τρεις παραγωγές."
      },
      {
        "type": "image",
        "src": "/images/blog/posts/dab716_8223dc54e9cd4d949f138120b46a0dcf~mv2.jpg"
      },
      {
        "type": "paragraph",
        "text": "Φέτος, η Retina Studios συμμετείχε στο Κινηματογραφικό Εργαστήριο που διοργανώθηκε στο πλαίσιο του 48oυ Διεθνούς Φεστιβάλ Ταινιών Μικρού Μήκους Δράμας. Το εργαστήριο διήρκησε 4 μήνες, από τον Φεβρουάριο μέχρι τον Ιούνιο, με εισηγητές τον σεναριογράφο και καθηγητής του Α.Π.Θ. Παναγιώτη Ιωσηφέλη, και τον σκηνοθέτη Βασίλη Λουλέ. Οι συμμετέχοντες χωρίστηκαν σε ομάδες ανά πρότζεκτ και παρέδωσαν εννέα ταινίες μικρού μήκους. H Retina Studios ανέλαβε την παραγωγή σε τρεις από αυτές: Μια Ανάσα, Μη Φοβάσαι, Το Πουλί και το Κλουβί ."
      },
      {
        "type": "paragraph",
        "text": "Οι ταινίες του Κινηματογραφικού Εργαστηρίου θα προβληθούν την Τρίτη 9 Σεπτεμβρίου στις 22:00, στο προαύλιο χώρο του Γυμνασίου Αρρένων (σε περίπτωση βροχής, η εκδήλωση θα μεταφερθεί στο Αμφιθέατρο «Κωνσταντίνος Καραμανλής» του Διοικητηρίου Δράμας). Περισσότερα για τις ταινίες και το εργαστήριο εδώ ."
      },
      {
        "type": "paragraph",
        "text": "Σας περιμένουμε!"
      }
    ]
  },
  {
    "slug": "white-night-2025",
    "title": "Λευκή Νύχτα 2025",
    "dateLabel": "22 Ιουλ 2025",
    "readTimeLabel": "διαβάστηκε 3 λεπτά",
    "excerpt": "Ένα case study για την ανάληψη της προώθησης και κάλυψης της Λευκής Νύχτας 2025.",
    "cardImage": "/images/blog/post-white-night.jpg",
    "cardAlt": "A snapshot from White Night 2025",
    "heroImage": "/images/blog/posts/dab716_d9e94c0a39aa4ebfaa0a5b61b57147a0~mv2.jpg",
    "blocks": [
      {
        "type": "image",
        "src": "/images/blog/posts/dab716_2e92dca82344492b98b0c37829df5b47~mv2.jpg"
      },
      {
        "type": "paragraph",
        "text": "Δείτε αυτό το άρθρο σαν παρουσίαση case study εδώ ."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Tαυτότητα του project"
      },
      {
        "type": "paragraph",
        "text": "Πελάτης: Εμπορικός Σύλλογος Δράμας"
      },
      {
        "type": "paragraph",
        "text": "Τύπος Εκδήλωσης: Καμπάνια αγορών σε όλη την πόλη"
      },
      {
        "type": "paragraph",
        "text": "Τοποθεσία: Εμπορικό κέντρο Δράμας"
      },
      {
        "type": "paragraph",
        "text": "Υπηρεσίες που παρείχαμε:"
      },
      {
        "type": "list",
        "items": [
          "Στρατηγική & διαχείριση social media",
          "Σχεδιασμός αφισών & έντυπου υλικού για 20+ καταστήματα",
          "Κάλυψη εκδήλωσης με φωτογραφίες & βίντεο",
          "Παράδοση περιεχομένου ανασκόπησης & ευχαριστήριο υλικό"
        ]
      },
      {
        "type": "paragraph",
        "text": "Διάρκεια: 3 εβδομάδες (2 εβδομάδες προώθησης μέσω social media + 1 ημέρα κάλυψης εκδήλωσης + 1 εβδομάδα επεξεργασίας υλικού)"
      },
      {
        "type": "paragraph",
        "text": "Μέγεθος Ομάδας: 4 άτομα για δημιουργικό, social και παραγωγή"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Τι είναι η “Λευκή Νύχτα”"
      },
      {
        "type": "paragraph",
        "text": "Η “Λευκή Νύχτα” του Εμπορικού Συλλόγου Δράμας είναι μια ετήσια εκδήλωση κατά την οποία καταστήματα, κυρίως στο κέντρο της πόλης, παραμένουν ανοιχτά μέχρι αργά τη νύχτα, συχνά με προσφορές και εκπτώσεις."
      },
      {
        "type": "paragraph",
        "text": "Στόχος της είναι η αναζωογόνηση της αγοράς και η ενίσχυση της επισκεψιμότητας στα τοπικά καταστήματα μέσω διάφορων δράσεων στους δρόμους του κέντρου."
      },
      {
        "type": "paragraph",
        "text": "Παράλληλα, η φετινή διοργάνωση επιδίωξε την δημιουργία μιας ομοιογενής οπτικής ταυτότητας, και την διεξαγωγή μιας διαφημιστικής καμπάνιας με καθαρό μήνυμα και αισθητική συνέπεια."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Προκλήσεις"
      },
      {
        "type": "list",
        "items": [
          "Περιορισμένος χρόνος οργάνωσης — η συνεργασία με τον εμπορικό ξεκίνησε ουσιαστικά δυο εβδομάδες πριν την εκδήλωση",
          "Πάνω από 20 διαφορετικά καταστήματα με ποικιλία branding, για τα οποία θα έπρεπε να δημιουργήσουμε μακέτες προωθητικών ενεργειών",
          "Ανάγκη για οπτικοακουστική κάλυψη πληθώρας εκδηλώσεων που λάμβαναν χώρα παράλληλα σε μεγάλη έκταση"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Προώθηση"
      },
      {
        "type": "paragraph",
        "text": "Social Media (Instagram, Facebook)"
      },
      {
        "type": "list",
        "items": [
          "Οργανώσαμε χορηγούμενες προωθητικές καμπάνιες",
          "Συντονίσαμε τις αναρτήσεις προσφορών των καταστημάτων, φροντίζοντας για την αναδημοσίευσή τους από τους ιδιοκτήτες",
          "Eπικοινωνήσαμε το μήνυμά μας με δεκάδες χιλιάδες χρήστες"
        ]
      },
      {
        "type": "paragraph",
        "text": "Υποστήριξη Σχεδιασμού"
      },
      {
        "type": "list",
        "items": [
          "Δημιουργήσαμε 20+ προσωποποιημένες αφίσες",
          "Εξασφαλίσαμε ενιαίο look & feel με εξατομικευμένες λεπτομέρειες",
          "Εφαρμόσαμε την οπτική ταυτότητα της εκδήλωσης σε όλο το οπτικοακουστικό υλικό"
        ]
      },
      {
        "type": "paragraph",
        "text": "Αξιοποίηση Παλαιότερου Υλικού"
      },
      {
        "type": "list",
        "items": [
          "Εκμεταλλευτήκαμε το αχρησιμοποίητο οπτικό υλικό της προηγούμενης διοργάνωσης",
          "Δημιουργήσουμε ένα επίσημο διαφημιστικό teaser και μια σειρά από φωτογραφικές αναρτήσεις για τα social"
        ]
      },
      {
        "type": "paragraph",
        "text": "Δημιουργία Νέου Σποτ"
      },
      {
        "type": "list",
        "items": [
          "Συνεργαστήκαμε με τρεις ιδιοκτήτες επιχειρήσεων για την δημιουργία νέου αφηγηματικού διαφημιστικού σποτ για τα social"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Κάλυψη εκδήλωσης και παραδοτέα"
      },
      {
        "type": "image",
        "src": "/images/blog/posts/dab716_386ed9ad8ea74d4b9c03de8e44fb8239~mv2.jpg"
      },
      {
        "type": "list",
        "items": [
          "Πάνω από 5 ώρες βίντεο λήψεων με δύο οπερατέρ στο πεδίο και έναν χρήστη drone",
          "Παράδοση βίντεο ανασκόπησης διάρκειας δυόμιση λεπτών , το επίσημο aftermovie της φετινής διοργάνωσης",
          "Παράδοση 150+ επεξεργασμένων φωτογραφιών για κάθε χρήση και περαιτέρω προώθηση"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Και μετά την εκδήλωση;"
      },
      {
        "type": "list",
        "items": [
          "Συντονισμένες ευχαριστήριες αναρτήσεις με τους συνεργάτες",
          "Πακέτο ανασκόπησης για τον πελάτη",
          "Προτάσεις για μελλοντική εμπλοκή και στατιστικά εμπλοκής"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Τα νούμερα"
      },
      {
        "type": "list",
        "items": [
          "3.432% αύξηση στην επισκεψιμότητα στα social κατά την διάρκεια των τριών εβδομάδων του πρότζεκτ",
          "118.000+ προβολές & 950+ αλληλεπιδράσεις σε Instagram & Facebook",
          "20+ προωθητικές αφίσες προσαρμοσμένες στην οπτική ταυτότητα του κάθε καταστήματος",
          "150+ φωτογραφίες από την βραδιά της εκδήλωσης",
          "3 διαφημιστικά βίντεο, ένα teaser, ένα promo, και ένα aftermovie"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Γκαλερί φωτογραφιών"
      },
      {
        "type": "gallery",
        "sources": [
          "/images/blog/posts/dab716_152e464ef603414c976d567d9377e64d~mv2.jpg",
          "/images/blog/posts/dab716_adf27cd554904d0eaaa7e7e80fcc9895~mv2.jpg",
          "/images/blog/posts/dab716_eca804a9d9d74537b26074c457fe8510~mv2.jpg",
          "/images/blog/posts/dab716_a8b6ec7198684632a055e6b9418dcea8~mv2.jpg",
          "/images/blog/posts/dab716_54959977b15c48e280ad6d2f7806f996~mv2.jpg",
          "/images/blog/posts/dab716_a8d7baa968894a0a8040caf78579f659~mv2.jpg",
          "/images/blog/posts/dab716_1e628dd18ab74ef4bf3390e116c89eba~mv2.jpg",
          "/images/blog/posts/dab716_4258a062d04249db9cb12841e9f7dde1~mv2.jpg",
          "/images/blog/posts/dab716_5a39127534064b18b28685038e9fd315~mv2.jpg",
          "/images/blog/posts/dab716_54d35453373f416fa8acfd6a91038be5~mv2.jpg",
          "/images/blog/posts/dab716_355deff4cb65466a90d92d1e0a4b5448~mv2.jpg",
          "/images/blog/posts/dab716_d912f0ec7ee74c9e8cb8f0accf6ffa1d~mv2.jpg",
          "/images/blog/posts/dab716_4b9840a7c9fb4db9a96a79f860b94211~mv2.jpg",
          "/images/blog/posts/dab716_d9577ef5c5c34a4d9d6b9cc224f5f862~mv2.jpg",
          "/images/blog/posts/dab716_d9e94c0a39aa4ebfaa0a5b61b57147a0~mv2.jpg",
          "/images/blog/posts/dab716_92a14dac4fd54ee393806ae4a2166a91~mv2.jpg",
          "/images/blog/posts/dab716_a730286cb0254db9be480ba754e9aea2~mv2.jpg",
          "/images/blog/posts/dab716_26574a170dfd4ffa946aae4cd04854da~mv2.jpg",
          "/images/blog/posts/dab716_c7e8050b231b4790bdfc58cae6f66d9a~mv2.jpg",
          "/images/blog/posts/dab716_f900257b1e2a4e24ad10985e59106b64~mv2.jpg",
          "/images/blog/posts/dab716_42d0f8e9f985492a9c0d0d5e869333c9~mv2.jpg",
          "/images/blog/posts/dab716_b4e70f67126e47f5b0cafa946a0fb659~mv2.jpg",
          "/images/blog/posts/dab716_26f03fd58c55450ba7aa066a783798c1~mv2.jpg",
          "/images/blog/posts/dab716_f34621aabe8b49c882e17496eaa1da7b~mv2.jpg",
          "/images/blog/posts/dab716_59ef2030c13544d8ae58797970b533be~mv2.jpg",
          "/images/blog/posts/dab716_c9de9ffc1a384bfd866f6c1cd1b5e256~mv2.jpg",
          "/images/blog/posts/dab716_aff84b6a574a4cfa8504c4daa90cf9cc~mv2.jpg",
          "/images/blog/posts/dab716_7375ce37f3d14c749a062c5ce2839595~mv2.jpg",
          "/images/blog/posts/dab716_5db0832566754a4da1e11bb5128c702a~mv2.jpg",
          "/images/blog/posts/dab716_ff599318d611404082ab3c771df2bed3~mv2.jpg",
          "/images/blog/posts/dab716_8912260793a245b0b24b44677768e495~mv2.jpg",
          "/images/blog/posts/dab716_aff34fe748394253a2567a24d026c799~mv2.jpg",
          "/images/blog/posts/dab716_cbe20c8096ea428f8f27ed62d4b02d2b~mv2.jpg"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Βίντεο ανασκόπησης"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Εντυπώσεις αγοράς"
      },
      {
        "type": "paragraph",
        "text": "— Νικολέτα Κοζανίδου - Υπεύθυνη Καταστήματος Dust+Cream"
      },
      {
        "type": "paragraph",
        "text": "— Στέφανος Πεταλούδης - Ιδιοκτήτης του Guernica Cafe-Bar"
      },
      {
        "type": "paragraph",
        "text": "— Σταύρος Καρολίδης & Ευθυμια Ιωαννιδου - Ιδιοκτήτες του Carol’s Coffee & Bren Jewelry"
      },
      {
        "type": "paragraph",
        "text": "H επισκεψιμοτητα ήταν μεγαλύτερη στο κέντρο. Οι δράσεις καλές και απλωμένες σε σωστά σημεία. Σαν κατάστημα είμαστε καλύτερα από πέρσι σε τζίρο, πρέπει βέβαια να συνυπολογίσουμε ότι το κόστος μίας επιχείρησης έχει ανέβει κατά πολύ (εργασιακά, ενέργεια κτλ). Όπως και να 'χει, όμως, τέτοιες εκδηλώσεις μόνο καλό κάνουν σε μία πληγωμένη αγορά σαν της πόλης μας."
      },
      {
        "type": "paragraph",
        "text": "— Παντελής Χαλάτσης - Ιδιοκτήτης του Pantelisimo"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Μαρτυρία πελάτη"
      },
      {
        "type": "paragraph",
        "text": "— Γεώργιος Κύρτσης, Πρόεδρος Εμπορικού Συλλόγου Δράμας"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Συμπέρασμα"
      },
      {
        "type": "paragraph",
        "text": "Απολαύσαμε τη δημιουργία αυτής της καμπάνιας και την συνεργασία μας με τους φορείς για την στήριξη της τοπικής αγοράς—και πλέον προσφέρουμε ολοκληρωμένο πακέτο υπηρεσιών για προώθηση και κάλυψη εκδηλώσεων."
      },
      {
        "type": "paragraph",
        "text": "Διοργανώνετε κάποια τοπική εκδήλωση; Ας την σχεδιάσουμε μαζί!"
      }
    ]
  }
]

export const blogPostsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
)

export const blogPostCards: BlogPostCard[] = blogPosts.map((post) => ({
  title: post.title,
  excerpt: post.excerpt,
  image: post.cardImage,
  alt: post.cardAlt,
  dateLabel: post.dateLabel,
  readTimeLabel: post.readTimeLabel,
  to: '/post/' + post.slug,
}))

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPostsBySlug[slug] ?? null
}
