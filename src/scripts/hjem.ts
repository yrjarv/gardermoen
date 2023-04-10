function mainLoadHjem(): void {
  let translations = {
    h2: {
      0: "Go on your dream vacation - no matter how far away it is",
      1: "Choose between more than 30 different airlines",
      2: "Easy to get here - with car, bus, or train",
    },
    a: {
      0: "View our direct routes",
      1: "View the entire list",
      2: "Read more about how to get here in a greener way"
    }
  }
  if (localStorage.language === "en") {
    $(".card > h2").each(function(index) {
      $(this).text(translations.h2[index])
    });
    $(".card > a").each(function(index) {
      $(this).text(translations.a[index])
    })
  }
}