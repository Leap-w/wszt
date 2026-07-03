/* ============================================================
   国内优秀虚拟展厅案例调研 — 主脚本
   Virtual Exhibition Hall Research — Main Script

   功能：
   - 案例数据管理
   - 实时搜索过滤
   - 多维度筛选
   - 深色模式切换
   - 滚动动画与导航高亮
   - 图片灯箱
   - 返回顶部
   - 页面统计
   - 对比表格生成
   ============================================================ */

'use strict';

// ========== 案例数据 ==========
// 每个案例包含完整字段，数据来源于实际调研
const casesData = [
    {
        id: 'case-01',
        name: '河南省档案馆《中福公司档案史料展》云虚拟展厅',
        org: '河南省档案馆',
        url: 'https://www.hada.gov.cn/wszt/',
        format: '网页叙事型',
        formatIcon: '🌐',
        type: '档案馆',
        typeIcon: '📁',
        difficulty: 1,
        recommend: 78,
        summary: '河南省档案馆以馆藏中福公司档案为基础，运用数字化手段打造的云虚拟展厅。展览通过网页叙事的方式，将中福公司从成立到发展的历史脉络以多媒体的形式生动呈现，融合了档案原件影像、历史照片、文献摘录与文字解说，是地方档案馆数字化转型的典型代表。',
        features: [
            '以网页为核心载体，兼容PC与移动端，无需安装插件',
            '档案高清扫描图像与文字解读同步呈现，信息密度合理',
            '时间线叙事结构清晰，章节导航便于非专业观众理解',
            '配色沉稳典雅，符合档案历史文化调性'
        ],
        worthLearning: [
            '地方档案馆轻量化数字展览的可复制方案',
            '以内容叙事为核心、技术为辅助的设计理念',
            '网页型展览的渐进式加载策略，兼顾体验与性能',
            '档案数字化呈现的版权保护与清晰度平衡'
        ],
        scenes: ['地方档案馆', '专题档案展览', '历史文化教育'],
        screenshots: [
            { src: 'images/case01-01.jpg', alt: '中福公司档案史料展 - 展厅首页' },
            { src: 'images/case01-02.jpg', alt: '中福公司档案史料展 - 历史时间线' },
            { src: 'images/case01-03.jpg', alt: '中福公司档案史料展 - 档案原件展示' }
        ]
    },
    {
        id: 'case-02',
        name: '中国国家博物馆线上展览',
        org: '中国国家博物馆',
        url: 'https://www.chnmuseum.cn',
        format: '网页叙事型 + 3D展示',
        formatIcon: '🌐',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 3,
        recommend: 92,
        summary: '中国国家博物馆是国内博物馆数字化建设的领跑者，推出了一批高质量的线上展览。其数字展厅涵盖常设展与临时展，结合高清影像、三维文物展示与专业讲解，在网页端实现沉浸式观展。国博线上展览代表了国内博物馆数字化的最高水平之一，内容丰富、技术成熟、更新频率高。',
        features: [
            '支持文物3D旋转查看，精度达到0.1mm级',
            '专题展览内容丰富，涵盖古代中国到近现代',
            '配有专业语音导览，多语种支持',
            '网站架构健壮，高并发下访问流畅'
        ],
        worthLearning: [
            '大型博物馆线上展览的系统化建设思路',
            '3D文物展示与网页加载性能的平衡方案',
            '专业内容与大众传播的兼顾策略',
            '多语种国际化呈现的技术架构'
        ],
        scenes: ['大型博物馆', '文物3D展示', '国际文化交流'],
        screenshots: [
            { src: 'images/case02-01.jpg', alt: '中国国家博物馆线上展览 - 首页' },
            { src: 'images/case02-02.jpg', alt: '中国国家博物馆线上展览 - 文物3D展示' },
            { src: 'images/case02-03.jpg', alt: '中国国家博物馆线上展览 - 专题展' }
        ]
    },
    {
        id: 'case-03',
        name: '中国共产党历史展览馆数字展厅',
        org: '中国共产党历史展览馆',
        url: 'https://www.zgdszlg.cn',
        format: 'VR全景 + 多媒体',
        formatIcon: '🥽',
        type: '展览馆',
        typeIcon: '🏛️',
        difficulty: 3,
        recommend: 95,
        summary: '中国共产党历史展览馆数字展厅以高精度VR全景技术为核心，对实体展馆进行了1:1数字化还原。展览通过全景漫游、热点交互、视频嵌入等多媒体手段，系统地展示了中国共产党百年奋斗历程。技术水准与内容深度均属国内顶尖，是红色文化数字化传播的标杆项目。',
        features: [
            '实景1:1高精度VR还原，画质细腻',
            '多楼层无缝漫游，空间导航直观',
            '嵌入珍贵历史影像与文献资料的热点交互',
            '配套移动端APP，支持跨平台访问'
        ],
        worthLearning: [
            '大型实体展馆的完整数字化复制技术方案',
            'VR场景中多媒体热点的设计规范',
            '红色历史文化与现代数字技术的融合方式',
            '超高精度全景图的加载优化策略'
        ],
        scenes: ['大型展馆数字化', '红色教育', '1:1实景还原'],
        screenshots: [
            { src: 'images/case03-01.svg', alt: '党史展览馆数字展厅 - 入口大厅' },
            { src: 'images/case03-02.svg', alt: '党史展览馆数字展厅 - VR全景' },
            { src: 'images/case03-03.svg', alt: '党史展览馆数字展厅 - 多媒体热点' }
        ]
    },
    {
        id: 'case-04',
        name: '故宫博物院数字文物库',
        org: '故宫博物院',
        url: 'https://www.dpm.org.cn',
        format: '高清影像 + 数据库',
        formatIcon: '🖼️',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 3,
        recommend: 96,
        summary: '故宫博物院数字文物库是国内规模最大的博物馆藏品数字化项目之一，收录了超过186万件（套）馆藏文物的高清影像资料。平台以数据库检索为核心，结合分类浏览、关键词搜索、高清放大等功能，为研究者与公众提供了前所未有的文物数字访问体验。其数据标准化程度在国内文博领域处于领先地位。',
        features: [
            '186万+件藏品在线，覆盖故宫全部品类',
            '支持按品类、年代、材质等多维度检索',
            '高清大图支持像素级放大，细节清晰',
            '开放的元数据标准，便于学术引用'
        ],
        worthLearning: [
            '超大规模藏品数据库的架构设计',
            '文物元数据标准化与跨平台互操作',
            '面向研究者的专业检索与公众浏览的平衡',
            '文化遗产数字化的国际标准接轨'
        ],
        scenes: ['藏品数据库', '学术研究', '文化遗产保护'],
        screenshots: [
            { src: 'images/case04-01.jpg', alt: '故宫数字文物库 - 首页' },
            { src: 'images/case04-02.jpg', alt: '故宫数字文物库 - 藏品检索' },
            { src: 'images/case04-03.jpg', alt: '故宫数字文物库 - 高清大图' }
        ]
    },
    {
        id: 'case-05',
        name: '南京博物院VR展厅',
        org: '南京博物院',
        url: 'https://www.njmuseum.com',
        format: 'VR全景',
        formatIcon: '🥽',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 2,
        recommend: 85,
        summary: '南京博物院作为中国三大博物馆之一，较早开展了VR虚拟展厅建设。其VR展厅涵盖历史馆、艺术馆、特展馆等多个场馆空间，通过720°全景技术让观众在线漫游。展览配合语音讲解与展品信息弹窗，在保持浏览流畅度的同时提供了丰富的交互内容，是省级博物馆VR化的优秀范例。',
        features: [
            '720°全景覆盖多栋展馆建筑',
            '场景切换流畅，过渡动画自然',
            '展品热点信息详实，配有音频解说',
            '支持VR头显设备，增强沉浸感'
        ],
        worthLearning: [
            '多场馆VR内容的统一导航与组织',
            'VR场景音效与空间氛围的设计',
            '省级博物馆VR化的成本控制与分阶段实施',
            '线上VR与线下参观的互补设计'
        ],
        scenes: ['省级博物馆', 'VR全景', '线上线下融合'],
        screenshots: [
            { src: 'images/case05-01.jpg', alt: '南京博物院VR展厅 - 大厅' },
            { src: 'images/case05-02.jpg', alt: '南京博物院VR展厅 - 展厅内部' },
            { src: 'images/case05-03.jpg', alt: '南京博物院VR展厅 - 展品热点' }
        ]
    },
    {
        id: 'case-06',
        name: '中国大运河博物馆VR展厅',
        org: '中国大运河博物馆（扬州）',
        url: 'https://canalmuseum.net',
        format: 'VR全景 + 多媒体',
        formatIcon: '🥽',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 3,
        recommend: 88,
        summary: '中国大运河博物馆位于扬州，是一座以大运河文化为主题的现代化博物馆。其VR线上展厅依托实体场馆丰富的展陈资源，运用全景拍摄与多媒体融合技术，打造了沉浸式的大运河文化体验。展览以"运河文化"为主线，在VR空间中融入了大量动态元素与交互设计，是主题性博物馆数字化的创新实践。',
        features: [
            '主题化的VR场景设计，融入运河元素视觉风格',
            '动态水景与声效模拟，增强沉浸感',
            '多点触发热点详细解读运河文化',
            '线上预约与VR导览系统联动'
        ],
        worthLearning: [
            '主题博物馆VR展示的沉浸式氛围营造',
            '动态元素在全景场景中的技术实现',
            '文化主题与数字展示的深度融合',
            '新建博物馆同步规划数字展厅的经验'
        ],
        scenes: ['主题博物馆', '沉浸式体验', '文化IP数字化'],
        screenshots: [
            { src: 'images/case06-01.jpg', alt: '大运河博物馆VR展厅 - 入口' },
            { src: 'images/case06-02.jpg', alt: '大运河博物馆VR展厅 - 展厅内部' },
            { src: 'images/case06-03.jpg', alt: '大运河博物馆VR展厅 - 多媒体互动' }
        ]
    },
    {
        id: 'case-07',
        name: '上海博物馆数字展览',
        org: '上海博物馆',
        url: 'https://www.shanghaimuseum.net',
        format: '网页叙事型 + 3D展示',
        formatIcon: '🌐',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 3,
        recommend: 90,
        summary: '上海博物馆是国内最早开展数字化的博物馆之一，其数字展览平台整合了常设展与精品特展的线上内容。不同于纯VR方案，上博更注重网页端的叙事体验，结合文物高清影像、三维模型与专业学术文本，以图文并茂的方式呈现展览内容。设计风格典雅简约，体现了海派文化的精致品味。',
        features: [
            '典雅的视觉设计，与上博品牌调性高度统一',
            '文物高清影像与专业学术文本的紧密结合',
            '支持文物三维模型在线查看与交互',
            '内容丰富，定期更新特展线上版'
        ],
        worthLearning: [
            '博物馆品牌调性与数字平台设计的一致性原则',
            '文物学术内容的大众化呈现方法',
            '网页端与移动端的差异化设计策略',
            '高端文化机构的数字设计审美标准'
        ],
        scenes: ['大型博物馆', '学术型展览', '品牌数字体验'],
        screenshots: [
            { src: 'images/case07-01.jpg', alt: '上海博物馆数字展览 - 首页' },
            { src: 'images/case07-02.jpg', alt: '上海博物馆数字展览 - 文物展示' },
            { src: 'images/case07-03.jpg', alt: '上海博物馆数字展览 - 3D文物' }
        ]
    },
    {
        id: 'case-08',
        name: '陕西历史博物馆VR展厅',
        org: '陕西历史博物馆',
        url: 'https://www.sxhm.com',
        format: 'VR全景',
        formatIcon: '🥽',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 2,
        recommend: 86,
        summary: '陕西历史博物馆拥有丰富的周秦汉唐文物收藏，其VR展厅以实景拍摄为基础，对常设展厅进行了720°全景数字化。展览涵盖从史前到唐代的多个展厅空间，结合重点文物的高清图片热点，为观众提供了便捷的远程参观通道。作为西北地区文博数字化的代表，其VR系统稳定可靠、操作易上手。',
        features: [
            '覆盖常设展厅的完整VR导览',
            '重点文物配备高清大图热点',
            '简洁直观的场景导航控件',
            '加载速度快，适配多种网络环境'
        ],
        worthLearning: [
            '文物大省的VR展厅标准化建设路径',
            '兼顾文物丰富度与VR浏览体验的平衡',
            '低带宽环境下的VR加载优化',
            '老年观众友好型VR界面设计'
        ],
        scenes: ['省级博物馆', '历史文化', '远程参观'],
        screenshots: [
            { src: 'images/case08-01.jpg', alt: '陕西历史博物馆VR展厅 - 大厅' },
            { src: 'images/case08-02.jpg', alt: '陕西历史博物馆VR展厅 - 展厅内部' },
            { src: 'images/case08-03.jpg', alt: '陕西历史博物馆VR展厅 - 文物热点' }
        ]
    },
    {
        id: 'case-09',
        name: '湖南博物院数字展览',
        org: '湖南博物院',
        url: 'https://www.hnmuseum.com',
        format: 'VR全景 + 网页叙事',
        formatIcon: '🥽',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 3,
        recommend: 89,
        summary: '湖南博物院（原湖南省博物馆）以马王堆汉墓文物为核心资源，建设了高水平的数字展览体系。其线上展厅融合了VR全景与网页叙事两种形式，既提供身临其境的全景漫游体验，也包含结构清晰的专题网页展览。对马王堆出土文物的数字化呈现尤为突出，是专题文物数字展示的行业标杆。',
        features: [
            'VR全景与网页叙事双模式灵活切换',
            '马王堆文物专题数字化程度极高',
            'VR场景中嵌入动画还原古代场景',
            '科普性与学术性兼顾的内容编排'
        ],
        worthLearning: [
            '重磅文物IP的全方位数字化策略',
            'VR与网页两种形式的内容互补设计',
            '考古发现在数字展览中的叙事重构',
            '动画还原在历史类展览中的应用'
        ],
        scenes: ['专题文物展示', '考古成果数字化', '科普教育'],
        screenshots: [
            { src: 'images/case09-01.jpg', alt: '湖南博物院数字展览 - 首页' },
            { src: 'images/case09-02.jpg', alt: '湖南博物院数字展览 - 马王堆专题' },
            { src: 'images/case09-03.jpg', alt: '湖南博物院数字展览 - VR全景' }
        ]
    },
    {
        id: 'case-10',
        name: '广东省博物馆VR展厅',
        org: '广东省博物馆',
        url: 'https://www.gdmuseum.com',
        format: 'VR全景',
        formatIcon: '🥽',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 2,
        recommend: 82,
        summary: '广东省博物院立足岭南文化，建设了涵盖历史馆、自然馆、艺术馆等区域的VR线上展厅。其VR系统以全景摄影为基础，配合展品信息弹窗与语音导览，为粤港澳大湾区观众提供了便捷的在线观展服务。展览注重岭南地方特色与多元文化的呈现，在展示形式上追求简洁高效。',
        features: [
            '多馆区VR内容统一管理',
            '岭南文化特色鲜明的内容策划',
            '支持粤语等多语言语音导览',
            '线上展览定期与线下临展同步更新'
        ],
        worthLearning: [
            '地方文化特色的数字化呈现方法',
            '多语言（含方言）导览的多版本管理',
            '线上展览与线下临展联动的运营模式',
            '大湾区文化机构的数字协作模式'
        ],
        scenes: ['地方博物馆', '区域文化传播', '线上线下联动'],
        screenshots: [
            { src: 'images/case10-01.svg', alt: '广东省博物院VR展厅 - 大厅' },
            { src: 'images/case10-02.svg', alt: '广东省博物院VR展厅 - 展厅内部' },
            { src: 'images/case10-03.svg', alt: '广东省博物院VR展厅 - 展品热点' }
        ]
    },
    {
        id: 'case-11',
        name: '中国人民革命军事博物馆数字展厅',
        org: '中国人民革命军事博物馆',
        url: 'https://www.jb.mil.cn',
        format: 'VR全景 + 多媒体',
        formatIcon: '🥽',
        type: '纪念馆',
        typeIcon: '🎖️',
        difficulty: 3,
        recommend: 93,
        summary: '中国人民革命军事博物馆（军博）数字展厅以武器装备展示与军事历史教育为核心，运用VR全景、三维建模与互动多媒体技术，打造了高度沉浸的军事主题数字展览。展览涵盖了从古代军事到现代国防的丰富内容，特别在大型装备（飞机、坦克、舰船）的数字化呈现上有突出表现，是军事类博物馆数字化的标杆。',
        features: [
            '大型武器装备的1:1三维建模与交互展示',
            '军事历史场景的沉浸式VR还原',
            '兵器互动拆解与结构透视功能',
            '国防教育内容的严肃性与互动性的平衡'
        ],
        worthLearning: [
            '大型实物展品的三维数字化方案',
            '军事主题数字展览的严肃性与互动性平衡',
            '大型装备的交互式拆解展示技术',
            '国防教育内容的数字化叙事设计'
        ],
        scenes: ['军事博物馆', '大型装备展示', '国防教育'],
        screenshots: [
            { src: 'images/case11-01.svg', alt: '军博数字展厅 - 大厅' },
            { src: 'images/case11-02.svg', alt: '军博数字展厅 - 装备展示' },
            { src: 'images/case11-03.svg', alt: '军博数字展厅 - 多媒体互动' }
        ]
    },
    {
        id: 'case-12',
        name: '中国国家版本馆数字展览',
        org: '中国国家版本馆',
        url: 'https://www.cnapc.cn',
        format: '网页叙事型 + 高清影像',
        formatIcon: '🌐',
        type: '档案馆',
        typeIcon: '📁',
        difficulty: 3,
        recommend: 87,
        summary: '中国国家版本馆（文瀚阁）是国家版本资源总库，其数字展览以中华版本资源为核心，通过网页叙事与高清影像相结合的方式，展示了从甲骨文到数字时代的版本演变。展览设计庄重大气，内容编排学理性强，是国家重大文化工程数字化传播的典范。其"一总三分"的馆藏体系也在数字平台上得到了清晰呈现。',
        features: [
            '以版本学为核心的专题内容组织',
            '高清影像与学术文本紧密结合',
            '"一总三分"馆藏体系的数字化呈现',
            '涵盖从古籍到数字版本的宏大叙事'
        ],
        worthLearning: [
            '国家重大文化工程的数字传播策略',
            '版本学专业内容的大众化叙事方式',
            '多场馆（总馆+分馆）数字内容的统一架构',
            '中华文明延续性的数字叙事设计'
        ],
        scenes: ['国家文化工程', '版本资源', '文化传承'],
        screenshots: [
            { src: 'images/case12-01.jpg', alt: '国家版本馆数字展览 - 首页' },
            { src: 'images/case12-02.jpg', alt: '国家版本馆数字展览 - 版本展示' },
            { src: 'images/case12-03.jpg', alt: '国家版本馆数字展览 - 珍品高清' }
        ]
    },
    {
        id: 'case-13',
        name: '数字敦煌',
        org: '敦煌研究院',
        url: 'https://www.e-dunhuang.com',
        format: 'VR全景 + 3D + 高清影像',
        formatIcon: '🥽',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 3,
        recommend: 98,
        summary: '"数字敦煌"是敦煌研究院主导的世界级文化遗产数字化保护项目，以莫高窟石窟为核心，综合运用VR全景、三维重建、高清摄影和计算机图形学技术，对敦煌石窟进行了全面的数字化记录与呈现。项目不仅实现了洞窟的虚拟漫游，还建立了详尽的壁画与彩塑数据库，是世界文化遗产数字化的典范之作，代表了国内文博数字化的最高水准。',
        features: [
            '全球领先的石窟三维数字化重建精度',
            'VR漫游与超高分辨率壁画浏览无缝切换',
            '完善的学术数据库，支持多维度检索',
            '中英文双语，面向全球开放访问'
        ],
        worthLearning: [
            '世界文化遗产数字化的中国方案与标准',
            '超高精度影像采集与网络传输的平衡',
            '数字化成果的学术研究价值最大化',
            '文物保护与数字开放的长期可持续发展模式'
        ],
        scenes: ['世界遗产数字化', '石窟寺保护', '国际学术交流'],
        screenshots: [
            { src: 'images/case13-01.jpg', alt: '数字敦煌 - 首页' },
            { src: 'images/case13-02.jpg', alt: '数字敦煌 - 洞窟VR全景' },
            { src: 'images/case13-03.jpg', alt: '数字敦煌 - 壁画高清' }
        ]
    },
    {
        id: 'case-14',
        name: '中国航天博物馆数字展厅',
        org: '中国航天博物馆',
        url: 'https://www.casc-spacemuseum.com',
        format: 'VR全景 + 3D建模',
        formatIcon: '🥽',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 3,
        recommend: 84,
        summary: '中国航天博物馆数字展厅以中国航天事业发展历程为核心，运用VR全景与三维建模技术，展示了运载火箭、卫星、载人航天器等珍贵实物与模型。数字展厅突破了实体场馆的空间限制，不仅展示了实体展品，还通过三维动画模拟了火箭发射、卫星在轨运行等动态过程，是科技类博物馆数字化的特色实践。',
        features: [
            '航天器三维模型可在VR场景中多角度查看',
            '动画模拟火箭发射、卫星运行等动态过程',
            '航天科普内容丰富，适合青少年教育',
            '线上线下联动，定期更新最新航天成果'
        ],
        worthLearning: [
            '科技类博物馆的动态过程数字化呈现',
            '三维动画在科普数字展览中的应用',
            '航天主题展览的青少年受众设计',
            '科技成果的快速数字化更新机制'
        ],
        scenes: ['科技博物馆', '科普教育', '青少年受众'],
        screenshots: [
            { src: 'images/case14-01.jpg', alt: '航天博物馆数字展厅 - 大厅' },
            { src: 'images/case14-02.jpg', alt: '航天博物馆数字展厅 - 火箭模型' },
            { src: 'images/case14-03.jpg', alt: '航天博物馆数字展厅 - 航天器展示' }
        ]
    },
    {
        id: 'case-15',
        name: '侵华日军南京大屠杀遇难同胞纪念馆数字展览',
        org: '侵华日军南京大屠杀遇难同胞纪念馆',
        url: 'https://www.19371213.com.cn',
        format: '网页叙事型 + 多媒体',
        formatIcon: '🌐',
        type: '纪念馆',
        typeIcon: '🎖️',
        difficulty: 3,
        recommend: 91,
        summary: '侵华日军南京大屠杀遇难同胞纪念馆数字展览以严肃、庄重的方式，通过网页叙事与多媒体相结合，在线呈现了南京大屠杀的历史真相。展览巧妙地将史料、证言、影像等元素以数字化方式组织，在尊重历史、缅怀逝者的原则下，实现了历史教育的广泛传播。其设计克制而有力，是纪念类场馆数字化的杰出范例。',
        features: [
            '庄重克制的视觉设计，契合纪念主题',
            '史料、证言、影像的多维叙事结构',
            '幸存者证言视频与文字档案的有机结合',
            '多语种支持，面向国际传播历史真相'
        ],
        worthLearning: [
            '纪念类场馆数字化的情感设计原则',
            '严肃历史题材的数字化叙事伦理',
            '多语种历史内容的国际化传播策略',
            '史料数字化与真实性验证的技术方案'
        ],
        scenes: ['纪念类场馆', '历史教育', '国际传播'],
        screenshots: [
            { src: 'images/case15-01.jpg', alt: '南京大屠杀纪念馆数字展览 - 首页' },
            { src: 'images/case15-02.jpg', alt: '南京大屠杀纪念馆数字展览 - 史料展示' },
            { src: 'images/case15-03.jpg', alt: '南京大屠杀纪念馆数字展览 - 多媒体叙事' }
        ]
    }
];

