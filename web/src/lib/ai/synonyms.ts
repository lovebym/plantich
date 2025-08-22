// CONDITION aliases - comprehensive mapping
export const CONDITION_ALIASES: Record<string,string> = {
  // anxiety block
  "anxiety":"anxiety","stress":"anxiety","panic":"anxiety","worry":"anxiety","nervous":"anxiety","nervousness":"anxiety","social-anxiety":"anxiety","panic-attacks":"anxiety",
  
  // sleep block
  "sleep":"sleep","insomnia":"sleep","restless":"sleep","cant sleep":"sleep","sleep latency":"sleep","sleep-support":"sleep","sleep-quality":"sleep","restless-sleep":"sleep","sleep-apnea":"sleep","recovery-sleep":"sleep",
  
  // digestion block
  "digestion":"digestion","ibs":"digestion","bloating":"digestion","gas":"digestion","stomach pain":"digestion","indigestion":"digestion","acid reflux":"digestion","gut-health":"digestion","stomach-pain":"digestion","nausea":"digestion","gastritis":"digestion","ulcer-support":"digestion","leaky-gut":"digestion","food-intolerance":"digestion","digestive-enzymes":"digestion","microbiome-support":"digestion",
  
  // energy block
  "energy":"energy","fatigue":"energy","tired":"energy","exhausted":"energy","burnout":"energy","low-energy":"energy","energy-boost":"energy","afternoon-slump":"energy","morning-fatigue":"energy","post-exercise-fatigue":"energy","recovery-support":"energy","low-stamina":"energy","physical-exhaustion":"energy","lethargy":"energy","weakness":"energy","burnout":"energy","adrenal-fatigue":"energy","chronic-fatigue":"energy","mental-fatigue":"energy",
  
  // focus block
  "focus":"focus","adhd":"focus","concentration":"focus","brain fog":"focus","attention":"focus","focus-concentration":"focus","brain-fog":"focus","memory-issues":"focus","mental-clarity":"focus","cognitive-decline":"focus",
  
  // inflammation & pain
  "inflammation":"inflammation","inflammatory-conditions":"inflammation","chronic-pain":"inflammation","muscle-pain":"inflammation","joint-pain":"inflammation","arthritis":"inflammation","back-pain":"inflammation","neck-pain":"inflammation","muscle-cramps":"inflammation","fibromyalgia":"inflammation",
  
  // immune system
  "immune":"immune-support","immune-boost":"immune-support","immune-support":"immune-support","viral-infections":"immune-support","bacterial-infections":"immune-support","cold-prevention":"immune-support","flu-prevention":"immune-support","recovery-from-illness":"immune-support","seasonal-immunity":"immune-support",
  
  // heart & circulation
  "heart":"heart-health","heart-health":"heart-health","cardiovascular-support":"heart-health","circulation":"circulation","high-blood-pressure":"high-blood-pressure","high-cholesterol":"high-cholesterol",
  
  // hormones & endocrine
  "hormone":"hormone-balance","hormone-balance":"hormone-balance","endocrine-health":"endocrine-health","thyroid-support":"thyroid-support","adrenal-support":"adrenal-support","estrogen-balance":"estrogen-balance","testosterone-support":"testosterone-support","pms":"pms","menopause-symptoms":"menopause-symptoms","pcos":"pcos","fertility-support":"fertility-support",
  
  // diabetes & metabolism
  "diabetes":"diabetes","diabetes-support":"diabetes","blood-sugar-balance":"blood-sugar-balance","metabolic-health":"metabolic-health",
  
  // skin health
  "skin":"skin-health","skin-health":"skin-health","skin-inflammation":"skin-inflammation","skin-aging":"skin-aging","acne":"acne","eczema":"eczema","psoriasis":"psoriasis",
  
  // respiratory
  "respiratory":"respiratory-support","respiratory-support":"respiratory-support","sinus-issues":"sinus-issues","sore-throat":"sore-throat","asthma":"asthma","cough":"cough",
  
  // detox & cleansing
  "detox":"detox","cleansing-support":"cleansing-support","toxin-removal":"toxin-removal","liver-detox":"liver-detox","kidney-health":"kidney-health",
  
  // weight & metabolism
  "weight":"weight-loss-support","weight-loss-support":"weight-loss-support","obesity":"obesity",
  
  // sexual health
  "libido":"low-libido","low-libido":"low-libido","erectile-dysfunction":"erectile-dysfunction",
  
  // mental health
  "depression":"depression","seasonal-depression":"seasonal-depression","bipolar-disorder":"bipolar-disorder","ptsd":"ptsd","ocd":"ocd","emotional-balance":"emotional-balance","mood-swings":"mood-swings",
  
  // aging & vitality
  "aging":"anti-aging","anti-aging":"anti-aging","vitality-support":"vitality-support",
  
  // eye & hearing
  "eye":"eye-health","eye-health":"eye-health","hearing-loss":"hearing-loss",
  
  // autoimmune
  "autoimmune":"autoimmune-support","autoimmune-support":"autoimmune-support"
};

