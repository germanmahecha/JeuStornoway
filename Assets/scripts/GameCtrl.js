#pragma strict

public var nbDiamants:int= 0;
public var nbRubis:int= 0;
public var nbMaxDiamants:int= 10;
public var nbMaxRubis:int= 20;
public var dynamite:boolean=false;

public var diamants: UnityEngine.UI.Text;
public var rubis: UnityEngine.UI.Text;

function Start () {

}

function Update () {

	rubis.text= "Rubis: " + nbRubis.ToString() + "/"+nbMaxRubis;
	diamants.text= "Diamants: " + nbDiamants.ToString() + "/" +nbMaxDiamants;
}