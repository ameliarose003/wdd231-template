import {parkInfoTemplate, setParkFooter} from "./templates.mjs";
import { getParkData , getInfoLinks} from "./parkService.mjs";

export function toggleGlobalNav() {
    const menuButton = document.querySelector('#global-nav-toggle');
    // const open = document.querySelector('.global-nav_toggle--open');
    // const closed = document.querySelector('.global-nav_toggle--closed')
    
    button.addEventListener('click', (ev) => {
        let target = ev.target;

        document.querySelector(".global-nav").classList.toggle("show");

        if (target.tagName != "BUTTON") {
           target = target.closest("button");
        }

        if (document.querySelector(".global-nav").classList.contains("show")) {
            target.setAttribute("aria-expanded", true);
        } else {
            target.setAttribute("aria-expanded", false);
        }
       
        console.log("toggle");

    });
}

export function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    
    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    document.querySelector(".hero-banner_content").innerHTML = parkInfoTemplate(data);
}

export function getVoicePhone(contacts) {
    if (!contacts || !contacts.phoneNumbers) {
        console.error('contacts or phoneNumbers is missing:', contacts);
        return null;
    }

    if (!Array.isArray(contacts.phoneNumbers)) {
        console.error('phoneNumbers is not an array:', contacts.phoneNumbers);
        return null;
    }

    const voice = contacts.phoneNumbers.find((number) => number.type === "Voice");
    return voice ? voice.phoneNumber : null;
}

export function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}