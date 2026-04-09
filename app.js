const AMAP_CONFIG = {
  key: "259d8f776aae8efb0d0c48cce0ffee94",
  securityJsCode: "962c62efe99065cd8153d6e9d0f6fd36",
};

const STORAGE_KEY = "xian-travel-itinerary";

const globalReminders = [
  "陕西历史博物馆如果想去，至少提前一周预约；这份四日版优先保住核心路线，没抢到票也不影响整体体验。",
  "大唐不夜城和音乐喷泉都不需要额外租板凳，写真 99 元通常只是入门价。",
  "西安城墙建议半程骑行，不建议硬骑一整圈。",
  "兵马俑和华清宫一线暴晒、排队都很明显，遮阳伞、厚水、运动鞋是刚需。",
  "回民街、永兴坊都尽量避开主街正门口店铺，往侧巷找老店更稳。",
];

const defaultItinerary = [
  {
    id: "day1",
    title: "Day 1",
    subtitle: "大雁塔到大唐不夜城，先把西安夜游气氛拉满",
    summary: "宗教古建 + 音乐喷泉 + 夜景步行街",
    color: "#8f2d1f",
    stops: [
      {
        name: "西安咸阳国际机场T3航站楼",
        address: "西安咸阳国际机场T3航站楼 · 西安咸阳国际机场内",
        coords: [108.761401, 34.435045],
        stay: "约 40 分钟",
        note: "作为 Day 1 的落地起点，建议先出发去市区再开始正式游览。",
        tags: ["落地起点", "机场出发", "接驳市区"],
      },
      {
        name: "大慈恩寺",
        address: "大慈恩寺 · 慈恩路1号",
        coords: [108.96418, 34.217954],
        stay: "约 1.5 小时",
        note: "按景区入口定位，下午 4 点后进更舒服，门票 30 元，登塔另加 25 元。",
        tags: ["景区入口", "建议下午入场", "登塔另收费"],
      },
      {
        name: "大雁塔北广场",
        address: "大雁塔北广场 · 芙蓉东路3号",
        coords: [108.964342, 34.220998],
        stay: "约 40 分钟",
        note: "按北广场主到达区域定位，音乐喷泉常见时段为晚 7 点、9 点，免费，别租板凳。",
        tags: ["主到达区", "喷泉免费", "别租板凳"],
      },
      {
        name: "大唐不夜城",
        address: "大唐不夜城 · 雁塔南路428号",
        coords: [108.964046, 34.213866],
        stay: "约 2.5 小时",
        note: "按不夜城北口主进入段定位，适合晚间慢走看演出和灯光，银泰百货三楼袁家村吃饭更稳。",
        tags: ["主入口段", "夜游核心", "拍照易加价", "星巴克旁小路打车"],
      },
      {
        name: "银泰百货(曲江银泰城店)",
        address: "银泰百货(曲江银泰城店) · 雁塔南路410号",
        coords: [108.964004, 34.20672],
        stay: "约 1 小时",
        note: "适合作为 Day 1 收尾吃饭点，三楼袁家村是这条线里更稳妥的用餐选择。",
        tags: ["晚饭推荐", "购物餐饮", "Day 1 收尾"],
      },
    ],
    reminders: [
      "写真店低价套餐通常只是引流，进店后加项目很常见。",
      "拍喷泉和夜景时注意保留手机电量，夜间人流密度高。",
      "不夜城散场后从星巴克旁边小路出去更容易叫到车。",
    ],
  },
  {
    id: "day2",
    title: "Day 2",
    subtitle: "城门、城墙、钟鼓楼一线，适合傍晚开始",
    summary: "古城防御体系 + 城墙骑行 + 城市中轴夜景",
    color: "#b85c38",
    stops: [
      {
        name: "含光门博物馆",
        address: "含光门博物馆",
        coords: [108.939838, 34.252168],
        stay: "约 20 分钟",
        note: "买城墙票通常可顺带参观，体量不大，适合作为起点。",
        tags: ["短时参观", "城墙票联动"],
      },
      {
        name: "西安城墙永宁门段",
        address: "永宁门登城口",
        coords: [108.946985, 34.247488],
        stay: "约 2 小时",
        note: "下午 6 点后上城墙观感更好，建议只骑半小时再返回。",
        tags: ["傍晚最佳", "骑半程即可"],
      },
      {
        name: "钟楼",
        address: "西安钟楼",
        coords: [108.948024, 34.259436],
        stay: "约 40 分钟",
        note: "登楼门票 30 元，开元商场五楼是常见拍摄机位。",
        tags: ["机位推荐", "登楼观四街"],
      },
      {
        name: "鼓楼",
        address: "西安鼓楼",
        coords: [108.947228, 34.259906],
        stay: "约 30 分钟",
        note: "和钟楼联票通常更划算，夜景完整度更高。",
        tags: ["联票更划算"],
      },
    ],
    reminders: [
      "城墙很大，风景虽好但体力消耗比想象大，量力而行。",
      "从城墙下来到钟楼可考虑三蹦子，短距离接驳更省脚。",
      "钟鼓楼晚间人多，拍照尽量错开整点前后。",
    ],
  },
  {
    id: "day3",
    title: "Day 3",
    subtitle: "小雁塔和西安博物院做文化日，最后去永兴坊吃饭",
    summary: "塔院慢逛 + 博物馆平替 + 小吃收尾",
    color: "#546a7b",
    stops: [
      {
        name: "小雁塔",
        address: "小雁塔",
        coords: [108.942818, 34.240693],
        stay: "约 1 小时",
        note: "免费但通常需要预约，古塔和园林环境都适合慢逛。",
        tags: ["需预约", "园林感强"],
      },
      {
        name: "西安博物院",
        address: "西安博物院",
        coords: [108.943559, 34.239764],
        stay: "约 2 小时",
        note: "免费馆，作为陕历博平替很合适，馆藏足够扎实。",
        tags: ["免费", "陕历博平替"],
      },
      {
        name: "永兴坊",
        address: "永兴坊",
        coords: [108.968232, 34.268915],
        stay: "约 1.5 小时",
        note: "建议主要吃饭放在侧巷或人稍少的店，不用强攻主街。",
        tags: ["小吃集中", "避开主街"],
      },
    ],
    reminders: [
      "如果你成功抢到陕历博门票，可把今天下午改去陕历博，永兴坊放晚饭时段。",
      "博物馆日建议穿舒适鞋，站立和慢走时间会比预期长。",
      "永兴坊和回民街一样，别在最显眼门头直接下单。",
    ],
  },
  {
    id: "day4",
    title: "Day 4",
    subtitle: "临潼一整天，兵马俑加华清宫是体力和时间大项",
    summary: "兵马俑核心线 + 华清宫 + 晚间长恨歌可选",
    color: "#476c53",
    stops: [
      {
        name: "秦始皇兵马俑博物馆",
        address: "秦始皇兵马俑博物馆",
        coords: [109.273187, 34.385277],
        stay: "约 3 小时",
        note: "无地铁直达，下午 4 点左右入园可避开部分团客高峰，但注意闭园时间。",
        tags: ["排队多", "防晒补水", "下午错峰"],
      },
      {
        name: "华清宫",
        address: "华清宫",
        coords: [109.212287, 34.366039],
        stay: "约 2.5 小时",
        note: "不请讲解容易只看成几个池子，可搭配骊山或缆车。",
        tags: ["讲解更值", "可接骊山"],
      },
      {
        name: "长恨歌演出地",
        address: "长恨歌演出地",
        coords: [109.214564, 34.364231],
        stay: "约 70 分钟",
        note: "想看演出就别买太靠前的位置，中段区域更平衡。",
        tags: ["中段座位更舒适", "旅行社常有优惠"],
      },
    ],
    reminders: [
      "兵马俑动线常见三段排队，记得补水、防晒、轻装。",
      "《长恨歌》票可多比几家旅行社，常比平台价低。",
      "前排会更热，喷火和烟花阶段体感明显。",
    ],
  },
];

