const AMAP_CONFIG = {
  key: "259d8f776aae8efb0d0c48cce0ffee94",
  securityJsCode: "962c62efe99065cd8153d6e9d0f6fd36",
};

// Captured from AMap PlaceSearch on 2026-10-02. The public page never searches for photos.
const STOP_PHOTOS = {
  "day1:0": [
    { url: "https://store.is.autonavi.com/showpic/22cf00de457354de0000001297270531?type=pic", sourceName: "青岛胶东国际机场航站楼", nearby: false },
    { url: "https://aos-comment.amap.com/B0G14REPFJ/comment/content_media_external_file_1000263604_ss__1751292881149_87268027.jpg", sourceName: "青岛胶东国际机场航站楼", nearby: false },
  ],
  "day1:1": [
    { url: "https://store.is.autonavi.com/showpic/43c52933c1769faa59b8ace73c85844d", sourceName: "栈桥景区", nearby: false },
    { url: "https://store.is.autonavi.com/showpic/53aa7310429af525b8d77a8d93e9c9b9", sourceName: "栈桥景区", nearby: false },
  ],
  "day1:2": [
    { url: "https://store.is.autonavi.com/showpic/101c2e253fdc709c736a160d7eddddc1", sourceName: "天主教青岛教区圣弥厄尔主教座堂天主堂", nearby: true },
    { url: "https://store.is.autonavi.com/showpic/4394a678c6295ff54c0d82761a79bf92", sourceName: "天主教青岛教区圣弥厄尔主教座堂天主堂", nearby: true },
  ],
  "day1:3": [
    { url: "https://aos-comment.amap.com/B0FFGQI08D/comment/1669F7B7_AF1D_43F4_951C_F45E4B88ADE3_L0_001_2000_1246_1730787634818_18979849.jpg", sourceName: "琴屿路", nearby: false },
    { url: "https://aos-comment.amap.com/B0FFGQI08D/comment/7E81BAB0_0472_4778_BDB5_4A0D89F169AD_L0_001_2004_1500_1728365492327_14965198.jpg", sourceName: "琴屿路", nearby: false },
  ],
  "day1:4": [
    { url: "https://store.is.autonavi.com/showpic/95ac2dfdc27756fdf429f62b9b71f933", sourceName: "鲁迅公园", nearby: false },
    { url: "https://store.is.autonavi.com/showpic/9c655120e9ae00080000003072174164?type=pic", sourceName: "鲁迅公园", nearby: false },
  ],
  "day1:6": [
    { url: "https://store.is.autonavi.com/showpic/1788a2c646138be64b19462d5c362eeb", sourceName: "青岛第三海水浴场", nearby: false },
    { url: "https://store.is.autonavi.com/showpic/bfc5cf2c88e8daa8938c68f21582f814", sourceName: "青岛第三海水浴场", nearby: false },
  ],
  "day1:7": [
    { url: "https://aos-comment.amap.com/B02130UAYR/comment/content_media_external_file_100014571_1760359613180_00473484.jpg", sourceName: "台东", nearby: false },
    { url: "https://aos-comment.amap.com/B02130UAYR/comment/176301383263_1763013833357_50723982.jpg", sourceName: "台东", nearby: false },
  ],
  "day2:0": [
    { url: "https://store.is.autonavi.com/showpic/493fdb58fb6cc615856a682c52165fc2", sourceName: "八大关派出所", nearby: true },
  ],
  "day2:1": [
    { url: "https://store.is.autonavi.com/showpic/01dfe34993c54d94e8e2f9fdb9b0d733", sourceName: "八大关第二海水浴场公寓(汇泉路分店)", nearby: true },
    { url: "https://store.is.autonavi.com/showpic/163fd6fd53c15d316b618d0c92d22e04", sourceName: "八大关第二海水浴场公寓(汇泉路分店)", nearby: true },
  ],
  "day2:2": [
    { url: "https://aos-comment.amap.com/B021409SKA/comment/content_media_external_file_100003034_1755763120111_53985754.jpg", sourceName: "六七八韩式料理", nearby: true },
    { url: "https://store.is.autonavi.com/showpic/e45660254044f4c10000000668168873?type=pic", sourceName: "六七八韩式料理", nearby: true },
  ],
  "day2:3": [
    { url: "https://store.is.autonavi.com/showpic/12c3fccff292444233f5ccb3feef8329", sourceName: "青岛啤酒博物馆·音乐餐吧", nearby: true },
    { url: "https://store.is.autonavi.com/showpic/ebb3a76039a842f9cf513d1f872f5f12", sourceName: "青岛啤酒博物馆·音乐餐吧", nearby: true },
  ],
  "day2:4": [
    { url: "https://store.is.autonavi.com/showpic/e3903a52ec6685900000007481708767?type=pic", sourceName: "五四广场五月的风", nearby: false },
    { url: "https://aos-comment.amap.com/B021406QLO/comment/content_media_external_file_1000001225_ss__1766297090094_64297486.jpg", sourceName: "五四广场五月的风", nearby: false },
  ],
  "day2:5": [
    { url: "https://store.is.autonavi.com/showpic/5dbadb513ac779625aeb82303381888c", sourceName: "情人坝", nearby: false },
    { url: "https://store.is.autonavi.com/showpic/df07d947fd571d80f93cda85a8333305", sourceName: "情人坝", nearby: false },
  ],
  "day2:6": [
    { url: "https://store.is.autonavi.com/showpic/cf22f49e676c2fd6a9a2b9d848adda15", sourceName: "中国水准零点景区", nearby: false },
    { url: "https://store.is.autonavi.com/showpic/eb92468dba29ddb7293d3dd14e7a00b5", sourceName: "中国水准零点景区", nearby: false },
  ],
  "day3:0": [
    { url: "https://aos-comment.amap.com/B0FFF9Y9R4/comment/content_media_external_file_179033_ss__1770082077296_62236704.jpg", sourceName: "海源公园-四眼楼", nearby: false },
    { url: "https://store.is.autonavi.com/showpic/1836373af3d631470000002738724497?type=pic", sourceName: "海源公园-四眼楼", nearby: false },
  ],
  "day3:1": [
    { url: "https://store.is.autonavi.com/showpic/bb4130750691ddb40000005105064342?type=pic", sourceName: "三连岛绿地开放共享区", nearby: true },
    { url: "https://aos-comment.amap.com/B0KAACCXRU/comment/f90887ea575c185b689bfcfc5329ef4c_2048_2048_80.jpg", sourceName: "三连岛绿地开放共享区", nearby: true },
  ],
  "day3:2": [
    { url: "https://store.is.autonavi.com/showpic/c776c330a345cd21b833a579d1496412", sourceName: "半月湾海滩", nearby: false },
    { url: "https://store.is.autonavi.com/showpic/47abbaefa843264a0000003377134322?type=pic", sourceName: "半月湾海滩", nearby: false },
  ],
  "day3:3": [
    { url: "https://aos-comment.amap.com/B0KRYR1R4G/comment/D23DC496_2361_468E_B1F3_373026AFD827_L0_001_2000_1500_1744426920777_09713651.jpg", sourceName: "江古咀-黑水洋码头", nearby: false },
    { url: "https://aos-comment.amap.com/B0KRYR1R4G/comment/B2FDFF00_2267_4A89_AB74_5908273BF9DF_L0_001_2016_1512_1734927776616_70611839.jpg", sourceName: "江古咀-黑水洋码头", nearby: false },
  ],
  "day3:4": [
    { url: "https://aos-comment.amap.com/B0JDD7YFR1/comment/content_media_external_images_media_1000012698_ss__1770294454234_64061155.jpg", sourceName: "环海路四号观景台", nearby: true },
    { url: "https://store.is.autonavi.com/showpic/ece14d52c5c5e21bbee5a697f261bd62", sourceName: "环海路四号观景台", nearby: true },
  ],
  "day3:5": [
    { url: "https://store.is.autonavi.com/showpic/225885e5ddd54a2b0000002897904136?type=pic", sourceName: "葡萄滩海水浴场", nearby: false },
    { url: "https://aos-comment.amap.com/B02770HU6O/comment/30680CB8_7F7F_493F_A40C_B1789E4C0935_L0_001_1500_200_1760780189358_21333735.jpg", sourceName: "葡萄滩海水浴场", nearby: false },
  ],
  "day3:8": [
    { url: "https://store.is.autonavi.com/showpic/125caef497aceef3146494fc1d93371b", sourceName: "威海国际海水浴场", nearby: false },
    { url: "https://store.is.autonavi.com/showpic/6081c832057425380000003772500557?type=pic", sourceName: "威海国际海水浴场", nearby: false },
  ],
  "day3:9": [
    { url: "https://aos-comment.amap.com/B0KR1ZRNIE/comment/content_media_external_file_1000031703_ss__1754827198144_44095753.jpg", sourceName: "欧乐坊凯旋街市集", nearby: true },
    { url: "https://store.is.autonavi.com/showpic/da400850c4213fc071e8dab9952a8b44", sourceName: "欧乐坊凯旋街市集", nearby: true },
  ],
  "day5:0": [
    { url: "https://store.is.autonavi.com/showpic/22cf00de457354de0000001297270531?type=pic", sourceName: "青岛胶东国际机场航站楼", nearby: false },
    { url: "https://aos-comment.amap.com/B0G14REPFJ/comment/content_media_external_file_1000263604_ss__1751292881149_87268027.jpg", sourceName: "青岛胶东国际机场航站楼", nearby: false },
  ],
};

