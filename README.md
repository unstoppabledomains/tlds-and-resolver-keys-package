
# @unstoppabledomains/tldsresolverkeys

an NPM / Yarn Package containing Unstoppable TLDs and Resolver Keys

  

## How to Install

``` yarn add @unstoppabledomains/tldsresolverkeys ```

  

## Package Details

This package contains 2 constants: `udTlds` and `udResolverKeys`

  

## Changelog

#### 9/22/2022 - 1.0.0:
 Initial Release

#### 10/20/2022 - 1.1.0:
 Removed .coin TLD

#### 11/2/2022 - 1.2.0:
 Added .klever TLD

#### 11/28/2022 - 2.0.0:
Added 4 recently supported tokens (BEAM, SUI, MOON, 0ZK)
Renamed singleChain and multiChain to singleAddressList and multiAddressList
Added a set of multi-address token mappings under multiAddressMapping

## Variables

**udTlds** - An array containing all UD TLDs

`[ "crypto", "wallet", "blockchain", "bitcoin", "x", "888", "nft", "dao", "zil", "klever" ] `

**udResolverKeys** - An object containing 3 elements:

**singleAddressList** - An array containing all supported tokens that contain a single type of address on an Unstoppable Domain

`"singleAddressList": [ "BTC", "ETH", "ZIL", "LTC", "ETC", "EQL", "LINK", "USDC", "BAT", "REP", "ZRX", "DAI", "BCH", "XMR", "DASH", "NEO", "SWTH", "DOGE", "XRP", "ZEC", "YEC", "ADA", "EOS", "XLM", "BNB", "BTG", "NANO", "WAVES", "KMD", "AE", "RSK", "WAN", "STRAT", "UBQ", "XTZ", "IOTA", "VET", "QTUM", "ICX", "DGB", "XZC", "FIRO", "BURST", "DCR", "XEM", "LSK", "ATOM", "ONG", "ONT", "SMART", "TPAY", "GRS", "BSV", "GAS", "TRX", "VTHO", "BCD", "BTT", "KIN", "RVN", "ARK", "XVG", "ALGO", "NEBL", "XPM", "ONE", "BNTY", "CRO", "TWT", "SIERRA", "VSYS", "HIVE", "HT", "ENJ", "YFI", "MTA", "COMP", "BAL", "AMPL", "LEND", "TLOS", "XDC", "XST", "STRAX", "SIGNA", "NIM", "GUAP", "YLD", "OKT", "DOT", "SOL", "ICP", "THETA", "FIL", "CDAI", "KSM", "OKB", "BLOCKS", "CUSDC", "CETH", "AMP", "MIOTA", "FTT", "MKR", "TFUEL", "KLAY", "LUNA", "AVAX", "LEO", "UST", "RUNE", "HBAR", "CHZ", "EGLD", "NEAR", "HNT", "STETH", "PAX", "STX", "ZEN", "ARRR", "BNT", "SC", "UMA", "AR", "OMG", "GT", "QNT", "CHSB", "IOST", "NXM", "KCS", "XSUSHI", "CUSDT", "FLOW", "ANKR", "HBC", "VGX", "FEI", "CKB", "TITAN", "OMI", "MINA", "SETH", "RSR", "XCH", "USDN", "BCHA", "LRC", "PUNDIX", "ERG", "WIN", "NPXS", "TRIBE", "MAID", "ASD", "CUNI", "CELO", "DENT", "SNT", "SKL", "ALUSD", "GLM", "CFX", "UOS", "SVCS", "GNO", "USDP", "KAVA", "ALCX", "EWT", "TON", "RLC", "AXS", "AUDIO", "XVS", "NMR", "WAXP", "UQC", "IOTX", "FUN", "OCEAN", "RAY", "KLV", "BTCST", "TLM", "AKT", "STMX", "PROM", "XPRT", "RPL", "AGIX", "CELR", "FET", "OXT", "ARDR", "MATH", "10SET", "POLY", "GUSD", "NKN", "CVC", "GTC", "STEEM", "ORN", "HXRO", "ORBS", "OGN", "MED", "XAUT", "VLX", "PHA", "KOBE", "PERP", "XHV", "META", "SEUR", "MONA", "ANT", "HYDRA", "ZKS", "CSPR", "MTL", "NU", "ZMT", "LOC", "TKO", "ETN", "EXRD", "NMX", "RIF", "AVA", "MOBX", "FAB", "BEAM", "SUI", "MOON" ]`

**multiAddressList** - An array containing all supported tokens that can have multiple types of addresses on an Unstoppable Domain such as ERC20 and BEP20

