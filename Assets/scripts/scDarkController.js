#pragma strict

//Variables du perso

private var rigidBody2D:Rigidbody2D;
private var saut:boolean=false;
public var vitessePerso:float= 5.0; // vitesse du perso
public var forceSaut:float=500; // force saut
public var verifierSol:Transform; //détécter le sol
public var sol:LayerMask; // assigner un layer au sol
public var dansLeSol:boolean=false; // vérifier si le perso et au sol.
private var marcheDroit:boolean=true; // Détecter si le perso marche à droit
public var animateur:Animator; // animateur du perso
var course:float=2;	// vitesse de la course
public var force:int=10; //force du perso
private var doubleSaute:boolean=false; // Permettre double saut
public var diamant_son:AudioSource; // son du diamant
public var ouch:AudioSource; // son toucher
public var rubis_son:AudioSource; // son rubis
public var sonViesDark:AudioSource; // son vie dark
public var sonSautDark:AudioSource; // son saute du perso
public var pique:GameObject;

private var gamectrl:GameCtrl; // variable gameControl

function Awake (){
	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}


function Start () {
	rigidBody2D=GetComponent.<Rigidbody2D>();
	animateur=GetComponent.<Animator>();
	pique.active = false;
}

function FixedUpdate (){

	//Détecter si le perso est au sol

	dansLeSol = Physics2D.OverlapCircle(verifierSol.position, 0.1, sol); 
	if(dansLeSol){
		doubleSaute=false;
		animateur.SetBool("dansLeSol",true);
	}else{
		animateur.SetBool("dansLeSol",false);
	}

	//Assigner la direction de déplacément du perso

	var horizontal:float= Input.GetAxis("Horizontal");

	var courrir=1; // assigner la vittese de la course

	//Le perso court lorsque la touche z est enfoncée

	if(Input.GetKey("z") && horizontal){
		courrir=course*vitessePerso;	
		animateur.SetBool("course", true); //Déclancher l'animation de course
	}else{
		animateur.SetBool("course", false); // Désactiver la animation de course
	}

	//Le perso pique lorsque la touche x est enfoncée

	if(Input.GetKey("x") && !horizontal){
		pique.active = true;		
		animateur.SetBool("casser", true); //Déclancher l'animation de piquer
	}else{
		animateur.SetBool("casser", false); // Désactiver la animation de piquer
		pique.active = false;
	}

	rigidBody2D.velocity.x= horizontal * vitessePerso*courrir;

	animateur.SetFloat("vitessePerso", Mathf.Abs(horizontal));

	//Direction de marche du perso

	if(marcheDroit && horizontal < 0 ){
		Tourner();
	}
	else if(!marcheDroit && horizontal > 0){
		Tourner();
	}

	//Vérifier si le perso est au sol

	if(Physics2D.OverlapCircle(verifierSol.position, 0.1, sol)){
		dansLeSol=true;
	}else if(Physics2D.OverlapCircle(verifierSol.position, 0.1, sol)){		
		dansLeSol=false;
	}

	//Déclancher l'animation pour le double saut

	animateur.SetBool("saut", !dansLeSol);

	if(saut && dansLeSol){
		rigidBody2D.AddForce(new Vector2(0, forceSaut));
		saut= false;
	}
	//Si Dark perds toutes les vies, il retourne au menu des niveaux
	if(gamectrl.viesDark == 0){		
		animateur.SetBool("mort", true);
	}
}


function Update ()
{
	//Sauter lorsque la touche space est énfoncée

	if((dansLeSol || !doubleSaute) && Input.GetKeyDown(KeyCode.Space))
	{
		GetComponent.<Rigidbody2D>().velocity = new Vector2(GetComponent.<Rigidbody2D>().velocity.x, forceSaut);    	
    	if(!doubleSaute && !dansLeSol){
    		doubleSaute=true;
    		sonSautDark.Play();
    	}
    	animateur.SetBool("saut",true);
		saut= true;
		sonSautDark.Play();
	}

	if(!Input.GetKeyDown ("space")){
	   	animateur.SetBool("saut",false); 
    	saut= false;
    }
}

