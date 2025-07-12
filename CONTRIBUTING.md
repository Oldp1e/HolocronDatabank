# 🤝 Guia de Contribuição - Holocron Databank

Obrigado por considerar contribuir para o Holocron Databank! Este documento fornece diretrizes para contribuições ao projeto.

## 📋 Índice
- [Como Contribuir](#como-contribuir)
- [Processo de Development](#processo-de-development)
- [Padrões de Código](#padrões-de-código)
- [Estrutura de Commits](#estrutura-de-commits)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Features](#sugerir-features)

## 🚀 Como Contribuir

### 1. Fork e Clone
```bash
# Fork o repositório no GitHub
git clone https://github.com/seu-usuario/holocron-databank.git
cd holocron-databank
```

### 2. Configurar Ambiente
```bash
npm install
cp .env.example .env.local
npm run dev
```

### 3. Criar Branch
```bash
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
```

## 🛠️ Processo de Development

### Estrutura do Projeto
```
src/
├── app/              # Pages (App Router)
├── components/       # Componentes React
├── lib/             # Utilitários e dados
└── styles/          # Estilos globais
```

### Comandos Úteis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run lint         # Verificar linting
npm run type-check   # Verificar TypeScript
```

## 📝 Padrões de Código

### TypeScript
- Use TypeScript para todos os arquivos
- Defina interfaces para props e dados
- Evite `any`, prefira types específicos

### React/Next.js
- Use componentes funcionais com hooks
- Prefira `'use client'` apenas quando necessário
- Componentes devem ser responsivos por padrão

### Tailwind CSS
- Use as classes utilitárias personalizadas quando disponível
- Mantenha consistência com a paleta de cores do tema
- Prefira motion components do Framer Motion para animações

### Naming Conventions
```typescript
// Componentes - PascalCase
export default function HolocronCard() {}

// Funções - camelCase
const handleCardClick = () => {}

// Constantes - UPPER_SNAKE_CASE
const API_ENDPOINTS = {}

// Interfaces - PascalCase com 'I' opcional
interface HolocronEntry {}
```

## 📦 Estrutura de Commits

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>

<corpo>

<rodapé>
```

### Tipos
- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: documentação
- `style`: formatação/styling
- `refactor`: refatoração de código
- `test`: testes
- `chore`: tarefas de build/configuração

### Exemplos
```bash
feat(modal): adicionar modal de detalhes do holocron
fix(filters): corrigir filtro de raridade
docs(readme): atualizar instruções de instalação
style(card): melhorar responsividade dos cards
```

## 🐛 Reportar Bugs

### Template de Bug Report
```markdown
**Descrição do Bug**
Descrição clara e concisa do problema.

**Como Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente**
- OS: [Windows/Mac/Linux]
- Browser: [Chrome, Firefox, Safari]
- Versão: [versão do browser]
```

## 💡 Sugerir Features

### Template de Feature Request
```markdown
**Resumo da Feature**
Descrição concisa da funcionalidade.

**Problema que Resolve**
Qual problema esta feature resolve?

**Solução Proposta**
Como você visualiza esta feature funcionando?

**Alternativas Consideradas**
Outras abordagens que você considerou?

**Contexto Adicional**
Screenshots, mockups, ou referências.
```

## 🎨 Design Guidelines

### Paleta de Cores
```css
/* Use sempre as variáveis CSS definidas */
--holo-blue: #00d4ff
--holo-purple: #9d4edd
--holo-cyan: #7209b7
--dark-bg: #0a0a0f
```

### Componentes
- Mantenha glassmorphism consistency
- Use animações suaves com Framer Motion
- Componentes devem ter loading states
- Implemente error boundaries quando necessário

### UX Patterns
- Feedback visual para todas as interações
- Estados de loading claros
- Mensagens de erro informativas
- Navegação intuitiva

## ✅ Checklist de PR

Antes de submeter um Pull Request:

- [ ] Código testado localmente
- [ ] Segue os padrões de código estabelecidos
- [ ] TypeScript compilando sem erros
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Animações funcionando corretamente
- [ ] Documentação atualizada se necessário
- [ ] Commit messages seguem convenção
- [ ] PR description é clara e detalhada

## 🎭 Code of Conduct

### Nossos Valores
- **Respeito**: Trate todos com cortesia
- **Colaboração**: Trabalhe em equipe
- **Qualidade**: Busque sempre a excelência
- **Aprendizado**: Compartilhe conhecimento

### Comportamentos Esperados
- Use linguagem acolhedora e inclusiva
- Seja respeitoso com diferentes pontos de vista
- Aceite críticas construtivas graciosamente
- Foque no que é melhor para a comunidade

## 📞 Contato

Para dúvidas sobre contribuição:
- Abra uma issue no GitHub
- Participe das discussions
- Entre em contato com os maintainers

---

**"O conhecimento compartilhado é o conhecimento multiplicado."** - Mestre Jedi Anônimo

Obrigado por contribuir para o Holocron Databank! 🌟
