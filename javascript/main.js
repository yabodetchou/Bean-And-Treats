

// add links
// var homelink = document.createElement("a");
// var hometext =  document.createTextNode("Home");
// homelink.appendChild(hometext);
// var element = document.getElementById("navitem");
// element.appendChild(homelink);

// creating nav links
var Hometag = document.createElement('a');
var hometext =  document.createTextNode("Home");
Hometag.setAttribute('href','#hero');
Hometag.appendChild(hometext);
var element = document.getElementById("navitemH");
element.appendChild(Hometag);

var Abouttag = document.createElement('a');
var Abouttext =  document.createTextNode("About");
Abouttag.setAttribute('href','#about');
Abouttag.appendChild(Abouttext);
// document.getElementById("navitemH").style.color = "red";
// Abouttext.setAttribute

var element = document.getElementById("navitemA");
element.appendChild(Abouttag);

var Menutag = document.createElement('a');
var Menutext =  document.createTextNode("Coffee");
Menutag.setAttribute('href','#menu');
Menutag.appendChild(Menutext);
var element = document.getElementById("navitemC");
element.appendChild(Menutag);

var Eventstag = document.createElement('a');
var Eventstext =  document.createTextNode("Events");
Eventstag.setAttribute('href','#event');
Eventstag.appendChild(Eventstext);
var element = document.getElementById("navitemE");
element.appendChild(Eventstag);

// styling nav items
document.getElementById("navbar").style.background=" #eeeeeeec"; 




