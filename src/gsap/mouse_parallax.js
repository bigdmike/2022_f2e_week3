import { gsap } from 'gsap';

export class mouse_parallax {
  constructor(els, movement) {
    this.els = els;
    this.movement = movement;
    this.timeline = null;
  }

  move(move_x, move_y) {
    this.timeline == null ? '' : this.timeline.kill();
    this.timeline = gsap.timeline();
    const center_x = window.innerWidth / 2;
    const center_y = window.innerHeight / 2;
    this.timeline.to(this.els, {
      x: ((move_x - center_x) / window.innerWidth) * this.movement,
      y: ((move_y - center_y) / window.innerHeight) * this.movement,
      duration: 0.5,
      ease: 'power2.out',
    });
  }
}
