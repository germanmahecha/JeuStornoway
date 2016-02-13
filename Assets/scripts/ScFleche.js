#pragma strict

public var fleche:GameObject;
fleche.SetActive (false);

//Function Trigger qui detecte une collision avec le personnage
//pour montrer une fleche
function OnTriggerEnter2D(other: Collider2D){
	if(other.gameObject.tag=='Dark'){
		fleche.SetActive (true);
	}
}
//Function Trigger pour désantiver la fleche 
function OnTriggerExit2D(other: Collider2D){
	if(other.gameObject.tag == 'Dark'){  
	    fleche.SetActive (false);
	}
}