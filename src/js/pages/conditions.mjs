import { getAlertData, getParkData , getVisitorCenterData , getActivitiesData} from "../parkService.mjs";
import { setHeaderInfo } from "../setHeaderFooter.mjs";
import { setParkFooter , alertCardTemplate , visitorCardTemplate , activitesCardTemplate} from "../templates.mjs";
// import "../css/style.css"; // we can do this type of import because we are using Vite
// import "../css/conditions.css";

function setParkAlertLinks(alerts) {
    const alertContainer = document.querySelector("#alerts");
    alerts.forEach(alertInfo => {
        alertContainer.innerHTML += alertCardTemplate(alertInfo);
    });
};

function setVisitorCentersLink(data) {
    const detailsElement = document.querySelector("#visitorServices details[name='current-details']")
    // const dataContainer = document.querySelector("#visitorServices");

    detailsElement.addEventListener("toggle", function () {
        if (detailsElement.open) {
            data.forEach(centerInfo => {
                detailsElement.innerHTML += visitorCardTemplate(centerInfo);
            })
        }
    })
}

function setActivitiesLink(data) {
    const detailsElement = document.querySelector("#activities details[name='current-details']")
    detailsElement.addEventListener("toggle", function () {
        if (detailsElement.open) {
            data.forEach(activityInfo => {
                detailsElement.innerHTML += activitesCardTemplate(activityInfo);
            })
        }
    })
}

(async function init() {
    const parkData = await getParkData();
    const alertData = await getAlertData();
    const centerData = await getVisitorCenterData();
    const activityData = await getActivitiesData();

    setHeaderInfo(parkData);
    setParkAlertLinks(alertData);
    setVisitorCentersLink(centerData);
    setActivitiesLink(activityData);

    const footer = document.querySelector('#park-footer');
    footer.innerHTML = setParkFooter(parkData);
})();