// 載入畫面
const content = document.querySelector('.content');
const pacman = document.querySelector('.la-pacman');
function loding() {
  content.style = "display: none;";
  pacman.style = "display: block;";
  setTimeout(() => {
    content.style = "display: block;";
    pacman.style = "display: none;";
  } ,1000)
}
