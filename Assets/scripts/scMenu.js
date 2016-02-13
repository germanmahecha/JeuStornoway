/*
 Démarrer l'écran de Niveaux/Options/Instructions
Source de son:
Multimédia Button Click 006
Auteur: mckinneysound's
http://www.freesfx.co.uk/rx2/mp3s/2/2690_1329133083.mp3
*/
private var son:AudioSource;

function Start(){
	son=GetComponent.<AudioSource>();
}

function Awake(){
	DontDestroyOnLoad (transform.gameObject);
}

//Function pour active l'escène Menu Niveaux
function StartJouer(){
    son.Play();
    Application.LoadLevel("MenuNiveaux");
}
//Function pour active l'escène Menu Options
function StartOptions(){
    son.Play();
    Application.LoadLevel("MenuOptions");
}
//Function pour active l'escène Menu Instructions
function StartInstruction(){
    son.Play();
    Application.LoadLevel("MenuInstructions");
}
