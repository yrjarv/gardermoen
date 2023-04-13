// Custom type, used in variable airlines
type Airline = {
  name: string,
  link: string,
  priority: boolean
}

// All airlines mentioned on the official Gardermoen website
let airlines: Airline[] = [
  {
    name: "Norwegian",
    link: "https://www.norwegian.no",
    priority: true,
  },
  {
    name: "Aegean",
    link: "https://en.aeganair.com",
    priority: false,
  },
  {
    name: "Air Baltic",
    link: "https://www.airbaltic.com",
    priority: false,
  },
  {
    name: "Air France",
    link: "https://www.airfrance.fr",
    priority: false,
  },
  {
    name: "Air Serbia",
    link: "https://www.airserbia.com",
    priority: false,
  },
  {
    name: "Atlantic Airways",
    link: "https://www.atlanticairways.com",
    priority: false,
  },
  {
    name: "Austrian",
    link: "https://www.austrian.com",
    priority: false,
  },
  {
    name: "British Airways",
    link: "https://www.britishairways.com",
    priority: false,
  },
  {
    name: "Brussels Airlines",
    link: "https://www.brusselsairlines.com",
    priority: false,
  },
  {
    name: "DAT",
    link: "https://www.dat.dk",
    priority: false,
  },
  {
    name: "Emirates",
    link: "https://www.emirates.com",
    priority: false,
  },
  {
    name: "Ethiopian",
    link: "https://www.ethiopianairlines.com",
    priority: false,
  },
  {
    name: "Eurowings",
    link: "https://www.eurowings.com",
    priority: false,
  },
  {
    name: "FinnAir",
    link: "https://www.finnair.com",
    priority: false,
  },
  {
    name: "Iberia",
    link: "https://www.iberia.com",
    priority: false,
  },
  {
    name: "IcelandAir",
    link: "https://www.icelandair.com",
    priority: false,
  },
  {
    name: "KLM",
    link: "https://www.klm.com",
    priority: false,
  },
  {
    name: "LoganAir",
    link: "https://www.loganair.com",
    priority: false,
  },
  {
    name: "LOT",
    link: "https://www.lot.com",
    priority: false,
  },
  {
    name: "Lufthansa",
    link: "https://www.lufthansa.com",
    priority: false,
  },
  {
    name: "LuxAir",
    link: "https://www.luxair.lu",
    priority: false,
  },
  {
    name: "Norse",
    link: "https://www.flynorse.com",
    priority: true,
  },
  {
    name: "Pegasus Airlines",
    link: "https://www.flypgs.com",
    priority: false,
  },
  {
    name: "Qatar Airways",
    link: "https://www.qatarairways.com",
    priority: false,
  },
  {
    name: "RyanAir",
    link: "https://www.ryanair.com",
    priority: false,
  },
  {
    name: "SAS",
    link: "https://www.sas.no",
    priority: true,
  },
  {
    name: "SunExpress",
    link: "https://www.sunexpress.com",
    priority: false,
  },
  {
    name: "Swiss",
    link: "https://www.swiss.com",
    priority: false,
  },
  {
    name: "TAP",
    link: "https://www.flytap.com",
    priority: false,
  },
  {
    name: "Turkish Airlines",
    link: "https://www.turkishairlines.com",
    priority: false,
  },
  {
    name: "Vueling",
    link: "https://www.vueling.com",
    priority: false,
  },
  {
    name: "Wideroe",
    link: "https://www.wideroe.no",
    priority: true,
  },
  {
    name: "Wizz",
    link: "https://www.wizzair.com",
    priority: false,
  },
]

/**
 * Runs on <body> onLoad in flyselskap.html.
 * Translates the content if that is necessarry.
 * Generates main content - i.e. divs for the different airlines.
 */
function mainLoadFlyselskap(): void {
  if (localStorage.language === "en") {
    $("h1").text("Airlines");
    $("h2").eq(0).text("Norwegian airlines:");
    $("h2").eq(1).text("Abroad airlines:");
    $("main > p").text("Many airlines fly to and from Gardermoen throughout the year. Here you can find a list of them, and their websites if you wish to purchase a ticket.")
  }

  $("#priorityAirlines").html(generateAirlinesDivs(airlines, true));
  $("#nonpriorityAirlines").html(generateAirlinesDivs(airlines, false));
}
/**
 * Generates the HTML for all the airline divs
 * @param airlines An array of Airline elements
 * @param priority Whether you want the divs for the prioritized airlines or not
 * @returns A string with HTML for the divs with the relevant airlines
 */
function generateAirlinesDivs(airlines: Airline[], priority: boolean): string {
  let validAirlines = []
  let returnString = ""
  for (let i = 0; i < airlines.length; i++) {
    if (airlines[i].priority === priority) {validAirlines.push(airlines[i])}
  }
  for (let i = 0; i < validAirlines.length; i++) {
    returnString += "\
    <div class='airline'>\
      <a href='"+validAirlines[i].link+"'>\
        <img src='./images/airlineLogos/" + 
        validAirlines[i].name.toLowerCase().replace(/\s+/g, '')
        +".png' alt='" + validAirlines[i].name + "'>\
        <p>"+validAirlines[i].name+"</p>\
      </a>\
    </div>"
  };
  console.log(validAirlines)
  console.log(returnString)
  return returnString;
}