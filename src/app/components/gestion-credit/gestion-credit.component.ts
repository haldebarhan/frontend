import { Component, OnInit } from '@angular/core';
declare var jQuery: any
@Component({
  selector: 'app-gestion-credit',
  templateUrl: './gestion-credit.component.html',
  styleUrls: ['./gestion-credit.component.css']
})
export class GestionCreditComponent implements OnInit{
  ngOnInit(): void {
    jQuery(document).ready(()=> {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
    })
  }
}
