console.log("cats")

var studioLink = $('.studio');
studioLink.on('click', function(){
  console.log("cats")
})

var menuCats = $("#menu-cats");
var menuTravels = $("#menu-travels");
var menuSports = $("#menu-sports");
var menuStudio = $("#menu-studio");

var itemsCats = $(".cats");
var itemsTravels = $(".travels");
var itemsSports = $(".sports");
// var itemsStudio = $("");

menuCats.mouseover(function(){
  itemsCats.addClass("selected")
  itemsTravels.removeClass("selected")
  itemsSports.removeClass("selected")
})

menuTravels.mouseover(function(){
  itemsTravels.addClass("selected")
  itemsCats.removeClass("selected")
  itemsSports.removeClass("selected")
})

menuSports.mouseover(function(){
  itemsSports.addClass("selected")
  itemsCats.removeClass("selected")
  itemsTravels.removeClass("selected")
})
