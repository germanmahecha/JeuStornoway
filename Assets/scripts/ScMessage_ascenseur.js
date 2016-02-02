#pragma strict


public var message:GameObject;
public var bouton_ascenseur:AudioSource;

function Start () {

}

function Update () {

}

message.SetActive (false);

function OnTriggerEnter2D(other: Collider2D)
{
	if(other.gameObject.tag=='Dark')
	{
		bouton_ascenseur.Play();
		message.SetActive (true);
	}
}


function OnTriggerExit2D(other: Collider2D	){
	if(other.gameObject.tag == 'Dark')
	{

	message.SetActive (false);

	}

	}