/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass. Non-remnant stars are mainly composed of hydrogen in its plasma state. The most common isotope of hydrogen, termed protium, has one proton and no neutrons.": "原子序数为1。氢的原子量为1.00794 u，是元素周期表中最轻的元素。 它的单原子形式 (H) 是宇宙中最丰富的化学物质，约占所有重子质量的 75%。 非残余恒星主要由等离子态的氢组成。 最常见的氢同位素称为氕，有一个质子，没有中子。",
    "\t\t  Hydrogen I ": "\t\t 氢 I",
    "\t\t  Isotope ": "\t\t 同位素",
    "\t\t  Upgrades ": "\t\t 升级",
    "\t  Activate": "\t 激活",
    "An unfolding prototype": "正在展开的原型",
    "Base": "根据",
    "Binding energy": "结合能",
    "Buy a Tier III generator.\n": "购买 Tier III 发电机。\n",
    "Close": "关闭",
    "Copy this text:": "复制这段文字：",
    "Electron affinity": "电子亲和力",
    "Elements ": "元素",
    "Encyclopedia ": "百科全书",
    "Erase save": "删除存档",
    "Export Save": "导出存档",
    "Faster ticks: spend your offline gains to accelerate game speed.": "更快的滴答声：花费你的离线收益来加快游戏速度。",
    "From Wikipedia": "来自维基百科",
    "Gather 10.000 H\n": "收集 10.000 H\n",
    "Hydrogen": "氢",
    "Hydrogen (H) is your main resource. Use it to buy generators, upgrades, and others.": "氢 (H) 是您的主要资源。 用它来购买发电机、升级等。",
    "Import Save": "导入保存",
    "Increase your production and randomly generate a new isotope.\n": "增加产量并随机生成新的同位素。\n",
    "Ionization": "电离",
    "is a chemical element with chemical symbol": "是一种化学元素，化学符号",
    "Mission completed": "任务完成",
    "Options ": "选项",
    "Periodic Table of Elements": "元素周期表",
    "Synthesis": "合成",
    "The Incremental Table of Elements ": "元素增量表",
    "Tier 1: ": "第 1 级：",
    "Total": "共计",
    "Upgrades ": "升级 ",
    "Reactions ": "反应 ",
    "Missions ": "任务 ",
    "Randomly generate a radioactive isotope.": "",
    "Activate": "激活",
    "Beta decay": "β衰变",
    "Half-life": "半衰期",
    "Isotope": "同位素",
    "Radioactivity": "放射性",
    "Radioactive decay is a stochastic (i.e. random) process at the level of single atoms, in that, according to quantum theory, it is impossible to predict when a particular atom will decay. The chance that a given atom will decay never changes, that is, it does not matter how long the atom has existed. For a large collection of atoms however, the decay rate for that collection can be calculated from their measured decay constants or half-lives.": "放射性衰变是单个原子水平上的随机（即随机）过程，因为根据量子理论，不可能预测特定原子何时衰变。 给定原子衰变的可能性永远不会改变，也就是说，原子存在多久并不重要。 然而，对于大量原子来说，该集合的衰变率可以根据测量的衰变常数或半衰期来计算。",
    "Some isotopes are radioactive, like 3H. Radioactive isotopes decay randomly over time and produce energy (eV) and other isotopes as products.": "有些同位素具有放射性，例如 3H。 放射性同位素随时间随机衰变，并产生能量 (eV) 和其他同位素产物。",
    "There are many different types of radioactive decay. A decay, or loss of energy from the nucleus, results when an atom with one type of nucleus, called the parent radionuclide (or parent radioisotope), transforms into an atom with a nucleus in a different state, or with a nucleus containing a different number of protons and neutrons. The product is called the daughter nuclide. In some decays, the parent and the daughter nuclides are different chemical elements, and thus the decay process results in the creation of an atom of a different element. This is known as a nuclear transmutation.": "放射性衰变有许多不同类型。 当具有一种类型的原子核（称为母体放射性核素（或母体放射性同位素））的原子转变为具有不同状态的原子核或含有不同状态的原子核时，就会发生衰变或原子核能量损失。 质子和中子的数量。 该产物称为子核素。 在某些衰变中，母核素和子核素是不同的化学元素，因此衰变过程会产生不同元素的原子。 这被称为核嬗变。",
    "The electron volt is not an SI unit, and its definition is empirical, thus its value in SI units must be obtained experimentally.": "电子伏特不是SI单位，其定义是经验性的，因此其SI单位值必须通过实验获得。",
    "is a subatomic particle, symbol e−, with a negative elementary electric charge. Electrons belong to the first generation of the lepton particle family, and are generally thought to be elementary particles because they have no known components or substructure. The electron has a mass that is approximately 1/1836 that of the proton. Quantum mechanical properties of the electron include an intrinsic angular momentum (spin) of a half-integer value in units of ħ, which means that it is a fermion. Being fermions, no two electrons can occupy the same quantum state, in accordance with the Pauli exclusion principle.": "是一种亚原子粒子，符号为 e−，带有负基本电荷。 电子属于第一代轻子粒子家族，通常被认为是基本粒子，因为它们没有已知的成分或子结构。 电子的质量约为质子的 1/1836。 电子的量子力学特性包括以 ħ 为单位的半整数值的固有角动量（自旋），这意味着它是费米子。 作为费米子，根据泡利不相容原理，没有两个电子可以占据相同的量子态。",
    "is a property of objects which can be transferred to other objects or converted into different forms, but cannot be created or destroyed. The \"ability of a system to perform work\" is a common description, but it is difficult to give one single comprehensive definition of energy because of its many forms.": "是对象的一种属性，可以转移到其他对象或转换为不同的形式，但不能创建或销毁。 “系统做功的能力”是一种常见的描述，但由于能量的形式多种多样，很难给出一个单一的、全面的定义。",
    "Half-life is used to describe a quantity undergoing exponential decay, and is constant over the lifetime of the decaying quantity. It is a characteristic unit for the exponential decay equation. The term \"half-life\" may generically be used to refer to any period of time in which a quantity falls by half, even if the decay is not exponential.": "半衰期用于描述经历指数衰减的量，并且在衰减量的整个生命周期内保持恒定。 它是指数衰减方程的特征单位。 术语“半衰期”一般可用于指数量下降一半的任何时间段，即使衰减不是指数级的。",
    "Isotopes are new resources with different properties, for instance different number of subatomic particles.": "同位素是具有不同属性的新资源，例如不同数量的亚原子粒子。",
    "Common energy forms include the kinetic energy of a moving object, the potential energy stored by an object's position in a force field (gravitational, electric or magnetic), the elastic energy stored by stretching solid objects, the chemical energy released when a fuel burns, the radiant energy carried by light, and the thermal energy due to an object's temperature. All of the many forms of energy are convertible to other kinds of energy, and obey the law of conservation of energy which says that energy can be neither created nor be destroyed; however, it can change from one form to another.": "常见的能量形式包括运动物体的动能、物体在力场（重力、电场或磁力）中的位置所存储的势能、拉伸固体物体所存储的弹性能、燃料燃烧时释放的化学能、 光携带的辐射能和物体温度产生的热能。 所有多种形式的能量都可以转化为其他种类的能量，并且遵循能量守恒定律，即能量既不能被创造，也不能被毁灭； 但是，它可以从一种形式变为另一种形式。",
    "Beta decay is mediated by the weak force. There are two types of beta decay, known as beta minus and beta plus. In beta minus (β−) decay a neutron is lost and a proton appears and the process produces an electron and electron antineutrino, while in beta plus (β+) decay a proton is lost and a neutron appears and the process produces a positron and electron neutrino; β+ decay is thus also known as positron emission.": "β衰变是由弱力介导的。 贝塔衰变有两种类型，称为减贝塔和加贝塔。 在β减（β−）衰变中，失去中子并出现质子，该过程产生电子和电子反中微子，而在β+（β+）衰变中，失去质子并出现中子，该过程产生正电子和 电子中微子； 因此，β+衰变也称为正电子发射。",
    "are variants of a particular chemical element which differ in neutron number, although all isotopes of a given element have the same number of protons in each atom. The term isotope is formed from the Greek roots isos (ἴσος \"equal\") and topos (τόπος \"place\"), meaning \"the same place\"; thus, the meaning behind the name it is that different isotopes of a single element occupy the same position on the periodic table. The number of protons within the atom's nucleus is called atomic number and is equal to the number of electrons in the neutral (non-ionized) atom. Each atomic number identifies a specific element, but not the isotope; an atom of a given element may have a wide range in its number of neutrons. The number of nucleons (both protons and neutrons) in the nucleus is the atom's mass number, and each isotope of a given element has a different mass number.": "是特定化学元素的变体，其中子数不同，但给定元素的所有同位素在每个原子中具有相同的质子数。 同位素一词由希腊词根 isos（ἴσος“等于”）和 topos（τόπος“地方”）组成，意思是“同一个地方”； 因此，这个名字背后的含义是单个元素的不同同位素在元素周期表上占据相同的位置。 原子核内的质子数称为原子序数，等于中性（非电离）原子中的电子数。 每个原子序数标识一个特定元素，但不标识同位素； 给定元素的原子的中子数可能有很大范围。 原子核中核子（质子和中子）的数量就是原子的质量数，给定元素的每种同位素都有不同的质量数。",
    "Use energy to split atoms appart and produce subatomic particles.": "利用能量将原子分裂并产生亚原子粒子。",
    "Use ionization energy to produce ions, removing electrons from atoms.": "利用电离能产生离子，从原子中除去电子。",
    "Nuclear binding energy": "核结合能",
    "nuclear decay": "核衰变",
    "radiation": "辐射",
    "Radioactive decay": "放射性衰变",
    "radioactivity": "放射性",
    "joules (symbol J). By definition, it is the amount of energy gained (or lost) by the charge of a single electron moving across an electric potential difference of one volt.": "焦耳（符号 J）。 根据定义，它是单个电子的电荷在一伏电势差上移动时获得（或损失）的能量。",
    "Isotopes": "同位素",
    "is the energy that would be required to disassemble the nucleus of an atom into its component parts. These component parts are neutrons and protons, which are collectively called nucleons. The binding energy of nuclei is due to the attractive forces that hold these nucleons together and this is usually a positive number, since most nuclei would require the expenditure of energy to separate them into individual protons and neutrons. The mass of an atomic nucleus is usually less than the sum of the individual masses of the constituent protons and neutrons (according to Einstein's equation E=mc": "是将原子核分解成其组成部分所需的能量。 这些组成部分是中子和质子，统称为核子。 原子核的结合能是由于将这些核子结合在一起的吸引力而产生的，这通常是一个正数，因为大多数原子核需要消耗能量才能将它们分离成单独的质子和中子。 原子核的质量通常小于组成质子和中子的单个质量之和（根据爱因斯坦方程 E=mc",
    "is qualitatively defined as the amount of energy required to remove the most loosely bound electron of an isolated gaseous atom to form a cation.": "定性地定义为除去孤立气态原子中最松散结合的电子以形成阳离子所需的能量。",
    "Half life determines how often a radioactive isotope decays. The higher the half-life, the higher the number of isotopes and time needed to decay.": "半衰期决定放射性同位素衰变的频率。 半衰期越长，同位素的数量和衰变所需的时间就越长。",
    "Energy (eV) is a resource that can be produced and consume by different processes (e.g. decay, ionization energy, chemical synthesis).": "能量 (eV) 是一种可以通过不同过程（例如衰变、电离能、化学合成）产生和消耗的资源。",
    "Energy": "能量",
    "energy": "能量",
    "Electronvolt (eV) is the resource of energy.": "电子伏特 (eV) 是能源。",
    "Electrons (e-) can be produced or consumed via decay or ionization.": "电子（e-）可以通过衰变或电离产生或消耗。",
    "Electron": "电子",
    "electron": "电子",
    "electron volt": "电子伏特",
    "Electronvolt": "电子伏特",
    "electronvolt": "电子伏特",
    "beta decay": "β衰变",
    "Beta decay is an specific type of decay. It produces an electron and isotope as product.": "β衰变是一种特殊类型的衰变。 它产生电子和同位素作为产物。",
    "": "",
    "(β-decay) is a type of radioactive decay in which a proton is transformed into a neutron, or vice versa, inside an atomic nucleus. This process allows the atom to move closer to the optimal ratio of protons and neutrons. As a result of this transformation, the nucleus emits a detectable beta particle, which is an electron or positron.": "（β 衰变）是一种放射性衰变，其中质子在原子核内转变为中子，反之亦然。 这个过程使原子更加接近质子和中子的最佳比例。 这种转变的结果是，原子核发射出可检测的 β 粒子，即电子或正电子。",
    ") and this 'missing mass' is known as the mass defect, and represents the energy that was released when the nucleus was formed.": "），这种“缺失的质量”被称为质量缺陷，代表原子核形成时释放的能量。",
    ". A material that spontaneously emits such radiation — which includes alpha particles, beta particles, gamma rays and conversion electrons — is considered radioactive.": "。 自发发射此类辐射的材料（包括α粒子、β粒子、伽马射线和转换电子）被认为具有放射性。",
    "(symbol": "（符号",
    ") is the amount of time required for the amount of something to fall to half its initial value. The term is very commonly used in nuclear physics to describe how quickly unstable atoms undergo radioactive decay, but it is also used more generally for discussing any type of exponential decay.": ") 是某物的数量降至其初始值一半所需的时间。 该术语在核物理学中非常常用来描述不稳定原子经历放射性衰变的速度，但它也更广泛地用于讨论任何类型的指数衰变。",
    "  Activate": " 启用",
    "  Beta decay ": "   贝塔衰变",
    "  Decay ": "   衰变",
    "  Electron ": "   电子",
    "  Energy ": "   活力",
    "  Half-Life ": "   半衰期",
    "  Hydrogen I ": "   氢一号",
    "  Hydrogen II ": "   氢气II",
    "  Ionization energy ": "   电离能",
    "  Isotope ": "   同位素",
    "  Isotope II ": "   同位素II",
    "  Nuclear binding energy ": "   核结合能",
    "  Proton ": "   质子",
    "  Radioactivity ": "   放射性",
    "  Reactions ": "   反应",
    "  Upgrades ": "   升级",
    "; also written": "; 还写了",
    ") is a unit of energy equal to approximately 160 zeptojoules (symbol zJ) or 1.6 × 10": ") 是能量单位，约等于 160 zeptojoules（符号 zJ）或 1.6 × 10",
    "Gather 1 million (1e6) eV.\n": "收集 100 万 (1e6) eV。\n",
    "Gather 1 million (1e6) H\n": "收集 100 万 (1e6) H\n",
    "Gather 10 million (1e7) energy.\n": "收集 1000 万 (1e7) 能量。\n",
    "Gather 10.000 of an isotope.\n": "收集 10.000 个同位素。\n",
    "Gather 100 e-.\n": "收集 100 个电子。\n",
    "Gather 1000 3H\n": "收集1000 3H\n",
    "Gather 1000 p.\n": "收集 1000 p。\n",
    "Gather 2500 e-.\n": "收集 2500 个电子。\n",
    "Gather 5 n.\n": "收集 5 个 n。\n",
    "Gather 50.000 3H.\n": "收集 50.000 3H。\n",
    "Gather enough 3H to produce a random radioactive decay.\n": "收集足够的 3H 以产生随机放射性衰变。\n",
    "https://github.com/angarg12/incremental_table_elements": "https://github.com/angarg12/incremental_table_elements",
    "In": "在",
    "In nuclear physics,": "在核物理中，",
    "In physics, the": "在物理学中，",
    "ionization energy": "电离能",
    "Ionization energy": "电离能",
    "In physics,": "在物理学中，",
    "H/s": "H/秒",
    ", also known as": "，也称为",
    ", is the process by which a nucleus of an unstable atom loses energy by emitting": "，是不稳定原子核通过发射而失去能量的过程",
    "The": "",
    "React": "反应",
    "is a subatomic particle, symbol n, with no net electric charge and a mass slightly larger than that of a proton. Protons and neutrons, each with mass approximately one atomic mass unit, constitute the nucleus of an atom, and they are collectively referred to as nucleons. Their properties and interactions are described by nuclear physics.": "是一种亚原子粒子，符号n，不带净电荷，质量略大于质子。 质子和中子的质量约为一个原子质量单位，构成原子核，统称为核子。 它们的性质和相互作用由核物理学描述。",
    "Within the nucleus, protons and neutrons are bound together through the nuclear force, and neutrons are required for the stability of nuclei. Neutrons are produced copiously in nuclear fission and fusion. They are a primary contributor to the nucleosynthesis of chemical elements within stars through fission, fusion, and neutron capture processes.": "在原子核内，质子和中子通过核力结合在一起，中子是原子核稳定所必需的。 核裂变和聚变会产生大量中子。 它们是恒星内通过裂变、聚变和中子俘获过程进行化学元素核合成的主要贡献者。",
    "  Neutron ": "中子",
    "  Oxygen ": "   氧",
    "  Periodic Table ": "   元素周期表",
    "Buy Oxygen.\n": "购买氧气。\n",
    "neutron": "中子",
    "Neutron": "中子",
    "Neutrons (n) can be produced via binding energy. Together with electrons and protons, can be used to purchase new elements.": "中子 (n) 可以通过结合能产生。 与电子和质子一起，可用于购买新元素。",
    "Periodic Table ": "元素周期表",
    "Reactions": "反应",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t\t": "\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Missions completed: ": "任务完成：",
    "Randomly generate a radioactive isotope.": "随机生成放射性同位素。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n\n": "\n\n",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) × ([\d\.,]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Gather (.+) H$/, '收集 $1 氢'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Gather (.+) n.\n$/, '收集 $1 n.\n'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Tier ([\d\.,]+)$/, '层级 $1'],
    [/^Tier ([\d\.,]+):(.+)$/, '层级 $1:$2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);