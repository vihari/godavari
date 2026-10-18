// Godavari Water Watch - Full Screen Satellite GIS Explorer & Right Inspector Logic

let map = null;
let markers = {};
let activeGhatId = 'point-1';

document.addEventListener('DOMContentLoaded', () => {
  initSatelliteMap();
  renderStepper();
  initMobileDrawer();
  selectGhat('point-1');
});

// Setup Mobile Bottom Sheet Drawer (Peek vs Expanded)
function initMobileDrawer() {
  const panel = document.getElementById('inspector-panel');
  const handle = document.getElementById('drawer-toggle');
  const peekSummary = document.getElementById('mobile-peek-summary');
  const peekBtn = document.getElementById('peek-toggle-btn');

  function toggleDrawer(e) {
    if (window.innerWidth > 860) return;
    if (e) e.stopPropagation();
    panel.classList.toggle('expanded');
    updateDrawerButtonState();
  }

  if (handle) handle.addEventListener('click', toggleDrawer);
  if (peekSummary) peekSummary.addEventListener('click', toggleDrawer);
  if (peekBtn) peekBtn.addEventListener('click', toggleDrawer);

  // When clicking on the map, collapse the drawer on mobile
  if (map) {
    map.on('click', () => {
      if (window.innerWidth <= 860 && panel.classList.contains('expanded')) {
        panel.classList.remove('expanded');
        updateDrawerButtonState();
      }
    });
  }
}

function updateDrawerButtonState() {
  const panel = document.getElementById('inspector-panel');
  const btnText = document.querySelector('.peek-btn-text');
  if (!btnText || !panel) return;
  const isExpanded = panel.classList.contains('expanded');
  // Use i18n if available, else fall back to static strings
  if (typeof t === 'function') {
    btnText.textContent = isExpanded ? t('peek.btn.close') : t('peek.btn.open');
  } else {
    btnText.textContent = isExpanded ? 'Hide Details' : 'View Lab Details';
  }
}

