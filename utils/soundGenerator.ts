// Generate simple sound effects using Web Audio API
// This creates placeholder sounds until you add real audio files

export function generateWhooshSound(): AudioBuffer | null {
  if (typeof window === 'undefined') return null;
  
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const sampleRate = audioContext.sampleRate;
  const duration = 0.6;
  const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < buffer.length; i++) {
    const t = i / sampleRate;
    const frequency = 200 - (t / duration) * 180; // Descending frequency
    const envelope = Math.exp(-t * 8); // Decay envelope
    data[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.3;
  }

  return buffer;
}

export function generateHoverSound(): AudioBuffer | null {
  if (typeof window === 'undefined') return null;
  
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const sampleRate = audioContext.sampleRate;
  const duration = 0.08;
  const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < buffer.length; i++) {
    const t = i / sampleRate;
    const frequency = 800 + (t / duration) * 400; // Ascending frequency
    const envelope = Math.exp(-t * 30); // Quick decay
    data[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.15;
  }

  return buffer;
}

export function generateClickSound(): AudioBuffer | null {
  if (typeof window === 'undefined') return null;
  
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const sampleRate = audioContext.sampleRate;
  const duration = 0.05;
  const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < buffer.length; i++) {
    const t = i / sampleRate;
    const frequency = 1200;
    const envelope = Math.exp(-t * 50); // Very quick decay
    data[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.2;
  }

  return buffer;
}

export function playGeneratedSound(buffer: AudioBuffer | null, volume: number = 0.3) {
  if (!buffer || typeof window === 'undefined') return;
  
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();
    
    source.buffer = buffer;
    gainNode.gain.value = volume;
    
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    source.start(0);
  } catch (error) {
    // Ignore errors
  }
}
