const button = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")
const closeButton = document.querySelector(".popup-close")
const meDeixeEmPaz = document.querySelector(".btn_naoquero")

button.addEventListener("click", () => {
  popup.style.display = "block"
  })
  
closeButton.addEventListener("click", () => {
  popup.style.display = "none"
  })
  
meDeixeEmPaz.addEventListener("click", () => {
  window.alert("TÓ SAIU DO FORNO AGORA, SÓ NÃO VAI QUEIMAR O BEIÇO ♨️🍪")
  popup.style.display = "none"
  })