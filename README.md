<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/norway-yv/gardermoen-website-it1">
    <img src="./src/images/repo-favicon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Gardermoen Website (IT1)</h3>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#minimum-requirements">Minimum Requirements Met (in Norwegian)</a></li>
        <li><a href="#whatmore">What More Has Been Done?</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#making-copy">Making Your Own Local Copy</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project <a id="about"></a>
This is a website built in the subject IT1 at the Norwegian Upper Secondary School. This site is in no way affiliated with Avinor or the airport Gardermoen.

### Minimum Requirements Met (in Norwegian) <a id="minimum-requirements"></a>
>Oslo Lufthavn ønsker seg også forslag til nye nettsider. De ønsker seg et nettsted som er enkelt å navigere i, og som har en tydelig helhetlig design med bilder og tekst fra livet på flyplassen. Du bestemmer selv hvor mye du vil gjøre ut av nettsidene, men som et minimum må du ha med sidene Hjem, Direkteruter, Flyselskap og Om oss. Bruk det du kan av HTML og CSS til å utforme nettstedet og til å overbevise leserne om at dette er noe de må få med seg. Temaet skal være glede, nysgjerrighet og turisme.
### What More Has Been Done? <a id="whatmore"></a>
The "Direkteruter" (direct routes) page has been connected to the XML service provided by Avinor (the Norwegian airport authority).\
All webpages have the same header, where you can choose the language - Norwegian or English. This is saved using a cookie.

### Built With

* TypeScript
* [![JQuery][JQuery.com]][JQuery-url]
* PowerShell


<!-- GETTING STARTED -->
## Making Your Own Local Copy <a id="making-copy"></a>
In order to run the website, you have two options: 1) Open the file using the file:/// protocol in your browser or 2) run a server (e.g. using VScode's "live preview") and open the site from there. The best option if you want to have a live departure board on direkteruter.html is to run a server locally, as any attempts to fetch the raw data file from the file:/// protocol causes a CORS error. I also recommend that you make sure to run the ./src/scripts/downloadXML.ps1 file - once again as long as you plan to open direkteruter.html. This is to make sure that the content on direkteruter.html is properly syncronized with Avinor's open data, something you cannot do directly from the browser (thanks a lot, CORS).<br>
If you want to make changes, you need to have the Typescript compiler installed. When you have made your edits, enter the "src/scripts" folder and write the following into the terminal:
<ol>
  <li>npm install typescript</li>
  <li>tsc</li>
</ol>
This will compile all the .ts files to .js files, all of which are linked to in their respective HTML files.

<!-- ROADMAP -->
## Roadmap

- [x] Hjem
- [ ] Direkteruter
- [x] Tansport til/fra
- [x] Flyselskap
- [x] About us]

See the [open issues](https://github.com/norway-yv/gardermoen-website-it1/issues) for a full list of proposed features (and known issues).



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact
Project Link: [https://github.com/norway-yv/gardermoen-website-it1](https://github.com/norway-yv/gardermoen-website-it1)



<!-- MARKDOWN LINKS & IMAGES -->
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
