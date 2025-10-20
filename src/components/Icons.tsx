// Custom SVG Icons for Vera Rust
// Replaces emojis with professional, animated icons

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const BugIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M12 2C10.9 2 10 2.9 10 4C10 4.6 10.2 5.1 10.6 5.5L8.5 7.5C7.6 7.2 6.6 7 5.5 7V9C6.3 9 7 9.1 7.7 9.3L5.5 11.5C5.2 11.2 4.9 11 4.5 11H2V13H4.5C4.9 13 5.2 13.2 5.5 13.5L7.7 15.7C7 15.9 6.3 16 5.5 16V18C6.6 18 7.6 17.8 8.5 17.5L10.6 19.5C10.2 19.9 10 20.4 10 21C10 22.1 10.9 23 12 23C13.1 23 14 22.1 14 21C14 20.4 13.8 19.9 13.4 19.5L15.5 17.5C16.4 17.8 17.4 18 18.5 18V16C17.7 16 17 15.9 16.3 15.7L18.5 13.5C18.8 13.8 19.1 14 19.5 14H22V12H19.5C19.1 12 18.8 11.8 18.5 11.5L16.3 9.3C17 9.1 17.7 9 18.5 9V7C17.4 7 16.4 7.2 15.5 7.5L13.4 5.5C13.8 5.1 14 4.6 14 4C14 2.9 13.1 2 12 2ZM12 7C13.66 7 15 8.34 15 10V14C15 15.66 13.66 17 12 17C10.34 17 9 15.66 9 14V10C9 8.34 10.34 7 12 7Z"
      fill="currentColor"
    />
  </svg>
);

export const LightbulbIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2ZM14.85 13.1L14 13.7V16H10V13.7L9.15 13.1C7.8 12.16 7 10.63 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 10.63 16.2 12.16 14.85 13.1Z"
      fill="currentColor"
    />
  </svg>
);

export const ClipboardIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM19 19H5V5H7V7H17V5H19V19Z"
      fill="currentColor"
    />
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
      fill="currentColor"
    />
  </svg>
);

export const ServerIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M20 13H4C2.9 13 2 13.9 2 15V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V15C22 13.9 21.1 13 20 13ZM7 19H5V17H7V19ZM20 3H4C2.9 3 2 3.9 2 5V9C2 10.1 2.9 11 4 11H20C21.1 11 22 10.1 22 9V5C22 3.9 21.1 3 20 3ZM7 9H5V7H7V9Z"
      fill="currentColor"
    />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H7V21H17V19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z"
      fill="currentColor"
    />
  </svg>
);

export const ChatIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4.58 16.59L4 17.17V4H20V16ZM6 12H14V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z"
      fill="currentColor"
    />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
      fill="currentColor"
    />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
      fill="currentColor"
    />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
      fill="currentColor"
    />
  </svg>
);

export const FlashIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${className}`}
  >
    <path
      d="M7 2V13H10V22L17 10H13L17 2H7Z"
      fill="currentColor"
    />
  </svg>
);

// Icon wrapper with hover animation
export const AnimatedIcon: React.FC<{
  icon: React.ReactNode;
  className?: string;
}> = ({ icon, className = '' }) => (
  <div className={`inline-flex items-center justify-center hover-lift ${className}`}>
    {icon}
  </div>
);
