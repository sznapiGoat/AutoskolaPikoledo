export type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

/**
 * Skutečné recenze žáků (Google / veřejné registry autoškol).
 * Drobné překlepy z originálů byly opraveny pro čitelnost, obsah zachován.
 */
export const reviews: Review[] = [
  {
    name: "Matěj Jan",
    date: "červen 2026",
    rating: 5,
    text: "Po celou dobu autoškoly se mnou jednali profesionálně a kamarádsky. Měl jsem instruktora pana Matěje Andrássyho a lepšího jsem dostat nemohl – měl trpělivost a dovedl mě až k úspěšnému složení závěrečné zkoušky. Jsem moc vděčný a doporučuji!",
  },
  {
    name: "Terezie",
    date: "březen 2026",
    rating: 5,
    text: "S autoškolou Pikoledo jsem velmi spokojená. S termíny nebyl problém a přístup je velmi přátelský, trpělivý a profesionální. Děkuji všem instruktorům, hlavně instruktorce Lence, která mi odpovídala na všechny otázky a byla se mnou trpělivá. Vřele doporučuji!",
  },
  {
    name: "Nela",
    date: "únor 2026",
    rating: 5,
    text: "Byla jsem maximálně spokojená. Instruktoři byli trpěliví, vstřícní a všechno mi vždy srozumitelně vysvětlili. Díky jejich přístupu jsem se za volantem cítila jistá a v klidu. Určitě doporučuji všem, kdo hledají kvalitní autoškolu.",
  },
  {
    name: "Dagmar",
    date: "duben 2022",
    rating: 5,
    text: "Učení probíhá v klidu a s úctou k žákovi. Snaží se předat maximum. Obzvlášť doporučuji instruktora Matěje Andrássyho, který dokáže žáka zklidnit, správně navést a nechat ho poučit se z vlastních chyb. Dobře připraví ke zkouškám.",
  },
  {
    name: "Anonymní žák",
    date: "červenec 2024",
    rating: 5,
    text: "Nejlepší autoškola. Moc děkuji paní učitelce, která mě naučila řídit, vše důkladně vysvětlila a hlavně byla velice trpělivá. Mají i super akce, kde ušetříte hodně peněz. Celý kurz proběhl hladce a bez problémů.",
  },
  {
    name: "Adam Brückner",
    date: "listopad 2016",
    rating: 5,
    text: "Tato autoškola mi opravdu otevřela oči, a to svým odborným, přátelským a neskutečně profesionálním přístupem. Závěrečné zkoušky jsem složil hned na první pokus. Kdo přemýšlí, kde dělat řidičák sk. B v Ostravě – nepřemýšlejte a volejte Pikoledo!",
  },
  {
    name: "Veronika S.",
    date: "únor 2017",
    rating: 5,
    text: "Měla jsem velké štěstí, že jsem narazila právě na tuto autoškolu. Skvělý přístup, ochota, profesionalita. Hlavně děkuji paní Alence, která mi pomohla odbourat stres a navodit v autě báječnou atmosféru a všechno potřebné mě naučila.",
  },
  {
    name: "Anonymní žák",
    date: "květen 2021",
    rating: 5,
    text: "Tuto autoškolu jsem si vybrala po delším zvažování a jsem moc ráda, že jsem to udělala. Za mě nejlepší autoškola v Ostravě. Pomohla mi překonat strach z řízení, byla ohleduplná a vždy se dalo na čemkoliv v klidu domluvit.",
  },
  {
    name: "Jana R.",
    date: "květen 2017",
    rating: 5,
    text: "Přihlásila jsem se na doporučení a ani na vteřinu jsem nelitovala! Ocenila jsem příjemný, vstřícný a profesionální přístup. Při jízdách byla vždy skvělá atmosféra. Vřele doporučuji!",
  },
  {
    name: "Matěj Kubášek",
    date: "prosinec 2016",
    rating: 5,
    text: "Výborná autoškola, skvělý a profesionální přístup instruktorek, které umí u žáka odbourat stres, odlehčit atmosféru a hlavně vše vysvětlit, když se něco nepovede. Mohu jedině doporučit.",
  },
];
