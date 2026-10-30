/**
 * WebGL Capability and Fallback Detection
 */

export function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function isLowPowerDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  return isMobile || hardwareConcurrency <= 4;
}
