'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import HolocronCard from '../components/HolocronCard';
import HolocronModal from '../components/HolocronModal';
import Filters from '../components/Filters';
import { holocronData, HolocronEntry } from '../lib/data';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedAlignment, setSelectedAlignment] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedEntry, setSelectedEntry] = useState<HolocronEntry | null>(null);

  const filteredEntries = useMemo(() => {
    return holocronData.filter(entry => {
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

  return (
    <div className="min-h-screen relative">
      <Hero />
      
      {/* Main Content */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 holo-text">
              Databank Holocron
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore nossa vasta coleção de conhecimentos da galáxia. 
              Cada holocron contém segredos únicos esperando para serem descobertos.
            </p>
          </motion.div>

          {/* Filters */}
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

          {/* Results Count */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-400">
              {filteredEntries.length} holocron{filteredEntries.length !== 1 ? 's' : ''} encontrado{filteredEntries.length !== 1 ? 's' : ''}
            </p>
          </motion.div>

          {/* Holocron Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <HolocronCard
                  entry={entry}
                  index={index}
                  onClick={() => setSelectedEntry(entry)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredEntries.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                Nenhum holocron encontrado
              </h3>
              <p className="text-gray-400">
                Tente ajustar os filtros ou termo de busca para ver mais resultados.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedEntry && (
        <HolocronModal
          entry={selectedEntry}
          isOpen={!!selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </div>
  );
}
