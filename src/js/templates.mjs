import { getAlertData, getParkData , getInfoLinks} from "./parkService.mjs";
import { getVoicePhone, getMailingAddress } from "./setHeaderFooter.mjs";
import spritePath from '../images/sprite.symbol.svg';


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

export function alertCardTemplate(alert) {
    let alertType = "";
    switch (alert.category) {
        case "Park Closure":
            alertType = "closure";
            break;
        default:
            alertType = alert.category.toLowerCase();
    }
    return `<li class="alert">
    <svg class="icon" role="presentation" focusable="false">
        <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="${spritePath}#alert-${alertType}"
        ></use>
    </svg>
    <div>
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
    </div></li>
    `;
}

export function visitorCardTemplate(data) {
    return `
    <div class="visitorCenters">
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <p>${data.directionsInfo}</p>
    </div>
    `
}

export function activitesCardTemplate(data) {
    return `
    <ul>
        <li>${data.name}</li>
    </ul>
    `
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
