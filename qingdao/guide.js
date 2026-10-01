const AMAP_CONFIG = {
  key: "259d8f776aae8efb0d0c48cce0ffee94",
  securityJsCode: "962c62efe99065cd8153d6e9d0f6fd36",
};

const images = {
  qingdao: "https://dimg04.c-ctrip.com/images/100g16000000z21bu5BC9_W_640_10000.jpg?proc=autoorient",
  oldTown: "https://img.guanhai.com.cn/a/10001/202305/38f5978f8d1a956a432f55c9b7ea3c52.jpeg",
  coast: "https://x0.ifengimg.com/ucms/2025_16/A588660E97F8EB4AC0154EF47A780A534D455333_size1746_w1500_h2000.jpg",
  luxun: "https://dimg05.c-ctrip.com/images/0106n120009jwn7yw8523_W_640_10000.jpg?proc=autoorient",
  badaguan: "https://dimg04.c-ctrip.com/images/1mh3e12000gubp6pgE433_W_640_10000.jpg?proc=autoorient",
  mayFourth: "https://i0.wp.com/www.qingdaonese.com/wp-content/uploads/2018/11/image1.jpeg?fit=1252%2C939&ssl=1",
  signalHill: "https://dimg02.c-ctrip.com/images/0305g120008fzh0ee3708_W_640_10000.jpg?proc=autoorient",
  beerMuseum: "https://dimg04.c-ctrip.com/images/02Y6612000aeogy4v2A56_R_1080_808_Q90.jpg",
  weihai: "https://dimg04.c-ctrip.com/images/1mf4712000ducqheoBFC5_W_640_400_Q90.jpg?proc=autoorient",
  weihaiMap: "https://www.weihai.gov.cn/picture/-1/250611154417497761.jpg",
  torch: "https://img.saihuitong.com/2900/img/104581/large/18a5947b101.jpg",
  rongcheng: "https://ak-d.tripcdn.com/images/1mi0412000rr1xrh1C606_R_600_400_R5_Q90.jpg?proc=source%2Ftrip",
  blueways: "https://ak-d.tripcdn.com/images/1mi0412000rr1xrh1C606_R_600_400_R5_Q90.jpg?proc=source%2Ftrip",
};

