'use client';

import { useEffect, useState } from 'react';

interface BrandPatternProps {
  imageUrl: string;
  opacity?: number;
  size?: number;
  imageSize?: number;
}

export default function BrandPattern({
  imageUrl,
  opacity = 0.07,
  size = 120,
  imageSize = 80
}: BrandPatternProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const offset = (size - imageSize) / 2;

  useEffect(() => {
    // Convert the image to a data URL for embedding
    fetch(imageUrl)
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result as string);
        };
        reader.readAsDataURL(blob);
      })
      .catch(err => {
        console.error('Failed to load image:', err);
        // Fallback: try using the URL directly
        setImageSrc(imageUrl);
      });
  }, [imageUrl]);

  if (!imageSrc) {
    return null; // Don't render until image is loaded
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
      <svg
        className="w-full h-full"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <pattern
            id="brand-pattern"
            x="0"
            y="0"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <image
              href={imageSrc}
              x={offset}
              y={offset}
              width={imageSize}
              height={imageSize}
              style={{
                filter: 'brightness(0) invert(1)',
                opacity: 1
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#brand-pattern)" />
      </svg>
    </div>
  );
}
