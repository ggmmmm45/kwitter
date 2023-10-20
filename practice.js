
// ADICIONE SUS LINKS FIREBASE AQUI


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// programe a função addUser():
// Obtenha o nome do usuário a partir da input box, com a id da input box. E,
// armazene-o dentro de uma variável.
// adicione o valor dessa variável ao firebase

function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}

// ○ firebase - é utilizado para ajustar a referência para adicionar os dados ao banco de
// dados.
// ○ database() - significa que queremos adicionar dados ao banco de dados.
// ○ ref(“/”) - ref() significa a referência, em que queremos adicionar um nome de usuário ao banco de dados.
// ○ “/” - isso significa que queremos adicionar o nome do usuário à raiz da pasta main.
// ○ child(userName) - child() função utilizada para fornecer o nome à pasta main.
// userName é o nome da pasta main.
// ○ update - é a função firebase utilizada para atualizar o banco de dados com os valores.
// ■ A pasta main, userName, não pode ser adicionada sozinha, portanto,
// precisamos adicionar alguns valores.
// ○ purpose is the key word for the value “adicionar usuário”.
// ■ Você pode fornecer qualquer valor que desejar. Uma vez que objetivo desta
// atividade er
