//Son du message - source
//https://www.freesound.org/people/timmy_h123/sounds/160500/

#pragma strict

public var message:GameObject;
public var sonMessage:AudioSource;

function Awake(){
	message.SetActive(false);
}

//Function pour activer un message quand le personnage touche le collider
function OnTriggerEnter2D(other:Collider2D){
	if(other.gameObject.tag=='Dark')	{
		message.SetActive(true);
		sonMessage.Play();
	}
}
//Function pour désactiver un message quand le personnage laisse de toucer le collider
function OnTriggerExit2D(other:Collider2D){
	if(other.gameObject.tag=='Dark')
		message.SetActive(false);
}