function cloneDefaultItinerary() {
  return JSON.parse(JSON.stringify(defaultItinerary));
}

function loadItinerary() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return cloneDefaultItinerary();
    }

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : cloneDefaultItinerary();
  } catch (error) {
    console.error(error);
    return cloneDefaultItinerary();
  }
}

const state = {
  currentDayIndex: 0,
  selectedStopIndex: null,
  searchPois: [],
  isMapStopPanelOpen: true,
  map: null,
  AMap: null,
  infoWindow: null,
  placeSearch: null,
  driving: null,
  walking: null,
  dayLayers: [],
  itinerary: loadItinerary(),
};

const dayTabs = document.querySelector("#day-tabs");
const stopList = document.querySelector("#stop-list");
const dayReminders = document.querySelector("#day-reminders");
const globalReminderList = document.querySelector("#global-reminders");
const dayTitle = document.querySelector("#day-title");
const daySubtitle = document.querySelector("#day-subtitle");
const mapRouteName = document.querySelector("#map-route-name");
const mapRouteSummary = document.querySelector("#map-route-summary");
const mapHint = document.querySelector("#map-hint");
const fitRouteButton = document.querySelector("#fit-route");
const mapStopPanel = document.querySelector("#map-stop-panel");
const mapStopList = document.querySelector("#map-stop-list");
const toggleMapStopPanelButton = document.querySelector("#toggle-map-stop-panel");
const locationEditor = document.querySelector("#location-editor");
const searchEditor = document.querySelector("#search-editor");
const searchStopName = document.querySelector("#search-stop-name");
const searchStopMeta = document.querySelector("#search-stop-meta");
const locationSearchInput = document.querySelector("#location-search-input");
const searchLocationsButton = document.querySelector("#search-locations");
const searchResults = document.querySelector("#search-results");
const resetLocationsButton = document.querySelector("#reset-locations");

