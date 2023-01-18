import { Component, OnInit } from '@angular/core';
declare var jQuery: any

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
        // Slider Active
        jQuery('.slider_list').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        })

        jQuery(document).ready(() => {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 0.1)
        })

    }
}
