// Costa Nostra - Main JavaScript
// ================================

// Menu Data
const menuItems = [
  // Starters
  {
    id: 'starter-1',
    name: 'Chicken Samosa',
    description: 'Crispy golden pastry filled with spiced minced chicken and herbs',
    price: 250,
    category: 'Starters',
    image: 'https://media.istockphoto.com/id/1314543377/fi/valokuva/vastaleivottuja-samosa-leivonnaisia-lihalla.jpg?s=612x612&w=0&k=20&c=eQApah-qEDGkLg5e4YipNLkMEi_bLBMxUE0ui8tXep8=',
    isSignature: true
  },
  {
    id: 'starter-2',
    name: 'Vegetable Spring Rolls',
    description: 'Crunchy rolls packed with fresh vegetables and oriental spices',
    price: 280,
    category: 'Starters',
    image: 'https://www.thecookingcollective.com.au/wp-content/uploads/2022/08/Vegetable-Spring-Rolls-2-1.jpg'
  },
  {
    id: 'starter-3',
    name: 'Chicken Pakora',
    description: 'Tender chicken pieces coated in spiced gram flour batter, deep fried',
    price: 350,
    category: 'Starters',
    image: 'https://i0.wp.com/foodfoodonlyfood.wordpress.com/wp-content/uploads/2019/04/img_20240428_124328.jpg?fit=872%2C1200&ssl=1&w=640'
  },
  {
    id: 'starter-4',
    name: 'Fish Fingers',
    description: 'Crispy breaded fish strips served with tartar sauce',
    price: 450,
    category: 'Starters',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/002/830/769/small/fried-fish-finger-sticks-or-french-fries-fish-with-sauce-free-photo.jpg'
  },
  {
    id: 'starter-5',
    name: 'Crispy Chicken Wings',
    description: 'Golden fried wings tossed in signature spicy glaze',
    price: 480,
    category: 'Starters',
    image: 'https://media.istockphoto.com/id/1408338331/photo/crispy-fried-chicken-in-the-basket.jpg?s=612x612&w=0&k=20&c=2GBMXq083f9_uNnx9Do6DKjmMgEip6bNEoBpxTVkNF8='
  },
  {
    id: 'starter-6',
    name: 'Aloo Tikki',
    description: 'Crispy spiced potato patties served with mint and tamarind chutney',
    price: 220,
    category: 'Starters',
    image: 'https://www.seriouseats.com/thmb/iGjj5YgyBmeLcPb9KAB_h46SZZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220303-aloo-tikki-vicky-wasik-24-6895c79edeee4e618e5fc7a1d39e85a0.jpg'
  },
  {
    id: 'starter-7',
    name: 'Chicken Shami Kebab',
    description: 'Soft minced chicken patties with lentils and aromatic spices',
    price: 380,
    category: 'Starters',
    image: 'https://www.shutterstock.com/image-photo/delicious-shami-kababs-vegetable-cutlets-600nw-2433682847.jpg'
  },
  {
    id: 'starter-8',
    name: 'Seekh Kebab (Chicken)',
    description: 'Juicy minced chicken skewers with herbs, grilled on charcoal',
    price: 420,
    category: 'Starters',
    image: 'https://www.shutterstock.com/image-photo/seekh-kabab-made-minced-chicken-600nw-2108952152.jpg',
    isSignature: true
  },
  {
    id: 'starter-9',
    name: 'Cheese Stuffed Bread Rolls',
    description: 'Golden bread rolls filled with melted cheese and herbs',
    price: 320,
    category: 'Starters',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2024/06/potato-bread-roll-recipe.jpg'
  },
  {
    id: 'starter-10',
    name: 'Chaat Papdi',
    description: 'Crispy flour chips topped with chickpeas, yogurt and tangy chutneys',
    price: 280,
    category: 'Starters',
    image: 'https://2f795e16.delivery.rocketcdn.me/wp-content/uploads/1-Vinita-Punjabi-Grain-free-Papdi-Chaat-1.png'
  },
  {
    id: 'starter-11',
    name: 'White Sauce Pasta',
    description: 'Creamy white sauce pasta made with tender pasta tossed in a rich, cheesy, and flavorful sauce.',
    price: 650,
    category: 'Starters',
    image: 'https://smithakalluraya.com/wp-content/uploads/2024/07/white-sauce-pasta-480x270.jpg'
  },

  // Breakfast
  {
    id: 'breakfast-1',
    name: 'Halwa Puri',
    description: 'Traditional breakfast featuring crispy puris served with sweet semolina halwa and flavorful chickpea curry.',
    price: 550,
    category: 'Breakfast',
    image: 'https://media.istockphoto.com/id/1049758570/photo/suji-sooji-halwa-puri-or-shira-poori-breakfast-served-in-a-plate-and-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=5hgg9fiTkpuGhupYZgqnKtP9GGd8ic3xsfJ_hKiuAtQ=',
    isSignature: true
  },
  {
    id: 'breakfast-2',
    name: 'Aloo Paratha',
    description: 'Crispy layered flatbread stuffed with spiced mashed potatoes',
    price: 280,
    category: 'Breakfast',
    image: 'https://media.istockphoto.com/id/1413566368/fi/valokuva/intialainen-ruoka-aloo-paratha-tai-intialainen-peruna-t%C3%A4ytetty-rieska-tarjoillaan-voin.jpg?s=612x612&w=0&k=20&c=8i_xf1tgUDvoiPxOssvSo5XuO8Wrm3I_N25YHorXtE4='
  },
  {
    id: 'breakfast-3',
    name: 'Chicken Omelette',
    description: 'Fluffy eggs loaded with chicken pieces, onions and green chilies',
    price: 350,
    category: 'Breakfast',
    image: 'https://media.istockphoto.com/id/1295635886/photo/spinach-and-feta-omelette-served.jpg?s=612x612&w=0&k=20&c=4qF1tbmN7Q3lC1_dnpi0RoF3oV6-T5mMVwprLYVPtSU='
  },
  {
    id: 'breakfast-4',
    name: 'Plain Omelette',
    description: 'Classic fluffy omelette with herbs, served with toast',
    price: 220,
    category: 'Breakfast',
    image: 'https://media.istockphoto.com/id/173651967/photo/plain-omelette.jpg?s=612x612&w=0&k=20&c=C_jquOMA0LeBSR-iO2NsfB6eELqvWIhBUVvYet81ZCU='
  },
  {
    id: 'breakfast-5',
    name: 'Aloo Bhaji',
    description: 'Lightly spiced potato curry served with flatbread.',
    price: 380,
    category: 'Breakfast',
    image: 'https://media.istockphoto.com/id/1088002416/photo/indian-food-aloo-curry-masala-potato-cooked-with-spices-and-herbs-in-a-tomato-curry-served-in.jpg?s=612x612&w=0&k=20&c=YzeupmhdvdMG4MJaZRBM84nAT6UlbwxeHUwXJX7LMvc='
  },
  {
    id: 'breakfast-6',
    name: 'Paratha & Fried Egg',
    description: 'Flaky layered paratha served with sunny-side up eggs',
    price: 300,
    category: 'Breakfast',
    image: 'https://data.thefeedfeed.com/static/2020/10/13/16026430295f866455e47bf.png'
  },
  {
    id: 'breakfast-7',
    name: 'French Toast',
    description: 'Golden bread slices dipped in eggs and pan-fried to perfection',
    price: 280,
    category: 'Breakfast',
    image: 'https://t3.ftcdn.net/jpg/03/40/17/52/360_F_340175247_nqfs85ZGS2MPTovBIVuiFBdPyUUW9FJm.jpg'
  },
  {
    id: 'breakfast-8',
    name: 'Pancakes with Honey',
    description: 'Fluffy stack of pancakes drizzled with pure honey and butter',
    price: 350,
    category: 'Breakfast',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'breakfast-9',
    name: 'Lahori Chana',
    description: 'Authentic Lahori-style spiced chickpea curry with aromatic spices',
    price: 320,
    category: 'Breakfast',
    image: 'https://t3.ftcdn.net/jpg/09/41/37/80/360_F_941378043_LwZB19nhYuUsGDZytGq73G9z51FxdkYb.jpg',
    isSignature: true
  },
  {
    id: 'breakfast-10',
    name: 'Desi Breakfast Platter',
    description: 'Complete platter with paratha, omelette, chana and lassi',
    price: 650,
    category: 'Breakfast',
    image: 'https://i.pinimg.com/736x/df/4b/54/df4b54f1689acdfce039a984aa57bbbd.jpg'
  },

  // Lunch
  {
    id: 'lunch-1',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice layered with tender spiced chicken and saffron',
    price: 650,
    category: 'Lunch',
    image: 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=800',
    isSignature: true
  },
  {
    id: 'lunch-2',
    name: 'Lahori Karahi',
    description: 'Spicy and flavorful Karahi made with tender meat cooked in a rich tomato-based gravy with aromatic spices.',
    price: 1150,
    category: 'Lunch',
    image: 'https://i.pinimg.com/736x/06/93/ed/0693edf17a507c76f1c23a6e835b5ead.jpg',
    isSignature: true
  },
  {
    id: 'lunch-3',
    name: 'Mutton Karahi',
    description: 'Tender mutton pieces cooked in traditional karahi with aromatic spices',
    price: 1400,
    category: 'Lunch',
    image: 'https://fatimacooks.net/wp-content/uploads/2020/03/Lamb-or-Mutton-Karahi.jpg'
  },
  {
    id: 'lunch-4',
    name: 'Chicken Handi',
    description: 'Boneless chicken cooked in clay pot with cream and tomatoes',
    price: 1050,
    category: 'Lunch',
    image: 'https://img.freepik.com/premium-photo/3d-rendered-photo-chicken-qorma-with-simple-background_1149190-12567.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 'lunch-5',
    name: 'Daal Makhani',
    description: 'Creamy black lentils slow-cooked overnight with butter and cream',
    price: 750,
    category: 'Lunch',
    image: 'https://i.pinimg.com/736x/2a/3b/fe/2a3bfe98f9fc3622c022edc3aa220d0d.jpg'
  },
  {
    id: 'lunch-6',
    name: 'Beef Qeema',
    description: 'Spiced minced beef cooked with peas and traditional spices',
    price: 750,
    category: 'Lunch',
    image: 'https://i.pinimg.com/474x/db/3b/39/db3b391898b6917990a0681888401b91.jpg'
  },
  {
    id: 'lunch-7',
    name: 'Mix Vegetable Curry',
    description: 'Assorted seasonal vegetables in aromatic curry sauce',
    price: 650,
    category: 'Lunch',
    image: 'https://media.istockphoto.com/id/1263763610/photo/indian-mix-veg-or-mixed-vegetable-recipe-served-in-a-bowl-with-chapati.jpg?s=612x612&w=0&k=20&c=hch74nErHe8sIi40-57kCOCMxHovvNz9vUVLc-vwux8='
  },
  {
    id: 'lunch-8',
    name: 'Chicken Korma',
    description: 'Tender chicken in rich cashew and cream gravy with mild spices',
    price: 780,
    category: 'Lunch',
    image: 'https://img.freepik.com/free-photo/delicious-food-table_23-2151902524.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 'lunch-9',
    name: 'White Rice',
    description: 'Fluffy steamed basmati rice, perfect accompaniment for curries',
    price: 350,
    category: 'Lunch',
    image: 'https://i.pinimg.com/736x/c5/40/b8/c540b807460ffd0e11cae23a1cc64a75.jpg'
  },
  {
    id: 'lunch-10',
    name: 'Roti / Naan',
    description: 'Freshly baked tandoori bread, soft and fluffy',
    price: 70,
    category: 'Lunch',
    image: 'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Dinner
  {
    id: 'dinner-1',
    name: 'Chicken Tikka (Boneless)',
    description: 'Chargrilled marinated chicken pieces with smoky flavor',
    price: 880,
    category: 'Dinner',
    image: 'https://www.shutterstock.com/image-photo/deliciously-spiced-chicken-tikka-kabab-600nw-2495838045.jpg',
    isSignature: true
  },
  {
    id: 'dinner-2',
    name: 'Beef Seekh Kebab',
    description: 'Juicy minced beef skewers with herbs, grilled on charcoal',
    price: 950,
    category: 'Dinner',
    image: 'https://img.freepik.com/free-photo/delicious-arabic-fast-food-skewers-veggies_23-2148651115.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 'dinner-3',
    name: 'Chicken Malai Boti',
    description: 'Creamy marinated chicken cubes grilled to perfection',
    price: 920,
    category: 'Dinner',
    image: 'https://foodstreethalal.com/wp-content/uploads/2016/07/Chicken-Malai-Boti.png',
    isSignature: true
  },
  {
    id: 'dinner-4',
    name: 'Mutton Pulao',
    description: 'Aromatic rice cooked with tender mutton and whole spices',
    price: 950,
    category: 'Dinner',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzK7-xDZkscoErOMXS-GGNFqHsaEdhupnDTg&s'
  },
  {
    id: 'dinner-5',
    name: 'Chicken Kofta Curry',
    description: 'Spiced chicken meatballs simmered in rich tomato gravy',
    price: 800,
    category: 'Dinner',
    image: 'https://thumbs.dreamstime.com/b/malai-kofta-curry-black-bowl-dark-slate-background-indian-cuisine-dish-food-potato-paneer-cheese-deep-fried-179415022.jpg'
  },
  {
    id: 'dinner-6',
    name: 'BBQ Platter',
    description: 'Assortment of grilled tikkas, kebabs and seekh with naan',
    price: 2200,
    category: 'Dinner',
    image: 'https://media.istockphoto.com/id/1290752906/photo/homemade-barbecue-platter-with-ribs.jpg?s=612x612&w=0&k=20&c=Ku-nc9K_Ic3SHkC9-24hCGweQXQDJwX5CtjJxCu0Caw=',
    isSignature: true
  },
  {
    id: 'dinner-7',
    name: 'Beef Nihari',
    description: 'Slow-cooked beef shank in aromatic spices, garnished with ginger',
    price: 1250,
    category: 'Dinner',
    image: 'https://t4.ftcdn.net/jpg/00/29/29/25/360_F_29292582_rKWLOVhtxYcFgAkSK7S7dqyxXcXodpJK.jpg'
  },
  {
    id: 'dinner-8',
    name: 'Chicken Fried Rice',
    description: 'Wok-tossed rice with chicken, vegetables and soy sauce',
    price: 600,
    category: 'Dinner',
    image: 'https://i.pinimg.com/736x/2a/a1/7e/2aa17ea4ecea461562505e0277db2752.jpg'
  },
  {
    id: 'dinner-9',
    name: 'Garlic Naan',
    description: 'Soft tandoori bread topped with roasted garlic and butter',
    price: 200,
    category: 'Dinner',
    image: 'https://media.istockphoto.com/id/1143530040/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=0&k=20&c=71SgbJtnfiHUiud1oGxnhiZsx5nuivWwZt8DlIk8hi0='
  },
  {
    id: 'dinner-10',
    name: 'Chicken Jalfrezi',
    description: 'Chicken stir-fried with bell peppers, onions and tomatoes',
    price: 920,
    category: 'Dinner',
    image: 'https://media.istockphoto.com/id/666553456/photo/chicken-tikka-jalfrezi-indian-food.jpg?s=612x612&w=0&k=20&c=BBvn4kLOWMQzYhECo8f3m1QnPWIIJN44wn7afZReViY='
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Gulab Jamun',
    description: 'Deep-fried milk dumplings soaked in rose-cardamom syrup',
    price: 500,
    category: 'Desserts',
    image: 'https://media.istockphoto.com/id/1188000786/photo/gulab-jamun-in-bowl-on-wooden-background-indian-dessert-or-sweet-dish.jpg?s=612x612&w=0&k=20&c=FICjdgqO7rk2Kt4zpsP1bvr_Wa3mDphyd-Y48-MHo8w=',
    isSignature: true
  },
  {
    id: 'dessert-2',
    name: 'Kheer',
    description: 'Creamy rice pudding with cardamom, pistachios and saffron',
    price: 650,
    category: 'Desserts',
    image: 'https://t3.ftcdn.net/jpg/09/54/71/60/360_F_954716057_GrtgyL0ObUuj0dkqVlvGBlzYNOv4pINi.jpg'
  },
  {
    id: 'dessert-3',
    name: 'Gajar Ka Halwa',
    description: 'Traditional carrot pudding with khoya, nuts and cardamom',
    price: 700,
    category: 'Desserts',
    image: 'https://thumbs.dreamstime.com/b/indian-sweet-dish-called-gajar-ka-halwa-carrot-halwa-famous-food-diwali-wedding-gajar-halwa-carrot-halwa-104366008.jpg',
    isSignature: true
  },
  {
    id: 'dessert-4',
    name: 'Ras Malai',
    description: 'Soft cottage cheese patties in sweetened saffron milk',
    price: 450,
    category: 'Desserts',
    image: 'https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.jpg?s=612x612&w=0&k=20&c=LYftdDAkIa8lVyfmwt8iK-OPSQr2KCcJcYpPhbFtFBk='
  },
  {
    id: 'dessert-5',
    name: 'Jalebi',
    description: 'Crispy spiral-shaped sweets soaked in saffron sugar syrup',
    price: 350,
    category: 'Desserts',
    image: 'https://t4.ftcdn.net/jpg/09/76/94/83/360_F_976948359_rtVBTuf4BroTySr70mvosOlrA5etCO6v.jpg'
  },
  {
    id: 'dessert-6',
    name: 'Chocolate Cake',
    description: 'Rich moist chocolate cake with creamy frosting',
    price: 650,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'dessert-7',
    name: 'Ice Cream',
    description: 'Classic creamy vanilla ice cream made fresh daily',
    price: 350,
    category: 'Desserts',
    image: 'https://img.freepik.com/premium-photo/colorful-bright-ice-cream-bowls-with-waffle-cones_136595-28284.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 'dessert-8',
    name: 'Kulfi',
    description: 'Traditional frozen cream dessert with pistachios and cardamom',
    price: 380,
    category: 'Desserts',
    image: 'https://i.pinimg.com/736x/62/25/d7/6225d72c9af6c2faad46060029cb1fa3.jpg'
  },
  {
    id: 'dessert-9',
    name: 'Brownie with Ice Cream',
    description: 'Warm chocolate brownie served with vanilla ice cream',
    price: 450,
    category: 'Desserts',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/027/788/499/small/brownie-with-ice-cream-on-top-dark-background-ai-generative-photo.jpg'
  },
  {
    id: 'dessert-10',
    name: 'Fruit Trifle',
    description: 'Layered dessert with fruits, custard, cream and jelly',
    price: 450,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Drinks
  {
    id: 'drink-1',
    name: 'Mint Lemonade',
    description: 'Refreshing blend of fresh mint, lemon and sparkling soda',
    price: 250,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80',
    isSignature: true
  },
  {
    id: 'drink-2',
    name: 'Lassi',
    description: 'Refreshing yogurt-based drink, either sweet or salty.',
    price: 250,
    category: 'Drinks',
    image: 'https://www.shutterstock.com/image-photo/lassi-drink-indian-traditional-clay-260nw-1766218529.jpg'
  },
  {
    id: 'drink-3',
    name: 'Fresh Lime Soda',
    description: 'Tangy lime juice with soda water, sweet or salted',
    price: 280,
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'drink-4',
    name: 'Soft Drinks',
    description: 'Choice of Coca-Cola, Pepsi, Sprite or Fanta',
    price: 150,
    category: 'Drinks',
    image: 'https://media.istockphoto.com/id/477567550/photo/ice-cold-beverages.jpg?s=612x612&w=0&k=20&c=tPwTzo3ntb-oUMcUQMeiUL5o3T09TqZwXbw6McWWSHo='
  },
  {
    id: 'drink-5',
    name: 'Mineral Water',
    description: 'Pure bottled mineral water (500ml)',
    price: 80,
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'drink-6',
    name: 'Mango Shake',
    description: 'Creamy shake made with fresh Chaunsa mangoes and milk',
    price: 350,
    category: 'Drinks',
    image: 'https://media.istockphoto.com/id/1056675358/photo/healthy-mango-smoothie.jpg?s=612x612&w=0&k=20&c=-6wKcUf2trNP1wHOoCnEJxNPcK7cqQ8dPQdqAnOJEoU=',
    isSignature: true
  },
  {
    id: 'drink-7',
    name: 'Strawberry Shake',
    description: 'Fresh strawberries blended with creamy milk and ice cream',
    price: 380,
    category: 'Drinks',
    image: 'https://media.istockphoto.com/id/504639970/photo/strawberry-milkshake.jpg?s=612x612&w=0&k=20&c=64bfa23BLQjavfIGMGy-5UlPIklIj_ZdnaXqy7BGx8Q='
  },
  {
    id: 'drink-8',
    name: 'Dates and almond Shake',
    description: 'Nutritious and creamy shake made with almonds, dates, and milk, naturally sweet and energizing.',
    price: 450,
    category: 'Drinks',
    image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2025/06/Date-Shake-9.jpg'
  },
  {
    id: 'drink-9',
    name: 'Chocolate Shake',
    description: 'Creamy chocolate-flavored shake topped with whipped cream and chocolate syrup',
    price: 450,
    category: 'Drinks',
    image: 'https://media.istockphoto.com/id/1126893721/photo/low-key-chocolate-smoothies-on-a-table-in-a-rustic-kitchen.jpg?s=612x612&w=0&k=20&c=ubUfrroh2JWOvdqt3lFhfmXK0OZKzCDbGNj5JVcFRVg='
  },
  {
    id: 'drink-10',
    name: 'Banana Shake',
    description: 'Silky banana shake blended with milk and a touch of honey.',
    price: 450,
    category: 'Drinks',
    image: 'https://img.freepik.com/premium-photo/banana-milkshake-white-board-vertical-format_91908-3429.jpg'
  },
  {
    id: 'drink-11',
    name: 'Oreo Shake',
    description: 'Sweet Oreo cookies blended into a creamy milkshake.',
    price: 450,
    category: 'Drinks',
    image: 'https://t3.ftcdn.net/jpg/05/32/01/40/360_F_532014030_SIKl4Vkabl5SL1MZaF14UP8nELZNmPBk.jpg'
  },
  {
    id: 'drink-12',
    name: 'Caramel Shake',
    description: 'Rich caramel-flavored shake with a creamy texture.',
    price: 450,
    category: 'Drinks',
    image: 'https://artisante.in/cdn/shop/articles/salted-caramel-chocolate-milkshake-943241.jpg?v=1663919934'
  },
  {
    id: 'drink-13',
    name: 'Pistachio Shake',
    description: 'Nutty and creamy pistachio shake with a smooth finish.',
    price: 450,
    category: 'Drinks',
    image: 'https://img.freepik.com/premium-photo/pistachio-milkshake-with-ice-cream-scoop-served-disposable-glass-with-ice-cube-isolated-table-side-view-healthy-morning-milk-shake-drink_689047-6734.jpg'
  },
  {
    id: 'drink-14',
    name: 'Tea',
    description: 'Hot traditional doodh patti chai with cardamom',
    price: 250,
    category: 'Drinks',
    image: 'https://t3.ftcdn.net/jpg/10/00/57/10/360_F_1000571096_8ZmPCpNg5FJraw8aaIOW0ZVMO3CuNOy4.jpg'
  },
  {
    id: 'drink-15',
    name: 'Hot Coffee',
    description: 'Rich freshly brewed coffee, hot',
    price: 350,
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'drink-16',
    name: 'Cold Coffee',
    description: 'Rich freshly brewed coffee, iced',
    price: 380,
    category: 'Drinks',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7wahffO-0okn_-v459-4-OfqqXOtYlO4xw&s'
  }
];

const categories = ['All', 'Starters', 'Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Drinks'];

const sliderImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80', title: 'Welcome to Costa Nostra', subtitle: 'Where Lahore Meets Luxury' },
  { id: 2, url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80', title: 'Exquisite Dining', subtitle: 'An Unforgettable Culinary Journey' },
  { id: 3, url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80', title: 'Authentic Flavors', subtitle: 'Traditional Recipes, Modern Elegance' },
  { id: 4, url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80', title: 'Premium Experience', subtitle: 'Crafted Beverages & Fine Spirits' },
  { id: 5, url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1920&q=80', title: 'Private Events', subtitle: "Celebrate Life's Special Moments" }
];

// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
let orders = [];
let reservations = [];

// Load user-specific data
function loadUserData() {
  if (currentUser) {
    favorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.id}`)) || [];
    orders = JSON.parse(localStorage.getItem(`orders_${currentUser.id}`)) || [];
    reservations = JSON.parse(localStorage.getItem(`reservations_${currentUser.id}`)) || [];
  } else {
    favorites = [];
    orders = [];
    reservations = [];
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}

function saveFavorites() {
  if (currentUser) {
    localStorage.setItem(`favorites_${currentUser.id}`, JSON.stringify(favorites));
  }
  updateFavoritesBadge();
}

function saveOrders() {
  if (currentUser) {
    localStorage.setItem(`orders_${currentUser.id}`, JSON.stringify(orders));
  }
}

function saveReservations() {
  if (currentUser) {
    localStorage.setItem(`reservations_${currentUser.id}`, JSON.stringify(reservations));
  }
}

// Cart Functions
function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  saveCart();
  showToast(`${item.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCartItems();
}

function updateQuantity(id, quantity) {
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = quantity;
    saveCart();
    renderCartItems();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Favorites Functions
function toggleFavorite(item) {
  if (!currentUser) {
    showAuthModal();
    return;
  }
  
  const index = favorites.findIndex(f => f.id === item.id);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast(`${item.name} removed from favorites`);
  } else {
    favorites.push(item);
    showToast(`${item.name} added to favorites`);
  }
  saveFavorites();
  renderMenuCards();
  renderFavoritesItems();
}

function isFavorite(id) {
  return favorites.some(f => f.id === id);
}

// Auth Functions
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

let pendingUser = null;
let pendingOTP = null;

function signup(name, email, phone, password) {
  if (registeredUsers.some(u => u.email === email)) {
    showToast('Email already registered');
    return false;
  }
  
  pendingUser = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    password,
    createdAt: new Date().toISOString()
  };
  pendingOTP = generateOTP();
  //console.log('OTP:', pendingOTP); // For testing
  showToast(`OTP sent! (Check console: ${pendingOTP})`);
  return true;
}

function verifyOTP(otp) {
  if (otp === pendingOTP && pendingUser) {
    registeredUsers.push(pendingUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    currentUser = pendingUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    loadUserData();
    pendingUser = null;
    pendingOTP = null;
    showToast('Account created successfully!');
    closeAuthModal();
    updateAuthUI();
    return true;
  }
  showToast('Invalid OTP');
  return false;
}

function login(email, password) {
  const user = registeredUsers.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    loadUserData();
    showToast(`Welcome back, ${user.name}!`);
    closeAuthModal();
    updateAuthUI();
    return true;
  }
  showToast('Invalid credentials');
  return false;
}

function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  favorites = [];
  orders = [];
  reservations = [];
  showToast('Logged out successfully');
  updateAuthUI();
  closeProfileDropdown();
  if (window.location.pathname.includes('dashboard')) {
    window.location.href = 'index.html';
  }
}

// Order Functions
function placeOrder(deliveryDetails, paymentMethod) {
  if (!currentUser) {
    showToast('Please sign in to place order');
    return false;
  }
  
  const order = {
    id: Date.now().toString(),
    items: [...cart],
    total: getCartTotal() + 150, // Including delivery
    deliveryDetails,
    paymentMethod,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };
  
  orders.push(order);
  saveOrders();
  clearCart();
  showToast('Order placed successfully!');
  return true;
}

// Reservation Functions
function makeReservation(data) {
  if (!currentUser) {
    showToast('Please sign in to make reservation');
    return false;
  }
  
  const reservation = {
    id: Date.now().toString(),
    ...data,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };
  
  reservations.push(reservation);
  saveReservations();
  showToast('Reservation submitted!');
  return true;
}

// UI Functions
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function updateFavoritesBadge() {
  const badges = document.querySelectorAll('.favorites-badge');
  const count = favorites.length;
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function updateAuthUI() {
  const signInBtns = document.querySelectorAll('.sign-in-btn');
  const profileDropdowns = document.querySelectorAll('.profile-dropdown');
  const userNames = document.querySelectorAll('.user-name');
  
  if (currentUser) {
    signInBtns.forEach(btn => btn.style.display = 'none');
    profileDropdowns.forEach(dd => dd.style.display = 'block');
    userNames.forEach(el => el.textContent = currentUser.name.split(' ')[0]);
  } else {
    signInBtns.forEach(btn => btn.style.display = 'flex');
    profileDropdowns.forEach(dd => dd.style.display = 'none');
  }
  updateFavoritesBadge();
}

// Toast
function showToast(message) {
  const container = document.querySelector('.toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = 'toast success';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// Drawer Functions
function openCartDrawer() {
  document.querySelector('.cart-overlay').classList.add('active');
  document.querySelector('.cart-drawer').classList.add('active');
  renderCartItems();
}

function closeCartDrawer() {
  document.querySelector('.cart-overlay').classList.remove('active');
  document.querySelector('.cart-drawer').classList.remove('active');
}

function openFavoritesDrawer() {
  if (!currentUser) {
    showAuthModal();
    return;
  }
  document.querySelector('.favorites-overlay').classList.add('active');
  document.querySelector('.favorites-drawer').classList.add('active');
  if (!overlay || !drawer) return;
  
  overlay.classList.add('active');
  drawer.classList.add('active');
  renderFavoritesItems();
}
// Prevent drawer auto-opening on resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Close any open drawers on resize completion
    const favOverlay = document.querySelector('.favorites-overlay');
    const favDrawer = document.querySelector('.favorites-drawer');
    if (favOverlay && favOverlay.classList.contains('active')) {
      closeFavoritesDrawer();
    }
  }, 250);
});

// ============================================
// RESPONSIVE RESIZE HANDLER
// ============================================

let resizeTimeout;
let lastWidth = window.innerWidth;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  
  // Close mobile menu if open when resizing
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  }
  
  // Close any open drawers when resizing
  const currentWidth = window.innerWidth;
  if (Math.abs(currentWidth - lastWidth) > 50) {
    closeFavoritesDrawer();
    closeCartDrawer();
    closeProfileDropdown();
  }
  
  resizeTimeout = setTimeout(() => {
    lastWidth = window.innerWidth;
    
    // Re-render menu cards if on menu page
    if (document.getElementById('menuGrid')) {
      const filtered = activeCategory === 'All' 
        ? menuItems 
        : menuItems.filter(item => item.category === activeCategory);
      renderMenuCards(filtered);
    }
  }, 250);
});