const spots = [
  { name: "栈桥景区", area: "qingdao", label: "青岛 · 老城", kind: "海滨地标", note: "看青岛湾与回澜阁，适合傍晚沿海散步。", coords: [120.3193, 36.061736], image: images.qingdao, photo: true },
  { name: "圣弥厄尔大教堂", area: "qingdao", label: "青岛 · 老城", kind: "建筑", note: "老城双塔地标，适合看外观和广场街景。", coords: [120.3261, 36.0666], image: "https://dimg07.c-ctrip.com/images/0103t2224k0x02ir67444_W_640_10000.jpg?proc=autoorient", photo: true },
  { name: "大学路·龙江路", area: "qingdao", label: "青岛 · 老城", kind: "街区", note: "红墙、树荫和咖啡馆集中，不只排网红转角。", coords: [120.3334, 36.0701], image: images.oldTown, photo: true },
  { name: "琴屿路", area: "qingdao", label: "青岛 · 老城", kind: "海岸步道", note: "青岛的海边 S 弯，礁石拍照要留意潮汐。", coords: [120.327865, 36.053221], image: images.qingdao },
  { name: "鲁迅公园", area: "qingdao", label: "青岛 · 老城", kind: "公园", note: "红礁与海岸步道相连，适合和琴屿路一起走。", coords: [120.333117, 36.055007], image: images.luxun, photo: true },
  { name: "海军博物馆", area: "qingdao", label: "青岛 · 老城", kind: "博物馆", note: "靠近琴屿路，想入馆建议提前核对预约。", coords: [120.3289, 36.0634], image: images.qingdao },
  { name: "第三海水浴场", area: "qingdao", label: "青岛 · 浮山湾", kind: "夜景人像", note: "字幕所列灯光秀三大观赏点之一，适合用浮山湾灯光作人像背景；五四广场视野最宽，情人坝角度最正。", coords: [120.365486, 36.050451], image: images.coast },
  { name: "八大关", area: "qingdao", label: "青岛 · 老城", kind: "建筑街区", note: "万国建筑与林荫街道，国庆建议早到。", coords: [120.3371, 36.0568], image: images.badaguan, photo: true },
  { name: "第二海水浴场", area: "qingdao", label: "青岛 · 老城", kind: "沙滩", note: "从八大关临淮关路下行可到，适合看海拍照。", coords: [120.3343, 36.0552], image: images.coast },
  { name: "五四广场", area: "qingdao", label: "青岛 · 浮山湾", kind: "城市地标", note: "“五月的风”与开阔海景，是浮山湾步道起点。", coords: [120.3823, 36.0645], image: images.mayFourth, photo: true },
  { name: "情人坝", area: "qingdao", label: "青岛 · 浮山湾", kind: "帆船港", note: "白色灯塔、帆船港和海边夜景都在这一段，也是字幕所说灯光秀角度最正的观赏点。", coords: [120.390288, 36.052388], image: images.coast },
  { name: "中国水准零点景区", area: "qingdao", label: "青岛 · 东海岸", kind: "地标", note: "位于银海大世界院内，适合从情人坝去小麦岛的路上短暂停留。", coords: [120.422936, 36.055614], image: images.coast },
  { name: "小麦岛公园", area: "qingdao", label: "青岛 · 东海岸", kind: "日落", note: "草坪、海风和日落氛围感强；大风天不去礁石。", coords: [120.431045, 36.054245], image: images.coast, photo: true },
  { name: "团岛农贸市场", area: "qingdao", label: "青岛 · 老城", kind: "市井体验", note: "挑海鲜后可在附近付费加工，适合白天前往。", coords: [120.3097, 36.0648], image: images.qingdao },
  { name: "信号山公园", area: "qingdao", label: "青岛 · 老城", kind: "观景", note: "俯瞰红瓦绿树与海湾，旋转观景楼需另行购票。", coords: [120.3339, 36.0717], image: images.signalHill, photo: true },
  { name: "青岛啤酒博物馆", area: "qingdao", label: "青岛 · 市北", kind: "博物馆", note: "字幕建议下午 15:00 后去，避开人流并方便处理伴手礼；A 馆可看历史与生产过程，醉酒小屋值得体验。", coords: [120.3502, 36.0826], image: images.beerMuseum, photo: true },
  { name: "台东夜市", area: "qingdao", label: "青岛 · 市北", kind: "夜市", note: "字幕建议从啤酒博物馆步行约 963 米来此，小吃种类多；买好后找地方坐下，配啤酒作夜间收尾。", coords: [120.3527, 36.0931], image: images.qingdao },

  { name: "九龙湾公园", area: "weihai", label: "威海 · 市区", kind: "海滨", note: "靠近威海站，沙滩赶海需看潮汐。", coords: [122.1153, 37.4248], image: images.weihai },
  { name: "威海公园", area: "weihai", label: "威海 · 市区", kind: "海滨地标", note: "大相框与灯塔是沿海经典打卡点。", coords: [122.1292, 37.4909], image: images.weihai },
  { name: "幸福门", area: "weihai", label: "威海 · 市区", kind: "城市地标", note: "海港边的地标，可和威海公园串联。", coords: [122.1212, 37.5212], image: images.weihai },
  { name: "环翠楼公园", area: "weihai", label: "威海 · 市区", kind: "观景", note: "免费登高看城景，是避开幸福门人流的选择。", coords: [122.1162, 37.5051], image: images.weihai },
  { name: "刘公岛", area: "weihai", label: "威海 · 市区", kind: "海岛人文", note: "甲午战争历史与海岛观光，建议完整预留半天。", coords: [122.1615, 37.4996], image: images.weihai },
  { name: "海源公园·一战华工纪念馆", area: "weihai", label: "威海 · 环海路", kind: "人文海岸", note: "渔船、纪念馆和礁石海岸集中在一段。", coords: [122.146474, 37.518932], image: images.weihaiMap },
  { name: "三连岛观景段", area: "weihai", label: "威海 · 环海路", kind: "小众海岸", note: "三连岛在海上；地图定位为北山咀停车场附近的观景入口。", coords: [122.1538, 37.5244], image: images.weihaiMap },
  { name: "半月湾", area: "weihai", label: "威海 · 环海路", kind: "日出", note: "日出比日落更适合，附近可往三连岛慢走。", coords: [122.156415, 37.52917], image: images.weihaiMap },
  { name: "江古咀", area: "weihai", label: "威海 · 环海路", kind: "海岸观景", note: "攻略提到的人少小景点，适合和猫头山一线安排。", coords: [122.158465, 37.534827], image: images.weihaiMap },
  { name: "猫头山3号观景台", area: "weihai", label: "威海 · 环海路", kind: "观景台", note: "大项链观景台，是看猫头山全貌的精华机位；4–10 月注意道路管理与摆渡安排。", coords: [122.156997, 37.540752], image: images.weihaiMap },
  { name: "葡萄滩", area: "weihai", label: "威海 · 环海路", kind: "海岸", note: "天气好时适合沿海慢走，冬季另有冰凌景观。", coords: [122.111824, 37.543449], image: images.weihaiMap },
  { name: "远遥码头", area: "weihai", label: "威海 · 环海路", kind: "渔港", note: "旧墙、码头与海的画面感强。", coords: [122.093399, 37.547123], image: images.weihaiMap },
  { name: "金海湾栈桥", area: "weihai", label: "威海 · 环海路", kind: "蓝调时刻", note: "日落后蓝调时刻更有氛围。", coords: [122.051789, 37.535117], image: images.weihaiMap },
  { name: "欧乐坊夜市", area: "weihai", label: "威海 · 环翠区", kind: "夜市", note: "字幕列为威海三大夜市之一，夜市摊位在欧乐坊商业广场外围；适合环海路日落后顺路吃夜宵。", coords: [122.073738, 37.504366], image: images.weihai },
  { name: "国际海水浴场", area: "weihai", label: "威海 · 高区", kind: "沙滩", note: "人气很高，看海即可；国庆不建议久等网红机位。", coords: [122.0512, 37.5535], image: images.weihai },
  { name: "火炬八街", area: "weihai", label: "威海 · 高区", kind: "海景街道", note: "街道尽头是海，节假日人多，早到快拍更合适。", coords: [122.0534, 37.5435], image: images.torch, photo: true },
  { name: "小石岛", area: "weihai", label: "威海 · 高区", kind: "日落", note: "适合日落与赶海；收费赶海园之外也有免费海边。", coords: [122.0108, 37.5265], image: images.weihai },
  { name: "里口山", area: "weihai", label: "威海 · 山野", kind: "徒步", note: "塔山公园起步可走到广福寺，适合预留约三小时。", coords: [122.0442, 37.5124], image: images.weihaiMap },

  { name: "逍遥湾", area: "rongcheng", label: "荣成 · 海岸", kind: "安静看海", note: "配套少、人相对少，适合自驾路上放空。", coords: [122.4021, 37.2813], image: images.rongcheng },
  { name: "那香海", area: "rongcheng", label: "荣成 · 海岸", kind: "海滨度假", note: "配套成熟、打卡设施多，节假日也会更拥挤。", coords: [122.4242, 37.3173], image: images.rongcheng },
  { name: "那香海海边列车", area: "rongcheng", label: "荣成 · 海岸", kind: "拍照", note: "攻略中的“海上列车”机位，适合和那香海一起停留。", coords: [122.4406, 37.3201], image: images.rongcheng },
  { name: "鸡鸣岛", area: "rongcheng", label: "荣成 · 海岛", kind: "延伸自驾", note: "需乘船上岛，节假日排队时间长，环岛步行约两小时。", coords: [122.5065, 37.3159], image: images.rongcheng },
  { name: "布鲁威斯号", area: "rongcheng", label: "荣成 · 海岸", kind: "延伸自驾", note: "搁浅货轮与礁石海岸构成独特画面，适合摄影。", coords: [122.5528, 37.2523], image: images.blueways, photo: true },
  { name: "神雕山野生动物世界", area: "rongcheng", label: "西霞口", kind: "动物园", note: "依山傍海、园区很大，至少预留半天。", coords: [122.5691, 37.3633], image: images.rongcheng },
  { name: "海驴岛", area: "rongcheng", label: "西霞口", kind: "海岛", note: "不能登岛，以乘船绕岛和看黑尾鸥为主。", coords: [122.5413, 37.3610], image: images.rongcheng },
  { name: "摩天岭索道", area: "rongcheng", label: "西霞口", kind: "索道海景", note: "建议索道上、巴士下，沿海一侧视野更好。", coords: [122.6301, 37.3788], image: images.rongcheng },
  { name: "成山头·天尽头", area: "rongcheng", label: "成山头", kind: "海岸步道", note: "从东天门沿天涯滨海栈道到天尽头，是更值得走的段落。", coords: [122.6771, 37.3828], image: images.rongcheng },
  { name: "天鹅湖生态旅游区", area: "rongcheng", label: "荣成 · 南线", kind: "季节限定", note: "11 月至次年 2 月更适合观赏天鹅，10 月不作为主行程。", coords: [122.4668, 37.1344], image: images.rongcheng },
  { name: "烟墩角天鹅海景区", area: "rongcheng", label: "荣成 · 南线", kind: "季节限定", note: "冬季看天鹅的延伸点，位置更偏南。", coords: [122.4213, 37.0611], image: images.rongcheng },
  { name: "爱莲湾", area: "rongcheng", label: "荣成 · 南线", kind: "小众海湾", note: "人少景静，适合自驾往荣成南线继续走时停留。", coords: [122.4066, 36.9903], image: images.rongcheng },
];