// 1. Initialize High-Resolution Satellite Map (Esri World Imagery)
function initSatelliteMap() {
  const mapElement = document.getElementById('godavari-satellite-map');
  if (!mapElement || typeof L === 'undefined') return;

  // Initialize centered on Godavari riverfront in Rajahmundry
  map = L.map('godavari-satellite-map', {
    center: [17.018, 81.768],
    zoom: 13,
    zoomControl: true,
    attributionControl: false
  });

  // Reposition zoom control to top-left so it doesn't collide with the right panel
  map.zoomControl.setPosition('topleft');

  // Esri High-Resolution World Imagery
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18
  }).addTo(map);

  // Esri World Reference Overlay (Towns, bridges, boundaries)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
    opacity: 0.85
  }).addTo(map);

  // Subtle river flow path indicator
  const riverPoints = [
    [17.043, 81.762],
    [17.0407, 81.7637],
    [17.0276, 81.7683],
    [17.0228, 81.7683],
    [17.0132, 81.7697],
    [17.0063, 81.7668],
    [17.0031, 81.7670],
    [16.9932, 81.7720],
    [16.9850, 81.7760]
  ];

  L.polyline(riverPoints, {
    color: '#38bdf8',
    weight: 4,
    opacity: 0.6,
    dashArray: '8, 8'
  }).addTo(map);

  // Add Circular Pins for each of the 7 Ghats
  GODAVARI_DATA.ghats.forEach(ghat => {
    let pinColor = '#a07040';   // brass default
    if (ghat.pointNo === 4) pinColor = '#8b1a1a';    // deep red — Hazard
    else if (ghat.statusTheme === 'safe') pinColor = '#2d6a4f'; // forest green — Cat A

    const pinHtml = `
      <div style="
        background: ${pinColor};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 3px solid #ffffff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-weight: 800;
        font-size: 13px;
        font-family: 'JetBrains Mono', monospace;
        cursor: pointer;
        transition: transform 0.2s ease;
      " onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
        ${ghat.pointNo}
      </div>
    `;

    const icon = L.divIcon({
      className: 'custom-sat-pin',
      html: pinHtml,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const marker = L.marker([ghat.lat, ghat.lon], { icon: icon }).addTo(map);
    marker.on('click', () => {
      selectGhat(ghat.id);
    });

    markers[ghat.id] = marker;
  });
}

// 2. Render Stepper Buttons (1 to 7) in the Header of the Panel
function renderStepper() {
  const container = document.getElementById('stepper-container');
  if (!container) return;

  container.innerHTML = '';
  GODAVARI_DATA.ghats.forEach(ghat => {
    const btn = document.createElement('button');
    btn.className = `step-btn ${ghat.id === activeGhatId ? 'active' : ''} ${ghat.pointNo === 4 ? 'step-hazard' : ''}`;
    btn.innerText = ghat.pointNo;
    btn.title = ghat.name;
    btn.dataset.ghatId = ghat.id;
    btn.onclick = () => selectGhat(ghat.id);
    container.appendChild(btn);
  });
}

// 3. Select a Ghat and Populate the Scrollable Inspector Pane
function selectGhat(ghatId) {
  activeGhatId = ghatId;
  const ghat = GODAVARI_DATA.ghats.find(g => g.id === ghatId);
  if (!ghat) return;

  // Update Stepper Active State
  document.querySelectorAll('.step-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.ghatId === ghatId);
  });

  // Pan Map smoothly to the selected ghat coordinates
  if (map) {
    if (window.innerWidth > 900) {
      // Desktop: offset longitude so pin is not hidden behind the right panel
      map.flyTo([ghat.lat, ghat.lon + 0.006], 15, { duration: 1.0 });
    } else {
      // Mobile: offset latitude slightly downward so pin appears in the visible top half above the peek card
      map.flyTo([ghat.lat - 0.003, ghat.lon], 15, { duration: 0.8 });
    }
  }

  // Populate Mobile Peek Summary
  const peekName = document.getElementById('peek-ghat-name');
  const peekVerdict = document.getElementById('peek-verdict');
  if (peekName) peekName.innerText = `${ghat.pointNo}. ${ghat.name}`;
  if (peekVerdict) {
    peekVerdict.innerText = ghat.overallVerdict;
    peekVerdict.style.color = ghat.statusTheme === 'hazard' ? '#ff8787' : (ghat.statusTheme === 'caution' ? 'var(--warn-sienna)' : 'var(--safe-green)');
  }

  const photo = document.getElementById('site-photo');
  const photoCoords = document.getElementById('photo-coords');
  const videoLink = document.getElementById('ghat-video-link');
  const pointTag = document.getElementById('point-tag');
  const nameEl = document.getElementById('ghat-name');
  const teluguEl = document.getElementById('ghat-telugu');

  const drinkBadge = document.getElementById('drinking-badge');
  const drinkReason = document.getElementById('drinking-reason');
  const bathBadge = document.getElementById('bathing-badge');
  const bathReason = document.getElementById('bathing-reason');

  const doEl = document.getElementById('metric-do');
  const phEl = document.getElementById('metric-ph');
  const colEl = document.getElementById('metric-coliform');
  const codEl = document.getElementById('metric-cod');

  if (photo) {
    photo.src = ghat.image;
    photo.alt = ghat.name;
  }
  if (videoLink) {
    if (ghat.video) {
      videoLink.href = ghat.video;
      videoLink.style.display = 'inline-flex';
      videoLink.title = `Watch certified sample collection video clip at ${ghat.name}`;
    } else {
      videoLink.style.display = 'none';
    }
  }
  if (photoCoords) photoCoords.innerText = `${ghat.lat.toFixed(4)}°N, ${ghat.lon.toFixed(4)}°E · Sept 12`;
  if (pointTag) pointTag.innerText = `POINT ${ghat.pointNo} · ${ghat.sampleCode}`;
  if (nameEl) nameEl.innerText = ghat.name;
  if (teluguEl) teluguEl.innerText = `${ghat.teluguName} · ${ghat.landmark}`;

  // Drinking Fitness
  const drinkCard = drinkBadge ? drinkBadge.closest('.fitness-card') : null;
  if (drinkBadge) {
    drinkBadge.className = `fitness-badge ${ghat.drinkingFitness.badgeClass}`;
    const fitLabel = typeof t === 'function' ? t('verdict.fit.drink') : 'FIT (WITH DISINFECTION)';
    const unfitLabel = ghat.pointNo === 4
      ? (typeof t === 'function' ? t('verdict.hazard') : 'HAZARDOUS')
      : (typeof t === 'function' ? t('verdict.unfit.drink') : 'UNFIT FOR DIRECT SIPPING');
    drinkBadge.innerText = ghat.drinkingFitness.isFit ? fitLabel : unfitLabel;
  }
  if (drinkCard) {
    drinkCard.classList.remove('card-safe', 'card-warn', 'card-hazard');
    if (ghat.drinkingFitness.badgeClass === 'badge-fit') drinkCard.classList.add('card-safe');
    else if (ghat.drinkingFitness.badgeClass === 'badge-hazard') drinkCard.classList.add('card-hazard');
    else drinkCard.classList.add('card-warn');
  }
  if (drinkReason) drinkReason.innerText = ghat.drinkingFitness.reason;

  // Bathing Fitness
  const bathCard = bathBadge ? bathBadge.closest('.fitness-card') : null;
  if (bathBadge) {
    bathBadge.className = `fitness-badge ${ghat.bathingFitness.badgeClass}`;
    const bathFitLabel = typeof t === 'function' ? t('verdict.fit.bathing') : 'FIT FOR BATHING (SNANAM)';
    const bathUnfitLabel = typeof t === 'function' ? t('verdict.unfit.bathing') : 'UNSAFE FOR BATHING';
    bathBadge.innerText = ghat.bathingFitness.isFit ? bathFitLabel : bathUnfitLabel;
  }
  if (bathCard) {
    bathCard.classList.remove('card-safe', 'card-warn', 'card-hazard');
    if (ghat.bathingFitness.badgeClass === 'badge-fit') bathCard.classList.add('card-safe');
    else if (ghat.bathingFitness.badgeClass === 'badge-hazard') bathCard.classList.add('card-hazard');
    else bathCard.classList.add('card-warn');
  }
  if (bathReason) bathReason.innerText = ghat.bathingFitness.reason;

  // Tested Parameters Strip
  if (doEl) doEl.innerText = ghat.metrics.do;
  if (phEl) phEl.innerText = ghat.metrics.ph;
  if (colEl) colEl.innerText = ghat.metrics.coliform;
  if (codEl) codEl.innerText = ghat.metrics.cod;

  // Scroll panel back to top smoothly
  const scrollContainer = document.getElementById('panel-scroll-area');
  if (scrollContainer) scrollContainer.scrollTop = 0;
}

// Re-render panel whenever language changes
document.addEventListener('langchange', () => {
  selectGhat(activeGhatId);
  updateDrawerButtonState();
});
