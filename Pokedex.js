//Declaring information of all pokemon
const pokemon = ["","Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate"];
const type = ["","Grass/Poison","Grass/Poison","Grass/Poison","Fire","Fire","Fire/Flying","Water","Water","Water","Bug","Bug","Bug/Flying","Bug/Poison","Bug/Poison","Bug/Poison","Flying/Normal","Flying/Normal","Flying/Normal","Normal","Normal"];
const evolutionStage = ["","1","2","3","1","2","3","1","2","3","1","2","3","1","2","3","1","2","3","1","2"];
const furtherEvo = ["","Ivysaur","Venusaur","Max","Charmeleon","Charizard","Max","Wartortle","Blastoise","Max","Metapod","Butterfree","Max","Kakuna","Beedrill","Max","Pidgeotto","Pidgeot","Max","Raticate","Max"];

function searchPokemonNum(){ //search code through number
    var num = document.getElementById("pokeNum").value; //gets user input
    var alertmsg = new String(); //creates new string for alert
    var counter = 0; //declares counter to keep rack of results
    for(var i = 1; i <= 20; i++){ //iterates through all pokemon
        var input = i.toString(); //turns input number to string
        var pokeId = pad(i); //turns number to #00X form
        if(input.includes(num) && counter < 6){ //if input number is part of pokedex number
            if(counter===0){ //if this is first pokemon result
                alertmsg = "Search Results"; //add Search Result to alert message
            }
            alertmsg = alertmsg + ("\n" + pokemon[i] + "(#" + pokeId + ")\tType: " + type[i] + " \tEvolution Stage: " + evolutionStage[i] + "\n\t\t\tFurther Evolution: " + furtherEvo[i]); 
            //adds pokemon to alert message every time a pokemon meets requirement
            counter++; //adds 1 to counter to keep track of results
        }
    }

    if(counter===0){ //if no pokemon match search
        alertmsg = "No Results Found, Please Enter a Number Between 1-20"; //number was not in range and requests a different number
    }


    alert(alertmsg); //prints alert message
    
}

function searchPokemonName(){ //search code through name
    var name = document.getElementById("pokeName").value; //gets user input
    var alertmsg = new String(); //creates new string for alert
    var counter = 0; //declares counter to keep track of number of results
    for(var i = 1; i <= 20; i++){ //iterates through all pokemon
        var pokeId = pad(i); //turns pokemon number to #00X form
        if(pokemon[i].toLowerCase().includes(name.toLowerCase) && counter < 6){ //if search containes the same characters as a pokemon
            if(counter===0){ //if pokemon is first result
                alertmsg = "Search Results"; //add Search Results to alert message
            }
            alertmsg = alertmsg + ("\n" + pokemon[i] + "(#" + pokeId + ")\tType: " + type[i] + " \tEvolution Stage: " + evolutionStage[i] + "\n\t\t\tFurther Evolution: " + furtherEvo[i]);
            //adds pokemon to alert message every time a pokemon meets requirement
            counter++; //adds 1 to counter to keep track of results
        }
    }

    if(counter===0){ //if no pokemon match search 
        alertmsg = "No Results Found, Please Only Use A-Z and a-z or Double Check Spelling"; //urges user to double check their input for proper characters and spelling
    }

    alert(alertmsg); //prints alert
}

function pad(number) { //function to turn number into #00X form
   
    var str = '' + number;
    while (str.length < 3) { //ensures max string length of 3
        str = '0' + str; //adds 0 before number
    }
   
    return str; //returns padded number

}