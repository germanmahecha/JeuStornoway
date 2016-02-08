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


function Awake(){
	niveauActive=Application.loadedLevel;
	PlayerPrefs.SetFloat('maxDiamants',nbMaxDiamants);
	PlayerPrefs.SetFloat('maxRubis',nbMaxRubis);
}
function Start () {
	dynamite=false;
	dynamiteImage.fillAmount=0;

	nbMaxDiamants = GameObject.FindGameObjectsWithTag("Diamant").length;
	nbMaxRubis = GameObject.FindGameObjectsWithTag("Rubis").length;
}

function Update () {
	
	rubis.text= nbRubis.ToString() + "/"+nbMaxRubis;
	diamants.text= nbDiamants.ToString() + "/" +nbMaxDiamants;
	vies.text= viesDark .ToString();

	//Verification si la dynamite a étét prise
	verificationDynamite();
	//Enregistre la quantite max de diamants et rubis pris par niveau
	switch(niveauActive)
	{
		case 5: PlayerPrefs.SetFloat('diamantsN1',nbDiamants);
				PlayerPrefs.SetFloat('rubisN1',nbRubis);
				break;
		case 6: PlayerPrefs.SetFloat('diamantsN2',nbDiamants);
				PlayerPrefs.SetFloat('rubisN2',nbRubis);
				break;
		default: break;
	}


}
function verificationDynamite(){
	if(dynamite==true)
		dynamiteImage.fillAmount=1;
		
}