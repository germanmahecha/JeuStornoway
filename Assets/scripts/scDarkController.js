#pragma strict

private var rigidBody2D:Rigidbody2D;
private var saut:boolean=false;
public var vitessePerso:float= 5.0;
public var forceSaut:float=500;
public var verifierSol:Transform;
public var sol:LayerMask;
public var dansLeSol:boolean=false;
private var marcheDroit:boolean=true;
public var animateur:Animator;
var course:float=2.0;
private var vies:int=1;


function Start () 
{

	rigidBody2D=GetComponent.<Rigidbody2D>();
	animateur=GetComponent.<Animator>();

}

function Update ()
{

	if(Input.GetKeyDown(KeyCode.Space))
	{
		saut= true;
	}

}

function FixedUpdate ()
{

	var horizontal:float= Input.GetAxis("Horizontal");
	var courrir=1;

	if(Input.GetKey(KeyCode.LeftControl))
	{
		courrir=course;	
		animateur.SetBool("course", true);
	}else{
		animateur.SetBool("course", false);
	}

	if(Input.GetKey(KeyCode.LeftAlt))
	{			
		animateur.SetBool("casser", true);
	}else{
		animateur.SetBool("casser", false);
	}

	rigidBody2D.velocity.x= horizontal * vitessePerso*courrir;

	animateur.SetFloat("vitessePerso", Mathf.Abs(horizontal));

	if(marcheDroit && horizontal < 0 )
	{
		Tourner();
	}
	else if(!marcheDroit && horizontal > 0)
	{
		Tourner();
	}

	if(Physics2D.OverlapCircle(verifierSol.position, 0.1, sol))
	{
		dansLeSol=true;
	}else{
		dansLeSol=false;
	}

	animateur.SetBool("saut", !dansLeSol);

	if(saut && dansLeSol)
	{
		rigidBody2D.AddForce(new Vector2(0, forceSaut));
		saut= false;
	}
}

function Tourner ()
 {
	marcheDroit = !marcheDroit;
	transform.localScale.x *= -1;

}

function OnTriggerEnter2D(other: Collider2D)
{
	vies--;
		
	if(vies == 0){
		animateur.SetBool("mort", true);
	}else{
		animateur.SetBool("mort", false);
	}
}