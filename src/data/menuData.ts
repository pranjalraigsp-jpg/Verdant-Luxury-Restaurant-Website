import type { MenuItem } from '../types';

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Creations', number: '✦' },
  { id: 'starters', name: 'Starters', number: '01' },
  { id: 'mains', name: 'Main Course', number: '02' },
  { id: 'pasta', name: 'Italian & Pasta', number: '03' },
  { id: 'desserts', name: 'Desserts', number: '04' },
  { id: 'beverages', name: 'Beverages', number: '05' },
  { id: 'specials', name: "Chef's Specials", number: '06' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // 01. STARTERS
  {
    id: 'scallop-crudo',
    categoryNumber: '01',
    category: 'starters',
    categoryLabel: 'Starters',
    name: 'Hokkaido Scallop & Royal Ossetra',
    frenchName: 'Crudo de Saint-Jacques aux Perles Noires',
    description: 'Thinly laminated day-boat Hokkaido scallops, oscietra caviar, compressed finger lime pearls, nasturtium leaf emulsion, and chilled dashi-shiso broth poured tableside.',
    price: 48,
    featured: true,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=85&w=1200&auto=format&fit=crop',
    tags: ['Royal Caviar', 'Wild Harvest', 'Cold Plated'],
    dietary: ['Gluten-Free', 'Dairy-Free', 'Sustainably Caught'],
    ingredients: ['Hokkaido Scallops', 'Imperial Ossetra Caviar', 'Finger Lime', 'Cold-Pressed Nasturtium Oil', 'Shiso Essence'],
    sommelierPairing: {
      wine: 'Domaine Leflaive Puligny-Montrachet',
      vintage: '2020',
      notes: 'Crisp minerality and white blossom bouquet that elevates the delicate salinity of the scallops.'
    },
    flavorProfile: { umami: 88, richness: 72, delicacy: 98, aroma: 85 },
    chefNotes: 'The scallop slices are chilled over sculpted rock crystal before receiving drops of first-press estate herb oil.'
  },
  {
    id: 'truffle-carpaccio',
    categoryNumber: '01',
    category: 'starters',
    categoryLabel: 'Starters',
    name: 'Heirloom Beetroot & Périgord Truffle',
    frenchName: 'Carpaccio de Betteraves Fumé & Truffe Noire',
    description: 'Salt-baked golden and ruby heritage beets, shaved black winter truffles, whipped house almond ricotta, smoked pine oil, and micro bronze fennel fronds.',
    price: 38,
    featured: false,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=85&w=1200&auto=format&fit=crop',
    tags: ['Botanical Farm', 'Vegan Gastronomy', 'Winter Harvest'],
    dietary: ['Vegan', 'Gluten-Free', '100% Organic'],
    ingredients: ['Heritage Chioggia Beets', 'Périgord Black Truffle (Tuber melanosporum)', 'Almond Ricotta', 'Toasted Pine Nuts'],
    sommelierPairing: {
      wine: 'Chablis Premier Cru "Montée de Tonnerre"',
      vintage: '2021',
      notes: 'Flinty limestone precision with bright acidity cutting through the earthy richness of beet and truffle.'
    },
    flavorProfile: { umami: 82, richness: 65, delicacy: 90, aroma: 92 },
    chefNotes: 'Beets slow-roasted in aromatic salt crust for 4 hours to concentrate their delicate natural nectar.'
  },
  {
    id: 'foie-gras-torchon',
    categoryNumber: '01',
    category: 'starters',
    categoryLabel: 'Starters',
    name: 'Artisan Foie Gras & Quince Gelee',
    frenchName: 'Torchon de Foie Gras au Torréfié & Coing',
    description: 'Cured duck foie gras torchon, spiced quince gelee, toasted brioche feuille-a-feuille, and Brittany fleur de sel.',
    price: 44,
    featured: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=85&w=1200&auto=format&fit=crop',
    tags: ['Traditional French', 'Fleur de Sel', 'House Brioche'],
    dietary: ['Gourmet Heritage'],
    ingredients: ['Duck Foie Gras', 'Spiced Quince', 'Artisan Brioche', 'Fleur de Sel de Guérande'],
    sommelierPairing: {
      wine: 'Château d’Yquem Sauternes',
      vintage: '2016',
      notes: 'Honeyed apricot sweetness perfectly contrasting the luscious savoriness of the torchon.'
    },
    flavorProfile: { umami: 94, richness: 98, delicacy: 86, aroma: 90 },
    chefNotes: 'Cured with vintage armagnac and cold-poached for ultimate silky mouthfeel.'
  },

  // 02. MAIN COURSE
  {
    id: 'wagyu-striploin',
    categoryNumber: '02',
    category: 'mains',
    categoryLabel: 'Main Course',
    name: 'Kagoshima A5 Wagyu & Morels',
    frenchName: 'Filet de Bœuf Wagyu A5 & Morilles Braisées',
    description: 'Binchotan charcoal-seared A5 Wagyu striploin, glazed with fermented black garlic truffle jus, hollow-stem morel mushrooms filled with poultry velouté, and smoked parsnip mousseline.',
    price: 115,
    featured: true,
    image: './plated_botanical_dish.jpg',
    tags: ["Chef's Signature", 'A5 Kagoshima', 'Binchotan Grilled'],
    dietary: ['Gluten-Free', 'Halal Certified Source'],
    ingredients: ['Kagoshima Wagyu BMS 11', 'Wild Spring Morels', 'Black Garlic Essence', 'Smoked Parsnip', 'Gold Leaf Flakes'],
    sommelierPairing: {
      wine: 'Château Margaux Premier Grand Cru Classé',
      vintage: '2015',
      notes: 'Silky velvet tannins, notes of cedar, cassis, and wild violets that melt into the rich marbling of the Wagyu.'
    },
    flavorProfile: { umami: 99, richness: 96, delicacy: 82, aroma: 95 },
    chefNotes: 'Resting the beef at 54°C ensures pristine pink tenderness, locked in with an intense charcoal sear.'
  },
  {
    id: 'turbot-champagne',
    categoryNumber: '02',
    category: 'mains',
    categoryLabel: 'Main Course',
    name: 'Brittany Turbot in Champagne Foam',
    frenchName: 'Turbot Sauvage de Bretagne & Émulsion Champagne',
    description: 'Pan-roasted wild Brittany turbot with crispy skin, baby sea succulents, glazed baby leeks, and a velvet reduction of Blanc de Blancs Champagne finished with sea-urchin butter.',
    price: 88,
    featured: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=85&w=1200&auto=format&fit=crop',
    tags: ['Wild Catch', 'Atlantic Prestige', 'Caviar Butter'],
    dietary: ['Gluten-Free', 'Pescatarian'],
    ingredients: ['Wild Brittany Turbot', 'Krug Champagne Reduction', 'Hokkaido Sea Urchin Butter', 'Braised Baby Leeks'],
    sommelierPairing: {
      wine: 'Meursault Premier Cru "Les Genevrières"',
      vintage: '2019',
      notes: 'Toasted hazelnut, buttery lemon curd, and vibrant backbone structure.'
    },
    flavorProfile: { umami: 91, richness: 86, delicacy: 94, aroma: 89 },
    chefNotes: 'Caught off the rocky coasts of Brittany and cooked gently on the bone for incomparable juiciness.'
  },
  {
    id: 'canard-cerises',
    categoryNumber: '02',
    category: 'mains',
    categoryLabel: 'Main Course',
    name: 'Challans Duck Breast & Black Cherries',
    frenchName: 'Magret de Canard de Challans aux Cerises Noires',
    description: 'Dry-aged Challans duck breast roasted with lavender blossom honey, tart wild black cherry reduction, braised endive, and smoked potato galette.',
    price: 76,
    featured: false,
    image: './plated_michelin.jpg',
    tags: ['Challans Prestige', 'Aged 14 Days', 'Wild Berry'],
    dietary: ['Gluten-Free'],
    ingredients: ['Challans Duck', 'Morello Cherries', 'Provence Lavender Honey', 'Crisp Potato Galette'],
    sommelierPairing: {
      wine: 'Domaine de la Romanée-Conti Corton Grand Cru',
      vintage: '2017',
      notes: 'Delicate red berries, rose petals, and subtle exotic spices.'
    },
    flavorProfile: { umami: 92, richness: 88, delicacy: 85, aroma: 94 },
    chefNotes: 'The duck skin is scored microscopically and rendered until paper-crisp.'
  },

  // 03. ITALIAN & PASTA
  {
    id: 'tagliolini-tartufo',
    categoryNumber: '03',
    category: 'pasta',
    categoryLabel: 'Italian & Pasta',
    name: 'Hand-Cut Tagliolini & Alba White Truffle',
    frenchName: 'Tagliolini Fatti a Mano al Tartufo Bianco d’Alba',
    description: '36-yolk hand-rolled egg tagliolini, cultured alpine butter from Normandy, 30-month aged Parmigiano-Reggiano Vacche Rosse, and generous tableside shavings of fresh Alba white truffle.',
    price: 82,
    featured: true,
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=85&w=1200&auto=format&fit=crop',
    tags: ['Alba Truffle', 'Hand-Rolled 36-Yolk', 'Tableside Shaved'],
    dietary: ['Vegetarian', 'Artisan Pasta'],
    ingredients: ['Organic Egg Yolks', 'Caputo Tipo 00 Flour', 'Vacche Rosse Parmigiano', 'Normandy Beurre Cru', 'Tuber magnatum pico'],
    sommelierPairing: {
      wine: 'Gaja Barbaresco DOCG',
      vintage: '2018',
      notes: 'Floral leather notes, silky tannins, and truffle nuances that harmonize flawlessly.'
    },
    flavorProfile: { umami: 98, richness: 94, delicacy: 88, aroma: 99 },
    chefNotes: 'Pasta rolled within two hours of service to maintain delicate bite and silkiness.'
  },
  {
    id: 'raviolo-aragosta',
    categoryNumber: '03',
    category: 'pasta',
    categoryLabel: 'Italian & Pasta',
    name: 'Native Lobster Raviolo & Bisque Emulsion',
    frenchName: 'Raviolo d’Homard Bleu & Émulsion au Safran',
    description: 'Giant single raviolo stuffed with Cornish blue lobster coral mousse and poached lobster tail meat, glazed with saffron lobster bisque and preserved Meyer lemon zest.',
    price: 68,
    featured: false,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=85&w=1200&auto=format&fit=crop',
    tags: ['Cornish Blue Lobster', 'Saffron Bisque', 'Giant Raviolo'],
    dietary: ['Pescatarian'],
    ingredients: ['Cornish Blue Lobster', 'San Gimignano Saffron', 'Meyer Lemon', 'Fresh Ricotta di Bufala'],
    sommelierPairing: {
      wine: 'Cervaro della Sala Antinori',
      vintage: '2021',
      notes: 'Rich mineral backbone with hints of vanilla and crisp citrus.'
    },
    flavorProfile: { umami: 95, richness: 90, delicacy: 92, aroma: 94 },
    chefNotes: 'The bisque is simmered for 18 hours with roasted shells and aged cognac.'
  },

  // 04. GOURMET DESSERTS
  {
    id: 'sphere-chocolat',
    categoryNumber: '04',
    category: 'desserts',
    categoryLabel: 'Desserts',
    name: 'Sphère Noire & Smoked Tonka',
    frenchName: 'Sphère de Chocolat Guanaja & Fève Tonka',
    description: 'Hand-blown 70% Guanaja single-origin chocolate sphere, smoked sea salt caramel heart, roasted Piedmont hazelnut praline, and warm Madagascar bourbon vanilla ganache poured at table.',
    price: 34,
    featured: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=85&w=1200&auto=format&fit=crop',
    tags: ['Valrhona Guanaja 70%', 'Edible 24k Gold', 'Tableside Theater'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    ingredients: ['Valrhona Guanaja 70%', 'Piedmont Hazelnuts IGP', 'Fumée Maldon Caramel', 'Tonka Bean Infusion', '24k Gold Leaf'],
    sommelierPairing: {
      wine: 'Château d’Yquem Sauternes Premier Cru Supérieur',
      vintage: '2011',
      notes: 'Complex notes of dried apricot, candied ginger, honeysuckle, and rich saffron.'
    },
    flavorProfile: { umami: 65, richness: 98, delicacy: 88, aroma: 97 },
    chefNotes: 'The thin sphere collapses gracefully as the warm ganache is poured from a hand-carved copper vessel.'
  },
  {
    id: 'matcha-citrus',
    categoryNumber: '04',
    category: 'desserts',
    categoryLabel: 'Desserts',
    name: 'Ceremonial Matcha & Yuzu Blossom',
    frenchName: 'Crémeux Matcha Uji & Nuage de Yuzu',
    description: 'First-harvest Uji ceremonial matcha crémeux, crisp candied buckwheat tuile, tart Kochi yuzu gelée, and white chocolate blossom snow.',
    price: 29,
    featured: false,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=85&w=1200&auto=format&fit=crop',
    tags: ['Kyoto Uji Matcha', 'Yuzu Kochi', 'Delicate Citrus'],
    dietary: ['Vegetarian'],
    ingredients: ['Ceremonial Matcha (Tenmyo)', 'Kochi Yuzu Juice', 'Buckwheat Tuile', 'Cacao Blanc Velvet'],
    sommelierPairing: {
      wine: 'Rare 20-Year Aged Junmai Daiginjo Sake',
      vintage: 'Special Reserve',
      notes: 'Velvety melon aromas with a soothing, pristine herbal finish.'
    },
    flavorProfile: { umami: 70, richness: 74, delicacy: 96, aroma: 94 },
    chefNotes: 'The bitter tea balance cuts through sweet citrus notes for an ethereal end to the meal.'
  },

  // 05. BEVERAGES
  {
    id: 'verdant-botanist',
    categoryNumber: '05',
    category: 'beverages',
    categoryLabel: 'Beverages',
    name: 'Verdant Royal Botanist',
    frenchName: 'Élixir Botanique Royal & Or Végétal',
    description: 'Rare herbaceous cold-distilled botanicals, clarified green apple & wood sorrel essence, Spanish golden saffron mist, topped with vintage champagne foam and elderflower crystal.',
    price: 36,
    featured: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=85&w=1200&auto=format&fit=crop',
    tags: ['Bespoke Elixir', 'Estate Botanicals', 'Saffron Mist'],
    dietary: ['Crafted Cocktail / Zero-Proof Option'],
    ingredients: ['House-Distilled Botanicals', 'Wood Sorrel', 'Clarified Crisp Apple', 'Vintage Perrier-Jouët Foam', 'Iranian Red Saffron'],
    sommelierPairing: {
      wine: 'Served as an Aperitif or Intermezzo',
      vintage: 'NV',
      notes: 'Awakens the palate with crisp alpine herbal freshness and delicate golden luminescence.'
    },
    flavorProfile: { umami: 50, richness: 55, delicacy: 99, aroma: 99 },
    chefNotes: 'Every single glass is finished with an ultrasonic mist of wild mountain thyme and gold leaf dust.'
  },
  {
    id: 'smoked-pine-old-fashioned',
    categoryNumber: '05',
    category: 'beverages',
    categoryLabel: 'Beverages',
    name: 'Smoked Pine & 18-Year Cask',
    frenchName: 'Cask Vieilli Sous Bois de Pin Fumé',
    description: '18-Year Japanese single malt, roasted chestnut reduction, black walnut bitters, served over hand-carved ice sphere inside a cedar smoke dome.',
    price: 42,
    featured: false,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=85&w=1200&auto=format&fit=crop',
    tags: ['18-Year Cask', 'Japanese Whisky', 'Cedar Smoked'],
    dietary: ['Digestif Selection'],
    ingredients: ['Yamazaki 18y Reserve', 'Chestnut Infusion', 'Black Walnut Bitters', 'Cedarwood Smoke'],
    sommelierPairing: {
      wine: 'Digestif Selection',
      vintage: 'Single Barrel',
      notes: 'Deep mahogany warmth, dry smoke, and caramelised orchard fruits.'
    },
    flavorProfile: { umami: 75, richness: 90, delicacy: 78, aroma: 98 },
    chefNotes: 'The smoke dome is lifted in front of the diner, releasing scents reminiscent of an autumn forest at dusk.'
  },

  // 06. CHEF'S SPECIALS
  {
    id: 'black-cod-miso-truffle',
    categoryNumber: '06',
    category: 'specials',
    categoryLabel: "Chef's Specials",
    name: 'Glacier 51 Toothfish & Saikyo Miso',
    frenchName: 'Légine Australe Caramélisée au Miso Blanc & Yuzu',
    description: 'Antarctic Glacier 51 toothfish marinated for 72 hours in Saikyo sweet white miso, charred under salamander heat, served with hajikami ginger and yuzu beurre blanc.',
    price: 98,
    featured: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=85&w=1200&auto=format&fit=crop',
    tags: ['Antarctic Glacier 51', '72-Hour Cured', 'Artisan Miso'],
    dietary: ['Gluten-Free Option', 'Pescatarian'],
    ingredients: ['Glacier 51 Toothfish', 'Kyoto Saikyo Miso', 'Mirin Reserve', 'Yuzu Beurre Blanc'],
    sommelierPairing: {
      wine: 'Condrieu Guigal "La Doriane"',
      vintage: '2020',
      notes: 'Apricot, white peach, and honeysuckle viognier richness perfectly matches caramelized miso.'
    },
    flavorProfile: { umami: 96, richness: 93, delicacy: 91, aroma: 95 },
    chefNotes: 'The fish flakes into buttery porcelain sheets with a caramelized golden glaze.'
  },
  {
    id: 'venison-grand-veneur',
    categoryNumber: '06',
    category: 'specials',
    categoryLabel: "Chef's Specials",
    name: 'Highland Roe Deer & Grand Veneur',
    frenchName: 'Noisette de Chevreuil Rôtie & Sauce Grand Veneur',
    description: 'Roasted loin of Scottish Highland roe deer, juniper berry crust, chestnut mousseline, poached winter pear, and ruby grand veneur reduction.',
    price: 89,
    featured: false,
    image: './botanical_haute_cuisine.jpg',
    tags: ['Wild Highland Game', 'Winter Specialty', 'Grand Veneur'],
    dietary: ['Gluten-Free', 'Wild Game'],
    ingredients: ['Highland Roe Deer', 'Juniper Berries', 'Chestnut Puree', 'Redcurrant Grand Veneur'],
    sommelierPairing: {
      wine: 'Hermitage Rouge Jean-Louis Chave',
      vintage: '2016',
      notes: 'Smoky Syrah with black pepper, crushed tapenade, and wild berry depth.'
    },
    flavorProfile: { umami: 97, richness: 91, delicacy: 84, aroma: 96 },
    chefNotes: 'Gently rested with pine needles and smoked applewood before carving.'
  }
];
