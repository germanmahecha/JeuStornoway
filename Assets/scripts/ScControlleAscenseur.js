#pragma strict
internal var animator:Animator;

function Start () {
	animator=GetComponent(Animator);
}

function Update () {
	
}

function OnTriggerEnter2D(other: Collider2D	){
	Debug.Log("Entre");
	animator.SetBool("Fermer",true);
	animator.SetBool("Arrete",false);
}

function OnTriggerExit2D(other: Collider2D	){
	Debug.Log("Sorti");
	animator.SetBool("Ouvrir",true);
	animator.SetBool("Fermer",false);
	animator.SetBool("Arrete",true);
}
