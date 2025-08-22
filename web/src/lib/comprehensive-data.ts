// Comprehensive database of most searched plants and symptoms on Google
// Organized by categories for optimal user experience

export const comprehensivePlants = [
  // MIND & STRESS (25 plants)
  {
    slug: 'ashwagandha',
    title: 'Ashwagandha',
    latinName: 'Withania somnifera',
    description: 'Powerful adaptogenic herb from Ayurvedic tradition for stress, anxiety, and energy.',
    uses: ['Stress', 'Anxiety', 'Insomnia', 'Fatigue', 'Low Energy', 'Cortisol Balance'],
    category: 'Mind',
    dosage: '300-600mg daily standardized extract',
    tags: ['adaptogen', 'ayurvedic', 'stress-relief']
  },
  {
    slug: 'rhodiola',
    title: 'Rhodiola',
    latinName: 'Rhodiola rosea',
    description: 'Adaptogenic herb that helps the body adapt to stress and improves performance.',
    uses: ['Fatigue', 'Stress', 'Focus', 'Energy', 'Depression', 'Physical Performance'],
    category: 'Mind',
    dosage: '200-600mg daily standardized extract',
    tags: ['adaptogen', 'energy', 'focus']
  },
  {
    slug: 'chamomile',
    title: 'Chamomile',
    latinName: 'Matricaria chamomilla',
    description: 'Gentle calming herb for relaxation, sleep, and digestive support.',
    uses: ['Anxiety', 'Insomnia', 'Digestion', 'Skin Irritation', 'Stress', 'Sleep Quality'],
    category: 'Mind',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'sleep', 'digestive']
  },
  {
    slug: 'lavender',
    title: 'Lavender',
    latinName: 'Lavandula angustifolia',
    description: 'Aromatic herb with calming properties for stress relief and sleep support.',
    uses: ['Anxiety', 'Insomnia', 'Stress', 'Skin Health', 'Headaches', 'Relaxation'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Essential oil: 2-4 drops',
    tags: ['aromatic', 'calming', 'sleep']
  },
  {
    slug: 'passionflower',
    title: 'Passionflower',
    latinName: 'Passiflora incarnata',
    description: 'Calming herb for anxiety, insomnia, and nervous tension.',
    uses: ['Anxiety', 'Insomnia', 'Nervousness', 'Stress', 'Sleep Disorders', 'Restlessness'],
    category: 'Mind',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'sleep', 'anxiety']
  },
  {
    slug: 'valerian-root',
    title: 'Valerian Root',
    latinName: 'Valeriana officinalis',
    description: 'Powerful sleep-inducing herb for insomnia and anxiety.',
    uses: ['Insomnia', 'Anxiety', 'Sleep Quality', 'Restlessness', 'Sleep Disorders'],
    category: 'Mind',
    dosage: '300-600mg extract 30-60 minutes before bed',
    tags: ['sleep', 'sedative', 'calming']
  },
  {
    slug: 'lemon-balm',
    title: 'Lemon Balm',
    latinName: 'Melissa officinalis',
    description: 'Gentle calming herb with lemon scent for stress relief and digestive support.',
    uses: ['Anxiety', 'Stress', 'Digestion', 'Sleep', 'Nervousness', 'Mood Support'],
    category: 'Mind',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'digestive', 'aromatic']
  },
  {
    slug: 'st-johns-wort',
    title: 'St. John\'s Wort',
    latinName: 'Hypericum perforatum',
    description: 'Traditional herb for mild to moderate depression and mood support.',
    uses: ['Depression', 'Mood Support', 'Anxiety', 'Seasonal Affective Disorder', 'Nerve Pain'],
    category: 'Mind',
    dosage: '300-900mg daily standardized extract',
    tags: ['mood', 'depression', 'nervous-system']
  },
  {
    slug: 'ginkgo-biloba',
    title: 'Ginkgo Biloba',
    latinName: 'Ginkgo biloba',
    description: 'Ancient tree extract for cognitive function and memory support.',
    uses: ['Memory', 'Focus', 'Cognitive Function', 'Dementia', 'Tinnitus', 'Circulation'],
    category: 'Mind',
    dosage: '120-240mg daily standardized extract',
    tags: ['cognitive', 'memory', 'circulation']
  },
  {
    slug: 'bacopa',
    title: 'Bacopa',
    latinName: 'Bacopa monnieri',
    description: 'Ayurvedic herb for cognitive enhancement and memory improvement.',
    uses: ['Memory', 'Focus', 'Cognitive Function', 'Learning', 'Stress', 'Anxiety'],
    category: 'Mind',
    dosage: '300-600mg daily standardized extract',
    tags: ['nootropic', 'memory', 'cognitive']
  },
  {
    slug: 'lion-s-mane',
    title: 'Lion\'s Mane',
    latinName: 'Hericium erinaceus',
    description: 'Medicinal mushroom for cognitive function and nerve regeneration.',
    uses: ['Memory', 'Focus', 'Cognitive Function', 'Nerve Health', 'Anxiety', 'Depression'],
    category: 'Mind',
    dosage: '500-1000mg daily extract',
    tags: ['mushroom', 'nootropic', 'cognitive']
  },
  {
    slug: 'gotu-kola',
    title: 'Gotu Kola',
    latinName: 'Centella asiatica',
    description: 'Ayurvedic herb for cognitive function and skin health.',
    uses: ['Memory', 'Focus', 'Skin Health', 'Wound Healing', 'Anxiety', 'Circulation'],
    category: 'Mind',
    dosage: '500-1000mg daily standardized extract',
    tags: ['cognitive', 'skin', 'circulation']
  },
  {
    slug: 'saffron',
    title: 'Saffron',
    latinName: 'Crocus sativus',
    description: 'Precious spice with mood-enhancing and antidepressant properties.',
    uses: ['Depression', 'Mood Support', 'Anxiety', 'PMS', 'Libido', 'Memory'],
    category: 'Mind',
    dosage: '30-60mg daily standardized extract',
    tags: ['mood', 'antidepressant', 'spice']
  },
  {
    slug: 'kava-kava',
    title: 'Kava Kava',
    latinName: 'Piper methysticum',
    description: 'Traditional Pacific herb for anxiety relief and relaxation.',
    uses: ['Anxiety', 'Stress', 'Insomnia', 'Muscle Tension', 'Social Anxiety'],
    category: 'Mind',
    dosage: '100-300mg daily standardized extract',
    tags: ['anxiety', 'relaxation', 'traditional']
  },
  {
    slug: 'california-poppy',
    title: 'California Poppy',
    latinName: 'Eschscholzia californica',
    description: 'Gentle sedative herb for sleep and anxiety relief.',
    uses: ['Insomnia', 'Anxiety', 'Sleep Quality', 'Pain', 'Restlessness'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['sedative', 'sleep', 'calming']
  },
  {
    slug: 'skullcap',
    title: 'Skullcap',
    latinName: 'Scutellaria lateriflora',
    description: 'Nervine herb for anxiety, insomnia, and nervous system support.',
    uses: ['Anxiety', 'Insomnia', 'Nervousness', 'Stress', 'Muscle Tension'],
    category: 'Mind',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['nervine', 'calming', 'anxiety']
  },
  {
    slug: 'blue-vervain',
    title: 'Blue Vervain',
    latinName: 'Verbena hastata',
    description: 'Nervine herb for anxiety, depression, and nervous system balance.',
    uses: ['Anxiety', 'Depression', 'Stress', 'Nervousness', 'Mood Support'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['nervine', 'mood', 'calming']
  },
  {
    slug: 'motherwort',
    title: 'Motherwort',
    latinName: 'Leonurus cardiaca',
    description: 'Cardiac and nervine herb for anxiety and heart health.',
    uses: ['Anxiety', 'Heart Health', 'PMS', 'Menopause', 'Stress', 'Palpitations'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['cardiac', 'nervine', 'women-health']
  },
  {
    slug: 'hops',
    title: 'Hops',
    latinName: 'Humulus lupulus',
    description: 'Sedative herb traditionally used for sleep and relaxation.',
    uses: ['Insomnia', 'Sleep Quality', 'Anxiety', 'Restlessness', 'Menopause'],
    category: 'Mind',
    dosage: 'Tea: 1 cup before bed, Tincture: 30-60 drops',
    tags: ['sedative', 'sleep', 'calming']
  },
  {
    slug: 'wild-lettuce',
    title: 'Wild Lettuce',
    latinName: 'Lactuca virosa',
    description: 'Natural sedative and pain reliever for sleep and relaxation.',
    uses: ['Insomnia', 'Pain', 'Anxiety', 'Restlessness', 'Sleep Disorders'],
    category: 'Mind',
    dosage: 'Tincture: 30-60 drops before bed',
    tags: ['sedative', 'pain-relief', 'sleep']
  },
  {
    slug: 'damiana',
    title: 'Damiana',
    latinName: 'Turnera diffusa',
    description: 'Aphrodisiac herb for libido and mood enhancement.',
    uses: ['Libido', 'Mood Support', 'Anxiety', 'Depression', 'Energy', 'Stress'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['aphrodisiac', 'mood', 'libido']
  },
  {
    slug: 'mugwort',
    title: 'Mugwort',
    latinName: 'Artemisia vulgaris',
    description: 'Traditional herb for dreams, sleep, and women\'s health.',
    uses: ['Dreams', 'Sleep', 'PMS', 'Menstrual Cramps', 'Digestion', 'Energy'],
    category: 'Mind',
    dosage: 'Tea: 1 cup before bed, Tincture: 30-60 drops',
    tags: ['dreams', 'sleep', 'women-health']
  },
  {
    slug: 'catnip',
    title: 'Catnip',
    latinName: 'Nepeta cataria',
    description: 'Gentle calming herb for anxiety and sleep support.',
    uses: ['Anxiety', 'Insomnia', 'Digestion', 'Stress', 'Sleep Quality'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['calming', 'sleep', 'digestive']
  },
  {
    slug: 'wood-betony',
    title: 'Wood Betony',
    latinName: 'Stachys officinalis',
    description: 'Nervine herb for headaches, anxiety, and nervous system support.',
    uses: ['Headaches', 'Anxiety', 'Stress', 'Nervousness', 'Memory', 'Focus'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['nervine', 'headaches', 'calming']
  },
  {
    slug: 'vervain',
    title: 'Vervain',
    latinName: 'Verbena officinalis',
    description: 'Sacred herb for anxiety, depression, and spiritual balance.',
    uses: ['Anxiety', 'Depression', 'Stress', 'Nervousness', 'Mood Support'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['sacred', 'mood', 'calming']
  },
  {
    slug: 'rosemary',
    title: 'Rosemary',
    latinName: 'Rosmarinus officinalis',
    description: 'Aromatic herb for memory, focus, and cognitive enhancement.',
    uses: ['Memory', 'Focus', 'Cognitive Function', 'Hair Growth', 'Circulation'],
    category: 'Mind',
    dosage: 'Tea: 1-2 cups daily, Essential oil: 2-4 drops',
    tags: ['cognitive', 'memory', 'aromatic']
  }
]

// Continue with more plants in next part...

// BODY & PHYSICAL HEALTH (25 plants)
export const bodyPlants = [
  {
    slug: 'turmeric',
    title: 'Turmeric',
    latinName: 'Curcuma longa',
    description: 'Anti-inflammatory spice with powerful healing properties.',
    uses: ['Inflammation', 'Pain', 'Digestion', 'Immunity', 'Joint Health', 'Skin Health'],
    category: 'Body',
    dosage: '500-1000mg daily curcumin extract',
    tags: ['anti-inflammatory', 'spice', 'healing']
  },
  {
    slug: 'ginger',
    title: 'Ginger',
    latinName: 'Zingiber officinale',
    description: 'Warming root with powerful anti-inflammatory and digestive properties.',
    uses: ['Nausea', 'Digestion', 'Inflammation', 'Pain', 'Motion Sickness', 'Morning Sickness'],
    category: 'Body',
    dosage: 'Fresh: 1-2 inches daily, Powder: 1-2g',
    tags: ['warming', 'digestive', 'anti-inflammatory']
  },
  {
    slug: 'garlic',
    title: 'Garlic',
    latinName: 'Allium sativum',
    description: 'Natural antibiotic and heart-healthy bulb with immune benefits.',
    uses: ['Immunity', 'Heart Health', 'Infection', 'Blood Pressure', 'Cholesterol', 'Cold Prevention'],
    category: 'Body',
    dosage: '2-4 cloves daily or 600-1200mg aged extract',
    tags: ['antibiotic', 'heart', 'immunity']
  },
  {
    slug: 'echinacea',
    title: 'Echinacea',
    latinName: 'Echinacea purpurea',
    description: 'Immune-boosting herb that helps prevent and shorten colds.',
    uses: ['Immunity', 'Cold Prevention', 'Infection', 'Recovery', 'Respiratory Health'],
    category: 'Body',
    dosage: '300-500mg 3 times daily at first sign of illness',
    tags: ['immune', 'cold', 'infection']
  },
  {
    slug: 'elderberry',
    title: 'Elderberry',
    latinName: 'Sambucus nigra',
    description: 'Antiviral berry that supports immune function and fights infections.',
    uses: ['Immunity', 'Cold & Flu', 'Infection', 'Respiratory Health', 'Fever'],
    category: 'Body',
    dosage: '300-600mg daily extract or 1-2 tbsp syrup',
    tags: ['antiviral', 'immune', 'respiratory']
  },
  {
    slug: 'oregano',
    title: 'Oregano',
    latinName: 'Origanum vulgare',
    description: 'Antimicrobial herb with powerful infection-fighting properties.',
    uses: ['Infection', 'Immunity', 'Digestion', 'Respiratory Health', 'Fungal Infections'],
    category: 'Body',
    dosage: 'Oil: 2-4 drops daily, Tea: 1-3 cups',
    tags: ['antimicrobial', 'infection', 'immunity']
  },
  {
    slug: 'thyme',
    title: 'Thyme',
    latinName: 'Thymus vulgaris',
    description: 'Antimicrobial herb for respiratory health and infection support.',
    uses: ['Respiratory Health', 'Infection', 'Cough', 'Immunity', 'Bronchitis'],
    category: 'Body',
    dosage: 'Tea: 1-3 cups daily, Essential oil: 2-4 drops',
    tags: ['respiratory', 'antimicrobial', 'cough']
  },
  {
    slug: 'sage',
    title: 'Sage',
    latinName: 'Salvia officinalis',
    description: 'Traditional herb for cognitive function and throat health.',
    uses: ['Memory', 'Focus', 'Sore Throat', 'Menopause', 'Digestion', 'Hot Flashes'],
    category: 'Body',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['cognitive', 'memory', 'throat']
  },
  {
    slug: 'peppermint',
    title: 'Peppermint',
    latinName: 'Mentha piperita',
    description: 'Cooling herb for digestive support and headache relief.',
    uses: ['Digestion', 'Nausea', 'Headaches', 'IBS', 'Gas', 'Bloating'],
    category: 'Body',
    dosage: 'Tea: 1-3 cups daily, Essential oil: 2-4 drops',
    tags: ['cooling', 'digestive', 'headaches']
  },
  {
    slug: 'fennel',
    title: 'Fennel',
    latinName: 'Foeniculum vulgare',
    description: 'Digestive herb that relieves gas and bloating.',
    uses: ['Digestion', 'Gas', 'Bloating', 'Colic', 'Menstrual Cramps', 'Breast Milk'],
    category: 'Body',
    dosage: 'Tea: 1-3 cups daily, Seeds: 1-2 tsp',
    tags: ['digestive', 'carminative', 'women-health']
  },
  {
    slug: 'slippery-elm',
    title: 'Slippery Elm',
    latinName: 'Ulmus rubra',
    description: 'Soothing herb for digestive and respiratory irritation.',
    uses: ['Digestion', 'Sore Throat', 'Cough', 'IBS', 'Ulcers', 'Inflammation'],
    category: 'Body',
    dosage: 'Powder: 1-2 tbsp in water, 3-4 times daily',
    tags: ['demulcent', 'soothing', 'digestive']
  },
  {
    slug: 'marshmallow-root',
    title: 'Marshmallow Root',
    latinName: 'Althaea officinalis',
    description: 'Soothing demulcent herb for irritated tissues.',
    uses: ['Sore Throat', 'Cough', 'Digestion', 'Skin Irritation', 'Urinary Tract'],
    category: 'Body',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['demulcent', 'soothing', 'respiratory']
  },
  {
    slug: 'licorice-root',
    title: 'Licorice Root',
    latinName: 'Glycyrrhiza glabra',
    description: 'Sweet herb for adrenal support and digestive health.',
    uses: ['Adrenal Fatigue', 'Digestion', 'Sore Throat', 'Cough', 'Hormone Balance'],
    category: 'Body',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['adrenal', 'digestive', 'hormone']
  },
  {
    slug: 'dandelion-root',
    title: 'Dandelion Root',
    latinName: 'Taraxacum officinale',
    description: 'Liver-supporting herb with diuretic properties.',
    uses: ['Liver Health', 'Digestion', 'Water Retention', 'Detox', 'Skin Health'],
    category: 'Body',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['liver', 'diuretic', 'detox']
  },
  {
    slug: 'burdock-root',
    title: 'Burdock Root',
    latinName: 'Arctium lappa',
    description: 'Blood-purifying herb for skin health and detoxification.',
    uses: ['Skin Health', 'Detox', 'Liver Health', 'Acne', 'Eczema', 'Psoriasis'],
    category: 'Body',
    dosage: 'Tea: 1-2 cups daily, Tincture: 30-60 drops',
    tags: ['blood-purifier', 'skin', 'detox']
  },
  {
    slug: 'yellow-dock',
    title: 'Yellow Dock',
    latinName: 'Rumex crispus',
    description: 'Iron-rich herb for anemia and digestive support.',
    uses: ['Anemia', 'Iron Deficiency', 'Digestion', 'Skin Health', 'Constipation'],
    category: 'Body',
    dosage: 'Tea: 1 cup daily, Tincture: 30-60 drops',
    tags: ['iron', 'anemia', 'digestive']
  },
  {
    slug: 'nettle',
    title: 'Nettle',
    latinName: 'Urtica dioica',
    description: 'Nutrient-rich herb for allergies and overall health.',
    uses: ['Allergies', 'Hay Fever', 'Nutrient Support', 'Prostate Health', 'Hair Growth'],
    category: 'Body',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['allergies', 'nutrients', 'prostate']
  },
  {
    slug: 'red-clover',
    title: 'Red Clover',
    latinName: 'Trifolium pratense',
    description: 'Phytoestrogen-rich herb for women\'s health and hormone balance.',
    uses: ['Menopause', 'Hormone Balance', 'Breast Health', 'Skin Health', 'Osteoporosis'],
    category: 'Body',
    dosage: 'Tea: 1-3 cups daily, Tincture: 30-60 drops',
    tags: ['phytoestrogen', 'women-health', 'hormone']
  },
  {
    slug: 'chasteberry',
    title: 'Chasteberry',
    latinName: 'Vitex agnus-castus',
    description: 'Hormone-balancing herb for women\'s reproductive health.',
    uses: ['PMS', 'Hormone Balance', 'Fertility', 'Menstrual Irregularities', 'Acne'],
    category: 'Body',
    dosage: '400-500mg daily standardized extract',
    tags: ['hormone', 'women-health', 'pms']
  },
  {
    slug: 'dong-quai',
    title: 'Dong Quai',
    latinName: 'Angelica sinensis',
    description: 'Traditional Chinese herb for women\'s health and blood circulation.',
    uses: ['Menstrual Cramps', 'Menopause', 'Blood Circulation', 'Anemia', 'Hormone Balance'],
    category: 'Body',
    dosage: '500-1000mg daily extract',
    tags: ['women-health', 'circulation', 'traditional']
  },
  {
    slug: 'black-cohosh',
    title: 'Black Cohosh',
    latinName: 'Actaea racemosa',
    description: 'Traditional herb for menopause symptoms and women\'s health.',
    uses: ['Menopause', 'Hot Flashes', 'Hormone Balance', 'Menstrual Cramps', 'Mood Support'],
    category: 'Body',
    dosage: '40-80mg daily standardized extract',
    tags: ['menopause', 'women-health', 'hormone']
  },
  {
    slug: 'saw-palmetto',
    title: 'Saw Palmetto',
    latinName: 'Serenoa repens',
    description: 'Prostate-supporting herb for men\'s urinary health.',
    uses: ['Prostate Health', 'Urinary Health', 'Hair Loss', 'Libido', 'Hormone Balance'],
    category: 'Body',
    dosage: '320mg daily standardized extract',
    tags: ['prostate', 'men-health', 'urinary']
  },
  {
    slug: 'tribulus',
    title: 'Tribulus',
    latinName: 'Tribulus terrestris',
    description: 'Testosterone-supporting herb for men\'s health and performance.',
    uses: ['Testosterone', 'Libido', 'Fertility', 'Athletic Performance', 'Energy'],
    category: 'Body',
    dosage: '500-1000mg daily extract',
    tags: ['testosterone', 'men-health', 'libido']
  },
  {
    slug: 'maca',
    title: 'Maca',
    latinName: 'Lepidium meyenii',
    description: 'Peruvian root known for hormone balance and energy enhancement.',
    uses: ['Hormone Balance', 'Energy', 'Libido', 'Fertility', 'Mood', 'Endurance'],
    category: 'Body',
    dosage: '1-3g daily powder or 500-1000mg extract',
    tags: ['hormone', 'energy', 'libido']
  },
  {
    slug: 'ginseng',
    title: 'Ginseng',
    latinName: 'Panax ginseng',
    description: 'Traditional energy-boosting root used for vitality and cognitive function.',
    uses: ['Energy', 'Focus', 'Immunity', 'Stress', 'Libido', 'Athletic Performance'],
    category: 'Body',
    dosage: '200-400mg daily standardized extract',
    tags: ['energy', 'traditional', 'cognitive']
  }
]

// Continue with more categories...

// IMMUNE & HEALING (25 plants)
export const immunePlants = [
  {
    slug: 'reishi',
    title: 'Reishi',
    latinName: 'Ganoderma lucidum',
    description: 'Medicinal mushroom known as the "mushroom of immortality".',
    uses: ['Immunity', 'Sleep', 'Stress', 'Liver Health', 'Anti-aging', 'Cancer Support'],
    category: 'Immune',
    dosage: '500-1000mg daily extract',
    tags: ['mushroom', 'immunity', 'sleep']
  },
  {
    slug: 'chaga',
    title: 'Chaga',
    latinName: 'Inonotus obliquus',
    description: 'Medicinal mushroom with powerful antioxidant properties.',
    uses: ['Immunity', 'Anti-aging', 'Energy', 'Digestion', 'Skin Health', 'Cancer Support'],
    category: 'Immune',
    dosage: '500-1000mg daily extract',
    tags: ['mushroom', 'antioxidant', 'immunity']
  },
  {
    slug: 'cordyceps',
    title: 'Cordyceps',
    latinName: 'Cordyceps sinensis',
    description: 'Medicinal mushroom that enhances energy and athletic performance.',
    uses: ['Energy', 'Athletic Performance', 'Immunity', 'Respiratory Health', 'Libido'],
    category: 'Immune',
    dosage: '500-1000mg daily extract',
    tags: ['mushroom', 'energy', 'performance']
  },
  {
    slug: 'shiitake',
    title: 'Shiitake',
    latinName: 'Lentinula edodes',
    description: 'Culinary and medicinal mushroom for immunity and heart health.',
    uses: ['Immunity', 'Heart Health', 'Cholesterol', 'Cancer Support', 'Energy'],
    category: 'Immune',
    dosage: 'Fresh: 3-5 mushrooms daily, Extract: 500-1000mg',
    tags: ['mushroom', 'immunity', 'heart']
  },
  {
    slug: 'maitake',
    title: 'Maitake',
    latinName: 'Grifola frondosa',
    description: 'Medicinal mushroom for immunity and blood sugar support.',
    uses: ['Immunity', 'Blood Sugar', 'Cancer Support', 'Energy', 'Weight Management'],
    category: 'Immune',
    dosage: '500-1000mg daily extract',
    tags: ['mushroom', 'immunity', 'blood-sugar']
  },
  {
    slug: 'turkey-tail',
    title: 'Turkey Tail',
    latinName: 'Trametes versicolor',
    description: 'Medicinal mushroom with powerful immune-modulating properties.',
    uses: ['Immunity', 'Cancer Support', 'Gut Health', 'Antioxidant', 'Energy'],
    category: 'Immune',
    dosage: '500-1000mg daily extract',
    tags: ['mushroom', 'immunity', 'cancer-support']
  },
  {
    slug: 'astragalus',
    title: 'Astragalus',
    latinName: 'Astragalus membranaceus',
    description: 'Traditional Chinese herb for immunity and energy support.',
    uses: ['Immunity', 'Energy', 'Heart Health', 'Anti-aging', 'Cancer Support'],
    category: 'Immune',
    dosage: '500-1000mg daily extract',
    tags: ['immunity', 'traditional', 'energy']
  },
  {
    slug: 'andrographis',
    title: 'Andrographis',
    latinName: 'Andrographis paniculata',
    description: 'Traditional herb for immune support and infection fighting.',
    uses: ['Immunity', 'Cold & Flu', 'Infection', 'Fever', 'Respiratory Health'],
    category: 'Immune',
    dosage: '400-600mg daily standardized extract',
    tags: ['immunity', 'infection', 'respiratory']
  },
  {
    slug: 'cat-s-claw',
    title: 'Cat\'s Claw',
    latinName: 'Uncaria tomentosa',
    description: 'Amazonian herb for immune support and inflammation.',
    uses: ['Immunity', 'Inflammation', 'Arthritis', 'Cancer Support', 'Digestion'],
    category: 'Immune',
    dosage: '500-1000mg daily extract',
    tags: ['immunity', 'inflammation', 'amazonian']
  },
  {
    slug: 'pau-d-arco',
    title: 'Pau D\'Arco',
    latinName: 'Tabebuia impetiginosa',
    description: 'Amazonian tree bark for immune support and infection fighting.',
    uses: ['Immunity', 'Infection', 'Fungal Infections', 'Cancer Support', 'Pain'],
    category: 'Immune',
    dosage: 'Tea: 1-3 cups daily, Extract: 500-1000mg',
    tags: ['immunity', 'infection', 'amazonian']
  },
  {
    slug: 'olive-leaf',
    title: 'Olive Leaf',
    latinName: 'Olea europaea',
    description: 'Mediterranean herb with powerful antimicrobial properties.',
    uses: ['Immunity', 'Infection', 'Blood Pressure', 'Antioxidant', 'Heart Health'],
    category: 'Immune',
    dosage: '500-1000mg daily extract',
    tags: ['immunity', 'infection', 'mediterranean']
  },
  {
    slug: 'grapefruit-seed',
    title: 'Grapefruit Seed Extract',
    latinName: 'Citrus paradisi',
    description: 'Natural antimicrobial extract for infection fighting.',
    uses: ['Infection', 'Fungal Infections', 'Parasites', 'Immunity', 'Digestion'],
    category: 'Immune',
    dosage: '10-20 drops in water, 2-3 times daily',
    tags: ['antimicrobial', 'infection', 'fungal']
  },
  {
    slug: 'colloidal-silver',
    title: 'Colloidal Silver',
    latinName: 'Silver nanoparticles',
    description: 'Natural antimicrobial agent for infection fighting.',
    uses: ['Infection', 'Antimicrobial', 'Skin Health', 'Eye Health', 'Wound Healing'],
    category: 'Immune',
    dosage: '5-10 drops, 2-3 times daily',
    tags: ['antimicrobial', 'infection', 'silver']
  },
  {
    slug: 'manuka-honey',
    title: 'Manuka Honey',
    latinName: 'Leptospermum scoparium',
    description: 'Medicinal honey with powerful antimicrobial properties.',
    uses: ['Infection', 'Wound Healing', 'Sore Throat', 'Digestion', 'Skin Health'],
    category: 'Immune',
    dosage: '1-2 tsp daily, or as needed',
    tags: ['honey', 'antimicrobial', 'wound-healing']
  },
  {
    slug: 'propolis',
    title: 'Propolis',
    latinName: 'Bee propolis',
    description: 'Bee product with powerful immune and antimicrobial properties.',
    uses: ['Immunity', 'Infection', 'Sore Throat', 'Dental Health', 'Skin Health'],
    category: 'Immune',
    dosage: '500-1000mg daily extract',
    tags: ['bee-product', 'immunity', 'infection']
  },
  {
    slug: 'bee-pollen',
    title: 'Bee Pollen',
    latinName: 'Bee pollen',
    description: 'Nutrient-rich bee product for energy and immunity.',
    uses: ['Energy', 'Immunity', 'Allergies', 'Nutrient Support', 'Athletic Performance'],
    category: 'Immune',
    dosage: '1-2 tsp daily',
    tags: ['bee-product', 'energy', 'nutrients']
  },
  {
    slug: 'royal-jelly',
    title: 'Royal Jelly',
    latinName: 'Bee royal jelly',
    description: 'Premium bee product for energy, immunity, and anti-aging.',
    uses: ['Energy', 'Immunity', 'Anti-aging', 'Hormone Balance', 'Skin Health'],
    category: 'Immune',
    dosage: '100-500mg daily',
    tags: ['bee-product', 'energy', 'anti-aging']
  },
  {
    slug: 'spirulina',
    title: 'Spirulina',
    latinName: 'Arthrospira platensis',
    description: 'Nutrient-dense blue-green algae for overall health.',
    uses: ['Nutrient Support', 'Energy', 'Immunity', 'Detox', 'Protein'],
    category: 'Immune',
    dosage: '1-3g daily powder or tablets',
    tags: ['algae', 'nutrients', 'energy']
  },
  {
    slug: 'chlorella',
    title: 'Chlorella',
    latinName: 'Chlorella vulgaris',
    description: 'Green algae for detoxification and nutrient support.',
    uses: ['Detox', 'Nutrient Support', 'Immunity', 'Heavy Metal Detox', 'Energy'],
    category: 'Immune',
    dosage: '1-3g daily powder or tablets',
    tags: ['algae', 'detox', 'nutrients']
  },
  {
    slug: 'wheatgrass',
    title: 'Wheatgrass',
    latinName: 'Triticum aestivum',
    description: 'Young wheat plant for detoxification and nutrient support.',
    uses: ['Detox', 'Nutrient Support', 'Immunity', 'Alkalizing', 'Energy'],
    category: 'Immune',
    dosage: '1-2 oz fresh juice daily',
    tags: ['grass', 'detox', 'nutrients']
  },
  {
    slug: 'barley-grass',
    title: 'Barley Grass',
    latinName: 'Hordeum vulgare',
    description: 'Young barley plant for detoxification and nutrient support.',
    uses: ['Detox', 'Nutrient Support', 'Immunity', 'Alkalizing', 'Energy'],
    category: 'Immune',
    dosage: '1-2 oz fresh juice daily',
    tags: ['grass', 'detox', 'nutrients']
  },
  {
    slug: 'alfalfa',
    title: 'Alfalfa',
    latinName: 'Medicago sativa',
    description: 'Nutrient-rich legume for overall health and hormone balance.',
    uses: ['Nutrient Support', 'Hormone Balance', 'Detox', 'Digestion', 'Energy'],
    category: 'Immune',
    dosage: 'Tea: 1-3 cups daily, Sprouts: 1-2 cups',
    tags: ['legume', 'nutrients', 'hormone']
  },
  {
    slug: 'moringa',
    title: 'Moringa',
    latinName: 'Moringa oleifera',
    description: 'Miracle tree with exceptional nutrient density.',
    uses: ['Nutrient Support', 'Energy', 'Immunity', 'Anti-aging', 'Blood Sugar'],
    category: 'Immune',
    dosage: '1-2 tsp powder daily',
    tags: ['tree', 'nutrients', 'energy']
  },
  {
    slug: 'sea-moss',
    title: 'Sea Moss',
    latinName: 'Chondrus crispus',
    description: 'Irish moss seaweed for thyroid and overall health.',
    uses: ['Thyroid Health', 'Nutrient Support', 'Immunity', 'Digestion', 'Skin Health'],
    category: 'Immune',
    dosage: '1-2 tbsp gel daily',
    tags: ['seaweed', 'thyroid', 'nutrients']
  },
  {
    slug: 'kelp',
    title: 'Kelp',
    latinName: 'Laminaria digitata',
    description: 'Seaweed rich in iodine for thyroid health.',
    uses: ['Thyroid Health', 'Iodine', 'Metabolism', 'Energy', 'Weight Management'],
    category: 'Immune',
    dosage: '1-2 capsules daily',
    tags: ['seaweed', 'thyroid', 'iodine']
  }
]

// SPIRIT & ENERGY (25 plants)
export const spiritPlants = [
  {
    slug: 'white-sage',
    title: 'White Sage',
    latinName: 'Salvia apiana',
    description: 'Sacred herb for spiritual cleansing and purification.',
    uses: ['Spiritual Cleansing', 'Purification', 'Meditation', 'Energy Clearing', 'Protection'],
    category: 'Spirit',
    dosage: 'Smudge: burn as needed, Tea: 1 cup for meditation',
    tags: ['sacred', 'cleansing', 'spiritual']
  },
  {
    slug: 'cedar',
    title: 'Cedar',
    latinName: 'Thuja occidentalis',
    description: 'Sacred tree for spiritual protection and grounding.',
    uses: ['Spiritual Protection', 'Grounding', 'Purification', 'Meditation', 'Energy Clearing'],
    category: 'Spirit',
    dosage: 'Smudge: burn as needed, Essential oil: 2-4 drops',
    tags: ['sacred', 'protection', 'grounding']
  },
  {
    slug: 'palo-santo',
    title: 'Palo Santo',
    latinName: 'Bursera graveolens',
    description: 'Sacred wood for spiritual cleansing and positive energy.',
    uses: ['Spiritual Cleansing', 'Positive Energy', 'Meditation', 'Protection', 'Healing'],
    category: 'Spirit',
    dosage: 'Burn stick as needed for cleansing',
    tags: ['sacred', 'cleansing', 'positive-energy']
  },
  {
    slug: 'frankincense',
    title: 'Frankincense',
    latinName: 'Boswellia sacra',
    description: 'Sacred resin for spiritual connection and meditation.',
    uses: ['Spiritual Connection', 'Meditation', 'Prayer', 'Healing', 'Protection'],
    category: 'Spirit',
    dosage: 'Burn resin as needed, Essential oil: 2-4 drops',
    tags: ['sacred', 'meditation', 'spiritual']
  },
  {
    slug: 'myrrh',
    title: 'Myrrh',
    latinName: 'Commiphora myrrha',
    description: 'Sacred resin for spiritual healing and protection.',
    uses: ['Spiritual Healing', 'Protection', 'Meditation', 'Prayer', 'Purification'],
    category: 'Spirit',
    dosage: 'Burn resin as needed, Essential oil: 2-4 drops',
    tags: ['sacred', 'healing', 'protection']
  },
  {
    slug: 'rose',
    title: 'Rose',
    latinName: 'Rosa damascena',
    description: 'Sacred flower for love, healing, and spiritual connection.',
    uses: ['Love', 'Healing', 'Spiritual Connection', 'Heart Opening', 'Beauty'],
    category: 'Spirit',
    dosage: 'Tea: 1-2 cups daily, Essential oil: 2-4 drops',
    tags: ['sacred', 'love', 'healing']
  },
  {
    slug: 'jasmine',
    title: 'Jasmine',
    latinName: 'Jasminum officinale',
    description: 'Sacred flower for love, sensuality, and spiritual awakening.',
    uses: ['Love', 'Sensuality', 'Spiritual Awakening', 'Meditation', 'Dreams'],
    category: 'Spirit',
    dosage: 'Tea: 1 cup before bed, Essential oil: 2-4 drops',
    tags: ['sacred', 'love', 'sensuality']
  },
  {
    slug: 'lotus',
    title: 'Lotus',
    latinName: 'Nelumbo nucifera',
    description: 'Sacred flower for spiritual enlightenment and purity.',
    uses: ['Spiritual Enlightenment', 'Purity', 'Meditation', 'Transformation', 'Peace'],
    category: 'Spirit',
    dosage: 'Tea: 1 cup for meditation',
    tags: ['sacred', 'enlightenment', 'purity']
  },
  {
    slug: 'chamomile',
    title: 'Chamomile',
    latinName: 'Matricaria chamomilla',
    description: 'Gentle herb for peace, calm, and spiritual relaxation.',
    uses: ['Peace', 'Calm', 'Spiritual Relaxation', 'Meditation', 'Sleep'],
    category: 'Spirit',
    dosage: 'Tea: 1-3 cups daily',
    tags: ['peace', 'calm', 'spiritual']
  },
  {
    slug: 'lavender',
    title: 'Lavender',
    latinName: 'Lavandula angustifolia',
    description: 'Aromatic herb for peace, purification, and spiritual protection.',
    uses: ['Peace', 'Purification', 'Spiritual Protection', 'Meditation', 'Sleep'],
    category: 'Spirit',
    dosage: 'Tea: 1-2 cups daily, Essential oil: 2-4 drops',
    tags: ['peace', 'purification', 'protection']
  },
  {
    slug: 'mugwort',
    title: 'Mugwort',
    latinName: 'Artemisia vulgaris',
    description: 'Traditional herb for dreams, intuition, and spiritual journeying.',
    uses: ['Dreams', 'Intuition', 'Spiritual Journeying', 'Protection', 'Divination'],
    category: 'Spirit',
    dosage: 'Tea: 1 cup before bed',
    tags: ['dreams', 'intuition', 'spiritual']
  },
  {
    slug: 'yarrow',
    title: 'Yarrow',
    latinName: 'Achillea millefolium',
    description: 'Protective herb for spiritual boundaries and healing.',
    uses: ['Protection', 'Spiritual Boundaries', 'Healing', 'Divination', 'Courage'],
    category: 'Spirit',
    dosage: 'Tea: 1-2 cups daily',
    tags: ['protection', 'boundaries', 'healing']
  },
  {
    slug: 'st-johns-wort',
    title: 'St. John\'s Wort',
    latinName: 'Hypericum perforatum',
    description: 'Sun herb for spiritual light and protection.',
    uses: ['Spiritual Light', 'Protection', 'Depression', 'Sun Energy', 'Healing'],
    category: 'Spirit',
    dosage: 'Tea: 1-2 cups daily',
    tags: ['sun-herb', 'light', 'protection']
  },
  {
    slug: 'calendula',
    title: 'Calendula',
    latinName: 'Calendula officinalis',
    description: 'Sun flower for joy, healing, and spiritual warmth.',
    uses: ['Joy', 'Healing', 'Spiritual Warmth', 'Protection', 'Beauty'],
    category: 'Spirit',
    dosage: 'Tea: 1-2 cups daily',
    tags: ['sun-flower', 'joy', 'healing']
  },
  {
    slug: 'sunflower',
    title: 'Sunflower',
    latinName: 'Helianthus annuus',
    description: 'Sacred sun flower for spiritual light and joy.',
    uses: ['Spiritual Light', 'Joy', 'Sun Energy', 'Protection', 'Abundance'],
    category: 'Spirit',
    dosage: 'Seeds: 1-2 tbsp daily',
    tags: ['sun-flower', 'light', 'joy']
  },
  {
    slug: 'marigold',
    title: 'Marigold',
    latinName: 'Tagetes erecta',
    description: 'Sacred flower for spiritual protection and celebration.',
    uses: ['Spiritual Protection', 'Celebration', 'Joy', 'Abundance', 'Healing'],
    category: 'Spirit',
    dosage: 'Tea: 1 cup daily',
    tags: ['sacred', 'protection', 'celebration']
  },
  {
    slug: 'hibiscus',
    title: 'Hibiscus',
    latinName: 'Hibiscus sabdariffa',
    description: 'Sacred flower for love, beauty, and spiritual opening.',
    uses: ['Love', 'Beauty', 'Spiritual Opening', 'Heart Opening', 'Joy'],
    category: 'Spirit',
    dosage: 'Tea: 1-2 cups daily',
    tags: ['sacred', 'love', 'beauty']
  },
  {
    slug: 'passionflower',
    title: 'Passionflower',
    latinName: 'Passiflora incarnata',
    description: 'Sacred flower for spiritual passion and divine connection.',
    uses: ['Spiritual Passion', 'Divine Connection', 'Meditation', 'Peace', 'Sleep'],
    category: 'Spirit',
    dosage: 'Tea: 1-2 cups daily',
    tags: ['sacred', 'passion', 'divine']
  },
  {
    slug: 'blue-lotus',
    title: 'Blue Lotus',
    latinName: 'Nymphaea caerulea',
    description: 'Sacred Egyptian flower for spiritual awakening and dreams.',
    uses: ['Spiritual Awakening', 'Dreams', 'Meditation', 'Divine Connection', 'Peace'],
    category: 'Spirit',
    dosage: 'Tea: 1 cup for meditation',
    tags: ['sacred', 'awakening', 'dreams']
  },
  {
    slug: 'damiana',
    title: 'Damiana',
    latinName: 'Turnera diffusa',
    description: 'Sacred herb for spiritual passion and divine love.',
    uses: ['Spiritual Passion', 'Divine Love', 'Sensuality', 'Meditation', 'Joy'],
    category: 'Spirit',
    dosage: 'Tea: 1-2 cups daily',
    tags: ['sacred', 'passion', 'divine']
  },
  {
    slug: 'cacao',
    title: 'Cacao',
    latinName: 'Theobroma cacao',
    description: 'Sacred bean for heart opening and spiritual connection.',
    uses: ['Heart Opening', 'Spiritual Connection', 'Love', 'Meditation', 'Joy'],
    category: 'Spirit',
    dosage: 'Raw cacao: 1-2 tbsp daily',
    tags: ['sacred', 'heart', 'connection']
  },
  {
    slug: 'cinnamon',
    title: 'Cinnamon',
    latinName: 'Cinnamomum verum',
    description: 'Sacred spice for spiritual warmth and protection.',
    uses: ['Spiritual Warmth', 'Protection', 'Abundance', 'Love', 'Meditation'],
    category: 'Spirit',
    dosage: 'Tea: 1 cup daily, Powder: 1/2 tsp',
    tags: ['sacred', 'warmth', 'protection']
  },
  {
    slug: 'cardamom',
    title: 'Cardamom',
    latinName: 'Elettaria cardamomum',
    description: 'Sacred spice for spiritual clarity and divine communication.',
    uses: ['Spiritual Clarity', 'Divine Communication', 'Meditation', 'Protection', 'Love'],
    category: 'Spirit',
    dosage: 'Tea: 1 cup daily, Seeds: 1/4 tsp',
    tags: ['sacred', 'clarity', 'communication']
  },
  {
    slug: 'vanilla',
    title: 'Vanilla',
    latinName: 'Vanilla planifolia',
    description: 'Sacred orchid for love, sensuality, and spiritual sweetness.',
    uses: ['Love', 'Sensuality', 'Spiritual Sweetness', 'Meditation', 'Joy'],
    category: 'Spirit',
    dosage: 'Extract: 1/4 tsp daily',
    tags: ['sacred', 'love', 'sensuality']
  },
  {
    slug: 'saffron',
    title: 'Saffron',
    latinName: 'Crocus sativus',
    description: 'Sacred spice for spiritual enlightenment and divine wisdom.',
    uses: ['Spiritual Enlightenment', 'Divine Wisdom', 'Meditation', 'Protection', 'Joy'],
    category: 'Spirit',
    dosage: 'Threads: 3-5 daily',
    tags: ['sacred', 'enlightenment', 'wisdom']
  }
]

// Combine all plants
export const allComprehensivePlants = [
  ...comprehensivePlants,
  ...bodyPlants,
  ...immunePlants,
  ...spiritPlants
]

// Now create comprehensive remedies...
