var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Runs from onLoad on <body> in direkteruter.html.
 * Creates a local object with all destinations sorted by country.
 * Loads the list of destinations based on the user's chosen language, and translates other text if necessary.
 * Then loads the departure board for #departures.
 */
function mainLoadDirekteruter() {
    // Destinations by country in Norwegian and English
    let destinationsNO = {
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
    let destinationsEN = {
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
    // Creates 4 tables to use as departure boards
    $("#departures").html(loadDepartureBoardTables(4));
    // Ensures that the correct language is chosen based on the user's choice of language
    if (localStorage.language === "no") {
        $("#destinations").html(loadDestinations(destinationsNO));
    }
    else {
        $("#destinations").html(loadDestinations(destinationsEN));
        $($(".container > h2")[0]).text("All direct routes");
        $($(".container > h2")[1]).text("Departure board");
        for (let i = 0; i < $("#departures > table > thead").length; i++) {
            $($("#departures > table > thead")[i]).html("<tr>\
          <td>Flight</td>\
          <td>Destination</td>\
          <td>Time</td>\
        </tr>");
        }
    }
    ;
    // Makes the contents of said tables update every 500 ms
    for (let i = 0; i < $("table").length; i++) {
        window.setInterval(function () {
            return __awaiter(this, void 0, void 0, function* () {
                $($("#departures > table > tbody")[i]).html(yield loadDepartureBoard("./scripts/outXML.xml", i));
            });
        }, 500);
    }
}
;
/**
 *
 * @param destinations An object with all destinations, key is country and value is either one destination or an array of destinations
 * @returns A string with the HTML for the #destinations div
*/
function loadDestinations(destinations) {
    let html = "";
    for (let i = 0; i < Object.keys(destinations).length; i++) {
        html += ("<div class='destination'>\
        <p><b>" + Object.keys(destinations)[i] + "</b></p>\
        <p>");
        // If only one destination in the country, simply add its string to the HTML
        if (typeof destinations[Object.keys(destinations)[i]] === "string") {
            html += destinations[Object.keys(destinations)[i]];
        }
        // If there are several, add the different cities with comma and space between to the HTML
        else {
            for (let j = 0; j < destinations[Object.keys(destinations)[i]].length - 1; j++) {
                html += destinations[Object.keys(destinations)[i]][j] + ", ";
            }
            ;
            html += destinations[Object.keys(destinations)[i]][destinations[Object.keys(destinations)[i]].length - 1];
        }
        ;
        html += "</p></div>";
    }
    return html;
}
;
/**
 *
 * @param amount Amount of departure boards needed
 * @returns The HTML for the requested amount of departure boards
 */
function loadDepartureBoardTables(amount) {
    let html = "";
    for (let i = 0; i < amount; i++) {
        html += ("<table>\
        <thead>\
          <tr>\
            <td>Flight</td>\
            <td>Destinasjon</td>\
            <td>Tid</td>\
          </tr>\
        </thead>\
        <tbody></tbody>\
      </table>");
    }
    return html;
}
/**
 * Creates the HTML for one departure board.
 * @param xmlPath The path to the XML file containing the raw data from Avinor. This file is replaced frequently
 * @param tableIndex The index of the table with the departure board
 * @returns
 */
function loadDepartureBoard(xmlPath, tableIndex) {
    return __awaiter(this, void 0, void 0, function* () {
        let html = "";
        // Fetching the data
        const xmlRaw = new XMLHttpRequest();
        xmlRaw.open('GET', xmlPath, false);
        xmlRaw.send(null);
        const xmlDoc = $(xmlRaw.responseText);
        const flights = xmlDoc.find("flight");
        let indexStart = 0;
        for (let j = 0; j < flights.length; j++) {
            var time = new Date($(flights[j]).find("schedule_time").text());
            if (time.getTime() - time.getTimezoneOffset() < Date.now()) {
                indexStart = j;
            }
        }
        // Finds where i should start iterating, if this function is used for a table other than the first i starts at 20*tableIndex more
        let i = indexStart + 20 * tableIndex + 1;
        let indexEnd = i + 20;
        while (i < indexEnd) { // No more than 20 flights
            var flight = $(flights[i]);
            // Get local time from ISO string
            var time = new Date(flight.find("schedule_time").text());
            time = new Date(time.getTime() - time.getTimezoneOffset());
            // Generates the HTML for the current row
            html += "\
    <tr>\
      <td>" + flight.find("flight_id").text() + "</td>\
      <td>" + flight.find("airport").text() + "</td>\
      <td>" + time.toString().slice(15, 21) + "</td>\
    </tr>";
            i++;
        }
        return html;
    });
}
