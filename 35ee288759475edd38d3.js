var imagenes=["../assets/img/store.png","../assets/img/developer.jpg"],contador=0;function carrusel(e){e.addEventListener("click",(function(n){var t=e.querySelector(".atras"),r=e.querySelector(".adelante"),o=e.querySelector(".imagend"),a=n.target;t&&alert("clic"),a==t?contador>0?(o.src=imagenes[contador-1],contador--):(o.src=imagenes[imagenes.length-1],cont=imagenes.length-1):a==r&&(contador<0?(o.src=imagenes[cont+1],cont++):(o.src=imagenes[0],cont=0))}))}document.addEventListener("DOMContentLoaded",(function(){carrusel(document.querySelector(".botones"))}));