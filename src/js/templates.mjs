import { getParkData , getInfoLinks} from "./parkService.mjs";
import { getVoicePhone, getMailingAddress } from "./setHeaderFooter.mjs";

export function parkInfoTemplate(data) {
    return `
    <a href="#" class="hero-banner_title">${data.name}</a>
    <p class="hero-banner_subtitle">
        <span>${data.designation}</span>
        <span>${data.states}</span?
    </p> 
    ` ;
}

export function setParkIntro(data) {
    const introEl = document.querySelector('.intro');
    introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
    `;
}

export function mediaCardTemplate(info) {
    return `
    <div class="media-card">
        <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" class="media-card_img"/>
        <h3 class="media-card_title">${info.name}</h3>
        </a>
        <p>${info.description}</p>
    </div>
    `;
}

export function setParkFooter(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts);

    return `
    <section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}</p>
    <p>${mailing.city}, ${mailing.stateCode}, ${mailing.postalCode}"</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
    </section>
    `;
}
