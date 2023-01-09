import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mailer } from 'src/app/services/sendMail.service';
import { Mail } from 'src/models/Mail.model';
declare var jQuery: any

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  code: any

  constructor(private mailer: Mailer) { }
  contactForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenoms: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })
  mail: Mail = {
    nom: '',
    prenoms: '',
    contactuser: '',
    message: '',
    email: ''
  }
  sendMessage() {
    console.log(this.mail);
    
    // this.mailer.sendMail(this.contactForm)
    
  }


  get nom() {
    return this.contactForm.get('nom')
  }
  get prenoms() {
    return this.contactForm.get('prenoms')
  }
  get email() {
    return this.contactForm.get('email')
  }
  get contact() {
    return this.contactForm.get('contact')
  }
  get message() {
    return this.contactForm.get('message')
  }

  ngOnInit(): void {
    jQuery(document).ready(()=>{
      var input = document.querySelector(".input");
      (<any>window).intlTelInput(input, {
          separateDialCode: true,
          initialCountry: 'ci'
        })
        input?.addEventListener("countrychange", ()=> {
          this.code=  jQuery('.iti__selected-dial-code').text()
         })
    })
    
  }

}
