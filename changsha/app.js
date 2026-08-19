const AMAP_CONFIG = {
  key: "259d8f776aae8efb0d0c48cce0ffee94",
  securityJsCode: "962c62efe99065cd8153d6e9d0f6fd36",
};

const lodging = {
  name: "开宇大厦(劳动西路)",
  address: "开宇大厦(劳动西路) · 劳动西路363号(侯家塘地铁站3号口步行400米)",
  coords: [112.98675, 28.172028],
};

const itinerary = [
  {
    id: "day1",
    title: "Day 1",
    date: "8月21日 · 周五",
    pageTitle: "长沙第一天路线图",
    subtitle: "抵达长沙，入住后往湘江边慢慢走。",
    theme: "抵达日轻松安排",
    weather: {
      icon: "🌦️",
      summary: "雷阵雨 · 26–33℃",
      tip: "有阵雨和雷雨可能，抵达后外出请带伞，并留意短时强降水。",
    },
    heroText: "从长沙南站抵达后先到民宿安顿，去衡厨吃饭后再到 Sarasara coffee 坐坐；傍晚游橘子洲，晚上到渔人码头吃小龙虾。",
    summary: "长沙南站 → 开宇大厦 → 衡厨 → Sarasara coffee → 橘子洲 → 渔人码头小龙虾",
    overview: [
      "抵达长沙南站后先前往民宿，放下行李、稍作休整。",
      "民宿安顿后先到衡厨吃饭，再去 Sarasara coffee 坐坐。",
      "橘子洲面积较大，建议预留充足时间；晚饭安排在渔人码头。",
    ],
    stops: [
      {
        name: "长沙南站",
        address: "长沙南站 · 花侯路",
        coords: [113.06551, 28.147093],
        stay: "抵达后约 20 分钟",
        note: "抵达长沙的起点，取好行李后直接前往民宿。",
        tags: ["抵达点", "高铁站", "Day 1 起点"],
      },
      {
        name: "衡厨(贺龙店)",
        address: "衡厨(贺龙店) · 劳动西路308号凯华大厦B栋",
        coords: [112.983425, 28.172875],
        stay: "吃饭约 1 小时",
        note: "入住民宿后先来这里吃饭，再继续下午的咖啡与橘子洲行程。",
        tags: ["正餐", "贺龙体育场附近", "住宿后"],
      },
      {
        name: "Sarasara coffee",
        address: "Sarasara coffee · 韭菜园街道桐荫里社区1栋桐荫里3号",
        coords: [112.994645, 28.195532],
        stay: "约 1 小时",
        note: "腊肠狗主题咖啡厅，适合在前往橘子洲前休息、拍照和补充咖啡因。",
        tags: ["腊肠狗咖啡厅", "下午茶", "拍照"],
      },
      {
        name: "橘子洲风景名胜区",
        address: "橘子洲风景名胜区 · 橘子洲头2号",
        coords: [112.963081, 28.196505],
        stay: "约 2–3 小时",
        note: "建议傍晚前抵达，从洲头慢慢逛，视体力选择步行或景区交通。",
        tags: ["湘江夜景", "傍晚推荐", "晚饭前"],
      },
      {
        name: "靓虾二哥长沙地标小龙虾(渔人码头店)",
        address: "靓虾二哥长沙地标小龙虾(渔人码头店) · 潇湘北路1088号渔人码头商业广场20栋1楼1083-1092",
        coords: [112.96457, 28.231897],
        stay: "晚饭约 1.5 小时",
        note: "橘子洲后到渔人码头吃小龙虾，作为第一天晚上的正餐收尾。",
        tags: ["小龙虾", "渔人码头", "晚饭", "Day 1 收尾"],
      },
    ],
    sequence: [
      { type: "stop", stopIndex: 0 },
      { type: "lodging", label: "住宿", stay: "入住与休整约 1 小时", note: "抵达后先放下行李、稍作休整，再继续下午行程。" },
      { type: "stop", stopIndex: 1 },
      { type: "stop", stopIndex: 2 },
      { type: "stop", stopIndex: 3 },
      { type: "stop", stopIndex: 4 },
    ],
    reminders: [
      "长沙南站到民宿有一段距离，带大件行李时可优先考虑网约车。",
      "8 月 21 日有阵雨和雷雨可能，橘子洲行程请准备雨具并关注临时天气变化。",
      "橘子洲步行距离较长，建议穿舒适的鞋，并根据天气准备雨具或防晒。",
      "渔人码头晚间用餐客流较多，若抵达时间较晚，可提前确认排队和营业情况。",
    ],
  },
  {
    id: "day2",
    title: "Day 2",
    date: "8月22日 · 周六",
    pageTitle: "长沙第二天路线图",
    subtitle: "白天逛五一广场与黄兴路，晚上到贺龙体育场看演唱会。",
    theme: "市中心逛吃 + 演唱会",
    weather: {
      icon: "🌥️",
      summary: "小雨到多云 · 26–33℃",
      tip: "预报存在小雨可能，演唱会前建议确认场馆入场与雨具规定。",
    },
    heroText: "从民宿出发到五一广场吃饭、逛黄兴路步行街；回民宿休整后，再去贺龙体育场看凤凰传奇演唱会。",
    summary: "住宿 → 五一广场 → 黄兴路步行街 → 回住宿 → 贺龙体育场",
    overview: [
      "先从民宿出发，在五一广场一带解决午饭，再往黄兴路步行街慢逛。",
      "演唱会前返回民宿休整、充电和整理随身物品。",
      "贺龙体育场散场人流集中，提前规划返程并保留充足时间。",
    ],
    stops: [
      {
        name: "五一广场(地铁站)",
        address: "五一广场(地铁站) · 1号线;2号线",
        coords: [112.976433, 28.195317],
        stay: "吃饭与逛街约 2 小时",
        note: "以五一广场地铁站为集合定位，周边安排午饭后再往黄兴路步行街走。",
        tags: ["吃饭", "地铁 1/2 号线", "市中心"],
      },
      {
        name: "黄兴路步行街中心广场",
        address: "黄兴路步行街中心广场 · 黄兴中路与人民西路交汇处90米(黄兴广场地铁站2号口旁)",
        coords: [112.976424, 28.188459],
        stay: "约 1.5–2 小时",
        note: "饭后沿步行街慢逛，中心广场作为定位点，别把时间排得太满。",
        tags: ["步行街", "逛街", "黄兴广场地铁站"],
      },
      {
        name: "贺龙体育场",
        address: "贺龙体育场",
        coords: [112.982943, 28.178324],
        stay: "按演唱会场次安排",
        note: "凤凰传奇演唱会地点，建议比开场时间更早抵达，预留安检、检票和找座位时间。",
        tags: ["凤凰传奇演唱会", "提前入场", "Day 2 收尾"],
      },
    ],
    sequence: [
      { type: "lodging", label: "住宿出发", stay: "出发前约 20 分钟", note: "从民宿轻装出发，确认演唱会票、证件和充电宝已备好。" },
      { type: "stop", stopIndex: 0 },
      { type: "stop", stopIndex: 1 },
      { type: "lodging", label: "回到住宿", stay: "休整约 1–2 小时", note: "逛完步行街回民宿休整、充电，换好演唱会需要的装备再出发。" },
      { type: "stop", stopIndex: 2 },
    ],
    reminders: [
      "五一广场和黄兴路步行街人流密集，午饭尽量错开正午高峰。",
      "8 月 22 日有小雨可能，演唱会使用雨具前请先查看场馆要求。",
      "回民宿休整时确认演唱会票、身份证件、充电宝和雨具。",
      "演唱会散场后体育场周边叫车会较难，优先看地铁或步行至更易上车的位置。",
    ],
  },
];

