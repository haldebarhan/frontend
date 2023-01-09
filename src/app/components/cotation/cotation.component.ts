import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Mailer } from 'src/app/services/sendMail.service';
import { Mail } from 'src/models/Mail.model';
declare var jQuery: any

@Component({
  selector: 'app-cotation',
  templateUrl: './cotation.component.html',
  styleUrls: ['./cotation.component.css']
})
export class CotationComponent implements OnInit{
  mail: Mail = {
    nomEntreprise: '',
    contactEntreprise: '',
    nom: '',
    prenoms: '',
    contactuser: '',
    tailleEntreprise: '',
    service: [],
    email: '',
    secteurActivite: '',
    message: ''
  }
  isSubmitted: boolean = false
  serviceList: any;
  serviceSelected: any[] = []
  code = ""
  cotaForm: any;
  constructor(private mailer: Mailer) { }
  ngOnInit(): void {
    this.initForm()
    this.serviceList = this.getData()
    jQuery(document).ready(() => {
      jQuery('.select2').select2().on('select2:select', (e: any) => {
        var data = e.params.data;
        this.mail.service?.push(data.text)
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

  getData(): Array<any> {
    return [
      { id: 1, item: 'Gestion Locative' },
      { id: 2, item: 'Promotion Immobilière' },
      { id: 3, item: 'Gestion Hotelière' },
      { id: 4, item: 'Caisse & Suivi CA' },
      { id: 5, item: 'Appro & Distribution' },
      { id: 6, item: 'Commerciaux itinérants' },
      { id: 7, item: 'Gestion de Credit' },
      { id: 8, item: 'Transfert d\'Argent' },
      { id: 9, item: 'Assurance Maladie' },
      { id: 10, item: 'Projet Architecture, BET' },
      { id: 11, item: 'Suivi Chantier Architecte' },
      { id: 12, item: 'Suivi Chantier Entrepreneur' },
      { id: 13, item: 'Etude et Développement' },
      { id: 14, item: 'Business Intelligence (BI)' },
      { id: 15, item: 'Paiement électronique' },
      { id: 16, item: 'Intégration BIOMETRIE' },
      { id: 17, item: 'Monétique et Carte à puce' },
      { id: 18, item: 'Formation et Conseils' },
      { id: 19, item: 'Autres' },
    ]
  }

  sendMessage(form: NgForm) {
    this.isSubmitted = true
    this.mailer.sendMailByClient({ ...this.mail, code: this.code ? this.code : '+225', objet: 'Demande de Cotation' }).subscribe(res => {
      jQuery('#alert').show('fade')
      this.isSubmitted = false
      form.resetForm()
    })
  }
  initForm() {
    this.cotaForm = new FormGroup({
      nomEntreprise: new FormControl('', [Validators.required]),
      contactEntreprise: new FormControl('', [Validators.required]),
      secteurActivite: new FormControl('', [Validators.required]),
      tailleEntreprise: new FormControl('', [Validators.required]),
      service: new FormControl([]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]),
      nom: new FormControl('', [Validators.required]),
      prenoms: new FormControl('', [Validators.required]),
      contactUser: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    })
  }

  get email() {
    return this.cotaForm.get('email')
  }

}
