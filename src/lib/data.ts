export interface HolocronEntry {
  id: string;
  title: string;
  category: 'jedi' | 'sith' | 'relic' | 'character' | 'knowledge';
  era: 'old-republic' | 'clone-wars' | 'galactic-empire' | 'new-republic' | 'unknown';
  alignment: 'light' | 'dark' | 'neutral';
  description: string;
  details: string;
  quote?: string;
  author?: string;
  rarity: 'common' | 'rare' | 'legendary' | 'forbidden';
  tags: string[];
  imageUrl?: string;
  restrictedAccess?: boolean;
}

export const holocronData: HolocronEntry[] = [
  {
    id: '001',
    title: 'Holocron do Mestre Yoda',
    category: 'jedi',
    era: 'clone-wars',
    alignment: 'light',
    description: 'Antigo holocron contendo os ensinamentos fundamentais da Força.',
    details: 'Este holocron preserva séculos de sabedoria Jedi, incluindo técnicas de meditação, filosofia da Força e métodos de treinamento de Padawans. Criado pelo próprio Mestre Yoda durante seus 800 anos de vida.',
    quote: 'Faça ou não faça. Tentativa não há.',
    author: 'Mestre Yoda',
    rarity: 'legendary',
    tags: ['sabedoria', 'treinamento', 'filosofia', 'força'],
  },
  {
    id: '002',
    title: 'Sabre de Luz de Mace Windu',
    category: 'relic',
    era: 'clone-wars',
    alignment: 'light',
    description: 'Lâmina roxa única, forjada com cristal Hurrikaine.',
    details: 'O sabre de luz do Mestre Windu é único por sua lâmina roxa, resultado de um cristal Hurrikaine extremamente raro. A cor representa o equilíbrio entre a luz e a escuridão que Windu mantinha em seu estilo de combate.',
    quote: 'A Força será contigo, sempre.',
    author: 'Mestre Mace Windu',
    rarity: 'legendary',
    tags: ['sabre-luz', 'combate', 'cristal', 'único'],
  },
  {
    id: '003',
    title: 'Registros Sith de Darth Revan',
    category: 'sith',
    era: 'old-republic',
    alignment: 'dark',
    description: 'Holocron contendo técnicas proibidas do Lado Sombrio.',
    details: 'Darth Revan documentou suas descobertas sobre o equilíbrio entre luz e escuridão. Este holocron contém técnicas perigosas que poucos Sith conseguiram dominar, incluindo métodos de transferência de essência.',
    quote: 'A Força me libertará.',
    author: 'Darth Revan',
    rarity: 'forbidden',
    tags: ['lado-sombrio', 'técnicas-proibidas', 'poder', 'equilíbrio'],
    restrictedAccess: true,
  },
  {
    id: '004',
    title: 'Arquivo: Obi-Wan Kenobi',
    category: 'character',
    era: 'clone-wars',
    alignment: 'light',
    description: 'Perfil completo do Mestre Jedi e General das Guerras Clônicas.',
    details: 'Obi-Wan Kenobi, conhecido como "O Negociador", foi um dos Jedi mais respeitados de sua época. Mentor de Anakin Skywalker e mais tarde de Luke Skywalker, ele representa os ideais Jedi em sua forma mais pura.',
    quote: 'Estas não são as droides que vocês procuram.',
    author: 'Obi-Wan Kenobi',
    rarity: 'rare',
    tags: ['jedi-master', 'mentor', 'guerra', 'sabedoria'],
  },
  {
    id: '005',
    title: 'Técnicas de Cura da Força',
    category: 'knowledge',
    era: 'clone-wars',
    alignment: 'light',
    description: 'Métodos antigos de cura usando a Força.',
    details: 'Compilação de técnicas de cura desenvolvidas ao longo de milênios pelos Jedi. Inclui desde cura básica de ferimentos até métodos avançados de regeneração celular e purificação de venenos.',
    rarity: 'rare',
    tags: ['cura', 'técnicas', 'medicina', 'força-viva'],
  },
  {
    id: '006',
    title: 'Holocron de Darth Sidious',
    category: 'sith',
    era: 'galactic-empire',
    alignment: 'dark',
    description: 'Segredos do Imperador e técnicas Sith ancestrais.',
    details: 'Os conhecimentos mais perigosos do Lado Sombrio, incluindo técnicas de manipulação, controle mental e os segredos da imortalidade Sith. Acesso restrito apenas aos mais altos níveis de autorização.',
    quote: 'O poder! Poder ilimitado!',
    author: 'Darth Sidious',
    rarity: 'forbidden',
    tags: ['imperador', 'manipulação', 'poder-supremo', 'segredos'],
    restrictedAccess: true,
  },
  {
    id: '007',
    title: 'Cristais Kyber Sagrados',
    category: 'relic',
    era: 'unknown',
    alignment: 'neutral',
    description: 'Cristais que conectam com a Força e alimentam sabres de luz.',
    details: 'Os cristais Kyber são pedras vivas que ressoam com a Força. Cada cristal escolhe seu portador e determina a cor da lâmina do sabre de luz. São encontrados em planetas como Ilum e Jedha.',
    rarity: 'legendary',
    tags: ['cristais', 'sabre-luz', 'força', 'sagrado'],
  },
  {
    id: '008',
    title: 'Arquivo: Ahsoka Tano',
    category: 'character',
    era: 'clone-wars',
    alignment: 'light',
    description: 'Ex-Padawan de Anakin Skywalker, guerreira independente.',
    details: 'Ahsoka Tano deixou a Ordem Jedi após questionar seus métodos, mas continuou seguindo os caminhos da luz. Sua jornada única a tornou uma das Force-users mais equilibradas da galáxia.',
    quote: 'Eu não sou um Jedi.',
    author: 'Ahsoka Tano',
    rarity: 'rare',
    tags: ['ex-jedi', 'independente', 'guerreira', 'equilíbrio'],
  },
  {
    id: '009',
    title: 'Técnicas de Telecinese Avançada',
    category: 'knowledge',
    era: 'old-republic',
    alignment: 'neutral',
    description: 'Domínio da manipulação de objetos através da Força.',
    details: 'Desde levitar pequenos objetos até mover naves espaciais, estas técnicas exploram os limites da telecinese. Inclui métodos de precisão extrema e aplicações em combate.',
    rarity: 'rare',
    tags: ['telecinese', 'controle', 'precisão', 'combate'],
  },
  {
    id: '010',
    title: 'Holocron dos Jedi Perdidos',
    category: 'jedi',
    era: 'old-republic',
    alignment: 'light',
    description: 'Registros de Jedi que desapareceram nas Regiões Desconhecidas.',
    details: 'Este holocron contém os últimos registros de expedições Jedi que partiram para as Regiões Desconhecidas e nunca retornaram. Suas descobertas podem conter chaves para mistérios antigos da Força.',
    rarity: 'legendary',
    tags: ['mistério', 'exploração', 'regiões-desconhecidas', 'perdidos'],
  }
];