const itinerary = [
  {
    id: "day1",
    title: "Day 1",
    date: "10月2日 · 抵达日",
    pageTitle: "青岛第一天路线图",
    subtitle: "下午抵达后沿老城海岸线慢走，把浮山湾夜景留给第一晚。",
    theme: "机场抵达 + 老城海岸夜景",
    weather: {
      icon: "☀️",
      summary: "晴转多云 · 15–21℃ · 北风 3–4级",
      tip: "落地后至夜间体感会转凉，海边散步带一件防风外套。",
    },
    lodging: {
      name: "市北区住宿",
      address: "青岛市市北区即墨路12号501",
      coords: [120.3302, 36.0784],
    },
    heroText: "14:25 抵达青岛胶东国际机场。先到市北住宿办理入住，傍晚从栈桥、教堂走到琴屿路和鲁迅公园，在柏海餐厅晚餐，再去第三海水浴场看夜景，最后逛台东夜市。",
    summary: "青岛胶东国际机场 → 市北区住宿 → 栈桥景区 → 圣弥厄尔大教堂 → 琴屿路 → 鲁迅公园 → 柏海餐厅 → 第三海水浴场 → 台东夜市",
    overview: [
      "14:25 落地后预留取行李、机场离场与进城时间；建议直接网约车或按实时情况乘机场交通。",
      "约 17:00 后从住宿出发，栈桥、教堂、琴屿路和鲁迅公园按海岸方向串联，前半段以步行为主。",
      "鲁迅公园对面的柏海餐厅晚餐后，打车去第三海水浴场看夜景；最后到台东夜市买小吃作夜宵再回住宿。",
    ],
    stops: [
      {
        name: "青岛胶东国际机场",
        address: "青岛胶东国际机场",
        coords: [120.0873, 36.3617],
        stay: "14:25 抵达后约 40 分钟",
        note: "取行李、补水和整理随身物品后再进城；国庆抵达客流较大，别把第一站排得太早。",
        tags: ["抵达点", "取行李", "进城"],
      },
      {
        name: "栈桥景区",
        address: "栈桥景区 · 太平路12号(青岛站地铁站G口步行320米)",
        coords: [120.3193, 36.061736],
        stay: "约 45 分钟",
        note: "字幕把它作为第一站：桥身伸进青岛湾，尽头是回澜阁，与小青岛隔海相望。可在岸边看海、捡小贝壳，但不要为了拍照下湿滑礁石。",
        tags: ["青岛湾", "回澜阁", "傍晚", "免费"],
      },
      {
        name: "圣弥厄尔大教堂",
        address: "市南区浙江路15号",
        coords: [120.3261, 36.0666],
        stay: "约 35 分钟",
        note: "字幕建议从栈桥步行约 678 米到此。看完双塔与广场后，别错过坡下的安娜别墅，外观拍照更有层次；入内规则以当天为准。",
        tags: ["双塔建筑", "安娜别墅", "拍照", "步行"],
      },
      {
        name: "琴屿路",
        address: "市南区琴屿路（海军博物馆至鲁迅公园段）",
        coords: [120.327865, 36.053221],
        stay: "约 30 分钟",
        note: "字幕把琴屿路和鲁迅公园安排为一段：这里是青岛的海边 S 弯，可看小青岛与礁石海景。站上礁石拍照前务必看潮汐，感觉浪大立刻后撤。",
        tags: ["海边 S 弯", "小青岛", "潮汐", "步行"],
      },
      {
        name: "鲁迅公园",
        address: "市南区琴屿路1号",
        coords: [120.333117, 36.055007],
        stay: "约 35 分钟",
        note: "从琴屿路顺着海岸线走到这里。字幕建议：想进旁边海军博物馆需提前预约；若不入馆，就在海边吹风、喝咖啡，等日落后再去晚餐。",
        tags: ["红礁海岸", "海军博物馆旁", "傍晚", "步行"],
      },
      {
        name: "柏海餐厅·海胆水饺(鲁迅公园店)",
        address: "市南区莱阳路23号（鲁迅公园对面）",
        coords: [120.3327, 36.0555],
        stay: "晚餐约 1 小时",
        note: "这是你指定的鲁迅公园店。字幕原路线也把琴屿路门口作为晚餐点，原因是附近选择不多；国庆建议提前确认排队，吃完直接前往第三海水浴场。",
        tags: ["晚餐", "海鲜", "鲁迅公园附近", "提前排队"],
      },
      {
        name: "第三海水浴场",
        address: "市南区湛山五路5号",
        coords: [120.365486, 36.050451],
        stay: "夜景停留约 35 分钟",
        note: "从琴屿路晚餐点约 3.6 公里。字幕提到灯光秀三大观赏点：五四广场视野最宽、情人坝角度最正、这里最适合拍人像与背景灯光；出发前核对当晚灯光秀时刻。",
        tags: ["夜景", "人像拍照", "灯光秀", "核对时刻"],
      },
      {
        name: "台东夜市",
        address: "市北区台东步行街一带",
        coords: [120.3527, 36.0931],
        stay: "夜宵与闲逛约 40 分钟",
        note: "字幕将它作为啤酒博物馆后的夜间收尾：小吃种类多，选想吃的即可，买好后找地方坐下配啤酒。第一天从第三海水浴场过来较远，建议打车；这里安排夜宵，不再额外吃正餐。",
        tags: ["夜宵", "小吃", "青岛啤酒", "打车"],
      },
    ],
    sequence: [
      { type: "stop", stopIndex: 0 },
      { type: "lodging", label: "办理入住", stay: "进城与入住约 1.5–2 小时", note: "到市北区即墨路12号501 放下行李、短暂休整后再去老城。" },
      { type: "stop", stopIndex: 1 },
      { type: "stop", stopIndex: 2 },
      { type: "stop", stopIndex: 3 },
      { type: "stop", stopIndex: 4 },
      { type: "stop", stopIndex: 5 },
      { type: "stop", stopIndex: 6 },
      { type: "stop", stopIndex: 7 },
      { type: "lodging", label: "返回住宿", stay: "约 15 分钟", note: "从台东夜市回市北区住宿。第一天行程到这里，早点休息给完整的滨海日留体力。" },
    ],
    reminders: [
      "机场到市区距离较远，带行李时建议按实时路况选择网约车或机场交通。",
      "国庆客流高，栈桥如有临时分流，直接在桥头和海岸步道看海即可。",
      "柏海餐厅晚餐时段可能排队，建议出发前电话确认；若等位过长可在莱阳路附近灵活调整。",
      "灯光秀想看全景可选五四广场，想看正面构图可选情人坝；本行程在第三海水浴场拍人像，夜间只走照明步道。",
      "台东夜市放在最后作夜宵即可，别因小吃排队拖得太晚；需要回住宿时直接打车。",
    ],
  },
  {
    id: "day2",
    title: "Day 2",
    date: "10月3日 · 青岛",
    pageTitle: "青岛第二天路线图",
    subtitle: "从八大关一路走到小麦岛，把白天留给建筑与海岸线。",
    theme: "八大关 + 浮山湾 + 小麦岛",
    weather: {
      icon: "☁️",
      summary: "多云 · 17–22℃ · 南风 3–4级",
      tip: "适合滨海步行；小麦岛风更大，日落前加一层外套并预留返程时间。",
    },
    lodging: {
      name: "市北区住宿",
      address: "青岛市市北区即墨路12号501",
      coords: [120.3302, 36.0784],
    },
    heroText: "上午八大关和第二海水浴场，午饭去麦凯乐片区的六七八韩式烤肉；下午先逛青岛啤酒博物馆，再经五四广场、情人坝和中国水准零点景区，去小麦岛看日落，晚餐吃海肠捞饭。",
    summary: "市北区住宿 → 八大关 → 第二海水浴场 → 六七八韩式烤肉 → 青岛啤酒博物馆 → 五四广场 → 情人坝 → 中国水准零点景区 → 小麦岛 → 波螺油子",
    overview: [
      "上午 9:00 前到八大关，先避开团队客流，再从临淮关路方向走到第二海水浴场。",
      "午餐和休整安排在麦凯乐片区的六七八韩式烤肉；饭后先打车去啤酒博物馆，按字幕建议下午 15:00 后入场。",
      "情人坝后在中国水准零点景区短暂停留，小麦岛放在日落前；离开后打车去波螺油子吃海肠捞饭，再回住宿。",
    ],
    stops: [
      {
        name: "八大关",
        address: "市南区汇泉角东北部，正阳关路一带",
        coords: [120.3371, 36.0568],
        stay: "约 1.5 小时",
        note: "字幕称这里以八大关隘命名，沿街可看多国建筑风情，有“万国建筑博物馆”之称。国庆别只挤网红楼，挑两三条林荫街慢走更舒服。",
        tags: ["万国建筑", "林荫街", "上午", "错峰"],
      },
      {
        name: "第二海水浴场",
        address: "市南区山海关路6号附近",
        coords: [120.3343, 36.0552],
        stay: "约 45 分钟",
        note: "按字幕从八大关的临淮关路下行直达。这里沙较细、海水清，另有两处热门礁石拍照位；排队拍照和翻越礁石都有风险，只在安全区域停留。",
        tags: ["临淮关路下行", "细沙", "拍照", "安全"],
      },
      {
        name: "六七八韩式烤肉·韩国料理",
        address: "市南区上杭路74号（麦凯乐片区）",
        coords: [120.407677, 36.066811],
        stay: "午餐与休整约 1.5 小时",
        note: "字幕建议从第二海水浴场打车约 5.2 公里到麦凯乐商圈；这里餐厅集中，推荐这家韩国炭火烤肉。可先看团购券，午餐后补水休整再继续。",
        tags: ["午餐", "韩国炭火烤肉", "麦凯乐片区", "团购券"],
      },
      {
        name: "青岛啤酒博物馆",
        address: "市北区登州路56号",
        coords: [120.3502, 36.0826],
        stay: "下午约 1.5 小时",
        note: "字幕原本把它安排在城区日：建议下午 15:00 后去，人相对少，也方便把啤酒伴手礼带回住宿。A 馆可看历史与生产过程，醉酒小屋是有趣体验点；票种与开放时间以当天为准。",
        tags: ["15:00 后", "啤酒伴手礼", "A 馆", "醉酒小屋"],
      },
      {
        name: "五四广场",
        address: "市南区东海西路",
        coords: [120.3823, 36.0645],
        stay: "约 40 分钟",
        note: "从麦凯乐片区约 2.4 公里，打车更省体力。重点看“五月的风”和浮山湾海景；它也是字幕所列夜间灯光秀视野最开阔的观赏点。",
        tags: ["五月的风", "海滨步道", "灯光秀全景", "免费"],
      },
      {
        name: "情人坝",
        address: "情人坝 · 珠海路街道金湾路7号",
        coords: [120.390288, 36.052388],
        stay: "约 45 分钟",
        note: "字幕说堤坝尽头是白色灯塔，沿线还有多个拍照点；它也是灯光秀正面构图最佳的位置。若时间紧，可从麦凯乐直接打车到这里，省略五四广场。",
        tags: ["白色灯塔", "帆船港", "灯光秀正面", "拍照"],
      },
      {
        name: "中国水准零点景区",
        address: "中国水准零点景区 · 东海中路30号银海大世界院内",
        coords: [120.422936, 36.055614],
        stay: "约 25 分钟",
        note: "字幕把它放在去小麦岛的步行途中：中国高程测量的起算地标，珠峰高度也以此为基准计算。适合短暂停留，再继续步行去小麦岛。",
        tags: ["高程起算地标", "短暂停留", "步行", "东海岸"],
      },
      {
        name: "小麦岛公园",
        address: "小麦岛公园 · 中韩街道麦岛",
        coords: [120.431045, 36.054245],
        stay: "日落前后约 1.5 小时",
        note: "字幕里的重点不是硬等海平面落日，而是草坪、海风与年轻人驻唱的大合唱氛围。找草坪坐下听歌即可；不同季节太阳可能落向城市一侧，大风天不走礁石。",
        tags: ["草坪", "驻唱合唱", "海风", "Day 2 收尾"],
      },
      {
        name: "波螺油子·海肠捞饭·青岛菜(市南银座店)",
        address: "市南区香港中路青岛银座中心5楼",
        coords: [120.391651, 36.066383],
        stay: "晚餐约 1 小时",
        note: "字幕安排小麦岛之后打车来吃晚饭，明确推荐海肠捞饭。晚间可能排队，先线上取号；等位过久可改去附近的前海沿·青岛菜。",
        tags: ["晚餐", "海肠捞饭", "提前取号", "字幕推荐"],
      },
    ],
    sequence: [
      { type: "lodging", label: "住宿出发", stay: "9:00 前出发", note: "轻装出门，带一件防风外套和充电宝。" },
      { type: "stop", stopIndex: 0 },
      { type: "stop", stopIndex: 1 },
      { type: "stop", stopIndex: 2 },
      { type: "stop", stopIndex: 3 },
      { type: "stop", stopIndex: 4 },
      { type: "stop", stopIndex: 5 },
      { type: "stop", stopIndex: 6 },
      { type: "stop", stopIndex: 7 },
      { type: "stop", stopIndex: 8 },
      { type: "lodging", label: "返回住宿", stay: "晚间返程", note: "晚餐后从市南银座中心回市北区住宿，给次日跨城转场留出休息时间。" },
    ],
    reminders: [
      "八大关、五四广场和小麦岛均是国庆热门点，早到比硬排队更划算。",
      "海边风会比市区体感低，建议带防风外套、舒适步行鞋和充电宝。",
      "行程中的八大关至麦凯乐片区、麦凯乐片区至啤酒博物馆、啤酒博物馆至五四广场、情人坝至中国水准零点景区、零点景区至小麦岛适合打车，减少体力消耗。",
      "小麦岛后的晚餐按字幕安排为波螺油子；国庆晚高峰先取号，排队过长就启用前海沿备选。",
    ],
  },
  {
    id: "day3",
    title: "Day 3",
    date: "10月4日 · 青岛 → 威海",
    pageTitle: "青岛到威海转场路线图",
    subtitle: "直达威海办理入住，下午沿环海路景点密集区一路看海。",
    theme: "自驾转场 + 环海路精华段",
    weather: {
      icon: "🌦️",
      summary: "青岛晴转阴 17–22℃；威海小雨 16–23℃ · 风力 4–5级",
      tip: "跨城天气差异较大，车内备雨具；环海路风更大，猫头山观景台按当天交通管制与天气取舍。",
    },
    lodging: {
      name: "威海环翠区住宿",
      address: "威海市环翠区戚东夼路11-17号楼305",
      coords: [122.0981, 37.5073],
    },
    originLodging: {
      name: "市北区住宿",
      address: "青岛市市北区即墨路12号501",
      coords: [120.3302, 36.0784],
    },
    heroText: "上午从市北退房后直驾威海，抵达环翠区办理入住；下午从海源公园起步，沿环海路一路玩到金海湾栈桥和国际海水浴场，再到欧乐坊吃夜宵。",
    summary: "市北区住宿 → 环翠区住宿 → 海源公园 → 三连岛观景段 → 半月湾 → 江古咀 → 猫头山3号 → 葡萄滩 → 远遥码头 → 金海湾栈桥 → 国际海水浴场 → 欧乐坊夜市",
    overview: [
      "建议 9:00 前退房直驾威海，不再停乳山银滩；服务区解决补给，争取下午尽早办理入住。",
      "环海路一段景点密集，适合自驾分段停车；到猫头山前先确认当日是否需要在停车场换乘摆渡车。",
      "金海湾栈桥留给日落后的蓝调时刻，随后到国际海水浴场散步看夜海，再去欧乐坊夜市吃夜宵；若雨势或道路管制影响进度，就在猫头山或远遥码头收尾后直接去夜市。",
    ],
    stops: [
      {
        name: "海源公园·一战华工纪念馆",
        address: "环翠区环海路与连林岛路交叉口附近",
        coords: [122.146474, 37.518932],
        stay: "约 45 分钟",
        note: "字幕把这里列为环海路第一站：休渔期可拍停泊渔船，纪念馆讲述一战期间赴欧华工历史；从纪念馆台阶下去的礁石区也是赶海点，注意潮汐。",
        tags: ["渔船", "一战华工纪念馆", "礁石赶海", "环海路起点"],
      },
      {
        name: "三连岛观景段",
        address: "环翠区环海路北山咀停车场附近（观三连岛）",
        coords: [122.1538, 37.5244],
        stay: "约 25 分钟",
        note: "三连岛是海上三座连续无人小岛，不能把车直接开到岛上；这里采用海源公园与半月湾之间的北山咀观景入口定位。字幕把它作为避开人群的海岸段，适合不赶时间地沿海散步。",
        tags: ["观三连岛", "北山咀", "小众海岸", "停车入口"],
      },
      {
        name: "半月湾",
        address: "环翠区孙家疃镇环海路43号附近",
        coords: [122.156415, 37.52917],
        stay: "约 25 分钟",
        note: "字幕认为这里的海滩本身不算最出众，但日出很漂亮。此次下午路过以看海为主，不必久留；想专程看日出可另择清晨再来。",
        tags: ["日出", "看海", "短暂停留"],
      },
      {
        name: "江古咀",
        address: "环翠区环海路江古咀（黑水洋美术馆一带）",
        coords: [122.158465, 37.534827],
        stay: "约 20 分钟",
        note: "字幕称它是人不多的小景点，整体有一点“小济州岛”氛围。作为猫头山前的短暂停留，拍完就继续向前。",
        tags: ["小众", "海岸观景", "短暂停留"],
      },
      {
        name: "猫头山3号观景台",
        address: "环翠区环海路三号观景平台（大项链）",
        coords: [122.156997, 37.540752],
        stay: "约 45 分钟",
        note: "字幕在十多个观景台中只把 3 号列为必去精华。4–10 月环海路部分路段可能限行，先导航到交叉口地面停车场，再按现场安排换乘摆渡车。",
        tags: ["必去机位", "3号观景台", "摆渡车", "道路管制"],
      },
      {
        name: "葡萄滩",
        address: "环翠区孙家疃镇环海路170-1号",
        coords: [122.111824, 37.543449],
        stay: "约 20 分钟",
        note: "字幕提到这里在极寒天气会有冰凌景观；十月主要看海岸线即可。若时间宽裕，可用长焦在孙家屯村公交站方向寻找“洞天海幕”机位。",
        tags: ["海岸", "冬季冰凌", "长焦机位", "机动"],
      },
      {
        name: "远遥码头",
        address: "环翠区威海海洋科技馆北侧约130米",
        coords: [122.093399, 37.547123],
        stay: "约 25 分钟",
        note: "字幕推荐旧墙体与大海同框的画面，适合快速出片。码头作业区不进入，只在开放岸线和道路边拍摄。",
        tags: ["渔港", "旧墙", "拍照", "不入作业区"],
      },
      {
        name: "金海湾栈桥",
        address: "环翠区环海路128号",
        coords: [122.051789, 37.535117],
        stay: "日落后约 30 分钟",
        note: "字幕把日落后的蓝调时刻列为这里的最佳状态，画面更有电影感。看完沿海短途前往国际海水浴场散步，不在夜间继续赶远路。",
        tags: ["蓝调时刻", "日落后", "国际海水浴场前"],
      },
      {
        name: "国际海水浴场",
        address: "威海高区北环海路178号",
        coords: [122.042078, 37.527543],
        stay: "约 35 分钟",
        note: "金海湾栈桥后沿海向北短途抵达。字幕提到网红“火炬三件套”分在三家咖啡馆内，想拍需早点取号；本次安排为傍晚散步看夜海，不为了咖啡机位久等，随后直接去欧乐坊夜市。",
        tags: ["海滨", "火炬三件套", "夜海", "顺路加停"],
      },
      {
        name: "欧乐坊夜市",
        address: "环翠区世昌大道268号欧乐坊商业广场外围",
        coords: [122.073738, 37.504366],
        stay: "夜宵约 45 分钟",
        note: "字幕把欧乐坊与东城路夜市、韩乐坊并列为威海三大夜市。国际海水浴场后回环翠区住宿的路上顺路停这里，夜市摊位在商场外围，挑几样小吃作收尾即可；次日要自驾返青岛，别久坐到太晚。",
        tags: ["字幕夜市", "小吃", "夜宵", "顺路收尾"],
      },
    ],
    references: [
      { name: "韩香福烤肉庄园(文化西路店)", kind: "餐饮", keyword: "韩香福烤肉庄园(文化西路店)", address: "环翠区文化西路197号1-4号1819", coords: [122.054826, 37.524642], note: "截图强推的韩式烤肉与脊骨汤锅备选；坐标已按文化西路店核对。" },
      { name: "苏雅经典名食(高区店)", kind: "餐饮", keyword: "苏雅经典名食(国际海水浴场店)", address: "环翠区文化西路193号", coords: [122.051872, 37.524098], note: "截图标注的国际海水浴场周边家常菜备选；高德当前标注为高区店。" },
      { name: "青禾睦木炭烤肉(山大店)", kind: "餐饮", keyword: "青禾睦木炭烤肉 山大店", address: "高技术产业开发区滨州北街8-6号", coords: [122.067286, 37.530569], note: "截图中的“青禾睦烤肉韩餐”对应的当前门店名称。" },
      { name: "食香阁家常菜", kind: "餐饮", keyword: "食香阁家常菜", note: "截图标注的家常菜备选。" },
      { name: "大雁店韩国料理·米肠汤饭·牛尾汤", kind: "餐饮", keyword: "大雁店 米肠汤饭 牛尾汤", address: "孙家疃镇北山路176号(阳聪饭店旁)", coords: [122.114984, 37.540074], note: "截图单独标出的米肠汤饭与牛尾汤备选；坐标已按高德当前门店核对。" },
      { name: "玉乐饭庄·外婆黄花鱼水饺·鲁菜(威海北站店)", kind: "餐饮", keyword: "玉乐饭庄 威海北站店", address: "环山路仁和佳苑17-1仁柳庄居委会南100米", coords: [122.075362, 37.499719], note: "截图标注的玉乐饭庄；高德当前返回威海北站店。" },
      { name: "桢家宝酒店(万家疃总店)", kind: "餐饮", keyword: "桢家宝酒店 总店", address: "田和街道办事处辛汪寨路30号门市房", coords: [122.093834, 37.505621], note: "截图标注的总店；坐标已按万家疃总店核对。" },
      { name: "顺心老琴烧烤", kind: "餐饮", keyword: "顺心老琴烧烤", note: "截图标注的烧烤备选。" },
      { name: "仁义酒楼", kind: "餐饮", keyword: "仁义酒楼", note: "截图标注的市区酒楼备选；等待可核验的当前门店点位。" },
      { name: "九禧海鲜居", kind: "餐饮", keyword: "九禧海鲜居", note: "截图标注的海鲜餐馆备选。" },
      { name: "申之歌海鲜酒楼", kind: "餐饮", keyword: "申之歌海鲜酒楼", note: "截图标注的海鲜餐馆备选。" },
      { name: "一统汤砂锅(总店)", kind: "餐饮", keyword: "一统汤砂锅 总店", note: "截图标注的砂锅备选。" },
      { name: "鸿达海鲜小院", kind: "餐饮", keyword: "鸿达海鲜小院", note: "截图标注的韩乐坊附近海鲜备选。" },
      { name: "玄家餐桌·酱蟹(威高广场店)", kind: "餐饮", keyword: "玄家餐桌 酱蟹", address: "环翠区新威路17-1号威高广场C馆3楼", coords: [122.122663, 37.505791], note: "截图标注的酱蟹备选；门店位于威高广场 C 馆 3 楼，坐标按该楼宇位置核对。" },
      { name: "高阳饭店(海南路)", kind: "餐饮", keyword: "高阳饭店 海南路", address: "青岛南路与海南路交叉口南50米路西", coords: [122.157691, 37.402737], note: "截图标注的韩乐坊附近餐馆；坐标已按海南路门店核对。" },
      { name: "鸿林酒楼(韩乐坊店)", kind: "餐饮", keyword: "鸿林酒楼 韩乐坊店", address: "齐鲁大道90-6号", coords: [122.162888, 37.418764], note: "截图标注的韩乐坊附近餐馆；坐标已按韩乐坊店核对。" },
      { name: "真利味脊骨火锅", kind: "餐饮", keyword: "真利味脊骨火锅", note: "截图标注的韩乐坊附近脊骨火锅备选。" },
      { name: "长峰农贸市场", kind: "市场", keyword: "长峰邻里农贸市场", address: "青岛中路114号长峰站点西侧", coords: [122.144841, 37.439206], note: "截图标注的长峰邻里农贸海鲜市场；高德当前标注为长峰农贸市场，可按当天情况选择现买现加工。" },
      { name: "威海水产品批发市场", kind: "市场", keyword: "威海水产品批发市场", address: "顺河街188号", coords: [122.112459, 37.498451], note: "截图标注的水产市场备选；坐标已按顺河街188号市场核对。" },
      { name: "合庆码头", kind: "市场", keyword: "合庆码头", address: "孙家疃镇环海路海源公园", coords: [122.15192, 37.519641], note: "截图标注的码头海鲜参考点，就在海源公园一带。" },
      { name: "江峰农贸市场", kind: "市场", keyword: "江峰农贸市场", note: "截图标注的农贸市场备选。" },
    ],
    sequence: [
      { type: "lodging", lodging: "origin", label: "退房出发", stay: "建议 9:00 前", note: "确认身份证、驾驶证、车辆证件、充电宝和所有行李后离开市北住宿。" },
      { type: "lodging", label: "办理入住", stay: "约 40 分钟", note: "入住威海市环翠区戚东夼路11-17号楼305，先放下行李。" },
      { type: "stop", stopIndex: 0 },
      { type: "stop", stopIndex: 1 },
      { type: "stop", stopIndex: 2 },
      { type: "stop", stopIndex: 3 },
      { type: "stop", stopIndex: 4 },
      { type: "stop", stopIndex: 5 },
      { type: "stop", stopIndex: 6 },
      { type: "stop", stopIndex: 7 },
      { type: "stop", stopIndex: 8 },
      { type: "stop", stopIndex: 9 },
      { type: "lodging", label: "返回住宿", stay: "晚间休息", note: "夜市后返回环翠区住宿；次日还要回青岛机场附近，今晚不熬夜。" },
    ],
    reminders: [
      "国庆高速路况变化快，出发前在导航中确认青岛至威海的实时线路；服务区解决午餐与补给，优先确保下午入住。",
      "环海路景点密集但停车与步行频繁，按海源公园、猫头山3号、远遥码头、金海湾栈桥四个核心点优先取舍。",
      "10 月仍可能有猫头山道路管理，务必服从现场指引换乘摆渡车；下雨、大风或天黑时直接缩短环海路。欧乐坊停车与营业状况以当晚现场为准。",
    ],
  },
  {
    id: "day4",
    title: "Day 4",
    date: "10月5日 · 威海 → 青岛机场",
    pageTitle: "威海到青岛机场住宿路线图",
    subtitle: "上午看威海海岸，下午自驾回到青岛胶州机场附近住宿。",
    theme: "威海半日 + 自驾返程",
    weather: {
      icon: "🌤️",
      summary: "威海多云转晴 14–18℃；青岛晴 15–20℃ · 北到西北风 4–5级",
      tip: "早晚偏冷且沿海风硬，火炬八街拍完就走；午后尽早自驾回胶州。",
    },
    lodging: {
      name: "青岛胶州机场附近住宿",
      address: "青岛市胶州市三木·空港小镇璟云十号楼2单元710",
      coords: [120.0934, 36.3298],
    },
    originLodging: {
      name: "威海环翠区住宿",
      address: "威海市环翠区戚东夼路11-17号楼305",
      coords: [122.0981, 37.5073],
    },
    heroText: "上午到火炬八街短暂停留，午后自驾回青岛胶州空港小镇办理入住，为次日航班留足余量。",
    summary: "环翠区住宿 → 火炬八街 → 胶州机场附近住宿",
    overview: [
      "早上退房并带好行李，只在火炬八街短暂停留；国际海水浴场已调整至 Day 3 环海路收尾。",
      "午饭后直接自驾回青岛胶州机场附近；不在这天额外加入青岛市区景点。",
      "晚间入住空港小镇，确认次日航班、机场交通与证件，把返程压力降到最低。",
    ],
    stops: [
      {
        name: "火炬八街",
        address: "威海高区火炬八街1号",
        coords: [122.030731, 37.524534],
        stay: "约 40 分钟",
        note: "字幕明确提醒这里确实好看但人也真的多。街道尽头是海，国庆早到快拍即可；别为了同一机位长时间排队，给午后返程留余量。",
        tags: ["海景街道", "上午", "人多", "错峰"],
      },
    ],
    sequence: [
      { type: "lodging", lodging: "origin", label: "退房出发", stay: "早上", note: "离开威海环翠区住宿，行李全程随身或先寄存。" },
      { type: "stop", stopIndex: 0 },
      { type: "lodging", label: "办理入住", stay: "傍晚", note: "入住青岛胶州市三木·空港小镇璟云十号楼2单元710，并确认次日到机场的出发时间。" },
    ],
    reminders: [
      "火炬八街短暂停留即可，别因拍照排队影响下午返程。国际海水浴场已在 Day 3 安排完成。",
      "午饭后就自驾返青岛，导航优先选择实时路况更稳的路线，不要为了省几公里改走陌生小路。",
      "今晚就确认航班动态、值机规则和前往机场的用车，避免 10 月 6 日早晨手忙脚乱。",
    ],
  },
  {
    id: "day5",
    title: "Day 5",
    date: "10月6日 · 返程",
    pageTitle: "青岛返程路线图",
    subtitle: "从机场附近住宿从容出发，把时间留给值机和安检。",
    theme: "前往机场 · 平稳返程",
    weather: {
      icon: "☀️",
      summary: "晴 · 14–21℃ · 西南风 3–4级",
      tip: "天气适合出行，但国庆返程客流不小；国内航班建议至少提前 2 小时抵达航站楼。",
    },
    lodging: {
      name: "青岛胶州机场附近住宿",
      address: "青岛市胶州市三木·空港小镇璟云十号楼2单元710",
      coords: [120.0934, 36.3298],
    },
    heroText: "从胶州空港小镇前往青岛胶东国际机场。根据航班起飞时间倒推，办理退房后直接出发，不再安排景点。",
    summary: "青岛胶州机场附近住宿 → 青岛胶东国际机场",
    overview: [
      "起飞前一晚完成线上值机（如航司开放）、整理证件与托运行李。",
      "当天按航班起飞时间倒推离开住宿；国庆返程建议再多留一些排队时间。",
      "到航站楼后先办理值机或行李托运，再通过安检，不安排额外绕路。",
    ],
    stops: [
      {
        name: "青岛胶东国际机场",
        address: "青岛胶东国际机场",
        coords: [120.0873, 36.3617],
        stay: "按航班起飞时间倒推",
        note: "国内航班建议至少提前 2 小时抵达，国庆返程高峰建议预留更充足时间。",
        tags: ["返程", "值机", "安检"],
      },
    ],
    sequence: [
      { type: "lodging", label: "退房出发", stay: "按航班时间倒推", note: "确认身份证、手机、充电宝、行李和航班动态后出发。" },
      { type: "stop", stopIndex: 0 },
    ],
    reminders: [
      "出发前再次核对航站楼、航班时间和行李额度；充电宝不能托运。",
      "建议使用网约车或住宿方确认的接送方式直达出发层，避免带行李多次换乘。",
      "遇到航班变动时，优先以航司 App 或短信通知为准。",
    ],
  },
];

