	// Initialize Firebase
  	var firebaseConfig = 
  {
    apiKey: "AIzaSyDmrz0oLDlKl0fDiSAxp0JDnHgsreM78Ks",
    authDomain: "parceirodocomercio.firebaseapp.com",
    databaseURL: "https://parceirodocomercio.firebaseio.com",
    projectId: "parceirodocomercio",
    storageBucket: "parceirodocomercio.appspot.com",
    messagingSenderId: "486813147049",
    appId: "1:486813147049:web:1735f6b648d09a4acaeeb8",
    measurementId: "G-S0C40L5G19"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  	
	
// Message collection 
var messagesRef = firebase.database().ref("messages");


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
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		nome:     nome,
		email:    email,
		subject:  subject,
		message:  message
	});
}