
db=app.firestore()

let meuIP=getIp( function (meuIP) {


window.addEventListener('load', function(){
    let f = document.querySelector ('form') 


     function saveuser(name,email,date,tipo){ 


        db.collection("users").add({
        
        Nome:name, EMAIL:email, DATA:date,IP:meuIP, TIPO:tipo
        
        
        })
        
        .then(function(docRef) {
            
            alert('Salvo Com Sucesso')
            f.elements['name'].value ="";
             f.elements['email'].value ="";
             
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        
           }


f.addEventListener('submit', function(e){
let nome= f.elements['name'].value 
let email= f.elements['email'].value 
let date = completeDate();
let tipo = classificaTipo(email);
saveuser(nome,email,date,tipo)
e.preventDefault();
console.log(e);


})


     
});


});

// DATA 
function completeDate () {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }

// -----------------TESTE 

// Pegando o IP

function getIp(callback)
{
    function response(s)
    {
        callback(window.userip);

        s.onload = s.onerror = null;
        document.body.removeChild(s);
    }

    function trigger()
    {
        window.userip = false;

        var s = document.createElement("script");
        s.async = true;
        s.onload = function() {
            response(s);
        };
        s.onerror = function() {
            response(s);
        };

        s.src = "https://l2.io/ip.js?var=userip";
        document.body.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(document.readyState)) {
        trigger();
    } else {
        document.addEventListener('DOMContentLoaded', trigger);
    }
}






// ------------ tipo

classificaTipo = (email) => {

let dominio = email.substring(email.indexOf("@") + 1, email.length);

let listaConsumidor = [
  'gmail.com',
  'uol.com.br',
  'ig.com.br',
  'outlook.com',
  'outlook.com.br',
  'hotmail.com',
  'hotmail.com.br',
  'bol.com.br',
  'icloud.com',
  'terra.com.br',
  'globo.com',
  'yahoo.com.br',
  'yahoo.com.br'];

if (listaConsumidor.includes(dominio)) {
  return 'B2C';
} else {
  return 'B2B';
}

}

</script>