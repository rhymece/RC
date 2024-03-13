let fullName = "Rhym E. Cagbay";
let imgGrifols = 'Portfolio/images/Grifols.png';
let imgBoomarang = 'Portfolio/images/Boomarang.png';
let imgTangent = 'Portfolio/images/Tangent.png';
let imgTexasInstruments = 'Portfolio/images/TexasInstruments.png'; 
let imgByu = 'Portfolio/images/BYU.png';
let imgCpu = 'Portfolio/images/CPU.png';
let imageElement = document.querySelectorAll(".timeline-image");
let copyRightYear = document.querySelector("#year");
let authorName = document.querySelector("#author");



copyRightYear.innerHTML = 2024;

imageElement[0].setAttribute("src", imgGrifols);
imageElement[0].setAttribute("alt", "Grifols Logo image");

imageElement[1].setAttribute("src", imgBoomarang);
imageElement[1].setAttribute("alt", "Boomarang Bistro and Bar logo image");

imageElement[2].setAttribute('src', imgTangent);
imageElement[2].setAttribute('alt', 'Tangent Solutions Inc image logo');

imageElement[3].setAttribute('src', imgTexasInstruments);
imageElement[3].setAttribute('alt', 'Texas Instruments logo image');

imageElement[4].setAttribute('src', imgByu);
imageElement[4].setAttribute('alt', 'BYU image');

imageElement[5].setAttribute('src', imgCpu);
imageElement[5].setAttribute('alt', 'Central Philippine University image');

authorName.textContent = "Rhym E. Cagbay";







