#pragma strict
//Source: jonathanmartel.info/?p=613

enum DirectionPlateforme{Verticale,Horizontale};
public var direction:DirectionPlateforme;
public var deplacementMin:float = 1;
public var deplacementMax:float = 1;
public var tempsDeplacement:float = 1;
private var deltaDeplacement:float;
private var posInitiale:float;
public var dark:GameObject;
function Start () {
	deltaDeplacement=deplacementMin + deplacementMax;

	if(direction==DirectionPlateforme.Verticale)
	{
		posInitiale = this.transform.position.y;	
	}
	else if(direction==DirectionPlateforme.Horizontale)
	{
		posInitiale = this.transform.position.x;	

	}

}

function Update () {
	var deplacement = Mathf.PingPong(Time.time*deltaDeplacement/tempsDeplacement, deltaDeplacement) + (posInitiale - deplacementMin);
	if(direction==DirectionPlateforme.Verticale)
	{
		transform.position.y=deplacement;	
	}
	else if(direction==DirectionPlateforme.Horizontale)
	{
		transform.position.x=deplacement;	

	}

}

function OnTriggerEnter2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
		dark.transform.parent = this.transform;
}

function OnTriggerExit2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
		dark.transform.parent = null;
}