// Prevent unwanted interactions during resize
let isResizing = false;
window.addEventListener('resize', () => {
  isResizing = true;
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    isResizing = false;
  }, 300);
});

// Prevent clicks during resize
document.addEventListener('click', (e) => {
  if (isResizing) {
    e.preventDefault();
    e.stopPropagation();
  }
}, true);

function closeFavoritesDrawer() {
  document.querySelector('.favorites-overlay').classList.remove('active');
  document.querySelector('.favorites-drawer').classList.remove('active');
}


function renderCartItems() {
  const container = document.querySelector('.cart-items');
  const footer = document.querySelector('.cart-footer');
  const emptyState = document.querySelector('.cart-empty');
  
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (footer) footer.style.display = 'none';
    return;
  }
  
  if (emptyState) emptyState.style.display = 'none';
  if (footer) footer.style.display = 'block';
  
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rs. ${item.price}</div>
        <div class="quantity-controls">
          <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    </div>
  `).join('');
  
  const totalEl = document.querySelector('.cart-total-amount');
  if (totalEl) totalEl.textContent = `Rs. ${getCartTotal()}`;
}

function renderFavoritesItems() {
  const container = document.querySelector('.favorites-items');
  const emptyState = document.querySelector('.favorites-empty');
  
  if (!container) return;
  
  if (favorites.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  
  if (emptyState) emptyState.style.display = 'none';
  
  container.innerHTML = favorites.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rs. ${item.price}</div>
        <span class="menu-card-category">${item.category}</span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <button class="add-to-cart-btn" onclick="addToCart(menuItems.find(m => m.id === '${item.id}')); closeFavoritesDrawer();">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </button>
        <button class="cart-item-remove" onclick="toggleFavorite(menuItems.find(m => m.id === '${item.id}'))">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Auth Modal
let authMode = 'signin';
let showOTP = false;

function showAuthModal() {
  document.querySelector('.auth-overlay').classList.add('active');
  authMode = 'signin';
  showOTP = false;
  renderAuthModal();
}

function closeAuthModal() {
  document.querySelector('.auth-overlay').classList.remove('active');
}

function renderAuthModal() {
  const content = document.querySelector('.auth-modal-content');
  if (!content) return;
  
  if (showOTP) {
    content.innerHTML = `
      <h3 class="modal-title" style="text-align: center;">Verify OTP</h3>
      <p style="text-align: center; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Enter the 6-digit code sent to your phone</p>
      <div class="otp-container">
        <input type="text" class="otp-input" maxlength="1" data-index="0">
        <input type="text" class="otp-input" maxlength="1" data-index="1">
        <input type="text" class="otp-input" maxlength="1" data-index="2">
        <input type="text" class="otp-input" maxlength="1" data-index="3">
        <input type="text" class="otp-input" maxlength="1" data-index="4">
        <input type="text" class="otp-input" maxlength="1" data-index="5">
      </div>
      <button class="btn-gold" style="width: 100%;" onclick="handleVerifyOTP()">Verify</button>
    `;
    setupOTPInputs();
  } else if (authMode === 'signin') {
    content.innerHTML = `
      <h3 class="modal-title" style="text-align: center;">Welcome Back</h3>
      <form id="signinForm" style="margin-top: 1.5rem;">
        <div class="form-group">
          <input type="email" class="input-luxury" name="email" required placeholder="Email Address" style="color: hsl(var(--gold-dark));">
        </div>
        <div class="form-group">
          <input type="password" class="input-luxury" name="password" required placeholder="Password" style="color: hsl(var(--gold-dark));">
        </div>
        <button type="submit" class="btn-gold" style="width: 100%;">Sign In</button>
      </form>
      <p style="text-align: center; margin-top: 1rem; color: hsl(var(--gold));">
        Don't have an account? <a href="#" onclick="authMode='signup'; renderAuthModal(); return false;" style="color: hsl(var(--gold));">Sign Up</a>
      </p>
    `;
    document.getElementById('signinForm').onsubmit = handleSignIn;
  } else {
    content.innerHTML = `
      <h3 class="modal-title" style="text-align: center;">Create Account</h3>
      <form id="signupForm" style="margin-top: 1.5rem;">
        <div class="form-group">
          <input type="text" class="input-luxury" name="name" required placeholder="Full Name" style="color: hsl(var(--gold-dark));">
        </div>
        <div class="form-group">
          <input type="email" class="input-luxury" name="email" required placeholder="Email Address" style="color: hsl(var(--gold-dark));">
        </div>
        <div class="form-group">
          <input type="tel" class="input-luxury" name="phone" required placeholder="Phone Number" style="color: hsl(var(--gold-dark));">
        </div>
        <div class="form-group">
          <input type="password" class="input-luxury" name="password" required placeholder="Password" style="color: hsl(var(--gold-dark));">
        </div>
        <button type="submit" class="btn-gold" style="width: 100%;">Sign Up</button>
      </form>
      <p style="text-align: center; margin-top: 1rem; color: hsl(var(--gold));">
        Already have an account? <a href="#" onclick="authMode='signin'; renderAuthModal(); return false;" style="color: hsl(var(--gold));">Sign In</a>
      </p>
    `;
    document.getElementById('signupForm').onsubmit = handleSignUp;
  }
}

function handleSignIn(e) {
  e.preventDefault();
  const form = e.target;
  login(form.email.value, form.password.value);
}

function handleSignUp(e) {
  e.preventDefault();
  const form = e.target;
  if (signup(form.name.value, form.email.value, form.phone.value, form.password.value)) {
    showOTP = true;
    renderAuthModal();
  }
}

function handleVerifyOTP() {
  const inputs = document.querySelectorAll('.otp-input');
  const otp = Array.from(inputs).map(i => i.value).join('');
  verifyOTP(otp);
}

function setupOTPInputs() {
  const inputs = document.querySelectorAll('.otp-input');
  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value && index < 5) {
        inputs[index + 1].focus();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
}

// Profile Dropdown
function toggleProfileDropdown() {
  const menu = document.querySelector('.profile-menu');
  menu.classList.toggle('active');
}

function closeProfileDropdown() {
  const menu = document.querySelector('.profile-menu');
  if (menu) menu.classList.remove('active');
}

// Menu Card Rendering
function renderMenuCards(items = null, containerId = 'menuGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const itemsToRender = items || menuItems;
  
  container.innerHTML = itemsToRender.map(item => `
    <div class="menu-card animate-fade-in">
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.isSignature ? '<span class="signature-badge">Signature</span>' : ''}
        <button class="favorite-btn ${isFavorite(item.id) ? 'active' : ''}" onclick="toggleFavorite(menuItems.find(m => m.id === '${item.id}'))">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFavorite(item.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="menu-card-content">
        <div class="menu-card-header">
          <h3 class="menu-card-name">${item.name}</h3>
          <span class="menu-card-price">Rs. ${item.price}</span>
        </div>
        <p class="menu-card-description">${item.description}</p>
        <div class="menu-card-footer">
          <span class="menu-card-category">${item.category}</span>
          <button class="add-to-cart-btn" onclick="addToCart(menuItems.find(m => m.id === '${item.id}'))">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Category Filter
let activeCategory = 'All';

function filterByCategory(category) {
  activeCategory = category;
  
  // Update button states
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  
  // Filter and render
  const filtered = category === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);
  
  renderMenuCards(filtered);
}

