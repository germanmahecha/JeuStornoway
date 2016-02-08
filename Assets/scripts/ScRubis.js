#pragma strict

// Variable qui contient le script du GameCtrl;

private var gamectrl:GameCtrl;
function Awake (){

	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D)
{
	if(other.gameObject.tag=='Dark')
	{
		gamectrl.nbRubis++;
		gamectrl.nbMaxRubis--;
		//Debug.Log('Rubis');
		Destroy(this.gameObject);
	}
}