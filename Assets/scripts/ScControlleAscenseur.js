﻿#pragma strict
//internal var animator:Animator;
public var animateur:Animator;
public var dark:GameObject;
public var ascenseur_ferme_droite:GameObject;
public var ascenseur_ferme_gauche:GameObject;




// Variable qui contient le script du GameCtrl;



function Start () {


	animateur=GetComponent.<Animator>();

}

function Update () {
	
}




ascenseur_ferme_droite.SetActive (false);
ascenseur_ferme_gauche.SetActive (false);
function OnTriggerEnter2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
	{
	Debug.Log("Entre");
		animateur.SetBool("Enter", true);
		//animateur.SetBool("sort", true);
		dark.transform.parent = this.transform;
		ascenseur_ferme_droite.SetActive (true);
		ascenseur_ferme_gauche.SetActive (true);
	}


}

function OnTriggerExit2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
	{
	//Debug.Log("Entre");
		//animateur.SetBool("Enter", true);
		//animateur.SetBool("sort", true);
		dark.transform.parent = null;


	}


}

function desactiver_portes_ascenseur(){
		ascenseur_ferme_droite.SetActive (false);
		ascenseur_ferme_gauche.SetActive (false);
}










