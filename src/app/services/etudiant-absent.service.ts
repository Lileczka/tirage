import { Injectable } from '@angular/core';
import { Class, CLASSES } from 'src/app/class.mock';


@Injectable({
  providedIn: 'root'
})
export class EtudiantAbsentService {

  constructor() { }

  // récupérer la liste 
  public getClass() {

    const Class = localStorage.getItem("etudiant");

    if(Class) {
      return JSON.parse(Class);
    } else {
      this.createClass(); //  une nouvelle
      this.getClass(); //  récupérer la liste 
    }

  }
  //  liste d'étudiants absents vide
  private createClass() {

    const nouveau = JSON.stringify([]);
    localStorage.setItem('etudiant', nouveau);

  }

  // sauvegarder la liste d'étudiants absents 
  private saveClass(etudiant: Class) {
    localStorage.setItem('etudiant', JSON.stringify(etudiant));
    
    
  }

   //  ajouter un étudiant absent à la liste
  public ajoutEtudiant(Absent: Class){
   const etudiant= this.getClass() 
    // Récupération de la liste des étudiants absents
    const fixEtudiant= etudiant.find((etudiant: Class) => etudiant.id==Absent.id); 
    // vérification si l'étudiant est déjà dans la liste
    if (fixEtudiant) {
      console.log("déjà dans la liste des absents"); 
    
      
    }
    else {
      etudiant.push(Absent) 
      // Si l'étudiant n'est pas présent, on l'ajoute à la liste
    }
    this.saveClass(etudiant) 
    // Sauvegarde de la nouvelle liste
  }

  // Sauvegarde de la nouvelle liste
  public enleveElement(idetudiant: number){
    const etudiant = this.getClass() // Récupération de la liste des étudiants absents
    
    etudiant.splice(idetudiant, 1) // On retire l'étudiant de la liste à l'indice donné
    this.saveClass(etudiant); // Sauvegarde de la nouvelle liste
  }


}
