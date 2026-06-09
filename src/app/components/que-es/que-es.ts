import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-que-es',
  imports: [],
  templateUrl: './que-es.html',
  styleUrl: './que-es.scss',
})
export class QueEs implements AfterViewInit {
  ngAfterViewInit(): void {
    // entrada del vídeo (izquierda)
    gsap.fromTo(
      '.memora__action',
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
    );

    // entrada del texto (derecha)
    gsap.fromTo(
      '.memora__content',
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: 'power3.out' },
    );
  }
}
