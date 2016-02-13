#pragma strict

// Variable qui contient le script du GameCtrl;
private var gamectrl:GameCtrl;

function Awake (){
// Initialisation de la variable Game Control
	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}

//Function Trigger qui detecte une collision avec le personnage
//pour ajouter un objet ramassé à la variable nombre de rubis
function OnTriggerEnter2D(other: Collider2D){
	if(other.gameObject.tag=='Dark'){
		gamectrl.nbRubis++;
		Destroy(this.gameObject);//destruction des rubis
	}
}