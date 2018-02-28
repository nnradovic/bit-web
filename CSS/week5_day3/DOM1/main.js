function selectSecondList(ul){
   var ul = document.getElementsByTagName('ul')[1];
   ul.className = 'red'; 
}

selectSecondList('ul')

var list;
function selectList(li) {
     list = document.getElementsByTagName('li');
    for(var i=0; i<list.length; i++){
       list[i].className = 'blue'
    }
    
}

selectList('li');

function lastList(li) {
    var ul = document.getElementsByTagName('ul')[2];
    var li = ul.getElementsByTagName('li')[li.length];
    li.className = 'green'; 
}

lastList('li')



function random(li) {
    var li = document.getElementsByTagName('li');
       
       var random = Math.floor(Math.random()*list.length)
       li[random].className = 'upper'
    
    
}
random('li')

