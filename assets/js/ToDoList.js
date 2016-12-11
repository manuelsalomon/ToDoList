/*tachando tareas de la lista*/
$("ul").on("click", "li", function(){
    $(this).toggleClass("completado")
    });
/*borrando tareas de la lista*/
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
      });
    event.stopPropagation();
      });
/*agregando tareas a la lista*/
$("input[type='text']").keypress(function(event){
  if(event.key == "Enter") {
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ $(this).val() + "</li>");
    $(this).val("");
    event.stopPropagation();
    }
});
