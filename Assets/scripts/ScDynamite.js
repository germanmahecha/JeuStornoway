#pragma strict

// Variable qui contient le script du GameCtrl;
private var gamectrl:GameCtrl;
function Awake (){
// Initialisation de la variable Game Control
	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}

//Function Trigger qui detecte une collision avec le personnage
//pour ramasser la dynamite
function OnTriggerEnter2D(other: Collider2D){
	if(other.gameObject.tag=='Dark'){
		gamectrl.dynamite=true;
		Destroy(this.gameObject);//destruction de la dynamite
	}
}