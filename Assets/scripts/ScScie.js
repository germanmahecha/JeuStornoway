#pragma strict

// Variable qui contient le script du GameCtrl;

private var gamectrl:GameCtrl;
public var ouch:AudioSource;

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
		ouch.Play();
		gamectrl.viesDark--;
	}
}