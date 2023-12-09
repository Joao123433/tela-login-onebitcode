import { validateEmail } from "./entitis/Email"
import { validatePassword } from "./entitis/Password"
import "./styles/App.css"


async function validate(email, senha) {
  try {
    document.querySelectorAll("span").forEach((span) => span.textContent = "")

    await validateEmail(email.value)
    email.classList.remove("error")
    email.classList.add("sucess")

    await validatePassword(senha.value)
    senha.classList.remove("error")
    senha.classList.add("sucess")
  } catch(erro) {
    document.querySelector(`#span-${erro.input}`).innerHTML = erro.message
    document.querySelector(`#${erro.input}`).classList.remove("sucess")
    document.querySelector(`#${erro.input}`).classList.add("error")
  }
}


document.querySelector("#button").addEventListener("click", (ev) => {
  ev.preventDefault()

  const email = document.querySelector("#email")
  const senha = document.querySelector("#password")

  validate(email, senha)
})
