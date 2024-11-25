const udTlds = [
  "888",
  "altimist",
  "anime",
  "austin",
  "bald",
  "benji",
  "bet",
  "binanceus",
  "bitcoin",
  "bitget",
  "blockchain",
  "ca",
  "chomp",
  "clay",
  "co",
  "com",
  "crypto",
  "dao",
  "dfz",
  "digital",
  "dream",
  "eth",
  "ethermail",
  "farms",
  "fun",
  "go",
  "group",
  "hi",
  "host",
  "info",
  "io",
  "klever",
  "kresus",
  "kryptic",
  "lfg",
  "life",
  "live",
  "ltd",
  "manga",
  "metropolis",
  "moon",
  "mumu",
  "net",
  "nft",
  "online",
  "org",
  "pog",
  "polygon",
  "press",
  "pro",
  "propykeys",
  "pudgy",
  "pw",
  "raiin",
  "secret",
  "site",
  "smobler",
  "space",
  "stepn",
  "store",
  "tball",
  "tech",
  "ubu",
  "uno",
  "unstoppable",
  "wallet",
  "website",
  "wifi",
  "witg",
  "wrkx",
  "x",
  "xmr",
  "xyz",
  "zil"
];

const udResolverKeys = {
	"singleAddressList": [
		"BTC",
		"ETH",
		"ZIL",
		"LTC",
		"ETC",
		"EQL",
		"LINK",
		"BAT",
		"REP",
		"ZRX",
		"DAI",
		"BCH",
		"XMR",
		"DASH",
		"NEO",
		"SWTH",
		"DOGE",
		"XRP",
		"ZEC",
		"YEC",
		"ADA",
		"EOS",
		"XLM",
		"BTG",
		"NANO",
		"WAVES",
		"KMD",
		"AE",
		"RSK",
		"WAN",
		"STRAT",
		"UBQ",
		"XTZ",
		"IOTA",
		"VET",
		"QTUM",
		"ICX",
		"DGB",
		"XZC",
		"FIRO",
		"BURST",
		"DCR",
		"XEM",
		"LSK",
		"ATOM",
		"ONG",
		"ONT",
		"SMART",
		"TPAY",
		"GRS",
		"BSV",
		"GAS",
		"TRX",
		"VTHO",
		"BCD",
		"BTT",
		"KIN",
		"RVN",
		"ARK",
		"XVG",
		"ALGO",
		"NEBL",
		"XPM",
		"ONE",
		"BNTY",
		"CRO",
		"TWT",
		"SIERRA",
		"VSYS",
		"HIVE",
		"HT",
		"ENJ",
		"YFI",
		"MTA",
		"COMP",
		"BAL",
		"AMPL",
		"LEND",
		"TLOS",
		"XDC",
		"XST",
		"STRAX",
		"SIGNA",
		"NIM",
		"GUAP",
		"YLD",
		"OKT",
		"DOT",
		"SOL",
		"ICP",
		"THETA",
		"FIL",
		"CDAI",
		"KSM",
		"OKB",
		"BLOCKS",
		"CUSDC",
		"CETH",
		"AMP",
		"MIOTA",
		"FTT",
		"MKR",
		"TFUEL",
		"KLAY",
		"LUNA",
		"AVAX",
		"LEO",
		"UST",
		"RUNE",
		"HBAR",
		"CHZ",
		"EGLD",
		"NEAR",
		"HNT",
		"STETH",
		"PAX",
		"STX",
		"ZEN",
		"ARRR",
		"BNT",
		"SC",
		"UMA",
		"AR",
		"OMG",
		"GT",
		"QNT",
		"CHSB",
		"IOST",
		"NXM",
		"KCS",
		"XSUSHI",
		"CUSDT",
		"FLOW",
		"ANKR",
		"HBC",
		"VGX",
		"FEI",
		"CKB",
		"TITAN",
		"OMI",
		"MINA",
		"SETH",
		"RSR",
		"XCH",
		"USDN",
		"BCHA",
		"LRC",
		"PUNDIX",
		"ERG",
		"WIN",
		"NPXS",
		"TRIBE",
		"MAID",
		"ASD",
		"CUNI",
		"CELO",
		"DENT",
		"SNT",
		"SKL",
		"ALUSD",
		"GLM",
		"CFX",
		"UOS",
		"SVCS",
		"GNO",
		"USDP",
		"KAVA",
		"ALCX",
		"EWT",
		"TON",
		"RLC",
		"AXS",
		"AUDIO",
		"XVS",
		"NMR",
		"WAXP",
		"UQC",
		"IOTX",
		"FUN",
		"OCEAN",
		"RAY",
		"KLV",
		"BTCST",
		"TLM",
		"AKT",
		"STMX",
		"PROM",
		"XPRT",
		"RPL",
		"AGIX",
		"CELR",
		"OXT",
		"ARDR",
		"MATH",
		"10SET",
		"POLY",
		"GUSD",
		"NKN",
		"CVC",
		"GTC",
		"STEEM",
		"ORN",
		"HXRO",
		"ORBS",
		"OGN",
		"MED",
		"XAUT",
		"VLX",
		"PHA",
		"KOBE",
		"PERP",
		"XHV",
		"META",
		"SEUR",
		"MONA",
		"ANT",
		"HYDRA",
		"ZKS",
		"CSPR",
		"MTL",
		"NU",
		"ZMT",
		"LOC",
		"TKO",
		"ETN",
		"EXRD",
		"NMX",
		"RIF",
		"AVA",
		"MOBX",
		"FAB",
		"BEAM",
		"DESO",
		"FLR",
		"SGB",
		"SUI",
		"MOON",
		"POKT",
		"KAI",
		"XLA",
		"APT",
		"GTH",
		"VERSE",
		"NIBI"
	],
	"multiAddressList": [
		"B2M",
		"FARMS",
		"USDC",
		"BNB",
		"ELA",
		"WETH",
		"USDT",
		"FTM",
		"FUSE",
		"MATIC",
		"UNI",
		"BUSD",
		"WBTC",
		"AAVE",
		"SHIB",
		"CEL",
		"CAKE",
		"SAFEMOON",
		"TEL",
		"SUSHI",
		"TUSD",
		"HBTC",
		"SNX",
		"HOT",
		"NEXO",
		"MANA",
		"MDX",
		"LUSD",
		"GRT",
		"HUSD",
		"CRV",
		"WRX",
		"LPT",
		"BAKE",
		"1INCH",
		"WOO",
		"OXY",
		"REN",
		"RENBTC",
		"FEG",
		"MIR",
		"PAXG",
		"REEF",
		"BAND",
		"INJ",
		"SAND",
		"CTSI",
		"ANC",
		"IQ",
		"SUSD",
		"SRM",
		"FET",
		"KEEP",
		"ALPHA",
		"MCONTENT",
		"DODO",
		"KNCL",
		"SXP",
		"UBT",
		"STORJ",
		"DPI",
		"DOG",
		"GALA",
		"0ZK",
		"SWEAT",
		"HI"
	],
	"multiAddressMapping": {
		"B2M": [
			"MATIC",
			"BEP20",
			"ERC20"
		],
		"FARMS": [
			"MATIC"
		],
		"USDC": [
			"ERC20",
			"OKT",
			"MATIC",
			"SOL",
			"AVAX"
		],
		"BNB": [
			"BEP2",
			"BEP20"
		],
		"ELA": [
			"ELA",
			"ESC"
		],
		"WETH": [
			"ERC20",
			"MATIC",
			"BEP20"
		],
		"USDT": [
			"ERC20",
			"MATIC",
			"TRON",
			"EOS",
			"OMNI",
			"OKB",
			"OKC"
		],
		"FTM": [
			"ERC20",
			"BEP2",
			"OPERA"
		],
		"FUSE": [
			"ERC20",
			"FUSE"
		],
		"MATIC": [
			"MATIC",
			"BEP20",
			"ERC20"
		],
		"UNI": [
			"ERC20",
			"BEP20",
			"MATIC",
			"HRC20",
			"XDAI"
		],
		"BUSD": [
			"ERC20",
			"BEP20",
			"HRC20"
		],
		"WBTC": [
			"ERC20",
			"MATIC",
			"FANTOM",
			"HRC20",
			"XDAI"
		],
		"AAVE": [
			"ERC20",
			"MATIC",
			"FANTOM",
			"HRC20"
		],
		"SHIB": [
			"ERC20",
			"MATIC",
			"FANTOM"
		],
		"CEL": [
			"ERC20",
			"MATIC",
			"FANTOM",
			"HRC20"
		],
		"CAKE": [
			"BEP20",
			"HRC20"
		],
		"SAFEMOON": [
			"BEP20",
			"HRC20"
		],
		"TEL": [
			"ERC20",
			"MATIC"
		],
		"SUSHI": [
			"ERC20",
			"BEP20",
			"MATIC",
			"FANTOM",
			"HRC20"
		],
		"TUSD": [
			"ERC20",
			"BEP20",
			"AVAX",
			"HRC20",
			"BEP2",
			"TRON"
		],
		"HBTC": [
			"ERC20",
			"HRC20"
		],
		"SNX": [
			"ERC20",
			"MATIC",
			"FANTOM",
			"HRC20"
		],
		"HOT": [
			"ERC20",
			"HRC20"
		],
		"NEXO": [
			"ERC20",
			"FANTOM"
		],
		"MANA": [
			"ERC20",
			"MATIC"
		],
		"MDX": [
			"HRC20",
			"BEP20"
		],
		"LUSD": [
			"ERC20",
			"MATIC"
		],
		"GRT": [
			"ERC20",
			"MATIC",
			"HRC20"
		],
		"HUSD": [
			"ERC20",
			"HRC20"
		],
		"CRV": [
			"ERC20",
			"MATIC",
			"FANTOM"
		],
		"WRX": [
			"BEP2",
			"MATIC"
		],
		"LPT": [
			"ERC20",
			"HRC20"
		],
		"BAKE": [
			"BEP20",
			"HRC20"
		],
		"1INCH": [
			"ERC20",
			"BEP20",
			"MATIC",
			"HRC20"
		],
		"WOO": [
			"ERC20",
			"HRC20"
		],
		"OXY": [
			"SOLANA",
			"ERC20"
		],
		"REN": [
			"ERC20",
			"HRC20"
		],
		"RENBTC": [
			"ERC20",
			"BEP20",
			"HRC20"
		],
		"FEG": [
			"ERC20",
			"HRC20"
		],
		"MIR": [
			"ERC20",
			"BEP20"
		],
		"PAXG": [
			"ERC20",
			"HRC20"
		],
		"REEF": [
			"ERC20",
			"BEP20",
			"HRC20"
		],
		"BAND": [
			"ERC20",
			"FANTOM"
		],
		"INJ": [
			"ERC20",
			"BEP20"
		],
		"SAND": [
			"ERC20",
			"HRC20"
		],
		"CTSI": [
			"ERC20",
			"BEP20",
			"MATIC"
		],
		"ANC": [
			"TERRA",
			"ERC20"
		],
		"IQ": [
			"ERC20",
			"BEP20",
			"MATIC"
		],
		"SUSD": [
			"ERC20",
			"FANTOM"
		],
		"SRM": [
			"ERC20",
			"SOLANA"
		],
		"FET": [
			"ERC20",
			"FETCHAI"
		],
		"KEEP": [
			"ERC20",
			"HRC20"
		],
		"ALPHA": [
			"ERC20",
			"BEP20"
		],
		"MCONTENT": [
			"ERC20",
			"BEP20"
		],
		"DODO": [
			"ERC20",
			"BEP20"
		],
		"KNCL": [
			"ERC20",
			"FANTOM",
			"HRC20"
		],
		"SXP": [
			"ERC20",
			"BEP20",
			"HRC20"
		],
		"UBT": [
			"ERC20",
			"MATIC"
		],
		"STORJ": [
			"ERC20",
			"HRC20"
		],
		"DPI": [
			"ERC20",
			"MATIC"
		],
		"DOG": [
			"MATIC",
			"BEP20",
			"ERC20",
			"AETH",
			"OP"
		],
		"GALA": [
			"ERC20",
			"BEP20"
		],
		"0ZK": [
			"ERC20",
			"BEP20",
			"MATIC",
			"0ZK"
		],
		"SWEAT": [
			"ERC20",
			"NEP-141"
		],
		"HI": [
			"ERC20",
			"BEP20"
		]
	}
};

exports.udResolverKeys = udResolverKeys;
exports.udTlds = udTlds;