export const categories = [
  { id: 'all', name: 'Todos', icon: '◆' },
  { id: 'jedi', name: 'Jedi', icon: '⚡' },
  { id: 'sith', name: 'Sith', icon: '🔴' },
  { id: 'relic', name: 'Relíquias', icon: '💎' },
  { id: 'character', name: 'Personagens', icon: '👤' },
  { id: 'knowledge', name: 'Conhecimento', icon: '📚' },
];

export const eras = [
  { id: 'all', name: 'Todas as Eras' },
  { id: 'old-republic', name: 'Antiga República' },
  { id: 'clone-wars', name: 'Guerras Clônicas' },
  { id: 'galactic-empire', name: 'Império Galáctico' },
  { id: 'new-republic', name: 'Nova República' },
  { id: 'unknown', name: 'Era Desconhecida' },
];

export const alignments = [
  { id: 'all', name: 'Todos' },
  { id: 'light', name: 'Lado da Luz' },
  { id: 'dark', name: 'Lado Sombrio' },
  { id: 'neutral', name: 'Neutro' },
];

export const rarities = [
  { id: 'all', name: 'Todas' },
  { id: 'common', name: 'Comum' },
  { id: 'rare', name: 'Raro' },
  { id: 'legendary', name: 'Lendário' },
  { id: 'forbidden', name: 'Proibido' },
];
