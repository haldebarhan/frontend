import { Component, OnInit } from '@angular/core';
declare var jQuery: any
@Component({
  selector: 'app-assurance-maladie',
  templateUrl: './assurance-maladie.component.html',
  styleUrls: ['./assurance-maladie.component.css']
})
export class AssuranceMaladieComponent implements OnInit{
  ngOnInit(): void {
    jQuery(document).ready(()=> {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
    })
  }
}
