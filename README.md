<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/norway-yv/gardermoen-website-it1">
    <img src="./src/images/repo-favicon.png" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">Gardermoen Website (IT1)</h1>

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
        <li><a href="#how">How Does It Work? (Technical Information)</a></li>
      </ul>
    </li>
    <li><a href="#making-copy">Making Your Own Local Copy</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<hr>

## About The Project <a id="about"></a>
This is a website built in the subject IT1 at the Norwegian Upper Secondary School. This site is in no way affiliated with Avinor or the airport Gardermoen.

### Minimum Requirements Met (in Norwegian) <a id="minimum-requirements"></a>
>Oslo Lufthavn ønsker seg også forslag til nye nettsider. De ønsker seg et nettsted som er enkelt å navigere i, og som har en tydelig helhetlig design med bilder og tekst fra livet på flyplassen. Du bestemmer selv hvor mye du vil gjøre ut av nettsidene, men som et minimum må du ha med sidene Hjem, Direkteruter, Flyselskap og Om oss. Bruk det du kan av HTML og CSS til å utforme nettstedet og til å overbevise leserne om at dette er noe de må få med seg. Temaet skal være glede, nysgjerrighet og turisme.

### What More Has Been Done? <a id="whatmore"></a>
A header and footer with language choice (saved in localstorage.language) has been added to every page. Additionally, transport.html is created to show open departure and arrival data from Bane Nor and Ruter (trains and buses in the Oslo region), and direkteruter.html has a live departure board that is syncronized with Avinor's (Norwegian airport authorities) live XML feed.

### How Does It Work? (Technical Information)  <a id="how"></a>
The src folder contains 5 HTML documents with content, a redirecting index.html file, and 3 folders:
<ul>
  <li>images - Contains all the images used on the website. This includes the logos to all the airlines mentioned on flyselskap.html (in a separate folder), as well as different illustration photos and logos/favicons.</li>
  <li>scripts - Contains all the scripts, of which all TypeScript files have compiled JavaScript files.
    <ul>
      <li>common.ts - This is all the code that is reused on the different pages, and handles among other things linking to the common stylesheet and favicons, as well as generating header and footer.</li>
      <li>hjem.ts, om.ts, transport.ts - Only handle translation of the corresponding webpage to english.</li>
      <li>flyselskap.ts - Handles both translation and main content generation. The content generation is from the object 'airlines'.</li>
      <li>direkteruter.ts - Handles main static content generation and translation just like flyselskap.ts, but also fetches data from outXML.xml to present in the #departures div.</li>
      <li>donwloadXML.ps1 and outXML.xml - A PowerShell script to download raw data from Avinor and its output file. downloadXML.ps1 needs to be run in order to ensure precise and recent data on direkteruter.html.</li>
      <li>tsconfig.json - Configuration file for the TypeScript compiler</li>
      <li>jquery.min.js - Minified jQuery.</li>
      <li>node_modules, package-lock.json, and package.json - NPM dependencies</li>
    </ul>
  </li>
  <li>stylesheets - contains all stylesheets for either common features (e.g. header and footer) or page specific features (such as departure boards, cards on hjem.html, etc.)</li>
</ul>
All the html files (except index.html) link to:
<ul>
  <li>jquery.min.js</li>
  <li>common.js</li>
  <li>common.css</li>
  <li>[page name].js</li>
  <li>[page name].css</li>
</ul>

### Built With

* TypeScript
* [![JQuery][JQuery.com]][JQuery-url]
* PowerShell
<hr>

## Making And Running Your Own Local Copy <a id="making-copy"></a>
<ol>
  <li>Donwload either the entire repository, gardermoen-website-it1-zipped.zip, or the src folder</li>
  <li>Download the "Live Preview" extension to VSCode, or in any other way host the website on localhost. This is to make sure that your browser's CORS/CORB policy does not affect the local XML file with data for direkteruter.html.</li>
  <li>In order to run the website, do the following:
    <ol>
      <li>Run downloadXML.ps1. Please keep the script running for as long as you plan to use the website, to ensure updated information on direkteruter.html.</li>
      <li>Go to whereever you hosted the website. If you use the VSCode extension "Live Preview", it will probably be on <a href='http://127.0.0.1:3000/'>127.0.0.1:3000</a>. Then navigate to any HTML file.</li>
    </ol>
  </li>
</ol>
If you want to make any changes to the scripts, do not touch the .js files but instead make the changes in the TypeScript files before running the command "tsc" in the scripts folder from the terminal. The reason for not touching the .js files is that all those changes will be reverted as soon as you compile the .ts files.
<hr>

## Roadmap

- [x] Hjem
- [x] Direkteruter
- [x] Tansport til/fra
- [x] Flyselskap
- [x] About us

See the [open issues](https://github.com/norway-yv/gardermoen-website-it1/issues) for a full list of proposed features (and known issues).
<hr>

## License
Distributed under the MIT License. See `LICENSE.txt` for more information.
<hr>

## Contact
Project Link: [https://github.com/norway-yv/gardermoen-website-it1](https://github.com/norway-yv/gardermoen-website-it1)
<hr>



<!-- MARKDOWN LINKS & IMAGES -->
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
