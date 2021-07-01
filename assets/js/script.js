const likes = document.querySelectorAll('.like')
const icon = document.querySelector('.theme')

const body = document.querySelector('body')

const title = document.querySelectorAll('.title')
const news = document.querySelectorAll('.news')
const search = document.querySelector('input')

for (let like of likes){
  like.addEventListener('click', function() {
    if (like.classList.contains('far')){
      like.classList.remove('far')
      like.classList.add('fas')
    }else {
      like.classList.remove('fas')
      like.classList.add('far')
    }
  })
}

search.onkeyup = function() {
  let searchValue = search.value;
  for (let i = 0; i < news.length; i++) {
      let titleContain = title[i].innerText;
      let results = titleContain.toLowerCase().indexOf(searchValue) >= 0;
      news[i].style.display = results ? '' : 'none';
  }
};



icon.addEventListener('click', function() {
  if (icon.classList.contains('fa-sun')){
    icon.classList.remove('fa-sun')
    icon.classList.add('fa-moon')
    body.dataset.theme = 'dark'
  }else {
    icon.classList.remove('fa-moon')
    icon.classList.add('fa-sun')
    body.dataset.theme = 'light'
  }
})

