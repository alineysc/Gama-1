



// Message collection 
var referencia = firebase.database().ref("mensagens");


/* Event Listener - reage ao evento submit formulário de contato*/
document.getElementById("formulario_contato").addEventListener('submit',submit_formulario);

function submit_formulario(e){
	e.preventDefault();

	//  Recuperando Valores
	var nome      = recuperaValores("nome");
	var email     = recuperaValores("email");
	var subject   = recuperaValores("subject");
	var message   = recuperaValores("message");

	salvaMensagens(nome,email,subject,message);

}

// Recupera valores do formulário
function recuperaValores(id){
	return document.getElementById(id).value;
}

// Salva as mensagens no firebase
function salvaMensagens(nome,email,subject,message){
	var novaMensagem = referencia.push();
	novaMensagem.set({
		nome:     nome,
		email:    email,
		subject:  subject,
		message:  message
	});
}