function persistItinerary() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.itinerary));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDistance(distance) {
  return distance >= 1000 ? `${(distance / 1000).toFixed(1)} km` : `${Math.round(distance)} m`;
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.max(1, Math.round((seconds % 3600) / 60));
  return hours > 0 ? `${hours} 小时 ${minutes} 分钟` : `${minutes} 分钟`;
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
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadius * c;
}

function getSegmentColor(dayColor, segmentIndex) {
  const palette = [dayColor, "#d97706", "#0f766e", "#7c3aed", "#2563eb", "#be123c"];
  return palette[segmentIndex % palette.length];
}

function renderGlobalReminders() {
  globalReminderList.innerHTML = globalReminders.map((item) => `<li>${item}</li>`).join("");
}

function renderTabs() {
  dayTabs.innerHTML = state.itinerary
    .map(
      (day, index) => `
        <button class="day-tab ${index === state.currentDayIndex ? "active" : ""}" data-day-index="${index}" type="button">
          <strong>${day.title}</strong>
          <span>${day.subtitle}</span>
        </button>
      `,
    )
    .join("");
}

function renderDayContent(index) {
  const day = state.itinerary[index];
  const currentLayer = state.dayLayers[index];
  dayTitle.textContent = day.title;
  daySubtitle.textContent = day.subtitle;
  mapRouteName.textContent = `${day.title} 路线`;

  if (currentLayer?.routeInfo) {
    const hasWalking = currentLayer.routeInfo.segments?.some((segment) => segment.mode === "walking");
    const fallbackCount = currentLayer.routeInfo.segments?.filter((segment) => segment.isFallback).length || 0;
    mapRouteSummary.textContent = `${day.summary} · ${hasWalking ? "混合路线" : "驾车路线"}约 ${formatTime(currentLayer.routeInfo.totalTime)} · ${formatDistance(currentLayer.routeInfo.totalDistance)}${fallbackCount ? ` · ${fallbackCount} 段为直线兜底` : ""}`;
  } else {
    mapRouteSummary.textContent = `${day.summary} · 路线计算中`;
  }

  stopList.innerHTML = day.stops
    .map(
      (stop, stopIndex) => `
        <li class="stop-item selectable ${stopIndex === state.selectedStopIndex ? "active" : ""}" data-stop-select="${stopIndex}">
          <strong class="stop-name">${stop.name}</strong>
          <span class="stop-meta">${stop.stay}</span>
          <span class="stop-note">${stop.note}</span>
          <span class="stop-note">定位：${escapeHtml(stop.address || "未设置")}</span>
          <div class="stop-tags">
            ${stop.tags.map((tag) => `<span class="stop-tag">${tag}</span>`).join("")}
          </div>
        </li>
      `,
    )
    .join("");

  dayReminders.innerHTML = day.reminders.map((item) => `<li>${item}</li>`).join("");
  renderMapStopList(index);
}