// ========== DOM 引用缓存 ==========
let DOM = {};

// ========== 应用状态 ==========
const state = {
    activeFilters: {
        type: 'all',
        format: 'all',
        difficulty: 'all'
    },
    searchQuery: '',
    darkMode: false,
    currentLightboxIndex: -1,
    currentLightboxCase: null
};

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    cacheDOM();
    renderAllCases();
    renderStats();
    renderComparisonTable();
    initSidebar();
    initSearch();
    initFilters();
    initDarkMode();
    initScrollEffects();
    initBackToTop();
    initLightbox();
    initMobileNav();
    hideLoader();
});

// ========== DOM 缓存 ==========
function cacheDOM() {
    DOM.loader = document.getElementById('loader');
    DOM.header = document.getElementById('header');
    DOM.sidebar = document.getElementById('sidebar');
    DOM.sidebarNav = document.getElementById('sidebarNav');
    DOM.sidebarStats = document.getElementById('sidebarStats');
    DOM.content = document.getElementById('content');
    DOM.casesGrid = document.getElementById('casesGrid');
    DOM.noResults = document.getElementById('noResults');
    DOM.searchInput = document.getElementById('searchInput');
    DOM.filterType = document.getElementById('filterType');
    DOM.filterFormat = document.getElementById('filterFormat');
    DOM.filterDifficulty = document.getElementById('filterDifficulty');
    DOM.themeToggle = document.getElementById('themeToggle');
    DOM.backToTop = document.getElementById('backToTop');
    DOM.lightbox = document.getElementById('lightbox');
    DOM.lightboxImg = document.getElementById('lightboxImg');
    DOM.lightboxCounter = document.getElementById('lightboxCounter');
    DOM.comparisonBody = document.getElementById('comparisonBody');
    DOM.statsTotal = document.getElementById('statTotal');
    DOM.statsVR = document.getElementById('statVR');
    DOM.statsWeb = document.getElementById('statWeb');
    DOM.statsArchive = document.getElementById('statArchive');
    DOM.statsMuseum = document.getElementById('statMuseum');
    DOM.mobileNavToggle = document.getElementById('mobileNavToggle');
    DOM.sidebarOverlay = document.getElementById('sidebarOverlay');
    DOM.caseCount = document.getElementById('caseCount');
}

