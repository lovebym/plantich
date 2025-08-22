// Top 100 Most Searched Health Conditions and Remedies
// Based on Google search data and herbal medicine popularity

export const top100Remedies = [
  // Mental Health & Cognitive (20)
  { condition: 'Anxiety', category: 'Mind', priority: 'high' },
  { condition: 'Depression', category: 'Mind', priority: 'high' },
  { condition: 'Stress', category: 'Mind', priority: 'high' },
  { condition: 'Insomnia', category: 'Mind', priority: 'high' },
  { condition: 'ADHD', category: 'Mind', priority: 'high' },
  { condition: 'Focus & Concentration', category: 'Mind', priority: 'high' },
  { condition: 'Memory Issues', category: 'Mind', priority: 'medium' },
  { condition: 'Brain Fog', category: 'Mind', priority: 'medium' },
  { condition: 'PTSD', category: 'Mind', priority: 'medium' },
  { condition: 'Mood Swings', category: 'Mind', priority: 'medium' },
  { condition: 'Mental Clarity', category: 'Mind', priority: 'medium' },
  { condition: 'Cognitive Decline', category: 'Mind', priority: 'medium' },
  { condition: 'Nervousness', category: 'Mind', priority: 'medium' },
  { condition: 'Panic Attacks', category: 'Mind', priority: 'high' },
  { condition: 'OCD', category: 'Mind', priority: 'medium' },
  { condition: 'Bipolar Disorder', category: 'Mind', priority: 'medium' },
  { condition: 'Seasonal Depression', category: 'Mind', priority: 'medium' },
  { condition: 'Social Anxiety', category: 'Mind', priority: 'medium' },
  { condition: 'Mental Fatigue', category: 'Mind', priority: 'medium' },
  { condition: 'Emotional Balance', category: 'Mind', priority: 'medium' },

  // Energy & Vitality (15)
  { condition: 'Fatigue', category: 'Body', priority: 'high' },
  { condition: 'Low Energy', category: 'Body', priority: 'high' },
  { condition: 'Chronic Fatigue', category: 'Body', priority: 'high' },
  { condition: 'Adrenal Fatigue', category: 'Body', priority: 'medium' },
  { condition: 'Burnout', category: 'Body', priority: 'medium' },
  { condition: 'Weakness', category: 'Body', priority: 'medium' },
  { condition: 'Lethargy', category: 'Body', priority: 'medium' },
  { condition: 'Physical Exhaustion', category: 'Body', priority: 'medium' },
  { condition: 'Low Stamina', category: 'Body', priority: 'medium' },
  { condition: 'Recovery Support', category: 'Body', priority: 'medium' },
  { condition: 'Post-Exercise Fatigue', category: 'Body', priority: 'medium' },
  { condition: 'Morning Fatigue', category: 'Body', priority: 'medium' },
  { condition: 'Afternoon Slump', category: 'Body', priority: 'medium' },
  { condition: 'Energy Boost', category: 'Body', priority: 'high' },
  { condition: 'Vitality Support', category: 'Body', priority: 'medium' },

  // Digestive Health (15)
  { condition: 'Digestive Issues', category: 'Body', priority: 'high' },
  { condition: 'IBS', category: 'Body', priority: 'high' },
  { condition: 'Bloating', category: 'Body', priority: 'high' },
  { condition: 'Constipation', category: 'Body', priority: 'high' },
  { condition: 'Diarrhea', category: 'Body', priority: 'high' },
  { condition: 'Acid Reflux', category: 'Body', priority: 'high' },
  { condition: 'Gut Health', category: 'Body', priority: 'high' },
  { condition: 'Nausea', category: 'Body', priority: 'medium' },
  { condition: 'Stomach Pain', category: 'Body', priority: 'medium' },
  { condition: 'Food Intolerance', category: 'Body', priority: 'medium' },
  { condition: 'Leaky Gut', category: 'Body', priority: 'medium' },
  { condition: 'Gastritis', category: 'Body', priority: 'medium' },
  { condition: 'Ulcer Support', category: 'Body', priority: 'medium' },
  { condition: 'Digestive Enzymes', category: 'Body', priority: 'medium' },
  { condition: 'Microbiome Support', category: 'Body', priority: 'medium' },

  // Immune System (10)
  { condition: 'Immune Support', category: 'Body', priority: 'high' },
  { condition: 'Immune Boost', category: 'Body', priority: 'high' },
  { condition: 'Cold Prevention', category: 'Body', priority: 'high' },
  { condition: 'Flu Prevention', category: 'Body', priority: 'high' },
  { condition: 'Viral Infections', category: 'Body', priority: 'medium' },
  { condition: 'Bacterial Infections', category: 'Body', priority: 'medium' },
  { condition: 'Recovery from Illness', category: 'Body', priority: 'medium' },
  { condition: 'Seasonal Immunity', category: 'Body', priority: 'medium' },
  { condition: 'Autoimmune Support', category: 'Body', priority: 'medium' },
  { condition: 'Inflammation', category: 'Body', priority: 'high' },

  // Pain & Inflammation (10)
  { condition: 'Joint Pain', category: 'Body', priority: 'high' },
  { condition: 'Arthritis', category: 'Body', priority: 'high' },
  { condition: 'Back Pain', category: 'Body', priority: 'high' },
  { condition: 'Neck Pain', category: 'Body', priority: 'medium' },
  { condition: 'Muscle Pain', category: 'Body', priority: 'medium' },
  { condition: 'Headache', category: 'Body', priority: 'high' },
  { condition: 'Migraine', category: 'Body', priority: 'high' },
  { condition: 'Chronic Pain', category: 'Body', priority: 'medium' },
  { condition: 'Fibromyalgia', category: 'Body', priority: 'medium' },
  { condition: 'Inflammatory Conditions', category: 'Body', priority: 'medium' },

  // Hormonal Health (10)
  { condition: 'Hormone Balance', category: 'Body', priority: 'high' },
  { condition: 'PMS', category: 'Body', priority: 'high' },
  { condition: 'Menopause Symptoms', category: 'Body', priority: 'high' },
  { condition: 'PCOS', category: 'Body', priority: 'medium' },
  { condition: 'Thyroid Support', category: 'Body', priority: 'medium' },
  { condition: 'Adrenal Support', category: 'Body', priority: 'medium' },
  { condition: 'Testosterone Support', category: 'Body', priority: 'medium' },
  { condition: 'Estrogen Balance', category: 'Body', priority: 'medium' },
  { condition: 'Fertility Support', category: 'Body', priority: 'medium' },
  { condition: 'Endocrine Health', category: 'Body', priority: 'medium' },

  // Cardiovascular (8)
  { condition: 'Heart Health', category: 'Body', priority: 'high' },
  { condition: 'High Blood Pressure', category: 'Body', priority: 'high' },
  { condition: 'High Cholesterol', category: 'Body', priority: 'high' },
  { condition: 'Circulation', category: 'Body', priority: 'medium' },
  { condition: 'Cardiovascular Support', category: 'Body', priority: 'medium' },
  { condition: 'Blood Sugar Balance', category: 'Body', priority: 'high' },
  { condition: 'Diabetes Support', category: 'Body', priority: 'high' },
  { condition: 'Metabolic Health', category: 'Body', priority: 'medium' },

  // Skin Health (7)
  { condition: 'Acne', category: 'Body', priority: 'high' },
  { condition: 'Eczema', category: 'Body', priority: 'high' },
  { condition: 'Psoriasis', category: 'Body', priority: 'medium' },
  { condition: 'Skin Aging', category: 'Body', priority: 'medium' },
  { condition: 'Skin Inflammation', category: 'Body', priority: 'medium' },
  { condition: 'Hair Loss', category: 'Body', priority: 'medium' },
  { condition: 'Skin Health', category: 'Body', priority: 'medium' },

  // Respiratory (5)
  { condition: 'Asthma', category: 'Body', priority: 'high' },
  { condition: 'Allergies', category: 'Body', priority: 'high' },
  { condition: 'Sinus Issues', category: 'Body', priority: 'medium' },
  { condition: 'Cough', category: 'Body', priority: 'medium' },
  { condition: 'Respiratory Support', category: 'Body', priority: 'medium' },

  // Detox & Cleansing (5)
  { condition: 'Detox', category: 'Body', priority: 'high' },
  { condition: 'Liver Detox', category: 'Body', priority: 'medium' },
  { condition: 'Kidney Health', category: 'Body', priority: 'medium' },
  { condition: 'Toxin Removal', category: 'Body', priority: 'medium' },
  { condition: 'Cleansing Support', category: 'Body', priority: 'medium' },

  // Sleep & Recovery (5)
  { condition: 'Sleep Support', category: 'Mind', priority: 'high' },
  { condition: 'Sleep Apnea', category: 'Body', priority: 'medium' },
  { condition: 'Restless Sleep', category: 'Mind', priority: 'medium' },
  { condition: 'Sleep Quality', category: 'Mind', priority: 'medium' },
  { condition: 'Recovery Sleep', category: 'Mind', priority: 'medium' }
]