function renderMapStopList(index) {
  const day = state.itinerary[index];
  mapStopList.innerHTML = day.stops
    .map(
      (stop, stopIndex) => `
        <button class="map-stop-item ${stopIndex === state.selectedStopIndex ? "active" : ""}" data-map-stop-index="${stopIndex}" type="button">
          <strong>${stopIndex + 1}. ${escapeHtml(stop.name)}</strong>
          <span>${escapeHtml(stop.address || "未设置地址")}</span>
        </button>
      `,
    )
    .join("");
}

function renderMapStopPanel() {
  mapStopPanel.classList.toggle("collapsed", !state.isMapStopPanelOpen);
  toggleMapStopPanelButton.textContent = state.isMapStopPanelOpen ? "收起" : "展开";
}

function renderLocationEditor() {
  const day = state.itinerary[state.currentDayIndex];
  locationEditor.innerHTML = day.stops
    .map(
      (stop, stopIndex) => `
        <button class="location-button ${stopIndex === state.selectedStopIndex ? "active" : ""}" data-stop-select="${stopIndex}" type="button">
          <strong>${day.title} · ${stop.name}</strong>
          <span>${escapeHtml(stop.address || "未设置地址")}</span>
          <span>${escapeHtml(`${stop.coords[0]}, ${stop.coords[1]}`)}</span>
        </button>
      `,
    )
    .join("");
}

function renderSearchPanel() {
  const day = state.itinerary[state.currentDayIndex];
  const stop = day.stops[state.selectedStopIndex];
  if (!stop) {
    searchEditor.classList.add("hidden");
    searchResults.innerHTML = "";
    return;
  }

  searchEditor.classList.remove("hidden");
  searchStopName.textContent = `${day.title} · ${stop.name}`;
  searchStopMeta.textContent = `当前定位：${stop.address || "未设置"} ｜ 当前坐标：${stop.coords[0]}, ${stop.coords[1]}`;
  if (!locationSearchInput.value.trim()) {
    locationSearchInput.value = stop.address || stop.name;
  }
}

function renderEditor() {
  renderLocationEditor();
  renderSearchPanel();
}

function buildInfoContent(day, stop) {
  return `
    <div class="amap-info">
      <h3>${stop.name}</h3>
      <p><strong>${day.title}</strong> · ${stop.stay}</p>
      <p>${escapeHtml(stop.address || "未设置地址")}</p>
      <p>${stop.note}</p>
    </div>
  `;
}

function focusStop(stopIndex, zoom = 15.6) {
  const day = state.itinerary[state.currentDayIndex];
  const stop = day.stops[stopIndex];
  if (!stop) {
    return;
  }

  state.selectedStopIndex = stopIndex;
  locationSearchInput.value = stop.address || stop.name;
  renderDayContent(state.currentDayIndex);
  renderEditor();

  if (!state.map || !state.infoWindow) {
    return;
  }

  state.map.setZoomAndCenter(zoom, stop.coords);
  state.infoWindow.setContent(buildInfoContent(day, stop));
  state.infoWindow.open(state.map, stop.coords);
}

