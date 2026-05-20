// ================================================
//  APP.JS — Lógica completa do app Daniela Gaia
// ================================================

// ── STATE ──
let STATE = {
  semanaAtual: 1,
  checklist: {},      // { "1-Segunda": true, ... }
  chatHistory: [],
  apiKey: "",
  nome: "Daniela",
  calMonth: "2026-06",
  isTyping: false,
};

const SYSTEM_PROMPT = `Você é o "Chefe Oficial" da Daniela Gaia — consultora de imagem e coloração pessoal em São Paulo.

SOBRE A DANIELA:
- Jornalista formada UFG, pós-graduada Marketing e Moda IED Milano, Consultora de Imagem Senac, especialista em Coloração Pessoal Studio Immagine
- Mãe recente — parte importante do posicionamento dela
- Site: danielagaia.com.br | Instagram: @danielagaia | TikTok: @gaia_daniela
- Serviços: Coloração Pessoal (R$299+), Consultoria de Guarda-Roupa (R$499+), Personal Shopping (R$599+), Imagem Corporativa (R$1.200+), Organização de Mala (R$299–399)
- Posicionamento: "Você é competente. Sua imagem comunica isso?"
- Público: mulheres profissionais 30–50 anos, SP

SEU PAPEL COMO CHEFE:
- Direto, exigente, mas que acredita genuinamente no trabalho dela
- Quando ela sugerir pauta: analise o ângulo, sugira melhorias, aponte formato ideal e CTA
- Quando pedir roteiro: entregue estruturado com hook, timecodes e legenda pronta
- Quando reportar números: analise, explique por que, ajuste o próximo passo
- Quando estiver travada: dê UMA ideia específica e concreta, não genérica
- Tom: linguagem brasileira natural, sem termos genéricos de marketing
- Máximo 200 palavras por resposta — ela está ocupada`;

// ── INIT ──
window.addEventListener('load', () => {
  loadState();
  renderInitialChat();
  renderRotina();
  renderPautas();
  renderCal();
  setupModals();
  hideSplash();
});

function hideSplash() {
  setTimeout(() => {
    document.getElementById('splash').classList.add('out');
    const app = document.getElementById('app');
    app.classList.remove('app-hidden');
    app.classList.add('app-visible');
  }, 1400);
}

// ── STATE PERSISTENCE ──
function loadState() {
  try {
    const saved = localStorage.getItem('dg-state');
    if (saved) {
      const parsed = JSON.parse(saved);
      STATE = { ...STATE, ...parsed };
    }
    // carrega api key separado (mais seguro)
    const key = localStorage.getItem('dg-apikey');
    if (key) STATE.apiKey = key;
    // preenche inputs de settings
    if (document.getElementById('settingApiKey')) {
      document.getElementById('settingApiKey').value = STATE.apiKey || '';
      document.getElementById('settingNome').value = STATE.nome || 'Daniela';
    }
    // atualiza badge
    updateWeekBadge();
  } catch(e) {}
}

function saveState() {
  try {
    const toSave = { semanaAtual: STATE.semanaAtual, checklist: STATE.checklist, nome: STATE.nome };
    localStorage.setItem('dg-state', JSON.stringify(toSave));
    if (STATE.apiKey) localStorage.setItem('dg-apikey', STATE.apiKey);
  } catch(e) {}
}

// ── VIEWS ──
function showView(name, btn) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const viewMap = { chat:'viewChat', rotina:'viewRotina', pautas:'viewPautas', cal:'viewCal' };
  const el = document.getElementById(viewMap[name]);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
  if (name === 'chat') scrollChatBottom();
}

// ── CHAT ──
function renderInitialChat() {
  const msgs = document.getElementById('chatMessages');
  msgs.innerHTML = '';
  addSysMsg('Início da conversa · ' + (SEMANAS_DATA[STATE.semanaAtual]?.mes || 'Junho 2026'));
  addChefeMsg(`<p><strong>${STATE.nome},</strong></p><p>Aqui é o seu espaço para debater pautas, pedir roteiros e reportar números. O sistema está ativo e rodando.</p><p>Use os atalhos abaixo ou escreva diretamente. <em>A única resposta errada é não responder.</em></p>`);
}

function addSysMsg(texto) {
  const msgs = document.getElementById('chatMessages');
  const el = document.createElement('div');
  el.className = 'sys-msg';
  el.textContent = texto;
  msgs.appendChild(el);
}

