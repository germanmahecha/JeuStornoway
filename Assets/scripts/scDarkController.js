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
public var force:int=10;
private var doubleSaute:boolean=false;
private var gamectrl:GameCtrl;

function Awake (){

	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}


function Start () 
{

	rigidBody2D=GetComponent.<Rigidbody2D>();
	animateur=GetComponent.<Animator>();
}

function FixedUpdate ()
{

	dansLeSol = Physics2D.OverlapCircle(verifierSol.position, 0.1, sol);
	if(dansLeSol){
		doubleSaute=false;
		animateur.SetBool("dansLeSol",true);
	}else{
		animateur.SetBool("dansLeSol",false);
	}

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
	}else if(Physics2D.OverlapCircle(verifierSol.position, 0.1, sol)){		
		dansLeSol=false;
	}

	animateur.SetBool("saut", !dansLeSol);

	if(saut && dansLeSol)
	{
		rigidBody2D.AddForce(new Vector2(0, forceSaut));
		saut= false;
	}

	if(gamectrl.viesDark == 0){
			
		animateur.SetBool("mort", true);
		Debug.Log("Mort");
	}
}

function Update ()
{

	if((dansLeSol || !doubleSaute) && Input.GetKeyDown(KeyCode.Space))
	{
		GetComponent.<Rigidbody2D>().velocity = new Vector2(GetComponent.<Rigidbody2D>().velocity.x, forceSaut);    	
    	if(!doubleSaute && !dansLeSol){
    		doubleSaute=true;
    	}
    	animateur.SetBool("saut",true);
		saut= true;
	}

	if(!Input.GetKeyDown ("space")){

    	animateur.SetBool("saut",false); 
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
	if(other.gameObject.tag=='Scie')
	{		
		animateur.SetBool("toucher", true);
		yield WaitForSeconds(0.09);
		transform.position.x-= 1;
	}

	if(other.gameObject.tag=='Roche')
	{		
		animateur.SetBool("toucher", true);

	}

	if(other.gameObject.tag=='stalactite_2d')
	{		
		animateur.SetBool("toucher", true);

	}
}

function OnTriggerExit2D(other: Collider2D) {
	if(other.gameObject.tag=='Scie'){

		animateur.SetBool("toucher", false);

	}

	if(other.gameObject.tag=='stalactite_2d')
	{		
		animateur.SetBool("toucher", false);

	}

	if(other.gameObject.tag=='Roche')
	{		
		animateur.SetBool("toucher", false);

	}
}