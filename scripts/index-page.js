const API_KEY = "41d6b603-0b2e-403a-809e-fa896643e118";

const bandSiteApi = new BandSiteApi(API_KEY);

// ============================================================================

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
    nameParaEl.innerText = commentObj.name;

    let dateParaEl = document.createElement("p");
    dateParaEl.classList.add("comment__date");
    dateParaEl.innerText = convertTime(commentObj.timestamp);

    let commDivEl = document.createElement("div");
    commDivEl.classList.add("comment__content-container");

    let commParaEl = document.createElement("p");
    commParaEl.classList.add("comment__comment-text");
    commParaEl.innerText = commentObj.comment;

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

// create function to convert EPOCH timestamp into a dynamic, more human-readable timestamp
function convertTime(timestamp) {
    let timeDiff = Date.now() - timestamp;
    let calculatedDiff;
    let formattedDate;

    if (timeDiff < 60000) {
        calculatedDiff = Math.floor(timeDiff / 1000);
        if (calculatedDiff === 1) {
            formattedDate = `${calculatedDiff} second ago`;
        } else {
            formattedDate = `${calculatedDiff} seconds ago`;
        }
    } else if (timeDiff >= 60000 && timeDiff < 3600000) {
        calculatedDiff = Math.floor(timeDiff / 60000);
        if (calculatedDiff === 1) {
            formattedDate = `${calculatedDiff} minute ago`;
        } else {
            formattedDate = `${calculatedDiff} minutes ago`;
        }
    } else if (timeDiff >= 3600000 && timeDiff < 86400000) {
        calculatedDiff = Math.floor(timeDiff / 3600000);
        if (calculatedDiff === 1) {
            formattedDate = `${calculatedDiff} hour ago`;
        } else {
            formattedDate = `${calculatedDiff} hours ago`;
        }
    } else if (timeDiff >= 86400000 && timeDiff < 604800000) {
        calculatedDiff = Math.floor(timeDiff / 86400000);
        if (calculatedDiff === 1) {
            formattedDate = `${calculatedDiff} day ago`;
        } else {
            formattedDate = `${calculatedDiff} days ago`;
        }
    } else {
        let submissionDate = new Date(timestamp);
        formattedDate = submissionDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    }
    return formattedDate;
}

// ============================================================================

// create async function that will render the comment posts for each array object
async function renderComment() {
    try {
        let commentData = await bandSiteApi.getComments();

        commentData.forEach((commentItem) => {
            createCommentPost(commentItem);
        });
    } catch (error) {
        console.error(error);
    }
}

// invoke the function to ensure existing comments are initially rendered
renderComment();

// create async function that will post a comment, adding it to the comment array of objects
async function addComment(newCommentObj) {
    try {
        await bandSiteApi.postComment(newCommentObj);

        listEl.replaceChildren();

        renderComment();
    } catch (error) {
        console.error(error);
    }
}

// ============================================================================

// pointing to <form> element
let form = document.querySelector(".form");

// add event submit event listener for the <form> element
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valueUserName = e.target.userName.value;
    let valueUserComment = e.target.userComment.value;

    // store the form values into an object
    let submissionComment = {
        name: valueUserName,
        comment: valueUserComment,
    };

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
    if (!valueUserName) {
        errors.push("Please enter a valid name");
    }

    if (!valueUserComment) {
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
        // invoke function to post form contents once submission is valid
        addComment(submissionComment);

        // clear the input fields to signal a complete submission
        form.reset();
    }
});
