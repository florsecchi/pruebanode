
function cargarTabla(){

var name= $("#name").val();

$.get('https://jsonplaceholder.typicode.com/users',{name:name}, function(data, status){
 if(!data){
 	alert("fallo");
 	return;
 }
 
 for(var i=0; i<data.length;i++){


 	var persona= data[i];
 	var nuevaFila="<tr>"+ 
 	"<td>" + persona.name + "</td>" 
 	+ "<td>" + persona.username + "</td>"
 	+"<td>" + persona.email +"</td>" 
 	+ "</tr>";

 	$(".table tbody").append(nuevaFila);


 }

});
}