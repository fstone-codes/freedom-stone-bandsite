const commentList = [
    {
        userName: 'Victor Pinto',
        commentDate: '11/02/2023',
        userComment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        userName: 'Christina Cabrera',
        commentDate: '10/28/2023',
        userComment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        userName: 'Isaac Tadesse',
        commentDate: '10/20/2023',
        userComment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

// pointing to <ul> element (aka comment section container)
let listEl = document.querySelector('.comment__list');


// create loop that iterates through array to add a corresponding element tag for each index
for (let i = 0; i < commentList.length; i++) {
    // create element
    let itemEl = document.createElement('li');
    // add class to element
    itemEl.classList.add('comment__item');
    // add new element to parent
    listEl.appendChild(itemEl);
    
    // create <div> child elements to <li>
    for (let divIndex = 0; divIndex < commentList.length; divIndex++) {
        let divEl = document.createElement('div');
        divEl.classList.add('comment__content-container');
        itemEl.appendChild(divEl);
        
        // create an <img> child element to first <div>
        if (divIndex === 0) {
            let imgEl = document.createElement('img');
            imgEl.classList.add('comment__image');
            divEl.appendChild(imgEl);

            // rename the <img> parent <div> class to match existing class in html
            divEl.classList.replace('comment__content-container', 'comment__image-container');
        }

        // create two <p> children elements to second <div>
        if (divIndex === 1) {
            let paraEl = document.createElement('p');
            paraEl.classList.add('comment__name');
            // change the innerText to the userName key corresponding to the current commentList array index
            paraEl.innerText = commentList[i].userName;
            divEl.appendChild(paraEl);
            
            let paraElDate = document.createElement('p');
            paraElDate.classList.add('comment__date');
            // change the innerText to the commentDate key corresponding to the current commentList array index
            paraElDate.innerText = commentList[i].commentDate;
            divEl.appendChild(paraElDate);
        }
        
        // create <p> child elements to third <div>
        if (divIndex === 2) {
            let paraEl = document.createElement('p');
            paraEl.classList.add('comment__comment-text');
            // change the innerText to the userComment key corresponding to the current commentList array index
            paraEl.innerText = commentList[i].userComment;
            divEl.appendChild(paraEl)
        }
    }
}

// pointing to <form> element
let form = document.querySelector('.form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valueUserName = e.target.userName.value;
    let valueUserComment = e.target.userComment.value;

    let submissionDate = new Date();
    let formattedDate = submissionDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })

    commentList.unshift({
        userName: valueUserName,
        userComment: valueUserComment,
        commentDate: formattedDate
    });

    // if ((formUserName || formUserComment) === '') {

    // } else {

    // }

    form.reset();
})