//Faire tourner le perso à gauche

function Tourner (){
	marcheDroit = !marcheDroit;
	transform.localScale.x *= -1;
}

//Détecter les trigger entre le perso et les objects de l scene de jeu

function OnTriggerEnter2D(other: Collider2D)
{
	if(other.gameObject.tag=='Scie')	{		
		animateur.SetBool("toucher", true);
		yield WaitForSeconds(0.09);
		transform.position.x-= 1;
	}

	if(other.gameObject.tag=='Roche'){	
		ouch.Play();	
		animateur.SetBool("toucher", true);
		yield WaitForSeconds(0.09);
		Destroy(other.gameObject);
		yield WaitForSeconds(0.05);
		animateur.SetBool("toucher", false);
	}

	if(other.gameObject.tag=='returnPosition'){		
		gamectrl.viesDark--;
	}

	if(other.gameObject.tag=='stalactite_2d'){	
		//son quand la stalactite touch le perso
		ouch.Play();	
		animateur.SetBool("toucher", true);
		yield WaitForSeconds(0.09);
		Destroy(other.gameObject);
		yield WaitForSeconds(0.05);
		animateur.SetBool("toucher", false);
	}

	//son diamant
	if(other.gameObject.tag=='Diamant'){		
		diamant_son.Play();
	}

	if(other.gameObject.tag=='Rubis'){		
		rubis_son.Play();
	}
	if(other.gameObject.tag=='Casque'){
		sonViesDark.Play();
	}

	/*if(other.gameObject.tag == "FinTuto"){		
		gamectrl.gagnant=true;			
	}*/

	if(other.gameObject.tag == "FinTuto"){		
		Application.LoadLevel(2);
			 			
	}

	//Enregistrer la position de dark
	if(other.gameObject.tag == "enregistrerPosition"){		
		//Enregistre les positions de Dark dans le niveau tutoriel
		if(gamectrl.niveauActive==4){
			PlayerPrefs.SetFloat('positionxNT',transform.position.x);
			PlayerPrefs.SetFloat('positionyNT',transform.position.y);
		} 
		//Enregistre les positions de Dark dans le niveau 1
		if(gamectrl.niveauActive==5){
			PlayerPrefs.SetFloat('positionxN1',transform.position.x);
			PlayerPrefs.SetFloat('positionyN1',transform.position.y);
		}
		//Enregistre les positions de Dark dans le niveau 2
		if(gamectrl.niveauActive==6){
			PlayerPrefs.SetFloat('positionxN2',transform.position.x);
			PlayerPrefs.SetFloat('positionyN2',transform.position.y);
		}	 		 			
	}


	//Return Dark à une position anterieur
	if(other.gameObject.tag == "returnPosition"){		
		//Return Dark à une position anterieur dans le niveau tutoriel
		if(gamectrl.niveauActive==4){
			transform.position.x=PlayerPrefs.GetFloat('positionxNT');
			transform.position.y=PlayerPrefs.GetFloat('positionyNT');
		}
		//Return Dark à une position anterieur dans le niveau 1
		if(gamectrl.niveauActive==5){
			transform.position.x=PlayerPrefs.GetFloat('positionxN1');
			transform.position.y=PlayerPrefs.GetFloat('positionyN1');
		}
		//Return Dark à une position anterieur dans le niveau 2
		if(gamectrl.niveauActive==6){
			transform.position.x=PlayerPrefs.GetFloat('positionxN2');
			transform.position.y=PlayerPrefs.GetFloat('positionyN2');
		}	 		 			
	}
}

function OnTriggerExit2D(other: Collider2D) {
	if(other.gameObject.tag=='Scie'){
		animateur.SetBool("toucher", false);
	}

	if(other.gameObject.tag=='stalactite_2d'){		
		animateur.SetBool("toucher", false);
	}

	if(other.gameObject.tag=='Roche')	{		
		animateur.SetBool("toucher", false);
	}
}