function createMarker(AMap, day, stop, index) {
  const marker = new AMap.Marker({
    position: stop.coords,
    title: stop.name,
    anchor: "bottom-center",
    label: {
      direction: "top",
      content: `<div style="padding:4px 8px;border-radius:999px;background:rgba(255,255,255,0.94);border:1px solid rgba(0,0,0,0.08);font-size:12px;">${index + 1}. ${escapeHtml(stop.name)}</div>`,
    },
  });

  marker.on("click", () => {
    focusStop(index);
  });

  return marker;
}

function searchDrivingSegment(start, end) {
  return new Promise((resolve) => {
    state.driving.search(start, end, (status, result) => {
      if (status !== "complete" || !result?.routes?.length) {
        resolve(null);
        return;
      }

      const route = result.routes[0];
      const path = [];
      route.steps.forEach((step) => {
        if (step.path?.length) {
          path.push(...step.path);
        }
      });

      resolve({
        mode: "driving",
        path: path.length ? path : [start, end],
        distance: route.distance || 0,
        time: route.time || 0,
      });
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

      const route = result.routes[0];
      const path = [];
      route.steps.forEach((step) => {
        if (step.path?.length) {
          path.push(...step.path);
        }
      });

      resolve({
        mode: "walking",
        path: path.length ? path : [start, end],
        distance: route.distance || 0,
        time: route.time || 0,
      });
    });
  });
}

async function buildRouteSegments(day) {
  const segments = [];
  let totalDistance = 0;
  let totalTime = 0;

  for (let index = 0; index < day.stops.length - 1; index += 1) {
    const startStop = day.stops[index];
    const endStop = day.stops[index + 1];
    const directDistance = getPointDistance(startStop.coords, endStop.coords);
    let route = null;

    if (directDistance <= 1200) {
      route = await searchWalkingSegment(startStop.coords, endStop.coords);
    }

    if (!route) {
      route = await searchDrivingSegment(startStop.coords, endStop.coords);
    }

    if (!route) {
      route = {
        mode: directDistance <= 1200 ? "walking" : "driving",
        path: [startStop.coords, endStop.coords],
        distance: directDistance,
        time: directDistance <= 1200 ? Math.round(directDistance / 1.1) : Math.round(directDistance / 8),
        isFallback: true,
        from: startStop.name,
        to: endStop.name,
      };
    }

    totalDistance += route.distance;
    totalTime += route.time;
    segments.push({
      ...route,
      isFallback: route.isFallback || false,
      color: getSegmentColor(day.color, index),
      from: startStop.name,
      to: endStop.name,
    });
  }

  return { segments, totalDistance, totalTime };
}

async function createDayLayer(AMap, day) {
  const markers = day.stops.map((stop, index) => createMarker(AMap, day, stop, index));
  const routeInfo = await buildRouteSegments(day);
  const lines = routeInfo.segments.map((segment) =>
    new AMap.Polyline({
      path: segment.path,
      strokeColor: segment.color,
      strokeOpacity: 0.95,
      strokeWeight: segment.isFallback ? 4 : 6,
      strokeStyle: segment.mode === "walking" || segment.isFallback ? "dashed" : "solid",
      strokeDasharray: segment.isFallback ? [6, 8] : segment.mode === "walking" ? [10, 6] : undefined,
      showDir: segment.mode === "driving" && !segment.isFallback,
      lineJoin: "round",
      lineCap: "round",
    }),
  );

  return { markers, lines, routeInfo };
}

function fitCurrentRoute() {
  const currentLayer = state.dayLayers[state.currentDayIndex];
  if (!state.map || !currentLayer) {
    return;
  }

  state.map.setFitView([...currentLayer.markers, ...currentLayer.lines], false, [80, 80, 80, 80]);
}

