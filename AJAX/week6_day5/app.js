
$(function () {
    var button = $('button');

    
    var search = $('input');
   
    
    
    button.on('click',function () {
        var searchVal = search.val()
        console.log(searchVal);
     
        
        var request = $.ajax({
            url: 'https://api.github.com/search/users?q='+searchVal,
            method: "GET",
            dataType: "json"
        });
        
        request.done(function (msg) {
            console.log(msg.items);
            var display = $('.display');
            var text = '';
            for (let i = 0; i <msg.items.length; i++) {
                const element = msg.items[i];
                text += '<img src="'+element.avatar_url+'">'
            }
            display.html(text)
        
        });
        
        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });


    })  
})



