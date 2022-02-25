$(function(){

    const appendBook = function (data){
        var bookCode = '<h4>' + data.name + '</h4>' + 'Год выпуска: ' + data.year;
        $('#book-list').append('<div>' + bookCode + '</div>')
    }

    //loading books on load page
    $.get('/books/', function(response){
        for(i in response){
            appendBook(response[i]);
        }
    });

    //Show adding book form
    $('#show-add-book-form').click(function (){
        $('#book-form').css('display', 'flex');
    });

    //Closing adding book form
    $('#book-form').click(function (event){
        if(event.target === this){
            $(this).css('display', 'none');
        }
    });

    //Adding book
    $('#save-book').click(function (){
        var data = $('#book-form form').serialize();
        $.ajax({
            method: "POST",
            url: '/books/',
            data: data,
            success: function (response){
                $('#book-form').css('display', 'name');
                var book = {};
                book.id = response.id;
                var dataArray = $('#book-form form').serializeArray();
                for(i in dataArray){
                    book[dataArray[i]['name']] = dataArray[i]['value'];
                }
                appendBook(book);
            }
        });
        return false;
    });
});