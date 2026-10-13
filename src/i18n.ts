export const company = {
  name: 'Duai, UAB',
  brand: 'DUAI',
  code: '306968206',
  street: 'A. Juozapavičiaus pr. 122',
  city: 'Kaunas',
  country: 'LT',
  email: 'duaiaub@gmail.com',
  phone: '+37062668769',
  phoneDisplay: '+370 626 68769',
} as const;

export type Lang = 'lt' | 'en';
export type ServiceKey = 'skenavimas' | 'leidyba' | 'maketavimas';

const lt = {
  htmlLang: 'lt',
  ogLocale: 'lt_LT',
  meta: {
    title: 'DUAI – dokumentų skenavimas, knygų leidyba ir maketavimas',
    description:
      'Skenuojame dokumentus ir archyvus, maketuojame ir leidžiame knygas. Vienas partneris nuo pirmo lapo iki paskutinio puslapio. Kaunas, visa Lietuva.',
  },
  nav: { services: 'Paslaugos', process: 'Kaip dirbame', contact: 'Kontaktai', cta: 'Gauti pasiūlymą', skip: 'Pereiti prie turinio', langLabel: 'Kalba' },
  hero: {
    eyebrow: 'Skenavimas · Leidyba · Maketavimas',
    title: 'Nuo popieriaus lapo iki išleistos knygos.',
    lead: 'Skenuojame dokumentus ir archyvus, maketuojame ir leidžiame knygas. Jūs perduodate medžiagą – mes ją sutvarkome, suformuojame ir paruošiame naudoti.',
    cta: 'Gauti pasiūlymą',
    secondary: 'Peržiūrėti paslaugas',
    imageAlt: 'Knygų rietuvė, popieriaus lapai ir skeneris ant šviesaus stalo',
  },
  problems: {
    title: 'Kai popierius trukdo, o idėja laukia',
    lead: 'Dažniausiai į mus kreipiamasi dėl vienos iš šių priežasčių.',
    items: [
      {
        problem: 'Archyvai užima vietą, o reikiamo dokumento nerandate.',
        solution: 'Nuskenuojame ir sutvarkome, kad bet kurį dokumentą rastumėte per kelias sekundes.',
      },
      {
        problem: 'Turite rankraštį, bet nežinote, nuo ko pradėti leidybą.',
        solution: 'Vedame per visą procesą – nuo teksto paruošimo iki spausdintos knygos.',
      },
      {
        problem: 'Tekstas paruoštas, bet leidinys atrodo neprofesionaliai.',
        solution: 'Sumaketuojame aiškiai ir tvarkingai, paruošiame spaudai ir ekranui.',
      },
    ],
    problemLabel: 'Problema',
    solutionLabel: 'Sprendimas',
  },
  services: {
    title: 'Paslaugos',
    lead: 'Trys paslaugos, kurios gali veikti atskirai arba kartu – kaip vienas projektas.',
    items: {
      skenavimas: {
        title: 'Dokumentų skenavimas',
        text: 'Popierinius dokumentus ir archyvus paverčiame tvarkingais skaitmeniniais failais.',
        points: [
          'Dokumentai, sutartys, archyvai',
          'Knygos ir susegti leidiniai',
          'Paieškai paruošti PDF failai',
          'Failų struktūra pagal jūsų poreikius',
        ],
        imageAlt: 'Senas dokumentų aplankas ant knygų skenerio stiklo',
      },
      leidyba: {
        title: 'Knygų leidyba',
        text: 'Padedame išleisti knygą nuo rankraščio iki spausdinto tiražo.',
        points: [
          'Rankraščio paruošimas leidybai',
          'Viršelio ir vidaus dizainas',
          'Spaudos organizavimas',
          'Maži ir dideli tiražai',
        ],
        imageAlt: 'Kelios kietais viršeliais įrištos knygos ir viena atversta',
      },
      maketavimas: {
        title: 'Maketavimas',
        text: 'Sukuriame aiškų, skaitomą maketą ir paruošiame failus spaudai.',
        points: [
          'Knygos, katalogai, leidiniai',
          'Failai, paruošti spaustuvei',
          'Skaitmeniniai formatai',
          'Korektūrų taisymas',
        ],
        imageAlt: 'Ant stalo išdėlioti spausdinti maketo puslapiai, pieštukas ir liniuotė',
      },
    } satisfies Record<ServiceKey, unknown>,
  },
  process: {
    title: 'Kaip dirbame',
    lead: 'Paprastas procesas be staigmenų.',
    steps: [
      { title: 'Parašykite', text: 'Trumpai aprašykite darbą: ką reikia padaryti, kokia apimtis ir iki kada.' },
      { title: 'Gaukite pasiūlymą', text: 'Įvertiname darbą ir pateikiame aiškią kainą bei terminą.' },
      { title: 'Gaukite rezultatą', text: 'Atliekame darbą ir perduodame jums paruoštus failus arba leidinius.' },
    ],
  },
  extra: {
    eyebrow: 'Taip pat',
    title: 'Serverių priežiūra',
    text: 'Prižiūrime serverius, kad jūsų svetainės ir sistemos veiktų be trikdžių: atnaujinimai, atsarginės kopijos ir stebėsena.',
    cta: 'Teirautis',
  },
  contact: {
    title: 'Kaina – pagal užklausą',
    lead: 'Kiekvienas darbas skirtingas, todėl kainą pateikiame įvertinę jūsų poreikius. Parašykite ar paskambinkite – atsakysime su pasiūlymu.',
    cta: 'Parašyti el. laišką',
    subject: 'Užklausa iš duai.lt',
    emailLabel: 'El. paštas',
    phoneLabel: 'Telefonas',
  },
  footer: { codeLabel: 'Įmonės kodas', rights: 'Visos teisės saugomos.' },
};

