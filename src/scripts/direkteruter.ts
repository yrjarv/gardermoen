function mainLoadDirekteruter() {
  // Destinations by country in Norwegian and English
  let destinationsNO: { [country: string]: string | string[] } = {
    "Norge": [
      "Alta",
      "And&oslashya",
      "Bardufoss",
      "Bergen",
      "Bod&oslash",
      "Br&oslashnn&oslashysund",
      "Flor&oslash",
      "Harstad",
      "Haugesund",
      "Kirkenes",
      "Kristiansand",
      "Lakselv",
      "Leknes",
      "Longyearbyen",
      "Molde",
      "Mosj&oslashen",
      "R&oslashros",
      "Sandane",
      "Sandefjord",
      "Sandnessj&oslashen",
      "Sogndal",
      "Stavanger",
      "Stord",
      "Svolv&aeligr",
      "Troms&oslash",
      "Trondheim",
      "&Oslashrland",
      "&Oslashrsta-Volda",
      "&Aringlesund"
    ],
    "Hellas": [
      "Athens",
      "Chania",
      "Heraklion",
      "Kalamata",
      "Karpathos",
      "Kavala",
      "Keffallinia",
      "Kerkyra",
      "Kos",
      "Limnos",
      "Mytilini",
      "Preveza",
      "Rhodos",
      "Samos",
      "Sitia",
      "Skiathos",
      "Thessaloniki",
      "Thira",
      "Zakynthos"
    ],
    "Spania": [
      "Alicante",
      "Barcelona",
      "Bilbao",
      "Arrecife",
      "Fuerteventura",
      "Gran Canaria",
      "Ibiza",
      "Leon",
      "Madrid",
      "Malaga",
      "Palma de Mallorca",
      "Pamplona",
      "Tenerife",
      "Valencia",
      "Zaragoza"
    ],
    "Italia": [
      "Alghero",
      "Bari",
      "Bergamo",
      "Bologna",
      "Catania",
      "Firenze",
      "Milano",
      "Naples",
      "Olbia",
      "Palermo",
      "Pisa",
      "Roma",
      "Venice",
      "Villafranca"
    ],
    "Albania": "Tirana",
    "Belgia": [
      "Brussels",
      "Liege"
    ],
    "Bosnia-Herzegovina": "Sarajevo",
    "Bulgaria": [
      "Burgas",
      "Sofia",
      "Varna"
    ],
    "Danmark": [
      "Aalborg",
      "Billund",
      "K&oslashbenhavn",
      "&Aringrhus"
    ],
    "Egypt": "Sharm El Sheikh",
    "Estland": "Tallinn",
    "F&aeligr&oslashyene": "F&aeligr&oslashyene",
    "Finland": [
      "Helsinki",
      "Tampere"
    ],
    "Frankrike": [
      "Ajaccio",
      "Bordeaux",
      "Nice",
      "Paris"
    ],
    "Irland": "Dublin",
    "Island": "Keflavik",
    "Israel": "Tel-aviv",
    "Kroatia": [
      "Dubrovnik",
      "Pula",
      "Split"
    ],
    "Kypros": "Larnaca",
    "Latvia": "Riga",
    "Litauen": [
      "Kaunas",
      "Palanga",
      "Vilnius"
    ],
    "Luxembourg": "Luxemburg",
    "Malta": "Malta",
    "Montenegro": "Tivat",
    "Nederland": "Amsterdam",
    "Nord-Makedonia": "Skopje",
    "Polen": [
      "Gdansk",
      "Katowice",
      "Krakow",
      "Szczecin",
      "Warszawa"
    ],
    "Portugal": [
      "Faro",
      "Funchal",
      "Lisboa",
      "Porto"
    ],
    "Qatar": "Doha",
    "Romania": "Bucuresti",
    "Serbia": [
      "Beograd",
      "Pristina"
    ],
    "Storbritannia": [
      "Aberdeen",
      "Edinburgh",
      "London",
      "Manchester"
    ],
    "Sveits": [
      "Geneve",
      "Z&uumlrich"
    ],
    "Sverige": [
      "G&oumlteborg",
      "Stockholm",
      "Umea"
    ],
    "Tsjekkia": "Praha",
    "Tyrkia": [
      "Alanya",
      "Antalya",
      "Dalaman",
      "Istanbul",
      "Izmir"
    ],
    "Tyskland": [
      "D&uumlsseldorf",
      "Frankfurt",
      "Hamburg",
      "M&uumlnchen",
      "Stuttgart"
    ],
    "UAE": "Dubai",
    "USA": [
      "Fort Lauderdale",
      "Los Angeles",
      "New York"
    ],
    "Ungarn": "Budapest",
    "&Oslashsterrike": "Wien"
  };
  let destinationsEN: { [country: string]: string | string[] } = {
    "Norway": [
      "Alta",
      "And&oslashya",
      "Bardufoss",
      "Bergen",
      "Bod&oslash",
      "Br&oslashnn&slashysund",
      "Flor&oslash",
      "Harstad",
      "Haugesund",
      "Kirkenes",
      "Kristiansand",
      "Lakselv",
      "Leknes",
      "Longyearbyen",
      "Molde",
      "Mosj&oslashen",
      "R&oslashros",
      "Sandane",
      "Sandefjord",
      "Sandnessj&oslashen",
      "Sogndal",
      "Stavanger",
      "Stord",
      "Svolv&aeligr",
      "Troms&oslash",
      "Trondheim",
      "&Oslashrland",
      "&Oslashrsta-Volda",
      "&Aringlesund"
    ],
    "Greece": [
      "Athens",
      "Chania",
      "Heraklion",
      "Kalamata",
      "Karpathos",
      "Kavala",
      "Keffallinia",
      "Kerkyra",
      "Cuddle",
      "Limnos",
      "Mytilini",
      "Preveza",
      "Rhodes",
      "Samos",
      "Sitia",
      "Skiathos",
      "Thessaloniki",
      "Thira",
      "Zakynthos"
    ],
    "Spain": [
      "Alicante",
      "Barcelona",
      "Bilbao",
      "Arrecife",
      "Fuerteventura",
      "Gran Canaria",
      "Ibiza",
      "Leon",
      "Madrid",
      "Malaga",
      "Palma de Mallorca",
      "Pamplona",
      "Tenerife",
      "Valencia",
      "Zaragoza"
    ],
    "Italy": [
      "Alghero",
      "Bari",
      "Bergamo",
      "Bologna",
      "Catania",
      "Florence",
      "Milan",
      "Naples",
      "Olbia",
      "Palermo",
      "Pisa",
      "Rome",
      "Venice",
      "Villafranca"
    ],
    "Albania": "Tirana",
    "Austria": "Vienna",
    "Belgium": [
      "Brussels",
      "Lie"
    ],
    "Bosnia Herzegovina": "Sarajevo",
    "Bulgaria": [
      "Burgas",
      "Sofia",
      "Warn"
    ],
    "Croatia": [
      "Dubrovnik",
      "Pula",
      "Split"
    ],
    "Cyprus": "Larnaca",
    "Czech Republic": "Prague",
    "Denmark": [
      "Aalborg",
      "Billund",
      "Copenhagen",
      "Aarhus"
    ],
    "Egypt": "Sharm El Sheikh",
    "Estonia": "Tallinn",
    "Faroe Islands": "Faroe Islands",
    "Finland": [
      "Helsinki",
      "Tampers"
    ],
    "France": [
      "Ajaccio",
      "Bordeaux",
      "Nice",
      "Paris"
    ],
    "Germany": [
      "D&uumlsseldorf",
      "Frankfurt",
      "Hamburg",
      "Munich",
      "Stuttgart"
    ],
    "Great Britain": [
      "Aberdeen",
      "Edinburgh",
      "London",
      "Manchester"
    ],
    "Hungary": "Budapest",
    "Iceland": "Keflavik",
    "Ireland": "Dublin",
    "Israel": "Tel-Aviv",
    "Latvia": "Riga",
    "Lithuania": [
      "Kaunas",
      "Palanga",
      "Vilnius"
    ],
    "Luxembourg": "Luxembourg",
    "Malta": "Malta",
    "Montenegro": "Tivat",
    "Netherlands": "Amsterdam",
    "North Macedonia": "Skopje",
    "Poland": [
      "Gdansk",
      "Katowice",
      "Krakow",
      "Szczecin",
      "Warsaw"
    ],
    "Portugal": [
      "Faro",
      "Funchal",
      "Lisbon",
      "Postage"
    ],
    "Qatar": "Doha",
    "Romania": "Bucuresti",
    "Serbia": [
      "Belgrade",
      "Pristina"
    ],
    "Sweden": [
      "Gothenburg",
      "Stockholm",
      "Umea"
    ],
    "Switzerland": [
      "Geneva",
      "Zurich"
    ],
    "Turkey": [
      "Alanya",
      "Antalya",
      "Dalaman",
      "Istanbul",
      "Izmir"
    ],
    "UAE": "Dubai",
    "United States": [
      "Fort Lauderdale",
      "Los Angeles",
      "New York"
    ]
  };

  // Ensures that the correct language is chosen based on the user's choice of language
  if (localStorage.language === "no") {
    $("#destinations").html(loadDestinations(destinationsNO));
  }
  else {
    $("#destinations").html(loadDestinations(destinationsEN));
  }
}

function loadDestinations(destinations: { [key: string]: string | string[] }): string {
  let html: string = "";
  for (let i = 0; i < Object.keys(destinations).length; i++) {
    html += (
      "<div class='destination'>\
        <p><b>" + Object.keys(destinations)[i] + "</b></p>\
        <p>")
    // If only one destination in the country, simply add its string to the HTML
    if (typeof destinations[Object.keys(destinations)[i]] === "string") {
      html += destinations[Object.keys(destinations)[i]]
    }
    // If there are several, add the different cities with comma and space between to the HTML
    else {
      for (let j = 0; j < destinations[Object.keys(destinations)[i]].length-1; j++) {
        html += destinations[Object.keys(destinations)[i]][j] + ", "
      }
      html += destinations[Object.keys(destinations)[i]][
        destinations[Object.keys(destinations)[i]].length - 1]
    }
     html += "</p></div>";
  }
  return html
}