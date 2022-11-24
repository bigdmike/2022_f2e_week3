import gsap from 'gsap';
export class stage_menu_card_animation {
  constructor(el, movement) {
    this.el = el;
    this.timeline = null;
    this.lock_timeline = null;
    this.movement = movement;
    this.lock_el = this.el.querySelector('[data-lock]');
    const { x, y } = this.el.dataset;
    this.open_x = x;
    this.open_y = y;
    this.moved = false;
  }
  unlock() {
    gsap
      .timeline()
      .fromTo(
        this.lock_el,
        {
          opacity: 1,
        },
        {
          opacity: 0.2,
          duration: 0.5,
          repeat: 2,
        },
        'first'
      )
      .fromTo(
        this.lock_el,
        {
          scale: 1,
          opacity: 0.2,
        },
        {
          scale: 0,
          opacity: 0,
          ease: 'back.inOut(4)',
        },
        'next'
      );
  }
  shake_lock() {
    this.lock_timeline != null ? this.lock_timeline.kill() : '';
    this.lock_timeline = gsap.timeline();
    this.lock_timeline
      .fromTo(
        this.lock_el,
        {
          scale: 1,
          rotate: 0,
        },
        {
          scale: 0.8,
          rotate: '5deg',
          ease: 'back.inOut(4)',
          duration: 0.1,
        }
      )
      .fromTo(
        this.lock_el,
        {
          scale: 1,
          rotate: '5deg',
        },
        {
          scale: 1,
          rotate: '-5deg',
          ease: 'back.inOut(4)',
          duration: 0.1,
          onComplete: () => {
            this.lock_timeline.reverse();
          },
        }
      );
  }
  move() {
    this.moved = true;
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
    console.log('card_back');
    this.timeline = gsap.timeline();
    this.timeline.to(
      this.el,
      {
        x: 0,
        y: 0,
        duration: 2,
        ease: 'back.out(1.7)',
      },
      'same'
    );
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