export const top100Plants = [
  // Adaptogens (15)
  { name: 'Ashwagandha', latin: 'Withania somnifera', category: 'Body', priority: 'high' },
  { name: 'Rhodiola', latin: 'Rhodiola rosea', category: 'Body', priority: 'high' },
  { name: 'Ginseng', latin: 'Panax ginseng', category: 'Body', priority: 'high' },
  { name: 'Holy Basil', latin: 'Ocimum sanctum', category: 'Body', priority: 'high' },
  { name: 'Schisandra', latin: 'Schisandra chinensis', category: 'Body', priority: 'medium' },
  { name: 'Astragalus', latin: 'Astragalus membranaceus', category: 'Body', priority: 'medium' },
  { name: 'Reishi', latin: 'Ganoderma lucidum', category: 'Body', priority: 'high' },
  { name: 'Cordyceps', latin: 'Cordyceps sinensis', category: 'Body', priority: 'high' },
  { name: 'Chaga', latin: 'Inonotus obliquus', category: 'Body', priority: 'medium' },
  { name: 'Lion\'s Mane', latin: 'Hericium erinaceus', category: 'Mind', priority: 'high' },
  { name: 'Maca', latin: 'Lepidium meyenii', category: 'Body', priority: 'high' },
  { name: 'Gotu Kola', latin: 'Centella asiatica', category: 'Mind', priority: 'medium' },
  { name: 'Bacopa', latin: 'Bacopa monnieri', category: 'Mind', priority: 'high' },
  { name: 'Ginkgo Biloba', latin: 'Ginkgo biloba', category: 'Mind', priority: 'high' },
  { name: 'Eleuthero', latin: 'Eleutherococcus senticosus', category: 'Body', priority: 'medium' },

  // Calming Herbs (12)
  { name: 'Valerian Root', latin: 'Valeriana officinalis', category: 'Mind', priority: 'high' },
  { name: 'Passionflower', latin: 'Passiflora incarnata', category: 'Mind', priority: 'high' },
  { name: 'Chamomile', latin: 'Matricaria chamomilla', category: 'Mind', priority: 'high' },
  { name: 'Lavender', latin: 'Lavandula angustifolia', category: 'Mind', priority: 'high' },
  { name: 'Lemon Balm', latin: 'Melissa officinalis', category: 'Mind', priority: 'high' },
  { name: 'Skullcap', latin: 'Scutellaria lateriflora', category: 'Mind', priority: 'medium' },
  { name: 'St. John\'s Wort', latin: 'Hypericum perforatum', category: 'Mind', priority: 'medium' },
  { name: 'Kava Kava', latin: 'Piper methysticum', category: 'Mind', priority: 'medium' },
  { name: 'California Poppy', latin: 'Eschscholzia californica', category: 'Mind', priority: 'medium' },
  { name: 'Blue Vervain', latin: 'Verbena hastata', category: 'Mind', priority: 'medium' },
  { name: 'Motherwort', latin: 'Leonurus cardiaca', category: 'Mind', priority: 'medium' },
  { name: 'Hops', latin: 'Humulus lupulus', category: 'Mind', priority: 'medium' },

  // Immune Boosters (10)
  { name: 'Echinacea', latin: 'Echinacea purpurea', category: 'Body', priority: 'high' },
  { name: 'Elderberry', latin: 'Sambucus nigra', category: 'Body', priority: 'high' },
  { name: 'Garlic', latin: 'Allium sativum', category: 'Body', priority: 'high' },
  { name: 'Ginger', latin: 'Zingiber officinale', category: 'Body', priority: 'high' },
  { name: 'Turmeric', latin: 'Curcuma longa', category: 'Body', priority: 'high' },
  { name: 'Oregano', latin: 'Origanum vulgare', category: 'Body', priority: 'medium' },
  { name: 'Thyme', latin: 'Thymus vulgaris', category: 'Body', priority: 'medium' },
  { name: 'Sage', latin: 'Salvia officinalis', category: 'Body', priority: 'medium' },
  { name: 'Rosemary', latin: 'Rosmarinus officinalis', category: 'Body', priority: 'medium' },
  { name: 'Peppermint', latin: 'Mentha piperita', category: 'Body', priority: 'medium' },

  // Digestive Support (10)
  { name: 'Marshmallow Root', latin: 'Althaea officinalis', category: 'Body', priority: 'high' },
  { name: 'Slippery Elm', latin: 'Ulmus rubra', category: 'Body', priority: 'high' },
  { name: 'Licorice Root', latin: 'Glycyrrhiza glabra', category: 'Body', priority: 'high' },
  { name: 'Fennel', latin: 'Foeniculum vulgare', category: 'Body', priority: 'medium' },
  { name: 'Dandelion Root', latin: 'Taraxacum officinale', category: 'Body', priority: 'medium' },
  { name: 'Burdock Root', latin: 'Arctium lappa', category: 'Body', priority: 'medium' },
  { name: 'Nettle', latin: 'Urtica dioica', category: 'Body', priority: 'medium' },
  { name: 'Alfalfa', latin: 'Medicago sativa', category: 'Body', priority: 'medium' },
  { name: 'Red Clover', latin: 'Trifolium pratense', category: 'Body', priority: 'medium' },
  { name: 'Triphala', latin: 'Ayurvedic blend', category: 'Body', priority: 'medium' },

  // Detox & Liver Support (8)
  { name: 'Milk Thistle', latin: 'Silybum marianum', category: 'Body', priority: 'high' },
  { name: 'Dandelion Root', latin: 'Taraxacum officinale', category: 'Body', priority: 'medium' },
  { name: 'Burdock Root', latin: 'Arctium lappa', category: 'Body', priority: 'medium' },
  { name: 'Yellow Dock', latin: 'Rumex crispus', category: 'Body', priority: 'medium' },
  { name: 'Cilantro', latin: 'Coriandrum sativum', category: 'Body', priority: 'medium' },
  { name: 'Chlorella', latin: 'Chlorella vulgaris', category: 'Body', priority: 'medium' },
  { name: 'Spirulina', latin: 'Arthrospira platensis', category: 'Body', priority: 'medium' },
  { name: 'Sea Moss', latin: 'Chondrus crispus', category: 'Body', priority: 'medium' },

  // Hormonal Support (8)
  { name: 'Chasteberry', latin: 'Vitex agnus-castus', category: 'Body', priority: 'high' },
  { name: 'Black Cohosh', latin: 'Actaea racemosa', category: 'Body', priority: 'medium' },
  { name: 'Dong Quai', latin: 'Angelica sinensis', category: 'Body', priority: 'medium' },
  { name: 'Wild Yam', latin: 'Dioscorea villosa', category: 'Body', priority: 'medium' },
  { name: 'Shatavari', latin: 'Asparagus racemosus', category: 'Body', priority: 'medium' },
  { name: 'Tribulus', latin: 'Tribulus terrestris', category: 'Body', priority: 'medium' },
  { name: 'Fenugreek', latin: 'Trigonella foenum-graecum', category: 'Body', priority: 'medium' },
  { name: 'Saw Palmetto', latin: 'Serenoa repens', category: 'Body', priority: 'medium' },

  // Cardiovascular Support (7)
  { name: 'Hawthorn', latin: 'Crataegus monogyna', category: 'Body', priority: 'high' },
  { name: 'Garlic', latin: 'Allium sativum', category: 'Body', priority: 'high' },
  { name: 'Cinnamon', latin: 'Cinnamomum verum', category: 'Body', priority: 'medium' },
  { name: 'Ginger', latin: 'Zingiber officinale', category: 'Body', priority: 'medium' },
  { name: 'Cayenne', latin: 'Capsicum annuum', category: 'Body', priority: 'medium' },
  { name: 'Ginkgo Biloba', latin: 'Ginkgo biloba', category: 'Body', priority: 'medium' },
  { name: 'Bilberry', latin: 'Vaccinium myrtillus', category: 'Body', priority: 'medium' },

  // Pain & Inflammation (8)
  { name: 'Turmeric', latin: 'Curcuma longa', category: 'Body', priority: 'high' },
  { name: 'Ginger', latin: 'Zingiber officinale', category: 'Body', priority: 'high' },
  { name: 'Willow Bark', latin: 'Salix alba', category: 'Body', priority: 'medium' },
  { name: 'Boswellia', latin: 'Boswellia serrata', category: 'Body', priority: 'medium' },
  { name: 'Devil\'s Claw', latin: 'Harpagophytum procumbens', category: 'Body', priority: 'medium' },
  { name: 'White Willow', latin: 'Salix alba', category: 'Body', priority: 'medium' },
  { name: 'Capsaicin', latin: 'Capsicum annuum', category: 'Body', priority: 'medium' },
  { name: 'Arnica', latin: 'Arnica montana', category: 'Body', priority: 'medium' },

  // Skin & Beauty (7)
  { name: 'Aloe Vera', latin: 'Aloe barbadensis', category: 'Body', priority: 'high' },
  { name: 'Calendula', latin: 'Calendula officinalis', category: 'Body', priority: 'medium' },
  { name: 'Tea Tree', latin: 'Melaleuca alternifolia', category: 'Body', priority: 'medium' },
  { name: 'Lavender', latin: 'Lavandula angustifolia', category: 'Body', priority: 'medium' },
  { name: 'Rosehip', latin: 'Rosa canina', category: 'Body', priority: 'medium' },
  { name: 'Jojoba', latin: 'Simmondsia chinensis', category: 'Body', priority: 'medium' },
  { name: 'Shea Butter', latin: 'Vitellaria paradoxa', category: 'Body', priority: 'medium' },

  // Energy & Stimulants (5)
  { name: 'Green Tea', latin: 'Camellia sinensis', category: 'Body', priority: 'high' },
  { name: 'Guarana', latin: 'Paullinia cupana', category: 'Body', priority: 'medium' },
  { name: 'Yerba Mate', latin: 'Ilex paraguariensis', category: 'Body', priority: 'medium' },
  { name: 'Cacao', latin: 'Theobroma cacao', category: 'Body', priority: 'medium' },
  { name: 'Coffee', latin: 'Coffea arabica', category: 'Body', priority: 'medium' },

  // Sleep & Relaxation (5)
  { name: 'Valerian Root', latin: 'Valeriana officinalis', category: 'Mind', priority: 'high' },
  { name: 'Passionflower', latin: 'Passiflora incarnata', category: 'Mind', priority: 'high' },
  { name: 'Chamomile', latin: 'Matricaria chamomilla', category: 'Mind', priority: 'high' },
  { name: 'Lavender', latin: 'Lavandula angustifolia', category: 'Mind', priority: 'high' },
  { name: 'Lemon Balm', latin: 'Melissa officinalis', category: 'Mind', priority: 'high' }
]

export default { top100Remedies, top100Plants }
