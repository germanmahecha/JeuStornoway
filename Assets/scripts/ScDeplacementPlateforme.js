#pragma strict
public var vitessePlat:float = 3.0;
public var direction:int =1;
function Start () {
	
}

function Update () {
	this.transform.position.x+=vitessePlat*direction*Time.deltaTime;
}

function OnTriggerEnter2D(other: Collider2D	){
	//Debug.Log("Touche");
	direction *= -1;
}
