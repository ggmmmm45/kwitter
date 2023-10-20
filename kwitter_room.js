var firebaseConfig = {
  apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk",
  authDomain: "testkwitter.firebaseapp.com",
  databaseURL: "https://testkwitter.firebaseio.com",
  projectId: "testkwitter",
  storageBucket: "testkwitter.appspot.com",
  messagingSenderId: "624653701634",
  appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b"
};



  firebase.initializeApp(firebaseConfig);

  // primeiro, pegamos o valor de localStorage, e o armazenamos dentro de uma variável
user_name = localStorage.getItem("user_name");

// atualize o elemento HTMl que possui a id=’userName’, com “Bem-vindo(a) ” + userName + “!”
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

// Defina a função.
function addRoom()
{
  // Obtenha o nome da sala, a partir da input box, com a id da input box. E, armazene-o dentro de uma variável.
  room_name = document.getElementById("room_name").value;
  // adicione esse nome de sala ao firebase.
  firebase.database().ref("/").child(room_name).update({
//     ● firebase é utilizado para ajustar a referência para adicionar dados ao banco de dados.
// ● database() - significa que queremos adicionar dados ao banco de dados.
// ● ref(“/”) - ref() significa a referência, onde queremos adicionar um nome de usuário no
// banco de dados.
// ● “/” - isso significa que queremos adicionar o nome do usuário na raiz como pasta main.
// ● child(roomName) - child() função utilizada para fornecer o nome à pasta main. roomName
// é o nome da pasta main.
// ● update - é a função firebase utilizada para atualizar o banco de dados com os valores.
// ● roomName não pode ser adicionada sozinha, como pasta main, precisamos adicionar
// alguns valores, e por isso adicionamos purpose (motivo/objetivo). purpose é a
// palavra-chave para o valor “adicionar nome de sala”.

    purpose : "adding room name"
  });

  // armazene esse nome de sala no localStorage.
    localStorage.setItem("room_name", room_name);
   
    // Redirecione-o para kwitterPage.html.
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  // A variável roomNames contém todos os nomes das salas vindas do firebase    
  Room_names = childKey;
//   coloque essa variável no console para ver se a variável roomNames contém ou não os nomes das salas.
       console.log("Room Name - " + Room_names);
      //  crie uma div e a armazene dentro de uma variável.
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      // ● Defina o elemento div dentro de aspas duplas. -
      // ● Depois, forneça class='room_name' a essa div, concedemos um nome de class, pois
      // fornecemos algumas propriedades CSS a essa class em style.css, a qual foi feito o
      // download, na aula C93, pelo aluno. -
      // ● Agora, forneça id = "+roomNames" a essa div, fazemos isso, pois cada nome de sala deve possuir uma identificação única. ○ roomNames terá o nome da sala vinda do firebase.
    //   onclick='redirectToRoomName(this.id)':
    //   ○ onclick - já conhecemos.
    //   ○ redirectToRoomName - é o nome da função, definiremos essa função ao longo da aula.
    //   ○ this.id - isso significa, sempre que a função redirectToRoomName for chamada,
    //   passará o valor da id atual do elemento dentro da função redirectToRoomName. E, a id apropriada é antes ajustada para id="+roomNames+". document.getElementById("output").innerHTML += row;

    });
  });

}

getData();


// ● Definimos essa função na função addRoom() na PARTE 3. Portanto, quando definimos a função,
// dizemos redirectToRoomName(this.id), this.id significa a id do elemento HTML atual. E, a id do elemento HTML é o nome da sala.
// Portanto, indiretamente, significa que redirectToRoomName terá o nome da sala nele.
function redirectToRoomName(name)
{
  console.log(name);

  // adicione esse nome de sala ao localStorage.
  localStorage.setItem("room_name", name);
  // Redirecione para kwitterPage.html.
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
// ● localStorage - utilizada para referir ao localStorage do navegador.
// ● removeItem - essa é uma função JS predefinida, utilizada para remover a chave fornecida e seu valor no localStorage.
// ● removeItem(“userName”) - Dentro de removeItem, precisamos passar o nome-chave do valor que queremos deletar no localStorage.
// ○ Armazenamos o nome do usuário com a chave "userName" no localStorage