// ========== 加载动画 ==========
function hideLoader() {
    setTimeout(() => {
        if (DOM.loader) {
            DOM.loader.classList.add('hidden');
            // 加载完成后移除DOM
            setTimeout(() => {
                if (DOM.loader.parentNode) {
                    DOM.loader.parentNode.removeChild(DOM.loader);
                }
            }, 600);
        }
    }, 600);
}

// ========== 统计信息 ==========
function renderStats() {
    const total = casesData.length;
    const vrCount = casesData.filter(c => c.format.includes('VR')).length;
    const webCount = casesData.filter(c => c.format.includes('网页叙事')).length;
    const archiveCount = casesData.filter(c => c.type === '档案馆').length;
    const museumCount = casesData.filter(c => c.type === '博物馆').length;

    // 顶部统计卡片
    if (DOM.statsTotal) {
        animateNumber(DOM.statsTotal, total);
    }
    if (DOM.statsVR) {
        animateNumber(DOM.statsVR, vrCount);
    }
    if (DOM.statsWeb) {
        animateNumber(DOM.statsWeb, webCount);
    }
    if (DOM.statsArchive) {
        animateNumber(DOM.statsArchive, archiveCount);
    }
    if (DOM.statsMuseum) {
        animateNumber(DOM.statsMuseum, museumCount);
    }

    // 侧边栏统计
    if (DOM.sidebarStats) {
        DOM.sidebarStats.innerHTML = `
            <div class="sidebar__stat-row"><span>案例总数</span><span>${total}</span></div>
            <div class="sidebar__stat-row"><span>VR展厅</span><span>${vrCount}</span></div>
            <div class="sidebar__stat-row"><span>网页叙事型</span><span>${webCount}</span></div>
            <div class="sidebar__stat-row"><span>档案馆</span><span>${archiveCount}</span></div>
            <div class="sidebar__stat-row"><span>博物馆</span><span>${museumCount}</span></div>
        `;
    }

    // 底部统计
    if (DOM.caseCount) {
        DOM.caseCount.textContent = total;
    }
}

