//Declaring information of all pokemon
const pokemon = ["","Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate"];
const type = ["","Grass/Poison","Grass/Poison","Grass/Poison","Fire","Fire","Fire/Flying","Water","Water","Water","Bug","Bug","Bug/Flying","Bug/Poison","Bug/Poison","Bug/Poison","Flying/Normal","Flying/Normal","Flying/Normal","Normal","Normal"];
const evolutionStage = ["","1/3","2/3","3/3","1/3","2/3","3/3","1/3","2/3","3/3","1/3","2/3","3/3","1/3","2/3","3/3","1/3","2/3","3/3","1/2","2/2"];
const weather = ["", "Clear", "Clear", "Clear", "Clear", "Clear", "Clear", "Rain", "Rain", "Rain", "Rain", "Rain", "Rain", "Rain", "Rain", "Rain", "Partly Cloudy", "Partly Cloudy", "Partly Cloudy", "Partly Cloudy", "Partly Cloudy"];

const gridDiv = document.getElementById("unorderedlist")

function searchPokemonNum(){ //search code through number
    var num = document.getElementById("pokeNum").value; //gets user input
    var alertmsg = new String(); //creates new string for alert
    var counter = 0; //declares counter to keep rack of results
    var pokeIds = [];
    for(var i = 1; i <= 20; i++){ //iterates through all pokemon
        var input = i.toString(); //turns input number to string
        var pokeId = pad(i); //turns number to #00X form
        if(input.includes(num) && counter < 5){ //if input number is part of pokedex number
            if(counter===0){ //if this is first pokemon result
                alertmsg = "Search Results"; //add Search Result to alert message
            }
            displayResults(i);
            alertmsg = alertmsg + ("\n" + pokemon[i] + "(#" + pokeId + ")\tType: " + type[i] + " \tEvolution Stage: " + evolutionStage[i] + "\n\t\t\tWeather: " + weather[i]); 
            //adds pokemon to alert message every time a pokemon meets requirement
            counter++; //adds 1 to counter to keep track of results
        }
    }
    if(counter===0){ //if no pokemon match search
        alertmsg = "No Results Found, Please Enter a Number Between 1-20"; //number was not in range and requests a different number
    }

    displayResults(1);

    //alert(alertmsg); //prints alert message   
}

function searchPokemonName(){ //search code through name
    var name = document.getElementById("pokeName").value; //gets user input
    var alertmsg = new String(); //creates new string for alert
    var counter = 0; //declares counter to keep track of number of results
    var pokeIds = [];
    for(var i = 1; i <= 20; i++){ //iterates through all pokemon
        var pokeId = pad(i); //turns pokemon number to #00X form
        if(pokemon[i].toLowerCase().includes(name.toLowerCase()) && counter < 5){ //if search containes the same characters as a pokemon
            if(counter===0){ //if pokemon is first result
                alertmsg = "Search Results"; //add Search Results to alert message
            }
            displayResults(i);
            alertmsg = alertmsg + ("\n" + pokemon[i] + "(#" + i + ")\tType: " + type[i] + " \tEvolution Stage: " + evolutionStage[i] + "\n\t\t\tWeather: " + weather[i]);
            //adds pokemon to alert message every time a pokemon meets requirement
            counter++; //adds 1 to counter to keep track of results
        }
    }

    if(counter===0){ //if no pokemon match search 
        alertmsg = "No Results Found, Please Only Use A-Z and a-z or Double Check Spelling"; //urges user to double check their input for proper characters and spelling
    }

    //alert(alertmsg); //prints alert
}

function pad(number) { //function to turn number into #00X form
   
    var str = '' + number;
    while (str.length < 3) { //ensures max string length of 3
        str = '0' + str; //adds 0 before number
    }
   
    return str; //returns padded number

}

const div = document.createElement("div");
const ul  = document.createElement("ul");
div.id = "newDivision";
ul.id = "displayList";
document.body.insertBefore(div, document.getElementById("list"));
document.getElementById("newDivision").appendChild(ul);

var nodeList = document.querySelectorAll("li");


function nameResults(){

    while (document.getElementById("displayList").firstChild){ 
        document.getElementById("displayList").removeChild(document.getElementById("displayList").firstChild); 
    }

    let nameOfPokemon = document.getElementById("pokeName").value;
    for(let i = 0; i < nodeList.length; i++){
        if(nodeList.item(i).children.item(0).textContent.toLowerCase().split(" ")[1].trim().includes(nameOfPokemon.toLowerCase()) && nameOfPokemon != ""){
            let listElement = nodeList.item(i).cloneNode(true);
            document.getElementById("displayList").appendChild(listElement);
        }
    }
}

function numResults(){

    while (document.getElementById("displayList").firstChild){ 
        document.getElementById("displayList").removeChild(document.getElementById("displayList").firstChild); 
    }

    let nameOfPokemon = document.getElementById("pokeNum").value;
    for(let i = 0; i < nodeList.length; i++){
        if(nodeList.item(i).children.item(0).textContent.toLowerCase().split(" ")[0].trim().includes(nameOfPokemon.toLowerCase()) && nameOfPokemon != ""){
            let listElement = nodeList.item(i).cloneNode(true);
            document.getElementById("displayList").appendChild(listElement);
        }
    }
}