  // Function that returns a Promise to fetch dogs
  function fetchDogs() {
    return new Promise((resolve, reject) => {
      fetch('dogs.json')
        .then(response => {
          if (!response.ok) {
            reject('Failed to load dog data');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // Once the page loads
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.dogs-container');

    // Call the function
    fetchDogs()
      .then(dogs => {
        // Clear any hardcoded HTML
        container.innerHTML = '';

        // Loop through dogs and create cards
        dogs.forEach(dog => {
          const card = document.createElement('div');
          card.classList.add('dog-card');

          card.innerHTML = `
            <img src="${dog.image}" alt="${dog.name}">
            <h3>${dog.name}</h3>
            <p>${dog.age}, ${dog.desc}</p>
          `;

          container.appendChild(card);
        });
      })
      .catch(err => {
        console.error(err);
        container.innerHTML = '<p>Unable to load dogs right now.</p>';
      });
});


