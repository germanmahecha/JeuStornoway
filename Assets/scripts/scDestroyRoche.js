#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerExit2D(autreObjet:Collider2D) 
{
	if(autreObjet.gameObject.tag=='Roche'){
		Destroy(autreObjet.gameObject);	
	}

}