function updateMap(index) {
  if (!state.map) {
    return;
  }

  state.dayLayers.forEach((layer, layerIndex) => {
    const visible = layerIndex === index;
    layer.markers.forEach((marker) => marker.setMap(visible ? state.map : null));
    layer.lines.forEach((line) => {
      line.setMap(visible ? state.map : null);
      line.setOptions({
        strokeOpacity: visible ? 0.95 : 0.18,
        strokeWeight: visible ? 6 : 4,
      });
    });
  });

  fitCurrentRoute();
}

function showMapHint(message) {
  mapHint.textContent = message;
  mapHint.classList.remove("hidden");
}

function activateDay(index) {
  state.currentDayIndex = index;
  state.selectedStopIndex = null;
  state.searchPois = [];
  locationSearchInput.value = "";
  renderTabs();
  renderDayContent(index);
  renderEditor();
  renderMapStopPanel();
  updateMap(index);
}

function renderSearchResults(pois) {
  if (!pois.length) {
    searchResults.innerHTML = '<div class="editor-card">未找到匹配地点，请换个关键词再试。</div>';
    return;
  }

  searchResults.innerHTML = pois
    .map(
      (poi, index) => `
        <button class="search-result" data-poi-index="${index}" type="button">
          <strong>${escapeHtml(poi.name || "未命名地点")}</strong>
          <span>${escapeHtml([poi.address, poi.pname, poi.cityname, poi.adname].filter(Boolean).join(" "))}</span>
          <span>${escapeHtml(`${poi.location.lng}, ${poi.location.lat}`)}</span>
        </button>
      `,
    )
    .join("");
}

function searchLocations() {
  if (state.selectedStopIndex === null) {
    showMapHint("先点击一个景点，再搜索候选地点。");
    return;
  }

  const keyword = locationSearchInput.value.trim();
  if (!keyword) {
    showMapHint("请输入要搜索的地点关键词。");
    return;
  }

  if (!state.placeSearch) {
    showMapHint("地点搜索尚未初始化完成，请稍后再试。");
    return;
  }

  searchResults.innerHTML = '<div class="editor-card">搜索中...</div>';
  state.placeSearch.search(keyword, (status, result) => {
    if (status !== "complete" || !result?.poiList?.pois) {
      state.searchPois = [];
      renderSearchResults([]);
      return;
    }

    state.searchPois = result.poiList.pois.filter((poi) => poi.location);
    renderSearchResults(state.searchPois);
  });
}

async function rebuildMapLayers() {
  if (!state.map || !state.AMap) {
    return;
  }

  state.dayLayers.forEach((layer) => {
    layer.markers.forEach((marker) => marker.setMap(null));
    layer.lines.forEach((line) => line.setMap(null));
  });

  state.dayLayers = [];
  for (const day of state.itinerary) {
    state.dayLayers.push(await createDayLayer(state.AMap, day));
  }
  renderDayContent(state.currentDayIndex);
  renderEditor();
  updateMap(state.currentDayIndex);

  const fallbackSegments = state.dayLayers[state.currentDayIndex]?.routeInfo?.segments?.filter((segment) => segment.isFallback) || [];
  if (fallbackSegments.length) {
    const segmentText = fallbackSegments.map((segment) => `${segment.from} -> ${segment.to}`).join("；");
    showMapHint(`以下路段规划失败，已改用直线兜底：${segmentText}`);
  }
}

async function saveStopLocation(poi) {
  const day = state.itinerary[state.currentDayIndex];
  const stop = day.stops[state.selectedStopIndex];
  stop.address = [poi.name, poi.address].filter(Boolean).join(" · ");
  stop.coords = [Number(poi.location.lng), Number(poi.location.lat)];
  persistItinerary();
  await rebuildMapLayers();
  locationSearchInput.value = stop.address;
  searchResults.innerHTML = "";
  showMapHint(`已保存 ${stop.name} 的地点地址，并重新规划该天路线。`);
}

