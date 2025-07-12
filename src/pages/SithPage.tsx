'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import HolocronCard from '../components/HolocronCard';
import HolocronModal from '../components/HolocronModal';
import Filters from '../components/Filters';
import { holocronData, HolocronEntry } from '../lib/data';

export default function SithPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedAlignment, setSelectedAlignment] = useState<string>('dark');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedEntry, setSelectedEntry] = useState<HolocronEntry | null>(null);

  const sithEntries = useMemo(() => {
    return holocronData.filter(entry => 
      entry.alignment === 'dark' && 
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black relative">
      
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
                linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '25px 25px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-red-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
            }}
          >
            Arquivos Restritos
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ⚠️ ACESSO RESTRITO ⚠️
            <br />
            Conhecimentos do Lado Sombrio, técnicas proibidas e registros dos Senhores Sith.
            Use com extrema cautela.
          </motion.p>
        </div>
      </section>

      {/* Warning Banner */}
      <motion.div
        className="bg-red-900/20 border-2 border-red-500/50 mx-4 rounded-xl p-6 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-red-400 mb-2">
            Aviso de Segurança
          </h3>
          <p className="text-gray-300">
            Os conhecimentos contidos nesta seção são extremamente perigosos. 
            O acesso é monitorado e restrito apenas a usuários autorizados.
          </p>
        </div>
      </motion.div>

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
            {sithEntries.map((entry, index) => (
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

          {sithEntries.length === 0 && (
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
