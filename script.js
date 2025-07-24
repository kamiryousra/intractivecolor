document.addEventListener("DOMContentLoaded", () => {
  const btn = document. getElementById("btn");
  const bg = document.getElementsByClassName("box")[0];
  let num =0
  function getrandomvalue() {
    num = Math.random()*256
    num = Math.floor(num)
    return num 
  }
  function getRandomColor() {
  let r = getrandomvalue()
  let g = getrandomvalue()
  let b = getrandomvalue()
 const rgb = "rgb(" + r + ", " + g + ", " + b + ")";
  return rgb
}

  btn.addEventListener("click",() =>{
  const randomcolor= getRandomColor();
  bg.style.backgroundColor = randomcolor;

});
});
