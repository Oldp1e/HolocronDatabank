'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Início', href: '/', icon: '🏠', color: 'from-blue-400 to-cyan-400' },
  { name: 'Jedi', href: '/jedi', icon: '⚡', color: 'from-blue-400 to-blue-600' },
  { name: 'Sith', href: '/sith', icon: '🔴', color: 'from-red-400 to-red-600' },
  { name: 'Relíquias', href: '/relics', icon: '💎', color: 'from-purple-400 to-purple-600' },
  { name: 'Personagens', href: '/characters', icon: '👤', color: 'from-green-400 to-green-600' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getColorValues = (colorString: string, isActive: boolean) => {
    if (!isActive) return 'rgba(255, 255, 255, 0.05)';
    
    const colorMap: { [key: string]: string } = {
      'from-blue-400 to-cyan-400': 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(34, 211, 238, 0.1) 100%)',
      'from-blue-400 to-blue-600': 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.1) 100%)',
      'from-red-400 to-red-600': 'linear-gradient(135deg, rgba(248, 113, 113, 0.3) 0%, rgba(220, 38, 38, 0.1) 100%)',
      'from-purple-400 to-purple-600': 'linear-gradient(135deg, rgba(196, 181, 253, 0.3) 0%, rgba(147, 51, 234, 0.1) 100%)',
      'from-green-400 to-green-600': 'linear-gradient(135deg, rgba(74, 222, 128, 0.3) 0%, rgba(22, 163, 74, 0.1) 100%)',
    };
    
    return colorMap[colorString] || 'rgba(255, 255, 255, 0.05)';
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-holo-blue/30"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 20, 40, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                className="relative"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-holo-blue via-holo-purple to-holo-cyan flex items-center justify-center text-white font-bold text-lg relative overflow-hidden">
                  H
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-40, 40] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-holo-blue/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
              <div>
                <motion.h1 
                  className="text-xl font-bold bg-gradient-to-r from-holo-blue to-holo-cyan bg-clip-text text-transparent"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(0, 212, 255, 0.5)',
                      '0 0 20px rgba(0, 212, 255, 0.8)',
                      '0 0 10px rgba(0, 212, 255, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Holocron
                </motion.h1>
                <p className="text-xs text-gray-400 font-light">Databank</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className={`
                        relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 group overflow-hidden
                        ${isActive ? 'text-white shadow-lg' : 'text-gray-300 hover:text-white'}
                      `}
                      style={{
                        background: getColorValues(item.color, isActive),
                        backdropFilter: 'blur(10px)',
                        border: isActive 
                          ? '1px solid rgba(0, 212, 255, 0.6)'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: isActive 
                          ? '0 8px 32px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                          : '0 4px 16px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {/* Holographic shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        animate={isActive ? { x: [-120, 120] } : {}}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      />
                      
                      {/* Icon with enhanced glow */}
                      <motion.span 
                        className="text-lg relative z-10 flex items-center justify-center w-6 h-6"
                        animate={isActive ? {
                          filter: [
                            'drop-shadow(0 0 2px currentColor)',
                            'drop-shadow(0 0 8px currentColor)',
                            'drop-shadow(0 0 2px currentColor)',
                          ],
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        {item.icon}
                      </motion.span>
                      
                      {/* Text with gradient */}
                      <span className={`relative z-10 ${isActive ? 'bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent' : ''}`}>
                        {item.name}
                      </span>
                      
                      {/* Hover border glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border border-holo-blue/0 group-hover:border-holo-blue/60 transition-all duration-300"
                      />
                      
                      {/* Energy pulse for active item */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(0, 212, 255, 0.4)',
                              '0 0 0 4px rgba(0, 212, 255, 0.1)',
                              '0 0 0 0 rgba(0, 212, 255, 0.4)',
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Access Level Indicator */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-medium"
              animate={{
                boxShadow: [
                  '0 0 10px rgba(34, 197, 94, 0.3)',
                  '0 0 20px rgba(34, 197, 94, 0.6)',
                  '0 0 10px rgba(34, 197, 94, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              ⚡ Acesso: Jedi
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              className="p-2 rounded-lg backdrop-blur-md bg-white/10 border border-holo-blue/30"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center"
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              >
                <motion.span
                  className="block w-5 h-0.5 bg-holo-blue mb-1"
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-holo-blue mb-1"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-holo-blue"
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 flex items-center space-x-3
                      ${isActive 
                        ? 'text-white bg-holo-blue/20 border border-holo-blue/50' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}