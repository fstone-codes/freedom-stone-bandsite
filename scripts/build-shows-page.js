const showList = [
    {
        showDate: 'Mon Sept 09 2024',
        showVenue: 'Ronald Lane',
        showLocation: 'San Francisco, CA',
    },
    {
        showDate: 'Tue Sept 17 2024',
        showVenue: 'Pier 3 East',
        showLocation: 'San Francisco, CA',
    },
    {
        showDate: 'Sat Oct 12 2024',
        showVenue: 'View Lounge',
        showLocation: 'San Francisco, CA',
    },
    {
        showDate: 'Sat Nov 16 2024',
        showVenue: 'Hyatt Agency',
        showLocation: 'San Francisco, CA',
    },
    {
        showDate: 'Fri Nov 29 2024',
        showVenue: 'Moscow Center',
        showLocation: 'San Francisco, CA',
    },
    {
        showDate: 'Wed Dec 18 2024',
        showVenue: 'Press Club',
        showLocation: 'San Francisco, CA',
    }
];

// pointing to <ul> element (aka show list container)
let listEl = document.querySelector('.shows__list');

// 
let subtitleDivEl = document.createElement('div');
subtitleDivEl.classList.add('shows__subtitle-container');

let dateTitleEl = document.createElement('h4');
dateTitleEl.classList.add('shows__subtitle');
dateTitleEl.innerText = 'DATES';

let venueTitleEL = document.createElement('h4');
venueTitleEL.classList.add('shows__subtitle');
venueTitleEL.innerText = 'VENUE';

let locationTitleEL = document.createElement('h4');
locationTitleEL.classList.add('shows__subtitle');
locationTitleEL.innerText = 'LOCATION';

listEl.appendChild(subtitleDivEl);
subtitleDivEl.appendChild(dateTitleEl);
subtitleDivEl.appendChild(venueTitleEL);
subtitleDivEl.appendChild(locationTitleEL);

showList.forEach((showObj) => {
    let showWrap = document.createElement('li');
    showWrap.classList.add('shows__item');

    dateTitleEl = document.createElement('h4');
    dateTitleEl.classList.add('shows__subtitle');
    dateTitleEl.innerText = 'DATES'; 
    
    let dateParaEl = document.createElement('p');
    dateParaEl.classList.add('shows__date');
    dateParaEl.innerText = showObj.showDate; 

    venueTitleEL = document.createElement('h4');
    venueTitleEL.classList.add('shows__subtitle');
    venueTitleEL.innerText = 'VENUE';

    let venueParaEl = document.createElement('p');
    venueParaEl.classList.add('shows__date');
    venueParaEl.innerText = showObj.showVenue; 

    locationTitleEL = document.createElement('h4');
    locationTitleEL.classList.add('shows__subtitle');
    locationTitleEL.innerText = 'LOCATION';

    let locationParaEl = document.createElement('p');
    locationParaEl.classList.add('shows__date');
    locationParaEl.innerText = showObj.showLocation; 
    
    let btnDivEl = document.createElement('div');
    btnDivEl.classList.add('btn-container__btn');
    btnDivEl.innerText = 'Buy Tickets'; 

    listEl.appendChild(showWrap);
    showWrap.appendChild(dateTitleEl);
    showWrap.appendChild(dateParaEl);
    showWrap.appendChild(venueTitleEL);
    showWrap.appendChild(venueParaEl);
    showWrap.appendChild(locationTitleEL);
    showWrap.appendChild(locationParaEl);
    showWrap.appendChild(btnDivEl);
});
















/* // create <div> child element to <ul>
let divElHeader = document.createElement('div');
divElHeader.classList.add('shows__subtitle-container');
listEl.appendChild(divElHeader);

let subtitleNames = ['DATES', 'VENUE', 'LOCATION'];

// create loop that iterates through array to add a corresponding element tag for each index
for (let i = 0; i < Object.keys(showList[i]).length - 1; i++) {
    let subtitle = document.createElement('h4');
    subtitle.classList.add('shows__subtitle');
    subtitle.innerText = subtitleNames[i];
    divElHeader.appendChild(subtitle);
}

// create <li> children elements to <ul>
for (let i = 0; i < showList.length; i++) {
    let itemEl = document.createElement('li');
    itemEl.classList.add('shows__item');
    listEl.appendChild(itemEl);
} */