#pragma strict
public var porte_barre:GameObject;
public var porte_droite:GameObject;
public var porte_gauche:GameObject;
public var non_message:GameObject;
public var son_levier:AudioSource;
var volume:float;

porte_droite.SetActive (true);
porte_gauche.SetActive (true);

function OnTriggerEnter2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
	{
		son_levier.Play();
		Destroy(porte_barre);
		porte_droite.SetActive (false);
		porte_gauche.SetActive (false);
		non_message.SetActive (false);
	}
}
//Function Trigger qui detecte une collision avec le personnage
//pour activer le son du levier
function OnTriggerExit2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark'){
		son_levier.volume=0;
	}
}



