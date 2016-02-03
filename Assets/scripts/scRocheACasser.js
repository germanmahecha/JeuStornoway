#pragma strict

public var roche2 : GameObject;
public var roche3 : GameObject;
public var diamant: GameObject;

private var gamectrl:GameCtrl;

function Awake (){

	gamectrl = GameObject.FindGameObjectWithTag("GameCtrl").GetComponent(GameCtrl);
}

function Start () {

}

function Update () {
		
	
}

function OnCollisionEnter2D(other:  Collision2D){

	if(other.gameObject.tag == "Dark")
	{				
		gamectrl.vieRoche--; 

		if(gamectrl.vieRoche == 2){
			var newRoche:GameObject=Instantiate(roche2,new Vector3(transform.position.x,transform.position.y,transform.position.z),transform.rotation); 
		}
		if(gamectrl.vieRoche == 1){
			var newRoche2:GameObject=Instantiate(roche3,new Vector3(transform.position.x,transform.position.y,transform.position.z),transform.rotation); 
		}	
		if(gamectrl.vieRoche == 0){
			Destroy(GameObject.Find("3_pierre_casser(Clone)"));
			Destroy(GameObject.Find("2_pierre_casser 1(Clone)"));
			Destroy(gameObject);
			var newDiamant:GameObject=Instantiate(diamant,new Vector3(transform.position.x+0.1,transform.position.y+0.1,transform.position.z),transform.rotation);
		}	 		 			
	}
}

