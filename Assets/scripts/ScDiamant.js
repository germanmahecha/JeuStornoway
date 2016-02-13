#pragma strict
// Variable qui contient le script du GameCtrl;
private var gamectrl:GameCtrl;

function Awake (){
	// Initialisation de la variable Game Control
	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}

//Function Trigger qui detecte une collision avec les diamants,
//et augmente la variable nombre de diamants dan sle Game Control
function OnTriggerEnter2D(other: Collider2D){
	if(other.gameObject.tag=='Dark'){
		gamectrl.nbDiamants++;
		Destroy(this.gameObject);
	}
}