//VALOR INICIAL LOGIN
function Esvazia(valor_campo){
	if (valor_campo.value == valor_campo.defaultValue)
	valor_campo.value='';
}

function padrão(valor_campo){
	if (valor_campo.value == '')
	valor_campo.value=valor_campo.defaultValue;
}



//EXIBE E OCULTA SENHA
function pass(){
	var p = document.getElementById("senha").type;
	
	if(p == "password"){
		document.getElementById("senha").type="text";
		document.getElementById("icoPass").src="img/icon-senha.png";
	}
	else{
		document.getElementById("senha").type="password";
		document.getElementById("icoPass").src="img/icon-senha-off.png";
	}
}




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




function somente_numero(campo){  
	var digits="0123456789-/."  
	var campo_temp   
    for (var i=0;i<campo.value.length;i++){  
        campo_temp=campo.value.substring(i,i+1)   
        if (digits.indexOf(campo_temp)==-1){  
            campo.value = campo.value.substring(0,i);  
		}  
	}  
}  


function mascara(src, mask){
	var i = src.value.length;
	var saida = mask.substring(0,1);
	var texto = mask.substring(i)
	if (texto.substring(0,1) != saida)
	{
		src.value += texto.substring(0,1);
	}
}