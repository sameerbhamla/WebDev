class SuperHuman {
    
	constructor(name, powerLevel) {
		this.name = name;
		this.powerLevel = powerLevel;
	}
 }
 
 // Define SuperHero and SuperVillain classes here
 class SuperHero extends SuperHuman {
  
	constructor(name,alias, powerLevel) {
	   
		super(name,powerLevel);
		 this.alias=alias;
	}
 }
 
 const heroes = {
	"Super Bacon": new SuperHero("Jack Oinker", "Super Bacon", 2),
	"Flat-Man": new SuperHero("Peter Pranker", "Flat-Man", 5),
	"Mighty Woman": new SuperHero("Diana Dense", "Mighty Woman", 8),
	"Captain Marvelous": new SuperHero("Carol Hangers", "Captain Marvelous", 9)
 }
 
 
 const villains = {
	"The Jokester": new SuperHero("Jack Nastier", "The Jokester", 3),
	"Magnet Man": new SuperHero("Max Eisenhardt", "Magnet Man", 6),
	"Lex Loner": new SuperHero("Lex Loner", "Lex Loner", 2),
	"Thankos": new SuperHero("Thankos", "Thankos", 9)
 }
 
 window.addEventListener("DOMContentLoaded", domLoaded);
 
 function domLoaded() {
	// Detect selection of hero and villain
	document.querySelector("#heroSelect").addEventListener("change", selectionChanged);
	document.querySelector("#villainSelect").addEventListener("change", selectionChanged);
 
	selectionChanged();
 }
 
 function selectionChanged() {
	var selectedHeroValue = document.querySelector("#heroSelect").value;
	var selectedVillainValue = document.querySelector("#villainSelect").value;
 
	// Get hero and villain selected
	var selectedHero = heroes[selectedHeroValue];
	var selectedVillain = villains[selectedVillainValue];
 
	// Your code goes here
	var paragraph = document.getElementById("winner");
 
	if(battle(selectedHero.powerLevel,selectedVillain.powerLevel)){
 
	   paragraph.textContent = selectedHero.alias;
	}else{
	  paragraph.textContent = selectedVillain.alias;
	}
 
 }
 function battle(heroPower,villainPower){
   if(heroPower>=villainPower){
	 return true;
   }else{
	 return false;
   }
 
 }