const state = {
  currentDayIndex: 0,
  activeSequenceIndex: null,
  AMap: null,
  map: null,
  markers: [],
  lodgingMarker: null,
  routeLines: [],
  infoWindow: null,
  driving: null,
  walking: null,
  isMapStopPanelOpen: true,
  mapRenderToken: 0,
};

const pageTitle = document.querySelector("#page-title");
const heroText = document.querySelector("#hero-text");
const dayMeta = document.querySelector("#day-meta");
const stopCount = document.querySelector("#stop-count");
const dayTheme = document.querySelector("#day-theme");
const weatherCard = document.querySelector("#weather-card");
const dayOverview = document.querySelector("#day-overview");
const dayTitle = document.querySelector("#day-title");
const daySubtitle = document.querySelector("#day-subtitle");
const dayTabs = document.querySelector("#day-tabs");
const stopList = document.querySelector("#stop-list");
const dayReminders = document.querySelector("#day-reminders");
const mapRouteName = document.querySelector("#map-route-name");
const mapRouteSummary = document.querySelector("#map-route-summary");
const fitRouteButton = document.querySelector("#fit-route");
const mapHint = document.querySelector("#map-hint");
const mapStopPanel = document.querySelector("#map-stop-panel");
const mapStopList = document.querySelector("#map-stop-list");
const toggleMapStopPanelButton = document.querySelector("#toggle-map-stop-panel");

