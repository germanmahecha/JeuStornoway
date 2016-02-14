#pragma strict

public var PreFabRoche:Rigidbody2D; // Prefab à instancier 
private var genererRoche:boolean=true;

// Variable qui contient le script du GameCtrl;
private var gamectrl:GameCtrl;

function Awake (){
	// Initialisation de la variable Game Control
	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}

function Update () {
	if(genererRoche==true)	{			
		Generer();
	}	
}

//Function pour créer roches chaque 5 secondes
function Generer() {
	genererRoche=false;
	yield WaitForSeconds(5);
	var newRoche:Rigidbody2D=Instantiate(PreFabRoche,new Vector3(transform.position.x,transform.position.y,0),transform.rotation); 
	genererRoche=true;	
}