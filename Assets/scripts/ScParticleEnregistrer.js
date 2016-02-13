//Son du message - source
//https://www.freesound.org/people/joe93barlow/sounds/78678/
#pragma strict

public var sonParticle:AudioSource;

//Function Trigger qui detecte une collision avec le personnage
//pour faire jouer un son au moment d'un enregistrement de position.
function OnTriggerEnter2D(other:Collider2D){
	if(other.gameObject.tag=='Dark'){
		sonParticle.Play();
	}
}
