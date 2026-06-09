import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { QueEs } from '../../components/que-es/que-es';

@Component({
  selector: 'app-home',
  imports: [QueEs],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.killTweensOf('*');
    gsap.from('.home__header', {
      y: 30,
      duration: 1,
      ease: 'power1.inOut',
      opacity: 0,
      clearProps: 'all',
    });

    gsap.from('.home__main--title', {
      duration: 2,
      opacity: 0,
      ease: 'power2.inOut',
      clearProps: 'all',
    });
    window.scrollTo(0, 0);
  }
}
