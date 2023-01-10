import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mailer } from 'src/app/services/sendMail.service';
import { SolutionService } from 'src/app/services/solutions.service';
import { formatDate } from 'src/helpers/formatDate';
import { Mail } from 'src/models/Mail.model';
declare var jQuery: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  code = ""
  id: number = 0;
  solutions: any[] = []
  solution: any;
  solutionName: string = ''
  logName: string = ''
  solutionItems: any[] = []
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
  isSubmitted: boolean = false
  constructor(private route: ActivatedRoute, private solutionservice: SolutionService, private mailer: Mailer) { }

  demoForm = new FormGroup({
    nomEntreprise: new FormControl(''),
    contactEntreprise: new FormControl(''),
    secteurActivite: new FormControl(''),
    tailleEntreprise: new FormControl(''),
    dateDemo: new FormControl(''),
    heureDemo: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]),
    nom: new FormControl('', [Validators.required]),
    prenoms: new FormControl('', [Validators.required]),
    contactUser: new FormControl('', [Validators.required]),
    message: new FormControl('')
  })
  demoDate: string = ""
  ngOnInit(): void {
    this.solutions = this.solutionservice.solutions
    const routeParams = this.route.snapshot.paramMap
    const routeId = Number(routeParams.get('solutionId'))
    this.id = routeId
    this.solutionName = this.solutions[this.id - 1].nom
    this.logName = this.solutions[this.id - 1].logiciel
    this.solutionItems = this.solutions[this.id - 1].items
    jQuery(document).ready(() => {
      jQuery('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        language: 'fr',
        autoclose: true,
        startDate: new Date(),
        todayHighlight: true,
        enableOnReadonly: true,
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

  get nom() {
    return this.demoForm.get('nom')
  }
  get prenoms() {
    return this.demoForm.get('prenoms')
  }
  get email() {
    return this.demoForm.get('email')
  }
  get contact() {
    return this.demoForm.get('contactUser')
  }
  get message() {
    return this.demoForm.get('message')
  }

  get contactEntr() {
    return this.demoForm.get('contactEntreprise')
  }
  get nomEntr() {
    return this.demoForm.get('nomEntreprise')
  }
  get dateDemo() {
    return this.demoForm.get('dateDemo')
  }
  get heureDemo() {
    return this.demoForm.get('heureDemo')
  }
  sendMessage() {
    this.isSubmitted = true
    this.mailer.sendMailByClient({ ...this.mail, code: this.code ? this.code : '+225', objet: `Demo Gratuite ${this.solutionName}` }).subscribe(res => {
      jQuery('#alert').show('fade')
      this.isSubmitted = false
    })
  }
}
