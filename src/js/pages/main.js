import { getParkData , getInfoLinks} from "../parkService.mjs";
import { setHeaderInfo , toggleGlobalNav } from "../setHeaderFooter.mjs";
import { parkInfoTemplate , setParkIntro , mediaCardTemplate , setParkFooter } from "../templates.mjs";


// function setHeaderInfo(data) {
//     const disclaimer = document.querySelector(".disclaimer > a");
//     disclaimer.href = data.url;
//     disclaimer.innerHTML = data.fullName;
    
//     document.querySelector("head > title").textContent = data.fullName;
//     document.querySelector(".hero-banner > img").src = data.images[0].url;
//     document.querySelector(".hero-banner_content").innerHTML = parkInfoTemplate(data);
// }
// console.log(setHeaderInfo(parkData));

// function parkInfoTemplate(data) {
//     return `
//     <a href="#" class="hero-banner_title">${data.name}</a>
//     <p class="hero-banner_subtitle">
//         <span>${data.designation}</span>
//         <span>${data.states}</span?
//     </p> 
//     ` ;
// }
// console.log(parkInfoTemplate(parkData))

// Code for the INTRO DATA adding it to the html

// function setParkIntro(data) {
//     const introEl = document.querySelector('.intro');
//     introEl.innerHTML = `
//     <h1>${data.fullName}</h1>
//     <p>${data.description}</p>
//     `;
// }
// console.log(setParkIntro(parkData))

// Code for INFO DATA adding it to the html

// function mediaCardTemplate(info) {
//     return `
//     <div class="media-card">
//         <a href="${info.link}">
//         <img src="${info.image}" alt="${info.name}" class="media-card_img"/>
//         <h3 class="media-card_title">${info.name}</h3>
//         </a>
//         <p>${info.description}</p>
//     </div>
//     `;
// }



// Code for the footer to insert the info there from javscript to html
// const addresses = parkData.addresses

// function getMailingAddress(addresses) {
//     const mailing = addresses.find((address) => address.type === "Mailing");
//     return mailing;
// }
// console.log(getMailingAddress(addresses))

// const contacts = parkData.contacts;

// This functin need to be used in set footer
// function getVoicePhone(contacts) {
//     if (!contacts || !contacts.phoneNumbers) {
//         console.error('contacts or phoneNumbers is missing:', contacts);
//         return null;
//     }

//     if (!Array.isArray(contacts.phoneNumbers)) {
//         console.error('phoneNumbers is not an array:', contacts.phoneNumbers);
//         return null;
//     }

//     const voice = contacts.phoneNumbers.find((number) => number.type === "Voice");
//     return voice ? voice.phoneNumber : null;
// }




// function setParkFooter(info) {
//     const mailing = getMailingAddress(info.addresses);
//     const voice = getVoicePhone(info.contacts);

//     return `
//     <section class="contact">
//     <h3>Contact Info</h3>
//     <h4>Mailing Address:</h4>
//     <div><p>${mailing.line1}</p>
//     <p>${mailing.city}, ${mailing.stateCode}, ${mailing.postalCode}"</p></div>
//     <h4>Phone:</h4>
//     <p>${voice}</p>
//     </section>
//     `;
// }

// Call the functions so they actually work!
function setParkInfoLinks(links) {
    const infoContainer = document.querySelector('.info');
    links.forEach(parkInfo => {
        infoContainer.innerHTML += mediaCardTemplate(parkInfo);
    });
};

async function init() {
    const parkData = await getParkData();
    toggleGlobalNav();
    setHeaderInfo(parkData);
    setParkIntro(parkData);
    const links = getInfoLinks(parkData.images);
    setParkInfoLinks(links);

    const footer = document.querySelector('#park-footer');
    footer.innerHTML = setParkFooter(parkData);
}

init();