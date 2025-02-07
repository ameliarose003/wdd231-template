import { getParkData } from "../parkService.mjs";
import { setHeaderInfo } from "../setHeaderFooter.mjs";
import { setParkFooter } from "../templates.mjs";



(async function init() {
    const parkData = await getParkData();

    setHeaderInfo(parkData);

    const footer = document.querySelector('#park-footer');
    footer.innerHTML = setParkFooter(parkData);
})();