/**
 * Runs from body onLoad in all HTML documents. Starts functions to make common elements
 */
function makeCommon(): void {
  $("head").append("<link rel='stylesheet' href='./common.css' type='text/css'>");
  $("head").append("<link rel='stylesheet' href='./colours.css' type='text/css'>");
  makeHeader();
  makeFooter();
}
/**
 * Makes the header of the document
 */
function makeHeader(): void {
  $('body').prepend(
    "<header>" +
      "<img src="
      "<ul>" +
        "<li>Hjem</li>" +
        "<li>Direkteruter</li>" +
        "<li>Transport hit</li>" +
        "<li>Om oss</li>" +
      "</ul>" +
    "</header>"
  )
}
/**
 * Makes the footer of the document
 */
function makeFooter(): void {
  $("body").append(

  )
}