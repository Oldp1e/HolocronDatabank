'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import HolocronCard from '@/components/HolocronCard';
import HolocronModal from '@/components/HolocronModal';
import Filters from '@/components/Filters';
import Footer from '@/components/Footer';
import { holocronData, HolocronEntry } from '@/lib/data';

export default function CharactersPage() {
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedAlignment, setSelectedAlignment] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<HolocronEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar apenas personagens
  const filteredData = useMemo(() => {
    return holocronData.filter((entry) => {
      const isCharacterRelated = entry.category === 'character' || entry.tags.includes('character') || entry.tags.includes('master') || entry.tags.includes('lord');
      const matchesEra = selectedEra === 'all' || entry.era === selectedEra;
      const matchesAlignment = selectedAlignment === 'all' || entry.alignment === selectedAlignment;
      const matchesRarity = selectedRarity === 'all' || entry.rarity === selectedRarity;
      const matchesSearch = searchTerm === '' || 
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return isCharacterRelated && matchesEra && matchesAlignment && matchesRarity && matchesSearch;
    });
  }, [selectedEra, selectedAlignment, selectedRarity, searchTerm]);

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
      <section className="relative py-20 px-4 bg-gradient-to-b from-green-900/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-24 h-24 mx-auto rounded-xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center text-white text-4xl font-bold relative overflow-hidden">
                👤
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Arquivo de Personagens
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore biografias detalhadas de heróis, vilões e figuras históricas que moldaram o destino da galáxia
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                {filteredData.length} perfis disponíveis
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                Heróis e Vilões
              </span>
              <span className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30">
                Figuras Históricas
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <Filters
          selectedCategory="character"
          selectedEra={selectedEra}
          selectedAlignment={selectedAlignment}
          selectedRarity={selectedRarity}
          searchTerm={searchTerm}
          onCategoryChange={() => {}}
          onEraChange={setSelectedEra}
          onAlignmentChange={setSelectedAlignment}
          onRarityChange={setSelectedRarity}
          onSearchChange={setSearchTerm}
        />
      </section>

      {/* Results Counter */}
      <section className="container mx-auto px-4 mb-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400">
            {filteredData.length === 0 
              ? 'Nenhum personagem encontrado com os filtros aplicados'
              : `${filteredData.length} ${filteredData.length === 1 ? 'personagem encontrado' : 'personagens encontrados'}`
            }
          </p>
        </motion.div>
      </section>

      {/* Characters Grid */}
      <section className="container mx-auto px-4 pb-16">
        {filteredData.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-4xl text-green-400 mb-6">
              🔍
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">Nenhum personagem encontrado</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Tente ajustar os filtros ou termos de busca para encontrar os perfis que procura.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: 'easeOut'
                }}
                whileHover={{ y: -10 }}
              >
                <HolocronCard 
                  entry={entry} 
                  onClick={() => handleCardClick(entry)}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />

      {/* Modal */}
      <HolocronModal
        entry={selectedEntry}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
