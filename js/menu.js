window.onload = function() {
var width = $( window ).width();

$("#menu-open").click(function() {
    $(".menu-header").css("top", 0);
    $(this).css("display", "none");
    $("#menu-close").css("display", "block");
});

$("#menu-close").click(function() {
    if (width<=480) {
      $(".menu-header").css("top", -240);
    } else{
      $(".menu-header").css("top", -60);
    };
    $(this).css("display", "none");
    $("#menu-open").css("display", "block");
});

    $('#pre-loading').fadeOut('slow');
};
