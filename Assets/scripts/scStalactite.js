#pragma strict

public var animateur:Animator;
public var estalastite:Rigidbody2D;
private var gamectrl:GameCtrl;
public var son_stalactite:AudioSource;

function Start () {
	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
	animateur=GetComponent.<Animator>();
}

function Update () {

}


function OnTriggerEnter2D(other: Collider2D)
{
	if(other.gameObject.tag=='Dark')
	{
		
		animateur.SetBool("tomber", true);
		yield new WaitForSeconds( Random.Range( 0.08,1 ) );
		estalastite.gravityScale=1;
		son_stalactite.Play();
	}
}