function checar(v){
	var valor = v;

	if(valor<1){
		document.getElementById('valuechecaked').src="img/input-checked.png";
		document.getElementById('valuechecaked').value=1;
		document.getElementById('email').style="display:block";
		 
		}
	else{
		document.getElementById('valuechecaked').src="img/input-nochecked.png";
		document.getElementById('valuechecaked').value=0;
		document.getElementById('email').style="display:none";
		}

}


function blockValor(n,v){
	var valor = n;
	//alert(valor);
	if(valor<1){
		document.getElementById('valor').value=1;
		document.getElementById('boxValor').style="display:block";	 
		}
	else{
		document.getElementById('valor').value=0;
		document.getElementById('boxValor').style="display:none";
		}

}
