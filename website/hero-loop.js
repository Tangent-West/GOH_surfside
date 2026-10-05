/* The direct GOH MP4 replaces only the landing-page YouTube player. */
'use strict';

window.GOH_VIDEO = (() => {
  const VIDEO_URL = 'https://thegoodnessofhemp.org/assets/header/goodness_loop_bish.mp4';
  let video = null;
  let observer = null;
  let userPaused = false;
  let autoPaused = false;
  let sourceAttached = false;

  const el = id => document.getElementById(id);
  const status = message => {
    if (el('video-status')) el('video-status').textContent = message;
  };

  function attachSource() {
    if (!video || sourceAttached) return;
    video.src = VIDEO_URL;
    sourceAttached = true;
    video.load();
  }

  function showFallback(message) {
    el('hero-video-shell')?.classList.remove('video-playing');
    const fallback = el('hero-video-fallback');
    const button = el('hero-play');
    if (fallback) fallback.hidden = false;
    if (button) button.textContent = 'Play background video';
    status(message);
  }

  function showPlaying() {
    el('hero-video-shell')?.classList.add('video-playing');
    if (el('hero-video-fallback')) el('hero-video-fallback').hidden = true;
    const pauseButton = el('video-pause');
    if (pauseButton) {
      pauseButton.disabled = false;
      pauseButton.textContent = 'Pause background video';
    }
    status('Background video playing silently.');
  }

  async function play() {
    if (!video) return;
    attachSource();
    try {
      await video.play();
      showPlaying();
    } catch (_) {
      showFallback('Play the silent background video when you’re ready.');
    }
  }

  function pause(userInitiated = true) {
    if (!video) return;
    if (userInitiated) userPaused = true;
    video.pause();
    const pauseButton = el('video-pause');
    if (pauseButton) pauseButton.textContent = 'Play background video';
    status('Background video paused.');
  }

  function mount() {
    const shell = el('hero-video-shell');
    const mountPoint = el('hero-video-mount');
    if (!shell || !mountPoint) return;

    userPaused = false;
    autoPaused = false;
    sourceAttached = false;

    video = document.createElement('video');
    video.id = 'hero-loop';
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.preload = 'metadata';
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('aria-hidden', 'true');
    video.setAttribute('tabindex', '-1');
    mountPoint.replaceChildren(video);

    video.addEventListener('playing', showPlaying);
    video.addEventListener('error', () => showFallback('The background video is unavailable. The campaign photograph remains visible.'));

    const playButton = el('hero-play');
    playButton?.addEventListener('click', () => {
      userPaused = false;
      play();
    });

    const pauseButton = el('video-pause');
    if (pauseButton) {
      pauseButton.disabled = false;
      pauseButton.textContent = 'Pause background video';
      pauseButton.addEventListener('click', () => {
        if (video?.paused) {
          userPaused = false;
          play();
        } else {
          pause(true);
        }
      });
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = Boolean(navigator.connection?.saveData);
    const requiresClick = reduceMotion || saveData || window.GOH_DATA.videoConsentRequired;

    if (requiresClick) {
      video.preload = 'none';
      showFallback(reduceMotion
        ? 'Motion is reduced. Play the silent background video if you choose.'
        : 'Data-saving is on. Play the silent background video if you choose.');
    } else {
      play();
    }

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        if (!video || !sourceAttached) return;
        const visible = entries[0].isIntersecting;
        if (!visible && !video.paused) {
          autoPaused = true;
          video.pause();
        } else if (visible && autoPaused && !userPaused && !document.hidden) {
          autoPaused = false;
          play();
        }
      }, {threshold: .15});
      observer.observe(shell);
    }
  }

  function destroy() {
    observer?.disconnect();
    observer = null;
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
    }
    video = null;
    sourceAttached = false;
    userPaused = false;
    autoPaused = false;
  }

  document.addEventListener('visibilitychange', () => {
    if (!video || !sourceAttached) return;
    if (document.hidden && !video.paused) {
      autoPaused = true;
      video.pause();
    } else if (!document.hidden && autoPaused && !userPaused) {
      autoPaused = false;
      play();
    }
  });

  return {mount, destroy, pause};
})();
