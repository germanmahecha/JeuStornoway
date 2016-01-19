#pragma strict

public var perso: Transform;
public var separation:float =20f;

function Start () {

}

function Update () {

	transform.position = new Vector3(perso.position.x + separation,transform.position.y, transform.position.z);

}