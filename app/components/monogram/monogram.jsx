import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M11 0 22 29h-5.4l-2.2-6H6.6l-2.2 6H-1L10 0h1Zm-2.7 18h6.4L11.5 8.4 8.3 18ZM26 0h13a6 6 0 0 1 3.6 10.8A6.5 6.5 0 0 1 39 23h-13V0Zm5 4.6v6h7.4a3 3 0 0 0 0-6H31Zm0 10.6v9.2h8a4.6 4.6 0 0 0 0-9.2h-8Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
