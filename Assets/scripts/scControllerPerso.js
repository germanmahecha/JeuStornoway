#pragma strict

private var vies : int = 2;
public var animator : Animator;
public var axisH:float;
public var forceSaute = 600f;
private var dansLeSol:boolean = true;
public var verifierSol: Transform;
private var verifierRadius:float=0.07f;
public var masqueSol:LayerMask;
private var doubleSaute:boolean=false;
public var vitessePerso: float=10f;

function Start () {	
	
	animator = GetComponent.<Animator>();
}

function FixedUpdate(){
	
	dansLeSol = Physics2D.OverlapCircle(verifierSol.position,verifierRadius,masqueSol);
	if(dansLeSol){
		doubleSaute=false;
	}
}

function Update () {
		
	axisH=Input.GetAxis("Horizontal");
		
	if(axisH > 0.1)
	{		
		GetComponent.<Rigidbody2D>().velocity = new Vector2(vitessePerso, GetComponent.<Rigidbody2D>().velocity.y);
    	animator.SetFloat("Marche",axisH); 
    } 
    
    if(axisH < 0.1)
	{     
    	animator.SetFloat("Marche",axisH); 
    } 
    
    if(Input.GetKey(KeyCode.LeftControl)&& axisH > 0.1){    	
    	
    	GetComponent.<Rigidbody2D>().velocity = new Vector2(vitessePerso+5, GetComponent.<Rigidbody2D>().velocity.y);
    	animator.SetBool("Courrir",true); 
    }
    
    if(!Input.GetKey(KeyCode.LeftControl)){
    	animator.SetBool("Courrir",false); 
    }
    
    if(Input.GetKey(KeyCode.LeftAlt)){    	
    	
    	animator.SetBool("Casser",true); 
    }
    
    if(!Input.GetKey(KeyCode.LeftAlt)){    	
    	
    	animator.SetBool("Casser",false); 
    }
    
    if((dansLeSol || !doubleSaute) && Input.GetKeyDown ("space")){   
    
     	GetComponent.<Rigidbody2D>().velocity = new Vector2(GetComponent.<Rigidbody2D>().velocity.x, forceSaute);    	
    	if(!doubleSaute && !dansLeSol){
    		doubleSaute=true;
    	}
    	animator.SetBool("Saut",true); 
    }
    
    if(!Input.GetKeyDown ("space")){    	
    	
    	animator.SetBool("Saut",false); 
    }
    
    if(axisH > 0.1 && Input.GetKeyDown ("space") ){
        	
    	animator.SetBool("Saut",true);    	
    }
    
    if(Input.GetKey(KeyCode.LeftControl)&& Input.GetKeyDown ("space") ){    	
    	
    	animator.SetBool("Saut",true); 
    }
		
}

function OnTriggerEnter2D(other: Collider2D) {
		animator.SetBool("Toucher",true); 
		vies--;
		Debug.Log(vies);
		if(vies == 0){
			animator.SetBool("Mort",true);
		}
	}