`"multiAddressList": [ "B2M", "ELA", "USDT", "FTM", "FUSE", "MATIC", "UNI", "BUSD", "WBTC", "AAVE", "SHIB", "CEL", "CAKE", "SAFEMOON", "TEL", "SUSHI", "TUSD", "HBTC", "SNX", "HOT", "NEXO", "MANA", "MDX", "LUSD", "GRT", "HUSD", "CRV", "WRX", "LPT", "BAKE", "1INCH", "WOO", "OXY", "REN", "RENBTC", "FEG", "MIR", "PAXG", "REEF", "BAND", "INJ", "SAND", "CTSI", "ANC", "IQ", "SUSD", "SRM", "FET", "KEEP", "ALPHA", "DODO", "KNCL", "SXP", "UBT", "STORJ", "DPI", "DOG", "GALA", "0ZK" ] `

**multiAddressMapping** - An object containing mappings for every multi-address token and which types of addresses they support

`"multiAddressMapping": { "B2M": [ "MATIC", "BEP20", "ERC20" ], "ELA": [ "ELA", "ESC" ], "USDT": [ "ERC20", "TRON", "EOS", "OMNI", "OKC" ], "FTM": [ "ERC20", "BEP2", "OPERA" ], "FUSE": [ "ERC20", "FUSE" ], "MATIC": [ "MATIC", "BEP20", "ERC20" ], "UNI": [ "ERC20", "BEP20", "MATIC", "HRC20", "XDAI" ], "BUSD": [ "ERC20", "BEP20", "HRC20" ], "WBTC": [ "ERC20", "MATIC", "FANTOM", "HRC20", "XDAI" ], "AAVE": [ "ERC20", "MATIC", "FANTOM", "HRC20" ], "SHIB": [ "ERC20", "MATIC", "FANTOM" ], "CEL": [ "ERC20", "MATIC", "FANTOM", "HRC20" ], "CAKE": [ "BEP20", "HRC20" ], "SAFEMOON": [ "BEP20", "HRC20" ], "TEL": [ "ERC20", "MATIC" ], "SUSHI": [ "ERC20", "BEP20", "MATIC", "FANTOM", "HRC20" ], "TUSD": [ "ERC20", "BEP20", "AVAX", "HRC20", "BEP2", "TRON" ], "HBTC": [ "ERC20", "HRC20" ], "SNX": [ "ERC20", "MATIC", "FANTOM", "HRC20" ], "HOT": [ "ERC20", "HRC20" ], "NEXO": [ "ERC20", "FANTOM" ], "MANA": [ "ERC20", "MATIC" ], "MDX": [ "HRC20", "BEP20" ], "LUSD": [ "ERC20", "MATIC" ], "GRT": [ "ERC20", "MATIC", "HRC20" ], "HUSD": [ "ERC20", "HRC20" ], "CRV": [ "ERC20", "MATIC", "FANTOM" ], "WRX": [ "BEP2", "MATIC" ], "LPT": [ "ERC20", "HRC20" ], "BAKE": [ "BEP20", "HRC20" ], "1INCH": [ "ERC20", "BEP20", "MATIC", "HRC20" ], "WOO": [ "ERC20", "HRC20" ], "OXY": [ "SOLANA", "ERC20" ], "REN": [ "ERC20", "HRC20" ], "RENBTC": [ "ERC20", "BEP20", "HRC20" ], "FEG": [ "ERC20", "HRC20" ], "MIR": [ "ERC20", "BEP20" ], "PAXG": [ "ERC20", "HRC20" ], "REEF": [ "ERC20", "BEP20", "HRC20" ], "BAND": [ "ERC20", "FANTOM" ], "INJ": [ "ERC20", "BEP20" ], "SAND": [ "ERC20", "HRC20" ], "CTSI": [ "ERC20", "BEP20", "MATIC" ], "ANC": [ "TERRA", "ERC20" ], "IQ": [ "ERC20", "BEP20", "MATIC" ], "SUSD": [ "ERC20", "FANTOM" ], "SRM": [ "ERC20", "SOLANA" ], "FET": [ "ERC20", "FETCHAI" ], "KEEP": [ "ERC20", "HRC20" ], "ALPHA": [ "ERC20", "BEP20" ], "DODO": [ "ERC20", "BEP20" ], "KNCL": [ "ERC20", "FANTOM", "HRC20" ], "SXP": [ "ERC20", "BEP20", "HRC20" ], "UBT": [ "ERC20", "MATIC" ], "STORJ": [ "ERC20", "HRC20" ], "DPI": [ "ERC20", "MATIC" ], "DOG": [ "MATIC", "BEP20", "ERC20", "AETH", "OP" ], "GALA": [ "ERC20", "BEP20" ], "0ZK": [ "ERC20", "BEP20", "MATIC", "0ZK" ] }`
