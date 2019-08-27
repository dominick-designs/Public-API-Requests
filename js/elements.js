let imageFromAPI = "https://dominickdesigns.space/images_dominick_designs_websites/images_optim/logo/d-designs-logo.svg"

/**create and append search form to DOM */
const searchForm = document.createElement('form');
searchForm.setAttribute('action', '#');
searchForm.setAttribute('method', 'get');

const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'search');
searchInput.setAttribute('id', 'search-input');
searchInput.setAttribute('class', 'search-input');
searchInput.setAttribute('placeholder', 'Search...');

const searchButton = document.createElement('input');
searchButton.setAttribute('type', 'submit');
searchButton.setAttribute('value', "\uD83D\uDD0D");
searchButton.setAttribute('id', 'search-input');
searchButton.setAttribute('class', 'search-submit');

searchForm.append(searchInput);
searchForm.append(searchButton);

const searchContainer = document.querySelector('.search-container');
searchContainer.append(searchForm);


/** create and append gallery elements to DOM */
const cardDiv = document.createElement('div');
cardDiv.setAttribute('class', 'card');

const cardImgContain = document.createElement('div');
cardImgContain.setAttribute('class', 'card-img-container');

const cardImage = document.createElement('img');
cardImage.setAttribute('class', 'card-img');
cardImage.setAttribute('alt', 'profile picture');


const cardInfoContain = document.createElement('div');
cardInfoContain.setAttribute('class', 'card-info-container');

const h3InCard = document.createElement('h3');
h3InCard.setAttribute('id', 'name');
h3InCard.setAttribute('class', 'card-name');

const emailInCard = document.createElement('p');
emailInCard.setAttribute('class', 'card-text');

const locationInCard = document.createElement('p');
locationInCard.setAttribute('class', 'card-text cap');

cardInfoContain.append(h3InCard);
cardInfoContain.append(emailInCard);
cardInfoContain.append(locationInCard);
cardImgContain.append(cardImage);
cardDiv.append(cardImgContain);
cardDiv.append(cardInfoContain);

const gallery = document.getElementById('gallery');
gallery.append(cardDiv);

/** create and append modal 
 * <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>
 * 
*/
const modalContain = document.createElement('div');
modalContain.setAttribute('class', 'modal-container');

const modal = document.createElement('div');
modal.setAttribute('class', 'modal');

const modalButton = document.createElement('button');
modalButton.setAttribute('type', 'button');
modalButton.setAttribute('id', 'modal-close-btn');
modalButton.setAttribute('class', 'modal-close-btn');
modalButton.innerHTML = `<strong>X</strong>`;

const modalInfoContain = document.createElement('div');
modalInfoContain.setAttribute('class', 'modal-info-container');

const modalImg = document.createElement('img');
modalImg.setAttribute('class', 'modal-img');
modalImg.setAttribute('alt', 'profile picture');
