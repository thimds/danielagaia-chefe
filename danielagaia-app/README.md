# Chefe · Daniela Gaia

Progressive Web App (PWA) do sistema de conteúdo da Daniela Gaia — consultora de imagem e coloração pessoal em São Paulo.

## O que é

App mobile instalável com 4 telas:

- **💬 Chat com o Chefe** — conversa ao vivo com Claude (Anthropic). A Daniela sugere pautas, pede roteiros, reporta números e recebe respostas do chefe estratégico em tempo real.
- **✅ Rotina semanal** — checklist interativo com as tarefas de cada dia da semana, progresso visual e conteúdo completo de cada tarefa.
- **📋 Pautas** — banco de pautas estratégicas baseadas em tendências reais. Clica em qualquer pauta e já abre o debate no chat.
- **📅 Calendário** — planejamento visual de junho e julho 2026 com todos os eventos e publicações marcados.

## Instalação no iPhone

1. Abra o link do GitHub Pages no **Safari**
2. Toque no botão de compartilhar (□↑)
3. Selecione **"Adicionar à Tela de Início"**
4. Toque em **"Adicionar"**

O app aparece na tela inicial como um app nativo.

## Configuração da API

Para o chat funcionar com respostas do Claude:

1. Acesse [console.anthropic.com](https://console.anthropic.com)
2. Crie uma conta e gere uma API Key
3. No app, toque em ⚙️ → cole a chave → Salvar

Sem a chave, o app funciona normalmente mas o chat mostra uma mensagem pedindo configuração.

## Publicar no GitHub Pages

```bash
# 1. Crie um repositório no GitHub (ex: danielagaia-chefe)
# 2. Suba todos os arquivos:
git init
git add .
git commit -m "inicial"
git remote add origin https://github.com/SEU_USUARIO/danielagaia-chefe.git
git push -u origin main

# 3. No repositório: Settings → Pages → Source: main → / (root) → Save
# 4. O link fica: https://SEU_USUARIO.github.io/danielagaia-chefe
```

## Estrutura

```
├── index.html          # App principal
├── manifest.json       # Config PWA
├── sw.js               # Service worker (offline)
├── css/
│   └── app.css         # Estilos completos
├── js/
│   ├── app.js          # Lógica do app
│   └── data.js         # Conteúdo das semanas e pautas
└── icons/
    ├── icon-192.png    # Ícone para dispositivos
    └── icon-512.png    # Ícone splash
```

## Atualizar conteúdo

- **Trocar de semana:** no app, toque no ícone 📅 no topo → selecione a semana atual
- **Adicionar pautas:** edite `js/data.js` → array `PAUTAS_DATA`
- **Adicionar semanas (julho+):** edite `js/data.js` → objeto `SEMANAS_DATA`

## Sistema completo

Este app faz parte do sistema maior que inclui:
- Automação de e-mails via Google Apps Script (`danielagaia-automation.gs`)
- E-mails das semanas 1–4 prontos (`danielagaia-emails-semanas1a4.html`)
- Planejamento completo de 2 meses (`danielagaia-sistema-conteudo.html`)
- Guia de configuração da automação (`danielagaia-guia-automacao.html`)

---

*Sistema desenvolvido para apoiar a rotina de conteúdo da @danielagaia*
