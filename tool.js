const AMAP_CONFIG = {
  key: "259d8f776aae8efb0d0c48cce0ffee94",
  securityJsCode: "962c62efe99065cd8153d6e9d0f6fd36",
};

const state = {
  AMap: null,
  map: null,
  marker: null,
  infoWindow: null,
  placeSearch: null,
  pois: [],
  activeIndex: null,
};

const keywordInput = document.querySelector("#keyword");
const cityInput = document.querySelector("#city");
const searchButton = document.querySelector("#search-btn");
const clearButton = document.querySelector("#clear-btn");
const results = document.querySelector("#results");
const emptyState = document.querySelector("#empty-state");
const detail = document.querySelector("#detail");
const detailName = document.querySelector("#detail-name");
const detailAddress = document.querySelector("#detail-address");
const detailLocation = document.querySelector("#detail-location");
const snippet = document.querySelector("#snippet");
const hint = document.querySelector("#hint");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showHint(message) {
  hint.textContent = message;
  hint.classList.remove("hidden");
}

function hideHint() {
  hint.classList.add("hidden");
}

function buildSnippet(poi) {
  return `{
  name: "${poi.name || ""}",
  address: "${[poi.name, poi.address].filter(Boolean).join(" · ")}",
  coords: [${poi.location.lng}, ${poi.location.lat}],
}`;
}

function renderResults() {
  if (!state.pois.length) {
    results.innerHTML = '<div class="empty-state">还没有搜索结果。</div>';
    return;
  }

  results.innerHTML = state.pois
    .map(
      (poi, index) => `
        <button class="result-item ${index === state.activeIndex ? "active" : ""}" data-poi-index="${index}" type="button">
          <strong>${escapeHtml(poi.name || "未命名地点")}</strong>
          <span>${escapeHtml([poi.address, poi.pname, poi.cityname, poi.adname].filter(Boolean).join(" "))}</span>
          <span>${escapeHtml(`${poi.location.lng}, ${poi.location.lat}`)}</span>
        </button>
      `,
    )
    .join("");
}

function renderDetail() {
  const poi = state.pois[state.activeIndex];
  if (!poi) {
    emptyState.classList.remove("hidden");
    detail.classList.add("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  detail.classList.remove("hidden");
  detailName.textContent = poi.name || "";
  detailAddress.textContent = [poi.address, poi.pname, poi.cityname, poi.adname].filter(Boolean).join(" ");
  detailLocation.textContent = `${poi.location.lng}, ${poi.location.lat}`;
  snippet.value = buildSnippet(poi);
}

function updateMap() {
  const poi = state.pois[state.activeIndex];
  if (!state.map || !poi) {
    return;
  }

  const position = [Number(poi.location.lng), Number(poi.location.lat)];
  if (!state.marker) {
    state.marker = new state.AMap.Marker({ position, anchor: "bottom-center" });
    state.marker.setMap(state.map);
  } else {
    state.marker.setPosition(position);
    state.marker.setMap(state.map);
  }

  state.infoWindow.setContent(`
    <div style="padding:4px 4px 2px;max-width:280px;">
      <h3 style="margin:0 0 6px;font-size:16px;">${escapeHtml(poi.name || "")}</h3>
      <p style="margin:0;color:#5f574f;font-size:13px;line-height:1.65;">${escapeHtml([poi.address, poi.pname, poi.cityname, poi.adname].filter(Boolean).join(" "))}</p>
    </div>
  `);
  state.infoWindow.open(state.map, position);
  state.map.setZoomAndCenter(16, position);
}

function selectPoi(index) {
  state.activeIndex = index;
  renderResults();
  renderDetail();
  updateMap();
}

function searchPlaces() {
  const keyword = keywordInput.value.trim();
  const city = cityInput.value.trim() || "西安";

  if (!keyword) {
    showHint("请输入地点关键词。");
    return;
  }

  if (!state.placeSearch) {
    showHint("地点搜索尚未初始化完成，请稍后再试。");
    return;
  }

  hideHint();
  results.innerHTML = '<div class="empty-state">搜索中...</div>';
  state.placeSearch.setCity(city);
  state.placeSearch.search(keyword, (status, result) => {
    if (status !== "complete" || !result?.poiList?.pois) {
      state.pois = [];
      state.activeIndex = null;
      renderResults();
      renderDetail();
      showHint("未找到匹配地点，请换个关键词再试。");
      return;
    }

    state.pois = result.poiList.pois.filter((poi) => poi.location);
    state.activeIndex = state.pois.length ? 0 : null;
    renderResults();
    renderDetail();
    updateMap();
  });
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showHint(successMessage);
  } catch (error) {
    console.error(error);
    showHint("复制失败，请检查浏览器是否允许剪贴板权限。");
  }
}

function clearAll() {
  keywordInput.value = "";
  state.pois = [];
  state.activeIndex = null;
  results.innerHTML = '<div class="empty-state">还没有搜索结果。</div>';
  renderDetail();
  snippet.value = "";
  hideHint();
  if (state.marker) {
    state.marker.setMap(null);
  }
  if (state.infoWindow) {
    state.infoWindow.close();
  }
}

async function initMap() {
  window._AMapSecurityConfig = {
    securityJsCode: AMAP_CONFIG.securityJsCode,
  };

  try {
    const AMap = await AMapLoader.load({
      key: AMAP_CONFIG.key,
      version: "2.0",
      plugins: ["AMap.Scale", "AMap.ToolBar", "AMap.PlaceSearch"],
    });

    state.AMap = AMap;
    state.map = new AMap.Map("map", {
      viewMode: "3D",
      zoom: 11,
      center: [108.961311, 34.26664],
    });
    state.infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(0, -24),
      closeWhenClickMap: true,
    });
    state.placeSearch = new AMap.PlaceSearch({
      city: cityInput.value.trim() || "西安",
      citylimit: false,
      pageSize: 10,
      extensions: "base",
    });

    state.map.addControl(new AMap.Scale());
    state.map.addControl(new AMap.ToolBar({ position: { right: "18px", top: "18px" } }));
  } catch (error) {
    console.error(error);
    showHint("地图初始化失败，请检查 key、安全密钥和网络环境。");
  }
}

searchButton.addEventListener("click", () => {
  searchPlaces();
});

clearButton.addEventListener("click", () => {
  clearAll();
});

keywordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchPlaces();
  }
});

results.addEventListener("click", (event) => {
  const button = event.target.closest("[data-poi-index]");
  if (!button) {
    return;
  }

  selectPoi(Number(button.dataset.poiIndex));
});

detail.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) {
    return;
  }

  const poi = state.pois[state.activeIndex];
  if (!poi) {
    return;
  }

  if (button.dataset.copy === "snippet") {
    await copyText(buildSnippet(poi), "已复制代码片段。");
  }
});

renderResults();
renderDetail();
initMap();