function renderCategoryFilter() {
  const container = document.querySelector('.category-filter');
  if (!container) return;
  
  container.innerHTML = categories.map(cat => `
    <button class="category-btn ${cat === activeCategory ? 'active' : ''}" data-category="${cat}" onclick="filterByCategory('${cat}')">
      ${cat}
    </button>
  `).join('');
}

// Hero Slider
let currentSlide = 0;
let sliderInterval;

function initHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  
  // Create slides
  slider.innerHTML = `
    ${sliderImages.map((slide, index) => `
      <div class="slide ${index === 0 ? 'active' : ''}">
        <img src="${slide.url}" alt="${slide.title}">
        <div class="slide-overlay">
          <h1 class="slide-title">${slide.title}</h1>
          <p class="slide-subtitle">${slide.subtitle}</p>
        </div>
      </div>
    `).join('')}
    <div class="slide-indicators">
      ${sliderImages.map((_, index) => `
        <button class="indicator ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></button>
      `).join('')}
    </div>
  `;
  
  // Auto-play
  sliderInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
  goToSlide((currentSlide + 1) % sliderImages.length);
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  
  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');
  
  currentSlide = index;
  
  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

// Scroll Effects
function initScrollEffects() {
  const navbar = document.querySelector('.navbar');
  const scrollBtn = document.querySelector('.scroll-to-top');
  
  window.addEventListener('scroll', () => {
    // Navbar background
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    
    // Scroll to top button
    if (scrollBtn) {
      scrollBtn.classList.toggle('visible', window.scrollY > 100);
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// MOBILE MENU TOGGLE WITH OVERLAY
// ============================================

function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const body = document.body;

  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (menu.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}


// Close mobile menu when clicking overlay
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.mobile-menu-overlay');
  if (overlay) {
    overlay.addEventListener('click', toggleMobileMenu);
  }
});

// ============================================
// SHOW/HIDE FIXED RESERVE BUTTON
// ============================================

window.addEventListener('scroll', () => {
  const reserveBtn = document.querySelector('.btn-reserve-fixed');
  const scrollBtn = document.querySelector('.scroll-to-top');
  
  if (window.scrollY > 100) {
    if (reserveBtn) reserveBtn.classList.add('visible');
    if (scrollBtn) scrollBtn.classList.add('visible');
  } else {
    if (reserveBtn) reserveBtn.classList.remove('visible');
    if (scrollBtn) scrollBtn.classList.remove('visible');
  }
});


// Close dropdowns on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.profile-dropdown')) {
    closeProfileDropdown();
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadUserData();
  updateCartBadge();
  updateAuthUI();
  initScrollEffects();
  
  // Page-specific init
  if (document.querySelector('.hero-slider')) {
    initHeroSlider();
  }
  
  if (document.querySelector('.category-filter')) {
    renderCategoryFilter();
  }
  
  if (document.getElementById('menuGrid')) {
    renderMenuCards();
  }
  
  if (document.getElementById('signatureGrid')) {
    const signatureItems = menuItems.filter(item => item.isSignature).slice(0, 6);
    renderMenuCards(signatureItems, 'signatureGrid');
  }
  
  // Checkout page
  if (document.getElementById('checkoutForm')) {
    initCheckout();
  }
  
  // Dashboard page
  if (document.getElementById('dashboardContent')) {
    initDashboard();
  }
  
  // Contact page
  if (document.getElementById('reservationForm')) {
    initContact();
  }
});

