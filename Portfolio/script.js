
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
  var dots=elem.getAttribute("data-dots");
  var marked=elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360/dots;
  for(let i=0;i<dots;i++){
    points+='<div class="points" style="--i:${i}; --rot:${rotate}deg"</div>';}
    elem.innerHtml=points;
})