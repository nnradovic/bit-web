function selectSecondList(ul){
   var ul = document.getElementsByTagName(ul)[1];
   var li = ul.getElementsByTagName('li')[1]
   li.className = 'active'; 
}

selectSecondList('ul')

function selectActive(li){
    
    var li = document.getElementsByTagName(li);
    for (var i = 0; i < li.length; i++) {
        if(li[i].className==='active'){
            li[i].removeAttribute('class');
            li[i].parentElement.parentElement.previousElementSibling.firstElementChild.lastElementChild.className = 'active'
            // console.log(li[i].parentElement.parentElement.previousElementSibling.firstElementChild.lastElementChild.className = 'active');
            
        }
        
    }
   
}

selectActive('li')


