const PRODUCTS = {
  // Agricultural products

  pulses: {                                                                              //no.1
    title: "Pulses",
    description: "Premium quality Indian pulses processed and packed for global export.",
    items: [
      {
        id: "pigeon-peas",
        name: "Pigeon Peas (Toor Dal)",
        image: "../../assets/images/Photo/Agricultural/Pulses/Pigeon Peas.png",
        origin: "India",
        moq: "100kg",
        packaging: "25kg / 50kg PP Bags",
        description: "Pigeon Peas (Toor Dal) are widely consumed pulses known for their rich protein content and nutritional value. Our export-quality Toor Dal is carefully processed to ensure purity, uniform size, and long shelf life.",
        para: "Toor Dal is a staple ingredient in many global cuisines and is highly valued for its nutritional profile and versatility in cooking.",

        specifications: [
          "Moisture: ≤ 12%",
          "Purity: 99% Clean",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"
        ]
      },

      {
        id: "split-chickpeas",
        name: "Split Chickpeas (Chana Dal)",
        origin: "India",
        moq: "100kg",
        tag: "",
        description: "Split Chick Peas (Chana Dal) are premium-quality pulses widely used in household cooking and food processing industries. Our chickpeas are thoroughly cleaned and graded to ensure uniform size, high purity, and excellent cooking quality.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99% Clean",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Pulses/Split Chickpeas.png",
        para: "Kabuli chickpeas are rich in protein and fiber and are commonly used in curries, salads, snacks, and flour-based food products.",
      },

      {
        id: "lentils",
        name: "Lentils (Masoor Dal)",
        origin: "India",
        moq: "100kg",
        tag: "",
        description: "Lentils (Masoor Dal) are widely consumed pulses known for their quick cooking and nutritional benefits. Our masoor dal is sourced from reliable farms and processed to ensure consistent quality and purity.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99% Clean",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Pulses/Lentils.png",
        para: "Masoor Dal is commonly used in soups, stews, and curries, making it a popular choice in both domestic and international markets.",
      },

      {
        id: "green-gram",
        name: "Green Gram (Moong Dal)",
        origin: "India",
        moq: "100kg",
        tag: "",
        description: "Green Gram (Moong Dal) is a nutritious pulse valued for its easy digestibility and high protein content. Our export-grade moong dal is carefully processed to retain its natural color, taste, and nutritional properties.",
        para: "Moong Dal is widely used in soups, curries, sprouts, and health-focused food preparations across international markets.",
        para: "Moong Dal is widely used in soups, curries, sprouts, and health-focused food preparations across international markets.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99% Clean",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Pulses/Green Gram.png"
      },

      {
        id: "black-matpe",
        name: "Black Matpe (Urad Dal)",
        origin: "India",
        moq: "100kg",
        tag: "",
        description: "Black Matpe (Urad Dal) is a high-protein pulse commonly used in traditional and industrial food preparations. Our urad dal is cleaned and processed under strict quality controls to meet export standards.",
        para: "Urad Dal is extensively used in fermented foods, batters, and specialty dishes, making it a valuable ingredient in global cuisines.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99% Clean",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Pulses/Black Matpe.png"
      }
    ]
  },

  wheat: {                                                                              //no.2
    title: "Wheat",
    description: "High-quality Indian wheat varieties suitable for flour milling and consumption.",
    items: [
      {
        id: "lokwan-wheat",
        name: "Lokwan Wheat",
        origin: "Madhya Pradesh, IN",
        moq: "500kg",
        tag: "Popular",
        description: "Lokwan Wheat is known for its superior milling quality and high nutritional value. Our wheat is carefully sourced and processed for export.",
        para: "Lokwan wheat is widely used for flour production and bakery applications.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Wheat/lokwan-wheat.jpg"
      },

      {
        id: "mp-sharbati-wheat",
        name: "MP Sharbati Wheat (Premium)",
        origin: "Madhya Pradesh, IN",
        moq: "500kg",
        tag: "Premium",
        description: "MP Sharbati Wheat is premium-quality wheat known for softness and excellent taste. Ideal for export markets.",
        para: "Sharbati wheat is preferred for making chapati and bakery products.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Wheat/MP Sharbati Wheat.webp"
      }
    ]
  },

  rice: {                                                                              //no.3
    title: "Rice",
    description: "Wide range of basmati and non-basmati rice for domestic and international markets.",
    items: [
      {
        id: "1121-basmati-rice",
        name: "1121 Basmati Rice",
        origin: "India",
        moq: "1000kg",
        tag: "Export Bestseller",
        description: "1121 Basmati Rice is renowned for its extra-long grains and aromatic fragrance. Our basmati rice meets global export standards.",
        para: "Preferred in premium rice markets for its elongation and flavor after cooking.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Grain Length: Extra Long",
          "Moisture: ≤ 14%",
          "Broken Grains: ≤ 2%",
          "Shelf Life: 24 Months"],
        image: "../../assets/images/Photo/Agricultural/Rice/1121 Basmati Rice.jpg"
      },

      {
        id: "1509-basmati-rice",
        name: "1509 Basmati Rice",
        origin: "India",
        moq: "1000kg",
        tag: "",
        description: "1509 Basmati Rice is a premium aromatic rice variety known for its long grains and excellent cooking properties. It offers a cost-effective alternative to traditional basmati while maintaining superior taste and aroma.",
        para: "1509 Basmati Rice is widely used in households, restaurants, and food service industries for biryani and premium rice dishes.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Grain Length: Long",
          "Moisture: ≤ 14%",
          "Broken Grains: ≤ 2%",
          "Shelf Life: 24 Months"],
        image: "../../assets/images/Photo/Agricultural/Rice/1509 basmati sella rice.jpg"
      },

      {
        id: "pusa-basmati-rice",
        name: "Pusa Basmati Rice",
        origin: "India",
        moq: "1000kg",
        tag: "",
        description: "Pusa Basmati Rice is a high-quality aromatic rice variety developed for improved yield and grain consistency. It delivers excellent elongation and fragrance after cooking.",
        para: "Pusa Basmati Rice is preferred in both domestic and export markets for its balanced quality, aroma, and affordability.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Grain Length: Long",
          "Moisture: ≤ 14%",
          "Broken Grains: ≤ 2%",
          "Shelf Life: 24 Months"],
        image: "../../assets/images/Photo/Agricultural/Rice/Organic Pusa Basmati Parboiled Rice.jpg"
      },

      {
        id: "sella-basmati-rice",
        name: "Sella Basmati (Golden / White)",
        origin: "India",
        moq: "1000kg",
        tag: "Sella",
        description: "Sella Basmati Rice is parboiled rice known for its firm texture, non-sticky nature, and golden appearance. It retains more nutrients and is ideal for bulk cooking.",
        para: "Sella Basmati Rice is widely used in hotels, catering services, and export markets where consistent grain structure is required.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Grain Type: Parboiled",
          "Moisture: ≤ 14%",
          "Broken Grains: ≤ 2%",
          "Shelf Life: 24 Months"],
        image: "../../assets/images/Photo/Agricultural/Rice/Sella Basmati.webp"
      },

      {
        id: "ir64",
        name: "IR64 (Non-Basmati)",
        origin: "India",
        moq: "1000kg",
        tag: "",
        description: "IR64 Rice is a popular non-basmati rice variety known for its affordability, uniform grains, and wide acceptance in global markets.",
        para: "IR64 rice is commonly used for daily consumption, food processing, and government supply chains.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Grain Length: Medium",
          "Moisture: ≤ 14%",
          "Broken Grains: ≤ 5%",
          "Shelf Life: 18 Months"],
        image: "../../assets/images/Photo/Agricultural/Rice/IR64 (Non-Basmati).jpg"
      },

      {
        id: "parboiled-rice",
        name: "Parboiled Rice",
        origin: "India",
        moq: "1000kg",
        tag: "",
        description: "Parboiled Rice is partially boiled in the husk, resulting in improved nutritional value and firm grain structure. It is highly durable during transportation and storage.",
        para: "Parboiled rice is widely consumed in African, Middle Eastern, and Asian markets due to its non-sticky texture and long shelf life.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Processing: Parboiled",
          "Moisture: ≤ 14%",
          "Broken Grains: ≤ 5%",
          "Shelf Life: 18 Months"],
        image: "../../assets/images/Photo/Agricultural/Rice/Parboiled Rice.jpg"
      }
    ]
  },

  maize: {                                                                              //no.4
    title: "Maize",
    description: "High-grade yellow maize for food and industrial use.",
    items: [
      {
        id: "yellow_maize",
        name: "Yellow Maize",
        origin: "India",
        moq: "100kg",
        tag: "",
        description: "Yellow Maize is a widely cultivated cereal grain used in food processing, animal feed, and industrial applications. Our export-quality maize is cleaned and graded to ensure uniformity and high nutritional value.",
        para: "Yellow maize is commonly used for corn flour, starch production, poultry feed, and ethanol manufacturing.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 14%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Maize/Yellow Maize.jpg"
      }
    ]
  },

  barley: {                                                                              //no.5
    title: "Barley",
    description: "Naturally grown barley grains suitable for food and brewing industries.",
    items: [
      {
        id: "barley-grains",
        name: "Barley Grains",
        origin: "India",
        moq: "500kg",
        tag: "",
        description: "Barley Grains are nutritious cereal grains widely used in food, beverages, and animal feed. Our barley is carefully processed to meet international export standards.",
        para: "Barley grains are commonly used in malt production, soups, health foods, and brewing industries.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Barley/Barley.jfif"
      }
    ]
  },

  millets: {                                                                              //no.6
    title: "Millets",
    description: "Nutritious and chemical-free millet varieties sourced from Indian farms.",
    items: [
      {
        id: "pearl-millet",
        name: "Pearl Millet (Bajra)",
        origin: "India",
        moq: "500kg",
        tag: "",
        description: "Pearl Millet is a drought-resistant cereal rich in nutrients and dietary fiber. Our bajra is processed to maintain freshness and purity for export markets.",
        para: "Pearl millet is widely consumed in traditional foods and health-focused diets.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Millets/Pearl Millet (Bajra).png"
      },

      {
        id: "sorghum",
        name: "Sorghum (Jowar)",
        origin: "India",
        moq: "500kg",
        tag: "",
        description: "Sorghum is a gluten-free millet valued for its nutritional benefits and versatility. Our jowar grains are carefully cleaned and graded for export.",
        para: "Sorghum is used in flour production, animal feed, and health food products.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Millets/Sorghum (Jowar).png"
      },

      {
        id: "finger-millet",
        name: "Finger Millet (Ragi)",
        origin: "India",
        moq: "500kg",
        tag: "",
        description: "Finger Millet is a highly nutritious grain rich in calcium and iron. Our ragi is processed under strict quality controls for export markets.",
        para: "Finger millet is widely used in health foods, baby foods, and traditional recipes.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Millets/Finger Millet (Ragi).jpg"
      },

      {
        id: "foxtail-millet",
        name: "Foxtail Millet",
        origin: "India",
        moq: "500kg",
        tag: "",
        description: "Foxtail Millet is a healthy grain known for its low glycemic index and rich nutrient profile. Our millet is export-grade and carefully processed.",
        para: "Foxtail millet is used in salads, porridges, and health-conscious diets.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Millets/Foxtail Millet.webp"
      },

      {
        id: "little-millet",
        name: "Little Millet",
        origin: "India",
        moq: "500kg",
        tag: "",
        description: "Little Millet is a nutritious grain valued for its high fiber content and easy digestibility. Our millet meets export-quality standards.",
        para: "Little millet is commonly used in traditional dishes and health food preparations.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Millets/Little Millet.webp"
      }
    ]
  },

  beans: {                                                                              //no.7
    title: "Beans",
    description: "Premium export-quality beans with high protein content.",
    items: [
      {
        id: "chick_peas",
        name: "Chick Peas",
        origin: "India",
        moq: "500kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Chick Peas (Kabuli Chana) are premium-quality pulses widely used in household cooking and food processing industries. Our chickpeas are thoroughly cleaned and graded to ensure uniform size, high purity, and excellent cooking quality.",
        para: "Kabuli chickpeas are rich in protein and fiber and are commonly used in curries, salads, snacks, and flour-based food products.",
        specifications: [
          "Moisture: ≤ 12%",
          "Purity: 99% Clean",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Beans/Chick Peas.png"
      },

      {
        id: "kidney_beans",
        name: "Kidney Beans",
        origin: "India",
        moq: "500kg",
        tag: "",
        description: "Kidney Beans are protein-rich legumes widely consumed in global cuisines. Our rajma is cleaned and graded for export-quality consistency.",
        para: "Kidney beans are commonly used in curries, stews, and ready-to-eat food products.",
        packaging: "25kg / 50kg PP Bags",
        specifications: ["Moisture: ≤ 12%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Agricultural/Beans/kidney beans.png"
      }
    ]
  },

  vegetables: {                                                                         //no.8
    title: "Vegetables",
    description: "Fresh and dehydrated vegetables sourced directly from farms.",
    items: [
      {
        id: "onions",
        name: "Onions",
        origin: "India",
        moq: "1000kg",
        tag: "",
        packaging: "Mesh / Jute Bags",
        description: "Indian Onions are known for their strong flavor, long shelf life, and export suitability. Our onions are carefully graded and packed for international markets.",
        para: "Onions are widely used in culinary preparations, food processing, and dehydration industries.",
        specifications: [
          "Moisture: Natural",
          "Size: Uniform Grading",
          "Shelf Life: 2–3 Months",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Agricultural/Vegetables/Onions.jpg"
      },

      {
        id: "garlic",
        name: "Garlic",
        origin: "India",
        moq: "500kg",
        tag: "",
        packaging: "Mesh / Carton Boxes",
        description: "Indian Garlic is valued for its strong aroma, rich flavor, and medicinal properties. Our garlic bulbs are sorted and packed for export.",
        para: "Garlic is widely used in food processing, seasoning, and pharmaceutical applications.",
        specifications: [
          "Moisture: Natural",
          "Clove Size: Uniform",
          "Shelf Life: 3–4 Months",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Agricultural/Vegetables/Garlic.jpg"
      },

      {
        id: "ginger",
        name: "Ginger",
        origin: "India",
        moq: "500kg",
        tag: "",
        packaging: "Mesh / Carton Boxes",
        description: "Indian Ginger is known for its pungent aroma and high oil content. Our ginger is freshly harvested and processed for export markets.",
        para: "Ginger is widely used in culinary, medicinal, and beverage industries.",
        specifications: [
          "Moisture: Natural",
          "Oil Content: High",
          "Shelf Life: 2–3 Months",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Agricultural/Vegetables/Ginger.jpeg"
      },

      {
        id: "potato",
        name: "Potato",
        origin: "India",
        moq: "1000kg",
        tag: "",
        packaging: "Mesh / Jute Bags",
        description: "Indian Potatoes are known for their firm texture and long storage capability. Our potatoes are sorted and packed for export.",
        para: "Potatoes are widely used in fresh consumption and food processing industries.",
        specifications: [
          "Moisture: Natural",
          "Size: Uniform",
          "Shelf Life: 2–3 Months",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Agricultural/Vegetables/potato.jpeg"
      },

      {
        id: "green-chilli",
        name: "Green Chilli",
        origin: "India",
        moq: "300kg",
        tag: "",
        packaging: "Carton Boxes",
        description: "Green Chilli is widely used for its pungency and fresh flavor. Our chillies are carefully packed to preserve freshness during export.",
        para: "Green chillies are used in culinary preparations, sauces, and food processing.",
        specifications: [
          "Moisture: Natural",
          "Pungency: High",
          "Shelf Life: 2–3 Weeks",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Agricultural/Vegetables/Green Chilli.jpg"
      }
    ]
  },

  others: {                                                                              //no.9
    title: "Other Products",
    description: "Specialty agricultural and natural products for global trade.",
    items: [
      {
        id: "jaggery",
        name: "Jaggery",
        origin: "India",
        moq: "500kg",
        tag: "",
        packaging: "Carton / Jute Bags",
        description: "Jaggery is a natural sweetener made from sugarcane juice, valued for its nutritional benefits. Our jaggery is processed without chemical additives.",
        para: "Jaggery is used in food preparation, sweets, and traditional medicines.",
        specifications: [
          "Moisture: ≤ 10%",
          "Purity: 99%",
          "Shelf Life: 6 Months",
          "Quality: Chemical-Free"
        ],
        image: "../../assets/images/Photo/Agricultural/others/Jaggery.JPG"
      },

      {
        id: "fox-nuts",
        name: "Fox Nuts (Makhana)",
        origin: "India",
        moq: "100kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Fox Nuts are premium edible seeds valued for their nutritional and medicinal properties. Our makhana is handpicked and graded for export.",
        para: "Fox nuts are used in snacks, health foods, and religious offerings.",
        specifications: [
          "Moisture: ≤ 8%",
          "Purity: 99%",
          "Shelf Life: 12 Months",
          "Quality: Premium Grade"
        ],
        image: "../../assets/images/Photo/Agricultural/others/Fox Nuts (Makhana).jpg"
      },

      {
        id: "nutmeg",
        name: "Nutmeg",
        origin: "India",
        moq: "50kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Nutmeg is a valuable spice and agricultural product known for its aromatic flavor and medicinal properties. Our nutmeg is dried and cleaned for export.",
        para: "Nutmeg is used in food seasoning, pharmaceuticals, and cosmetic products.",
        specifications: [
          "Moisture: ≤ 10%",
          "Purity: 99%",
          "Shelf Life: 24 Months",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Agricultural/others/Nutmeg.jpg"
      },

      {
        id: "honey",
        name: "Honey",
        origin: "India",
        moq: "200kg",
        tag: "Natural",
        packaging: "Glass / Food-Grade Containers",
        description: "Natural Honey is collected from trusted apiaries and processed without additives. Our honey meets international food safety standards.",
        para: "Honey is widely used in food, beverages, cosmetics, and medicinal products.",
        specifications: [
          "Moisture: ≤ 20%",
          "Purity: 100% Natural",
          "Shelf Life: 24 Months",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Agricultural/others/honey.jpg"
      },

      {
        id: "guar-gum-powder",
        name: "Guar Gum Powder",
        origin: "India",
        moq: "100kg",
        tag: "Organic",
        packaging: "25kg HDPE Bags",
        description: "Guar Gum Powder is a natural thickening agent extracted from guar beans. Our product is processed to meet food and industrial grade standards.",
        para: "Guar gum is widely used in food processing, pharmaceuticals, and oil drilling industries.",
        specifications: [
          "Viscosity: High",
          "Moisture: ≤ 10%",
          "Shelf Life: 24 Months",
          "Quality: Industrial / Food Grade"
        ],
        image: "../../assets/images/Photo/Agricultural/others/guar gum powder.webp"
      },

      {
        id: "cow-dung-manure",
        name: "Cow Dung Manure",
        origin: "India",
        moq: "1000kg",
        tag: "Organic",
        packaging: "25kg / 50kg Bags",
        description: "Cow Dung Manure is an organic fertilizer used to improve soil fertility and crop yield. Our manure is naturally processed and eco-friendly.",
        para: "It is widely used in organic farming and horticulture practices.",
        specifications: [
          "Moisture: Natural",
          "Organic Content: High",
          "Shelf Life: 6 Months",
          "Quality: Organic"
        ],
        image: "../../assets/images/Photo/Agricultural/others/Cow Dung Manure.jpg"
      }
    ]
  },

  // Spice Products

  spices: {
    title: "Our Spices",
    description: "Aromatic Indian spices with rich flavor, color, and essential oils.",
    items: [
      {
        id: "black-pepper",
        name: "Black Pepper",
        origin: "Kerala, IN",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Black Pepper is one of the most widely traded spices globally, known for its pungent flavor and strong aroma. Our black pepper is carefully cleaned and graded to meet international export standards.",
        para: "Black pepper is extensively used in culinary applications, seasoning blends, and pharmaceutical preparations.",
        specifications: [
          "Moisture: ≤ 12%",
          "Purity: 99%",
          "Bulk Density: 550–600 g/L",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Black Pepper/Black Pepper.png"
      },

      {
        id: "cardamom",
        name: "Cardamom",
        origin: "Kerala, IN",
        moq: "50kg",
        tag: "Premium",
        packaging: "5kg / 10kg Carton Boxes",
        description: "Cardamom is a premium aromatic spice valued for its sweet flavor and medicinal properties. Our cardamom pods are handpicked and graded for export quality.",
        para: "Cardamom is widely used in food flavoring, beverages, confectionery, and traditional medicines.",
        specifications: [
          "Moisture: ≤ 10%",
          "Pod Color: Natural Green",
          "Oil Content: High",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Cardamom/close-up-of-many-cardamom-on-table_5138838.jpg"
      },

      {
        id: "cloves",
        name: "Cloves",
        origin: "India",
        moq: "50kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Cloves are dried flower buds known for their strong aroma and high essential oil content. Our cloves are sorted and cleaned to ensure uniform quality for export markets.",
        para: "Cloves are widely used in spice blends, food processing, pharmaceuticals, and personal care products.",
        specifications: [
          "Moisture: ≤ 10%",
          "Oil Content: ≥ 15%",
          "Purity: 99%",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Clove/cloves-in-plate-isolated-on-white-background_2902334.jpg"
      },

      {
        id: "turmeric",
        name: "Turmeric",
        origin: "India",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Turmeric is a widely used spice known for its vibrant color, flavor, and medicinal properties. Our turmeric is processed to retain high curcumin content and natural aroma.",
        para: "Turmeric is extensively used in food preparation, pharmaceuticals, cosmetics, and herbal formulations.",
        specifications: [
          "Curcumin Content: 2–5%",
          "Moisture: ≤ 12%",
          "Purity: 99%",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Turmeric/turmeric1.jpg"
      },

      {
        id: "coriander-seeds",
        name: "Coriander Seeds",
        origin: "India",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Coriander Seeds are valued for their mild citrusy flavor and aroma. Our coriander seeds are cleaned and graded for consistent quality.",
        para: "Coriander seeds are commonly used in spice blends, curries, and food processing industries.",
        specifications: [
          "Moisture: ≤ 10%",
          "Purity: 99%",
          "Oil Content: High",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Coriander Seeds/Coriander Seeds.jpg"
      },

      {
        id: "cinnamon",
        name: "Cinnamon",
        origin: "India",
        moq: "50kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Cinnamon is an aromatic spice obtained from tree bark, known for its warm flavor and medicinal benefits. Our cinnamon sticks are carefully selected for export quality.",
        para: "Cinnamon is widely used in bakery products, beverages, and pharmaceutical applications.",
        specifications: [
          "Moisture: ≤ 10%",
          "Flavor: Strong & Sweet",
          "Purity: 99%",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Cinnamon/cinnamon.jpg"
      },

      {
        id: "fenugreek",
        name: "Fenugreek",
        origin: "India",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Fenugreek Seeds are known for their slightly bitter taste and medicinal properties. Our seeds are processed to ensure export-grade cleanliness.",
        para: "Fenugreek seeds are used in spice blends, health foods, and pharmaceutical products.",
        specifications: [
          "Moisture: ≤ 10%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Fenugreek/Fenugreek.jpg"
      },

      {
        id: "fennel-seeds",
        name: "Fennel Seeds",
        origin: "India",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Fennel Seeds are aromatic seeds known for their sweet flavor and digestive benefits. Our fennel seeds are cleaned and graded for uniformity.",
        para: "Fennel seeds are widely used in mouth fresheners, spice mixes, and herbal preparations.",
        specifications: [
          "Moisture: ≤ 10%",
          "Purity: 99%",
          "Oil Content: High",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Fennel Seeds/full-frame-shot-plants.jpg"
      },

      {
        id: "cumin-seeds",
        name: "Cumin Seeds",
        origin: "India",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Cumin Seeds are valued for their strong aroma and distinctive flavor. Our cumin seeds are processed to meet international export standards.",
        para: "Cumin seeds are extensively used in spice blends, curries, and food processing.",
        specifications: [
          "Moisture: ≤ 10%",
          "Purity: 99%",
          "Oil Content: High",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Cumin Seeds/background-texture-dried-cumin-seeds.jpg"
      },

      {
        id: "dry-chillies",
        name: "Dry Chilies",
        origin: "India",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg Gunny Bags",
        description: "Dry Chillies are known for their pungency, color, and flavor. Our chillies are sun-dried and graded to maintain high quality for export.",
        para: "Dry chillies are widely used in spice powders, sauces, and food processing industries.",
        specifications: [
          "Moisture: ≤ 12%",
          "Color: Bright Red",
          "Pungency: High",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Dry Chilies/dried-red-chilli-background.jpg"
      },

      {
        id: "bay-leaves",
        name: "Bay Leaves",
        origin: "India",
        moq: "50kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Bay Leaves are aromatic leaves used to enhance flavor in various cuisines. Our bay leaves are dried and packed to preserve aroma.",
        para: "Bay leaves are commonly used in soups, curries, rice dishes, and spice blends.",
        specifications: [
          "Moisture: ≤ 10%",
          "Leaf Size: Uniform",
          "Purity: 99%",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Spices/Bay Leaves/high-angle-view-bay-leaves.jpg"
      }
    ]
  },

  // herbal Products
  herbs_Leafs: {
    title: "Our Herbal Products",
    description: "These herbaceous plants feature tender stems, completing their life cycle quickly, and are widely utilized for their health-promoting properties, traditional remedies, and aromatic qualities. ",
    items: [
      {
        id: "henna-leafs",
        name: "Henna Leafs",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Henna Leafs are natural leaves widely used for hair coloring, cooling, and medicinal purposes. Our henna leafs are shade-dried and processed to preserve natural color and quality.",
        para: "Henna leafs are commonly used in cosmetic, herbal, and traditional applications across global markets.",
        specifications: [
          "Moisture: ≤ 10%",
          "Color: Natural Green",
          "Purity: 99%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/Henna_leafs.jpg", link: ""
      },

      {
        id: "neem-leafs",
        name: "Neem Leafs",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Henna Leafs are natural leaves widely used for hair coloring, cooling, and medicinal purposes. Our henna leafs are shade-dried and processed to preserve natural color and quality.",
        para: "Henna leafs are commonly used in cosmetic, herbal, and traditional applications across global markets.",
        specifications: [
          "Moisture: ≤ 10%",
          "Color: Natural Green",
          "Purity: 99%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/neem_leafs.jpg"
      },

      {
        id: "tulsi-leafs",
        name: "Tulsi Leafs",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Neem Leafs are valued for their antibacterial and medicinal properties. Our neem leafs are naturally dried and cleaned for export-quality supply.",
        para: "Neem leafs are widely used in herbal medicine, cosmetics, and agricultural applications.",
        specifications: [
          "Moisture: ≤ 10%",
          "Purity: 99%",
          "Foreign Matter: ≤ 1%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/tulsi_leafs.png"
      },

      {
        id: "moringa-leafs",
        name: "Moringa Leafs",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Moringa Leafs are highly nutritious leaves rich in vitamins and minerals. Our moringa leafs are hygienically dried and processed for export.",
        para: "Moringa leafs are widely used in health supplements, herbal powders, and functional foods.",
        specifications: [
          "Moisture: ≤ 8%",
          "Color: Deep Green",
          "Purity: 99%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/Moringa_Leafs.png"
      },

      {
        id: "curry-leafs",
        name: "Curry Leafs",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Curry Leafs are aromatic leaves used extensively in Indian cooking and traditional medicine. Our curry leafs are naturally dried to retain flavor.",
        para: "Curry leafs are widely used in culinary seasoning and herbal preparations.",
        specifications: [
          "Moisture: ≤ 10%",
          "Aroma: Strong",
          "Purity: 99%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/Curry_leafs.png"
      },

      {
        id: "mint",
        name: "Mint",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Mint Leafs are refreshing aromatic leaves widely used in food and herbal products. Our mint leafs are shade-dried to preserve freshness and aroma.",
        para: "Mint leafs are commonly used in teas, flavoring agents, and medicinal formulations.",
        specifications: [
          "Moisture: ≤ 10%",
          "Aroma: Fresh",
          "Purity: 99%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/Mint_leafs.png"
      },
    ]
  },

  herbs_Floral: {
    title: "Our Herbal Products",
    description: "These herbaceous plants feature tender stems, completing their life cycle quickly, and are widely utilized for their health-promoting properties, traditional remedies, and aromatic qualities. ",
    items: [
      {
        id: "aparajita",
        name: "Aparajita",
        origin: "#",
        moq: "10kg",
        tag: "",
        packaging: "5kg / 10kg PP Bags",
        description: "Aparajita flowers are known for their vibrant blue color and medicinal benefits. Our flowers are naturally dried and packed for export.",
        para: "Aparajita is widely used in herbal teas, natural coloring, and Ayurvedic formulations.",
        specifications: [
          "Moisture: ≤ 8%",
          "Color: Natural Blue",
          "Purity: 99%",
          "Shelf Life: 12 Months"],
        image: "../../assets/images/Photo/Herbal Products/Aparajita.png"
      },
      {
        id: "hibiscus",
        name: "Hibiscus",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "5kg / 10kg PP Bags",
        description: "Hibiscus flowers are widely used for herbal teas, cosmetics, and hair care products. Our hibiscus flowers are shade-dried for export quality.",
        para: "Hibiscus is commonly used in herbal infusions and cosmetic formulations.",
        specifications: [
          "Moisture: ≤ 8%",
          "Color: Deep Red",
          "Purity: 99%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/Hibiscus.png"
      },

      {
        id: "marigold",
        name: "Marigold",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "5kg / 10kg PP Bags",
        description: "Marigold flowers are known for their vibrant color and medicinal properties. Our marigold flowers are carefully dried for export markets.",
        para: "Marigold is widely used in herbal medicine, cosmetics, and natural dye production.",
        specifications: [
          "Moisture: ≤ 8%",
          "Color: Bright Orange",
          "Purity: 99%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/Marigold.png"
      },

      {
        id: "rose",
        name: "Rose",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "5kg / 10kg PP Bags",
        description: "Rose flowers are valued for their fragrance and therapeutic benefits. Our roses are dried using hygienic methods to retain aroma.",
        para: "Rose flowers are used in cosmetics, perfumery, herbal teas, and wellness products.",
        specifications: [
          "Moisture: ≤ 8%",
          "Aroma: Natural",
          "Purity: 99%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/roses.png"
      },
    ]
  },

  herbs_Sticks: {
    title: "Our Herbal Products",
    description: "These herbaceous plants feature tender stems, completing their life cycle quickly, and are widely utilized for their health-promoting properties, traditional remedies, and aromatic qualities. ",
    items: [
      {
        id: "neem-sticks",
        name: "Neem Sticks",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "25kg Bundles",
        description: "Neem Sticks are traditionally used for oral hygiene and medicinal purposes. Our neem sticks are naturally processed and packed for export.",
        para: "Neem sticks are widely used in Ayurvedic practices and oral care products.",
        specifications: [
          "Moisture: Natural",
          "Length: Uniform",
          "Purity: 99%",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/neem_sticks.png"
      },

      {
        id: "drumsticks",
        name: "Drumsticks",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "Carton / Mesh Boxes",
        description: "Drumsticks are nutrient-rich pods widely used in culinary and medicinal applications. Our drumsticks are freshly harvested and packed for export.",
        para: "Drumsticks are commonly used in soups, curries, and health-focused diets.",
        specifications: [
          "Moisture: Natural",
          "Size: Uniform",
          "Freshness: High",
          "Shelf Life: 2–3 Weeks"
        ],
        image: "../../assets/images/Photo/Herbal Products/Drumsticks.png"
      },

      {
        id: "licorices",
        name: "Licorices (Mulethi)",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Licorice roots are valued for their sweet flavor and medicinal benefits. Our licorice roots are dried and cleaned to export standards.",
        para: "Licorice is widely used in herbal medicine, confectionery, and pharmaceutical industries.",
        specifications: [
          "Moisture: ≤ 10%",
          "Flavor: Naturally Sweet",
          "Purity: 99%",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/Licorices (Mulethi).png"
      },
    ]
  },

  herbs_Others: {
    title: "Our Herbal Products",
    description: "These herbaceous plants feature tender stems, completing their life cycle quickly, and are widely utilized for their health-promoting properties, traditional remedies, and aromatic qualities. ",
    items: [
      {
        id: "indian-gooseberries",
        name: "Indian Gooseberries",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "25kg / 50kg PP Bags",
        description: "Indian Gooseberries are rich in Vitamin C and widely used in Ayurvedic medicine. Our amla is carefully processed for export.",
        para: "Amla is commonly used in health supplements, juices, and herbal formulations.",
        specifications: [
          "Moisture: Natural",
          "Purity: 99%",
          "Shelf Life: 6 Months",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Herbal Products/Indian Gooseberries.png"
      },

      {
        id: "gilloy",
        name: "Gilloy",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Giloy is a medicinal herb known for its immunity-boosting properties. Our giloy is dried and processed to retain potency.",
        para: "Giloy is widely used in Ayurvedic medicines and herbal supplements.",
        specifications: [
          "Moisture: ≤ 10%",
          "Purity: 99%",
          "Active Content: High",
          "Shelf Life: 12 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/Gilloy.png"
      },

      {
        id: "ashwagandha",
        name: "Ashwagandha",
        origin: "#",
        moq: "100kg",
        tag: "",
        packaging: "10kg / 25kg PP Bags",
        description: "Ashwagandha is a renowned medicinal herb used for stress relief and vitality enhancement. Our ashwagandha is processed for export-grade quality.",
        para: "Ashwagandha is widely used in herbal supplements, pharmaceuticals, and wellness products.",
        specifications: [
          "Moisture: ≤ 10%",
          "Purity: 99%",
          "Withanolides: High",
          "Shelf Life: 24 Months"
        ],
        image: "../../assets/images/Photo/Herbal Products/Ashwagandha.png"
      },
    ]

  },

  // Religious Products

  religious: {
    title: "Religious Products",
    description: "authenticity, cultural respect, and a bridge between ancient tradition and modern mindfulness.",
    items: [
      {
        id: "dakshinavarti-shankh",
        name: "Dakshinavarti Shankh",
        origin: "India",
        moq: "10pcs",
        packaging: "Protective Box Packing",
        description: "Dakshinavarti Shankh is a sacred conch shell revered in Hindu rituals for prosperity and spiritual energy. Our shankhs are naturally sourced and carefully polished for ceremonial use.",
        para: "Dakshinavarti shankh is widely used in pooja rituals, temples, and spiritual practices across India and international markets.",
        specifications: [
          "Material: Natural Conch Shell",
          "Direction: Right Turning",
          "Finish: Polished",
          "Quality: Ritual Grade"
        ],
        image: "../../assets/images/Photo/Religious Products/Dakshinavarti_shankh.png"
      },

      {
        id: "conch-shell",
        name: "Conch Shell",
        origin: "India",
        moq: "10pcs",
        packaging: "Protective Box Packing",
        description: "Conch Shells are sacred items used in religious ceremonies and temple rituals. Our conch shells are naturally sourced and cleaned for spiritual use.",
        para: "Conch shells are traditionally used for blowing during pooja rituals and temple ceremonies.",
        specifications: [
          "Material: Natural Conch Shell",
          "Finish: Natural / Polished",
          "Usage: Ritual & Ceremonial",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Religious Products/Conch_Shell.png"
      },

      {
        id: "photo-frames",
        name: "Photo Frames",
        origin: "India",
        moq: "25pcs",
        packaging: "Carton Box Packing",
        description: "Religious Photo Frames feature high-quality images of Hindu deities crafted for worship and decor. Our frames are designed with durability and visual appeal.",
        para: "These photo frames are widely used in homes, temples, and spiritual centers.",
        specifications: [
          "Material: Wood / MDF",
          "Print Quality: High Resolution",
          "Finish: Gloss / Matte",
          "Usage: Worship & Decor"
        ],
        image: "../../assets/images/Photo/Religious Products/Photo_frames.jpg"
      },

      {
        id: "divine-statues",
        name: "Divine Statues",
        origin: "India",
        moq: "5pcs",
        packaging: "Foam & Box Packing",
        description: "Divine Statues represent various Hindu gods and goddesses, crafted with fine detailing and spiritual significance. Our statues are suitable for temples and home worship.",
        para: "Divine statues are commonly used for daily pooja, meditation spaces, and religious institutions.",
        specifications: [
          "Material: Resin / Metal / Stone",
          "Finish: Handcrafted",
          "Usage: Worship",
          "Quality: Premium Grade"
        ],
        image: "../../assets/images/Photo/Religious Products/Divine_Statues.jpg"
      },

      {
        id: "marble-idols",
        name: "Marble Idols & Artifacts",
        origin: "India",
        moq: "5pcs",
        packaging: "Wooden / Foam Packing",
        description: "Marble Idols and Artifacts are handcrafted from premium-quality marble with intricate detailing. Our marble products are suitable for long-lasting worship and decor.",
        para: "These artifacts are widely used in temples, homes, and spiritual spaces.",
        specifications: [
          "Material: Natural Marble",
          "Finish: Handcrafted",
          "Durability: Long Lasting",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Religious Products/Marble Statues.png"
      },
      {
        id: "Religious-decor-items",
        name: "Religious Decor Items",
        origin: "India",
        moq: "25pcs",
        packaging: "Carton Box Packing",
        description: "Religious Decor Items include traditional pooja accessories such as diyas, incense holders, wall hangings, and shankh holders. Our decor items are crafted for spiritual elegance.",
        para: "These items are widely used in homes, temples, and festive religious decorations.",
        specifications: [
          "Material: Brass / Wood / Metal",
          "Finish: Handcrafted",
          "Usage: Worship & Decor",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Religious Products/Pooja Decorative Items.png"
      },

      {
        id: "gems-rudraksha",
        name: "Gems & Rudraksha",
        origin: "India",
        moq: "10pcs",
        packaging: "Pouch / Box Packing",
        description: "Gems and Rudraksha beads are spiritual items valued for astrological and religious significance. Our products are authentic and sourced responsibly.",
        para: "These items are commonly used in meditation, astrology, and spiritual practices.",
        specifications: [
          "Material: Natural Gemstones",
          "Authenticity: Verified",
          "Usage: Spiritual",
          "Quality: Premium Grade"
        ],
        image: "../../assets/images/Photo/Religious Products/gemstones.png"
      },

      {
        id: "religious-beads",
        name: "Religious Beads",
        origin: "India",
        moq: "25pcs",
        packaging: "Pouch / Box Packing",
        description: "Religious Prayer Beads are used for meditation and chanting practices. Our beads are crafted for durability and spiritual comfort.",
        para: "Prayer beads are widely used in japa meditation and religious rituals.",
        specifications: [
          "Material: Wood / Rudraksha / Stone",
          "Bead Size: Uniform",
          "Usage: Meditation",
          "Quality: Export Grade"
        ],
        image: "../../assets/images/Photo/Religious Products/beads.png"
      },

      {
        id: "cow-dung-cakes",
        name: "Cow Dung Cakes",
        origin: "India",
        moq: "50pcs",
        packaging: "Bundled / Carton Packing",
        description: "Cow Dung Cakes are traditionally used in Hindu rituals, havan, and pooja ceremonies for their spiritual and purifying significance. Our cow dung cakes are naturally prepared using traditional methods without chemical additives.",
        para: "These cow dung cakes are widely used in religious ceremonies, yajnas, and organic household practices across India and international spiritual communities.",
        specifications: [
          "Material: Natural Cow Dung",
          "Preparation: Sun-Dried",
          "Usage: Religious & Ritual",
          "Quality: Traditional Grade"
        ],
        image: "../../assets/images/Photo/Religious Products/Cow dung cake.png"
      },
    ]
  },

};
