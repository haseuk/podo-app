window.onload = function() {
  let header = document.querySelector('header');
  let headerH = header.offsetHeight;
  let footer = document.querySelector('footer');
  let footerH = footer.offsetHeight;
  let article = document.querySelector('article');
  let articleH = article.offsetHeight;
  let body = window.innerWidth;
  article.style.height = ((articleH + footerH)/body)*100 +'vw';
}