const requestedDayId = new URLSearchParams(window.location.search).get("day");
const requestedDayIndex = itinerary.findIndex((day) => day.id === requestedDayId);

const state = {
  currentDayIndex: requestedDayIndex >= 0 ? requestedDayIndex : 0,
  activeSequenceIndex: null,
  AMap: null,
  map: null,
  markers: [],
  lodgingMarkers: [],
  referenceMarkers: [],
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
  if (item.type !== "lodging") return day.stops[item.stopIndex];
  return item.lodging === "origin" ? day.originLodging : day.lodging;
}

function getSequenceLodging(day, item) {
  return item.lodging === "origin" ? day.originLodging : day.lodging;
}

function getPointDistance(start, end) {
  const [lng1, lat1] = start;
  const [lng2, lat2] = end;
  const toRad = (value) => (value * Math.PI) / 180;
  const earthRadius = 6378137;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getSegmentColor(index) {
  return ["#087f8c", "#d97706", "#0f766e", "#2563eb", "#9a6b25"][index % 5];
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
    .map((day, index) => `
      <button class="day-tab ${index === state.currentDayIndex ? "active" : ""}" data-day-index="${index}" type="button">
        <strong>${day.title}</strong>
        <span>${escapeHtml(day.subtitle)}</span>
      </button>
    `)
    .join("");
}

function buildStopPhotoContent(day, stopIndex, stop) {
  const photos = STOP_PHOTOS[`${day.id}:${stopIndex}`] || [];
  if (!photos.length) return "";
  return `
    <div class="stop-photo-grid">
      ${photos.map((photo) => `
        <figure class="stop-photo">
          <img src="${escapeHtml(photo.url)}" alt="${escapeHtml(`高德${photo.nearby ? "附近地点" : "地点"}图片：${photo.sourceName}`)}" loading="lazy" />
          <figcaption>${escapeHtml(photo.nearby ? `高德附近 POI：${photo.sourceName}` : `高德 POI：${photo.sourceName}`)}</figcaption>
        </figure>
      `).join("")}
    </div>
  `;
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
    <p class="weather-tip">预报于 10 月 1 日更新。${escapeHtml(day.weather.tip)} 出发前建议再次查看临近预报。</p>
  `;
  dayOverview.innerHTML = day.overview.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  stopList.innerHTML = day.sequence
    .map((item, sequenceIndex) => {
      const stop = getSequenceStop(day, item);
      const isLodging = item.type === "lodging";
      const lodging = isLodging ? getSequenceLodging(day, item) : null;
      const name = isLodging ? `★ ${item.label}` : stop.name;
      const stay = isLodging ? item.stay : stop.stay;
      const note = isLodging ? item.note : stop.note;
      const tags = isLodging ? ["住宿", lodging.name, item.label] : stop.tags;
      const images = isLodging ? "" : buildStopPhotoContent(day, item.stopIndex, stop);
      return `
        <li class="stop-item selectable ${isLodging ? "lodging-stop" : ""} ${sequenceIndex === state.activeSequenceIndex ? "active" : ""}" data-sequence-index="${sequenceIndex}">
          <strong class="stop-name">${escapeHtml(name)}</strong>
          <span class="stop-meta">${escapeHtml(stay)}</span>
          <span class="stop-note">${escapeHtml(note)}</span>
          ${images}
          <span class="stop-note">定位：${escapeHtml(stop.address)}</span>
          <div class="stop-tags">${tags.map((tag) => `<span class="stop-tag">${escapeHtml(tag)}</span>`).join("")}</div>
        </li>
      `;
    })
    .join("");
  dayReminders.innerHTML = [...day.reminders, `当晚住宿：${day.lodging.address}。`]
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
          <span>${escapeHtml(stop.address)}</span>
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
  const lodging = isLodging ? getSequenceLodging(day, item) : null;
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
  state.lodgingMarkers.forEach((marker) => marker.setMap(null));
  state.referenceMarkers.forEach((marker) => marker.setMap(null));
  state.routeLines.forEach((line) => line.setMap(null));
  state.markers = [];
  state.lodgingMarkers = [];
  state.referenceMarkers = [];
  state.routeLines = [];
}

function fitRoute() {
  const day = getCurrentDay();
  const overlays = day.id === "day3"
    ? [...state.markers, ...state.lodgingMarkers.slice(1), ...state.routeLines.slice(1)]
    : [...state.markers, ...state.lodgingMarkers, ...state.routeLines];
  if (state.map && overlays.length) state.map.setFitView(overlays, false, [90, 90, 90, 90]);
}

function searchDrivingSegment(start, end) {
  return new Promise((resolve) => {
    state.driving.search(start, end, (status, result) => {
      if (status !== "complete" || !result?.routes?.length) return resolve(null);
      const path = result.routes[0].steps.flatMap((step) => step.path || []);
      resolve({ mode: "driving", path: path.length ? path : [start, end] });
    });
  });
}

function searchWalkingSegment(start, end) {
  return new Promise((resolve) => {
    state.walking.search(start, end, (status, result) => {
      if (status !== "complete" || !result?.routes?.length) return resolve(null);
      const path = result.routes[0].steps.flatMap((step) => step.path || []);
      resolve({ mode: "walking", path: path.length ? path : [start, end] });
    });
  });
}

function normalizePlaceName(name) {
  return String(name)
    .toLowerCase()
    .replace(/[\s·・()（）,，.。-]/g, "");
}

function searchReferencePoi(reference) {
  if (reference.coords) return Promise.resolve(reference);
  return new Promise((resolve) => {
    const placeSearch = new state.AMap.PlaceSearch({ city: "威海", citylimit: true, pageSize: 10, extensions: "base" });
    placeSearch.search(reference.keyword, (status, result) => {
      const referenceName = normalizePlaceName(reference.name);
      const poi = status === "complete"
        ? result?.poiList?.pois?.find((item) => {
          const poiName = normalizePlaceName(item.name);
          return item.location && (poiName.includes(referenceName) || referenceName.includes(poiName));
        })
        : null;
      if (!poi) return resolve(null);
      resolve({
        ...reference,
        address: [poi.address, poi.pname, poi.cityname, poi.adname].filter(Boolean).join(" "),
        coords: [Number(poi.location.lng), Number(poi.location.lat)],
      });
    });
  });
}

function buildReferenceInfoContent(reference) {
  return `
    <div class="amap-info">
      <h3>${escapeHtml(reference.name)}</h3>
      <p><strong>${escapeHtml(reference.kind)}</strong> · 截图推荐参考</p>
      <p>${escapeHtml(reference.address)}</p>
      <p>${escapeHtml(reference.note)}</p>
    </div>
  `;
}

function getReferenceMarkerLabel(reference) {
  return reference.name.replace(/[（(].*?[）)]/g, "").trim();
}

async function buildRouteSegments(day) {
  const segments = [];
  for (let index = 0; index < day.sequence.length - 1; index += 1) {
    const start = getSequenceStop(day, day.sequence[index]);
    const end = getSequenceStop(day, day.sequence[index + 1]);
    const directDistance = getPointDistance(start.coords, end.coords);
    let route = directDistance <= 1200 ? await searchWalkingSegment(start.coords, end.coords) : null;
    if (!route && directDistance <= 65000) route = await searchDrivingSegment(start.coords, end.coords);
    if (!route) route = { mode: "transfer", path: [start.coords, end.coords] };
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
      anchor: "center",
      content: `<div style="display:grid;place-items:center;width:26px;height:26px;border:2px solid #fff;border-radius:50%;background:#087f8c;box-shadow:0 3px 9px rgba(15,118,110,.34);color:#fff;font:700 12px/1 sans-serif;">${sequenceIndex + 1}</div>`,
    });
    marker.on("click", () => focusSequence(sequenceIndex));
    return marker;
  });

  const lodgingIndexes = day.sequence
    .map((item, index) => (item.type === "lodging" ? index : -1))
    .filter((index) => index >= 0);
  state.lodgingMarkers = lodgingIndexes.map((sequenceIndex) => {
    const item = day.sequence[sequenceIndex];
    const lodging = getSequenceLodging(day, item);
    const marker = new state.AMap.Marker({
      position: lodging.coords,
      title: lodging.name,
      anchor: "bottom-center",
      content: `
        <div style="display:flex;align-items:center;gap:6px;padding:4px 8px 4px 4px;border-radius:999px;background:rgba(255,255,255,0.96);border:1px solid rgba(8,127,140,0.22);box-shadow:0 8px 20px rgba(28,92,105,0.18);">
          <div style="display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#087f8c;color:#fff;font-size:14px;line-height:1;">★</div>
          <span style="color:#087f8c;font-size:12px;font-weight:700;white-space:nowrap;">${escapeHtml(item.label)}</span>
        </div>
      `,
    });
    marker.on("click", () => focusSequence(sequenceIndex));
    return marker;
  });

  const [routeSegments, references] = await Promise.all([
    buildRouteSegments(day),
    Promise.all((day.references || []).map((reference) => searchReferencePoi(reference))),
  ]);
  if (renderToken !== state.mapRenderToken) return;
  state.routeLines = routeSegments.map((segment) => new state.AMap.Polyline({
    path: segment.path,
    strokeColor: segment.color,
    strokeOpacity: 0.95,
    strokeWeight: segment.mode === "transfer" ? 4 : 6,
    strokeStyle: segment.mode === "walking" || segment.mode === "transfer" ? "dashed" : "solid",
    strokeDasharray: segment.mode === "walking" || segment.mode === "transfer" ? [10, 6] : undefined,
    showDir: segment.mode === "driving",
    lineJoin: "round",
    lineCap: "round",
  }));
  state.referenceMarkers = references.filter(Boolean).map((reference) => {
    const isMarket = reference.kind === "市场";
    const markerColor = isMarket ? "#7c5c2e" : "#d97706";
    const marker = new state.AMap.Marker({
      position: reference.coords,
      title: `${reference.kind} · ${reference.name}`,
      anchor: "bottom-center",
      content: `
        <div style="display:flex;align-items:center;gap:5px;transform:translateY(-2px);white-space:nowrap;">
          <span style="display:grid;place-items:center;flex:0 0 auto;width:24px;height:24px;border:2px solid #fff;border-radius:50%;background:${markerColor};box-shadow:0 3px 9px rgba(120,83,22,.32);color:#fff;font:700 11px/1 sans-serif;">${isMarket ? "市" : "餐"}</span>
          <span style="display:block;max-width:136px;overflow:hidden;text-overflow:ellipsis;padding:4px 7px;border:1px solid ${markerColor};border-radius:4px;background:rgba(255,255,255,.96);box-shadow:0 2px 7px rgba(52,41,22,.2);color:#3f3220;font:600 12px/1.2 sans-serif;">${escapeHtml(getReferenceMarkerLabel(reference))}</span>
        </div>
      `,
    });
    marker.on("click", () => {
      state.map.setZoomAndCenter(15.5, reference.coords);
      state.infoWindow.setContent(buildReferenceInfoContent(reference));
      state.infoWindow.open(state.map, reference.coords);
    });
    return marker;
  });
  state.map.add([...state.markers, ...state.lodgingMarkers, ...state.routeLines, ...state.referenceMarkers]);
  const hints = [];
  if (routeSegments.some((segment) => segment.mode === "transfer")) {
    hints.push(day.id === "day3" ? "地图默认聚焦威海环海路；青岛至威海转场以虚线标示。" : "跨城路段以虚线显示。");
  }
  if (state.referenceMarkers.length) hints.push(`橙色“餐”与棕色“市”是截图中的 ${state.referenceMarkers.length} 个餐饮、市场参考点，名称已直接标在地图上，点击可查看详情。`);
  if (hints.length) showHint(hints.join(" "));
  if (Number.isInteger(state.activeSequenceIndex)) focusSequence(state.activeSequenceIndex);
  else fitRoute();
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
      plugins: ["AMap.Scale", "AMap.ToolBar", "AMap.Driving", "AMap.Walking", "AMap.PlaceSearch"],
    });
    state.AMap = AMap;
    state.map = new AMap.Map("map", { viewMode: "3D", zoom: 11, center: itinerary[0].lodging.coords });
    state.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -26), closeWhenClickMap: true });
    state.driving = new AMap.Driving({ policy: AMap.DrivingPolicy.LEAST_TIME, hideMarkers: true, showTraffic: false, autoFitView: false });
    state.walking = new AMap.Walking({ hideMarkers: true, autoFitView: false });
    state.map.addControl(new AMap.Scale());
    state.map.addControl(new AMap.ToolBar({ position: { right: "18px", top: "18px" } }));
    await renderMapDay();
  } catch (error) {
    console.error(error);
    showHint("地图初始化失败，请检查网络环境后刷新页面。 ");
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
