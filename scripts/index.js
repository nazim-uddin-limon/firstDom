let input = document.getElementById('name')
let list = document.getElementById('list')
let createElement = (value) => {
    let li = document.createElement('li')
    let span = document.createElement('span')
    li.innerHTML = value
    li.className = 'list-item'
    span.innerHTML = "&times;"
    span.className = 'close'
    console.log(span)
    console.log(li.innerHTML.length)
    li.insertAdjacentElement('beforeend', span)
    list.insertAdjacentElement('beforeend', li)
}

input.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        if(event.target.value == ''){
            alert('Please Enter a value')
        }else{
            let listText = event.target.value
            createElement(listText)
            list.style.display = 'block'
            event.target.value = ''
        }

    }
})
list.addEventListener('click', function(e){
    if(this.contains(e.target)){
       if(e.target.parentElement !== list){
        e.target.parentElement.remove()
       }
       if(list.childElementCount == 0){
           list.style.display = 'none'
       }
    }
})