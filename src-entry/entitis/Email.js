export async function validateEmail(email) {
  if(!email.match(/\w{2,}\@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/gm)) {
    const erro = new Error("Email Invalido")
    erro.input = "email"
    throw erro
  }
}
