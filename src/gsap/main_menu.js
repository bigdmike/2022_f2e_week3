import gsap from 'gsap';

export class main_menu_animation {
  constructor(el) {
    this.el = el;
    this.timeline = null;
  }
  open() {
    this.timeline != null ? this.timeline.kill() : '';
    this.timeline = gsap.timeline();
    this.timeline
      .set(this.el, {
        x: '-100%',
      })
      .fromTo(
        this.el,
        {
          opacity: 0,
          scale: 3,
          y: '-100px',
        },
        {
          opacity: 1,
          scale: 1,
          y: '0px',
          duration: 1,
          ease: 'circ.inOut',
        }
      );
  }
  close() {
    this.timeline != null ? this.timeline.kill() : '';
    this.timeline = gsap.timeline();
    this.timeline
      .fromTo(
        this.el,
        {
          opacity: 1,
          scale: 1,
          y: '0px',
        },
        {
          opacity: 0,
          scale: 3,
          y: '-100px',
          duration: 1,
          ease: 'circ.inOut',
        }
      )
      .set(this.el, {
        x: '0%',
        y: '0px',
        scale: 1,
      });
  }
}
