#pragma strict

// Variable qui contient le script du GameCtrl;

private var darkctrl:scDarkController;
function Awake (){

	darkctrl = GameObject.FindGameObjectWithTag("Dark").GetComponent(scDarkController);
}

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D)
{
	if(other.gameObject.tag=='Dark')
	{
		darkctrl.vies++;
		//Debug.Log('vie');
		Destroy(this.gameObject);
	}
}