// Checkout Page
function initCheckout() {
  if (cart.length === 0) {
    window.location.href = 'menu.html';
    return;
  }
  
  if (!currentUser) {
    window.location.href = 'index.html';
    return;
  }
  
  renderOrderSummary();
  
  document.getElementById('checkoutForm').onsubmit = handleCheckout;
  
  // Payment method toggle
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      document.getElementById('cardFields').style.display = 
        e.target.value === 'card' ? 'block' : 'none';
    });
  });
}

function renderOrderSummary() {
  const container = document.getElementById('orderItems');
  if (!container) return;
  
  container.innerHTML = cart.map(item => `
    <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid hsl(var(--border)); font-color: hsl(var(--muted-foreground));">
      <span>${item.name}  ×  ${item.quantity}</span>
      <span>Rs. ${item.price * item.quantity}</span>
    </div>
  `).join('');
  
  document.getElementById('subtotal').textContent = `Rs. ${getCartTotal()}`;
  document.getElementById('grandTotal').textContent = `Rs. ${getCartTotal() + 150}`;
}

function handleCheckout(e) {
  e.preventDefault();
  const form = e.target;
  
  const deliveryDetails = {
    name: form.fullName.value,
    email: form.email.value,
    phone: form.phone.value,
    address: form.address.value,
    city: form.city.value,
    notes: form.notes?.value || ''
  };
  
  const paymentMethod = form.payment.value;
  
  if (placeOrder(deliveryDetails, paymentMethod)) {
    window.location.href = 'dashboard.html';
  }
}

