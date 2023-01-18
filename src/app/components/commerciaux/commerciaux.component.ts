import { Component, OnInit } from '@angular/core';
declare var jQuery: any
@Component({
  selector: 'app-commerciaux',
  templateUrl: './commerciaux.component.html',
  styleUrls: ['./commerciaux.component.css']
})
export class CommerciauxComponent implements OnInit{
ngOnInit(): void {
  jQuery(document).ready(()=> {
    jQuery("html, body").animate({
      scrollTop: 0
    }, 0.1)
  })
}
}
