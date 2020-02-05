$('#print').bind('click', function() {
    let route= $('#route').val();
    let document = $('#document').val();

    fetch("/print/print/"+route+"/"+document) 
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {
        console.log("print error");
    });
});