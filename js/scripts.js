fetch('https://randomuser.me/api/?results=12&nat=US')
    .then(checkStatus)
    .then(response => response.json())
    .then(data => {
        let allData = data.results;
        displayCards(allData);
        return allData;
    })
    .catch(err => (Error('There seems to be problem ', err)));


async function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function displayCards(allData) {
    // map over results for name, email, city and state
    allData.map(data => {
        const galleryCards = document.createElement('div');
        galleryCards.setAttribute('class', 'card');
        galleryCards.innerHTML = `
                    <div class="card-img-container">
                        <img class="card-img" src="${data.picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${data.name.first.charAt(0).toUpperCase() + data.name.first.slice(1)}, ${data.name.last}</h3>
                        <p class="card-text">${data.email}</p>
                        <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
                    </div>
            `;
        const mainGallery = document.getElementById('gallery');
        // append cards to DOM        
        mainGallery.append(galleryCards);


        /** create and append modal to DOM */
        function modalDisplay(next) {
            const modalContainer = document.createElement('div');
            modalContainer.setAttribute('class', 'modal-container');

            modalContainer.innerHTML = `
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data.picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data.name.first}</h3>
                <p class="modal-text">${data.email}</p>
                <p class="modal-text cap">${data.location.city}</p>
                <hr>
                <p class="modal-text">${data.phone}</p>
                <p class="modal-text cap">${data.location.street}, ${data.location.city}, ${data.location.state}, ${data.location.postcode}</p>
                <p class="modal-text">Birthday: ${new Date(data.dob.date).toLocaleDateString('en-US')}</p>

                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>

        </div>
`;
            document.body.append(modalContainer);
        }

        //event handlers for modal display, closing and nav//
        galleryCards.addEventListener('click', () => {
            modalDisplay();
            const modalCloseBtn = document.getElementById('modal-close-btn');
            modalCloseBtn.addEventListener('click', () => {
                const getModalContainer = document.querySelector('.modal-container');
                getModalContainer.remove();
            });

            /** declare variables to add extra functionality to navigate through elements */
            const previousButton = document.querySelector('.modal-prev');
            const nextButton = document.querySelector('.modal-next');
            // listen on prev button
            previousButton.addEventListener('click', () => {
                const siblingOfGalleryCard = galleryCards.previousSibling;
                const getModalContainer = document.querySelector('.modal-container');
                // remove current modal-container and click on previous div sibling
                getModalContainer.remove();
                siblingOfGalleryCard.click();
            });
            // listen on next button
            nextButton.addEventListener('click', () => {
                const siblingOfGalleryCard = galleryCards.nextSibling;
                const getModalContainer = document.querySelector('.modal-container');
                // remove current modal-container and click on next div sibling
                getModalContainer.remove();
                siblingOfGalleryCard.click();
                if (siblingOfGalleryCard === null) {
                    console.log('it null');
                }
            });
        }); // end galleryCards event listener
    }); // end allData.map function
} // end displayCards function

/** create and append search form to DOM */
const searchContainer = document.querySelector('.search-container');
// add html markup to DOM in one chunk
const form = `
        <form action="#" method="get">
               <input type="search" id="search-input" class="search-input" placeholder="Search...">
                <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
       </form>
`;
searchContainer.innerHTML = form;
const tagForm = document.querySelector('form');

// listen to event on the search form
tagForm.addEventListener('submit', (e) => {
    // declare variables for search input and cards
    const searchFormInput = document.getElementById('search-input');
    const searchValue = searchFormInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    // for each element in cards array
    [...cards].forEach((card, index, array) => {
        // "if...else" statement adapted from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list
        if (card.textContent.indexOf(searchValue) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});



