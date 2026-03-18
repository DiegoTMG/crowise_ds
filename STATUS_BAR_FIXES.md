# 🔧 Guia de Correção — StatusBar Component

## Problemas Identificados e Soluções

### Problema 1: Typo "Plataform" → "Platform"

**Passos:**

```bash
# 1. Renomear pasta
mv src/components/status-bar/Plataform src/components/status-bar/Platform

# 2. Atualizar import no StatusBar.tsx
# De: import { AndroidStatusBar } from "./Plataform/Android/AndroidStatusBar";
# Para: import { AndroidStatusBar } from "./Platform/Android/AndroidStatusBar";

# 3. Verificar se há mais referências
grep -r "Plataform" src/components/status-bar/
```

---

### Problema 2: Nomes de Pastas com Espaço

**Passos:**

```bash
# 1. Renomear pastas com espaço para kebab-case
mv "src/components/status-bar/Layout/iOS Notch" src/components/status-bar/Layout/ios-notch
mv "src/components/status-bar/Layout/iOS No-Notch" src/components/status-bar/Layout/ios-no-notch

# 2. Renomear arquivos também (opcional, mas recomendado)
mv src/components/status-bar/Layout/ios-notch/iOSNotch.tsx src/components/status-bar/Layout/ios-notch/IosNotch.tsx
mv src/components/status-bar/Layout/ios-no-notch/iOSNoNotch.tsx src/components/status-bar/Layout/ios-no-notch/IosNoNotch.tsx

# 3. Também renomear Platform iOS/Android
mv "src/components/status-bar/Platform/iOS" src/components/status-bar/Platform/ios
mv "src/components/status-bar/Platform/Android" src/components/status-bar/Platform/android

# 4. Renomear arquivos internos
mv src/components/status-bar/Platform/ios/iOSStatusBar.tsx src/components/status-bar/Platform/ios/IosStatusBar.tsx
mv src/components/status-bar/Platform/android/AndroidStatusBar.tsx src/components/status-bar/Platform/android/AndroidStatusBar.tsx
```

**Atualizar imports necessários:**

```tsx
// Em StatusBar.tsx
// import { AndroidStatusBar } from "./Plataform/Android/AndroidStatusBar";
import { AndroidStatusBar } from "./Platform/android/AndroidStatusBar";
// import { IOSStatusBar } from "./Plataform/iOS/iOSStatusBar";
import { IOSStatusBar } from "./Platform/ios/IosStatusBar";
```

---

### Problema 3: Criar Arquivo `index.ts` na Raiz de status-bar

**Arquivo novo:** `src/components/status-bar/index.ts`

```typescript
export { StatusBar } from "./StatusBar";
export type {
  StatusBarProps,
  StatusBarMode,
  StatusBarPlatform,
} from "./StatusBar";

export { IOSStatusBar } from "./Platform/ios/IosStatusBar";
export type { StatusBarLayout } from "./Platform/ios/IosStatusBar";

export { AndroidStatusBar } from "./Platform/android/AndroidStatusBar";
```

---

### Problema 4: Exportar StatusBar no `src/components/index.ts`

**Arquivo:** `src/components/index.ts`

**Alterar de:**
```typescript
export * from "./buttons";
export { Spinner } from "./Spinner";
```

**Para:**
```typescript
export * from "./buttons";
export { Spinner } from "./Spinner";
export * from "./status-bar";
```

---

## 📝 Consolidar Tipos (Recomendação)

**Arquivo novo:** `src/components/status-bar/types.ts`

```typescript
/**
 * Status Bar Component Types
 */

export type StatusBarMode = "light" | "dark";
export type StatusBarPlatform = "ios" | "android";
export type StatusBarLayout = "notch" | "no-notch";

export interface StatusBarProps {
  /** Target platform — 'ios' | 'android' */
  platform?: StatusBarPlatform;
  /** Color scheme — 'light' | 'dark' */
  mode?: StatusBarMode;
  /** iOS only — 'notch' (iPhone X+, 44pt) | 'no-notch' (iPhone 8−, 20pt) */
  layout?: StatusBarLayout;
  /** Clock string displayed in the bar, e.g. "9:41" or "1:20 PM" */
  time?: string;
  /** Additional Tailwind / CSS class names */
  className?: string;
}
```