// ========== 数字滚动动画 ==========
function animateNumber(el, target) {
    const duration = 1200;
    const start = 0;
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out-expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        el.textContent = Math.floor(eased * target);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// ========== 筛选功能 ==========
function initFilters() {
    // 机构类型筛选
    if (DOM.filterType) {
        DOM.filterType.querySelectorAll('.filter-bar__tag').forEach(tag => {
            tag.addEventListener('click', () => {
                setActiveTag(DOM.filterType, tag);
                state.activeFilters.type = tag.dataset.filter;
                applyAllFilters();
            });
        });
    }

    // 展示形式筛选
    if (DOM.filterFormat) {
        DOM.filterFormat.querySelectorAll('.filter-bar__tag').forEach(tag => {
            tag.addEventListener('click', () => {
                setActiveTag(DOM.filterFormat, tag);
                state.activeFilters.format = tag.dataset.filter;
                applyAllFilters();
            });
        });
    }

    // 制作难度筛选
    if (DOM.filterDifficulty) {
        DOM.filterDifficulty.querySelectorAll('.filter-bar__tag').forEach(tag => {
            tag.addEventListener('click', () => {
                setActiveTag(DOM.filterDifficulty, tag);
                state.activeFilters.difficulty = tag.dataset.filter;
                applyAllFilters();
            });
        });
    }
}

function setActiveTag(container, activeTag) {
    container.querySelectorAll('.filter-bar__tag').forEach(t => t.classList.remove('active'));
    activeTag.classList.add('active');
}

// ========== 搜索功能 ==========
function initSearch() {
    if (DOM.searchInput) {
        DOM.searchInput.addEventListener('input', () => {
            state.searchQuery = DOM.searchInput.value.trim().toLowerCase();
            applyAllFilters();
        });
    }
}

// ========== 综合过滤 ==========
function applyAllFilters() {
    let filtered = [...casesData];

    // 机构类型过滤
    if (state.activeFilters.type !== 'all') {
        filtered = filtered.filter(c => c.type === state.activeFilters.type);
    }

    // 展示形式过滤
    if (state.activeFilters.format !== 'all') {
        filtered = filtered.filter(c => {
            if (state.activeFilters.format === 'VR') {
                return c.format.includes('VR');
            }
            if (state.activeFilters.format === 'web') {
                return c.format.includes('网页叙事');
            }
            if (state.activeFilters.format === '3D') {
                return c.format.includes('3D');
            }
            return true;
        });
    }

    // 难度过滤
    if (state.activeFilters.difficulty !== 'all') {
        const diffLevel = parseInt(state.activeFilters.difficulty);
        filtered = filtered.filter(c => c.difficulty === diffLevel);
    }

    // 搜索过滤
    if (state.searchQuery) {
        filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(state.searchQuery) ||
            c.org.toLowerCase().includes(state.searchQuery) ||
            c.summary.toLowerCase().includes(state.searchQuery) ||
            c.features.some(f => f.toLowerCase().includes(state.searchQuery)) ||
            c.scenes.some(s => s.toLowerCase().includes(state.searchQuery))
        );
    }

    renderFilteredCases(filtered);
    updateSidebarNav(filtered);
}

