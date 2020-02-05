$('#print').bind('click', function() {
    let route= $('#route').val();
    let document = $('#document').val();
    let url ="";
    if (route===""){
        $('#msg').val("Ingrese una carpeta");
    }else if (route!=="" && document===""){
        url="/print/printFolder/"+route;
    }else{
        url="/print/print/"+route+"/"+document;
    }

    fetch(url) 
    .then((resp) => resp.json())
    .then(function(data) {
        $('#msg').html(data.content);
    })
    .catch(function(err) {
        $('#msg').html("Error ",err);
    });
});