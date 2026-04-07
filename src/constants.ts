import { MenuItem, Testimonial, Category } from "./types";

export const CATEGORIES: Category[] = [
  { id: "especiais", name: "🔥 Especiais da Casa" },
  { id: "breakfast", name: "Pequeno-Almoço / Breakfast" },
  { id: "starters", name: "Entradas / Starters" },
  { id: "tostas", name: "Tostas / Toasties" },
  { id: "hamburgueres", name: "Hambúrgueres / Burgers" },
  { id: "wraps", name: "Wraps" },
  { id: "frango", name: "Frango / Chicken" },
  { id: "carnes", name: "Carnes / Steaks" },
  { id: "seafood", name: "Mariscos / Seafood" },
  { id: "pasta", name: "Pasta" },
  { id: "pizzas", name: "Pizzas" },
  { id: "waffles", name: "Waffles / Crepes" },
  { id: "bebidas", name: "Bebidas Geladas / Cold Drinks" },
  { id: "milkshakes", name: "Milkshakes & Sobremesas" },
  { id: "bebidas-quentes", name: "Bebidas Quentes / Hot Beverages" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Especiais
  {
    id: "kunafa-cheesecake",
    name: "Kunafa Cheesecake",
    price: 400,
    description: "Feito com chocolate do Dubai. Uma explosão de texturas e sabores.",
    image: "/images/kunafa-cheesecake.jpg",
    category: "especiais",
    isSpecial: true,
  },
  {
    id: "coffee-cheesecake",
    name: "Coffee Cheesecake",
    price: 400,
    description: "Para os amantes de café. Cremoso e intenso.",
    image: "/images/coffee-cheesecake.jpg",
    category: "especiais",
    isSpecial: true,
  },
  {
    id: "pineapple-cheesecake",
    name: "Pineapple Cheesecake",
    price: 400,
    description: "Fresco e tropical. O equilíbrio perfeito.",
    image: "/images/pineapple-cheesecake.jpg",
    category: "especiais",
    isSpecial: true,
  },

  // Tostas / Toasties
  { id: "t1", name: "Queijo e tomate / Cheese and tomato", price: 200, category: "tostas", image: "" },
  { id: "t2", name: "Frango e Maionese / Chicken Mayo", price: 250, category: "tostas", image: "" },
  { id: "t3", name: "Atum e Maionese / Tuna Mayo", price: 250, category: "tostas", image: "" },
  { id: "t4", name: "Mista (queijo e fiambre) / Mixed (Cheese and Beef Ham)", price: 250, category: "tostas", image: "" },
  { id: "t5", name: "Tosta de Hambúrger / Burger Toast", price: 300, category: "tostas", image: "" },

  // Hamburgueres / Burgers
  { id: "h1", name: "Hambúrguer simples de carne ou frango / Plain Chicken or Beef Burger", price: 250, category: "hamburgueres", image: "" },
  { id: "h2", name: "Hamburguer completo de carne ou frango / Complete Chicken or Beef Burger", price: 300, category: "hamburgueres", image: "" },
  { id: "h3", name: "Hambúrguer duplo de carne ou frango / Double Patty Chicken or Beef Burger", price: 400, category: "hamburgueres", image: "" },
  { id: "h4", name: "Mac Chicken Single", price: 250, category: "hamburgueres", image: "" },
  { id: "h5", name: "Mac Chicken Double", price: 300, category: "hamburgueres", image: "" },
  { id: "h6", name: "X Rocco Mamas", price: 300, category: "hamburgueres", image: "" },
  { id: "h7", name: "X Veg Burger", price: 250, category: "hamburgueres", image: "" },
  { id: "h8", name: "X Zinger Burger", price: 350, category: "hamburgueres", image: "" },
  { id: "h9", name: "Fish Burger", price: 350, category: "hamburgueres", image: "" },
  { id: "h10", name: "Cachorro quente / Hot Dog", price: 250, category: "hamburgueres", image: "" },
  { id: "h11", name: "Prego no Pão / Beef Steak in bread", price: 300, category: "hamburgueres", image: "" },

  // Wraps
  { id: "w1", name: "Burger Wrap", price: 250, category: "wraps", image: "" },
  { id: "w2", name: "Chicken Wrap", price: 260, category: "wraps", image: "" },
  { id: "w3", name: "Veg Wrap", price: 250, category: "wraps", image: "" },
  { id: "w4", name: "Shawarma chicken wrap", price: 300, category: "wraps", image: "" },

  // Frango / Chicken
  { id: "f1", name: "1/4 FRANGO / CHICKEN", price: 250, category: "frango", image: "" },
  { id: "f2", name: "1/2 FRANGO / CHICKEN", price: 450, category: "frango", image: "" },
  { id: "f3", name: "FRANGO INTEIRO / FULL CHICKEN", price: 850, category: "frango", image: "" },
  { id: "f4", name: "FRANGO Á ZAMBEZIANA 1/2 frango grelhado com molho de coco", price: 450, category: "frango", image: "" },
  { id: "f5", name: "Frango inteiro grelhado com molho de coco", price: 900, category: "frango", image: "" },
  { id: "f6", name: "ESPETADA DE FRANGO / CHICKEN SKEWERS", price: 400, category: "frango", image: "" },
  { id: "f7", name: "BIFE DE FRANGO / CHICKEN STEAK", price: 450, category: "frango", image: "" },
  { id: "f8", name: "Bife de frango grelhado com molho de manteiga", price: 450, category: "frango", image: "" },
  { id: "f9", name: "Bife de frango grelhado com molho de natas", price: 550, category: "frango", image: "" },
  { id: "f10", name: "1/2 TANDOORI CHICKEN", price: 450, category: "frango", image: "" },
  { id: "f11", name: "CHICKEN IN THE BOX (PEQUENO)", price: 250, category: "frango", image: "" },
  { id: "f12", name: "CHICKEN IN THE BOX (GRANDE)", price: 400, category: "frango", image: "" },
  { id: "f13", name: "FRANGO PANADO (2 Pedaços com batata frita)", price: 250, category: "frango", image: "" },
  { id: "f14", name: "FRANGO PANADO (4 Pedaços com batata frita)", price: 450, category: "frango", image: "" },

  // Carnes / Steaks
  { id: "c1", name: "PREGO NO PRATO / PREGO ON PLATE", price: 500, category: "carnes", image: "" },
  { id: "c2", name: "ESPETADAS DE CARNE / MEAT SKEWERS", price: 750, category: "carnes", image: "" },
  { id: "c3", name: "T-BONE Bife de Carne com molho de manteiga", price: 800, category: "carnes", image: "" },
  { id: "c4", name: "BIFE À PORTUGUESA / PORTUGUESE STYLE BEEF", price: 900, category: "carnes", image: "" },
  { id: "c5", name: "BIFE COM NATAS / CREAMY STEAK", price: 1000, category: "carnes", image: "" },
  { id: "c6", name: "BIFE Á PIMENTA / PEPPER STEAK", price: 1000, category: "carnes", image: "" },
  { id: "c7", name: "PICANHA / RUMP STEAK", price: 1000, category: "carnes", image: "" },
  { id: "c8", name: "BARBEQUE STEAK", price: 1200, category: "carnes", image: "" },
  { id: "c9", name: "CHEESY JALAPEÑO STEAK", price: 1200, category: "carnes", image: "" },

  // Mariscos / Seafood
  { id: "s1", name: "Peixe pende inteiro", price: 500, category: "seafood", image: "" },
  { id: "s2", name: "Filete de peixe pende panado ou grelhado", price: 500, category: "seafood", image: "" },
  { id: "s3", name: "Lulas Grelhadas", price: 800, category: "seafood", image: "" },
  { id: "s4", name: "Caril de Camarão com Côco", price: 800, category: "seafood", image: "" },
  { id: "s5", name: "Camarão Grelhado", price: 1000, category: "seafood", image: "" },
  { id: "s6", name: "Bacalhau com Natas", price: 1200, category: "seafood", image: "" },

  // Pasta
  { id: "pa1", name: "Massa Penne á Nata ou Tomatinha (Vegetariano)", price: 450, category: "pasta", image: "" },
  { id: "pa2", name: "Massa Penne á Nata ou Tomatinha (Atum)", price: 500, category: "pasta", image: "" },
  { id: "pa3", name: "Massa Penne á Nata ou Tomatinha (Frango)", price: 500, category: "pasta", image: "" },
  { id: "pa4", name: "Massa Penne á Nata ou Tomatinha (Camarão)", price: 600, category: "pasta", image: "" },

  // Pizzas
  { id: "p1", name: "MARGARITA / MARGHERITA", price: 500, category: "pizzas", image: "" },
  { id: "p2", name: "PIZZA Á YASSIN", price: 500, category: "pizzas", image: "" },
  { id: "p3", name: "VEGETARIANA / VEGETARIAN", price: 550, category: "pizzas", image: "" },
  { id: "p4", name: "PEPPERONI", price: 600, category: "pizzas", image: "" },
  { id: "p5", name: "FRANGO / CHICKEN", price: 650, category: "pizzas", image: "" },
  { id: "p6", name: "BARBEQUE CHICKEN", price: 650, category: "pizzas", image: "" },
  { id: "p7", name: "CHICKEN TIKKA", price: 650, category: "pizzas", image: "" },
  { id: "p8", name: "MEXICANA / MEXICAN", price: 650, category: "pizzas", image: "" },
  { id: "p9", name: "PIZZA DE CHOURIÇO", price: 650, category: "pizzas", image: "" },
  { id: "p10", name: "ATUM / TUNA", price: 750, category: "pizzas", image: "" },
  { id: "p11", name: "HAVAIANA / HAWAIIAN", price: 800, category: "pizzas", image: "" },
  { id: "p12", name: "4 ESTAÇÕES / 4 SEASONS", price: 800, category: "pizzas", image: "" },
  { id: "p13", name: "TURCA / TURKISH (FORNO À LENHA)", price: 850, category: "pizzas", image: "" },

  // Waffles / Crepes
  { id: "w1", name: "Waffle no palito", price: 300, category: "waffles", image: "" },
  { id: "w2", name: "Metade de Waffle com topping", price: 250, category: "waffles", image: "" },
  { id: "w3", name: "Metade de Waffle + 1 Bola de Sorvete", price: 350, category: "waffles", image: "" },
  { id: "w4", name: "Metade de Waffle + Frutas", price: 400, category: "waffles", image: "" },
  { id: "w5", name: "Crepe com Topping", price: 300, category: "waffles", image: "" },
  { id: "w6", name: "Crepe + 1 Bola de sorvete", price: 350, category: "waffles", image: "" },
  { id: "w7", name: "Crepe + Frutas", price: 400, category: "waffles", image: "" },
  { id: "w8", name: "8 Mini Panquecas com Topping", price: 200, category: "waffles", image: "" },
  { id: "w9", name: "8 Mini Panquecas + 1 Bola de Sorvete", price: 250, category: "waffles", image: "" },
  { id: "w10", name: "Sobremesa do Dia", price: 200, category: "waffles", image: "" },

  // Bebidas Geladas
  { id: "bg1", name: "ÁGUA 500 ML / 500ML WATER", price: 40, category: "bebidas", image: "" },
  { id: "bg2", name: "ÁGUA 1,5L / 1.5L WATER", price: 80, category: "bebidas", image: "" },
  { id: "bg3", name: "REFRESCO EM GARRAFA / BOTTLE SOFT DRINKS", price: 50, category: "bebidas", image: "" },
  { id: "bg4", name: "REFRESCO LATA / 330ML SOFT DRINKS", price: 60, category: "bebidas", image: "" },
  { id: "bg5", name: "SCHWEPPES", price: 70, category: "bebidas", image: "" },
  { id: "bg6", name: "SUMOS 500 ML / 500ML JUICES", price: 80, category: "bebidas", image: "" },
  { id: "bg7", name: "MINUTE MAID / GUARANÁ / FRUITREE", price: 80, category: "bebidas", image: "" },
  { id: "bg8", name: "SUMOS 1L / 1L JUICES", price: 90, category: "bebidas", image: "" },
  { id: "bg9", name: "REDBULL", price: 180, category: "bebidas", image: "" },
  { id: "bg10", name: "SUMOS NATURAIS / FRESH JUICE", price: 120, category: "bebidas", image: "" },
  { id: "bg11", name: "MOCKTAIL / DETOX", price: 200, category: "bebidas", image: "" },

  // Milkshakes & Sobremesas
  { id: "m1", name: "VANILLA MILKSHAKE", price: 250, category: "milkshakes", image: "" },
  { id: "m2", name: "CHOCOLATE MILKSHAKE", price: 250, category: "milkshakes", image: "" },
  { id: "m3", name: "MORANGO / STRAWBERRY MILKSHAKE", price: 250, category: "milkshakes", image: "" },
  { id: "m4", name: "VANILLA COFFEE MILKSHAKE", price: 250, category: "milkshakes", image: "" },
  { id: "m5", name: "CHOCOLATE COFFEE MILKSHAKE", price: 250, category: "milkshakes", image: "" },
  { id: "m6", name: "LOTUS MILKSHAKE", price: 250, category: "milkshakes", image: "" },
  { id: "m7", name: "KIT KAT MILKSHAKE", price: 250, category: "milkshakes", image: "" },
  { id: "m8", name: "OREO MILKSHAKE", price: 250, category: "milkshakes", image: "" },
  { id: "m9", name: "BUBBLEGUM MILKSHAKE", price: 250, category: "milkshakes", image: "" },
  { id: "s1", name: "SORVETE CONE SIMPLES", price: 60, category: "milkshakes", image: "" },
  { id: "s2", name: "SORVETE CONE ESPECIAL", price: 120, category: "milkshakes", image: "" },
  { id: "s3", name: "SORVETE COPO", price: 150, category: "milkshakes", image: "" },
  { id: "s4", name: "SIZZLING BROWNIE", price: 400, category: "milkshakes", image: "" },

  // Bebidas Quentes
  { id: "bq1", name: "CAFÉ EXPRESSO / ESPRESSO", price: 70, category: "bebidas-quentes", image: "" },
  { id: "bq2", name: "CAFÉ DUPLO / DOUBLE ESPRESSO", price: 120, category: "bebidas-quentes", image: "" },
  { id: "bq3", name: "GAROTO", price: 100, category: "bebidas-quentes", image: "" },
  { id: "bq4", name: "GALÃO / LATTE", price: 150, category: "bebidas-quentes", image: "" },
  { id: "bq5", name: "CHÁ SIMPLES / PLAIN TEA", price: 100, category: "bebidas-quentes", image: "" },
  { id: "bq6", name: "CHÁ INGLÊS / ENGLISH TEA", price: 120, category: "bebidas-quentes", image: "" },
  { id: "bq7", name: "CHÁ INDIANO / INDIAN TEA", price: 120, category: "bebidas-quentes", image: "" },
  { id: "bq8", name: "CAPUCCINO", price: 150, category: "bebidas-quentes", image: "" },
  { id: "bq9", name: "CHOCOLATE QUENTE / HOT CHOCOLATE", price: 150, category: "bebidas-quentes", image: "" },
  { id: "bq10", name: "LEITE QUENTE / HOT MILK", price: 120, category: "bebidas-quentes", image: "" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Raheel Nasir Khan",
    rating: 5,
    comment: "Melhor comida em Tete! O ambiente é muito moderno e o atendimento é excelente.",
  },
  {
    id: "2",
    author: "P&E H",
    rating: 4,
    comment: "Ótima variedade de pratos halal. A pizza é deliciosa.",
  },
  {
    id: "3",
    author: "Adson Melvin G. Cochelane",
    rating: 5,
    comment: "O Kunafa Cheesecake é de outro mundo! Recomendo vivamente.",
  },
  {
    id: "4",
    author: "Emidio",
    rating: 4,
    comment: "Ambiente acolhedor e comida de alta qualidade.",
  },
  {
    id: "5",
    author: "Online Guru",
    rating: 5,
    comment: "Espaço premium com ar condicionado, perfeito para o calor de Tete.",
  },
  {
    id: "6",
    author: "Sabite Bega",
    rating: 4,
    comment: "Serviço rápido e profissional. Voltarei com certeza.",
  },
];

export const GALLERY_IMAGES = [
  "/images/gallery-pics-1.jpg",
  "/images/gallery-pics-2.jpg",
  "/images/gallery-pics-3.jpg",
  "/images/gallery-pics-4.jpg",
  "/images/gallery-pics-5.jpg",
  "/images/gallery-pics-6.jpg",
];
