let task = document.getElementById('lists');
let but = document.querySelector('#but')
let itemT = 0

let num = 0 

const Add = () =>{

let inp = document.getElementById('input');
let value = inp.value;
let txt = document.createTextNode(inp.value);
let span = document.createElement(`span`);
let div = document.createElement(`div`);
let del = document.createElement(`button`);
del.setAttribute(`onclick`,`Del(this)`);
let edt = document.createElement(`button`);
edt.setAttribute(`onclick`,`Updt(this)`);
let logo = document.createElement(`i`);
let logo1 = document.createElement(`i`);
let list = document.createElement(`li`);
list.setAttribute(`class`,`w-full flex border-2 justify-between border-cyan-700 space-x-2 text-slate-900 bg-cyan-700 `)
del.setAttribute(`class`,`w-10 text-slate-900 opacity-0 hover:opacity-100 hover:duration-200 hover:delay-75  hover:visible hover:bg-slate-900 hover:text-cyan-700 `);
edt.setAttribute(`class`,`w-10 text-slate-900 opacity-0 hover:opacity-100 hover:duration-200 hover:delay-75  hover:visible hover:bg-slate-900 hover:text-cyan-700 `);
logo1.setAttribute(`class`,`fa-solid fa-pen-to-square`);
logo.setAttribute(`class`,`fa-solid fa-trash-can`);
span.setAttribute(`class`,`font-medium break-words inline-block p-2 sm:w-10/12 w-7/12 `);
div.setAttribute(`class`,`flex `);
span.appendChild(txt);
edt.appendChild(logo1)
del.appendChild(logo);
list.appendChild(span);
list.appendChild(div)
div.appendChild(edt);
div.appendChild(del);
task.appendChild(list);
inp.value = '' 
//console.log(valuee)
 let key = `item : ${++num}`; 
// localStorage.setItem(key,value)   
for (i=0; i<localStorage.length;i++) {
if(localStorage.key(i) === key){
    ++num 
}   
}
localStorage.setItem(key,value)
}
let len = localStorage.length 
// console.log(localStorage.length)
console.log(len)
console.log(len)
const Del = (rem) =>{

rem.parentNode.parentNode.remove()
let CompareVal = rem.parentNode.parentNode.childNodes[0].textContent
//console.log(localStorageTDel)
for(let i = 0 , len = localStorage.length;  i < len ; i++){
  //  console.log(localStorageTDel)
if(CompareVal === localStorage.getItem(localStorage.key(i))){    
    localStorage.removeItem(localStorage.key(i))
}
}

}

const Updt = (upt) =>{

 let edit =  prompt(`Enter The Updated Task :`, upt.parentNode.parentNode.firstChild.firstChild.nodeValue);
    console.log(upt.parentNode.parentNode.firstChild.firstChild.nodeValue)
    upt.parentNode.parentNode.firstChild.firstChild.nodeValue = edit;
}
// console.log(localStorage.l)
const Temp_Storage = () => {
let number = localStorage.length
for(i = 1; i < number + 1 ; i++){
console.log(i)
let key = `item : ${i}`;
let value = localStorage.getItem(key)
if(value === null){
++number
}else{
    let txt = document.createTextNode(value);
    let span = document.createElement(`span`);
    let div = document.createElement(`div`);
    let del = document.createElement(`button`);
    del.setAttribute(`onclick`,`Del(this)`);
    let edt = document.createElement(`button`);
    edt.setAttribute(`onclick`,`Updt(this)`);
    let logo = document.createElement(`i`);
    let logo1 = document.createElement(`i`);
    let list = document.createElement(`li`);
    list.setAttribute(`class`,`w-full flex border-2 justify-between border-cyan-700 space-x-2 text-slate-900 bg-cyan-700 `)
    del.setAttribute(`class`,`w-10 text-slate-900 opacity-0 hover:opacity-100 hover:duration-200 hover:delay-75  hover:visible hover:bg-slate-900 hover:text-cyan-700 `);
    edt.setAttribute(`class`,`w-10 text-slate-900 opacity-0 hover:opacity-100 hover:duration-200 hover:delay-75  hover:visible hover:bg-slate-900 hover:text-cyan-700 `);
    logo1.setAttribute(`class`,`fa-solid fa-pen-to-square`);
    logo.setAttribute(`class`,`fa-solid fa-trash-can`);
    span.setAttribute(`class`,`font-medium break-words inline-block p-2 sm:w-10/12 w-7/12 `);
    div.setAttribute(`class`,`flex `);
    span.appendChild(txt);
    edt.appendChild(logo1)
    del.appendChild(logo);
    list.appendChild(span);
    list.appendChild(div)
    div.appendChild(edt);
    div.appendChild(del);
    task.appendChild(list);
}

}

}
Temp_Storage()