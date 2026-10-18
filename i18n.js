// Godavari Water Watch — Bilingual Localization Engine
// Supports: English (en) | Telugu (te)

const I18N = {
  en: {
    // ── Shared Header ──────────────────────────────────────────────────────
    'brand.title': 'GODAVARI WATER WATCH',
    'brand.tag': 'Rajamahendravaram',
    'audit.label': 'Audit: 12 Sept 2026',
    'audit.next': 'Next Audit:',
    'audit.nextDate': 'First week of Nov 2026',
    'nav.pdf': 'Certified Lab PDF',
    'nav.map': 'View Satellite Map →',
    'nav.report': '← Read Report & 3 Demands',

    // ── Satellite Inspector Panel ───────────────────────────────────────────
    'stepper.label': 'BATHING GHATS & DRAINAGE OUTFALLS',
    'stepper.range': 'SELECT 1 – 7',
    'peek.btn.open': 'View Lab Details',
    'peek.btn.close': 'Hide Details',
    'photo.badge': 'Field Inspection',
    'video.btn': 'Watch Sample Collection Clip',
    'fitness.drinking': 'Drinking / Achamanam',
    'fitness.bathing': 'Bathing / Holy Dip',
    'params.label': 'Certified Lab Parameters (Sept 12, 2026)',
    'param.do': 'D.O. (≥5.0)',
    'param.ph': 'pH (6.5-8.5)',
    'param.coliform': 'Coliform (≤500)',
    'param.cod': 'COD mg/L',
    'panel.footer.link': 'Read Pushkaram Investigation →',
    'verdict.fit.bathing': 'FIT FOR BATHING (SNANAM)',
    'verdict.unfit.bathing': 'UNSAFE FOR BATHING',
    'verdict.fit.drink': 'FIT',
    'verdict.unfit.drink': 'UNFIT FOR DIRECT SIPPING',
    'verdict.hazard': 'HAZARDOUS',

    // ── Blog page chrome ───────────────────────────────────────────────────
    'blog.footer': 'Godavari Water Watch · Non-commercial public interest civic audit · Rajamahendravaram',
    'lang.toggle': 'తెలుగు',
  },

  te: {
    // ── Shared Header ──────────────────────────────────────────────────────
    'brand.title': 'గోదావరి నీటి పర్యవేక్షణ',
    'brand.tag': 'రాజమహేంద్రవరం',
    'audit.label': 'ఆడిట్: 12 సెప్టెంబర్ 2026',
    'audit.next': 'తదుపరి ఆడిట్:',
    'audit.nextDate': 'నవంబర్ 2026 మొదటి వారం',
    'nav.pdf': 'ధృవీకృత ల్యాబ్ PDF',
    'nav.map': 'ఉపగ్రహ మ్యాప్ చూడండి →',
    'nav.report': '← నివేదిక & 3 డిమాండ్లు',

    // ── Satellite Inspector Panel ───────────────────────────────────────────
    'stepper.label': 'స్నాన ఘాట్లు & డ్రైనేజీ కేంద్రాలు',
    'stepper.range': '1 – 7 ఎంచుకోండి',
    'peek.btn.open': 'ల్యాబ్ వివరాలు చూడండి',
    'peek.btn.close': 'వివరాలు మూసివేయండి',
    'photo.badge': 'క్షేత్ర పరిశీలన',
    'video.btn': 'నమూనా సేకరణ వీడియో చూడండి',
    'fitness.drinking': 'తాగునీరు / ఆచమనం',
    'fitness.bathing': 'స్నానం / పవిత్ర స్నానం',
    'params.label': 'ధృవీకృత ల్యాబ్ పారామీటర్లు (12 సెప్టెంబర్ 2026)',
    'param.do': 'D.O. (≥5.0)',
    'param.ph': 'pH (6.5–8.5)',
    'param.coliform': 'కొలిఫాం (≤500)',
    'param.cod': 'COD mg/L',
    'panel.footer.link': 'పుష్కర విచారణ చదవండి →',
    'verdict.fit.bathing': 'స్నానానికి అర్హం (స్నానం)',
    'verdict.unfit.bathing': 'స్నానానికి అనర్హం',
    'verdict.fit.drink': 'అర్హం',
    'verdict.unfit.drink': 'నేరుగా తాగడానికి అనర్హం',
    'verdict.hazard': 'ప్రమాదకరం',

    // ── Blog page chrome ───────────────────────────────────────────────────
    'blog.footer': 'గోదావరి నీటి పర్యవేక్షణ · అలాభాపేక్ష పౌర ఆడిట్ · రాజమహేంద్రవరం',
    'lang.toggle': 'English',
  }
};

// ── Active language state ────────────────────────────────────────────────────
let CURRENT_LANG = localStorage.getItem('gww_lang') || 'en';

function t(key) {
  return (I18N[CURRENT_LANG] && I18N[CURRENT_LANG][key]) || (I18N['en'][key]) || key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== undefined) el.textContent = val;
  });

  document.documentElement.lang = CURRENT_LANG;

  // Show/hide full-section language blocks
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.getAttribute('data-lang') === CURRENT_LANG ? '' : 'none';
  });

  // Fire custom event so app.js can re-render dynamic content
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: CURRENT_LANG } }));
}

function toggleLang() {
  CURRENT_LANG = CURRENT_LANG === 'en' ? 'te' : 'en';
  localStorage.setItem('gww_lang', CURRENT_LANG);
  applyI18n();
}

document.addEventListener('DOMContentLoaded', applyI18n);
