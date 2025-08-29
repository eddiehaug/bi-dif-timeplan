import type { Activity, Professor } from '../types';

export const activities: Activity[] = [
  // Tirsdag 9. september
  {
    id: 'tue-1',
    day: 'Tirsdag',
    time: '10:00 - 10:45',
    title: 'Velkommen!',
    presenter: 'Ved professor Peder Inge Furseth (PIF)',
    color: 'blue',
    details: {
      pedagogy: { title: 'Forelesning', description: 'Introduksjon til programmet og dets 10 sentrale spørsmål. Innholdet i de fem samlingene. Plan for første samling. Bruk av lesegrupper i studiet.' },
      comments: 'Utdrag på et par minutter av videoen vises. Futuristen Peter Leyden i California.',
      links: [{ text: 'Se video her', url: 'https://www.youtube.com/embed/-zoCpFfOH04', type: 'video' }]
    },
  },
  { id: 'tue-break-1', day: 'Tirsdag', time: '10:45 - 11:00', title: 'Kort pause: Kaffe/te', color: 'gray' },
  {
    id: 'tue-2',
    day: 'Tirsdag',
    time: '11:00 - 12:00',
    title: 'Deltagerne presenterer seg og kommenterer',
    presenter: 'Ved PIF',
    color: 'green',
    details: {
      pedagogy: { title: 'Deltagerne presenterer seg', description: 'Deltagerne presenterer seg, og kommenterer ett av de 10 sentrale spørsmålene hver.' },
      comments: 'Hver deltager kommenterer ett av 10 sentrale spørsmålene.\nHver enkelt kommenterer kort det spørsmålet de finner mest relevant av de 10 sentrale spørsmålene på programmet.',
    },
  },
  { id: 'tue-lunch', day: 'Tirsdag', time: '12:00 - 13:00', title: 'Lunch', color: 'gray' },
  {
    id: 'tue-3',
    day: 'Tirsdag',
    time: '13:00 - 13:45',
    title: 'Introduksjon av forelesere og hovedmodeller',
    presenter: 'Ved PIF',
    color: 'blue',
    details: {
      pedagogy: { title: 'Forelesning', description: 'Introduksjon av forelesere fra BI. De 10 hovedmodellene i studiet. Gjennomgang av pensumliste.' },
      comments: 'For hvert av de 10 sentrale spørsmålene på programmet er det valgt én hovedmodell.',
    },
  },
  {
    id: 'tue-4',
    day: 'Tirsdag',
    time: '14:00 - 14:45',
    title: 'Teknologitrender',
    presenter: 'Ved Siri Riis Evensen, Country leader, IBM Norge',
    color: 'orange',
    details: {
      pedagogy: { title: 'Gjesteforelesning', description: 'Innlegg om teknologitrender.' },
      comments: 'Deltagerne kommenterer.\nIBM Norge vil holde innlegg verdiskaping gjennom ny teknologi på alle samlingene i Nydalen, i 1 til 2 timer.',
      links: [{ text: 'Linkedin-profil', url: 'https://www.linkedin.com/in/siri-riis-evensen-b8a54139/', type: 'profile' }]
    },
  },
  {
    id: 'tue-5',
    day: 'Tirsdag',
    time: '15:00 - 17:00',
    title: 'KI – introduksjon og oversikt',
    presenter: 'Ved Silvija Seres. Avrunding ved PIF fra 1645-1700.',
    color: 'orange',
    details: {
      pedagogy: { title: 'Gjesteforelesning', description: 'Introduksjon og oversikt over kunstig intelligens.' },
      comments: 'Deltagere diskuterer i par.\nSilvija Seres vil holde forelesninger om KI på begge samlingene på BI i høst. (Neste samling er 18.-21. november)',
      links: [{ text: 'Linkedin-profil', url: 'https://www.linkedin.com/in/silvijaseres/', type: 'profile' }]
    },
  },
  { id: 'tue-end', day: 'Tirsdag', time: '17:00', title: 'Slutt for dagen', color: 'gray' },

  // Onsdag 10. september
  {
    id: 'wed-1',
    day: 'Onsdag',
    time: '09:00 - 09:45',
    title: 'Presentasjon av tre sentrale forretningsmodeller',
    presenter: 'Ved PIF. Introduksjon av forelesere fra BI.',
    color: 'blue',
    details: {
      pedagogy: { title: 'Forelesning', description: 'Kort presentasjon av tre sentrale forretningsmodeller: Doblin-modellen (se boken Ten types of innovation); Osterwalders business model canvas, og Triangel-modellen.' },
      comments: 'Diskutere relevans.\nStoff om disse tre modellene finner du under spørsmål 2 av de 10 sentrale spørsmålene.',
    },
  },
  { id: 'wed-break-1', day: 'Onsdag', time: '09:45 - 10:00', title: 'Kort pause: Kaffe/te', color: 'gray' },
  {
    id: 'wed-2',
    day: 'Onsdag',
    time: '10:00 - 10:45',
    title: 'Introduksjon av boken \'Generative AI for Business\'',
    presenter: 'Ved Shubin Yu, førsteamanuensis ved BI',
    color: 'blue',
    details: {
      pedagogy: { title: 'Zoom-forelesning', description: 'Introduksjon av boken, og bruken av boken på samling 2 (torsdag 20.11).' },
      comments: 'Deltagere diskuterer i par om bruken av boken.\nBoken er tilgjengelig gratis her. Passord er mimi2025. Shubin Yu bruker boken i sitt heldagsopplegg 20. november.',
      links: [
        { text: 'Gå til boken', url: 'https://www.gaiforbusiness.com/index.html', type: 'web' },
        { text: 'Linkedin-profil', url: 'https://www.linkedin.com/in/shubin-yu-lance/', type: 'profile' }
      ]
    },
  },
  { id: 'wed-break-2', day: 'Onsdag', time: '10:45 - 11:00', title: 'Kort pause', color: 'gray' },
  {
    id: 'wed-3',
    day: 'Onsdag',
    time: '11:00 - 12:00',
    title: 'Omstillingsbarometeret for Norge 2025',
    presenter: 'Ved Øystein Søreide, Adm dir i Abelia',
    color: 'orange',
    details: {
      pedagogy: { title: 'Forelesning', description: 'Omstillingsbarometeret publiseres i år for tiende gang.' },
      comments: 'Diskutere funnene.\nBarometeret viser hvor godt Norge gjør det på en rekke områder som er viktig for omstilling. Resultatene i årets barometer er urovekkende.',
      links: [{ text: 'Linkedin-profil', url: 'https://www.linkedin.com/in/oystein-soreide/', type: 'profile' }]
    },
  },
  { id: 'wed-lunch', day: 'Onsdag', time: '12:00 - 13:00', title: 'Lunch', color: 'gray' },
  {
    id: 'wed-4',
    day: 'Onsdag',
    time: '13:00 - 13:45',
    title: 'Introduksjon til pensumboken \'All in on AI\'',
    presenter: 'av Thomas Davenport og Nitin Mittal. Ved PIF.',
    color: 'blue',
    details: {
      pedagogy: { title: 'Forelesning', description: 'Introduksjon og diskusjon om bokens relevans.' },
      comments: 'Diskutere relevans.\nDenne boken vil vi bruke også på samling nr 2 og 3 i Nydalen.',
    },
  },
  { id: 'wed-break-3', day: 'Onsdag', time: '13:45 - 14:00', title: 'Kort pause, og flytting til annet auditorium', color: 'gray' },
  {
    id: 'wed-5',
    day: 'Onsdag',
    time: '14:00 - 17:00',
    title: 'Gruppearbeid / «World Café»',
    presenter: 'Ved PIF. Slutt kl 17:00',
    color: 'yellow',
    details: {
      pedagogy: { title: 'Gruppearbeid (lesegruppene)', description: 'Til diskusjon: Hva er de 3-4 viktigste spørsmålene for å øke innovasjon i Norge, og hva er gruppens beste svar på disse spørsmålene?' },
      comments: 'Diskutere spørsmål om hvordan øke innovasjon i Norge.\nDeltagerne starter i sine lesegrupper og går så til andre grupper. Avslutningsvis møtes deltagerne i sine lesegrupper igjen.',
      links: [{ text: 'Les om World Café her', url: 'https://www.betterevaluation.org/methods-approaches/methods/world-cafe', type: 'web' }]
    },
  },
  { id: 'wed-end', day: 'Onsdag', time: '17:00', title: 'Slutt for dagen', color: 'gray' },
  
  // Torsdag 11. september
  {
    id: 'thu-1',
    day: 'Torsdag',
    time: '09:00 - 10:30',
    title: 'Hvordan bygge digitale plattformer for å skape verdi?',
    presenter: 'Ved professor Eliane Bücher, BI',
    color: 'blue',
    details: {
      pedagogy: { title: 'Forelesning', description: '' },
      comments: 'Diskutere relevans.\nHvordan digitale plattformer kan skape verdi er ett av de 10 sentrale spørsmålene på programmet.',
      links: [{ text: 'Linkedin-profil', url: 'https://www.linkedin.com/in/eliane-bucher-96389793/', type: 'profile' }]
    },
  },
  { id: 'thu-break-1', day: 'Torsdag', time: '10:30 - 11:00', title: 'Pause. Kaffe/te', color: 'gray' },
  {
    id: 'thu-2',
    day: 'Torsdag',
    time: '11:00 - 12:00',
    title: 'Praktisk bruk av KI-modeller',
    presenter: 'Ved Oscar Engelschiøn og Peder Inge Furseth',
    color: 'yellow',
    details: {
      pedagogy: { title: 'Forelesning', description: 'Praktisk bruk av KI-modeller, med vekt på GPT-5, Claude, og Gemini 2.5.' },
      comments: 'Deltagerne diskuterer i par om erfaringer med bruk av disse modellene.\nDeltagerne oppfordres til å skaffe seg betalingsversjonene av de nevnte tre KI-modellene.',
    },
  },
  { id: 'thu-lunch', day: 'Torsdag', time: '12:00 - 13:00', title: 'Lunch', color: 'gray' },
  {
    id: 'thu-3',
    day: 'Torsdag',
    time: '13:00 - 13:45',
    title: 'Nytt om KI og verdiskaping (#1)',
    presenter: 'Ved Daniel Andersen, Director – Cloud & AI Services, Sopra Steria. Ved PIF.',
    color: 'orange',
    details: {
      pedagogy: { title: 'Gjesteforelesning', description: 'Hva betyr det at modeller \'tenker\'?' },
      comments: 'Delta aktivt.\nDaniel Andersen vil ha innspill om «Nytt om KI og verdiskaping» på hver samling i Nydalen, 1 time hver gang.',
      links: [{ text: 'Linkedin-profil', url: 'https://www.linkedin.com/in/anderdan/', type: 'profile' }]
    },
  },
  { id: 'thu-break-2', day: 'Torsdag', time: '13:45 - 14:00', title: 'Kort pause', color: 'gray' },
  {
    id: 'thu-4',
    day: 'Torsdag',
    time: '14:00 - 15:00',
    title: 'Informasjon om prosjektoppgaven og veien videre',
    presenter: 'Ved Peder Inge Furseth',
    color: 'blue',
    details: {
      pedagogy: { title: 'Forelesning', description: 'Informasjon om prosjektoppgaven, og mal for denne. Leseliste til samling 2. Oppsummering og avrunding.' },
      comments: 'Lesegruppene fordeler 10 artikler på sine medlemmer.\nTil samlingen i november ventes at alle har lest 10 artikler og 2 bøker. Hver lesegruppe skal presentere én artikkel i plenum på samlingen i november.',
    },
  },
  { id: 'thu-end', day: 'Torsdag', time: '15:00', title: 'Slutt kl 15:00', color: 'gray' },
];


