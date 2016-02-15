 #pragma strict

public var nbDiamants:int= 0;
public var nbRubis:int= 0;
public var nbMaxDiamants:int;
public var nbMaxRubis:int;
public var viesDark:int=5;
public var dynamite:boolean=false;
public var dynamiteImage:UnityEngine.UI.Image;
public var diamants: UnityEngine.UI.Text;
public var rubis: UnityEngine.UI.Text;
public var vies: UnityEngine.UI.Text;
public var vieRoche:int=3;
public var niveauActive:int=1;
private var perdu:boolean=false;
public var gagnant:boolean=false;
public var panneauGagnant:GameObject;
public var panneauPerdant:GameObject;
public var panneauPause:GameObject;

function Awake(){
	nbMaxDiamants = GameObject.FindGameObjectsWithTag("Diamant").length;
	nbMaxRubis = GameObject.FindGameObjectsWithTag("Rubis").length;
	PlayerPrefs.SetFloat('maxDiamants',nbMaxDiamants);
	PlayerPrefs.SetFloat('maxRubis',nbMaxRubis);
}
function Start () {
	dynamite=false;
	perdu=false;
	dynamiteImage.fillAmount=0;
	panneauGagnant.SetActive(false);
	panneauPerdant.SetActive(false);
	panneauPause.SetActive(false);

}

function Update () {
	niveauActive=Application.loadedLevel;

	//Variables texte pour l'interface (Canvas)
	rubis.text= nbRubis.ToString() + " / "+nbMaxRubis;
	diamants.text= nbDiamants.ToString() + " / " +nbMaxDiamants;
	vies.text= viesDark.ToString();

	//Validation pour activer le panneau perdant
	if(viesDark==0&&!perdu){
		PanneauPerdant();
		perdu=true;
	}
	//Validation pour activer le panneau gagnant
	if(gagnant){
		PanneauGagnant();
		gagnant=false;
	}

	//Verification si la dynamite a étét prise
	verificationDynamite();
	//Enregistre la quantite max de diamants et rubis pris par niveau
	switch(niveauActive){
		case 5: PlayerPrefs.SetFloat('diamantsN1',nbDiamants);
				PlayerPrefs.SetFloat('rubisN1',nbRubis);
				break;
		case 6: PlayerPrefs.SetFloat('diamantsN2',nbDiamants);
				PlayerPrefs.SetFloat('rubisN2',nbRubis);
				break;
		default: break;
	}


}

//Function pour la detection et changement d'etat de l'image de la dynamite sur la interface.
function verificationDynamite(){
	if(dynamite==true)
		dynamiteImage.fillAmount=1;	
}

//Function pour activer et désactiver le panneau pause
function PanneauPause(){
	if(Time.timeScale==1){
		panneauPause.SetActive(true);
		Time.timeScale=0;
	}else if(Time.timeScale==0){
		Time.timeScale=1;
		panneauPause.SetActive(false);
	}
}

//Function pour activer le panneau perdant et active le Menu Niveaux
function PanneauPerdant(){
	if(Time.timeScale==1){
		panneauPerdant.SetActive(true);
		Time.timeScale=0;
	}else if(Time.timeScale==0){
		Time.timeScale=1;
		Application.LoadLevel(2);
	}
}

//Function pour activer le panneau gagnant et active le Menu Niveaux
function PanneauGagnant(){
	if(Time.timeScale==1){
		panneauGagnant.SetActive(true);
		Time.timeScale=0;
	}else if(Time.timeScale==0){
		Time.timeScale=1;
		Application.LoadLevel('MenuNiveaux');
	}
}