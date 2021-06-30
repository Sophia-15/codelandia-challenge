const likes = document.querySelectorAll('.like')

for (let like of likes)
  like.addEventListener('click', () => liked(like))

const liked = (item) => {
  if (item.classList.contains('far')){
    item.classList.remove('far')
    item.classList.add('fas')
  }else{
    item.classList.remove('fas')
    item.classList.add('far')
  }
}
