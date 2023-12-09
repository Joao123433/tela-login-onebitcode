export async function validatePassword(password) {
  if(
    !password.match(/[a-z]{1,}/) ||
    !password.match(/[A-Z]{1,}/) ||
    !password.match(/\d{1,}/) ||
    !password.match(/\W{1,}/) ||
    !password.match(/[a-zA-Z\d\W]{8,}/)
  ) {
    const erro = new Error("Senha Invalida")
    erro.input = "password"
    throw erro
  }
}
