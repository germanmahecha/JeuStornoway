#pragma strict
public var animateur:Animator;

function Start () {
animateur=GetComponent.<Animator>();

}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
	{
	//Debug.Log("hola");

		animateur.SetBool("enter", true);
		//animateur.SetBool("sort", true);


	}

}