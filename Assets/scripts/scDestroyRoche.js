#pragma strict

//Function Trigger qui detecte les collision avec les roches
//pour les detruire.
function OnTriggerExit2D(autreObjet:Collider2D){
	if(autreObjet.gameObject.tag=='Roche'){
		Destroy(autreObjet.gameObject);	
	}
}