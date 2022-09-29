
// const newLi=document.createElement('li')
const insereItem= (event)=>{

        const ulElemento=document.getElementById('lista')
         const newLi=document.createElement('li')
        const newItem=document.getElementById('meu-input')
        const textLi=document.createTextNode(newItem.value)
        newLi.appendChild(textLi)
        ulElemento.insertAdjacentElement('beforeend',newLi)

    }