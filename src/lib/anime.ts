import anime from 'animejs';

export function animateSvgPath(
  selector: string | HTMLElement,
  options: {
    duration?: number;
    delay?: number;
    easing?: string;
    direction?: 'normal' | 'reverse' | 'alternate';
  } = {}
) {
  return anime({
    targets: selector,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: options.easing || 'easeInOutSine',
    duration: options.duration || 1500,
    delay: options.delay || 0,
    direction: options.direction || 'normal',
    loop: false,
  });
}

export function animateCounter(
  target: { val: number },
  endValue: number,
  onUpdate: (value: number) => void,
  options: { duration?: number; easing?: string } = {}
) {
  return anime({
    targets: target,
    val: endValue,
    round: 1,
    easing: options.easing || 'easeOutExpo',
    duration: options.duration || 1800,
    update: () => onUpdate(target.val),
  });
}

export { anime };
