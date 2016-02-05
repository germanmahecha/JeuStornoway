/* Volumne/Retourner à l'ecran_accueil

Source de son:
Multimédia Button Click 006
Auteur: mckinneysound's
http://www.freesfx.co.uk/rx2/mp3s/2/2690_1329133083.mp3
*/
private var son:AudioSource;

function Start()
{

   son=GetComponent.<AudioSource>();

}

function Menu()
{
   son.Play();
   Application.LoadLevel("Menu");

}