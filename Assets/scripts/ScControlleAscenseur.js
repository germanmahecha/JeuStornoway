#pragma strict
//internal var animator:Animator;
public var animateur:Animator;
public var dark:GameObject;
public var ascenseur_ferme_droite:GameObject;
public var ascenseur_ferme_gauche:GameObject;
public var son_ascenseur:AudioSource;
var volume:float;

function Start () {
	animateur=GetComponent.<Animator>();
}

ascenseur_ferme_droite.SetActive (false);
ascenseur_ferme_gauche.SetActive (false);

//Function Trigger qui detecte les collision avec le personnage
//pour lui attacher à l'ascenseur
function OnTriggerEnter2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark'){
		son_ascenseur.Play();
		animateur.SetBool("Enter", true);
		dark.transform.parent = this.transform;
		ascenseur_ferme_droite.SetActive (true);
		ascenseur_ferme_gauche.SetActive (true);
	}
}

//Function Trigger pour détacher le personnages de l'ascenseur
function OnTriggerExit2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark'){
		dark.transform.parent = null;
	}
}
//Function pour ouvrir les portes de lascenseur
function desactiver_portes_ascenseur(){
		ascenseur_ferme_droite.SetActive (false);
		ascenseur_ferme_gauche.SetActive (false);
}










