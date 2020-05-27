
var btns = document.getElementsByClassName('menu_btn');
var par = document.getElementsByClassName('menu_nav');
btns[0].onclick = function() {
   for(let i = 0; i< 3; i++)
	{
	if(par[i].classList.contains('menu_nav_active')) {
  		par[i].classList.remove("menu_nav_active");
  		btns[0].classList.remove("menu_btn_active");
  	}
  	else {
  		par[i].classList.add("menu_nav_active");
  		btns[0].classList.add("menu_btn_active");
  	}
  }
}
