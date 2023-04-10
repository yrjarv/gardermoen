function mainLoadTransport(): void {
  if (localStorage.language === 'en') {
    $("#buses > h1").text("Bus departures");
    $("#buses > p > a").text("See more departures (ruter.no)");
    $("#trains > h1").text("Train arrivals and departures");
    $("#trains > p > a").text("See more arrivals and departures (vy.no)")
  }
}