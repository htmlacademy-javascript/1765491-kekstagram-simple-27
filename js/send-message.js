// const succesMessage = document.querySelector('#success').content
// console.log(succesMessage)
// const successMessageContent = succesMessage.querySelector('.success')
// console.log(successMessageContent)
// const messageWrapper = document.createDocumentFragment()

// const body1 = document.querySelector('body')
// const successSend = function () {
//     messageWrapper.appendChild(successMessageContent)
//     body1.appendChild(messageWrapper)
// }


const succesMessage = document.querySelector('#success').content
const successMessageContent = succesMessage.querySelector('.success')
// const messageWrapper = document.createDocumentFragment()
const body1 = document.querySelector('body')
const successSend = function () {
    // messageWrapper.appendChild(successMessageContent)
    body1.appendChild(successMessageContent)
}



export {successSend}