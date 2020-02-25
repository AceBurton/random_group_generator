//const a = ["Aname1","thename2," "name3",]
//const sorted = a.sort();

//console.log(sorted);

var existingEntries;
var allEntries;
window.onload= function() {
	let allEntries = JSON.parse(localStorage.getItem('allEntries'));
	document.getElementById("result").innerHTML = JSON.stringify(allEntries);
		//document.getElementById("result").innerHTML = JSON.parse(localStorage.getItem(JSON.stringify(allEntries)));
		//window.localStorage.clear();
}

//var nameList = {"entries":[]};
//result = localStorage.getItem("allEntries", JSON.stringify("existingEntries"));
function submitName(name){
	this.name=name;
}


function nameGenerate() {
	//var form = document.getElementById('name');
	//form.submit();
	//var name1 = document.forms["form1"].submit();
	
	// Parse any JSON previously stored in allEntries

	existingEntries = JSON.parse(localStorage.getItem("allEntries"));
	if(existingEntries == null) existingEntries = [];
	var name = document.getElementById("name").value;
	var entry =  name;

	localStorage.setItem("name", JSON.stringify(entry));
	// Save allEntries back to local storage
	existingEntries.push(entry);
	localStorage.setItem("allEntries", JSON.stringify(existingEntries));

	
	//result = localStorage.getItem("allEntries", JSON.stringify(existingEntries));


	//var name = document.getElementById("name").value;
	//var data = {name};

	//var nameList = localStorage["localStorage"] ? JSON.parse(localStorage["localStorage"]) : [];
	//var nameEntry = new submitName(name);
	//var jsonNameEntry = JSON.stringify(nameEntry);
	//nameList.push(jsonNameEntry);
	
	//document.getElementById("result").innerHTML = JSON.parse(localStorage.getItem("allEntries"));
	//localStorage.setItem("nameList", jsonNameEntry);
	//localStorage.setItem("name", JSON.stringify(name));
	//nameList.push(data);
	//alert(name);
	console.log("name: " + name);
	console.log(JSON.stringify(existingEntries));
	
	return true;
}


	
JSON.parse(localStorage.getItem('allEntries')) // : []

//function clearNames(){
	//window.localStorage.clear("allEntries");
//}
var group = document.getElementById("groups");
function generateGroups(){
	let allEntries = JSON.parse(localStorage.getItem('allEntries'));
	var numberOfStudents = allEntries.length;
	console.log("numberOfStudents: " + numberOfStudents);
	var numberOfGroups = document.getElementById("numberOfGroups").value;
	console.log("numberOfGroups: " + numberOfGroups);
	var studentsInGroups = numberOfStudents/numberOfGroups;
	console.log("studentsInGroups 1: " + studentsInGroups);
	studentsInGroups = Math.floor(studentsInGroups);
	console.log("studentsInGroups 2: " + studentsInGroups);
	var groupArr = [];
	
	for (var i = 0; i < numberOfGroups; i++){
		
		var ul = document.createElement("ul");
		console.log("inside for loop " + [i]);
		
		for (var j = 0; j < studentsInGroups; ){

			randomName = allEntries[Math.floor(Math.random()*allEntries.length)];

			if (!groupArr.includes(randomName)) {
				groupArr.push(randomName);
				var node = document.createElement("li");
				var textNode = document.createTextNode(randomName);

				node.appendChild(textNode);
				
				ul.appendChild(node);
				j++
			}


			console.log("randomName: " + randomName);
			
		}
		group.appendChild(ul);
		
	}
	console.log("groupArr: " + groupArr);
	console.log("allEntries: " + allEntries);

	difference(allEntries, groupArr);

}

function difference(arr1, arr2) {
	var res = [];
	for (var i = 0; i < arr1.length; i++) {
		var finalUl = document.createElement("ul");
		if (arr2.indexOf(arr1[i]) === -1) {
			//res.push(arr1[i]);
			
			var finalNode = document.createElement("li");
			var finalTextNode = document.createTextNode(arr1[i]);
			finalNode.appendChild(finalTextNode);
			finalUl.appendChild(finalNode);

		}
		group.appendChild(finalUl);
	}
	
	//return res;
}