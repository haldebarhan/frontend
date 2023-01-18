import { Component, OnInit } from '@angular/core';
declare var jQuery: any
@Component({
  selector: 'app-transfert-argent',
  templateUrl: './transfert-argent.component.html',
  styleUrls: ['./transfert-argent.component.css']
})
export class TransfertArgentComponent implements OnInit{
  ngOnInit(): void {
    jQuery(document).ready(()=> {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
    })
  }
}
