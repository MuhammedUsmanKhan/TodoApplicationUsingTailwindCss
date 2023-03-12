let task = document.getElementById('lists');

const Add = () =>{

let inp = document.getElementById('input');
let txt = document.createTextNode(inp.value);
let span = document.createElement(`span`);
let del = document.createElement(`button`);
del.setAttribute(`onclick`,`Del()`)
let logo = document.createElement(`i`);
let list = document.createElement(`li`);
list.setAttribute(`class`,`w-full flex border-2 border-cyan-700 space-x-2 text-slate-900 bg-cyan-700 `)
del.setAttribute(`class`,`w-10 text-slate-900 opacity-0 hover:opacity-100 hover:delay-75  hover:visible hover:bg-slate-900 hover:text-cyan-700 `)
logo.setAttribute(`class`,`fa-solid fa-trash-can`);
span.setAttribute(`class`,`font-medium break-words inline-block p-2 w-60 sm:w-96 `);
span.appendChild(txt);
del.appendChild(logo);
list.appendChild(span);
list.appendChild(del);
task.appendChild(list);
inp.value = ''
}

// const Del = () =>{


// let rem = document.querySelector(`li`)

// rem.target

// }