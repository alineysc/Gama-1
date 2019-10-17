
const form = document.querySelector('#recompensa_digital');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('usuarios').add({

      
      email: form.email.value,


      
    });
      
      form.email.value ='';
    alert("solicitação recebida com sucesso");
});