type Dict = typeof lt;

const en: Dict = {
  htmlLang: 'en',
  ogLocale: 'en_GB',
  meta: {
    title: 'DUAI – document scanning, book publishing and layout',
    description:
      'We scan documents and archives, lay out and publish books. One partner from the first sheet to the last page. Based in Kaunas, Lithuania.',
  },
  nav: { services: 'Services', process: 'How we work', contact: 'Contact', cta: 'Get a quote', skip: 'Skip to content', langLabel: 'Language' },
  hero: {
    eyebrow: 'Scanning · Publishing · Layout',
    title: 'From a sheet of paper to a published book.',
    lead: 'We scan documents and archives, lay out and publish books. You hand over the material – we organise it, shape it and make it ready to use.',
    cta: 'Get a quote',
    secondary: 'See services',
    imageAlt: 'A stack of books, paper sheets and a scanner on a light desk',
  },
  problems: {
    title: 'When paper gets in the way and ideas wait',
    lead: 'Most clients come to us for one of these reasons.',
    items: [
      {
        problem: 'Archives take up space, and you can never find the right document.',
        solution: 'We scan and organise them so you can find any document in seconds.',
      },
      {
        problem: 'You have a manuscript but don’t know where to start publishing.',
        solution: 'We guide you through the whole process – from text preparation to a printed book.',
      },
      {
        problem: 'The text is ready, but the publication doesn’t look professional.',
        solution: 'We create a clear, tidy layout and prepare it for print and screen.',
      },
    ],
    problemLabel: 'Problem',
    solutionLabel: 'Solution',
  },
  services: {
    title: 'Services',
    lead: 'Three services that work on their own or together – as one project.',
    items: {
      skenavimas: {
        title: 'Document scanning',
        text: 'We turn paper documents and archives into well-organised digital files.',
        points: [
          'Documents, contracts, archives',
          'Books and bound publications',
          'Searchable PDF files',
          'File structure that fits your needs',
        ],
        imageAlt: 'An old document folder on the glass of a book scanner',
      },
      leidyba: {
        title: 'Book publishing',
        text: 'We help you publish a book – from manuscript to printed run.',
        points: [
          'Manuscript preparation',
          'Cover and interior design',
          'Print management',
          'Small and large print runs',
        ],
        imageAlt: 'Several hardcover books and one open book',
      },
      maketavimas: {
        title: 'Layout',
        text: 'We create a clear, readable layout and prepare print-ready files.',
        points: [
          'Books, catalogues, publications',
          'Print-ready files',
          'Digital formats',
          'Proof corrections',
        ],
        imageAlt: 'Printed layout pages, a pencil and a ruler on a desk',
      },
    },
  },
  process: {
    title: 'How we work',
    lead: 'A simple process with no surprises.',
    steps: [
      { title: 'Write to us', text: 'Briefly describe the job: what needs doing, the volume and the deadline.' },
      { title: 'Get a quote', text: 'We assess the work and send a clear price and timeline.' },
      { title: 'Get the result', text: 'We do the work and deliver ready files or printed copies.' },
    ],
  },
  extra: {
    eyebrow: 'Also',
    title: 'Server maintenance',
    text: 'We look after your servers so your websites and systems run smoothly: updates, backups and monitoring.',
    cta: 'Ask us',
  },
  contact: {
    title: 'Price on request',
    lead: 'Every job is different, so we quote after understanding your needs. Write or call us and we’ll reply with an offer.',
    cta: 'Send an email',
    subject: 'Enquiry from duai.lt',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
  },
  footer: { codeLabel: 'Company code', rights: 'All rights reserved.' },
};

export const dict: Record<Lang, Dict> = { lt, en };