function getCurrentDay() {
  return itinerary[state.currentDayIndex];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSequenceStop(day, item) {
  return item.type === "lodging" ? lodging : day.stops[item.stopIndex];
}

function getPointDistance(start, end) {
  const [lng1, lat1] = start;
  const [lng2, lat2] = end;
  const toRad = (value) => (value * Math.PI) / 180;
  const earthRadius = 6378137;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getSegmentColor(index) {
  return ["#18705a", "#d97706", "#0f766e", "#2563eb", "#7c3aed"][index % 5];
}

function showHint(message) {
  mapHint.textContent = message;
  mapHint.classList.remove("hidden");
}

function hideHint() {
  mapHint.classList.add("hidden");
}

function renderTabs() {
  dayTabs.innerHTML = itinerary
    .map(
      (day, index) => `
        <button class="day-tab ${index === state.currentDayIndex ? "active" : ""}" data-day-index="${index}" type="button">
          <strong>${day.title}</strong>
          <span>${escapeHtml(day.subtitle)}</span>
        </button>
      `,
    )
    .join("");
}

function renderDay() {
  const day = getCurrentDay();
  document.title = day.pageTitle;
  pageTitle.textContent = day.pageTitle;
  heroText.textContent = day.heroText;
  dayMeta.textContent = `${day.title} · ${day.date}`;
  stopCount.textContent = `${day.sequence.length} 个停靠点`;
  dayTheme.textContent = day.theme;
  dayTitle.textContent = day.title;
  daySubtitle.textContent = day.subtitle;
  mapRouteName.textContent = `${day.title} 路线`;
  mapRouteSummary.textContent = day.summary;
  weatherCard.innerHTML = `
    <span class="weather-icon" aria-hidden="true">${day.weather.icon}</span>
    <p class="weather-main">${escapeHtml(day.date)} · ${escapeHtml(day.weather.summary)}</p>
    <p class="weather-tip">${escapeHtml(day.weather.tip)} 出发前建议再次查看临近预报。</p>
  `;
  dayOverview.innerHTML = day.overview.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  stopList.innerHTML = day.sequence
    .map((item, sequenceIndex) => {
      const stop = getSequenceStop(day, item);
      const isLodging = item.type === "lodging";
      const name = isLodging ? `★ ${item.label}` : stop.name;
      const stay = isLodging ? item.stay : stop.stay;
      const note = isLodging ? item.note : stop.note;
      const tags = isLodging ? ["民宿", "侯家塘附近", item.label] : stop.tags;
      return `
        <li class="stop-item selectable ${isLodging ? "lodging-stop" : ""} ${sequenceIndex === state.activeSequenceIndex ? "active" : ""}" data-sequence-index="${sequenceIndex}">
          <strong class="stop-name">${escapeHtml(name)}</strong>
          <span class="stop-meta">${escapeHtml(stay)}</span>
          <span class="stop-note">${escapeHtml(note)}</span>
          <span class="stop-note">定位：${escapeHtml(stop.address)}</span>
          <div class="stop-tags">${tags.map((tag) => `<span class="stop-tag">${escapeHtml(tag)}</span>`).join("")}</div>
        </li>
      `;
    })
    .join("");
  dayReminders.innerHTML = [...day.reminders, `当晚住宿：${lodging.name}，地址为 ${lodging.address}。`]
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  renderMapStopList();
}

function renderMapStopList() {
  const day = getCurrentDay();
  mapStopList.innerHTML = day.sequence
    .map((item, sequenceIndex) => {
      const stop = getSequenceStop(day, item);
      const isLodging = item.type === "lodging";
      return `
        <button class="map-stop-item ${isLodging ? "lodging" : ""} ${sequenceIndex === state.activeSequenceIndex ? "active" : ""}" data-map-sequence-index="${sequenceIndex}" type="button">
          <strong>${isLodging ? `★ ${escapeHtml(item.label)}` : `${sequenceIndex + 1}. ${escapeHtml(stop.name)}`}</strong>
          <span>${escapeHtml(isLodging ? lodging.name : stop.address)}</span>
        </button>
      `;
    })
    .join("");
}

function renderMapStopPanel() {
  mapStopPanel.classList.toggle("collapsed", !state.isMapStopPanelOpen);
  toggleMapStopPanelButton.textContent = state.isMapStopPanelOpen ? "收起" : "展开";
}

function buildInfoContent(day, item) {
  const stop = getSequenceStop(day, item);
  const isLodging = item.type === "lodging";
  return `
    <div class="amap-info">
      <h3>${escapeHtml(isLodging ? `★ ${item.label} · ${lodging.name}` : stop.name)}</h3>
      <p><strong>${day.title}</strong> · ${escapeHtml(isLodging ? item.stay : stop.stay)}</p>
      <p>${escapeHtml(stop.address)}</p>
      <p>${escapeHtml(isLodging ? item.note : stop.note)}</p>
    </div>
  `;
}

function focusSequence(sequenceIndex) {
  const day = getCurrentDay();
  const item = day.sequence[sequenceIndex];
  if (!item || !state.map) return;
  const stop = getSequenceStop(day, item);
  state.activeSequenceIndex = sequenceIndex;
  renderDay();
  state.map.setZoomAndCenter(item.type === "lodging" ? 15.2 : 15.5, stop.coords);
  state.infoWindow.setContent(buildInfoContent(day, item));
  state.infoWindow.open(state.map, stop.coords);
}

function clearMapOverlays() {
  state.markers.forEach((marker) => marker.setMap(null));
  state.lodgingMarker?.setMap(null);
  state.routeLines.forEach((line) => line.setMap(null));
  state.markers = [];
  state.lodgingMarker = null;
  state.routeLines = [];
}

function fitRoute() {
  if (state.map && state.markers.length) {
    state.map.setFitView([...state.markers, state.lodgingMarker, ...state.routeLines], false, [90, 90, 90, 90]);
  }
}

function searchDrivingSegment(start, end) {
  return new Promise((resolve) => {
    state.driving.search(start, end, (status, result) => {
      if (status !== "complete" || !result?.routes?.length) {
        resolve(null);
        return;
      }
      const path = [];
      result.routes[0].steps.forEach((step) => {
        if (step.path?.length) path.push(...step.path);
      });
      resolve({ mode: "driving", path: path.length ? path : [start, end] });
    });
  });
}

function searchWalkingSegment(start, end) {
  return new Promise((resolve) => {
    state.walking.search(start, end, (status, result) => {
      if (status !== "complete" || !result?.routes?.length) {
        resolve(null);
        return;
      }
      const path = [];
      result.routes[0].steps.forEach((step) => {
        if (step.path?.length) path.push(...step.path);
      });
      resolve({ mode: "walking", path: path.length ? path : [start, end] });
    });
  });
}

async function buildRouteSegments(day) {
  const segments = [];
  for (let index = 0; index < day.sequence.length - 1; index += 1) {
    const start = getSequenceStop(day, day.sequence[index]);
    const end = getSequenceStop(day, day.sequence[index + 1]);
    const directDistance = getPointDistance(start.coords, end.coords);
    let route = directDistance <= 1200 ? await searchWalkingSegment(start.coords, end.coords) : null;
    if (!route) route = await searchDrivingSegment(start.coords, end.coords);
    if (!route) route = { mode: "fallback", path: [start.coords, end.coords] };
    segments.push({ ...route, color: getSegmentColor(index) });
  }
  return segments;
}

async function renderMapDay() {
  if (!state.map) return;
  const day = getCurrentDay();
  const renderToken = ++state.mapRenderToken;
  clearMapOverlays();
  hideHint();

  const markerSequenceIndexes = day.stops.map((_, stopIndex) => day.sequence.findIndex((item) => item.type === "stop" && item.stopIndex === stopIndex));
  state.markers = day.stops.map((stop, stopIndex) => {
    const sequenceIndex = markerSequenceIndexes[stopIndex];
    const marker = new state.AMap.Marker({
      position: stop.coords,
      title: stop.name,
      anchor: "bottom-center",
      label: {
        direction: "top",
        content: `<div style="padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.94);border:1px solid rgba(0,0,0,.08);font-size:12px;">${sequenceIndex + 1}. ${escapeHtml(stop.name)}</div>`,
      },
    });
    marker.on("click", () => focusSequence(sequenceIndex));
    return marker;
  });

  const lodgingSequenceIndex = day.sequence.findIndex((item) => item.type === "lodging");
  state.lodgingMarker = new state.AMap.Marker({
    position: lodging.coords,
    title: lodging.name,
    anchor: "bottom-center",
    content: `
      <div style="display:flex;align-items:center;gap:6px;padding:4px 8px 4px 4px;border-radius:999px;background:rgba(255,255,255,0.96);border:1px solid rgba(24,112,90,0.22);box-shadow:0 8px 20px rgba(29,80,62,0.18);">
        <div style="display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#18705a;color:#fff;font-size:14px;line-height:1;">★</div>
        <span style="color:#18705a;font-size:12px;font-weight:700;white-space:nowrap;">住宿</span>
      </div>
    `,
  });
  state.lodgingMarker.on("click", () => focusSequence(lodgingSequenceIndex));

  const routeSegments = await buildRouteSegments(day);
  if (renderToken !== state.mapRenderToken) return;
  state.routeLines = routeSegments.map(
    (segment) =>
      new state.AMap.Polyline({
        path: segment.path,
        strokeColor: segment.color,
        strokeOpacity: 0.95,
        strokeWeight: segment.mode === "fallback" ? 4 : 6,
        strokeStyle: segment.mode === "walking" || segment.mode === "fallback" ? "dashed" : "solid",
        strokeDasharray: segment.mode === "walking" || segment.mode === "fallback" ? [10, 6] : undefined,
        showDir: segment.mode === "driving",
        lineJoin: "round",
        lineCap: "round",
      }),
  );
  state.map.add([...state.markers, state.lodgingMarker, ...state.routeLines]);
  if (routeSegments.some((segment) => segment.mode === "fallback")) {
    showHint("部分路段暂时未能获取导航路线，已显示兜底连线。");
  }
  if (Number.isInteger(state.activeSequenceIndex)) {
    focusSequence(state.activeSequenceIndex);
  } else {
    fitRoute();
  }
}

function activateDay(index) {
  state.currentDayIndex = index;
  state.activeSequenceIndex = null;
  renderTabs();
  renderDay();
  renderMapStopPanel();
  renderMapDay();
}

async function initMap() {
  window._AMapSecurityConfig = { securityJsCode: AMAP_CONFIG.securityJsCode };
  try {
    const AMap = await AMapLoader.load({
      key: AMAP_CONFIG.key,
      version: "2.0",
      plugins: ["AMap.Scale", "AMap.ToolBar", "AMap.Driving", "AMap.Walking"],
    });
    state.AMap = AMap;
    state.map = new AMap.Map("map", { viewMode: "3D", zoom: 12, center: lodging.coords });
    state.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -26), closeWhenClickMap: true });
    state.driving = new AMap.Driving({ policy: AMap.DrivingPolicy.LEAST_TIME, hideMarkers: true, showTraffic: false, autoFitView: false });
    state.walking = new AMap.Walking({ hideMarkers: true, autoFitView: false });
    state.map.addControl(new AMap.Scale());
    state.map.addControl(new AMap.ToolBar({ position: { right: "18px", top: "18px" } }));
    await renderMapDay();
  } catch (error) {
    console.error(error);
    showHint("地图初始化失败，请检查 key、安全密钥和网络环境。");
  }
}

dayTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day-index]");
  if (button) activateDay(Number(button.dataset.dayIndex));
});
stopList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-sequence-index]");
  if (item) focusSequence(Number(item.dataset.sequenceIndex));
});
mapStopList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-sequence-index]");
  if (button) focusSequence(Number(button.dataset.mapSequenceIndex));
});
toggleMapStopPanelButton.addEventListener("click", () => {
  state.isMapStopPanelOpen = !state.isMapStopPanelOpen;
  renderMapStopPanel();
});
fitRouteButton.addEventListener("click", fitRoute);

renderTabs();
renderDay();
renderMapStopPanel();
initMap();
