fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        // map over results for name, email, city and state
        let allData = data.results;

        allData.map(email => innerEmailOfCard(email.email));

        allData.map(h3Name => innerH3OfCard(`${h3Name.name.first.charAt(0).toUpperCase() + h3Name.name.first.slice(1)}`, ` ${h3Name.name.last.charAt(0).toUpperCase() + h3Name.name.first.slice(1)}`));

        allData.map(location => innerLocationOfCard(`${location.location.city}`, `, ${location.location.state}`));

        allData.map(photo => innerPictureOfCard(photo.picture.large));

        console.log(data.results);
    });

/**functions to apply inner HTML to parameter passed */
const innerEmailOfCard = (data) => emailInCard.innerHTML = data;
const innerH3OfCard = (first, last) => { h3InCard.innerHTML = `${first}` + `${last}`; };
const innerLocationOfCard = (city, state) => locationInCard.innerHTML = `${city}` + `${state}`;
const innerPictureOfCard = (picture) => cardImage.setAttribute('src', `${picture}`);
