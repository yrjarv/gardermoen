while (1) {
  $WebClient = New-Object System.Net.WebClient
  $WebClient.DownloadFile("https://flydata.avinor.no/XmlFeed.asp?TimeTo=7&airport=OSL&direction=D","./src/scripts/outXML.xml")
  Write-Output "Downloaded"
  Start-Sleep 10
}