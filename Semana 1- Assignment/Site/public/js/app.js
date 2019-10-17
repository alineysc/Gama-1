
const form = document.querySelector('#formulario_contato');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('usuarios').add({

      //  Recuperando Valores
      nome:    form.contato_name.value,
      email:   form.email.value,
      subject: form.subject.value,
      message: form.text_area.value
    });
      form.contato_name.value ='';
      form.email.value ='';
      form.subject.value ='';
      form.text_area.value ='';

});


