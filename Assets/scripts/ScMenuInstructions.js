/*
 Démarrer l'écran de Niveaux/niveauTuto/Ecran_accueil

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
//Function pour activer l'escène Menu Niveaux
function StartJouer(){
    son.Play();
    Application.LoadLevel("MenuNiveaux");
}
//Function pour activer l'escène Niveau Tutoriel
function niveau0(){
	son.Play();
	Application.LoadLevel("niveauTuto");
}
//Function pour activer l'escène Menu Accueil
function Menu(){
    son.Play();
    Application.LoadLevel("Menu");
}