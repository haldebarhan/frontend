import { Component, OnInit } from '@angular/core';
declare var jQuery: any
@Component({
  selector: 'app-archi-bet',
  templateUrl: './archi-bet.component.html',
  styleUrls: ['./archi-bet.component.css']
})
export class ArchiBetComponent implements OnInit{
  ngOnInit(): void {
    jQuery(document).ready(()=> {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
    })
  }
}
