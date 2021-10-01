// const inputList = document.querySelector('.inputfield input')
// const addButon = document.querySelector('.inputfield button')
// alert('hello');


// const addbtn = document.getElementById('addbtn')

function addvalue() {
    var addval1 = document.getElementById('addval').value
    // addval.innerText = addval
    var ul = document.getElementById('valhold');
    var li = document.createElement('li');
    var span = document.createElement('span');
    var i = document.createElement('i');
    li.appendChild(document.createTextNode(addval1))
    li.setAttribute('id', 'listall')
    ul.appendChild(li);
    i.setAttribute('class', 'fas fa-trash')
    i.setAttribute('id', 'delete')
    i.setAttribute('onclick', 'deleteLi()')
    span.appendChild(i);
    li.appendChild(span);
    document.getElementById('addval').value = '';
    var mylist = document.getElementsByClassName('myList')
    mylist.innerHTML ='';
    
}

    

    




// function deleteLi() {
//     console.log(deleteLi)
// }

// var ul =document.querySelectorAll(".task")

// const btn = document.getElementById('Button1')

// btn .addEventListener('click', function master() {
    
//     var master = this.appendChild('fas fa-plus')

//     master.addEventListener.apply ('')

// })

// B0365995