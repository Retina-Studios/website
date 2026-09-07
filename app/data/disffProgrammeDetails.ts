export type ProgrammeItem = {
  title: string
  creator?: string
  meta?: string
}

export type ProgrammeDetail = {
  heading?: string
  description?: string
  items?: ProgrammeItem[]
  qa?: boolean
}

const item = (title: string, creator?: string, meta?: string): ProgrammeItem => ({ title, creator, meta })

export const disffProgrammeDetails: Record<string, ProgrammeDetail> = {
  sfhGroupDynamics: { heading: 'Ομαδική δυναμική στους χώρους εργασίας του κινηματογράφου', description: 'Ομιλία για τη συνύπαρξη διαφορετικών προσωπικοτήτων, τρόπων εργασίας και απόψεων, τις εντάσεις και τις συγκρούσεις, καθώς και τον καθορισμό ρόλων και ορίων στις ιδιαίτερες συνθήκες της κινηματογραφικής βιομηχανίας. Περιλαμβάνει βιωματική εσωτερική αναζήτηση. Γλώσσα: Αγγλικά. Με την Έλενα Χριστοπούλου, ολιστική θεραπεύτρια.' },
  literatureAtalanti: { heading: 'Οι ιστορίες που έμειναν αθέατες', description: 'Η συγγραφέας Αταλάντη Ευριπίδου συνομιλεί για τη λογοτεχνία ως μέσο ανάκτησης αφανών ιστοριών και φωνών. Με αφορμή το έργο «Εκείνοι που δεν έφυγαν», η συζήτηση αφορά την ιστορική έρευνα και τη μυθοπλασία, τη συλλογική μνήμη και την queer εμπειρία. Συντονίζει ο Παύλος Μεθενίτης.' },
  pitchingLab: { description: 'Παρουσιάζονται δέκα επιλεγμένα σχέδια ταινιών μικρού μήκους από όλον τον κόσμο, σε pitching πέντε λεπτών το καθένα. Με τους εισηγητές Βαρβάρα Δούκα, Τζωρτζίνα Κακουδάκη, Χριστίνα Λιάπη και Τζων Στήβενς.' },
  sfhStoryboard: { heading: 'Από τη Σελίδα στο Πλάνο — Η Ταινία Πριν από το Γύρισμα', description: 'Θεωρητικό και πρακτικό εργαστήριο storyboard με παραδείγματα, ζωντανή σχεδίαση και άσκηση. Δεν απαιτούνται γνώσεις σχεδίου. Γλώσσα: Αγγλικά. Περιορισμένες θέσεις. Με τους Πάνο Παππά και Δέσποινα Χαραλάμπους.' },
  sfhComposer: { heading: 'Direct the Composer', description: 'Θεωρητικό και πρακτικό εργαστήριο για τη μουσική στον κινηματογράφο: επιλογή συνθέτη, temp tracks, μουσική ταυτότητα και πρακτική διερεύνηση διαφορετικών μουσικών κατευθύνσεων στην ίδια σκηνή. Γλώσσα: Αγγλικά. Περιορισμένες θέσεις. Με τον Γρηγόρη Ελευθερίου.' },
  sfhDocumentary: { heading: 'Η πορεία ενός ντοκιμαντέρ μικρού μήκους στα Βαλκάνια', description: 'Συζήτηση για την ανάπτυξη, παραγωγή, φεστιβαλική επιλογή και διεθνή διανομή ενός ντοκιμαντέρ μικρού μήκους στα Βαλκάνια. Γλώσσα: Αγγλικά. Με τους Veton Nurkollari, Dragana Jovovic και Φωτεινή Οικονομοπούλου. Συντονίζει η Γιάννα Σαρρή.' },
  sfhForensics: { heading: 'Ο Χώρος ως Τεκμήριο', description: 'Εισαγωγή στη μεθοδολογία του Forensic Architecture και στη χρήση κινηματογραφικής, πολυμεσικής και χωρικής ανάλυσης, τρισδιάστατης μοντελοποίησης, μαρτυριών, αντί-χαρτογραφίας και έρευνας ανοιχτού κώδικα. Γλώσσα: Αγγλικά. Με τον Στέφανο Λεβίδη.' },
  sfhYoungProducers: { heading: 'Νέοι Παραγωγοί', description: 'Διαδραστικό εργαστήριο για τον κύκλο ζωής μιας ταινίας: ανάπτυξη, χρηματοδότηση, παραγωγή, φεστιβαλική στρατηγική και διανομή. Γλώσσα: Αγγλικά. Περιορισμένες θέσεις. Με τη Dragana Jovovic και την Αντιγόνη Ρώτα.' },
  sfhCopyright: { heading: 'Πνευματικά Δικαιώματα για Νέους Δημιουργούς & Film Production Legal', description: 'Παρουσίαση για την προστασία και διαχείριση δικαιωμάτων, τη χρήση αρχειακού υλικού, τους Οργανισμούς Συλλογικής Διαχείρισης, την τεχνητή νοημοσύνη και τα βασικά νομικά ζητήματα μιας κινηματογραφικής παραγωγής. Γλώσσα: Ελληνικά. Με τους Αργύρη Θέο και Θάνο Λεοντάρη.' },
  literatureMavroeidis: { heading: 'Οι Εποχές της Μνήμης', description: 'Με αφορμή τη συλλογή διηγημάτων «Θεριστές», ο Ζαχαρίας Μαυροειδής συνομιλεί για τη λογοτεχνία ως τρόπο χαρτογράφησης της σύγχρονης ελληνικής εμπειρίας, τη δημιουργία χαρακτήρων και τη μικρή φόρμα. Συντονίζει ο Παύλος Μεθενίτης.' },
  national1: { qa: true, items: [
    item('Multi Family Garage Sale', 'Ζακ Σιμχά / Jacques Simha', '28′'),
    item('Μια Κρυψώνα / A Hideout', 'Φλώρα Ηλία / Flora Ilia', '19′'),
    item('Holterline', 'Αλεξάνδρα Ντεληθέου / Alexandra Ntelitheou', '20′'),
    item('Unleaded Wasteland', 'Βασίλης Καλέμος / Vasilis Kalemos', '6′'),
    item('γιασεμί και ρόδον / jasmin and rose', 'Σπύρος Χαραλάμπους / Spiros Charalambous', '14′'),
  ]},
  national2: { qa: true, items: [
    item('Το Κερί / Hot Wax', 'Χρυσιάννα Παπαδάκη / Krysianna Papadakis', '23′'),
    item('Αδέσποτοι / Strays', 'Αναστασία Γκίβαλου / Anastasia Gkivalou', '20′'),
    item('Ζωή και Κότα / Life and Chicken', 'Λευκή Δεριζιώτη / Lefki Derizioti', '5′'),
    item('Ούτε που Καυλώσαμε / We Didn’t Even Get it Up', 'Μαρθίλια Σβάρνα / Marthilia Svarna', '14′'),
    item('Το Κατά του Αλέκτορος / The Rooster’s Gospel', 'Θάνος Τοκάκης / Thanos Tokakis', '29′'),
  ]},
  national3: { qa: true, items: [
    item('Επιφάνειες / Surfaces', 'Μελίνα Λουκανίδου / Melina Loukanidou', '16′'),
    item('Μεγάλη Παρασκευή / Good Friday', 'Λουκία Τζωρτζοπούλου / Loukia Tzortzopoulou', '18′'),
    item('STARFLYER', 'Μαρία Χατζάκου / Maria Hatzakou', '18′'),
    item('Sisters', 'Μαριάννα Μποζαντζόγλου / Marianna Bozantzoglou', '17′'),
    item('The Great Organ', 'Ρωξάνη Κριμίζη, Μιχάλης Κίμωνας / Roxani Krimizi, Michalis Kimonas', '32′'),
  ]},
  national4: { qa: true, items: [
    item('SHIFT', 'Ιωάννα Σκυλογιάννη / Ioanna Skylogianni', '23′'),
    item('Τρύπες / Holes! The Ballad of Boulder Valley', 'Πέτρος Καλφαμανώλης / Petros Kalfamanolis', '23′'),
    item('Μια Μικρή Ιστορία Αντίστασης. Ιουλία Μπίμπα / Remember Julia', 'Διαμαντής Αναστασιάδης / Diamantis Anastasiadis', '12′'),
    item('Ο Σκύλος / The Dog', 'Κωνσταντίνος Δέμης / Konstantinos Demis', '12′'),
    item('Wheel to Live', 'Βίκυ Αναστασιάδου / Vicky Anastasiadou', '26′'),
  ]},
  national5: { qa: true, items: [
    item('Αρκάνσας / Arkansas', 'Γιάννης Καρπούζης / Yannis Karpouzis', '28′'),
    item('Ορίζοντας / Horizon', 'Αφροδίτη Ταυρή / Afroditi Tavri', '20′'),
    item('Μη Με Φας / Don’t Eat Me', 'Κωνσταντίνος Καλογρίδης / Konstantinos Kalogridis', '24′'),
    item('Αμάραντη / Amaranth', 'Ανθή Δαουτάκη / Anthie Daoutaki', '17′'),
    item('ηΈρημος / Desert, She', 'Ιωάννα Διγενάκη / Ioanna Digenaki', '14′'),
  ]},
  national6: { qa: true, items: [
    item('Free Eliza (Notes on an anatomical imperfection)', 'Αλεξάνδρα Ματθαίου / Alexandra Matheou', '20′'),
    item('All the Love in my Body', 'Κάρμεν Μπάλτσαρ / Carmen Baltzar', '14′'),
    item('Σουαρέ Μετά Ξενάγησης / Soirée Gauche', 'Χρήστος Σαμαράς / Christos Samaras', '18′'),
    item('Art is Missing', 'Τζωρτζ Κόντος / George Kontos', '7′'),
    item('Ο Πακετάς / Runner', 'Ερμόλαος Φωτίου / Ermolaos Fotiou', '29′'),
  ]},
  international1: { qa: true, items: [
    item('Astronauta', 'Giorgio Giampà', 'Ιταλία, Γουατεμάλα, Μεξικό, Γαλλία · 17′'),
    item('Taxi Moto', 'Gaël Kamilindi', 'Γαλλία, Ελβετία · 21′'),
    item('The Flesh Dress', 'Joachim Hérissé', 'Γαλλία · 15′'),
    item('Silent Voices', 'Nadine Misong Jin', 'ΗΠΑ, Νότια Κορέα · 18′'),
    item('Kentucky Gaza', 'Omar Rammal', 'Ιορδανία · 21′'),
  ]},
  international2: { qa: true, items: [
    item('Azul', 'Algoritmo Malvado', 'Μεξικό, ΗΠΑ · 30′'), item('We Were Here', 'Pranav Bhasin', 'Ινδία · 11′'),
    item('Carla and her Legs', 'Christoph Büttner', 'Γερμανία · 14′'), item('Silent Mode', 'Georgi Petkov', 'Βουλγαρία · 18′'),
    item('Free Eliza (Notes on an Anatomical Imperfection)', 'Αλεξάνδρα Ματθαίου / Alexandra Matheou', 'Κύπρος, Ελλάδα, Γαλλία · 20′'),
  ]},
  international3: { qa: true, items: [
    item('Shutterspeed', 'Jasper De Maeseneer', 'Βέλγιο · 25′'), item('Mind Your Step', 'Alina Milkina', 'Ολλανδία · 6′'),
    item('La Petite Mort', 'Ελένη Αντωναράκου / Eleni Antonarakou', '6′'), item('Κάτι Μικρό Αρκεί / Small Things Matter', 'Μαρία Μπαχάρη / Maria Bachari', '5′'),
    item('Προπληρωμένο Τέλος / Port Payé', 'Ευαγγελία Γιαννέλου / Evangelia Giannelou', '7′'), item('Exchibit21', 'Μαρκέλλος Πλακίτσης / Markellos Plakitsis', '9′'),
    item('Ο Χώρος / O Xoros', 'Λίζα Μπασδαβάνου / Liza Mpasdavanou', '8′'), item('Απαγορευμένο / Forbidden', 'Αθανάσιος Νταβλούρος / Athanasios Davlouros', '5′'),
    item('Σούπερ Μάρκετ / SPR MRKT', 'Δήμητρα Πετμεζά / Dimitra Petmeza', '4′'), item('Σπορά / Spora', 'Βαρνάβας Καστανάρας / Varnavas Kastanaras', '13′'),
    item('Το Χωριό Που Χάνεται / A Village Fading Away', 'Αριστοτέλης Αθανασιάδης / Aristotelis Athanasiadis', '10′'),
    item('Spermatheca', 'Silje Baer', 'Νορβηγία · 19′'), item('Corpus Christi', 'Bea Lema', 'Ισπανία · 13′'),
    item('Wheel to Live', 'Βίκυ Αναστασιάδου / Vicky Anastasiadou', 'Ελλάδα · 26′'),
  ]},
  international4: { qa: true, items: [
    item('The Great Organ', 'Ρωξάνη Κριμίζη, Μιχάλης Κίμωνας / Roxani Krimizi, Michalis Kimonas', 'Ελλάδα · 32′'),
    item('Buše', 'Dalija Dozet', 'Κροατία · 13′'), item('The Flames of Me', 'Daniel Léger', 'Καναδάς · 10′'),
    item('What Do the Maknines Dream Of', 'Sarra Ryma', 'Γαλλία, Αλγερία · 22′'), item('Spiritus Sanctus', 'Michał Toczek', 'Πολωνία · 15′'),
  ]},
  international5: { qa: true, items: [
    item('The Mountain', 'Sebastián Lojo', 'Γουατεμάλα · 20′'), item('Holterline', 'Αλεξάνδρα Ντεληθέου / Alexandra Ntelitheou', 'Ελλάδα · 20′'),
    item('Tuna Tartare', 'Lena Greene', 'ΗΠΑ · 11′'), item('Somewhere Between Memories', 'Niloufar Jahangiri', 'Ιράν · 14′'),
    item('Bad Ideas', 'Jan Bujnowski', 'Πολωνία · 12′'), item('City of Owls', 'Zhenia Kazankina', 'Γαλλία, Ιταλία, Γερμανία · 13′'),
  ]},
  internationalStudent1: { qa: true, items: [
    item('Minor Deluge', 'Ysé Sorel', 'Γαλλία · 18′'), item('How to Live Together', 'Tim Nicholas', 'ΗΠΑ · 17′'),
    item('Rotten Water', 'Cai Danfeng', 'Κίνα, ΗΠΑ · 15′'), item('Imago', 'Iakovos Sax Lane, Hayley Wade', 'Ελλάδα, Η.Β. · 18′'),
    item('Delay', 'Wang Han-Xuan', 'Κίνα · 15′'), item('Nobody Barks', 'Júlia Coldwell Serra', 'Ισπανία · 20′'),
  ]},
  internationalStudent2: { qa: true, items: [
    item('Ο Γάμος της Ξαδέρφης μου / My Cousin’s Wedding', 'Σίλβα Τσουμάνα / Silva Tsoumana', 'Ελλάδα · 18′'),
    item('From This Day Forth', 'Jonatan Egholm Keis', 'Δανία · 13′'), item('o', 'Francisca Alarcão', 'Πορτογαλία, Ισπανία · 14′'),
    item('The Chant of the Waterway', 'Célia Berby-Maillot', 'Γαλλία · 15′'), item('Mother of a Son', 'Kevin Koch', 'Γερμανία · 20′'),
    item('From Ecuador With Love', 'Jonathan Brunner', 'Γερμανία, Εκουαδόρ · 9′'), item('An Impossible Word of Praise', 'Arturo Spano', 'Αργεντινή, Ιταλία · 15′'),
  ]},
  nationalStudent1: { qa: true, items: [
    item('Μια Στιγμή στη Ζωή της / A Moment in her Life', 'Νικόλας Κωστής / Nicolas Costes', '14′'),
    item('Τα Τέρατα της Πόλης / The Monsters of the City', 'Γιώργος Βλάσσης / Giorgos Vlassis', '7′'), item('Solace', 'Έλενα Παπακωνσταντίνου / Elena Papakonstantinou', '15′'),
    item('Στείλε Μου Όταν Φτάσεις... / Text Me When You Arrive...', 'Κωνσταντίνος Ταλιαδούρος / Constantinos Taliadouros', '4′'),
    item('Ο Γάμος της Ξαδέρφης μου / My Cousin’s Wedding', 'Σίλβα Τσουμάνα / Silva Tsoumana', '18′'), item('Εκτροφείο Θηραμάτων / Game Farm', 'Βασίλης Γεωργούλας / Vasilis Georgoulas', '13′'),
    item('Αυτόκλητος Φτερωτός / Aftoklitos Fterotos', 'Βαγγέλης Παναγιωτακόπουλος, Θανάσης Φουσέκης', '25′'),
  ]},
  nationalStudent2: { qa: true, items: [
    item('Κεράσι / Cherry', 'Ευτυχία Μανώλα / Eftychia Manola', '20′'), item('Από το 1 στο Μπλε / From 1 to Blue', 'Σοφία Πριόβολου / Sofia Priovolou', '14′'),
    item('Σολουντράνια / Solountrania', 'Άκης Σταυρόπουλος / Akis Stavropoulos', '24′'), item('Meltdown', 'Ευγενία Παπαζήση / Evgenia Papazis', '10′'),
    item('Resídua', 'Νάσια Στουραΐτη / Nassia Stouraiti', '13′'), item('Bloom', 'Χριστόφορος Ηροδότου / Christoforos Irodotou', '20′'),
  ]},
  nationalStudent3: { qa: true, items: [
    item('Απόπλους / Apoplous', 'Γιώργος Πολυμερόπουλος / Giorgos Polymeropoulos', '15′'), item('Still Sexy', 'Πάνος Ζυγούρος / Panos Zygouros', '16′'),
    item('Ίχνος / Trace', 'Feyyaz Bayram', '19′'), item('Interrogation Room', 'Γιάννης Κωστόπουλος / Yiannis Kostopoulos', '25′'),
    item('(AN)OIKIA / (HOME)', 'Νέλλυ Ευαγγελίδου / Nellie Evangelidou', '5′'), item('Find Fenia', 'Λίλα Μπάρμπα / Lila Barmpa', '20′'),
  ]},
  documentary1: { qa: true, items: [
    item('Buckskin', 'Mars Verrone', 'ΗΠΑ · 17′'), item('Πριν Κρυώσει το Γεύμα / Before the Meal Got Cold', 'Άλκηστις Καφετζή / Alkistis Kafetzi', 'Ελλάδα · 18′'),
    item('Baisanos', 'Andrés Khamis Giacoman, Francisca Khamis Giacoman', 'Χιλή, Ισπανία, Παλαιστίνη · 14′'),
    item('In Search of a Goodbye', 'Βαγγέλης Κόλλιας / Vangelis Kollias', 'Σουηδία, Ελλάδα · 18′'), item('If You Don’t Like It, Look Away', 'Margaux Fournier', 'Γαλλία · 30′'),
  ]},
  documentary2: { qa: true, items: [
    item('Λουτρόπολις / Loutropolis', 'Άννα Παπαδοπούλου / Anna Papadopoulou', 'Ελλάδα · 14′'), item('Always Ready', 'Jasper Heinrichs, Jan Schuenke', 'Γερμανία · 11′'),
    item('Your City', 'Ting Su', 'Κίνα, ΗΠΑ, Γαλλία · 14′'), item('Guided Tour', 'Alba Jaramillo', 'Γαλλία, Πουέρτο Ρίκο · 15′'),
    item('Χαρταετός / Kite', 'Θάνος Ψυχουιός / Thanos Psichogios', 'Ελλάδα · 15′'), item('How to Catch a Butterfly', 'Kiriko Mechanicus', 'Ολλανδία · 26′'),
    item('Ο Κοσμοναύτης μου / My Cosmonaut', 'Ελένη Ζεντέφη / Eleni Zentefi', 'Ελλάδα · 20′'),
  ]},
  documentary3: { qa: true, items: [
    item('A Fighter', 'Aurélien Richard', 'Γαλλία · 13′'), item('DASMA ’96', 'Fjorida Cenaj', 'Ελλάδα · 23′'),
    item('Fruits of Despair', 'Nima Nassaj', 'Ιράν · 29′'), item('Ruins Talking Back', 'İklim Doğan', 'Αυστρία, Τουρκία · 22′'),
    item('The Boys and the Bees', 'Arielle Knight', 'ΗΠΑ · 19′'),
  ]},
  kiddo1: { items: [
    item('Into the Forest', 'Antonin Niclass', 'Ελβετία · 10′'), item('Μούσκεμα / Soaked', 'Άκης Μελάχρης, Αλέξανδρος Ρωμανός Λιζάρδος', 'Ελλάδα · 9′'),
    item('Cinema Rialto', 'Antony Petrou', 'Κύπρος · 15′'), item('Silence', 'Yoona Hwang', 'ΗΠΑ, Νότια Κορέα · 3′'),
    item('Bwgan', 'Hywel Pryterch Roberts', 'Η.Β. · 8′'), item('TREE HOUSE', 'Nasia Koko', 'Ελλάδα · 9′'), item('City in the Fox', 'Mikael Lindskov Jacobsen', 'Γερμανία · 9′'),
  ]},
  kiddo2: { items: [
    item('The Boy Who Fell To Earth', 'Βασίλης Μπουραντάς / Vasilis Bourantas', 'Ελλάδα, Η.Β. · 9′'), item('GREY', 'Loren Escandón', 'Κολομβία, ΗΠΑ · 15′'),
    item('Μπαμπά Κοίτα Με! / Dad Look at Me!', 'Βούλα Σταμπέλου / Voula Stampelou', 'Ελλάδα · 12′'), item('monster & me', 'Tom Field', 'Νέα Ζηλανδία · 8′'),
    item('Μια Κρυψώνα / A Hideout', 'Φλώρα Ηλία / Flora Ilia', 'Ελλάδα · 19′'), item('Rui Carlos', 'Margarida Paias', 'Πορτογαλία · 14′'),
    item('I Was Kidnapped', 'Dhananjay Mahesh Barangule', 'Η.Β. · 7′'),
  ]},
  kiddo3: { items: [
    item('The Last Performance', 'Mojtaba Zariniance', 'Ιράν · 20′'), item('SYNC', 'Luboš Vacke', 'Τσεχία · 15′'),
    item('Μεγάλη Παρασκευή / Good Friday', 'Λουκία Τζωρτζοπούλου / Loukia Tzortzopoulou', 'Ελλάδα · 18′'),
    item('Sisters', 'Μαριάννα Μποζαντζόγλου / Marianna Bozantzoglou', 'Ελλάδα · 17′'), item('LOW TIDE', 'David Noblet', 'Γαλλία · 19′'),
  ]},
  balkan1: { items: [item('In Between', 'Samir Karahoda', 'Κόσοβο · 13′ · 2019'), item('Shooting Star', 'Lyubo Yonchev', 'Βουλγαρία, Ιταλία · 28′ · 2015'), item('The News', 'Lorin Terezi', 'Αλβανία · 23′ · 2019'), item('Cigarettes and Coffee', 'Cristi Puiu', 'Ρουμανία · 13′ · 2003'), item('Copa-Loca', 'Χρήστος Μασσαλάς / Christos Massalas', 'Ελλάδα · 14′ · 2017')]},
  balkan2: { items: [item('I Would Rather be a Stone', 'Ana Hušman', 'Κροατία · 24′ · 2024'), item('A Christmas Gift', 'Bogdan Muresanu', 'Ρουμανία, Ισπανία · 23′ · 2018'), item('Picnic', 'Jure Pavlović', 'Κροατία · 13′ · 2015'), item('The Translator', 'Emre Kayis', 'Η.Β., Τουρκία · 24′ · 2015'), item('Αναμνήσεις (μιας) Εφηβικής Καταιγίδας / Memoir of a Veering Storm', 'Σοφία Γεωργοβασίλη / Sofia Georgovassili', 'Ελλάδα · 14′ · 2022')]},
  balkan3: { items: [item('The Chicken', 'Una Gunjak', 'Γερμανία, Κροατία · 15′ · 2014'), item('SHAME', 'Petar Krumov', 'Βουλγαρία · 24′ · 2017'), item('The Potemkinists', 'Radu Jude', 'Ρουμανία · 18′ · 2022'), item('I Believe the Portrait Saved Me', 'Alban Muja', 'Κόσοβο, Ολλανδία · 10′ · 2025'), item('Limbo', 'Κωνσταντίνα Κοτζαμάνη / Konstantina Kotzamani', 'Γαλλία, Ελλάδα · 30′ · 2016')]},
  glasgow: { items: [item('Esme Boggart', 'Nicholas Jones', 'Η.Β. · 30′ · 2025'), item('Dollhouse Elephant', 'Jenny Jokela, Ylva Perera', 'Φινλανδία · 11′ · 2025'), item('Too Rough', 'Sean Lionadh', 'Η.Β. · 15′ · 2022'), item('White Ant', 'Shalini Adnani', 'Η.Β., Ινδία · 15′ · 2023'), item('Neil Armstrong and the Langholmites', 'Duncan Cowles', 'Η.Β. · 18′ · 2025')]},
  alinda1: { items: [item('Οι Καρβουνιάρηδες / Coalmen', undefined, '24′ · 1977'), item('Το Θέατρο στο Βουνό / To Theatro sto Vouno', undefined, '49′ · 1985')]},
  alinda2: { items: [item('ΣΠΑΤΑ, το Στιφάδο του Άγιου Πέτρου / Spata, Saint Peter’s Stew', undefined, '22′ · 1978'), item('Φούρνοι, μια Γυναικεία Κοινωνία / Fournoi, a Female Society', undefined, '45′ · 1983')]},
  christosDemas: { qa: true, items: [item('Ένας Ουρανός Γεμάτος Αστέρια / A Sky Full of Stars', undefined, '19′ · 1995'), item('TENDER', undefined, '13′ · 1997'), item('BREATH', undefined, '20′ · 1998'), item('AMERIKANOS', undefined, '23′ · 1999')]},
  filmLab1: { items: [item('Τρίτο Ημίχρονο / The Third Half', 'Γαρυφαλιά Συρόπλη / Garyfalia Syropli', '19′'), item('Λεβάντα / Lavender', 'Ελευθερία Καλπάκη / Eleftheria Kalpaki', '16′'), item('Το Ταξί / The Taxi', 'Σενάριο: Βάσω Κωνσταντινίδου · Σκηνοθεσία: Θεμιστοκλής Κασιμίδης', '15′'), item('Μόνο που δεν Έβρεξε / Everything but the Rain', 'Αναστασία Αγαθαγγέλου / Anastasia Agathangelou', '18′')]},
  filmLab2: { items: [item('Η Μετάθεση / Postponing', 'Ελισσάβετ Παπαδοπούλου / Elisavet Papadopoulou', '15′'), item('Για μια Στιγμή / For a Moment', 'Αλέξανδρος Βαμβακίδης / Alexandros Vamvakidis', '15′'), item('Το Ραβασάκι / The Love Note', 'Κώστας Χουρμουζιάδης / Kostas Hourmouziadis', '15′'), item('Το Σακάκι / The Blazer', 'Σενάριο: Μαριλένα Μαρκιανού · Σκηνοθεσία: Νίκος Δόρτης', '20′')]},
  houShowcase: { items: [
    item('Λεπτοδείκτες / Clock Hands', 'Ελένη Διαμαντοπούλου / Eleni Diamantopoulou', '3′'), item('Κάπου Ξανά / Somewhere, Again', 'Φούλη Ολυμπίου / Fouli Olympiou', '5′'),
    item('Αναχώρηση / Departure', 'Βρισηίδα Λύρα / Vrisida Lyra', '4′'), item('Αλάργο / Faraway', 'Παναγιώτης Σαρρής / Panagiotis Sarris', '6′'),
    item('Κόμικ / KOMIK', 'Λευτέρης Παρασκευάς / Lefteris Paraskevas', '3′'), item('Να με Θυμάσαι / Remember me', 'Νικόλας Γκαραβέλας / Nikolas Garavelas', '3′'),
    item('Πού πάνε οι ήχοι όταν δεν τους ακούμε πια;', 'Γιώργος Αλεξίου / George Alexiou', '4′'), item('Μόκα / Moka', 'Χρυσάνθη Γαβριλάκη / Chrisanthi Gavrilaki', '3′'),
    item('Les Prisonniers', 'Παναγιώτα Διαμαντέα / Panagiota Diamantea', '9′'), item('La Petite Mort', 'Ελένη Αντωναράκου / Eleni Antonarakou', '6′'),
    item('Κάτι Μικρό Αρκεί / Small Things Matter', 'Μαρία Μπαχάρη / Maria Bachari', '5′'), item('Προπληρωμένο Τέλος / Port Payé', 'Ευαγγελία Γιαννέλου / Evangelia Giannelou', '7′'),
    item('Exchibit21', 'Μαρκέλλος Πλακίτσης / Markellos Plakitsis', '9′'), item('Ο Χώρος / O Xoros', 'Λίζα Μπασδαβάνου / Liza Mpasdavanou', '8′'),
    item('Απαγορευμένο / Forbidden', 'Αθανάσιος Νταβλούρος / Athanasios Davlouros', '5′'), item('Σούπερ Μάρκετ / SPR MRKT', 'Δήμητρα Πετμεζά / Dimitra Petmeza', '4′'),
    item('Σπορά / Spora', 'Βαρνάβας Καστανάρας / Varnavas Kastanaras', '13′'), item('Το Χωριό Που Χάνεται / A Village Fading Away', 'Αριστοτέλης Αθανασιάδης / Aristotelis Athanasiadis', '10′'),
  ]},
  electricSwan: { description: 'Την προβολή ακολουθεί η ομιλία SFH «Ακούγοντας την ταινία: Η συνεργασία σκηνοθέτη και sound designer», με την Κωνσταντίνα Κοτζαμάνη και την Περσεφόνη Μήλιου. Γλώσσα: Αγγλικά.', items: [item('Ηλεκτρικός Κύκνος / Electric Swan', 'Κωνσταντίνα Κοτζαμάνη', 'Γαλλία, Ελλάδα, Αργεντινή · 40′ · 2019')]},
}
