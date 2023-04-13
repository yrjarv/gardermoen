/**
 * Runs from <body> onLoad in om.html.
 * Adds different background colour to the cards, then translates the page to English if necessary.
 */
function mainLoadOm(): void {
  $(".card").each(function(i) {
    $(this).attr(
      "style", "background-color: "+["grey", "darkgrey", "silver", "gainsboro"][i]
      )
  });
  if (localStorage.language === "en") {
    let translations = {
      p: {
        0: "Oslo Airport (IATA: OSL, ICAO: ENGM) is an international airport at Gardermoen between Nannestad and Ullensaker muncipalities in Viken, 40 km north from Oslo. The airport is Norway's largest, and the main airport in Norway.",
        1: "The airport was opened on the 8th of October 1998, when the former main airport, Fornebu, was closed. It is the country's most important hub for international transport to and from Norway. In 2019, 28.5 million passengers used Oslo Airport.<br>\
        Norwegian, SAS, and Widerøe have bases at Oslo Airport. Alongside several other airlines, these three companies offer about 30 domestic flight routes and 130 international flight routes. The airport's connections mainly includes European destinations, but there are also direct routes to some Asian, African, and North American destinations.<br>\
        The terminal building was expanded in 2017 to increase capacity. It has received a new pier, 21 new stores, 37 new restaurants, and several bars. The expansion was officially opened the 27th of April 2017. The builing became approximatly twice its previous size and the capacity is increased to 32 million travellers per year.<br>\
        In 2022, the newest expansion of Oslo Airport, non-schengen East, opened, and thereby increased the total capacity with 30 000 square meters and 2 million passengers.<br>\
        The capacity at Oslo Airport is in 2022 at about 34 million passengers per year.",
        2: "We have permanent direct connections to more than 160 destinations. Additionally, there are several charter destinetions, depending on the season. The domestic network is dominated by Norwegian and SAS, who mainly fly commercially on the network of larger airports. In addition, Widerøe operates tenders on contract witht the Department of Transport.<br>\
        The international network is focused around European destinations. SAS, Norwegian, and numerous other major European network airlines fly frequently between us and the Nordic capitals, as well as the major cities in Europe. Additionally, direct routes are available to several destinations in the mediterranean area, however with lower frequency and more variations in the summer.<br>\
        On towards 2020 we had a relatively large increase in the number of long-distance routes. This growth was primarily driven by Norwegian's effort to provide longer routes. However, when the Corona virus pandemic came to Norway in March the same year, Norwegian had to shut down their Long Haul routes shortly after.<br>\
        Airlines such as Qatar Airways and Emirates did however also contribute to the increase in long distance routes. In the spring of 2019 Hainan Airlines opened a direct route between Oslo and Beijing. In 2019, there were also several charter flights provided by different travel companies. Among these were Ving, Apollo, and TUI. In the summer months, destinations around the Mediterranean ocean well represented until 2020 (especially holiday destinations in Spain, Greece, and Turkey), while there in the winter was provided direct flights to more intercontinental destinations, such as Cupa, Gambia, the Canary Islands, Cape Verde, Mexico, and Thailand.",
        3: "You can contact us via <a href='https://tilbakemelding.avinor.no/'>this link</a>, or using the telephone number <a href='tlf:004767030000'>+47 67 03 00 00</a>.",
        4: "<b>Main office:</b><br>\
        Oslo Atrium<br>\
        Dronning Eufemias gate 6A<br>\
        NO-0191 Oslo"
      },
      h2: {
        0: "Our history",
        1: "Destinations",
        2: "Contact us",
      }
    };
    $("h1").text("About us");
    $("p").each(function(i): void {
      $(this).html(translations.p[i])
    })
    $("h2").each(function(i): void {
      $(this).html(translations.h2[i])
    })
  }
}