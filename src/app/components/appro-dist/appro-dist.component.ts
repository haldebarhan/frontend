import { Component, OnInit } from '@angular/core';
declare var jQuery: any
@Component({
  selector: 'app-appro-dist',
  templateUrl: './appro-dist.component.html',
  styleUrls: ['./appro-dist.component.css']
})
export class ApproDistComponent implements OnInit{
  ngOnInit(): void {
    jQuery(document).ready(()=> {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
    })
  }
}
