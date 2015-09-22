
function searchFunction() {
    var x = document.getElementById("mySearch").value;
 	console.log(x);
 	var url = "";
    url = "https://api.twitch.tv/kraken/search/streams?q=" + x;
	var xmlhttp = new XMLHttpRequest();


	xmlhttp.onreadystatechange = function() {
    	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        	var myArr = JSON.parse(xmlhttp.responseText);
        	console.log(myArr)
        	myFunction(myArr);
    	}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();


	function myFunction(arr) {
		var array = arr.streams
    	var out = "";
    	var i;

    	document.getElementById("results").innerHTML = "Total results: " + arr._total;
    	document.getElementById("paging").innerHTML = '<button type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>';
		document.getElementById("paging").innerHTML += '1/' + Math.floor(arr._total/10) + 'pages';
		document.getElementById("paging").innerHTML += '<button type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>';


    	for(i = 0; i < array.length; i++) {
    		out += '<div>';
    		out += '<a href="' + array[i].channel.url + '" target="_blank"><img src="' + array[i].preview.medium + '" class="img-thumbnail imgPad" id="thumbnail" alt="Cinque Terre" width="304" height="236"></a>';
    		out += '<h2>' + array[i].channel.display_name + '</h2>';
    		out += '<div><p>' + array[i].game + ' - ' + array[i].viewers + ' viewers</p></div>';
    		out += '<div><p>' + array[i].channel.status  + '</p></div>';
        	out += '<br><br><br>';
        	out += '</div>';
        	out += '<br>';
    	}
    	document.getElementById("streams").innerHTML = out;
	}
}