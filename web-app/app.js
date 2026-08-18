/**
 * Aomori Trip Web App - Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initRouteTabs();
  renderSpots();
  renderFerrySection();
  renderBudgetSection();
  renderChecklist();
  renderTimeline('route-3'); // Default to Route 3 (Crown recommendation)
});

/**
 * 1. ルートタブ切り替え
 */
function initRouteTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const routeId = btn.getAttribute('data-route-id');
      
      // Update Active Tab
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Route Summary Card
      renderRouteSummary(routeId);

      // Update Day-by-Day Timeline
      renderTimeline(routeId);
    });
  });

  // Initial Render
  renderRouteSummary('route-3');
}

/**
 * ルート概要カードの描画
 */
function renderRouteSummary(routeId) {
  const route = TRIP_DATA.routes.find(r => r.id === routeId);
  const container = document.getElementById('route-summary-view');
  if (!route || !container) return;

  container.innerHTML = `
    <div class="route-header">
      <div>
        <div class="route-title">${route.name}</div>
        <p style="font-size:0.92rem; color:var(--text-muted); margin-top:4px;">${route.subtitle} — ${route.description}</p>
      </div>
      <div class="route-score ${route.badgeClass}">${route.badge}（スコア: ${route.score}）</div>
    </div>

    <div class="spec-grid">
      <div class="spec-item">
        <div class="spec-item-label">総走行距離</div>
        <div class="spec-item-val" style="color:var(--primary);">${route.totalDistance}</div>
      </div>
      <div class="spec-item">
        <div class="spec-item-label">総運転時間</div>
        <div class="spec-item-val">${route.totalDriveTime}</div>
      </div>
      <div class="spec-item">
        <div class="spec-item-label">1日平均運転</div>
        <div class="spec-item-val" style="color:var(--accent);">${route.avgDailyDrive}</div>
      </div>
      <div class="spec-item">
        <div class="spec-item-label">予約変更コスト</div>
        <div class="spec-item-val" style="font-size:0.95rem;">${route.changeCost}</div>
      </div>
    </div>

    <div class="pros-cons-grid">
      <div class="pro-card">
        <div class="pro-con-title"><span>✅</span> メリット・強み</div>
        <ul class="pro-con-list">
          ${route.pros.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
      <div class="con-card">
        <div class="pro-con-title"><span>⚠️</span> 注意点・デメリット</div>
        <ul class="pro-con-list">
          ${route.cons.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

/**
 * 2. 日別タイムラインの動的描画
 */
function renderTimeline(routeId) {
  const route = TRIP_DATA.routes.find(r => r.id === routeId);
  const container = document.getElementById('timeline-container');
  if (!container) return;

  if (!route.itinerary || route.itinerary.length === 0) {
    container.innerHTML = `
      <div style="background:#fee2e2; border:1px solid #fecaca; padding:20px; border-radius:10px; color:#991b1b; text-align:center;">
        <strong>❌ 【案1】は過酷な大回りのため詳細タイムラインは非推奨（省略）</strong><br>
        <span style="font-size:0.88rem;">1日平均4.8時間の運転となり、観光滞在時間が削られるため案3または案2を選択してください。</span>
      </div>
    `;
    return;
  }

  container.innerHTML = route.itinerary.map(day => `
    <div class="day-block">
      <div class="day-head">
        <div class="day-head-title">
          <span>🗓️</span> Day ${day.day} : ${day.title}
        </div>
        <div class="day-head-stats">🚗 走行 ${day.distance} / ${day.driveTime}</div>
      </div>
      <div class="day-content">
        <ul class="timeline-events">
          ${day.schedule.map(s => `
            <li class="event-row">
              <span class="event-time">${s.time}</span>
              <span>${s.text}</span>
            </li>
          `).join('')}
        </ul>
        <div class="stay-banner">
          <span>🏨</span> 宿泊: <strong>${day.stay}</strong>（${day.stayDetail}）
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 3. Sランク スポットカードの描画
 */
function renderSpots() {
  const container = document.getElementById('spots-container');
  if (!container) return;

  container.innerHTML = TRIP_DATA.spots.map(spot => `
    <div class="spot-card">
      <div>
        <div class="spot-top">
          <div class="spot-title">${spot.name}</div>
          <span class="spot-tag ${spot.category.includes('飯') ? 'spot-tag-food' : 'spot-tag-s'}">${spot.category}</span>
        </div>
        <div class="spot-meta">📍 ${spot.area} | ⏱️ ${spot.stayTime}</div>
        <div class="spot-desc">${spot.desc}</div>
        <div class="spot-tips">💡 <strong>TIPS:</strong> ${spot.tips}</div>
      </div>
      <div class="spot-actions">
        ${spot.tel ? `<a href="tel:${spot.tel}" class="btn-action-sm">📞 電話: ${spot.tel}</a>` : ''}
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapQuery)}" target="_blank" class="btn-action-sm">🗺️ 地図</a>
      </div>
    </div>
  `).join('');
}

/**
 * 4. むつ湾フェリー セクションの描画
 */
function renderFerrySection() {
  const container = document.getElementById('ferry-table-container');
  if (!container) return;

  const f = TRIP_DATA.ferry;
  container.innerHTML = `
    <table class="ferry-table">
      <thead>
        <tr>
          <th>行き先</th>
          <th>便名</th>
          <th>出港</th>
          <th>到着</th>
          <th>備考・推奨度</th>
        </tr>
      </thead>
      <tbody>
        ${f.timetable.map(t => `
          <tr style="${t.note.includes('推奨') ? 'background:#ecfdf5; font-weight:bold; color:#065f46;' : (t.note.includes('破綻') ? 'background:#fef2f2; color:#991b1b;' : '')}">
            <td>${t.bound}</td>
            <td>${t.no}</td>
            <td>${t.depart}</td>
            <td>${t.arrive}</td>
            <td>${t.note}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <div style="font-size:0.85rem; color:var(--text-muted); margin-top:8px;">
      ・<strong>運航期間</strong>: ${f.period}（所要 ${f.duration}・車両事前予約制）<br>
      ・<strong>予約電話</strong>: 蟹田本社 0174-22-3020 / 脇野沢 0175-44-3371<br>
      ・<strong>公式サイト</strong>: <a href="${f.webUrl}" target="_blank">${f.webUrl}</a>
    </div>
  `;
}

/**
 * 5. 予算シミュレータの描画
 */
function renderBudgetSection() {
  const container = document.getElementById('budget-table-container');
  if (!container) return;

  const total = TRIP_DATA.budgetBreakdown.reduce((sum, item) => sum + item.costPerPerson, 0);

  container.innerHTML = `
    <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
      <thead>
        <tr style="background:#f8fafc; border-bottom:2px solid var(--border);">
          <th style="padding:10px; text-align:left;">項目</th>
          <th style="padding:10px; text-align:right;">1人あたり概算</th>
          <th style="padding:10px; text-align:left;">備考・内訳</th>
        </tr>
      </thead>
      <tbody>
        ${TRIP_DATA.budgetBreakdown.map(b => `
          <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:10px; font-weight:700;">${b.item}</td>
            <td style="padding:10px; text-align:right; font-family:'Plus Jakarta Sans', sans-serif; font-weight:700;">${b.costPerPerson.toLocaleString()} 円</td>
            <td style="padding:10px; font-size:0.82rem; color:var(--text-muted);">${b.note}</td>
          </tr>
        `).join('')}
        <tr style="background:var(--primary-light); font-weight:800; border-top:2px solid var(--primary-border);">
          <td style="padding:12px; color:var(--primary-dark);">合計（1人あたり）</td>
          <td style="padding:12px; text-align:right; font-family:'Plus Jakarta Sans', sans-serif; font-size:1.2rem; color:var(--primary-dark);">
            約 ${total.toLocaleString()} 円
          </td>
          <td style="padding:12px; font-size:0.85rem; color:var(--primary-dark);">2人合計: 約 ${(total * 2).toLocaleString()} 円</td>
        </tr>
      </tbody>
    </table>
  `;
}

/**
 * 6. 予約チェックリスト（LocalStorage連動）
 */
function renderChecklist() {
  const container = document.getElementById('checklist-container');
  if (!container) return;

  container.innerHTML = `
    <div class="progress-wrap">
      <div style="display:flex; justify-content:space-between; font-size:0.82rem; font-weight:700; margin-bottom:4px;">
        <span>予約・手配の完了状況</span>
        <span id="checklist-progress-text">0 / ${TRIP_DATA.checklist.length} (0%)</span>
      </div>
      <div class="progress-bar-bg">
        <div id="checklist-progress-bar" class="progress-bar-fill"></div>
      </div>
    </div>
    <div class="checklist-box">
      ${TRIP_DATA.checklist.map((item, idx) => `
        <label class="check-row" for="check-${idx}">
          <input type="checkbox" id="check-${idx}" class="check-input" onchange="toggleCheck('${item.id}', this.checked)">
          <div>
            <div class="check-title">${item.title}</div>
            <div class="check-desc">${item.desc}</div>
          </div>
        </label>
      `).join('')}
    </div>
  `;

  // Restore Checked States
  TRIP_DATA.checklist.forEach((item, idx) => {
    const isChecked = localStorage.getItem('aomori_check_' + item.id) === 'true';
    const el = document.getElementById(`check-${idx}`);
    if (el) el.checked = isChecked;
  });

  updateProgress();
}

function toggleCheck(id, isChecked) {
  localStorage.setItem('aomori_check_' + id, isChecked);
  updateProgress();
}

function updateProgress() {
  let doneCount = 0;
  TRIP_DATA.checklist.forEach(item => {
    if (localStorage.getItem('aomori_check_' + item.id) === 'true') {
      doneCount++;
    }
  });

  const total = TRIP_DATA.checklist.length;
  const pct = Math.round((doneCount / total) * 100);

  const txt = document.getElementById('checklist-progress-text');
  const bar = document.getElementById('checklist-progress-bar');

  if (txt) txt.textContent = `${doneCount} / ${total} (${pct}%)`;
  if (bar) bar.style.width = `${pct}%`;
}
