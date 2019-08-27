fetch('https://randomuser.me/api/?results=12&nat=US')
    .then(response => response.json())
    .then(data => {
        // map over results for name, email, city and state
        let allData = data.results;

        // allData.map(email => innerEmailOfCard(email.email));

        // allData.map(h3Name => innerH3OfCard(`${h3Name.name.first.charAt(0).toUpperCase() + h3Name.name.first.slice(1)}`, ` ${h3Name.name.last.charAt(0).toUpperCase() + h3Name.name.first.slice(1)}`));

        // allData.map(location => innerLocationOfCard(`${location.location.city}`, `, ${location.location.state}`));

        // allData.map(photo => innerPictureOfCard(photo.picture.large));

        allData.map(data => {
            const galleryCards = document.createElement('div');
            galleryCards.setAttribute('class', 'card');
            galleryCards.innerHTML = `
                    <div class="card-img-container">
                        <img class="card-img" src="${data.picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${data.name.first}, ${data.name.last}</h3>
                        <p class="card-text">${data.email}</p>
                        <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
                    </div>
            `;
            const mainGallery = document.getElementById('gallery');
            mainGallery.append(galleryCards);
            console.log(data);
        });
        console.log(data.results);
    });


/**functions to apply inner HTML to parameter passed
const innerEmailOfCard = (data) => emailInCard.innerHTML = data;
const innerH3OfCard = (first, last) => { h3InCard.innerHTML = `${first}` + `${last}`; };
const innerLocationOfCard = (city, state) => locationInCard.innerHTML = `${city}` + `${state}`;
const innerPictureOfCard = (picture) => cardImage.setAttribute('src', `${picture}`);
*/

const searchContainer = document.querySelector('.search-container');
const searchForm = document.createElement('form');
searchForm.setAttribute('action', '#');
searchForm.setAttribute('method', 'get');

searchForm.innerHTML = `
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
`;

searchContainer.append(searchForm);