// PLANT aliases -> canonical slugs - comprehensive mapping
export const PLANT_ALIASES: Record<string,string> = {
  // Adaptogens
  "ashwagandha":"ashwagandha","withania":"ashwagandha","withania somnifera":"ashwagandha",
  "rhodiola":"rhodiola","rhodiola rosea":"rhodiola","roseroot":"rhodiola",
  "eleuthero":"eleuthero","eleutherococcus":"eleuthero","siberian ginseng":"eleuthero",
  "ginseng":"ginseng","panax ginseng":"ginseng","korean ginseng":"ginseng",
  "schisandra":"schisandra","schisandra chinensis":"schisandra","five flavor berry":"schisandra",
  "tulsi":"tulsi","holy basil":"tulsi","ocimum sanctum":"tulsi","holy-basil":"tulsi",
  "astragalus":"astragalus","astragalus membranaceus":"astragalus","milk vetch":"astragalus",
  "maca":"maca","lepidium meyenii":"maca","peruvian ginseng":"maca",
  
  // Nervines & Calming
  "lemon balm":"lemon-balm","melissa":"lemon-balm","melissa officinalis":"lemon-balm","lemon-balm":"lemon-balm",
  "chamomile":"chamomile","matricaria":"chamomile","matricaria chamomilla":"chamomile","german chamomile":"chamomile",
  "passionflower":"passionflower","passiflora":"passionflower","passiflora incarnata":"passionflower",
  "lavender":"lavender","lavandula":"lavender","lavandula angustifolia":"lavender",
  "valerian":"valerian-root","valerian root":"valerian-root","valeriana officinalis":"valerian-root","valerian-root":"valerian-root",
  "skullcap":"skullcap","scutellaria":"skullcap","scutellaria lateriflora":"skullcap",
  "hops":"hops","humulus lupulus":"hops",
  "kava":"kava-kava","kava kava":"kava-kava","piper methysticum":"kava-kava","kava-kava":"kava-kava",
  "california poppy":"california-poppy","eschescholzia californica":"california-poppy","california-poppy":"california-poppy",
  "blue vervain":"blue-vervain","verbena hastata":"blue-vervain","blue-vervain":"blue-vervain",
  "motherwort":"motherwort","leonurus cardiaca":"motherwort",
  
  // Anti-inflammatory & Pain
  "turmeric":"turmeric","curcumin":"turmeric","curcuma longa":"turmeric",
  "ginger":"ginger","zingiber officinale":"ginger",
  "boswellia":"boswellia","boswellia serrata":"boswellia","frankincense":"boswellia",
  "white willow":"white-willow","salix alba":"white-willow","white-willow":"white-willow",
  "willow bark":"willow-bark","salix":"willow-bark","willow-bark":"willow-bark",
  "devil's claw":"devil-s-claw","harpagophytum":"devil-s-claw","devil-s-claw":"devil-s-claw",
  "arnica":"arnica","arnica montana":"arnica",
  "capsaicin":"capsaicin","chili":"capsaicin",
  "cayenne":"cayenne","capsicum":"cayenne","capsicum annuum":"cayenne",
  
  // Digestive
  "fennel":"fennel","foeniculum vulgare":"fennel",
  "peppermint":"peppermint","mentha piperita":"peppermint",
  "licorice":"licorice-root","licorice root":"licorice-root","glycyrrhiza glabra":"licorice-root","licorice-root":"licorice-root",
  "marshmallow":"marshmallow-root","marshmallow root":"marshmallow-root","althaea officinalis":"marshmallow-root","marshmallow-root":"marshmallow-root",
  "slippery elm":"slippery-elm","ulmus rubra":"slippery-elm","slippery-elm":"slippery-elm",
  "fenugreek":"fenugreek","trigonella foenum-graecum":"fenugreek",
  "cardamom":"cardamom","elettaria cardamomum":"cardamom",
  "cinnamon":"cinnamon","cinnamomum":"cinnamon","cinnamomum verum":"cinnamon",
  "clove":"clove","syzygium aromaticum":"clove","eugenia caryophyllata":"clove",
  "oregano":"oregano","origanum vulgare":"oregano",
  "thyme":"thyme","thymus vulgaris":"thyme",
  "rosemary":"rosemary","rosmarinus officinalis":"rosemary",
  "sage":"sage","salvia officinalis":"sage",
  
  // Immune & Antimicrobial
  "echinacea":"echinacea","echinacea purpurea":"echinacea","purple coneflower":"echinacea",
  "elderberry":"elderberry","sambucus":"elderberry","sambucus nigra":"elderberry",
  "garlic":"garlic","allium sativum":"garlic",
  "onion":"onion","allium cepa":"onion",
  "oregano":"oregano","origanum vulgare":"oregano",
  "tea tree":"tea-tree","melaleuca alternifolia":"tea-tree","tea-tree":"tea-tree",
  
  // Liver & Detox
  "milk thistle":"milk-thistle","silybum marianum":"milk-thistle","milk-thistle":"milk-thistle",
  "dandelion":"dandelion-root","dandelion root":"dandelion-root","taraxacum officinale":"dandelion-root","dandelion-root":"dandelion-root",
  "burdock":"burdock-root","burdock root":"burdock-root","arctium lappa":"burdock-root","burdock-root":"burdock-root",
  "yellow dock":"yellow-dock","rumex crispus":"yellow-dock","yellow-dock":"yellow-dock",
  "nettle":"nettle","urtica dioica":"nettle","stinging nettle":"nettle",
  
  // Cardiovascular
  "hawthorn":"hawthorn","crataegus":"hawthorn","crataegus monogyna":"hawthorn",
  "bilberry":"bilberry","vaccinium myrtillus":"bilberry","european blueberry":"bilberry",
  
  // Cognitive & Nootropic
  "ginkgo":"ginkgo-biloba","ginkgo biloba":"ginkgo-biloba","ginkgo-biloba":"ginkgo-biloba",
  "bacopa":"bacopa","bacopa monnieri":"bacopa","brahmi":"bacopa",
  "lion's mane":"lions-mane","lion mane":"lions-mane","hericium erinaceus":"lions-mane","lions-mane":"lions-mane",
  "gotu kola":"gotu-kola","centella asiatica":"gotu-kola","gotu-kola":"gotu-kola",
  
  // Mushrooms
  "reishi":"reishi","ganoderma lucidum":"reishi","lingzhi":"reishi",
  "chaga":"chaga","inonotus obliquus":"chaga",
  "cordyceps":"cordyceps","cordyceps sinensis":"cordyceps",
  
  // Hormonal & Reproductive
  "chasteberry":"chasteberry","vitex":"chasteberry","vitex agnus-castus":"chasteberry",
  "black cohosh":"black-cohosh","actaea racemosa":"black-cohosh","black-cohosh":"black-cohosh",
  "dong quai":"dong-quai","angelica sinensis":"dong-quai","dong-quai":"dong-quai",
  "wild yam":"wild-yam","dioscorea villosa":"wild-yam","wild-yam":"wild-yam",
  "shatavari":"shatavari","asparagus racemosus":"shatavari",
  "tribulus":"tribulus","tribulus terrestris":"tribulus",
  "saw palmetto":"saw-palmetto","serenoa repens":"saw-palmetto","saw-palmetto":"saw-palmetto",
  
  // Energy & Stimulants
  "guarana":"guarana","paullinia cupana":"guarana",
  "yerba mate":"yerba-mate","ilex paraguariensis":"yerba-mate","yerba-mate":"yerba-mate",
  "coffee":"coffee","coffea":"coffee","coffea arabica":"coffee",
  "green tea":"green-tea","camellia sinensis":"green-tea","green-tea":"green-tea",
  
  // Skin & Topical
  "aloe":"aloe-vera","aloe vera":"aloe-vera","aloe barbadensis":"aloe-vera","aloe-vera":"aloe-vera",
  "calendula":"calendula","calendula officinalis":"calendula","marigold":"calendula",
  "rosehip":"rosehip","rosa canina":"rosehip","rose hip":"rosehip",
  "jojoba":"jojoba","simmondsia chinensis":"jojoba",
  "shea butter":"shea-butter","vitellaria paradoxa":"shea-butter","shea-butter":"shea-butter",
  
  // Superfoods & Nutrients
  "spirulina":"spirulina","arthrospira":"spirulina","arthrospira platensis":"spirulina",
  "chlorella":"chlorella","chlorella vulgaris":"chlorella",
  "moringa":"moringa","moringa oleifera":"moringa","drumstick tree":"moringa",
  "sea moss":"sea-moss","chondrus crispus":"sea-moss","irish moss":"sea-moss","sea-moss":"sea-moss",
  "cacao":"cacao","theobroma cacao":"cacao","raw chocolate":"cacao",
  "black seed":"black-seed","nigella sativa":"black-seed","black cumin":"black-seed","black-seed":"black-seed",
  
  // Ayurvedic & Traditional
  "triphala":"triphala","three fruits":"triphala",
  "cilantro":"cilantro","coriandrum sativum":"cilantro","coriander":"cilantro",
  
  // Mental Health
  "st john's wort":"st-johns-wort","st johns wort":"st-johns-wort","hypericum perforatum":"st-johns-wort","st-johns-wort":"st-johns-wort",
  
  // Other
  "alfalfa":"alfalfa","medicago sativa":"alfalfa",
  "red clover":"red-clover","trifolium pratense":"red-clover","red-clover":"red-clover"
};
