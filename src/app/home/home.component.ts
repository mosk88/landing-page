import { Component } from '@angular/core';
import { SectionIntroComponent } from '../section-intro/section-intro.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ArticlesComponent } from '../articles/articles.component';
import { TestiMonyComponent } from '../testi-mony/testi-mony.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionIntroComponent,CarouselComponent,ArticlesComponent,TestiMonyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
