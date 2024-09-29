
var button1 = window.document.getElementById('verificar')

button1.addEventListener('click',verificar)


function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var choice_nasc = qual_nasc()
    var choice_sexo = qual_botao()
    var idade = ano - choice_nasc
    var imagem = window.document.getElementById('imagem')
    if(choice_nasc > ano || idade == ano){
        return alert('Preencha os dados corretamente!')
    }
    else if (idade <= 15){
        if (choice_sexo == 'Homem'){
            imagem.src='boy_child.jpg'
        }
        else{
            imagem.src='girl_child.jpg'
        }

    }
    else if (idade > 15 && idade <= 50){
        if (choice_sexo == 'Homem'){
            imagem.src='boy_young.jpg'
        }
        else{
            imagem.src='girl_young.jpg'
        }
    }
    else{
        if (choice_sexo == 'Homem'){
            imagem.src='boy_old.jpg'
        }
        else{
            imagem.src='girl_old.jpg'
        }
    }
 
        var div1 = window.document.getElementById('res1')
        div1.innerText = `Detectamos ${choice_sexo} com ${idade} anos`

    }



function qual_botao(){
    var radio = window.document.getElementsByName('sexo')
    for (i = 0; i < radio.length; i++){
        if (radio[i].checked){
            var sexo = radio[i].value
        }
    }
    return sexo

}


function qual_nasc(){
    var nasc = window.document.getElementById('txt1')
    nasc = Number(nasc.value)
    return nasc
}
