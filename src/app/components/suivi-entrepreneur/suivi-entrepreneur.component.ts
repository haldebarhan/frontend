import { Component, OnInit } from '@angular/core';
declare var jQuery: any
@Component({
  selector: 'app-suivi-entrepreneur',
  templateUrl: './suivi-entrepreneur.component.html',
  styleUrls: ['./suivi-entrepreneur.component.css']
})
export class SuiviEntrepreneurComponent implements OnInit{
  ngOnInit(): void {
    jQuery(document).ready(()=> {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
    })
  }
}
