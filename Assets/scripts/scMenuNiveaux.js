#pragma strict
public var diamantsN1:UnityEngine.UI.Image;
public var rubisN1:UnityEngine.UI.Image;
public var diamantsN2:UnityEngine.UI.Image;
public var rubisN2:UnityEngine.UI.Image;



function Start(){
	//PlayerPrefs.DeleteAll(); // Pour effacer les PlayerPref pendant le developpement
	diamantsN1.fillAmount=(PlayerPrefs.GetFloat('diamantsN1')/PlayerPrefs.GetFloat('maxDiamants'));
	rubisN1.fillAmount=(PlayerPrefs.GetFloat('rubisN1')/PlayerPrefs.GetFloat('maxRubis'));
	diamantsN2.fillAmount=(PlayerPrefs.GetFloat('diamantsN2')/PlayerPrefs.GetFloat('maxDiamants'));
	rubisN2.fillAmount=(PlayerPrefs.GetFloat('rubisN2')/PlayerPrefs.GetFloat('maxDiamants'));
}

function niveau0() {
	Application.LoadLevel("niveauTuto");
}
function niveau1() {
	Application.LoadLevel("Niveau_1");
}
function niveau2() {
	Application.LoadLevel("Niveau_2");
}
function Menu() {
	Application.LoadLevel("Menu");
}
