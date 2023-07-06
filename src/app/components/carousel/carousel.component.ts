import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
//import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
 // imports: [CommonModule,NgbCarouselModule, NgIf],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {


  @Input() products= [{
    image: '',
    image1: '',
    image2: '',
    image3: '',
    description: '',
    description1: '',
    description2: '',
    description3: '',
  
      },
      {
        image: '',
        image1: '',
        image2: '',
        image3: '',
        description: '',
        description1: '',
        description2: '',
        description3: '',
          }];
}
