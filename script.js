function save() {
  var nome = document.getElementById("nome").value
  localStorage.setItem("user", nome)

  var email = document.getElementById("email").value
  localStorage.setItem("email", email)

  var senha = document.getElementById("senha").value
  localStorage.setItem("senha", senha)

  var telefone = document.getElementById("telefone").value
  localStorage.setItem("telefone", telefone)
}

function clean() {
  document.getElementById("email").value = ""
  document.getElementById("nome").value = ""
  document.getElementById("senha").value = ""
  document.getElementById("telefone").value = ""
}

