 let ourForm = document.getElementById('add_to_form');
 let todotask = document.getElementById('todotask');
 let ourOList = document.getElementById('ourlist');

 ourForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createItem(todotask.value);


 });

 function createItem(item){
     let html = `<li>${item} <button  onclick="deleteItem(this)" >Delete</button></li>`;
    ourOList.insertAdjacentHTML('beforeend',  html);
    todotask.value= "";
    todotask.focus();
 }

 function deleteItem(deleteItem){
    deleteItem.parentElement.remove();
 }