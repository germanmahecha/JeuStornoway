#pragma strict

public var PreFabRoche:Rigidbody2D;
private var genererRoche:boolean=true;

// Variable qui contient le script du GameCtrl;

private var gamectrl:GameCtrl;

function Awake (){

	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}

function Start () {

	if(genererRoche==true)
	{			
		Generer();
	}	
}

function Update () {

}


function Generer()   
{
	
	genererRoche=false; // va a arreter la fonction jusqu'a le seconde suivante 
	yield WaitForSeconds(5);
	var newRoche:Rigidbody2D=Instantiate(PreFabRoche,new Vector3(-139.44,5.0,0),transform.rotation); 
	genererRoche=true;	
			
}

function OnTriggerEnter2D(other: Collider2D)
{
	if(other.gameObject.tag=='Dark')
	{
		gamectrl.viesDark--;

	}
}