const areaNames = { all: "全部地点", qingdao: "青岛", weihai: "威海市区", rongcheng: "荣成海岸" };
const state = { filter: "all", activeIndex: null, AMap: null, map: null, markers: [], infoWindow: null };

const grid = document.querySelector("#spot-grid");
const mapTitle = document.querySelector("#map-title");
const mapSummary = document.querySelector("#map-summary");
const spotCount = document.querySelector("#spot-count");
const allCount = document.querySelector("#all-count");

function getVisibleSpots() {
  return state.filter === "all" ? spots : spots.filter((spot) => spot.area === state.filter);
}

function renderCards() {
  const visible = getVisibleSpots();
  spotCount.textContent = `${areaNames[state.filter]} · ${visible.length} 个地点`;
  grid.innerHTML = visible.map((spot) => {
    const index = spots.indexOf(spot);
    const placeholder = `<span class="spot-placeholder"><span>${spot.label}</span><strong>${spot.name}</strong><em>地图定位</em></span>`;
    const cover = spot.photo
      ? `${placeholder}<img src="${spot.image}" alt="${spot.name}" loading="lazy" />`
      : placeholder;
    return `
      <button class="spot-card ${index === state.activeIndex ? "active" : ""}" type="button" data-spot-index="${index}">
        <span class="spot-image ${spot.photo ? "" : "placeholder-cover"}">${cover}</span>
        <span class="spot-body">
          <span class="spot-topline"><span class="spot-area">${spot.label}</span><span class="spot-kind">${spot.kind}</span></span>
          <strong>${spot.name}</strong>
          <span>${spot.note}</span>
        </span>
      </button>
    `;
  }).join("");
  document.querySelectorAll(".spot-image img").forEach((image) => {
    const frame = image.parentElement;
    const showImage = () => frame.classList.add("loaded");
    image.addEventListener("load", showImage, { once: true });
    image.addEventListener("error", () => frame.classList.add("image-failed"), { once: true });
    if (image.complete && image.naturalWidth) showImage();
  });
}

