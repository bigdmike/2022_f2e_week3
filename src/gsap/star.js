import gsap from 'gsap';

export class star {
  constructor(el) {
    this.el = el;
    this.rotate_timeline = null;
    this.scale_timeline = null;
    this.rotate();
    this.scale();
  }
  rotate() {
    this.rotate_timeline == null ? '' : this.rotate_timeline.kill();
    this.rotate_timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          this.rotate();
        }, gsap.utils.random(1000, 2000));
      },
    });
    const rotate_star = this.el.querySelectorAll('[data-star-rotate]');

    rotate_star.forEach((item) => {
      const { minAngle, maxAngle } = item.dataset;
      this.rotate_timeline.to(
        item,
        {
          scale: gsap.utils.random(0.5, 1),
          rotate: gsap.utils.random(minAngle, maxAngle),
          opacity: gsap.utils.random(0, 1),
          duration: 1,
          transformOrigin: 'center',
        },
        'same'
      );
    });
  }
  scale() {
    this.scale_timeline == null ? '' : this.scale_timeline.kill();
    this.scale_timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          this.scale_timeline.reverse();
          setTimeout(() => {
            this.scale();
          }, 1000);
        }, 1000);
      },
    });
    const scale_star = this.el.querySelectorAll('[data-star-scale]');

    scale_star.forEach((item) => {
      const { minSize, maxSize } = item.dataset;
      this.scale_timeline.to(
        item,
        {
          scale: gsap.utils.random(minSize, maxSize),
          duration: 0.8,
          transformOrigin: 'center',
          ease: 'back.out(1.7)',
        },
        'same'
      );
    });
  }
}
