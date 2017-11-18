$.getJSON( "../package.json", function( obj) {
    console.log(obj);
    
    $( "body" ).html( "<p>"+ "Autorem jest " + obj.author + "</p>" );
    
   
    
   });
