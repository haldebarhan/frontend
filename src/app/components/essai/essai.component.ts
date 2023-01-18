import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mailer } from 'src/app/services/sendMail.service';
import { SolutionService } from 'src/app/services/solutions.service';
import { formatDate } from 'src/helpers/formatDate';
import { Mail } from 'src/models/Mail.model';
declare var jQuery: any

@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent implements OnInit {
  code: string = ""
  id: number = 0;
  solutions: any[] = []
  solution: any;
  logName: string = ''
  solutionName: string = ''
  solutionItems: any[] = []
  isSubmitted: boolean = false

  constructor(private route: ActivatedRoute, private solutionservice: SolutionService, private mailer: Mailer) {

  }
  essaiForm = new FormGroup({
    nomEntreprise: new FormControl('', [Validators.required]),
    contactEntreprise: new FormControl('', [Validators.required]),
    secteurActivite: new FormControl('', [Validators.required]),
    tailleEntreprise: new FormControl('', [Validators.required]),
    dateEssai: new FormControl('', [Validators.required]),
    heureEssai: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]),
    nom: new FormControl('', [Validators.required]),
    prenoms: new FormControl('', [Validators.required]),
    contactUser: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })
  mail: Mail = {
    nomEntreprise: '',
    contactEntreprise: '',
    nom: '',
    prenoms: '',
    contactuser: '',
    tailleEntreprise: '',
    email: '',
    secteurActivite: '',
    message: '',
    dateDemoCotation: '',
    heureDemoCotation: ''
  }
  essaiDate: string = ""
  ngOnInit(): void {
    this.solutions = this.solutionservice.solutions
    const routeParams = this.route.snapshot.paramMap
    const routeId = Number(routeParams.get('solutionId'))
    this.id = routeId
    this.solutionName = this.solutions[this.id - 1].nom
    this.logName = this.solutions[this.id - 1].logiciel
    this.solutionItems = this.solutions[this.id - 1].items
    jQuery(document).ready(() => {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
      jQuery('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        language: 'fr',
        autoclose: true,
        startDate: new Date(),
        todayHighlight: true
      }).on('changeDate', (dateText: any, inst: any) => {
        this.mail.dateDemoCotation = formatDate(dateText.date)
      })
      var input = document.querySelector("#input");

      (<any>window).intlTelInput(input, {
        separateDialCode: true,
        initialCountry: 'ci'
      })


      input?.addEventListener("countrychange", () => {
        this.code = jQuery('.iti__selected-dial-code').text()
      })
    })
  }
  get nom(){
    return this.essaiForm.get('nom')
  }
  get prenoms(){
    return this.essaiForm.get('prenoms')
  }
  get email(){
    return this.essaiForm.get('email')
  }
  get contact(){
    return this.essaiForm.get('contactUser')
  }
  get message(){
    return this.essaiForm.get('message')
  }

  get contactEntr(){
    return this.essaiForm.get('contactEntreprise')
  }
  get nomEntr(){
    return this.essaiForm.get('nomEntreprise')
  }
  get dateEssai(){
    return this.essaiForm.get('dateEssai')
  }
  get heureEssai(){
    return this.essaiForm.get('heureEssai')
  }
  sendMessage(){
    this.isSubmitted = true
    this.mailer.sendMailByClient({...this.mail, code: this.code ? this.code : '+225', objet: `Essai Gratuit ${this.solutionName}`}).subscribe(res => {
      jQuery('#alert').show('fade')
      this.isSubmitted = false
    })
  }
}
