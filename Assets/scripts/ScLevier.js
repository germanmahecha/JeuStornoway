#pragma strict
public var porte_barre:GameObject;
public var porte_droite:GameObject;
public var porte_gauche:GameObject;



function Start () {



}

function Update () {

}


porte_droite.SetActive (true);
porte_gauche.SetActive (true);


function OnTriggerEnter2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
	{
	//Debug.Log("Entre");
	Destroy(porte_barre);
	porte_droite.SetActive (false);
	porte_gauche.SetActive (false);




	}



}



