$(document).ready(function(){
  $("#forFavoriteThings").submit(function(event){
    event.preventDefault()
    // var personOne = $("input#person1").val()
    // var person2 = $("input#person2").val()
    // var person3 = $("input#person3").val()
    // var personArr=[];
    // personArr.push(personOne, person2, person3)

    var blanks = ["person1", "person2", "person3"];

    blanks.forEach(function(blank){
      var userIn =$("input#" + blank).val();
      $("#listFavoriteThings").append("<li>"+userIn+"</li>")
    });

    // $("#listFavoriteThings").append("<li>" +personArr[0]+"</li>");
    // $("#listFavoriteThings").append("<li>" +personArr[1]+"</li>");
    // $("#listFavoriteThings").append("<li>" +personArr[2]+"</li>");




  });
});
