'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Filters from '@/components/Filters';
import HolocronCard from '@/components/HolocronCard';
import HolocronModal from '@/components/HolocronModal';
import { holocronData, HolocronEntry } from '@/lib/data';

export default function SithPage() {
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<HolocronEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  // Filtrar apenas registros Sith e lado sombrio
  const filteredData = useMemo(() => {
    return holocronData.filter((entry) => {
      const isSithRelated = entry.category === 'sith' || entry.alignment === 'dark';
      const matchesEra = selectedEra === 'all' || entry.era === selectedEra;
      const matchesRarity = selectedRarity === 'all' || entry.rarity === selectedRarity;
      const matchesSearch = searchTerm === '' || 
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return isSithRelated && matchesEra && matchesRarity && matchesSearch;
    });
  }, [selectedEra, selectedRarity, searchTerm]);

  const handleCardClick = (entry: HolocronEntry) => {
    if (entry.restrictedAccess && !accessGranted) {
      // Simular autorização
      const granted = window.confirm(
        '⚠️ ACESSO RESTRITO ⚠️\n\nEste arquivo contém conhecimentos perigosos do Lado Sombrio.\nVocê assume total responsabilidade pelo uso dessas informações.\n\nConceder acesso?'
      );
      if (granted) {
        setAccessGranted(true);
      } else {
        return;
      }
    }
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="min-h-screen">
      {/* Warning Banner */}
      <motion.div
        className="bg-red-900/20 border-y border-red-500/50 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-red-400 font-semibold">
            ⚠️ ATENÇÃO: Este arquivo contém registros do Lado Sombrio da Força. 
            Acesso restrito apenas a investigadores autorizados.
          </p>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-900/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-8xl mb-6">🔴</div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Arquivos Sith
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore os segredos sombrios, técnicas proibidas e registros históricos 
              dos Senhores Sith. Conhecimento perigoso para mentes preparadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Access Control */}
      {!accessGranted && (
        <motion.section
          className="relative py-12 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-md mx-auto">
            <div className="glass-panel p-8 border-2 border-red-500/50 text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">
                Autorização Necessária
              </h3>
              <p className="text-gray-400 mb-6">
                O acesso aos arquivos Sith requer autorização especial devido à 
                natureza perigosa do conteúdo.
              </p>
              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-700/20 
                         border border-red-500/50 text-red-400 font-medium rounded-lg
                         hover:from-red-600/30 hover:to-red-700/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]
                         transition-all duration-300"
                onClick={() => setAccessGranted(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Acesso Temporário
              </motion.button>
            </div>
          </div>
        </motion.section>
      )}

      {/* Main Content - Only shows if access granted */}
      {accessGranted && (
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Access Granted Banner */}
            <motion.div
              className="bg-green-900/20 border border-green-500/50 rounded-xl p-4 mb-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-green-400 font-semibold">
                ✅ Acesso temporário concedido. Sessão ativa por tempo limitado.
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Filters
                selectedCategory="sith"
                selectedEra={selectedEra}
                selectedAlignment="dark"
                selectedRarity={selectedRarity}
                searchTerm={searchTerm}
                onCategoryChange={() => {}} // Não permite mudar categoria
                onEraChange={setSelectedEra}
                onAlignmentChange={() => {}} // Sempre sombrio
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
                  Registros Sith Encontrados
                </h3>
                <motion.span
                  className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-full font-bold"
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
                  Nenhum registro Sith encontrado
                </h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  Os segredos que busca podem estar em arquivos mais profundos...
                </p>
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-700/20 
                           border border-red-500/50 text-red-400 font-medium rounded-lg
                           hover:from-red-600/30 hover:to-red-700/30 
                           transition-all duration-300"
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
      )}

      {/* Modal */}
      <HolocronModal
        entry={selectedEntry}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
