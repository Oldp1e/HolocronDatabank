'use client';

import { motion } from 'framer-motion';
import { HolocronEntry } from '@/lib/data';

interface HolocronCardProps {
  entry: HolocronEntry;
  onClick: (entry: HolocronEntry) => void;
  index: number;
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

export default function HolocronCard({ entry, onClick, index }: HolocronCardProps) {
  const isRestricted = entry.restrictedAccess;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50,
      }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
      onClick={() => onClick(entry)}
    >
      <div className="relative">
        {/* Card principal */}
        <motion.div
          className={`
            glass-panel p-6 h-full transition-all duration-300
            ${isRestricted 
              ? 'border-red-500/50 hover:border-red-400/70' 
              : 'border-holo-blue/30 hover:border-holo-blue/60'
            }
            hover:shadow-holo-strong
          `}
          whileHover={{
            boxShadow: isRestricted
              ? '0 0 30px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.2)'
              : '0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(157, 78, 221, 0.2)',
          }}
        >
          {/* Header com ícone e categoria */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className={`
                w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                bg-gradient-to-br ${rarityColors[entry.rarity]}
                shadow-lg
              `}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              {categoryIcons[entry.category]}
            </motion.div>
            
            <div className="flex flex-col items-end space-y-1">
              <motion.span
                className={`
                  px-2 py-1 rounded-full text-xs font-medium border
                  ${isRestricted
                    ? 'bg-red-500/20 border-red-500/50 text-red-400'
                    : 'bg-holo-blue/20 border-holo-blue/50 text-holo-blue'
                  }
                `}
                whileHover={{ scale: 1.1 }}
              >
                {entry.category.toUpperCase()}
              </motion.span>
              
              <span className="text-xl">
                {alignmentIcons[entry.alignment]}
              </span>
            </div>
          </div>

          {/* Título */}
          <motion.h3
            className={`
              text-xl font-bold mb-3 line-clamp-2
              ${isRestricted ? 'text-red-400' : 'text-white'}
              group-hover:text-glow
            `}
            layoutId={`title-${entry.id}`}
          >
            {entry.title}
          </motion.h3>

          {/* Descrição */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {entry.description}
          </p>

          {/* Era e Raridade */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {entry.era.replace('-', ' ')}
            </span>
            
            <motion.div
              className={`
                px-2 py-1 rounded-full text-xs font-bold border
                bg-gradient-to-r ${rarityColors[entry.rarity]}
                text-white shadow-lg
              `}
              whileHover={{ scale: 1.1 }}
            >
              {entry.rarity.toUpperCase()}
            </motion.div>
          </div>

          {/* Tags */}
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {entry.tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.1) + (tagIndex * 0.05) }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 255, 0.2)' }}
                >
                  #{tag}
                </motion.span>
              ))}
              {entry.tags.length > 3 && (
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-500">
                  +{entry.tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Quote preview se existir */}
          {entry.quote && (
            <motion.div
              className="border-l-2 border-holo-blue/50 pl-3 py-2 bg-holo-blue/5 rounded-r-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <p className="text-holo-blue text-sm italic line-clamp-2">
                "{entry.quote}"
              </p>
              {entry.author && (
                <p className="text-gray-500 text-xs mt-1">
                  — {entry.author}
                </p>
              )}
            </motion.div>
          )}

          {/* Acesso restrito overlay */}
          {isRestricted && (
            <motion.div
              className="absolute inset-0 bg-red-900/20 backdrop-blur-[1px] rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <p className="text-red-400 font-bold text-sm">
                  ACESSO RESTRITO
                </p>
                <p className="text-red-300 text-xs">
                  Autorização Necessária
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Efeito holográfico */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              ${isRestricted ? 'rgba(220, 38, 38, 0.1)' : 'rgba(0, 212, 255, 0.1)'} 0%, 
              transparent 50%, 
              ${isRestricted ? 'rgba(220, 38, 38, 0.1)' : 'rgba(157, 78, 221, 0.1)'} 100%
            )`,
          }}
        />

        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
            animate={{
              translateX: ['100%', '100%', '-100%', '-100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
