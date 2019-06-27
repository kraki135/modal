var btn_edit = document.querySelector('.btn-edit');
var btn_cancel = document.querySelector('.btn-cancel')
var btn_confirm = document.querySelector('.btn-confirm');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var quote = document.querySelector('.modal-control p');
var modal_input = document.querySelector('.modal-input textarea');
/*To jest test modal. Zmień w nim tekst i dodaj coś od siebie.*/
function closeModal() {
  modal.style.display = 'none';
    backdrop.style.display = 'none';
}
function showP() {
  if(modal_input.value == "") {
    console.log('pusty');
    
  } else if(modal_input.value != ""){
    console.log('dodany tekst');
    modal_input.innerHTML = modal_input.value;
  }
  
}

btn_edit.addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
});
btn_cancel.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

btn_confirm.addEventListener('click', function() {
  
    closeModal();
    showP();
});
