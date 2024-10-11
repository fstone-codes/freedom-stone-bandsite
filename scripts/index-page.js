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
        imgDivEl.classList.add('comment__image-container', 'comment__image-container--list');
    
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

