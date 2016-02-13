#pragma strict


public var message:GameObject;
public var bouton_ascenseur:AudioSource;

message.SetActive (false);

//Function Trigger qui detecte une collision avec le personnage
//activer un message à cote de l'ascenseur.
function OnTriggerEnter2D(other: Collider2D){
	if(other.gameObject.tag=='Dark'){
		bouton_ascenseur.Play();
		message.SetActive (true);
	}
}

//Function Trigger qui désactive le message à cote de l'ascenseur.
function OnTriggerExit2D(other: Collider2D){
	if(other.gameObject.tag == 'Dark'){
		message.SetActive (false);
	}
}