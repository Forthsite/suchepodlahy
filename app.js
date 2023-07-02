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

function toggleArticle() {
  const article = document.getElementById('read-more');
  const articlebtn = document.getElementById('articlebtn');
  
  if (article.style.display === 'flex') {
    articlebtn.innerHTML = "Číst dále";
    article.classList.remove('articlefadein');
    article.classList.add('articlefadeout');
    setTimeout(() => {
      article.style.display = 'none';
    }, 500);
  } else {
    articlebtn.innerHTML = "Skrýt";
    article.style.display = 'flex';
    article.classList.remove('articlefadeout');
    article.classList.add('articlefadein');
    
    // Scroll to the article element after a delay
    setTimeout(() => {
      article.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}

function expandblogpost(blogpostID){
  const blogpost = document.getElementById(blogpostID);
  if (blogpost.classList.contains('blogpost-text')){
    blogpost.classList.remove('blogpost-text');
    blogpost.classList.add('blogpost-text-full');
  }
  else{
    blogpost.classList.remove('blogpost-text-full');
    blogpost.classList.add('blogpost-text');yaa
  }
}