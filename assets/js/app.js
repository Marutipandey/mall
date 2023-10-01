function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}


function myFunction(imgs) {
	// Get the expanded image
	
	var expandImg = document.getElementById("expandedImg");
	// Get the image text
	var imgText = document.getElementById("imgtext");
	// Use the same src in the expanded image as the image being clicked on from the grid
	expandImg.src = imgs.src;
	// Use the value of the alt attribute of the clickable image as text inside the expanded image
	imgText.innerHTML = imgs.alt;
	// Show the container element (hidden with CSS)
	expandImg.parentElement.style.display = "block";
  }


//  document.getElementById('editbtn').editbtn.onclick = function(){
// 	let disabled = document.getElementById("input-box").disabled;
// 	if (disabled) {
//         document.getElementById("input-box").disabled = false;
//     }
//     else {
//         document.getElementById("input-box").disabled = true;
//     };
 
//   }

document.getElementById('editbtn').onclick = function() {
    var disabled = document.getElementById("name").disabled;
    if (disabled) {
        document.getElementById("name").disabled = false;
    }
    else {
        document.getElementById("name").disabled = true;
    }
}


document.getElementById('editbtn_mail').onclick = function() {
    var disabled = document.getElementById("nameemail").disabled;
    if (disabled) {
        document.getElementById("nameemail").disabled = false;
    }
    else {
        document.getElementById("nameemail").disabled = true;
    }
}

document.getElementById('editbtn_phone').onclick = function() {
    var disabled = document.getElementById("nameephone").disabled;
    if (disabled) {
        document.getElementById("nameephone").disabled = false;
    }
    else {
        document.getElementById("nameephone").disabled = true;
    }
}

