# 🌟 Holocron Databank

![Holocron Databank](https://img.shields.io/badge/Status-Desenvolvido-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue) ![Framer Motion](https://img.shields.io/badge/Framer-Motion-purple)

**Holocron Databank** é um banco de dados fictício inspirado no universo Star Wars, simulando uma interface holográfica e tecnológica de um Holocron Jedi/Sith. O projeto apresenta uma experiência imersiva com design moderno, efeitos visuais avançados e uma interface de usuário completamente responsiva.

## ✨ Características Principais

### 🎨 Design System Holográfico
- **Glassmorphism**: Painéis translúcidos com blur, sombras suaves e bordas arredondadas
- **Efeitos Holográficos**: Overlays luminosos, bordas brilhantes e gradientes sci-fi
- **Paleta Sci-Fi**: Azul claro, roxo, ciano para luzes; preto/azul escuro para fundos
- **Tipografia Moderna**: Fonte Inter para uma aparência tech/futurística

### 🚀 Tecnologias Utilizadas
- **Frontend**: Next.js 14 com App Router
- **Styling**: Tailwind CSS com configurações customizadas
- **Animações**: Framer Motion para transições fluidas
- **TypeScript**: Para type safety e melhor experiência de desenvolvimento
- **Arquitetura**: SPA (Single Page Application)

### 🎯 Funcionalidades

#### 📚 Sistema de Arquivo
- **Categorias**: Jedi, Sith, Relíquias, Personagens, Conhecimento
- **Filtros Avançados**: Por era, alinhamento, raridade e busca textual
- **Sistema de Raridade**: Comum, Raro, Lendário, Proibido
- **Controle de Acesso**: Conteúdo restrito para arquivos sensíveis

#### 🎮 Interface Interativa
- **Cards Responsivos**: Design adaptativo com efeitos hover
- **Modal Detalhado**: Visualização completa de registros
- **Animações Fluidas**: Transições suaves em toda a interface
- **Efeitos Visuais**: Partículas de fundo, gradientes animados

#### 📱 Experiência do Usuário
- **Responsividade Total**: Mobile, tablet e desktop
- **Acessibilidade**: Contraste adequado e navegação por teclado
- **Performance**: Otimizado para carregamento rápido
- **Microinterações**: Feedback visual para todas as ações

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/holocron-databank.git
   cd holocron-databank
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estrutura do Projeto

```
holocron-databank/
├── src/
│   ├── app/                 # App Router do Next.js
│   │   ├── layout.tsx       # Layout raiz
│   │   └── page.tsx         # Página principal
│   ├── components/          # Componentes React
│   │   ├── HolographicBackground.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── HolocronCard.tsx
│   │   ├── HolocronModal.tsx
│   │   ├── Filters.tsx
│   │   └── LoadingSpinner.tsx
│   ├── lib/                 # Utilitários e dados
│   │   ├── data.ts          # Dados ficticios do databank
│   │   └── utils.ts         # Funções utilitárias
│   └── styles/              # Estilos globais
│       └── globals.css      # CSS com Tailwind e customizações
├── public/                  # Assets estáticos
├── tailwind.config.js       # Configuração do Tailwind
├── next.config.js           # Configuração do Next.js
└── package.json            # Dependências e scripts
```

## 🎨 Paleta de Cores

```css
/* Principais */
--holo-blue: #00d4ff      /* Azul holográfico */
--holo-purple: #9d4edd    /* Roxo místico */
--holo-cyan: #7209b7      /* Ciano profundo */

/* Fundos */
--dark-bg: #0a0a0f        /* Preto espacial */
--dark-secondary: #1a1a2e /* Azul escuro */
--dark-tertiary: #16213e  /* Azul médio */

/* Acentos */
--light-accent: #f8f9fa   /* Branco/prata */
--gold-accent: #ffd700    /* Dourado premium */
--sith-red: #dc2626       /* Vermelho Sith */
```

## 🎭 Componentes Principais

### HolographicBackground
Cria um fundo animado com partículas conectadas e overlays holográficos.

### HolocronCard
Card responsivo com informações de cada entrada do databank, incluindo:
- Ícone da categoria
- Informações de raridade e alinhamento
- Preview de descrição e citações
- Efeitos visuais de hover

### HolocronModal
Modal detalhado que exibe:
- Informações completas do registro
- Controles de acesso para conteúdo restrito
- Citações e detalhes históricos
- Ações disponíveis (estudar, referenciar, favoritar)

### Filters
Sistema avançado de filtros com:
- Categorias visuais
- Seleção de era temporal
- Filtros de alinhamento da Força
- Sistema de raridade
- Busca textual em tempo real

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push na main

### Netlify
1. Conecte seu repositório
2. Configure build command: `npm run build`
3. Configure publish directory: `.next`

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🚀 Próximas Funcionalidades

- [ ] Sistema de usuários e autenticação
- [ ] Favoritos persistentes
- [ ] Modo escuro/claro
- [ ] Busca avançada com IA
- [ ] Sistema de comentários
- [ ] Export de dados
- [ ] PWA (Progressive Web App)
- [ ] Integração com APIs externas

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- Inspirado no universo Star Wars
- Design influenciado por interfaces sci-fi modernas
- Comunidade open source pelas ferramentas incríveis

---

**"O conhecimento é poder, mas o poder corrompe. Use-o sabiamente."** - Mestre Jedi Anônimo

---

Desenvolvido com ❤️ e muito café ☕
