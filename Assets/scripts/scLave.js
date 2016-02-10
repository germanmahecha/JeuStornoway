#pragma strict

private var gamectrl:GameCtrl;

function Awake (){

	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(other:  Collision2D){

	if(other.gameObject.tag == "Dark"){
		gamectrl.viesDark--;
	}
}