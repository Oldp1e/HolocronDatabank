'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import HolocronCard from '../components/HolocronCard';
import HolocronModal from '../components/HolocronModal';
import Filters from '../components/Filters';
import { holocronData, HolocronEntry } from '../lib/data';

export default function JediPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedAlignment, setSelectedAlignment] = useState<string>('light');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedEntry, setSelectedEntry] = useState<HolocronEntry | null>(null);

  const jediEntries = useMemo(() => {
    return holocronData.filter(entry => 
      entry.alignment === 'light' && 
      (selectedCategory === 'all' || entry.category === selectedCategory) &&
      (selectedEra === 'all' || entry.era === selectedEra) &&
      (selectedRarity === 'all' || entry.rarity === selectedRarity) &&
      (searchTerm === '' || 
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );
  }, [selectedCategory, selectedEra, selectedRarity, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '25px 25px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 holo-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Arquivos Jedi
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Conhecimentos da Luz, técnicas de combate e filosofias da Ordem Jedi.
            Registros de mestres que dedicaram suas vidas à proteção da galáxia.
          </motion.p>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4">
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {jediEntries.map((entry, index) => (
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

          {jediEntries.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                Nenhum arquivo encontrado
              </h3>
              <p className="text-gray-400">
                Tente ajustar os filtros para ver mais resultados.
              </p>
            </motion.div>
          )}
        </div>
      </section>

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
