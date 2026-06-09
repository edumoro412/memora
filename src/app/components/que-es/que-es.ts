import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-que-es',
  imports: [],
  templateUrl: './que-es.html',
  styleUrl: './que-es.scss',
})
export class QueEs implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      ScrollTrigger.refresh();

      gsap.fromTo(
        '.memora__action',
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.memora',
            start: 'top 50%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        '.memora__content',
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.memora',
            start: 'top 50%',
            once: true,
          },
        },
      );
    }, 200);
  }
}
