const pokemon = ["","Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate"];
const type = ["","Grass/Poison","Grass/Poison","Grass/Poison","Fire","Fire","Fire/Flying","Water","Water","Water","Bug","Bug","Bug/Flying","Bug/Poison","Bug/Poison","Bug/Poison","Flying/Normal","Flying/Normal","Flying/Normal","Normal","Normal"];
const evolutionStage = ["","1","2","3","1","2","3","1","2","3","1","2","3","1","2","3","1","2","3","1","2"];
const furtherEvo = ["","Ivysaur","Venusaur","N/A","Charmeleon","Charizard","N/A","Wartortle","Blastoise","N/A","Metapod","Butterfree","N/A","Kakuna","Beedrill","N/A","Pidgeotto","Pidgeot","Raticate","N/A"];

function searchPokemonNum(){
    var num = document.getElementById("pokeNum").value;
    var alertmsg = new String("Search Results");
    var counter = 0;
    for(var i = 1; i <= 20; i++){
        var input = i.toString();
        var pokeId = pad(i);
        if(input.includes(num) && counter < 6){
            alertmsg = alertmsg + ("\n" + pokemon[i] + "(#" + pokeId + ")\tType: " + type[i] + " \tEvolution Stage: " + evolutionStage[i] + "\tFurther Evolution: " + furtherEvo[i]);
            counter++;
        }
    }

    alert(alertmsg);
    
}

function searchPokemonName(){
    
}

function pad(number) {
   
    var str = '' + number;
    while (str.length < 3) {
        str = '0' + str;
    }
   
    return str;

}