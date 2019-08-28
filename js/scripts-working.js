fetch('https://randomuser.me/api/?results=12&nat=US')
    .then(response => response.json())
    .then(data => {
        // map over results for name, email, city and state
        let allData = data.results;

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
            mainGallery.append(galleryCards);
            console.log(data);

            /** create and append modal to DOM */

            function modalDisplay() {
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
                <p class="modal-text">${data.location.street} ${data.location.city}, ${data.location.state}, ${data.location.postcode}</p>
                <p class="modal-text">Birthday: ${data.dob.date.slice(0, 10)}</p>

                
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
        </div>
`;
                document.body.append(modalContainer);

            }
            galleryCards.addEventListener('click', () => {
                modalDisplay();
                const modalCloseBtn = document.getElementById('modal-close-btn');
                modalCloseBtn.addEventListener('click', () => {
                    const getModalContainer = document.querySelector('.modal-container');
                    getModalContainer.remove();
                });
                /** add extra functionality to navigate through elements */
                const previousButton = document.querySelector('.modal-prev');
                const nextButton = document.querySelector('.modal-next');
                previousButton.addEventListener('click', () => {
                    // const modalBox = document.querySelector('.modal-info-container');
                    console.log('previous button');
                });
                nextButton.addEventListener('click', () => {
                    console.log('next button');
                });

            });


        });

        console.log(data.results);
    });










/** create and append search form to DOM */
const searchContainer = document.querySelector('.search-container');
const searchForm = document.createElement('form');
searchForm.setAttribute('action', '#');
searchForm.setAttribute('method', 'get');
searchForm.innerHTML = `
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
`;
searchContainer.append(searchForm);


