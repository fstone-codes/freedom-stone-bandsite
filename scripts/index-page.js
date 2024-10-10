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


function renderComment() {
    listEl.innerHTML = '';

    commentList.forEach((commentObj) => {
        let commentWrap = document.createElement('li');
        commentWrap.classList.add('comment__item');
        
        let imgDivEl = document.createElement('div');
        imgDivEl.classList.add('comment__image-container');
    
        let imgEl = document.createElement('img');
        imgEl.classList.add('comment__image');
        
        let infoDivEl = document.createElement('div');
        infoDivEl.classList.add('comment__content-container');
    
        let nameParaEl = document.createElement('p');
        nameParaEl.classList.add('comment__name');
        nameParaEl.innerText = commentObj.userName;
        
        let dateParaEl = document.createElement('p');
        dateParaEl.classList.add('comment__date');
        dateParaEl.innerText = commentObj.commentDate;
        
        let commDivEl = document.createElement('div');
        commDivEl.classList.add('comment__content-container');
        
        let commParaEl = document.createElement('p');
        commParaEl.classList.add('comment__comment-text');
        commParaEl.innerText = commentObj.userComment;
        
        listEl.appendChild(commentWrap);
    
        commentWrap.appendChild(imgDivEl);
        commentWrap.appendChild(infoDivEl);
        commentWrap.appendChild(commDivEl);
        
        imgDivEl.appendChild(imgEl);
    
        infoDivEl.appendChild(nameParaEl);
        infoDivEl.appendChild(dateParaEl);
        
        commDivEl.appendChild(commParaEl);
    });
}

renderComment();


















// =======================================================================================================
/* 

// create function that creates a new element + provides innerText with an object key value
function createChildEl(newEl, newClass, parentEl, arrayIndex = null, objectKey = null) {
    let newElVar = document.createElement(newEl);
    newElVar.classList.add(newClass);
    if (arrayIndex !== null && objectKey !== null) {
        newElVar.innerText = commentList[arrayIndex][objectKey];
    }
    parentEl.appendChild(newElVar);

    return newElVar;
}

// create empty arrays for each element we're creating for the original commentList to show in DOM
let itemEls = [];
let divEls = [];
let imgEls = [];
let pEls = [];

// cycle through each array item to create a corresponding <li> child element
commentList.forEach((commentObject) => {
    let itemEl = createChildEl('li', 'comment__item', listEl);
    itemEls.push(itemEl);
});

console.log(itemEls);

// for each <li> element, create <div> child elements corresponding to the object keys
itemEls.forEach((listItem, i) => {
    let divEl = createChildEl('div', 'comment__content-container', itemEls[i]);
    divEls.push(divEl);
})
console.log(divEls);

// create an <img> child element to first <div>
divEls.forEach((divItem, i) => {
    let imgEl = createChildEl('img', 'comment__image', divEls[i]);
    imgEls.push(imgEl);
})

console.log(imgEls);


// create loop that iterates through array to add a corresponding element tag for each index
for (let i = 0; i < commentList.length; i++) {
    itemEl = createChildEl('li', 'comment__item', listEl);
};

// create <div> child elements to <li>
for (let i = 0; i < 3; i++) {
    divEl = createChildEl('div', 'comment__content-container', itemEl);
    
    // create an <img> child element to first <div>
    if (i === 0) {
        let imgEl = createChildEl('img', 'comment__image', divEl);

        // rename the <img> parent <div> class to match existing class in html
        divEl.classList.replace('comment__content-container', 'comment__image-container');
    }

    // // create two <p> children elements to second <div>
    // if (i === 1) {
    //     let paraEl = document.createElement('p');
    //     paraEl.classList.add('comment__name');
    //     // change the innerText to the userName key corresponding to the current commentList array index
    //     paraEl.innerText = commentList[i].userName;
    //     divEl.appendChild(paraEl);
        
    //     let paraElDate = document.createElement('p');
    //     paraElDate.classList.add('comment__date');
    //     // change the innerText to the commentDate key corresponding to the current commentList array index
    //     paraElDate.innerText = commentList[i].commentDate;
    //     divEl.appendChild(paraElDate);
    // }
    
    // // create <p> child elements to third <div>
    // if (i === 2) {
    //     let paraEl = document.createElement('p');
    //     paraEl.classList.add('comment__comment-text');
    //     // change the innerText to the userComment key corresponding to the current commentList array index
    //     paraEl.innerText = commentList[i].userComment;
    //     divEl.appendChild(paraEl);
    // }
} */
// =======================================================================================================



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

    renderComment();

    form.reset();
})