function addChefeMsg(html) {
  const msgs = document.getElementById('chatMessages');
  const el = document.createElement('div');
  el.className = 'msg-wrap chefe';
  el.innerHTML = `
    <div class="msg-avatar chefe">C</div>
    <div class="msg-content">
      <div class="msg-name">Chefe Oficial</div>
      <div class="msg-bubble">${html}</div>
    </div>`;
  msgs.appendChild(el);
  scrollChatBottom();
}

function addDaniMsg(texto) {
  const msgs = document.getElementById('chatMessages');
  const el = document.createElement('div');
  el.className = 'msg-wrap dani';
  el.innerHTML = `
    <div class="msg-avatar dani">D</div>
    <div class="msg-content">
      <div class="msg-name">${STATE.nome}</div>
      <div class="msg-bubble"><p>${escHtml(texto)}</p></div>
    </div>`;
  msgs.appendChild(el);
  scrollChatBottom();
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const el = document.createElement('div');
  el.className = 'typing-msg';
  el.id = 'typingEl';
  el.innerHTML = `
    <div class="msg-avatar chefe">C</div>
    <div class="typing-bubble">
      <div class="td"></div><div class="td"></div><div class="td"></div>
    </div>`;
  msgs.appendChild(el);
  scrollChatBottom();
}

function removeTyping() {
  const el = document.getElementById('typingEl');
  if (el) el.remove();
}

function scrollChatBottom() {
  setTimeout(() => {
    const scroll = document.getElementById('chatScroll');
    if (scroll) scroll.scrollTop = scroll.scrollHeight;
  }, 50);
}

function quickSend(texto) {
  const input = document.getElementById('msgInput');
  input.value = texto;
  input.focus();
  autoResize(input);
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMsg();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

async function sendMsg() {
  const input = document.getElementById('msgInput');
  const texto = input.value.trim();
  if (!texto || STATE.isTyping) return;

  STATE.isTyping = true;
  document.getElementById('sendBtn').disabled = true;
  input.value = '';
  input.style.height = 'auto';

  addDaniMsg(texto);
  STATE.chatHistory.push({ role: 'user', content: texto });

  // Contexto da semana atual
  const semDados = SEMANAS_DATA[STATE.semanaAtual];
  const ctx = semDados ? `Semana atual: ${STATE.semanaAtual} — Tema: "${semDados.tema}"` : '';
  const systemFull = SYSTEM_PROMPT + (ctx ? `\n\nCONTEXTO ATUAL: ${ctx}` : '');

  showTyping();

  try {
    if (!STATE.apiKey) {
      removeTyping();
      addChefeMsg(`<p><strong>${STATE.nome},</strong></p><p>Configure sua chave de API do Claude nas configurações (ícone ⚙️ no canto superior direito) para eu responder em tempo real.</p><p>Enquanto isso, posso te ajudar com o planejamento pelo sistema de e-mails automático.</p>`);
    } else {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemFull,
          messages: STATE.chatHistory
        })
      });
      const data = await resp.json();
      const reply = data.content?.[0]?.text || 'Erro ao obter resposta. Tente novamente.';
      removeTyping();
      STATE.chatHistory.push({ role: 'assistant', content: reply });
      addChefeMsg(formatReply(reply));
    }
  } catch(err) {
    removeTyping();
    addChefeMsg('<p>Erro de conexão. Verifique sua internet e tente novamente.</p>');
  }

  STATE.isTyping = false;
  document.getElementById('sendBtn').disabled = false;
  input.focus();
}

function formatReply(text) {
  return '<p>' + text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>') + '</p>';
}

