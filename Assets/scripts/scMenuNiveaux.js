/*
 Démarrer l'écran Niveau Tuto/Niveau1/Niveau2/Ecran_accueil

Source de son:
Multimédia Button Click 006
Auteur: mckinneysound's
http://www.freesfx.co.uk/rx2/mp3s/2/2690_1329133083.mp3
*/

#pragma strict
public var diamantsN1:UnityEngine.UI.Image;
public var rubisN1:UnityEngine.UI.Image;
public var diamantsN2:UnityEngine.UI.Image;
public var rubisN2:UnityEngine.UI.Image;

private var son:AudioSource;



function Start()
{
	//PlayerPrefs.DeleteAll(); // Pour effacer les PlayerPref pendant le developpement
	diamantsN1.fillAmount=(PlayerPrefs.GetFloat('diamantsN1')/PlayerPrefs.GetFloat('maxDiamants'));
	rubisN1.fillAmount=(PlayerPrefs.GetFloat('rubisN1')/PlayerPrefs.GetFloat('maxRubis'));
	diamantsN2.fillAmount=(PlayerPrefs.GetFloat('diamantsN2')/PlayerPrefs.GetFloat('maxDiamants'));
	rubisN2.fillAmount=(PlayerPrefs.GetFloat('rubisN2')/PlayerPrefs.GetFloat('maxDiamants'));

	son=GetComponent.<AudioSource>();
}


function Awake()
{
    DontDestroyOnLoad (transform.gameObject);

}

function niveau0() 
{
	son.Play();
	Application.LoadLevel("niveauTuto");
}
function niveau1() 
{
	son.Play();
	Application.LoadLevel("Niveau_1");
}
function niveau2() 
{
	son.Play();
	Application.LoadLevel("Niveau_2");
}
function Menu() 
{
	son.Play();
	Application.LoadLevel("Menu");
}
