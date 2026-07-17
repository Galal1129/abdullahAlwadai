export type CatalogProduct = {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
  unitAr: string;
  unitEn: string;
};

export type CatalogCategory = {
  slug: string;
  icon: string;
  products: CatalogProduct[];
};

export const catalog: CatalogCategory[] = [
  {
    slug: "food",
    icon: "food",
    products: [
      { id: "olive-oil", nameAr: "زيت زيتون بكر", nameEn: "Extra Virgin Olive Oil", price: 8.5, unitAr: "للتر", unitEn: "per liter" },
      { id: "long-grain-rice", nameAr: "أرز طويل الحبة", nameEn: "Long Grain Rice", price: 1.8, unitAr: "للكيلو", unitEn: "per kg" },
      { id: "mixed-spices", nameAr: "بهارات مشكلة", nameEn: "Mixed Spices", price: 4.25, unitAr: "للعبوة", unitEn: "per pack" },
    ],
  },
  {
    slug: "cosmetics",
    icon: "cosmetics",
    products: [
      { id: "skin-serum", nameAr: "سيروم عناية بالبشرة", nameEn: "Skincare Serum", price: 6.9, unitAr: "للقطعة", unitEn: "per item" },
      { id: "moisturizer", nameAr: "كريم ترطيب", nameEn: "Moisturizing Cream", price: 5.4, unitAr: "للقطعة", unitEn: "per item" },
      { id: "facial-cleanser", nameAr: "غسول للوجه", nameEn: "Facial Cleanser", price: 4.75, unitAr: "للقطعة", unitEn: "per item" },
    ],
  },
  {
    slug: "clothing",
    icon: "shirt",
    products: [
      { id: "cotton-shirt", nameAr: "قميص قطني", nameEn: "Cotton Shirt", price: 9.5, unitAr: "للقطعة", unitEn: "per item" },
      { id: "cotton-fabric", nameAr: "قماش قطني", nameEn: "Cotton Fabric", price: 3.8, unitAr: "للمتر", unitEn: "per meter" },
      { id: "home-textiles", nameAr: "منسوجات منزلية", nameEn: "Home Textiles", price: 12, unitAr: "للطقم", unitEn: "per set" },
    ],
  },
  {
    slug: "footwear",
    icon: "shoe",
    products: [
      { id: "sports-shoes", nameAr: "حذاء رياضي", nameEn: "Sports Shoes", price: 14.9, unitAr: "للزوج", unitEn: "per pair" },
      { id: "formal-shoes", nameAr: "حذاء جلدي رسمي", nameEn: "Leather Formal Shoes", price: 19.5, unitAr: "للزوج", unitEn: "per pair" },
      { id: "casual-shoes", nameAr: "حذاء يومي", nameEn: "Casual Shoes", price: 11.75, unitAr: "للزوج", unitEn: "per pair" },
    ],
  },
  {
    slug: "bags",
    icon: "bag",
    products: [
      { id: "handbag", nameAr: "حقيبة يد", nameEn: "Handbag", price: 12.5, unitAr: "للقطعة", unitEn: "per item" },
      { id: "travel-bag", nameAr: "حقيبة سفر", nameEn: "Travel Bag", price: 22, unitAr: "للقطعة", unitEn: "per item" },
      { id: "business-bag", nameAr: "حقيبة أعمال", nameEn: "Business Bag", price: 17.5, unitAr: "للقطعة", unitEn: "per item" },
    ],
  },
  {
    slug: "electronics",
    icon: "phone",
    products: [
      { id: "earbuds", nameAr: "سماعات لاسلكية", nameEn: "Wireless Earbuds", price: 9.9, unitAr: "للطقم", unitEn: "per set" },
      { id: "fast-charger", nameAr: "شاحن سريع", nameEn: "Fast Charger", price: 5.75, unitAr: "للقطعة", unitEn: "per item" },
      { id: "smart-watch", nameAr: "ساعة ذكية", nameEn: "Smart Watch", price: 18.5, unitAr: "للقطعة", unitEn: "per item" },
    ],
  },
  {
    slug: "medical-supplies",
    icon: "medical",
    products: [
      { id: "medical-gloves", nameAr: "قفازات طبية", nameEn: "Medical Gloves", price: 3.9, unitAr: "للعلبة", unitEn: "per box" },
      { id: "medical-masks", nameAr: "كمامات طبية", nameEn: "Medical Masks", price: 2.5, unitAr: "للعلبة", unitEn: "per box" },
      { id: "thermometer", nameAr: "جهاز قياس الحرارة", nameEn: "Digital Thermometer", price: 6.8, unitAr: "للقطعة", unitEn: "per item" },
    ],
  },
  {
    slug: "home-goods",
    icon: "home",
    products: [
      { id: "cookware", nameAr: "طقم أواني طهي", nameEn: "Cookware Set", price: 28, unitAr: "للطقم", unitEn: "per set" },
      { id: "utensils", nameAr: "أدوات مطبخ", nameEn: "Kitchen Utensils", price: 7.5, unitAr: "للطقم", unitEn: "per set" },
      { id: "ceramic-set", nameAr: "طقم سيراميك", nameEn: "Ceramic Set", price: 16.9, unitAr: "للطقم", unitEn: "per set" },
    ],
  },
  {
    slug: "spare-parts",
    icon: "gear",
    products: [
      { id: "brake-disc", nameAr: "قرص فرامل", nameEn: "Brake Disc", price: 21, unitAr: "للقطعة", unitEn: "per item" },
      { id: "bearing", nameAr: "رولمان بلي", nameEn: "Wheel Bearing", price: 8.75, unitAr: "للقطعة", unitEn: "per item" },
      { id: "industrial-gear", nameAr: "ترس صناعي", nameEn: "Industrial Gear", price: 15.5, unitAr: "للقطعة", unitEn: "per item" },
    ],
  },
  {
    slug: "other-products",
    icon: "boxOpen",
    products: [
      { id: "coffee-machine", nameAr: "ماكينة قهوة صغيرة", nameEn: "Compact Coffee Machine", price: 35, unitAr: "للقطعة", unitEn: "per item" },
      { id: "electric-drill", nameAr: "مثقاب كهربائي", nameEn: "Electric Drill", price: 24.5, unitAr: "للقطعة", unitEn: "per item" },
      { id: "desk-fan", nameAr: "مروحة مكتبية", nameEn: "Desk Fan", price: 11.9, unitAr: "للقطعة", unitEn: "per item" },
    ],
  },
];

export const categorySlugByIcon = Object.fromEntries(catalog.map((category) => [category.icon, category.slug]));
