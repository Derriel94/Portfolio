let item = document.getElementById('item');

item.onclick=function(event){
	var target=event.target;
	target.classList.toggle("spin");
  console.log(target.classList);
}