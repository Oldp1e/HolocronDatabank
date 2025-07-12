'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold
    rounded-xl overflow-hidden transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      text-white bg-gradient-to-r from-holo-blue to-holo-purple
      hover:from-holo-blue/80 hover:to-holo-purple/80
      focus:ring-holo-blue/50 shadow-holo
    `,
    secondary: `
      text-holo-blue border-2 border-holo-blue/50 bg-transparent
      hover:bg-holo-blue/10 hover:border-holo-blue/70
      focus:ring-holo-blue/50
    `,
    danger: `
      text-red-400 border-2 border-red-500/50 bg-transparent
      hover:bg-red-500/10 hover:border-red-400 hover:text-red-300
      focus:ring-red-500/50
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  const motionProps = {
    className: `${classes} group`,
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
    ...(href ? { href } : {}),
    ...(onClick && !href ? { onClick } : {}),
    ...(disabled ? { disabled } : {}),
  };

  return (
    <MotionComponent {...motionProps}>
      {/* Background effect for primary variant */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-holo-blue to-holo-purple"
          whileHover={disabled ? {} : { scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>

      {/* Shimmer effect */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      )}
    </MotionComponent>
  );
}
