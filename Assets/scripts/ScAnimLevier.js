#pragma strict
public var animateur:Animator;

function Start () {
	animateur=GetComponent.<Animator>();
}

//Function Trigger qui detecte une collision avec le personnage
//pour activer l'animation du levier
function OnTriggerEnter2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')	{
		animateur.SetBool("enter", true);
	}
}