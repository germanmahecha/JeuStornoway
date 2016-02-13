#pragma strict

//Function Trigger qui detecte une collision entre le sol et une stalactite
function OnCollisionEnter2D(other:  Collision2D){
	if(other.gameObject.tag == "stalactite"){
		Destroy(other.gameObject);//Destruction d'une stalactite
	}
}