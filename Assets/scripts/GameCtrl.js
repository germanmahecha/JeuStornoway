#pragma strict

public var nbDiamants:int= 0;
public var nbRubis:int= 0;
public var nbMaxDiamants:int= 10;
public var nbMaxRubis:int= 20;
public var viesDark:int=1;
public var dynamite:boolean=false;
public var diamants: UnityEngine.UI.Text;
public var rubis: UnityEngine.UI.Text;
public var vies: UnityEngine.UI.Text;

function Start () {

}

function Update () {

	rubis.text= nbRubis.ToString() + "/"+nbMaxRubis;
	diamants.text= nbDiamants.ToString() + "/" +nbMaxDiamants;
	vies.text= viesDark .ToString();

}