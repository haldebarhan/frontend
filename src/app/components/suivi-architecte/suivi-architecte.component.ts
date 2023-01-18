import { Component, OnInit } from '@angular/core';
declare var jQuery: any
@Component({
  selector: 'app-suivi-architecte',
  templateUrl: './suivi-architecte.component.html',
  styleUrls: ['./suivi-architecte.component.css']
})
export class SuiviArchitecteComponent implements OnInit{
  ngOnInit(): void {
    jQuery(document).ready(()=> {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
    })
  }
}
