var grande=document.querySelector(".grande"),punto=document.querySelectorAll(".punto");punto.forEach((function(t,n){punto[n].addEventListener("click",(function(){var t=-20*n;grande.style.transform="translateX(".concat(t,"%)"),punto.forEach((function(t,n){punto[n].classList.remove("activo")})),punto[n].classList.add("activo")}))}));