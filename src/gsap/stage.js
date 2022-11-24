import gsap from 'gsap';

export class stage_animation {
  constructor(el) {
    this.el = el;
    this.timeline = null;
  }
  leave() {
    this.timeline != null ? this.timeline.kill() : '';
    this.timeline = gsap.timeline();
    this.timeline.fromTo(
      this.el,
      {
        scale: 1,
        opacity: 1,
      },
      {
        scale: 0.6,
        opacity: 0.4,
        duration: 0.8,
        ease: 'circ.inOut',
      }
    );
  }
  enter() {
    this.timeline != null ? this.timeline.kill() : '';
    this.timeline = gsap.timeline();
    this.timeline.fromTo(
      this.el,
      {
        scale: 0.6,
        opacity: 0.4,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'circ.inOut',
      }
    );
  }
}
