import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SectionIntroComponent } from './section-intro/section-intro.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ArticlesComponent } from './articles/articles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SectionIntroComponent,CarouselComponent,ArticlesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingPage';
}
