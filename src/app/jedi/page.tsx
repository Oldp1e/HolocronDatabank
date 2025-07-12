'use client';

import { useState, useMemo } from 'react';
import HolocronCard from '@/components/HolocronCard';
import Filters from '@/components/Filters';
import HolocronModal from '@/components/HolocronModal';
import { HolocronEntry, holocronData } from '@/lib/data';

export default function JediPage() {
  const [selectedEntry, setSelectedEntry] = useState<HolocronEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('jedi');
  const [selectedEra, setSelectedEra] = useState('');
  const [selectedAlignment, setSelectedAlignment] = useState('light');
  const [selectedRarity, setSelectedRarity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const jediEntries = useMemo(() => {
    return holocronData.filter(entry => 
      entry.category === 'jedi' || 
      (entry.category === 'character' && entry.alignment === 'light')
    );
  }, []);

  const filteredEntries = useMemo(() => {
    return jediEntries.filter(entry => {
      const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          entry.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesEra = !selectedEra || entry.era === selectedEra;
      const matchesAlignment = !selectedAlignment || entry.alignment === selectedAlignment;
      const matchesRarity = !selectedRarity || entry.rarity === selectedRarity;

      return matchesSearch && matchesEra && matchesAlignment && matchesRarity;
    });
  }, [jediEntries, searchTerm, selectedEra, selectedAlignment, selectedRarity]);

  const handleEntryClick = (entry: HolocronEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Jedi Archives
          </h1>
          <p className="text-xl text-blue-300/80 max-w-3xl mx-auto">
            Explore the guardians of peace and justice in the galaxy. 
            Discover the wisdom and power of the Light Side of the Force.
          </p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEntries.map((entry, index) => (
            <HolocronCard
              key={entry.id}
              entry={entry}
              onClick={handleEntryClick}
              index={index}
            />
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              No Jedi holocrons found matching your criteria.
            </p>
          </div>
        )}
      </div>

      <HolocronModal
        entry={selectedEntry}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
