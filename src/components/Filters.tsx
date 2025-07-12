'use client';

import { motion } from 'framer-motion';
import { categories, eras, alignments, rarities } from '@/lib/data';

interface FiltersProps {
  selectedCategory: string;
  selectedEra: string;
  selectedAlignment: string;
  selectedRarity: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onEraChange: (era: string) => void;
  onAlignmentChange: (alignment: string) => void;
  onRarityChange: (rarity: string) => void;
  onSearchChange: (search: string) => void;
}

export default function Filters({
  selectedCategory,
  selectedEra,
  selectedAlignment,
  selectedRarity,
  searchTerm,
  onCategoryChange,
  onEraChange,
  onAlignmentChange,
  onRarityChange,
  onSearchChange,
}: FiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Barra de busca */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <motion.span
            className="text-holo-blue text-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔍
          </motion.span>
        </div>
        <input
          type="text"
          placeholder="Buscar no databank..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 glass-panel border border-holo-blue/30 rounded-xl 
                   text-white placeholder-gray-400 focus:outline-none focus:border-holo-blue/60 
                   focus:shadow-holo transition-all duration-300 text-lg"
        />
        
        {/* Efeito de digitação */}
        {searchTerm && (
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-holo-blue/50 pointer-events-none"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          />
        )}
      </motion.div>

      {/* Filtros principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Categorias */}
        <motion.div
          className="glass-panel p-4 rounded-xl border border-holo-blue/20"
          whileHover={{ borderColor: 'rgba(0, 212, 255, 0.4)' }}
        >
          <h3 className="text-sm font-semibold text-holo-blue mb-3 flex items-center">
            <span className="mr-2">📁</span>
            Categorias
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-holo-blue/20 text-holo-blue border border-holo-blue/50 shadow-glow'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span className="text-sm">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Eras */}
        <motion.div
          className="glass-panel p-4 rounded-xl border border-holo-purple/20"
          whileHover={{ borderColor: 'rgba(157, 78, 221, 0.4)' }}
        >
          <h3 className="text-sm font-semibold text-holo-purple mb-3 flex items-center">
            <span className="mr-2">⏳</span>
            Eras
          </h3>
          <div className="space-y-2">
            {eras.map((era) => (
              <motion.button
                key={era.id}
                onClick={() => onEraChange(era.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                  selectedEra === era.id
                    ? 'bg-holo-purple/20 text-holo-purple border border-holo-purple/50 shadow-glow'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">{era.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Alinhamentos */}
        <motion.div
          className="glass-panel p-4 rounded-xl border border-holo-cyan/20"
          whileHover={{ borderColor: 'rgba(114, 9, 183, 0.4)' }}
        >
          <h3 className="text-sm font-semibold text-holo-cyan mb-3 flex items-center">
            <span className="mr-2">⚖️</span>
            Alinhamento
          </h3>
          <div className="space-y-2">
            {alignments.map((alignment) => (
              <motion.button
                key={alignment.id}
                onClick={() => onAlignmentChange(alignment.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                  selectedAlignment === alignment.id
                    ? 'bg-holo-cyan/20 text-holo-cyan border border-holo-cyan/50 shadow-glow'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">{alignment.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Raridade */}
        <motion.div
          className="glass-panel p-4 rounded-xl border border-gold-accent/20"
          whileHover={{ borderColor: 'rgba(255, 215, 0, 0.4)' }}
        >
          <h3 className="text-sm font-semibold text-gold-accent mb-3 flex items-center">
            <span className="mr-2">⭐</span>
            Raridade
          </h3>
          <div className="space-y-2">
            {rarities.map((rarity) => (
              <motion.button
                key={rarity.id}
                onClick={() => onRarityChange(rarity.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                  selectedRarity === rarity.id
                    ? 'bg-gold-accent/20 text-gold-accent border border-gold-accent/50 shadow-glow'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">{rarity.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Resumo dos filtros ativos */}
      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {selectedCategory !== 'all' && (
          <motion.span
            className="px-3 py-1 bg-holo-blue/20 border border-holo-blue/50 text-holo-blue text-sm rounded-full flex items-center space-x-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span>Categoria: {categories.find(c => c.id === selectedCategory)?.name}</span>
            <button
              onClick={() => onCategoryChange('all')}
              className="ml-2 text-holo-blue hover:text-white"
            >
              ✕
            </button>
          </motion.span>
        )}
        
        {selectedEra !== 'all' && (
          <motion.span
            className="px-3 py-1 bg-holo-purple/20 border border-holo-purple/50 text-holo-purple text-sm rounded-full flex items-center space-x-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span>Era: {eras.find(e => e.id === selectedEra)?.name}</span>
            <button
              onClick={() => onEraChange('all')}
              className="ml-2 text-holo-purple hover:text-white"
            >
              ✕
            </button>
          </motion.span>
        )}
        
        {selectedAlignment !== 'all' && (
          <motion.span
            className="px-3 py-1 bg-holo-cyan/20 border border-holo-cyan/50 text-holo-cyan text-sm rounded-full flex items-center space-x-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span>Alinhamento: {alignments.find(a => a.id === selectedAlignment)?.name}</span>
            <button
              onClick={() => onAlignmentChange('all')}
              className="ml-2 text-holo-cyan hover:text-white"
            >
              ✕
            </button>
          </motion.span>
        )}

        {selectedRarity !== 'all' && (
          <motion.span
            className="px-3 py-1 bg-gold-accent/20 border border-gold-accent/50 text-gold-accent text-sm rounded-full flex items-center space-x-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span>Raridade: {rarities.find(r => r.id === selectedRarity)?.name}</span>
            <button
              onClick={() => onRarityChange('all')}
              className="ml-2 text-gold-accent hover:text-white"
            >
              ✕
            </button>
          </motion.span>
        )}

        {searchTerm && (
          <motion.span
            className="px-3 py-1 bg-white/20 border border-white/50 text-white text-sm rounded-full flex items-center space-x-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span>Busca: "{searchTerm}"</span>
            <button
              onClick={() => onSearchChange('')}
              className="ml-2 text-white hover:text-gray-300"
            >
              ✕
            </button>
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
