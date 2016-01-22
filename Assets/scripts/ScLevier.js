#pragma strict
public var porte_barre:GameObject;


function Start () {



}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
	{
	//Debug.Log("Entre");
	Destroy(porte_barre);


	}

}