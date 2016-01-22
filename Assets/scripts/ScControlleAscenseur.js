#pragma strict
//internal var animator:Animator;
public var animateur:Animator;
public var dark:GameObject;
public var ascenseur_ferme:GameObject;
//public var ascenseur:GameObject;


// Variable qui contient le script du GameCtrl;



function Start () {


	animateur=GetComponent.<Animator>();

}

function Update () {
	
}

//GetComponent.<Animator>().enabled = false;


ascenseur_ferme.SetActive (false);
function OnTriggerEnter2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
	{
	//Debug.Log("Entre");
		animateur.SetBool("Enter", true);
		//animateur.SetBool("sort", true);
		dark.transform.parent = this.transform;
		ascenseur_ferme.SetActive (true);

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






