import {keyframes} from '@/core/ui/system';

// Fade ins
const fadeInKeyframes = keyframes({
  from: {opacity: 0},
  to: {opacity: 1},
});
const fadeOutKeyframes = keyframes({
  from: {opacity: 1},
  to: {opacity: 0},
});
export const fadeIn = `${fadeInKeyframes} 200ms cubic-bezier(0.175, 0.885, 0.19, 1.08)`;
export const fadeOut = `${fadeOutKeyframes} 200ms cubic-bezier(0.175, 0.885, 0.19, 1.08)`;

// Modal
const modalContentInKeyframes = keyframes({
  '0%': {opacity: 0, transform: 'translate(-50%, -48%) scale(.96)'},
  '100%': {opacity: 1, transform: 'translate(-50%, -50%) scale(1)'},
});
const modalContentOutKeyframes = keyframes({
  '0%': {opacity: 1, transform: 'translate(-50%, -50%) scale(1)'},
  '100%': {opacity: 0, transform: 'translate(-50%, -48%) scale(.96)'},
});
export const modalContentIn = `${modalContentInKeyframes} 200ms cubic-bezier(0.16, 1, 0.3, 1)`;
export const modalContentOut = `${modalContentOutKeyframes} 200ms cubic-bezier(0.16, 1, 0.3, 1)`;
