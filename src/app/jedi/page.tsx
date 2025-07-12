'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Filters from '@/components/Filters';
import HolocronCard from '@/components/HolocronCard';
import HolocronModal from '@/components/HolocronModal';
import { holocronData, HolocronEntry } from '@/lib/data';

export default function JediPage() {
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<HolocronEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar apenas registros Jedi e por luz
  const filteredData = useMemo(() => {
    return holocronData.filter((entry) => {
      const isJediRelated = entry.category === 'jedi' || entry.alignment === 'light';
      const matchesEra = selectedEra === 'all' || entry.era === selectedEra;
      const matchesRarity = selectedRarity === 'all' || entry.rarity === selectedRarity;
      const matchesSearch = searchTerm === '' || 
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return isJediRelated && matchesEra && matchesRarity && matchesSearch;
    });
  }, [selectedEra, selectedRarity, searchTerm]);

  const handleCardClick = (entry: HolocronEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-holo-blue/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl mb-6">⚡</div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="holo-text">Arquivos Jedi</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore os ensinamentos, conhecimentos e registros históricos da Ordem Jedi.
              Descubra a sabedoria dos mestres e os segredos da Força luminosa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Filters
              selectedCategory="jedi"
              selectedEra={selectedEra}
              selectedAlignment="light"
              selectedRarity={selectedRarity}
              searchTerm={searchTerm}
              onCategoryChange={() => {}} // Não permite mudar categoria nesta página
              onEraChange={setSelectedEra}
              onAlignmentChange={() => {}} // Sempre luz nesta página
              onRarityChange={setSelectedRarity}
              onSearchChange={setSearchTerm}
            />
          </motion.div>

          {/* Results Header */}
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-bold text-white">
                Registros Jedi Encontrados
              </h3>
              <motion.span
                className="px-4 py-2 bg-holo-blue/20 border border-holo-blue/50 text-holo-blue rounded-full font-bold"
                key={filteredData.length}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {filteredData.length}
              </motion.span>
            </div>
          </motion.div>

          {/* Cards Grid */}
          {filteredData.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">
                Nenhum registro Jedi encontrado
              </h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Tente ajustar os filtros para encontrar os ensinamentos Jedi que procura.
              </p>
              <motion.button
                className="btn-holo"
                onClick={() => {
                  setSelectedEra('all');
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