// ========== 渲染案例卡片 ==========
function renderAllCases() {
    renderFilteredCases(casesData);
}

function renderFilteredCases(cases) {
    if (!DOM.casesGrid) return;

    if (cases.length === 0) {
        DOM.casesGrid.innerHTML = '';
        if (DOM.noResults) DOM.noResults.classList.add('visible');
        return;
    }

    if (DOM.noResults) DOM.noResults.classList.remove('visible');

    DOM.casesGrid.innerHTML = cases.map((c, i) => buildCaseCard(c, i)).join('');

    // 重新绑定截图点击事件
    bindScreenshotClicks();
}

function buildCaseCard(c, index) {
    const difficultyStars = buildDifficultyStars(c.difficulty);
    const recommendBar = buildRecommendBar(c.recommend);
    const sceneTags = c.scenes.map(s => `<span class="scene-tag">${s}</span>`).join('');
    const screenshots = c.screenshots.map((ss, i) => `
        <div class="screenshot" data-case-id="${c.id}" data-index="${i}"
             onclick="openLightbox('${c.id}', ${i})">
            <img src="${ss.src}" alt="${ss.alt}" loading="lazy"
                 onerror="this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-tertiary);font-size:0.75rem\\'>📷 ${ss.alt}</div>'">
            <div class="screenshot__overlay">🔍</div>
        </div>
    `).join('');

    const featuresHtml = c.features.map(f => `<li>• ${f}</li>`).join('');
    const worthLearningHtml = c.worthLearning.map(w => `<li>• ${w}</li>`).join('');

    return `
        <article class="case-card animate-on-scroll" id="${c.id}">
            <div class="case-card__header">
                <div>
                    <div class="case-card__number">案例 ${String(index + 1).padStart(2, '0')}</div>
                    <h2 class="case-card__name">${c.name}</h2>
                    <p class="case-card__org">
                        ${c.typeIcon} ${c.org}
                        ${c.url ? ` · <a href="${c.url}" target="_blank" rel="noopener noreferrer">🌐 官方网站</a>` : ''}
                    </p>
                </div>
                <div class="case-card__meta">
                    <span class="case-card__badge case-card__badge--format">${c.formatIcon} ${c.format}</span>
                    <span class="case-card__badge case-card__badge--type">${c.typeIcon} ${c.type}</span>
                </div>
            </div>

            <div class="case-card__body">
                <div>
                    <p class="case-card__desc">${c.summary}</p>
                    ${sceneTags ? `<div class="scene-tags">${sceneTags}</div>` : ''}
                </div>
                <div class="case-card__info-list">
                    <div class="case-card__info-item">
                        <span class="case-card__info-label">制作难度</span>
                        <span class="difficulty" data-level="${c.difficulty}">${difficultyStars}</span>
                    </div>
                    <div class="case-card__info-item">
                        <span class="case-card__info-label">推荐指数</span>
                        ${recommendBar}
                    </div>
                    <div class="case-card__info-item">
                        <span class="case-card__info-label">特色分析</span>
                        <span class="case-card__info-value"><ul style="margin:0;padding-left:0;list-style:none">${featuresHtml}</ul></span>
                    </div>
                    <div class="case-card__info-item">
                        <span class="case-card__info-label">值得借鉴</span>
                        <span class="case-card__info-value"><ul style="margin:0;padding-left:0;list-style:none">${worthLearningHtml}</ul></span>
                    </div>
                </div>
            </div>

            <div class="case-card__screenshots">
                ${screenshots}
            </div>
        </article>
    `;
}

