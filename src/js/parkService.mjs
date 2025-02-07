
// const apiKey = import.meta.env.VITE_NPS_API_KEY;
const apiKey = import.meta.env.VITE_NPS_API_KEY;
const baseUrl = "https://developer.nps.gov/api/v1/";

export async function getParkData() {
  const option = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response  = await fetch(baseUrl + "parks" + "?parkCode=yell", option);

  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data.data[0];
  
}

export function getInfoLinks(data) {
  // Why index + 2 below? no real reason. we don't want index 0 since that is the one we used for the banner...I decided to skip an image.
  const withUpdatedImages = parkInfoLinks.map((item, index) => {
    item.image = data[index + 2].url;
    return item;
  });
  return withUpdatedImages;

}

export async function getAlertData() {
  const option = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + "alerts" + "?parkCode=yell", option);

  if(response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data.data;
}

export async function getVisitorCenterData(parkCode) {
  const option = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + "visitorcenters" + "?parkCode=yell", option);

  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data.data;
}

export async function getActivitiesData(parkCode) {
  const option = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + "activities?", option);

  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data.data;
}

const parkInfoLinks = [
  {
      name: "Current Conditions &#x203A;",
      link: "conditions.html",
      // images: parkData.images[2].url,
      description: "See what conditions to expect in the park before leaving on your trip!"
  },
  {
      name: "Fees and Passes &#x203A;",
      link: "fees.html",
      // images: parkData.images[3].url,
      description: "Learn about the fees and passes that are available."
  },
  {
      name: "Visitor Centers &#x203A;",
      link: "visitor_centers.html",
      // images: parkData.images[9].url,
      description: "Learn about the visitor centers in the park."
  }
];