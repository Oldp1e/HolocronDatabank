'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HolocronEntry } from '@/lib/data';

interface HolocronModalProps {
  entry: HolocronEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

const rarityColors = {
  common: 'from-gray-400 to-gray-600',
  rare: 'from-blue-400 to-blue-600',
  legendary: 'from-purple-400 to-purple-600',
  forbidden: 'from-red-400 to-red-600',
};

const alignmentIcons = {
  light: '⚡',
  dark: '🔴',
  neutral: '⚪',
};

const categoryIcons = {
  jedi: '⚡',
  sith: '🔴',
  relic: '💎',
  character: '👤',
  knowledge: '📚',
};

export default function HolocronModal({ entry, isOpen, onClose }: HolocronModalProps) {
  if (!entry) return null;

  const isRestricted = entry.restrictedAccess;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`
                glass-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto
                border-2 ${isRestricted ? 'border-red-500/50' : 'border-holo-blue/50'}
                ${isRestricted ? 'shadow-[0_0_50px_rgba(220,38,38,0.3)]' : 'shadow-holo-strong'}
              `}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-6 border-b border-white/10">
                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-panel border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>

                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <motion.div
                    className={`
                      w-20 h-20 rounded-xl flex items-center justify-center text-4xl
                      bg-gradient-to-br ${rarityColors[entry.rarity]}
                      shadow-lg
                    `}
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    {categoryIcons[entry.category]}
                  </motion.div>

                  <div className="flex-1">
                    {/* Title */}
                    <motion.h1
                      className={`
                        text-3xl font-bold mb-2 ${isRestricted ? 'text-red-400' : 'text-white'}
                      `}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {entry.title}
                    </motion.h1>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.span
                        className={`
                          px-3 py-1 rounded-full text-sm font-medium border
                          ${isRestricted
                            ? 'bg-red-500/20 border-red-500/50 text-red-400'
                            : 'bg-holo-blue/20 border-holo-blue/50 text-holo-blue'
                          }
                        `}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {entry.category.toUpperCase()}
                      </motion.span>

                      <motion.span
                        className={`
                          px-3 py-1 rounded-full text-sm font-bold border
                          bg-gradient-to-r ${rarityColors[entry.rarity]}
                          text-white shadow-lg
                        `}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {entry.rarity.toUpperCase()}
                      </motion.span>

                      <motion.span
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300 flex items-center space-x-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <span>{alignmentIcons[entry.alignment]}</span>
                        <span>{entry.alignment === 'light' ? 'Luz' : entry.alignment === 'dark' ? 'Sombrio' : 'Neutro'}</span>
                      </motion.span>

                      <motion.span
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        {entry.era.replace('-', ' ').toUpperCase()}
                      </motion.span>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      {entry.description}
                    </motion.p>
                  </div>
                </div>

                {/* Restricted Access Warning */}
                {isRestricted && (
                  <motion.div
                    className="mt-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🔒</span>
                      <div>
                        <h3 className="text-red-400 font-bold">ACESSO RESTRITO</h3>
                        <p className="text-red-300 text-sm">
                          Este conteúdo requer autorização especial do Conselho Jedi
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <h2 className="text-xl font-bold text-holo-blue mb-4 flex items-center">
                    <span className="mr-2">📜</span>
                    Detalhes Arquivísticos
                  </h2>
                  <div className="glass-panel p-4 rounded-lg border border-holo-blue/20">
                    <p className="text-gray-300 leading-relaxed">
                      {entry.details}
                    </p>
                  </div>
                </motion.div>

                {/* Quote */}
                {entry.quote && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <h2 className="text-xl font-bold text-holo-purple mb-4 flex items-center">
                      <span className="mr-2">💬</span>
                      Registro de Voz
                    </h2>
                    <div className="glass-panel p-6 rounded-lg border border-holo-purple/20 bg-holo-purple/5">
                      <blockquote className="text-lg italic text-holo-purple mb-4">
                        "{entry.quote}"
                      </blockquote>
                      {entry.author && (
                        <cite className="text-gray-400">
                          — {entry.author}
                        </cite>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Tags */}
                {entry.tags && entry.tags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <h2 className="text-xl font-bold text-holo-cyan mb-4 flex items-center">
                      <span className="mr-2">🏷️</span>
                      Classificações
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-2 bg-holo-cyan/20 border border-holo-cyan/50 text-holo-cyan rounded-lg text-sm"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + (index * 0.1) }}
                          whileHover={{ scale: 1.1 }}
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <motion.button
                    className="btn-holo flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isRestricted}
                  >
                    <span>📚</span>
                    <span>{isRestricted ? 'Acesso Negado' : 'Estudar Arquivo'}</span>
                  </motion.button>

                  <motion.button
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-holo-purple/20 to-holo-cyan/20 
                             border border-holo-purple/50 text-white font-medium transition-all duration-300
                             hover:from-holo-purple/30 hover:to-holo-cyan/30 hover:shadow-holo-strong
                             focus:outline-none focus:ring-2 focus:ring-holo-purple/50 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>🔗</span>
                    <span>Referenciar</span>
                  </motion.button>

                  <motion.button
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-gold-accent/20 to-gold-accent/10 
                             border border-gold-accent/50 text-gold-accent font-medium transition-all duration-300
                             hover:from-gold-accent/30 hover:to-gold-accent/20 hover:shadow-glow
                             focus:outline-none focus:ring-2 focus:ring-gold-accent/50 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>⭐</span>
                    <span>Favoritar</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