function openSpot(index) {
  const spot = spots[index];
  if (!spot || !state.map) return;
  state.activeIndex = index;
  renderCards();
  mapTitle.textContent = spot.name;
  mapSummary.textContent = `${spot.label} · ${spot.kind}。${spot.note}`;
  state.map.setZoomAndCenter(14, spot.coords);
  state.infoWindow.setContent(`<div class="amap-info"><h3>${spot.name}</h3><p>${spot.label} · ${spot.kind}</p><p>${spot.note}</p></div>`);
  state.infoWindow.open(state.map, spot.coords);
}

function fitVisibleSpots() {
  const visibleIndexes = new Set(getVisibleSpots().map((spot) => spots.indexOf(spot)));
  const markers = state.markers.filter((_, index) => visibleIndexes.has(index));
  if (markers.length) state.map.setFitView(markers, false, [46, 46, 46, 46]);
}

function setFilter(filter) {
  state.filter = filter;
  state.activeIndex = null;
  document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("active", button.dataset.filter === filter));
  renderCards();
  mapTitle.textContent = areaNames[filter];
  mapSummary.textContent = "点击地点卡片或地图圆点，可放大查看对应位置与游玩提示。";
  state.infoWindow.close();
  fitVisibleSpots();
}

async function initMap() {
  window._AMapSecurityConfig = { securityJsCode: AMAP_CONFIG.securityJsCode };
  try {
    const AMap = await AMapLoader.load({ key: AMAP_CONFIG.key, version: "2.0", plugins: ["AMap.Scale", "AMap.ToolBar"] });
    state.AMap = AMap;
    state.map = new AMap.Map("map", { viewMode: "3D", zoom: 8, center: [121.35, 36.9] });
    state.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -22), closeWhenClickMap: true });
    state.markers = spots.map((spot, index) => {
      const marker = new AMap.Marker({
        position: spot.coords,
        title: spot.name,
        content: `<div style="width:24px;height:24px;display:grid;place-items:center;border:2px solid #fff;border-radius:50%;background:${spot.area === "qingdao" ? "#087f8c" : spot.area === "weihai" ? "#c86646" : "#3b719b"};box-shadow:0 3px 8px rgba(0,0,0,.2);color:#fff;font:700 11px/1 sans-serif;">${index + 1}</div>`,
        anchor: "center",
      });
      marker.on("click", () => openSpot(index));
      return marker;
    });
    state.map.add(state.markers);
    state.map.addControl(new AMap.Scale());
    state.map.addControl(new AMap.ToolBar({ position: { right: "12px", top: "12px" } }));
    fitVisibleSpots();
  } catch (error) {
    console.error(error);
    mapSummary.textContent = "地图暂时不可用，请检查网络后刷新页面。";
  }
}

allCount.textContent = spots.length;
renderCards();
document.querySelector(".filter-bar").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) setFilter(button.dataset.filter);
});
grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-spot-index]");
  if (card) openSpot(Number(card.dataset.spotIndex));
});
document.querySelector("#fit-all").addEventListener("click", () => setFilter(state.filter));
initMap();