**Depois, atualizar StatusBar.tsx:** para usar types.ts ao invés de importar de File/Light/LightMode.

---

## ✅ Ordre de Execução Recomendada

```
1. Renomear Plataform → Platform
   ↓
2. Renomear pastas/arquivos com espaço para kebab-case
   ↓
3. Atualizar todos os imports
   ↓
4. Criar arquivo index.ts em status-bar/
   ↓
5. Atualizar src/components/index.ts
   ↓
6. Criar types.ts (opcional)
   ↓
7. Executar npm run build && npm run typecheck
   ↓
8. Testar imports
```

---

## 🧪 Testes Pós-Correção

```bash
# Build
npm run build

# TypeCheck
npm run typecheck

# Verificar se exports funcionam
node -e "
const dist = require('./dist/components/index.js');
console.log('StatusBar exported:', !!dist.StatusBar);
console.log('Exports:', Object.keys(dist).filter(k => k.includes('Status')));
"

# Verificar types
cat dist/components/index.d.ts | grep -A 5 "StatusBar"
```

---

## 💾 Script Automático (Bash)

Se quiser renomear tudo de uma vez (com cuidado!):

```bash
#!/bin/bash

cd src/components/status-bar

# 1. Plataform → Platform
mv Plataform Platform

# 2. Pastas e arquivos com espaço
mv "Layout/iOS Notch" "Layout/ios-notch"
mv "Layout/iOS No-Notch" "Layout/ios-no-notch"
mv "Platform/iOS" "Platform/ios"
mv "Platform/Android" "Platform/android"

# 3. Renomear arquivos
mv "Layout/ios-notch/iOSNotch.tsx" "Layout/ios-notch/IosNotch.tsx"
mv "Layout/ios-no-notch/iOSNoNotch.tsx" "Layout/ios-no-notch/IosNoNotch.tsx"
mv "Platform/ios/iOSStatusBar.tsx" "Platform/ios/IosStatusBar.tsx"

# 4. Renomear Mode subpastas também para consistência
mv "Mode/Light" "Mode/light"
mv "Mode/Dark" "Mode/dark"
mv "Mode/light/LightMode.tsx" "Mode/light/LightMode.tsx"  # Manter nome se preferir

cd ../..
echo "✅ Renomeações completas!"
```

---

## 📌 Checklist Final

- [ ] Todos os nomes de pasta em kebab-case
- [ ] Typo "Plataform" corrigido
- [ ] Arquivo `index.ts` criado em status-bar/
- [ ] StatusBar exportado em `src/components/index.ts`
- [ ] Todos os imports atualizados
- [ ] `npm run build` passa sem erros
- [ ] `npm run typecheck` passa sem erros
- [ ] Types exportados corretamente
- [ ] Componente pode ser importado de `@diegogoncalves/cropwise/components`

---

## 🎯 Resultado Esperado

```typescript
// Após as correções, consumidores poderão fazer:

import { StatusBar } from "@diegogoncalves/cropwise/components";

export function App() {
  return (
    <StatusBar
      platform="ios"
      mode="light"
      layout="notch"
      time="9:41"
    />
  );
}
```

---

## ❓ Perguntas Frequentes

**P: Devo fazer todas as mudanças de uma vez?**
R: Sim, fazer um commit com todas as correções é melhor que múltiplos commits. Use Git para controlar as mudanças.

**P: E se houver imports dinâmicos ou referencias hardcoded?**
R: Use `grep -r "Plataform\|iOS Notch\|iOS No-Notch" src/` para encontrar todas as referências.

**P: Como testar localmente antes de publicar no npm?**
R: Execute `npm run build` e `npm run typecheck`, depois teste com outra pasta fazendo `npm install ../crowise_ds-main/dist`.

