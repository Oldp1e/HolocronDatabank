'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Filters from '@/components/Filters';
import HolocronCard from '@/components/HolocronCard';
import HolocronModal from '@/components/HolocronModal';
import { holocronData, HolocronEntry } from '@/lib/data';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedAlignment, setSelectedAlignment] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<HolocronEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar dados baseado nos filtros selecionados
  const filteredData = useMemo(() => {
    return holocronData.filter((entry) => {
      const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
      const matchesEra = selectedEra === 'all' || entry.era === selectedEra;
      const matchesAlignment = selectedAlignment === 'all' || entry.alignment === selectedAlignment;
      const matchesRarity = selectedRarity === 'all' || entry.rarity === selectedRarity;
      const matchesSearch = searchTerm === '' || 
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesEra && matchesAlignment && matchesRarity && matchesSearch;
    });
  }, [selectedCategory, selectedEra, selectedAlignment, selectedRarity, searchTerm]);

  const handleCardClick = (entry: HolocronEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="holo-text">Arquivo Central</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore nossa vasta coleção de conhecimentos, relíquias e registros
              históricos da galáxia. Use os filtros para encontrar exatamente o que procura.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Filters
              selectedCategory={selectedCategory}
              selectedEra={selectedEra}
              selectedAlignment={selectedAlignment}
              selectedRarity={selectedRarity}
              searchTerm={searchTerm}
              onCategoryChange={setSelectedCategory}
              onEraChange={setSelectedEra}
              onAlignmentChange={setSelectedAlignment}
              onRarityChange={setSelectedRarity}
              onSearchChange={setSearchTerm}
            />
          </motion.div>

          {/* Results Header */}
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-bold text-white">
                Registros Encontrados
              </h3>
              <motion.span
                className="px-4 py-2 bg-holo-blue/20 border border-holo-blue/50 text-holo-blue rounded-full font-bold"
                key={filteredData.length} // Anima quando o número muda
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {filteredData.length}
              </motion.span>
            </div>

            {/* View Toggle (pode ser expandido futuramente) */}
            <div className="flex items-center space-x-2">
              <motion.button
                className="p-2 glass-panel border border-holo-blue/30 rounded-lg text-holo-blue"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ⊞
              </motion.button>
              <motion.button
                className="p-2 glass-panel border border-white/20 rounded-lg text-gray-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ☰
              </motion.button>
            </div>
          </motion.div>

          {/* Cards Grid */}
          {filteredData.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {filteredData.map((entry, index) => (
                <HolocronCard
                  key={entry.id}
                  entry={entry}
                  onClick={handleCardClick}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            // Empty State
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">
                Nenhum registro encontrado
              </h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Tente ajustar os filtros ou realizar uma nova busca para encontrar
                os conhecimentos que procura.
              </p>
              <motion.button
                className="btn-holo"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedEra('all');
                  setSelectedAlignment('all');
                  setSelectedRarity('all');
                  setSearchTerm('');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Limpar Filtros
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <HolocronModal
        entry={selectedEntry}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