async function resetLocations() {
  state.itinerary = cloneDefaultItinerary();
  state.selectedStopIndex = null;
  state.searchPois = [];
  locationSearchInput.value = "";
  searchResults.innerHTML = "";
  window.localStorage.removeItem(STORAGE_KEY);
  await rebuildMapLayers();
  showMapHint("已恢复默认地点配置。");
}

function initFallback() {
  showMapHint("地图还没启用。请检查高德 key、安全密钥和网络环境。左侧四日路线和提醒仍可查看。");
  document.querySelector("#map").innerHTML = `
    <div style="display:grid;place-items:center;height:100%;min-height:540px;padding:24px;color:#665d55;text-align:center;background:linear-gradient(180deg, rgba(255,255,255,0.7), rgba(244,235,223,0.9));">
      <div>
        <h2 style="margin:0 0 12px;color:#1e1a17;">地图加载失败</h2>
        <p style="margin:0;line-height:1.8;">当前无法初始化高德地图，但路线信息和地点编辑面板仍可使用。</p>
      </div>
    </div>
  `;
}

async function initMap() {
  window._AMapSecurityConfig = {
    securityJsCode: AMAP_CONFIG.securityJsCode,
  };

  try {
    const AMap = await AMapLoader.load({
      key: AMAP_CONFIG.key,
      version: "2.0",
      plugins: ["AMap.Scale", "AMap.ToolBar", "AMap.PlaceSearch", "AMap.Driving", "AMap.Walking"],
    });

    state.AMap = AMap;
    state.map = new AMap.Map("map", {
      viewMode: "3D",
      zoom: 12,
      center: [108.961311, 34.26664],
      mapStyle: "amap://styles/normal",
    });

    state.infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(0, -24),
      closeWhenClickMap: true,
    });

    state.placeSearch = new AMap.PlaceSearch({
      city: "西安",
      citylimit: false,
      pageSize: 8,
      extensions: "base",
    });

    state.driving = new AMap.Driving({
      policy: AMap.DrivingPolicy.LEAST_TIME,
      hideMarkers: true,
      showTraffic: false,
      autoFitView: false,
    });

    state.walking = new AMap.Walking({
      hideMarkers: true,
      autoFitView: false,
    });

    state.map.addControl(new AMap.Scale());
    state.map.addControl(new AMap.ToolBar({ position: { right: "18px", top: "18px" } }));

    state.dayLayers = [];
    for (const day of state.itinerary) {
      state.dayLayers.push(await createDayLayer(AMap, day));
    }
    activateDay(state.currentDayIndex);
  } catch (error) {
    console.error(error);
    initFallback();
  }
}

dayTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day-index]");
  if (!button) {
    return;
  }

  activateDay(Number(button.dataset.dayIndex));
});

stopList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-stop-select]");
  if (!item) {
    return;
  }

  focusStop(Number(item.dataset.stopSelect));
});

locationEditor.addEventListener("click", (event) => {
  const button = event.target.closest("[data-stop-select]");
  if (!button) {
    return;
  }

  focusStop(Number(button.dataset.stopSelect));
});

mapStopList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-stop-index]");
  if (!button) {
    return;
  }

  focusStop(Number(button.dataset.mapStopIndex));
});

toggleMapStopPanelButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  state.isMapStopPanelOpen = !state.isMapStopPanelOpen;
  renderMapStopPanel();
});

searchLocationsButton.addEventListener("click", () => {
  searchLocations();
});

locationSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchLocations();
  }
});

searchResults.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-poi-index]");
  if (!button) {
    return;
  }

  const poi = state.searchPois[Number(button.dataset.poiIndex)];
  if (!poi) {
    return;
  }

  await saveStopLocation(poi);
});

fitRouteButton.addEventListener("click", () => {
  fitCurrentRoute();
});

resetLocationsButton.addEventListener("click", async () => {
  await resetLocations();
});

renderGlobalReminders();
renderTabs();
renderDayContent(state.currentDayIndex);
renderEditor();
renderMapStopPanel();
initMap();
