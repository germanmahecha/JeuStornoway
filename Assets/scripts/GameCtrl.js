#pragma strict

public var viesDiamants:int= 3;
public var viesRubis:int= 3;
public var nbDiamants:int= 0;
public var nbRubis:int= 0;
public var diamants: UnityEngine.UI.Text;
public var rubis: UnityEngine.UI.Text;

function Start () {

}

function Update () {

	rubis.text= "Rubis: " + nbRubis.ToString() + "/45";
	diamants.text= "Diamants: " + nbDiamants.ToString() + "/10";
}