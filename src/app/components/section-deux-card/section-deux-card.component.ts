import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Class, CLASSES } from 'src/app/class.mock';
import { EtudiantAbsentService } from 'src/app/services/etudiant-absent.service';



@Component({
  selector: 'app-section-deux-card',
  templateUrl: './section-deux-card.component.html',
  styleUrls: ['./section-deux-card.component.css']
})
export class SectionDeuxCardComponent implements OnInit {
  //@Input()class!: Class;
  classes = CLASSES;
  
  titre= 'Ajouter';
  
  //visible: boolean=true
  
  etudiant: Class[]= CLASSES;
  list!: FormGroup;
  Absent!: Class[];
  
  constructor(private formbuilder: FormBuilder, 
    private etudiantService: EtudiantAbsentService) {} 

  
  ngOnInit(): void {
    this.newForm()
    this.Absent= this.etudiantService.getClass() 
     
  }

  addElement(){
    this.etudiantService.ajoutEtudiant(this.list.value.etudiant)
    this.Absent=this.etudiantService.getClass()
    console.log(this.Absent);
  }
  
  newForm(){
    this.list=this.formbuilder.group({
      etudiant : null
    })
  }

  enleveElement(idetudiant:number):void {
    this.etudiantService.enleveElement(idetudiant);
    this.Absent=this.etudiantService.getClass()
  }
}