const galleryItems = document.querySelectorAll('.grid-item');
// Function to filter gallery items based on category
function filterGallery(category) {
  // Loop through all gallery items
  galleryItems.forEach(item => {
    // If the item matches the selected category or "all", display it, otherwise hide it
    if (item.classList.contains(category)) {
    item.classList.add("fade-in")
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
document.querySelectorAll('.grid-item.graphics img, .grid-item.socmedia img').forEach(image =>{
  image.onclick = () =>{
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
}

const plzenpin = document.getElementById("plzenpin")
const plzentip = document.getElementById("plzentip")

plzenpin.addEventListener("mouseover", function(){
  plzentip.setAttribute("style", "display: initial;");
});

plzenpin.addEventListener("mouseout", function(){
  plzentip.setAttribute("style", "display: none;");
});

const prahapin = document.getElementById("prahapin")
const prahatip = document.getElementById("prahatip")

prahapin.addEventListener("mouseover", function(){
  prahatip.setAttribute("style", "display: initial;");
});

prahapin.addEventListener("mouseout", function(){
  prahatip.setAttribute("style", "display: none;");
});

const brnopin = document.getElementById("brnopin")
const brnotip = document.getElementById("brnotip")

brnopin.addEventListener("mouseover", function(){
  brnotip.setAttribute("style", "display: initial;");
});

brnopin.addEventListener("mouseout", function(){
  brnotip.setAttribute("style", "display: none;");
});

const zlinpin = document.getElementById("zlinpin")
const zlintip = document.getElementById("zlintip")

zlinpin.addEventListener("mouseover", function(){
  zlintip.setAttribute("style", "display: initial;");
});

zlinpin.addEventListener("mouseout", function(){
  zlintip.setAttribute("style", "display: none;");
});