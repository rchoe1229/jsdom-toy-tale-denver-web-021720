let addToy = false;
const indexUrl = 'http://localhost:3000/toys'


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch(indexUrl)
  .then(res => res.json())
  .then(toys => renderToys(toys))

const renderToys = (toys) => {
  toys.forEach(toy => {
    const toyCollection = document.querySelector('#toy-collection')

    const toyCard = document.createElement('div')
      toyCard.className = 'card'

    const cardTitle = document.createElement('h2')
      cardTitle.innerText = toy.name

    const cardImage = document.createElement('img')
      cardImage.className = 'toy-avatar'
      cardImage.src = toy.image

    const cardLikes = document.createElement('p')
      cardLikes.innerText = `${toy.likes} likes`

    const likeButton = document.createElement('button')
      likeButton.className = 'like-btn'
      likeButton.textContent = 'Like <3'

      toyCard.append(cardTitle, cardImage, cardLikes)
      toyCollection.append(toyCard)
    })


    
}