// ========== 难度星级（3级） ==========
function buildDifficultyStars(level) {
    const labels = ['', '简单', '中等', '复杂'];
    const colors = ['', 'var(--diff-1)', 'var(--diff-3)', 'var(--diff-5)'];
    let stars = '';
    for (let i = 1; i <= 3; i++) {
        stars += `<span class="difficulty__star ${i <= level ? 'filled' : ''}" style="${i <= level ? 'color:' + colors[level] : ''}">★</span>`;
    }
    return `<span class="difficulty__label">${labels[level]}</span> ${stars}`;
}

// ========== 推荐指数条 ==========
function buildRecommendBar(score) {
    return `
        <span class="recommend">
            <span class="recommend__bar">
                <span class="recommend__bar-fill" style="width:${score}%"></span>
            </span>
            <span class="recommend__score">${score}</span>
        </span>
    `;
}

// ========== 侧边栏导航 ==========
function initSidebar() {
    buildSidebarNav(casesData);
}

function buildSidebarNav(cases) {
    if (!DOM.sidebarNav) return;

    DOM.sidebarNav.innerHTML = cases.map((c, i) => `
        <a class="sidebar__nav-item" href="#${c.id}" data-case-id="${c.id}">
            <span class="sidebar__nav-num">${i + 1}</span>
            <span>${c.name.length > 18 ? c.name.substring(0, 16) + '…' : c.name}</span>
        </a>
    `).join('');

    // 绑定点击事件
    DOM.sidebarNav.querySelectorAll('.sidebar__nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.dataset.caseId;
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // 移动端关闭侧栏
            closeMobileSidebar();
        });
    });
}

