var verb_irregulars = (function() {
	var main = [{
			"present": "arises",
			"gerund": "arising",
			"past": "arose",
			"infinitive": "arise",
			"participle": "arisen",
			"doer": "ariser"
		}, {
			"infinitive": "babysit",
			"present": "babysits",
			"past": "babysat",
			"gerund": "babysitting",
			"participle": "babysat",
			"doer": "babysitter"
		}, {
			"infinitive": "be",
			"present": "is",
			"gerund": "being",
			"past": "was",
			"participle": "been",
			"doer": "ber"
		}, {
			"infinitive": "beat",
			"present": "beats",
			"past": "beat",
			"gerund": "beating",
			"participle": "beaten",
			"doer": "beater"
		}, {
			"present": "becomes",
			"gerund": "becoming",
			"past": "became",
			"infinitive": "become",
			"participle": "become",
			"doer": "becomer"
		}, {
			"present": "bends",
			"gerund": "bending",
			"past": "bent",
			"infinitive": "bend",
			"participle": "bent",
			"doer": "bender"
		}, {
			"infinitive": "begin",
			"present": "begins",
			"past": "began",
			"gerund": "beginning",
			"participle": "begun",
			"doer": "beginner"
		}, {
			"infinitive": "bet",
			"present": "bets",
			"past": "bet",
			"gerund": "betting",
			"participle": "bet",
			"doer": "better"
		}, {
			"infinitive": "bind",
			"present": "binds",
			"past": "bound",
			"gerund": "binding",
			"participle": "bound",
			"doer": "binder"
		}, {
			"present": "bites",
			"gerund": "biting",
			"past": "bit",
			"infinitive": "bite",
			"participle": "bitten",
			"doer": "biter"
		}, {
			"infinitive": "bleed",
			"present": "bleeds",
			"past": "bled",
			"gerund": "bleeding",
			"participle": "bled",
			"doer": "bleeder"
		}, {
			"infinitive": "blow",
			"present": "blows",
			"past": "blew",
			"gerund": "blowing",
			"participle": "blown",
			"doer": "blower"
		}, {
			"infinitive": "break",
			"present": "breaks",
			"past": "broke",
			"gerund": "breaking",
			"participle": "broken",
			"doer": "breaker"
		}, {
			"infinitive": "breed",
			"present": "breeds",
			"past": "bred",
			"gerund": "breeding",
			"participle": "bred",
			"doer": "breeder"
		}, {
			"infinitive": "bring",
			"present": "brings",
			"past": "brought",
			"gerund": "bringing",
			"participle": "brought",
			"doer": "bringer"
		}, {
			"infinitive": "broadcast",
			"present": "broadcasts",
			"past": "broadcast",
			"gerund": "broadcasting",
			"participle": "broadcast",
			"doer": "broadcaster"
		}, {
			"infinitive": "build",
			"present": "builds",
			"past": "built",
			"gerund": "building",
			"participle": "built",
			"doer": "builder"
		}, {
			"infinitive": "buy",
			"present": "buys",
			"past": "bought",
			"gerund": "buying",
			"participle": "bought",
			"doer": "buyer"
		}, {
			"present": "catches",
			"gerund": "catching",
			"past": "caught",
			"infinitive": "catch",
			"participle": "caught",
			"doer": "catcher"
		}, {
			"infinitive": "choose",
			"present": "chooses",
			"past": "chose",
			"gerund": "choosing",
			"participle": "chosen",
			"doer": "chooser"
		}, {
			"present": "comes",
			"gerund": "coming",
			"past": "came",
			"infinitive": "come",
			"participle": "come",
			"doer": "comer"
		}, {
			"infinitive": "cost",
			"present": "costs",
			"past": "cost",
			"gerund": "costing",
			"participle": "cost",
			"doer": "coster"
		}, {
			"infinitive": "cut",
			"present": "cuts",
			"past": "cut",
			"gerund": "cutting",
			"participle": "cut",
			"doer": "cutter"
		}, {
			"infinitive": "deal",
			"present": "deals",
			"past": "dealt",
			"gerund": "dealing",
			"participle": "dealt",
			"doer": "dealer"
		}, {
			"infinitive": "dig",
			"present": "digs",
			"past": "dug",
			"gerund": "digging",
			"participle": "dug",
			"doer": "digger"
		}, {
			"infinitive": "do",
			"present": "does",
			"past": "did",
			"gerund": "doing",
			"participle": "done",
			"doer": "doer"
		}, {
			"infinitive": "draw",
			"present": "draws",
			"past": "drew",
			"gerund": "drawing",
			"participle": "drawn",
			"doer": "drawer"
		}, {
			"infinitive": "drink",
			"present": "drinks",
			"past": "drank",
			"gerund": "drinking",
			"participle": "drunk",
			"doer": "drinker"
		}, {
			"infinitive": "drive",
			"present": "drives",
			"past": "drove",
			"gerund": "driving",
			"participle": "driven",
			"doer": "driver"
		}, {
			"infinitive": "eat",
			"present": "eats",
			"past": "ate",
			"gerund": "eating",
			"participle": "eaten",
			"doer": "eater"
		}, {
			"infinitive": "fall",
			"present": "falls",
			"past": "fell",
			"gerund": "falling",
			"participle": "fallen",
			"doer": "faller"
		}, {
			"infinitive": "feed",
			"present": "feeds",
			"past": "fed",
			"gerund": "feeding",
			"participle": "fed",
			"doer": "feeder"
		}, {
			"infinitive": "feel",
			"present": "feels",
			"past": "felt",
			"gerund": "feeling",
			"participle": "felt",
			"doer": "feeler"
		}, {
			"infinitive": "fight",
			"present": "fights",
			"past": "fought",
			"gerund": "fighting",
			"participle": "fought",
			"doer": "fighter"
		}, {
			"infinitive": "find",
			"present": "finds",
			"past": "found",
			"gerund": "finding",
			"participle": "found",
			"doer": "finder"
		}, {
			"infinitive": "fly",
			"present": "flys",
			"past": "flew",
			"gerund": "flying",
			"participle": "flown",
			"doer": "flier"
		}, {
			"infinitive": "forbid",
			"present": "forbids",
			"past": "forbade",
			"gerund": "forbiding",
			"participle": "forbidden",
			"doer": null
		}, {
			"infinitive": "forget",
			"present": "forgets",
			"past": "forgot",
			"gerund": "forgeting",
			"participle": "forgotten",
			"doer": "forgeter"
		}, {
			"infinitive": "forgive",
			"present": "forgives",
			"past": "forgave",
			"gerund": "forgiving",
			"participle": "forgiven",
			"doer": "forgiver"
		}, {
			"infinitive": "freeze",
			"present": "freezes",
			"past": "froze",
			"gerund": "freezing",
			"participle": "frozen",
			"doer": "freezer"
		}, {
			"infinitive": "get",
			"present": "gets",
			"past": "got",
			"gerund": "getting",
			"participle": "gotten",
			"doer": "getter"
		}, {
			"infinitive": "give",
			"present": "gives",
			"past": "gave",
			"gerund": "giving",
			"participle": "given",
			"doer": "giver"
		}, {
			"infinitive": "go",
			"present": "goes",
			"gerund": "going",
			"past": "went",
			"participle": "gone",
			"doer": "goer"
		}, {
			"infinitive": "grow",
			"present": "grows",
			"past": "grew",
			"gerund": "growing",
			"participle": "grown",
			"doer": "grower"
		}, {
			"infinitive": "hang",
			"present": "hangs",
			"past": "hung",
			"gerund": "hanging",
			"participle": "hung",
			"doer": "hanger"
		}, {
			"infinitive": "have",
			"present": "has",
			"past": "had",
			"gerund": "having",
			"participle": "had",
			"doer": null
		}, {
			"infinitive": "hear",
			"present": "hears",
			"past": "heard",
			"gerund": "hearing",
			"participle": "heard",
			"doer": "hearer"
		}, {
			"infinitive": "hide",
			"present": "hides",
			"past": "hid",
			"gerund": "hiding",
			"participle": "hidden",
			"doer": "hider"
		}, {
			"infinitive": "hit",
			"present": "hits",
			"past": "hit",
			"gerund": "hitting",
			"participle": "hit",
			"doer": "hitter"
		}, {
			"infinitive": "hold",
			"present": "holds",
			"past": "held",
			"gerund": "holding",
			"participle": "held",
			"doer": "holder"
		}, {
			"infinitive": "hurt",
			"present": "hurts",
			"past": "hurt",
			"gerund": "hurting",
			"participle": "hurt",
			"doer": "hurter"
		}, {
			"infinitive": "know",
			"present": "knows",
			"past": "knew",
			"gerund": "knowing",
			"participle": "known",
			"doer": "knower"
		}, {
			"infinitive": "lay",
			"present": "lays",
			"past": "laid",
			"gerund": "laying",
			"participle": "laid",
			"doer": "layer"
		}, {
			"infinitive": "lead",
			"present": "leads",
			"past": "led",
			"gerund": "leading",
			"participle": "led",
			"doer": "leader"
		}, {
			"infinitive": "leave",
			"present": "leaves",
			"past": "left",
			"gerund": "leaving",
			"participle": "left",
			"doer": "leaver"
		}, {
			"present": "lends",
			"gerund": "lending",
			"past": "lent",
			"infinitive": "lend",
			"participle": "lent",
			"doer": "lender"
		}, {
			"infinitive": "let",
			"present": "lets",
			"past": "let",
			"gerund": "letting",
			"participle": "let",
			"doer": "letter"
		}, {
			"infinitive": "lie",
			"present": "lies",
			"past": "lay",
			"gerund": "lying",
			"participle": "lied",
			"doer": "lier"
		}, {
			"infinitive": "light",
			"present": "lights",
			"past": "lit",
			"gerund": "lighting",
			"participle": "lit",
			"doer": "lighter"
		}, {
			"infinitive": "lose",
			"present": "loses",
			"past": "lost",
			"gerund": "losing",
			"participle": "lost",
			"doer": "loser"
		}, {
			"infinitive": "make",
			"present": "makes",
			"past": "made",
			"gerund": "making",
			"participle": "made",
			"doer": "maker"
		}, {
			"infinitive": "mean",
			"present": "means",
			"past": "meant",
			"gerund": "meaning",
			"participle": "meant",
			"doer": "meaner"
		}, {
			"infinitive": "meet",
			"present": "meets",
			"past": "met",
			"gerund": "meeting",
			"participle": "met",
			"doer": "meeter"
		}, {
			"infinitive": "pay",
			"present": "pays",
			"past": "paid",
			"gerund": "paying",
			"participle": "paid",
			"doer": "payer"
		}, {
			"infinitive": "put",
			"present": "puts",
			"past": "put",
			"gerund": "putting",
			"participle": "put",
			"doer": "putter"
		}, {
			"infinitive": "quit",
			"present": "quits",
			"past": "quit",
			"gerund": "quitting",
			"participle": "quit",
			"doer": "quitter"
		}, {
			"infinitive": "read",
			"present": "reads",
			"past": "read",
			"gerund": "reading",
			"participle": "read",
			"doer": "reader"
		}, {
			"infinitive": "ride",
			"present": "rides",
			"past": "rode",
			"gerund": "riding",
			"participle": "ridden",
			"doer": "rider"
		}, {
			"infinitive": "ring",
			"present": "rings",
			"past": "rang",
			"gerund": "ringing",
			"participle": "rung",
			"doer": "ringer"
		}, {
			"present": "rises",
			"gerund": "rising",
			"past": "rose",
			"infinitive": "rise",
			"participle": "risen",
			"doer": "riser"
		}, {
			"infinitive": "run",
			"present": "runs",
			"past": "ran",
			"gerund": "running",
			"participle": "run",
			"doer": "runner"
		}, {
			"infinitive": "say",
			"present": "says",
			"past": "said",
			"gerund": "saying",
			"participle": "said",
			"doer": null
		}, {
			"infinitive": "see",
			"present": "sees",
			"past": "saw",
			"gerund": "seeing",
			"participle": "seen",
			"doer": "seer"
		}, {
			"infinitive": "sell",
			"present": "sells",
			"past": "sold",
			"gerund": "selling",
			"participle": "sold",
			"doer": "seller"
		}, {
			"present": "sends",
			"gerund": "sending",
			"past": "sent",
			"infinitive": "send",
			"participle": "sent",
			"doer": "sender"
		}, {
			"infinitive": "set",
			"present": "sets",
			"past": "set",
			"gerund": "setting",
			"participle": "set",
			"doer": "setter"
		}, {
			"infinitive": "shake",
			"present": "shakes",
			"past": "shook",
			"gerund": "shaking",
			"participle": "shaken",
			"doer": "shaker"
		}, {
			"infinitive": "shine",
			"present": "shines",
			"past": "shone",
			"gerund": "shining",
			"participle": "shone",
			"doer": "shiner"
		}, {
			"infinitive": "shoot",
			"present": "shoots",
			"past": "shot",
			"gerund": "shooting",
			"participle": "shot",
			"doer": "shooter"
		}, {
			"infinitive": "show",
			"present": "shows",
			"past": "showed",
			"gerund": "showing",
			"participle": "shown",
			"doer": "shower"
		}, {
			"infinitive": "shut",
			"present": "shuts",
			"past": "shut",
			"gerund": "shutting",
			"participle": "shut",
			"doer": "shutter"
		}, {
			"infinitive": "sing",
			"present": "sings",
			"past": "sang",
			"gerund": "singing",
			"participle": "sung",
			"doer": "singer"
		}, {
			"infinitive": "sink",
			"present": "sinks",
			"past": "sank",
			"gerund": "sinking",
			"participle": "sunk",
			"doer": "sinker"
		}, {
			"infinitive": "sit",
			"present": "sits",
			"past": "sat",
			"gerund": "sitting",
			"participle": "sat",
			"doer": "sitter"
		}, {
			"infinitive": "slide",
			"present": "slides",
			"past": "slid",
			"gerund": "sliding",
			"participle": "slid",
			"doer": "slider"
		}, {
			"infinitive": "speak",
			"present": "speaks",
			"past": "spoke",
			"gerund": "speaking",
			"participle": "spoken",
			"doer": "speaker"
		}, {
			"present": "spends",
			"gerund": "spending",
			"past": "spent",
			"infinitive": "spend",
			"participle": "spent",
			"doer": "spender"
		}, {
			"infinitive": "spin",
			"present": "spins",
			"past": "spun",
			"gerund": "spinning",
			"participle": "spun",
			"doer": "spinner"
		}, {
			"infinitive": "spread",
			"present": "spreads",
			"past": "spread",
			"gerund": "spreading",
			"participle": "spread",
			"doer": "spreader"
		}, {
			"infinitive": "stand",
			"present": "stands",
			"past": "stood",
			"gerund": "standing",
			"participle": "stood",
			"doer": "stander"
		}, {
			"infinitive": "steal",
			"present": "steals",
			"past": "stole",
			"gerund": "stealing",
			"participle": "stolen",
			"doer": "stealer"
		}, {
			"infinitive": "stick",
			"present": "sticks",
			"past": "stuck",
			"gerund": "sticking",
			"participle": "stuck",
			"doer": "sticker"
		}, {
			"infinitive": "sting",
			"present": "stings",
			"past": "stung",
			"gerund": "stinging",
			"participle": "stung",
			"doer": "stinger"
		}, {
			"infinitive": "strike",
			"present": "strikes",
			"past": "struck",
			"gerund": "striking",
			"participle": "struck",
			"doer": "striker"
		}, {
			"infinitive": "swear",
			"present": "swears",
			"past": "swore",
			"gerund": "swearing",
			"participle": "sworn",
			"doer": "swearer"
		}, {
			"infinitive": "swim",
			"present": "swims",
			"past": "swam",
			"gerund": "swiming",
			"participle": "swum",
			"doer": "swimmer"
		}, {
			"infinitive": "swing",
			"present": "swings",
			"past": "swung",
			"gerund": "swinging",
			"participle": "swung",
			"doer": "swinger"
		}, {
			"infinitive": "take",
			"present": "takes",
			"past": "took",
			"gerund": "taking",
			"participle": "taken",
			"doer": "taker"
		}, {
			"infinitive": "teach",
			"present": "teachs",
			"past": "taught",
			"gerund": "teaching",
			"participle": "taught",
			"doer": "teacher"
		}, {
			"infinitive": "tear",
			"present": "tears",
			"past": "tore",
			"gerund": "tearing",
			"participle": "torn",
			"doer": "tearer"
		}, {
			"infinitive": "tell",
			"present": "tells",
			"past": "told",
			"gerund": "telling",
			"participle": "told",
			"doer": "teller"
		}, {
			"infinitive": "think",
			"present": "thinks",
			"past": "thought",
			"gerund": "thinking",
			"participle": "thought",
			"doer": "thinker"
		}, {
			"infinitive": "throw",
			"present": "throws",
			"past": "threw",
			"gerund": "throwing",
			"participle": "thrown",
			"doer": "thrower"
		}, {
			"infinitive": "understand",
			"present": "understands",
			"past": "understood",
			"gerund": "understanding",
			"participle": "understood",
			"doer": null
		}, {
			"infinitive": "wake",
			"present": "wakes",
			"past": "woke",
			"gerund": "waking",
			"participle": "woken",
			"doer": "waker"
		}, {
			"infinitive": "wear",
			"present": "wears",
			"past": "wore",
			"gerund": "wearing",
			"participle": "worn",
			"doer": "wearer"
		}, {
			"present": "wins",
			"gerund": "winning",
			"past": "won",
			"infinitive": "win",
			"participle": "won",
			"doer": "winner"
		}, {
			"infinitive": "withdraw",
			"present": "withdraws",
			"past": "withdrew",
			"gerund": "withdrawing",
			"participle": "withdrawn",
			"doer": "withdrawer"
		}, {
			"present": "writes",
			"gerund": "writing",
			"past": "wrote",
			"infinitive": "write",
			"participle": "written",
			"doer": "writer"
		}, {
			"infinitive": "tie",
			"present": "ties",
			"past": "tied",
			"gerund": "tying",
			"doer": "tier"
		}, {
			"infinitive": "obey",
			"present": "obeys",
			"past": "obeyed",
			"gerund": "obeying",
			"doer": "obeyer"
		}, {
			"infinitive": "ski",
			"present": "skis",
			"past": "skiied",
			"gerund": "skiing",
			"doer": "skier"
		}, {
			"infinitive": "boil",
			"present": "boils",
			"past": "boiled",
			"gerund": "boiling",
			"doer": "boiler"
		}, {
			"infinitive": "feed",
			"present": "feeds",
			"past": "fed",
			"gerund": "feeding",
			"doer": "feeder"
		},
    {
			"infinitive": "miss",
			"present": "miss",
			"past": "missed",
			"gerund": "missing",
			"doer": "misser"
		},
    {
			"infinitive": "act",
			"present": "acts",
			"past": "acted",
			"gerund": "acting",
			"doer": "actor"
		},
		{ present: 'competes',
		  gerund: 'competing',
		  past: 'competed',
		  infinitive: 'compete',
		  doer: 'competitor' },

		{ present: 'are',
		  gerund: 'are',
		  past: 'were',
		  infinitive: 'being',
		  doer: '' },

	  { infinitive: 'imply',
		  present: 'implies',
		  past: 'implied',
		  gerund: 'implying',
		  doer: 'implier' },

	]


	if (typeof module !== "undefined" && module.exports) {
		module.exports = main;
	}
	return main;
})();