// ── ROTINA ──
function renderRotina() {
  updateWeekBadge();
  const dados = SEMANAS_DATA[STATE.semanaAtual];
  if (!dados) return;

  const list = document.getElementById('dayList');
  if (!list) return;
  list.innerHTML = '';

  const hoje = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
  const hojeCapit = hoje.charAt(0).toUpperCase() + hoje.slice(1).replace('-feira','');

  dados.tarefas.forEach((t, i) => {
    const key = `${STATE.semanaAtual}-${t.dia}`;
    const done = !!STATE.checklist[key];
    const isHoje = t.dia === hojeCapit || (t.dia === 'Segunda' && hojeCapit.startsWith('Seg'));

    const card = document.createElement('div');
    card.className = `day-card${isHoje ? ' today' : ''}${done ? ' done' : ''}`;
    card.innerHTML = `
      <div class="day-card-header" onclick="toggleDay('${key}', this)">
        <div class="day-card-left">
          <div class="day-check"><span class="day-check-icon">✓</span></div>
          <div class="day-name-wrap">
            <div class="day-name">${t.dia}</div>
            <div class="day-task-title">${t.emoji} ${t.titulo}</div>
          </div>
        </div>
        <div class="day-card-arrow">▾</div>
      </div>
      <div class="day-card-body">
        <div class="day-card-content">${escHtml(t.corpo)}</div>
      </div>`;

    // Toggle expand
    card.querySelector('.day-card-header').addEventListener('click', function(e) {
      // Evita toggle duplo quando clicar no checkbox
      card.classList.toggle('expanded');
    });

    list.appendChild(card);
  });

  updateProgress();
}

function toggleDay(key, headerEl) {
  STATE.checklist[key] = !STATE.checklist[key];
  const card = headerEl.closest('.day-card');
  card.classList.toggle('done', STATE.checklist[key]);
  saveState();
  updateProgress();
}

function updateProgress() {
  const dados = SEMANAS_DATA[STATE.semanaAtual];
  if (!dados) return;
  const total = dados.tarefas.length;
  const done = dados.tarefas.filter(t => STATE.checklist[`${STATE.semanaAtual}-${t.dia}`]).length;
  const pct = Math.round(done / total * 100);

  const fill = document.getElementById('progressFill');
  const pctEl = document.getElementById('progressPct');
  const msg = document.getElementById('progressMsg');
  if (!fill) return;

  fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';

  const msgs = [
    'Clique nas tarefas para marcar como feito',
    'Bom começo! Continue.',
    'Mais da metade. Você está no caminho.',
    'Quase lá! Falta pouco.',
    '🎯 Semana completa! Você fez tudo.'
  ];
  if (msg) msg.textContent = pct === 0 ? msgs[0] : pct < 30 ? msgs[1] : pct < 60 ? msgs[2] : pct < 100 ? msgs[3] : msgs[4];
}

function updateWeekBadge() {
  const dados = SEMANAS_DATA[STATE.semanaAtual];
  const badge = document.getElementById('weekBadge');
  if (badge && dados) badge.textContent = `Semana ${STATE.semanaAtual} · ${dados.mes}`;
}

// ── PAUTAS ──
function renderPautas() {
  const list = document.getElementById('pautasList');
  if (!list) return;
  list.innerHTML = '';

  PAUTAS_DATA.forEach(p => {
    const card = document.createElement('div');
    card.className = `pauta-card ${p.tipo === 'trend' ? 'trend' : p.tipo === 'personal' ? 'personal' : ''}`;
    card.innerHTML = `
      <div class="pauta-priority ${p.tipo === 'trend' ? 'trend' : p.tipo === 'personal' ? 'personal' : ''}">
        ${p.prioridade === 'hot' ? '🔥 Prioridade' : p.tipo === 'trend' ? '📈 Trend' : '💜 Pessoal'}
      </div>
      <div class="pauta-week">${p.semana}</div>
      <div class="pauta-title">${p.titulo}</div>
      <div class="pauta-desc">${p.desc}</div>
      <div class="pauta-tags">
        ${p.tags.map((t,i) => `<span class="ptag ${p.tagTipos[i] || ''}">${t}</span>`).join('')}
      </div>`;
    card.addEventListener('click', () => {
      // Vai para o chat e preenche
      showView('chat', document.querySelector('.nav-item'));
      document.querySelectorAll('.nav-item')[0].classList.add('active');
      document.querySelectorAll('.nav-item').forEach((b,i) => { if(i!==0) b.classList.remove('active'); });
      const input = document.getElementById('msgInput');
      if (input) {
        input.value = `Quero debater a pauta: "${p.titulo}"`;
        autoResize(input);
        input.focus();
      }
    });
    list.appendChild(card);
  });
}