// Dashboard Page
function initDashboard() {
  if (!currentUser) {
    window.location.href = 'index.html';
    return;
  }
  
  renderDashboard();
}

function renderDashboard() {
  const container = document.getElementById('dashboardContent');
  if (!container) return;
  
  container.innerHTML = `
    <div class="dashboard-header">
      <div>
        <h1 style="font-size: 2rem;">Welcome, ${currentUser.name}!</h1>
        <p class="text-muted">${currentUser.email}</p>
      </div>
      <button class="btn-outline" onclick="logout()">Sign Out</button>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${orders.length}</div>
        <div class="stat-label">Orders</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${reservations.length}</div>
        <div class="stat-label">Reservations</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${favorites.length}</div>
        <div class="stat-label">Favorites</div>
      </div>
    </div>
    
    <h2 style="margin: 2rem 0 1rem;">My Orders</h2>
    ${orders.length === 0 ? '<p class="text-muted">No orders yet</p>' : orders.map(order => `
      <div class="card-luxury" style="padding: 1.5rem; margin-bottom: 1rem; border-left: 4px solid hsl(var(--gold));">
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
          <span class="text-muted">Order #${order.id.slice(-6)}</span>
          <span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span>
        </div>
        <div style="margin-bottom: 0.5rem;">
          ${order.items.map(item => `${item.name} × ${item.quantity}`).join(', ')}
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span class="text-muted">${new Date(order.createdAt).toLocaleDateString()}</span>
          <span class="text-gold">Rs. ${order.total}</span>
        </div>
      </div>
    `).join('')}
    
    <h2 style="margin: 2rem 0 1rem;">My Reservations</h2>
    ${reservations.length === 0 ? '<p class="text-muted">No reservations yet</p>' : reservations.map(res => `
      <div class="card-luxury" style="padding: 1.5rem; margin-bottom: 2rem; border-left: 4px solid hsl(var(--gold));">
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
          <span class="text-muted">Reservation #${res.id.slice(-6)}</span>
          <span class="status-badge status-${res.status.toLowerCase()}">${res.status}</span>
        </div>
        <div style="margin-bottom: 0.5rem;">
          <strong>${res.date}</strong> at ${res.time} • ${res.guests} guests
        </div>
        <div class="text-muted">${new Date(res.createdAt).toLocaleDateString()}</div>
      </div>
    `).join('')}
  `;
}

// Contact Page
function initContact() {
  document.getElementById('reservationForm').onsubmit = handleReservation;
  document.getElementById('contactForm').onsubmit = handleContactForm;
}

function handleReservation(e) {
  e.preventDefault();
  const form = e.target;
  
  if (!currentUser) {
    showAuthModal();
    return;
  }
  
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    date: form.date.value,
    time: form.time.value,
    guests: form.guests.value,
    occasion: form.occasion?.value || ''
  };
  
  if (makeReservation(data)) {
    form.reset();
  }
}

function handleContactForm(e) {
  e.preventDefault();
  showToast('Message sent successfully!');
  e.target.reset();
}
