const showList = [
    {
        showDate: 'Mon Sept 09 2024',
        showVenue: 'Ronald Lane',
        showLocation: 'San Francisco, CA',
        showBtn: 'Buy Tickets'
    },
    {
        showDate: 'Tue Sept 17 2024',
        showVenue: 'Pier 3 East',
        showLocation: 'San Francisco, CA',
        showBtn: 'Buy Tickets'
    },
    {
        showDate: 'Sat Oct 12 2024',
        showVenue: 'View Lounge',
        showLocation: 'San Francisco, CA',
        showBtn: 'Buy Tickets'
    },
    {
        showDate: 'Sat Nov 16 2024',
        showVenue: 'Hyatt Agency',
        showLocation: 'San Francisco, CA',
        showBtn: 'Buy Tickets'
    },
    {
        showDate: 'Fri Nov 29 2024',
        showVenue: 'Moscow Center',
        showLocation: 'San Francisco, CA',
        showBtn: 'Buy Tickets'
    },
    {
        showDate: 'Wed Dec 18 2024',
        showVenue: 'Press Club',
        showLocation: 'San Francisco, CA',
        showBtn: 'Buy Tickets'
    }
];

// pointing to <ul> element (aka show list container)
let listEl = document.querySelector('.shows__list');

// create <div> child element to <ul>
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

    // create <h4> and <p> children elements to <li>
    for (let itemIndex = 0; itemIndex < Object.keys(showList[i]).length; itemIndex++) {
        if (!Number.isInteger((itemIndex + 1) / 2)) {
            let subtitle = document.createElement('h4');
            subtitle.classList.add('shows__subtitle');
            subtitle.innerText = subtitleNames[itemIndex];
            itemEl.appendChild(subtitle);
        } else {
            let content = document.createElement('p');
            content.classList.add('shows__subtitle');
            // content.innerText = `${showList[i][itemIndex]}`;
            itemEl.appendChild(content);
        }
    }
}
