var input = document.querySelector('input[type=text]');
var button = document.querySelector('input[type=button]');


button.addEventListener('click', function () {
 
   var selecetedText = input.value;
   var chatBox = document.querySelector('.chatfield')
   chatBox.innerHTML += '<p> '+input.value + ' </p><br>';
   input.value = '';
    
})

// button.addEventListener('keyup', function (event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         var selecetedText = input.value;
//         var chatBox = document.querySelector('.chatfield')
//         chatBox.innerHTML += '<p> '+input.value + ' </p><br>';
//         input.value = '';
//     }

     
//  })