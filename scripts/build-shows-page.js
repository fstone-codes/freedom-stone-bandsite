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
let labelDivEl = document.createElement('div');
labelDivEl.classList.add('shows__label-container');

let dateTitleEl = document.createElement('h4');
dateTitleEl.classList.add('label', 'label--top');
dateTitleEl.innerText = 'DATES';

let venueTitleEL = document.createElement('h4');
venueTitleEL.classList.add('label', 'label--top');
venueTitleEL.innerText = 'VENUE';

let locationTitleEL = document.createElement('h4');
locationTitleEL.classList.add('label', 'label--top');
locationTitleEL.innerText = 'LOCATION';

let emptyDivEL = document.createElement('div');
emptyDivEL.classList.add('label', 'label--top');

listEl.appendChild(labelDivEl);
labelDivEl.appendChild(dateTitleEl);
labelDivEl.appendChild(venueTitleEL);
labelDivEl.appendChild(locationTitleEL);
labelDivEl.appendChild(emptyDivEL);

showList.forEach((showObj) => {
    let showWrap = document.createElement('li');
    showWrap.classList.add('shows__item');

    let dateDivEl = document.createElement('div');
    dateDivEl.classList.add('shows__content-container');
    
    dateTitleEl = document.createElement('h4');
    dateTitleEl.classList.add('label', 'label--repeated');
    dateTitleEl.innerText = 'DATES'; 
    
    let dateParaEl = document.createElement('p');
    dateParaEl.classList.add('shows__date');
    dateParaEl.innerText = showObj.showDate; 
    
    let venueDivEl = document.createElement('div');
    venueDivEl.classList.add('shows__content-container');
    
    venueTitleEL = document.createElement('h4');
    venueTitleEL.classList.add('label', 'label--repeated');
    venueTitleEL.innerText = 'VENUE';
    
    let venueParaEl = document.createElement('p');
    venueParaEl.classList.add('shows__venue');
    venueParaEl.innerText = showObj.showVenue; 

    let locationDivEl = document.createElement('div');
    locationDivEl.classList.add('shows__content-container');
    
    locationTitleEL = document.createElement('h4');
    locationTitleEL.classList.add('label', 'label--repeated');
    locationTitleEL.innerText = 'LOCATION';
    
    let locationParaEl = document.createElement('p');
    locationParaEl.classList.add('shows__location');
    locationParaEl.innerText = showObj.showLocation; 
    
    let btnDivEl = document.createElement('div');
    btnDivEl.classList.add('btn');
    btnDivEl.innerText = 'BUY TICKETS'; 
    
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

let allItems = document.querySelectorAll('.shows__item');

allItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            allItems.forEach((removalItem) => {
                removalItem.classList.remove('shows__item--selected');
            });
            e.currentTarget.classList.add('shows__item--selected');
    });
});