// ── CALENDÁRIO ──
function renderCal() {
  const container = document.getElementById('calContainer');
  if (!container) return;

  const [ano, mes] = STATE.calMonth.split('-').map(Number);
  const label = document.getElementById('monthLabel');
  if (label) {
    const nomes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    label.textContent = `${nomes[mes-1]} ${ano}`;
  }

  const primeiroDia = new Date(ano, mes-1, 1).getDay();
  const diasNoMes = new Date(ano, mes, 0).getDate();
  const hoje = new Date();
  const hojeStr = `${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,'0')}-${String(hoje.getDate()).padStart(2,'0')}`;
  const eventos = CAL_DATA[STATE.calMonth] || {};

  const dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  let html = '<div class="cal-weekdays">' + dias.map(d => `<div class="cal-wday">${d}</div>`).join('') + '</div>';
  html += '<div class="cal-days">';

  // Dias antes do mês
  const diasAntes = primeiroDia;
  const mesAnterior = mes === 1 ? 12 : mes - 1;
  const anoAnterior = mes === 1 ? ano - 1 : ano;
  const diasNoMesAnterior = new Date(anoAnterior, mesAnterior, 0).getDate();
  for (let i = diasAntes - 1; i >= 0; i--) {
    html += `<div class="cal-day other-month"><div class="cal-day-num">${diasNoMesAnterior - i}</div></div>`;
  }

  // Dias do mês
  for (let d = 1; d <= diasNoMes; d++) {
    const diaSemana = (primeiroDia + d - 1) % 7;
    const isSun = diaSemana === 0;
    const dateStr = `${ano}-${String(mes).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday = dateStr === hojeStr;
    const evs = eventos[String(d)] || [];

    html += `<div class="cal-day ${isSun ? 'sunday' : ''} ${isToday ? 'today' : ''}">`;
    html += `<div class="cal-day-num">${d}</div>`;
    evs.slice(0,2).forEach(ev => {
      html += `<div class="cal-event ${ev.tipo}">${ev.texto}</div>`;
    });
    if (evs.length > 2) html += `<div class="cal-event" style="color:var(--ink3);font-size:8px">+${evs.length-2}</div>`;
    html += '</div>';
  }

  // Completar grade
  const total = diasAntes + diasNoMes;
  const restante = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let i = 1; i <= restante; i++) {
    html += `<div class="cal-day other-month"><div class="cal-day-num">${i}</div></div>`;
  }

  html += '</div>';
  container.innerHTML = html;
}

// ── MODALS ──
function setupModals() {
  // Week button
  document.getElementById('weekBtn')?.addEventListener('click', () => {
    renderWeekSelector();
    openModal('weekModal');
  });
  document.getElementById('settingsBtn')?.addEventListener('click', () => {
    openModal('settingsModal');
  });

  // Calendar nav
  document.getElementById('prevMonth')?.addEventListener('click', () => {
    const [a, m] = STATE.calMonth.split('-').map(Number);
    const dt = new Date(a, m-2, 1);
    STATE.calMonth = `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}`;
    renderCal();
  });
  document.getElementById('nextMonth')?.addEventListener('click', () => {
    const [a, m] = STATE.calMonth.split('-').map(Number);
    const dt = new Date(a, m, 1);
    STATE.calMonth = `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}`;
    renderCal();
  });

  // Fechar modal clicando fora
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });
}

function renderWeekSelector() {
  const sel = document.getElementById('weekSelector');
  if (!sel) return;
  sel.innerHTML = '';
  Object.entries(SEMANAS_DATA).forEach(([num, dados]) => {
    const btn = document.createElement('button');
    btn.className = `week-opt ${String(STATE.semanaAtual) === num ? 'selected' : ''}`;
    btn.innerHTML = `<div class="wo-num">Semana ${num}</div><div class="wo-tema">${dados.tema}</div>`;
    btn.addEventListener('click', () => {
      STATE.semanaAtual = parseInt(num);
      saveState();
      renderRotina();
      renderInitialChat();
      closeModal('weekModal');
    });
    sel.appendChild(btn);
  });
}

function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

function saveSettings() {
  const nome = document.getElementById('settingNome')?.value.trim();
  const key  = document.getElementById('settingApiKey')?.value.trim();
  if (nome) STATE.nome = nome;
  if (key)  STATE.apiKey = key;
  saveState();
  const btn = document.querySelector('.save-btn');
  if (btn) {
    btn.textContent = '✓ Salvo!';
    btn.classList.add('saved');
    setTimeout(() => {
      btn.textContent = 'Salvar configurações';
      btn.classList.remove('saved');
      closeModal('settingsModal');
    }, 1500);
  }
}

// ── UTILS ──
function escHtml(str) {
  return str
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/\n/g,'<br>');
}
