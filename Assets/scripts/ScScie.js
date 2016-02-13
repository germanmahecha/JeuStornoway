#pragma strict

// Variable qui contient le script du GameCtrl;
private var gamectrl:GameCtrl;
public var ouch:AudioSource;

function Awake (){
// Initialisation de la variable Game Control
	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}

//Function Trigger qui detecte une collision avec le personnage
//et lui enleve une vie.
function OnTriggerEnter2D(other: Collider2D){
	if(other.gameObject.tag=='Dark'){
		ouch.Play();
		gamectrl.viesDark--;
	}
}