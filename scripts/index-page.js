const commentList = [
    {
        userName: "Victor Pinto",
        commentDate: "11/02/2023",
        userComment:
            "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        userName: "Christina Cabrera",
        commentDate: "10/28/2023",
        userComment:
            "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        userName: "Isaac Tadesse",
        commentDate: "10/20/2023",
        userComment:
            "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

// pointing to <ul> element (aka comment section container)
let listEl = document.querySelector(".comment__list");

// create function that will create elements for each post / array object
function createCommentPost(commentObj) {
    let commentWrap = document.createElement("li");
    commentWrap.classList.add("comment__item");

    let imgDivEl = document.createElement("div");
    imgDivEl.classList.add("comment__image-container", "comment__image-container--list");

    // use if image content is provided
    // let imgEl = document.createElement("img");
    // imgEl.classList.add("comment__image");

    let infoDivEl = document.createElement("div");
    infoDivEl.classList.add("comment__content-container");

    let nameParaEl = document.createElement("p");
    nameParaEl.classList.add("comment__name");
    nameParaEl.innerText = commentObj.userName;

    let dateParaEl = document.createElement("p");
    dateParaEl.classList.add("comment__date");
    dateParaEl.innerText = commentObj.commentDate;

    let commDivEl = document.createElement("div");
    commDivEl.classList.add("comment__content-container");

    let commParaEl = document.createElement("p");
    commParaEl.classList.add("comment__comment-text");
    commParaEl.innerText = commentObj.userComment;

    listEl.appendChild(commentWrap);

    commentWrap.appendChild(imgDivEl);
    commentWrap.appendChild(infoDivEl);
    commentWrap.appendChild(commDivEl);

    // use if image content is provided
    // imgDivEl.appendChild(imgEl);

    infoDivEl.appendChild(nameParaEl);
    infoDivEl.appendChild(dateParaEl);

    commDivEl.appendChild(commParaEl);
}

// create function that will render the comment posts for each array object
function renderComment() {
    // clear the children elements within <ul> to avoid duplication
    listEl.replaceChildren();

    commentList.forEach((commentItem) => {
        createCommentPost(commentItem);
    });
}

// invoke the function to ensure existing comments are initially rendered
renderComment();

// pointing to <form> element
let form = document.querySelector(".form");

// add event submit event listener for the <form> element
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valueUserName = e.target.userName.value;
    let valueUserComment = e.target.userComment.value;

    let submissionDate = new Date();
    let formattedDate = submissionDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    // validate form submission by checking for empty strings
    let allErrors = document.querySelectorAll(".error");
    let nameError = allErrors[0];
    let commentError = allErrors[1];

    nameError.innerHTML = "";
    commentError.innerHTML = "";

    nameError.classList.remove("error--active");
    commentError.classList.remove("error--active");

    errors = [];

    // notify users of invalid inputs
    if (valueUserName === "") {
        errors.push("Please enter a valid name");
    }

    if (valueUserComment === "") {
        errors.push("Please enter a valid comment");
    }

    if (errors.length === 2) {
        if (errors[0]) {
            nameError.innerHTML = errors[0];
            nameError.classList.add("error--active");
        }
        if (errors[1]) {
            commentError.innerHTML = errors[1];
            commentError.classList.add("error--active");
        }
        return;
    } else if (errors.length === 1) {
        if (valueUserName === "") {
            nameError.innerHTML = errors[0];
            nameError.classList.add("error--active");
        } else {
            commentError.innerHTML = errors[0];
            commentError.classList.add("error--active");
        }
        return;
    } else {
        // add the new comment post to the beginning of the array of object (i.e. index 0)
        commentList.unshift({
            userName: valueUserName,
            userComment: valueUserComment,
            commentDate: formattedDate,
        });

        // invoke the render function again to display the newly submitted comment
        renderComment();

        // clear the input fields to signal a complete submission
        form.reset();
    }
});