function updateSidebarNav(visibleCases) {
    const visibleIds = new Set(visibleCases.map(c => c.id));

    if (!DOM.sidebarNav) return;

    DOM.sidebarNav.querySelectorAll('.sidebar__nav-item').forEach(item => {
        const caseId = item.dataset.caseId;
        if (visibleIds.has(caseId)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// ========== 滚动效果 ==========
function initScrollEffects() {
    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                // 头部显隐
                handleHeaderVisibility(scrollY, lastScrollY);

                // 导航高亮
                highlightNavItem();

                // 滚动动画
                triggerScrollAnimations();

                // 返回顶部按钮
                handleBackToTop(scrollY);

                lastScrollY = scrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    // 初始触发一次滚动动画
    setTimeout(triggerScrollAnimations, 200);
}

function handleHeaderVisibility(scrollY, lastScrollY) {
    if (!DOM.header) return;

    if (scrollY > 100 && scrollY > lastScrollY) {
        DOM.header.classList.add('header--hidden');
    } else if (scrollY < lastScrollY || scrollY < 50) {
        DOM.header.classList.remove('header--hidden');
    }
}

function highlightNavItem() {
    if (!DOM.sidebarNav) return;

    const navItems = DOM.sidebarNav.querySelectorAll('.sidebar__nav-item');
    const caseCards = document.querySelectorAll('.case-card');

    let currentId = null;
    caseCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= 200) {
            currentId = card.id;
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.caseId === currentId) {
            item.classList.add('active');
        }
    });
}

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 80) {
            el.classList.add('animated');
        }
    });
}

// ========== 返回顶部 ==========
function initBackToTop() {
    if (!DOM.backToTop) return;

    DOM.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function handleBackToTop(scrollY) {
    if (!DOM.backToTop) return;

    if (scrollY > 600) {
        DOM.backToTop.classList.add('visible');
    } else {
        DOM.backToTop.classList.remove('visible');
    }
}

// ========== 深色模式 ==========
function initDarkMode() {
    // 检查系统偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // 检查本地存储
    const savedTheme = localStorage.getItem('vr-exhibition-theme');

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        state.darkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (DOM.themeToggle) {
        updateThemeIcon();
        DOM.themeToggle.addEventListener('click', toggleDarkMode);
    }

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('vr-exhibition-theme')) {
            state.darkMode = e.matches;
            document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
            updateThemeIcon();
        }
    });
}

