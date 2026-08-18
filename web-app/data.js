/**
 * 青森 4泊5日 車旅 確定データ
 * 参加者: T ＆ G
 */

const TRIP_DATA = {
  title: "青森・下北・津軽 4泊5日 車旅 3大ルート比較＆確定ガイド",
  participants: ["T", "G"],
  days: 5,
  nights: 4,
  budgetPerPerson: 145000,
  
  routes: [
    {
      id: "route-3",
      name: "【案3】秋田/大館IN ➔ 青森OUT",
      subtitle: "完全一筆書き・最高効率",
      badge: "👑 最高推奨（神プラン）",
      badgeClass: "badge-crown",
      totalDistance: "約 580 km",
      totalDriveTime: "約 12〜13 時間",
      avgDailyDrive: "約 2.4 時間 / 日",
      changeCost: "少額（片道便差額 ＋ 乗り捨て約1万円）",
      rating: 5,
      score: "98点",
      googleMapsUrl: "https://www.google.com/maps/dir/%E5%A4%A7%E9%A4%A8%E8%83%BD%E4%BB%A3%E7%A9%BA%E6%B8%AF/%E5%8D%81%E4%BA%8C%E6%B9%96+%E9%9D%92%E6%B1%A0/%E9%AB%99%E5%B1%B1%E7%A8%B2%E8%8D%B7%E7%A5%9E%E7%A4%BE/%E9%BE%8D%E9%A3%9B%E5%B4%8E/%E8%9F%99%E7%94%B0%E6%B8%AF/%E8%84%87%E9%87%8E%E6%B2%A2%E6%B8%AF/%E4%BB%8F%E3%83%B6%E6%55%A6/%E5%A4%A7%E9%96%93%E5%B4%8E/%E6%81%90%E5%B1%B1%E5%AE%87%E6%9B%BD%E5%88%A9%E6%B9%96/%E4%B8%89%E5%86%85%E4%B8%B8%E5%B1%B1%E9%81%BA%E8%B7%A1/%E9%9D%92%E6%A3%AE%E7%A9%BA%E6%B8%AF",
      embedMapQuery: "青森県",
      description: "大館能代空港（または秋田空港）から入り、白神山地・十二湖から津軽・下北・青森へと抜ける究極の一筆書き。重複区間が一切なく、運転疲労を最小限に抑えながら全Sランクを完全制覇できます。",
      pros: [
        "県内での重複走行が完全ゼロ（最短580km）",
        "白神山地・十二湖へのアクセスが最速",
        "1日平均運転2.4時間で観光滞在・温泉満喫時間が最大化",
        "Day3のむつ湾フェリー・仏ヶ浦・大間・恐山宿坊が無理なく完璧に繋がる"
      ],
      cons: [
        "往路航空券の変更とレンタカー乗り捨て手配（約1万円）が必要"
      ],
      itinerary: [
        {
          day: 1,
          title: "西海岸 ＆ 世界自然遺産 白神山地",
          distance: "約 90 km",
          driveTime: "約 2 時間",
          stay: "深浦 / 黄金崎不老ふ死温泉",
          stayDetail: "日本海に面した絶景露天風呂・海鮮会席夕食",
          schedule: [
            { time: "11:30", text: "大館能代空港 または 秋田空港 到着・レンタカー受取", spotId: null },
            { time: "13:30", text: "白神山地・十二湖（青池・沸壺の池散策 / 約1.5h）", spotId: "spot-juniko" },
            { time: "16:00", text: "千畳敷海岸（夕日スポット・畳状の奇岩群散策）", spotId: "spot-senjojiki" },
            { time: "17:30", text: "深浦温泉 到着・チェックイン・露天風呂と夕食", spotId: "stay-fukauro" }
          ]
        },
        {
          day: 2,
          title: "津軽の絶景 ＆ 本州最北端 龍飛崎",
          distance: "約 160 km",
          driveTime: "約 3.5 時間",
          stay: "津軽半島北部（蟹田・五所川原・今別エリア）",
          stayDetail: "翌朝9:20の蟹田港フェリーに直結する立地",
          schedule: [
            { time: "08:30", text: "深浦出発 ➔ 国道101号を北上", spotId: null },
            { time: "09:45", text: "鶴の舞橋（日本一長い木造三連太鼓橋・岩木山の水鏡）", spotId: "spot-tsuruno-maihashi" },
            { time: "10:45", text: "髙山稲荷神社（龍のようにうねる千本鳥居と日本庭園）", spotId: "spot-takayama" },
            { time: "12:30", text: "中泊・十三湖周辺で昼食（特産しじみラーメン等）", spotId: null },
            { time: "14:30", text: "龍飛崎（階段国道339号・津軽海峡冬景色歌碑・展望台）", spotId: "spot-tappi" },
            { time: "17:00", text: "津軽半島北部（蟹田・五所川原エリア）宿泊地へ", spotId: null }
          ]
        },
        {
          day: 3,
          title: "海峡横断 ＆ 下北Sランク完全制覇",
          distance: "約 110 km",
          driveTime: "約 2.5 時間",
          stay: "恐山 宿坊「吉祥閣」",
          stayDetail: "霊場境内の名湯恐山温泉・17:30本格精進料理夕食（17:00着厳守）",
          schedule: [
            { time: "08:50", text: "蟹田港フェリーターミナル到着・乗船手続き", spotId: "ferry-kanita" },
            { time: "09:20〜10:20", text: "🚢 むつ湾フェリー（1便）津軽 ➔ 下北 60分横断クルーズ", spotId: "ferry-info" },
            { time: "10:30", text: "脇野沢港発 ➔ 国道338号（海峡ライン）", spotId: null },
            { time: "11:45", text: "佐井港（アルサス）/ 仏ヶ浦 定期観光遊覧船（奇岩海上見学＆上陸散策）", spotId: "spot-hotokegaura" },
            { time: "14:00", text: "大間崎 ＆ 大間「民宿 海峡荘」で極上大間マグロ丼昼食", spotId: "spot-oma" },
            { time: "15:30", text: "大間発 ➔ 霊場恐山へ（車で約1時間）", spotId: null },
            { time: "16:45", text: "恐山 宿坊「吉祥閣」チェックイン（門限・夕食に余裕で間に合う）", spotId: "stay-osorezan" }
          ]
        },
        {
          day: 4,
          title: "霊場参拝 ＆ 縄文世界遺産 三内丸山",
          distance: "約 140 km",
          driveTime: "約 3 時間",
          stay: "青森市内 または 浅虫温泉",
          stayDetail: "郷土料理居酒屋・青森地酒（田酒・八仙等）",
          schedule: [
            { time: "06:30", text: "朝の勤行（自由参加・厳かな祈り） ➔ 朝食", spotId: null },
            { time: "08:00", text: "恐山境内参拝（地獄巡り・極楽浜・宇曽利湖）", spotId: "spot-osorezan-walk" },
            { time: "10:00", text: "恐山出発 ➔ むつ市・横浜町経由（道の駅よこはま・ほたて）", spotId: null },
            { time: "13:30", text: "特別史跡 三内丸山遺跡（世界文化遺産・縄文集落見学）", spotId: "spot-sannaimaruyama" },
            { time: "17:00", text: "青森市内 または 浅虫温泉 チェックイン", spotId: null }
          ]
        },
        {
          day: 5,
          title: "青森ウォーターフロント ＆ 帰路",
          distance: "約 20 km",
          driveTime: "約 0.5 時間",
          stay: "帰路フライト",
          stayDetail: "青森空港 ➔ 帰宅",
          schedule: [
            { time: "09:30", text: "ねぶたの家 ワ・ラッセ（迫力の本物大型ねぶた展示館）", spotId: "spot-warasse" },
            { time: "11:00", text: "A-FACTORY（青森県産アップルパイ・シードル試飲工房・お土産）", spotId: "spot-afactory" },
            { time: "13:00", text: "青森空港 レンタカー返却 ➔ 帰路フライト", spotId: null }
          ]
        }
      ]
    },
    {
      id: "route-2",
      name: "【案2】青森発着 改良周遊",
      subtitle: "手軽・既存予約維持",
      badge: "★ 大本命（高バランス）",
      badgeClass: "badge-star",
      totalDistance: "約 760 km",
      totalDriveTime: "約 16〜17 時間",
      avgDailyDrive: "約 3.2 時間 / 日",
      changeCost: "0 円（既存の航空券・レンタカーを維持）",
      rating: 4.5,
      score: "90点",
      description: "既存の青森発着便をそのまま活用し、八戸をカットして移動距離を最適化したモデル。Day2宿泊地を津軽北部に寄せることで朝9:20フェリーをフル活用できます。",
      pros: [
        "既存の航空券・レンタカー予約を変更する必要がない",
        "八戸を削ることで観光滞在時間をしっかり確保",
        "全Sランクスポットを網羅可能"
      ],
      cons: [
        "青森空港から西海岸・十二湖への移動（約2.5時間）が初日に発生",
        "案3に比べて総走行距離が約180km長くなる"
      ],
      itinerary: [
        {
          day: 1,
          title: "青森IN ➔ 三内丸山 ➔ 西海岸",
          distance: "約 130 km",
          driveTime: "約 3 時間",
          stay: "深浦 / 黄金崎不老ふ死温泉",
          stayDetail: "海辺の絶景露天風呂",
          schedule: [
            { time: "11:30", text: "青森空港 到着・レンタカー受取", spotId: null },
            { time: "12:15", text: "特別史跡 三内丸山遺跡 見学", spotId: "spot-sannaimaruyama" },
            { time: "14:30", text: "白神山地・十二湖（青池散策）", spotId: "spot-juniko" },
            { time: "17:30", text: "深浦温泉 到着・チェックイン", spotId: "stay-fukauro" }
          ]
        },
        {
          day: 2,
          title: "津軽の絶景 ➔ 龍飛崎 ➔ 蟹田泊",
          distance: "約 160 km",
          driveTime: "約 3.5 時間",
          stay: "蟹田・五所川原エリア",
          stayDetail: "翌朝フェリーに直結",
          schedule: [
            { time: "08:30", text: "深浦出発 ➔ 鶴の舞橋 ➔ 髙山稲荷神社", spotId: "spot-takayama" },
            { time: "14:30", text: "龍飛崎（階段国道・歌碑）", spotId: "spot-tappi" },
            { time: "17:00", text: "蟹田・五所川原宿泊", spotId: null }
          ]
        },
        {
          day: 3,
          title: "朝9:20フェリー ➔ 仏ヶ浦 ➔ 大間 ➔ 恐山宿坊",
          distance: "約 110 km",
          driveTime: "約 2.5 時間",
          stay: "恐山 宿坊「吉祥閣」",
          stayDetail: "名湯・精進料理（17:00着厳守）",
          schedule: [
            { time: "08:50", text: "蟹田港 ➔ 🚢 09:20発 フェリー横断", spotId: "ferry-info" },
            { time: "11:45", text: "佐井港 / 仏ヶ浦遊覧船", spotId: "spot-hotokegaura" },
            { time: "14:00", text: "大間崎 / 海峡荘マグロ丼", spotId: "spot-oma" },
            { time: "16:45", text: "恐山宿坊 吉祥閣 チェックイン", spotId: "stay-osorezan" }
          ]
        },
        {
          day: 4,
          title: "恐山朝散策 ➔ むつ ➔ 浅虫温泉/青森市",
          distance: "約 120 km",
          driveTime: "約 2.5 時間",
          stay: "浅虫温泉 または 青森市内",
          stayDetail: "郷土料理・地酒",
          schedule: [
            { time: "08:00", text: "恐山境内参拝", spotId: "spot-osorezan-walk" },
            { time: "10:00", text: "むつ・横浜町経由で青森方面へ", spotId: null },
            { time: "15:00", text: "浅虫温泉 または 青森市内散策", spotId: null }
          ]
        },
        {
          day: 5,
          title: "ワ・ラッセ ➔ A-FACTORY ➔ 青森空港",
          distance: "約 20 km",
          driveTime: "約 0.5 時間",
          stay: "帰路フライト",
          stayDetail: "青森空港 OUT",
          schedule: [
            { time: "09:30", text: "ねぶたの家 ワ・ラッセ ＆ A-FACTORY", spotId: "spot-warasse" },
            { time: "13:00", text: "青森空港 レンタカー返却・フライト", spotId: null }
          ]
        }
      ]
    },
    {
      id: "route-1",
      name: "【案1】八戸含む全周周遊",
      subtitle: "大回り・過酷",
      badge: "❌ 非推奨（破綻リスク）",
      badgeClass: "badge-cross",
      totalDistance: "約 1,050 km",
      totalDriveTime: "約 24〜25 時間",
      avgDailyDrive: "約 4.8 時間 / 日",
      changeCost: "0 円",
      rating: 2,
      score: "45点",
      description: "八戸（蕪嶋神社・八食センター）を含めて青森県を外周一周する案。4泊5日では毎日5時間近い運転になり、観光地での滞在時間が極端に削られます。",
      pros: ["八戸まで含めた完全網羅"],
      cons: [
        "1日平均4.8時間の過酷な運転（免許合宿状態）",
        "観光滞在時間が激減し、日没後の山道運転リスクが高い",
        "恐山宿坊のチェックイン（17:00）に遅れる危険性大"
      ],
      itinerary: []
    }
  ],

  spots: [
    {
      id: "stay-osorezan",
      name: "恐山 宿坊「吉祥閣」",
      category: "Sランク 宿",
      badge: "最重要予約",
      area: "下北半島・むつ市",
      stayTime: "1泊（16:00〜17:00着厳守）",
      tel: "0175-22-3825",
      mapQuery: "恐山 宿坊 吉祥閣",
      desc: "日本三大霊場の境内に宿泊する唯一無二の異世界体験。名湯・恐山温泉に浸かり、本格的な精進料理をいただく。夜の静寂と朝の勤行（自由参加）は圧巻。",
      tips: "電話予約のみ。夕食は17:30〜18:00。17時以降の到着は厳禁。満室時は即「民宿 海峡荘（0175-37-3691）」へ。"
    },
    {
      id: "spot-oma",
      name: "大間「民宿 海峡荘」",
      category: "Sランク 飯",
      badge: "絶品マグロ",
      area: "本州最北端・大間崎",
      stayTime: "約 1〜1.5 時間",
      tel: "0175-37-3691",
      mapQuery: "民宿海峡荘",
      desc: "本州最北端・大間崎の目の前にある名店。店主自ら目利きした極上の大間本マグロ丼（赤身・中トロ・大トロ）は感動必至のクオリティ。",
      tips: "昼食のみの利用も可能。大間崎モニュメントでの記念撮影とセットで訪問。"
    },
    {
      id: "spot-hotokegaura",
      name: "仏ヶ浦（ほとけがうら）",
      category: "Sランク 景勝地",
      badge: "国指定名勝",
      area: "下北半島・佐井村",
      stayTime: "約 1.5〜2 時間",
      tel: "0175-38-2255",
      mapQuery: "佐井定期観光 仏ヶ浦遊覧船",
      desc: "約2kmにわたって白緑色の巨大な奇岩群が連なる神秘の名所。エメラルドグリーンの澄み切った海と巨岩のコントラストが圧巻。",
      tips: "陸路（急登25分の階段）は避け、佐井港アルサスからの定期観光船（海上遊覧＋上陸30分）を利用するのがベスト。"
    },
    {
      id: "spot-tappi",
      name: "龍飛崎（たっぴざき）",
      category: "Sランク 絶景",
      badge: "津軽最北端",
      area: "津軽半島・外ヶ浜町",
      stayTime: "約 1 時間",
      tel: "0174-38-2301",
      mapQuery: "龍飛崎 展望台",
      desc: "津軽海峡を一望する断崖絶壁。日本で唯一車が通れない「階段国道339号」や、ボタンを押すと大音量で流れる「津軽海峡・冬景色歌碑」がある名所。",
      tips: "風が強いため羽織るものがあると便利。竜泊ラインのドライブも爽快。"
    },
    {
      id: "spot-takayama",
      name: "髙山稲荷神社",
      category: "Sランク 神社",
      badge: "絶景千本鳥居",
      area: "津軽・つがる市",
      stayTime: "約 1 時間",
      tel: "0173-56-2015",
      mapQuery: "高山稲荷神社",
      desc: "日本庭園の中に幾重にも連なる鮮やかな「千本鳥居」が龍のようにうねる絶景神社。商売繁盛・航海安全の霊験あらたかなパワースポット。",
      tips: "高台の展望台から見下ろす鳥居群の全景が最高のフォトスポット。"
    },
    {
      id: "spot-juniko",
      name: "白神山地・十二湖（青池）",
      category: "Sランク 自然",
      badge: "世界自然遺産",
      area: "西海岸・深浦町",
      stayTime: "約 1.5 時間",
      tel: "0173-77-2012",
      mapQuery: "森の物産館キョロロ 十二湖",
      desc: "世界遺産・白神山地の麓に広がる湖沼群。まるでインクを流し込んだような鮮烈なコバルトブルーを誇る「青池」とブナ原生林の散策路。",
      tips: "「森の物産館キョロロ」駐車場から青池・沸壺の池を周回散策（徒歩約40分）。歩きやすいスニーカー推奨。"
    },
    {
      id: "spot-sannaimaruyama",
      name: "特別史跡 三内丸山遺跡",
      category: "Sランク 世界遺産",
      badge: "世界文化遺産",
      area: "青森市",
      stayTime: "約 1.5 時間",
      tel: "017-766-8282",
      mapQuery: "特別史跡 三内丸山遺跡",
      desc: "世界文化遺産「北海道・北東北の縄文遺跡群」の中心。約5,900年前〜4,200年前の大規模集落跡。大型掘立柱建物や大型竪穴住居は圧巻。",
      tips: "青森空港から車で約15分。最新のガイダンス施設「縄文時遊館」も必見。"
    }
  ],

  ferry: {
    name: "むつ湾フェリー（かもしか）",
    route: "蟹田港（津軽） ⇄ 脇野沢港（下北）",
    duration: "60 分",
    period: "4月21日 〜 11月5日",
    timetable: [
      { bound: "脇野沢行き", no: "1便", depart: "09:20", arrive: "10:20", note: "★推奨（この便に乗る）" },
      { bound: "脇野沢行き", no: "3便", depart: "14:00", arrive: "15:00", note: "⚠️宿坊着が遅れ破綻" },
      { bound: "蟹田行き", no: "2便", depart: "10:50", arrive: "11:50", note: "時計回り用" },
      { bound: "蟹田行き", no: "4便", depart: "15:30", arrive: "16:30", note: "時計回り用" }
    ],
    telKanita: "0174-22-3020",
    telWakinosawa: "0175-44-3371",
    webUrl: "https://mutsuwan-ferry.jp/",
    bookingRule: "乗船日1ヶ月前の同日午前9:00より予約受付開始（車検証持参・現金決済）",
    backupPlan: "当日欠航時は蟹田から陸路（青森市・野辺地経由）でむつ市へ直行（車で約3時間）。Day3は恐山・大間を先に行い、仏ヶ浦をDay4に回す。"
  },

  budgetBreakdown: [
    { item: "飛行機（往復）", costPerPerson: 20000, note: "手配済 / 変更可" },
    { item: "レンタカー（4泊5日）", costPerPerson: 20000, note: "乗り捨て時 約+1万円" },
    { item: "ガソリン代", costPerPerson: 10000, note: "走行約580〜760km 想定" },
    { item: "宿泊費（4泊夕朝食付）", costPerPerson: 60000, note: "目安 1.5万円/泊" },
    { item: "飲食費（大間マグロ等）", costPerPerson: 25000, note: "大間マグロ丼・郷土料理・地酒" },
    { item: "雑費・フェリー・拝観料", costPerPerson: 10000, note: "フェリー運賃・拝観料・お土産" }
  ],

  checklist: [
    { id: "step-1", title: "恐山 宿坊「吉祥閣」に電話予約（最優先）", desc: "TEL: 0175-22-3825（Day3宿泊）。満室時は即「民宿 海峡荘 0175-37-3691」へ。" },
    { id: "step-2", title: "航空券 ＆ レンタカー乗り捨て変更手配", desc: "往路便を大館能代空港または秋田空港着に変更、レンタカー乗り捨て手配。" },
    { id: "step-3", title: "むつ湾フェリー予約（乗船日1ヶ月前）", desc: "Day3 蟹田 09:20発（1便）の車両枠をWeb/電話（0174-22-3020）で確保。" },
    { id: "step-4", title: "残り3泊の宿を確保（夕食付推奨）", desc: "Day1深浦（不老ふ死温泉等）、Day2蟹田/五所川原、Day4青森市内/浅虫温泉。" },
    { id: "step-5", title: "仏ヶ浦 観光遊覧船の運航確認", desc: "佐井定期観光（0175-38-2255）の出航時間・予約確認。" }
  ]
};
