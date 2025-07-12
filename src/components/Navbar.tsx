'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { name: 'Início', href: '/', icon: '🏠' },
  { name: 'Jedi', href: '/jedi', icon: '⚡' },
  { name: 'Sith', href: '/sith', icon: '🔴' },
  { name: 'Relíquias', href: '/relics', icon: '💎' },
  { name: 'Personagens', href: '/characters', icon: '👤' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-holo-blue/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-holo-blue to-holo-purple flex items-center justify-center text-white font-bold text-lg"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 212, 255, 0.3)',
                    '0 0 30px rgba(0, 212, 255, 0.6)',
                    '0 0 20px rgba(0, 212, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                H
              </motion.div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-holo-blue to-holo-purple opacity-20 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold holo-text">Holocron</h1>
              <p className="text-xs text-gray-400">Databank</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </span>
                  
                  {/* Underline effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-holo-blue to-holo-purple origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-holo-blue/10 to-holo-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.a>
              ))}
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
              className="p-2 rounded-lg glass-panel border border-holo-blue/30"
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
          className="md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-holo-blue/20 mt-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-holo-blue/10 transition-colors duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isOpen ? 0 : -20,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </span>
              </motion.a>
            ))}
            
            <motion.div
              className="mt-4 pt-4 border-t border-holo-blue/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="px-3 py-2 text-green-400 text-sm font-medium">
                ⚡ Acesso: Jedi
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
