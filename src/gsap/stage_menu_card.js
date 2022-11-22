import gsap from 'gsap';
export class stage_menu_card_animation {
  constructor(el, movement) {
    this.el = el;
    this.timeline = null;
    this.movement = movement;
    const { x, y } = this.el.dataset;
    this.open_x = x;
    this.open_y = y;
  }
  move() {
    this.timeline != null ? this.timeline.kill() : '';
    this.timeline = gsap.timeline();

    const { x, y, duration } = this.el.dataset;
    this.timeline.to(
      this.el,
      {
        x: x,
        y: y,
        duration: duration || 0.8,
        ease: 'back.inOut(1.7)',
      },
      'same'
    );
  }
  back() {
    if (this.timeline != null) {
      this.timeline.reverse();
    } else {
      this.timeline = gsap.timeline();
      const { duration } = this.el.dataset;
      this.timeline.to(
        this.el,
        {
          x: 0,
          y: 0,
          duration: duration || 0.8,
          ease: 'back.out(1.7)',
        },
        'same'
      );
    }
  }
  mouse_move(move_x, move_y) {
    this.timeline == null ? '' : this.timeline.kill();
    this.timeline = gsap.timeline();
    const center_x = window.innerWidth / 2;
    const center_y = window.innerHeight / 2;
    const end_x = ((move_x - center_x) / window.innerWidth) * this.movement;
    const end_y = ((move_y - center_y) / window.innerHeight) * this.movement;
    this.timeline.to(this.el, {
      x: parseInt(this.open_x) + end_x,
      y: parseInt(this.open_y) + end_y,
      duration: 0.5,
      ease: 'power2.out',
    });
  }
}
