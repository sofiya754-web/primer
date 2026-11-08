import { useEffect, useRef } from 'react';

/**
 * Automatically plays the video when visible in viewport, and pauses it when offscreen.
 * This frees up hardware video decoders and GPU resources, eliminating stutter and lag across all videos.
 */
export function useLazyVideo<T extends HTMLVideoElement>() {
  const videoRef = useRef<T>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Browser autoplay policy catch
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return videoRef;
}
