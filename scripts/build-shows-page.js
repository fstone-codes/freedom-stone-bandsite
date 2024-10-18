const API_KEY = "41d6b603-0b2e-403a-809e-fa896643e118";

const bandSiteApi = new BandSiteApi(API_KEY);

// ============================================================================

// pointing to <ul> element (aka show list container)
let listEl = document.querySelector(".shows__list");

// create elements for media query
let labelDivEl = document.createElement("div");
labelDivEl.classList.add("shows__label-container");

let dateTitleEl = document.createElement("h4");
dateTitleEl.classList.add("label", "label--top");
dateTitleEl.innerText = "DATES";

let venueTitleEL = document.createElement("h4");
venueTitleEL.classList.add("label", "label--top");
venueTitleEL.innerText = "VENUE";

let locationTitleEL = document.createElement("h4");
locationTitleEL.classList.add("label", "label--top");
locationTitleEL.innerText = "LOCATION";

let emptyDivEL = document.createElement("div");
emptyDivEL.classList.add("label", "label--top");

listEl.appendChild(labelDivEl);
labelDivEl.appendChild(dateTitleEl);
labelDivEl.appendChild(venueTitleEL);
labelDivEl.appendChild(locationTitleEL);
labelDivEl.appendChild(emptyDivEL);

async function renderShow() {
    try {
        const showList = await bandSiteApi.getShows();

        // create elements for each show / array object
        showList.forEach((showObj) => {
            let showWrap = document.createElement("li");
            showWrap.classList.add("shows__item");

            let dateDivEl = document.createElement("div");
            dateDivEl.classList.add("shows__content-container");

            dateTitleEl = document.createElement("h4");
            dateTitleEl.classList.add("label", "label--repeated");
            dateTitleEl.innerText = "DATES";

            let dateParaEl = document.createElement("p");
            dateParaEl.classList.add("shows__date");
            dateParaEl.innerText = convertDate(showObj.date);

            let venueDivEl = document.createElement("div");
            venueDivEl.classList.add("shows__content-container");

            venueTitleEL = document.createElement("h4");
            venueTitleEL.classList.add("label", "label--repeated");
            venueTitleEL.innerText = "VENUE";

            let venueParaEl = document.createElement("p");
            venueParaEl.classList.add("shows__venue");
            venueParaEl.innerText = showObj.place;

            let locationDivEl = document.createElement("div");
            locationDivEl.classList.add("shows__content-container");

            locationTitleEL = document.createElement("h4");
            locationTitleEL.classList.add("label", "label--repeated");
            locationTitleEL.innerText = "LOCATION";

            let locationParaEl = document.createElement("p");
            locationParaEl.classList.add("shows__location");
            locationParaEl.innerText = showObj.location;

            let btnDivEl = document.createElement("div");
            btnDivEl.classList.add("btn");
            btnDivEl.innerText = "BUY TICKETS";

            listEl.appendChild(showWrap);

            showWrap.appendChild(dateDivEl);
            showWrap.appendChild(venueDivEl);
            showWrap.appendChild(locationDivEl);
            showWrap.appendChild(btnDivEl);

            dateDivEl.appendChild(dateTitleEl);
            dateDivEl.appendChild(dateParaEl);
            venueDivEl.appendChild(venueTitleEL);
            venueDivEl.appendChild(venueParaEl);
            locationDivEl.appendChild(locationTitleEL);
            locationDivEl.appendChild(locationParaEl);
        });

        // add click event listener to show selected state in show list
        let allItems = document.querySelectorAll(".shows__item");

        allItems.forEach((item) => {
            item.addEventListener("click", (e) => {
                allItems.forEach((removalItem) => {
                    removalItem.classList.remove("shows__item--selected");
                });
                e.currentTarget.classList.add("shows__item--selected");
            });
        });
    } catch (error) {
        console.error(error);
    }
}

renderShow();

// create function to convert EPOCH datestamp into the appropriate format per mockup
function convertDate(datestamp) {
    let showDate = new Date(datestamp);
    let format = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
    formattedDate = showDate.toLocaleDateString("en-US", format).split(",").join("");

    return formattedDate;
}
