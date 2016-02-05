#pragma strict

public var fleche:GameObject;

fleche.SetActive (false);

function OnTriggerEnter2D(other: Collider2D)
{
	if(other.gameObject.tag=='Dark')
	{
		fleche.SetActive (true);
	}
}

function OnTriggerExit2D(other: Collider2D	)
{
	if(other.gameObject.tag == 'Dark')
	{  
	    fleche.SetActive (false);
	}

}