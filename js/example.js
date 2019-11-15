// https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp
var array = document.getElementsByTagName("ul")[0];

// ADD NEW ITEM TO END OF LIST
var item1 = document.createElement("li");
item1.appendChild(document.createTextNode("butterscotch"));
array.appendChild(item1);

// ADD NEW ITEM START OF LIST
var item2 = document.createElement("li");
item2.appendChild(document.createTextNode("cool beans"));
array.insertBefore(item2, array.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var index = array.childElementCount;
for (var i = 0; i <= index; i++) {
    array.children[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var hee = document.getElementsByTagName("h2")[0];
hee.innerHTML = "This doesn't work and I'm not sure why." + index;
