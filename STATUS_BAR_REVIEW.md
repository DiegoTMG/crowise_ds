# 📱 Status Bar Component — Análise de Revisão

**Data:** 18 de Março de 2026
**Status:** ⚠️ Parcialmente Pronto — Requer Correções

---

## 🎯 Resumo Executivo

O componente `StatusBar` apresenta **boa arquitetura e design**, mas **não está totalmente pronto** para npm/Figma. Existem **4 problemas críticos** e **3 recomendações** que precisam ser endereçados.

---

## ✅ Pontos Positivos

### Arquitetura Bem Estruturada
- ✓ Separação clara entre Platform (iOS/Android), Layout (Notch/No-Notch) e Mode (Light/Dark)
- ✓ Componente orquestrador bem documentado
- ✓ Exports de tipos bem organizados
- ✓ Código legível e bem comentado

### Aderência ao Figma
- ✓ Nomes de componentes e variantes condizem com Figma
- ✓ Dimensões corretas (iOS 44pt Notch, 20pt No-Notch, Android 24dp)
- ✓ Cores e tokens de modo (Light/Dark) corretos
- ✓ Ícones utilizados com SVG paths importados

### Qualidade de Código
- ✓ TypeScript bem tipado
- ✓ Props interface clara e bem documentada
- ✓ Padrão de defaults sensatos
- ✓ Uso correto de React

---

## ⚠️ Problemas Críticos

### 1. ❌ Não Exportado no `src/components/index.ts`

**Severidade:** CRÍTICA
**Localização:** `/src/components/index.ts`

O componente StatusBar não está sendo exportado do índice principal de componentes.

```tsx
// Atual — FALTA O STATUS BAR
export * from "./buttons";
export { Spinner } from "./Spinner";

// Deveria ser:
export * from "./buttons";
export { Spinner } from "./Spinner";
export { StatusBar } from "./status-bar/StatusBar";  // ← FALTA
```

**Impacto:** Consumidores não conseguem importar `StatusBar` da biblioteca.

---

### 2. ❌ Nomes de Pastas com Espaço

**Severidade:** ALTA
**Localização:**
- `Layout/iOS Notch/` → deveria ser `Layout/ios-notch/`
- `Layout/iOS No-Notch/` → deveria ser `Layout/ios-no-notch/`

Nomes com espaços causam:
- ❌ Problemas em sistemas de arquivos (especialmente Windows/CI)
- ❌ Dificuldade em importações dinâmicas
- ❌ Inconsistência com padrão kebab-case do projeto

```
// Problema:
import { IOSNotchStatusBar } from "../../Layout/iOS Notch/iOSNotch";

// Melhor:
import { IOSNotchStatusBar } from "../../layout/ios-notch/IosNotch";
```

---

### 3. ❌ Typo: "Plataform" → "Platform"

**Severidade:** MÉDIA
**Localização:** `src/components/status-bar/Plataform/`

```
Plataform/  ← Typo (português/espanhol)
├── Android/
└── iOS/

// Deveria ser:
Platform/   ← Correto (inglês)
├── Android/
└── iOS/
```

---

### 4. ❌ Sem Arquivo `index.ts` na Raiz de status-bar

**Severidade:** MÉDIA
**Localização:** `src/components/status-bar/`

Falta arquivo índice central para facilitar imports:

```tsx
// Deveria existir: src/components/status-bar/index.ts
export { StatusBar } from "./StatusBar";
export type { StatusBarProps, StatusBarMode, StatusBarPlatform } from "./StatusBar";
```

---

## 📋 Recomendações

### Recomendação 1: Criar Arquivo `index.ts`

```tsx
// src/components/status-bar/index.ts
export { StatusBar } from "./StatusBar";
export type {
  StatusBarProps,
  StatusBarMode,
  StatusBarPlatform
} from "./StatusBar";

// Exports internos (opcional, para documentação)
export { AndroidStatusBar } from "./platform/android/AndroidStatusBar";
export { IOSStatusBar, type StatusBarLayout } from "./platform/ios/IosStatusBar";
```

### Recomendação 2: Adicionar Arquivo de Tipos Compartilhados

```tsx
// src/components/status-bar/types.ts
export type StatusBarMode = "light" | "dark";
export type StatusBarPlatform = "ios" | "android";
export type StatusBarLayout = "notch" | "no-notch";

export interface StatusBarProps {
  platform?: StatusBarPlatform;
  mode?: StatusBarMode;
  layout?: StatusBarLayout; // iOS only
  time?: string;
  className?: string;
}
```

### Recomendação 3: Adicionar Figma Code Connect

```tsx
// src/components/status-bar/StatusBar.figma.tsx
import { figma } from "@figma/code-connect";
import { StatusBar } from "./StatusBar";

figma.connect(
  StatusBar,
  "https://www.figma.com/file/...",
  {
    example: (props) => <StatusBar platform="ios" mode="light" {...props} />,
  }
);
```

---

## 🔧 Plano de Ação (Prioridade)

| # | Tarefa | Prioridade | Tipo |
|---|--------|-----------|------|
| 1 | Renomear `Plataform/` → `Platform/` | CRÍTICA | Rename |
| 2 | Renomear pastas com espaço em kebab-case | CRÍTICA | Rename |
| 3 | Criar `src/components/status-bar/index.ts` | ALTA | Nova File |
| 4 | Exportar StatusBar em `src/components/index.ts` | CRÍTICA | Edit |
| 5 | Consolidar tipos em arquivo central | MÉDIA | Refactor |
| 6 | Adicionar Figma Code Connect | BAIXA | Nova Feature |
| 7 | Adicionar testes/stories (opcional) | BAIXA | Enhancement |

---

## 📊 Checklist de Prontidão para NPM

- [ ] ✓ Componente principal exportado
- [ ] ✓ Tipos bem definidos e exportados
- [ ] ✓ Nomes de arquivos sem espaços
- [ ] ✓ Sem typos em nomes de pastas
- [ ] ✓ Arquivo `index.ts` na raiz do componente
- [ ] ✓ Documentado com JSDoc
- [ ] ✓ Sem imports circulares
- [ ] ✓ Build/TypeCheck passando
- [ ] ✓ Figma Code Connect (opcional)

---

## 🎨 Aderência ao Figma

### ✓ Cumprido
- Variantes: platform × mode × layout
- Dimensões corretas por plataforma
- Cores e opacidades alinhadas
- Ícones/SVG com paths mapeados
- Espaçamento e positioning correto

### ⚠️ Recomendações Figma
- Adicionar documentação via Code Connect
- Links para frames do Figma nos comentários
- Exemplo: `// Based on Figma: IPhoneStatusBarUpper (light + dark)`

---

## 📦 Checklist Final para NPM Publish

```bash
# Antes de publicar, executar:
npm run build
npm run typecheck
npm test  # Se houver testes

# Verificar:
ls -la dist/components/  # Verificar se StatusBar foi buildado
cat dist/components/index.d.ts  # Verificar tipos exportados
```

---

## 💡 Conclusão

O componente **StatusBar tem boa qualidade**, mas precisa de **pequenos ajustes estruturais** antes de ser publicado no npm e estar completamente aderente ao Figma. As correções propostas levam aproximadamente **30-45 minutos** com a automatização correta.

**Próximas ações:** Executar as tarefas da tabela de prioridades acima.
