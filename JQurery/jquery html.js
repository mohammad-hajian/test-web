$("#btnshow").click(function () {
    var name = $("#t1").val();
    $("#t2").val(name);
    //alert(name)
});
$("#btnedit").click(function () {
    var edit = $("#t3").val();
    $("#btnedit").html(edit);

});
$("#btnlink").click(function () {
    var myattr = $("#a1").attr("href");
    $("#a1").attr("href", "http://www.google.com")
    alert(myattr + " to http://www.google.com")
});
$("#before").click(function () {
    $("img").before("chakeram");

});
$("#after").click(function () {
    $("img").after("khoobi?");

});
$("#append").click(function () {
    var txt = $("#txtpend").val();
    $("p").append(txt)

});
$("#prepend").click(function () {
    var txt = $("#txtpend").val();
    $("p").prepend(txt)

});
$("#remove").click(function () {
    $("p").remove();
});
$("#empty").click(function () {
    $("p").empty();
});
$("#toggleclass").click(function () { 
    var clase=$("#tclass").val();
    $("p").toggleClass(clase);
    
});

$("#css").click(function () { 
    $("p").css({color:'red',"font-size":'30px'});
});