import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mailer } from 'src/app/services/sendMail.service';
import { Mail } from 'src/models/Mail.model';
declare var jQuery: any

@Component({
  selector: 'app-essayage',
  templateUrl: './essayage.component.html',
  styleUrls: ['./essayage.component.css']
})
export class EssayageComponent implements OnInit{
  code =""
  constructor(private mailer: Mailer) { }
  demoForm = new FormGroup({
    service: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]),
    nom: new FormControl('', [Validators.required]),
    prenoms: new FormControl('', [Validators.required]),
    contactUser: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })
  mail: Mail = {
    nom: '',
    prenoms: '',
    contactuser: '',
    message: '',
    email: '',
    service: []
  }
  serviceList: any;
  serviceSelected: any[] = []
  isSubmitted: boolean = false
  ngOnInit(): void {
    this.serviceList = this.getData()
    jQuery(document).ready(() => {
      var input = document.querySelector("#input");
      (<any>window).intlTelInput(input, {
        separateDialCode: true,
        initialCountry: 'ci'
      })
      input?.addEventListener("countrychange", () => {
        this.code = jQuery('.iti__selected-dial-code').text()
      })
      jQuery('.select2').select2().on('select2:select', (e: any) => {
        var data = e.params.data;
        this.mail.service?.push(data.text)
      })
    })

      jQuery(document).ready(()=> {
        jQuery("html, body").animate({
          scrollTop: 0
        }, 0.1)
      })
  }
  sendMessage() {
    this.isSubmitted = true
    this.mailer.sendMailByClient({...this.mail, code: this.code ? this.code : '+225', objet: `Essai Gratuit`}).subscribe(res => {
      jQuery('#alert').show('fade')
      this.isSubmitted = false
    })
    
  }


  get nom(){
    return this.demoForm.get('nom')
  }
  get prenoms(){
    return this.demoForm.get('prenoms')
  }
  get service(){
    return this.demoForm.get('service')
  }
  get message(){
    return this.demoForm.get('message')
  }
  get contact(){
    return this.demoForm.get('contactUser')
  }
  get email(){
    return this.demoForm.get('email')
  }
  getData(): Array<any> {
    return [
      { id: 1, item: 'Gestion Locative' },
      { id: 2, item: 'Promotion Immobili??re' },
      { id: 3, item: 'Gestion Hoteli??re' },
      { id: 4, item: 'Caisse & Suivi CA' },
      { id: 5, item: 'Appro & Distribution' },
      { id: 6, item: 'Commerciaux itin??rants' },
      { id: 7, item: 'Gestion de Credit' },
      { id: 8, item: 'Transfert d\'Argent' },
      { id: 9, item: 'Assurance Maladie' },
      { id: 10, item: 'Projet Architecture, BET' },
      { id: 11, item: 'Suivi Chantier Architecte' },
      { id: 12, item: 'Suivi Chantier Entrepreneur' },
      // { id: 13, item: 'Etude et D??veloppement' },
      // { id: 14, item: 'Business Intelligence (BI)' },
      // { id: 15, item: 'Paiement ??lectronique' },
      // { id: 16, item: 'Int??gration BIOMETRIE' },
      // { id: 17, item: 'Mon??tique et Carte ?? puce' },
      // { id: 18, item: 'Formation et Conseils' },
      { id: 19, item: 'Autres' },
    ]
  }
}
