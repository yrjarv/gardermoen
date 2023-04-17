/**
 * Runs from <body> onLoad in all the HTML documents. Starts functions to make common elements
 */
function makeCommon(): void {
  if(!localStorage.language) {localStorage.language = "no"} // Default language is Norwegian

  $("head").append("<link rel='stylesheet' href='./stylesheets/common.css' type='text/css'>");
  $("head").append("<link rel='stylesheet' href='./stylesheets/colours.css' type='text/css'>");
  $("head").append("<link rel='icon' href='./images/favicon.ico' type='icon'>");
  makeHeader();
  makeFooter();
}
/**
 * Makes the header of the document
 */
function makeHeader(): void {
  if (localStorage.language === "no") { // Norwegian version
    $("header").html(
      "<a href='./hjem.html'><img src='./images/gardermoen-logo.png' alt='Logo' id='logo'></a>\
      <ul>\
        <li><a href='./hjem.html'>Hjem</a></li>\
        <li><a href='./direkteruter.html'>Direkteruter</a></li>\
        <li><a href='./transport.html'>Transport til/fra</a></li>\
        <li><a href='./flyselskap.html'>Flyselskap</a></li>\
        <li><a href='./om.html'>Om oss</a></li>\
      </ul>\
      <div id='langugages'>\
        <img src='./images/flag-norway.png' alt='Norsk' id='flagNorway'>\
        <img src='./images/flag-english.png' alt='English' id='flagEnglish'>\
      </div>"
    )
  }
  else if (localStorage.language === "en") { //English version
    $("header").html(
      "<a href='./hjem.html'><img src='./images/gardermoen-logo.png' alt='Logo' id='logo'></a>\
      <ul>\
        <li><a href='./hjem.html'>Home</a></li>\
        <li><a href='./direkteruter.html'>Direct routes</a></li>\
        <li><a href='./transport.html'>Transport to/from</a></li>\
        <li><a href='./flyselskap.html'>Airlines</a></li>\
        <li><a href='./om.html'>About us</a></li>\
      </ul>\
      <div id='langugages'>\
        <img src='./images/flag-norway.png' alt='Norsk' id='flagNorway'>\
        <img src='./images/flag-english.png' alt='English' id='flagEnglish'>\
      </div>"
    )
  }

  // Makes language selection flags in header clickable
  $("#flagNorway") .on("click", function()  {localStorage.language = "no"; window.location.reload()})
  $("#flagEnglish").on("click", function() {localStorage.language = "en"; window.location.reload()})
}
/**
 * Makes the footer of the document
 */
function makeFooter(): void {
  if (localStorage.language === "no") { // Norwegian version
    $("footer").html(
      "<div id='left'>\
        <img src='./images/gardermoen-logo.png' alt='Logo'>\
        <h3>Bes&oslashksadresse:</h3>\
        <p>Edvard Munchs Veg<br>2061 Gardermoen</p>\
      </div>\
      <div id='middle'>\
        <h2>Kontakt oss</h2>\
        <p><a href='https://tilbakemelding.avinor.no/'>Gi oss din tilbakemelding eller still et sp&oslashrsm&aringl</a></p>\
        <p>Telefon: <a href='tlf:67030000'>67 03 00 00</a></p>\
      </div>\
      <div id='right'>\
        <iframe src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Edvard%20Munchs%20veg%20Gardermoen+(Oslo%20Lufthavn)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>\
      <div>"
    )
  }
  else if (localStorage.language === "en") { // English version
    $("footer").html(
      "<div id='left'>\
        <img src='./images/gardermoen-logo.png' alt='Logo'>\
        <h3>Visiting address:</h3>\
        <p>Edvard Munchs Veg<br>2061 Gardermoen</p>\
      </div>\
      <div id='middle'>\
        <h2>Contact us</h2>\
        <p><a href='https://tilbakemelding.avinor.no/'>Give us your feedback or ask us a question</a></p>\
        <p>Phone: <a href='tlf:67030000'>67 03 00 00</a></p>\
      </div>\
      <div id='right'>\
        <iframe src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Edvard%20Munchs%20veg%20Gardermoen+(Oslo%20Lufthavn)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>\
      <div>"
    )
  }
}