export const adatLeiras = {
  nev: {
    megjelenes: "Név",
    tipus: "text",
    placeholder: "Példa",
    pattern: "^[A-Z][a-z]{3}",
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: true,
  },

  szul: {
    megjelenes: "Születési idő",
    tipus: "number",
    value: "2000",
    pattern: {},
    szoveg: "1000 és 2023 közötti számot adhat meg!",
    required: false,
  },
};