function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    localStorage.setItem('vr-exhibition-theme', state.darkMode ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    if (DOM.themeToggle) {
        DOM.themeToggle.textContent = state.darkMode ? '☀️' : '🌙';
    }
}

// ========== 图片灯箱 ==========
function initLightbox() {
    if (!DOM.lightbox) return;

    DOM.lightbox.addEventListener('click', (e) => {
        if (e.target === DOM.lightbox || e.target.classList.contains('lightbox__close')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!DOM.lightbox.classList.contains('open')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateLightbox(1);
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
    });
}

function openLightbox(caseId, index) {
    const caseData = casesData.find(c => c.id === caseId);
    if (!caseData) return;

    state.currentLightboxCase = caseData;
    state.currentLightboxIndex = index;

    if (DOM.lightboxImg) {
        DOM.lightboxImg.src = caseData.screenshots[index].src;
        DOM.lightboxImg.alt = caseData.screenshots[index].alt;
    }

    if (DOM.lightboxCounter) {
        DOM.lightboxCounter.textContent = `${index + 1} / ${caseData.screenshots.length}`;
    }

    if (DOM.lightbox) {
        DOM.lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    if (DOM.lightbox) {
        DOM.lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }
    state.currentLightboxCase = null;
    state.currentLightboxIndex = -1;
}

function navigateLightbox(direction) {
    if (!state.currentLightboxCase) return;

    const screenshots = state.currentLightboxCase.screenshots;
    let newIndex = state.currentLightboxIndex + direction;

    if (newIndex < 0) newIndex = screenshots.length - 1;
    if (newIndex >= screenshots.length) newIndex = 0;

    state.currentLightboxIndex = newIndex;

    if (DOM.lightboxImg) {
        DOM.lightboxImg.src = screenshots[newIndex].src;
        DOM.lightboxImg.alt = screenshots[newIndex].alt;
    }

    if (DOM.lightboxCounter) {
        DOM.lightboxCounter.textContent = `${newIndex + 1} / ${screenshots.length}`;
    }
}

// ========== 绑定截图点击 ==========
function bindScreenshotClicks() {
    // 已在HTML中通过onclick绑定
}

// ========== 移动端导航 ==========
function initMobileNav() {
    if (!DOM.mobileNavToggle || !DOM.sidebar || !DOM.sidebarOverlay) return;

    DOM.mobileNavToggle.addEventListener('click', toggleMobileSidebar);
    DOM.sidebarOverlay.addEventListener('click', closeMobileSidebar);

    // ESC关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.sidebar.classList.contains('open')) {
            closeMobileSidebar();
        }
    });
}

function toggleMobileSidebar() {
    if (!DOM.sidebar || !DOM.sidebarOverlay) return;
    const isOpen = DOM.sidebar.classList.contains('open');

    if (isOpen) {
        closeMobileSidebar();
    } else {
        DOM.sidebar.classList.add('open');
        DOM.sidebarOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileSidebar() {
    if (!DOM.sidebar || !DOM.sidebarOverlay) return;
    DOM.sidebar.classList.remove('open');
    DOM.sidebarOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// ========== 对比表格 ==========
function renderComparisonTable() {
    if (!DOM.comparisonBody) return;

    const rows = casesData.map(c => {
        const formatShort = c.format.includes('VR') ? 'VR全景' :
                            c.format.includes('网页叙事') ? '网页叙事' :
                            c.format.includes('3D') ? '3D展示' : c.format;
        const interactionType = c.format.includes('VR') ? '全景漫游+热点' :
                                c.format.includes('网页叙事') ? '滚动浏览+点击' :
                                '多维交互';
        const contentOrg = c.type === '档案馆' ? '档案分类+时间线' :
                           c.type === '纪念馆' ? '主题叙事+史料' :
                           '展品分类+专题';
        const techImpl = c.difficulty >= 3 ? '高精度3D+VR+多媒体' :
                         c.difficulty >= 2 ? 'VR全景+网页' :
                         '网页+图片';

        const targetAudience = c.scenes.includes('学术研究') ? '研究者+公众' :
                               c.scenes.includes('青少年受众') ? '青少年+家庭' :
                               c.scenes.includes('国际') ? '国内外公众' :
                               '社会公众';

        const strengths = c.features[0] || '—';
        const weaknesses = c.difficulty >= 3 ? '需要较高带宽与技术支持' :
                           c.difficulty <= 1 ? '交互深度有限' :
                           '部分内容更新频率低';

        return `
            <tr>
                <td class="case-name-col">${c.name.length > 20 ? c.name.substring(0, 18) + '…' : c.name}</td>
                <td>${c.type}</td>
                <td>${formatShort}</td>
                <td>${interactionType}</td>
                <td>${contentOrg}</td>
                <td>${techImpl}</td>
                <td>${targetAudience}</td>
                <td>${strengths}</td>
                <td>${weaknesses}</td>
                <td>${'⭐'.repeat(c.difficulty)}</td>
                <td>${c.recommend}</td>
            </tr>
        `;
    }).join('');

    DOM.comparisonBody.innerHTML = rows;
}

// ========== 全局函数暴露 ==========
// 使onclick能够调用
window.openLightbox = openLightbox;
