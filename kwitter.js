// Explicação do código:
// 1. Defina a função.
// 2. Obtenha o nome do usuário da input box e armazene dentro de uma variável.
// 3. Então, armazenamos o valor da variável userName no local storage com a palavra-chave
// userName.
// 4. Em seguida, redirecionamos para kwitterRoom.html


function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