export const professors: Professor[] = [
  { name: 'Peder Inge Furseth', email: 'Peder.i.furseth@bi.no', role: 'Foreleser, veileder, programansvarlig', position: 'Professor', sessions: '1, 2, 3, 4, 5', imageUrl: 'https://picsum.photos/seed/peder/80/80', linkedinUrl: 'https://www.linkedin.com/in/peder-inge-furseth-prof-0b9660/' },
  { name: 'Benedicte Brøgger', email: 'Benedicte.brogger@bi.no', role: 'Foreleser, veileder', position: 'Professor', sessions: '2, 3', imageUrl: 'https://picsum.photos/seed/benedicte/80/80', linkedinUrl: 'https://www.linkedin.com/in/benedicte-br%C3%B8gger-30613b15/' },
  { name: 'Heidi Wiig', email: 'Heidi.wiig@bi.no', role: 'Foreleser, veileder', position: 'Professor', sessions: '3', imageUrl: 'https://picsum.photos/seed/heidi/80/80', linkedinUrl: 'https://www.linkedin.com/in/heidi-wiig-b73a711/' },
  { name: 'Eliane Bücher', email: 'Eliane.bucher@bi.no', role: 'Foreleser, veileder', position: 'Professor', sessions: '', imageUrl: 'https://picsum.photos/seed/eliane/80/80', linkedinUrl: 'https://www.linkedin.com/in/eliane-bucher-96389793/' },
  { name: 'Roald Nomme', email: 'Roald.nomme@bi.no', role: 'Foreleser, veileder', position: 'Høyskolelektor', sessions: '2, 3, 5', imageUrl: 'https://picsum.photos/seed/roald/80/80', linkedinUrl: 'https://www.linkedin.com/in/roald-nomme-a38616/' },
  { name: 'Kristian Alm', email: 'Kristian.alm@bi.no', role: 'Foreleser, veileder', position: 'Førsteamanuensis', sessions: '2, 3', imageUrl: 'https://picsum.photos/seed/kristian/80/80', linkedinUrl: 'https://www.linkedin.com/in/kristian-alm-a3042347/' },
  { name: 'Terje Colbjørnsen', email: 'Terje.colbjornsen@bi.no', role: 'Foreleser, veileder', position: 'Førsteamanuensis', sessions: '2, 3', imageUrl: 'https://picsum.photos/seed/terje/80/80', linkedinUrl: 'https://www.linkedin.com/in/terje-colbj%C3%B8rnsen-a7a47116/' },
];