// ─── Klatsch Mate — central site data ────────────────────────────────────────
// Cafe details from "profile details" CSV. Menu dishes transcribed from the
// real printed menu photos (menu folder) via OCR. Prices are PLACEHOLDERS —
// the printed card carries no prices; update once the cafe confirms them.

export const CAFE = {
  name: "Klatsch Mate",
  tagline: "Konnect · Klatsch · Kreate",
  description:
    "Best European cuisine in Ahmedabad. Authentic Neapolitan pizza, fresh in-house Italian pasta & specialty coffee.",
  establishedYear: 2024,
  phone: "+91 97266 61567",
  phoneHref: "tel:+919726661567",
  altPhone: "+91 87802 06566",
  email: "klatschmatecafe@gmail.com",
  address: {
    line1: "G-3, Akshar 111 Commercial Hub",
    line2: "Tapovan Circle, Opp. SMS Hospital",
    line3: "GIDC Bhat, Chandkheda",
    city: "Ahmedabad, Gujarat 380005",
    mapUrl:
      "https://maps.app.goo.gl/wjF8YW5rcoFVeX4K7?g_st=ic",
    embedQuery: "Akshar+111+Commercial+Hub+Tapovan+Circle+Chandkheda+Ahmedabad",
  },
  hours: [
    { days: "Monday – Thursday", time: "11:00 AM – 1:00 AM" },
    { days: "Friday – Sunday", time: "11:00 AM – 1:00 AM" },
  ],
  hoursShort: "Open daily 11 AM – 1 AM",
  social: {
    instagram: "https://www.instagram.com/klatschmate/",
    instagramHandle: "@klatschmate",
    whatsappChannel:
      "https://chat.whatsapp.com/CfZiONsKFKMBxJq0FhAC9x?s=cl&p=a&ilr=1&amv=3",
    whatsapp: "https://wa.me/919726661567",
    mapsUrl: "https://maps.app.goo.gl/wjF8YW5rcoFVeX4K7",
  },
  areas: ["Chandkheda", "Motera", "Sabarmati"],
} as const;

export const VIDEOS = {
  hero: "/assets/video2.mp4",
  reel: [
    "/assets/reels/reel-01.mp4",
    "/assets/reels/reel-02.mp4",
    "/assets/reels/reel-03.mp4",
    "/assets/reels/reel-04.mp4",
    "/assets/reels/reel-05.mp4",
    "/assets/reels/reel-06.mp4",
    "/assets/reels/reel-07.mp4",
    "/assets/reels/reel-08.mp4",
  ],
} as const;

export type MenuItem = {
  name: string;
  price: number | null;
  desc: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

// ─── Real menu, transcribed from the printed card ───────────────────────────
// ₹ values are demo placeholders (printed menu has no prices).

export const MENU: MenuCategory[] = [
  {
    id: "coffee",
    title: "Espresso Bar",
    blurb: "Hot & iced classics on house blends — almond / oat milk and house-made flavour syrups available.",
    items: [
      { name: "Espresso", price: 149, desc: "40 ML · the pure shot" },
      { name: "Iced Espresso", price: 169, desc: "40 ML · chilled and intense" },
      { name: "Hot Americano", price: 199, desc: "220 ML · black and clean" },
      { name: "Iced Americano", price: 219, desc: "350 ML · black over ice" },
      { name: "Cappuccino", price: 239, desc: "220 ML · velvety foam" },
      { name: "Café Latte", price: 249, desc: "220 ML · silky steamed milk" },
      { name: "Oat Café Latte", price: 289, desc: "220 ML · plant-based and creamy", tag: "Vegan option" },
      { name: "Almond Flat White", price: 289, desc: "180 ML · strong and smooth" },
      { name: "Cortado", price: 219, desc: "190 ML · equal parts espresso and milk" },
      { name: "Macchiato", price: 179, desc: "60 ML · marked with foam" },
      { name: "Spanish Latte", price: 279, desc: "220 ML · condensed-milk sweet" },
      { name: "Café Mocha", price: 279, desc: "220 ML · espresso meets 80% chocolate" },
      { name: "Classic Iced Latte", price: 269, desc: "370 ML · cold and mellow" },
      { name: "Iced Cappuccino", price: 269, desc: "370 ML · foam on cold milk" },
      { name: "Spanish Iced Latte", price: 299, desc: "370 ML · sweetened with condensed milk" },
      { name: "Tiramisu Iced Latte", price: 319, desc: "370 ML · dessert in a glass", tag: "Most Loved" },
      { name: "Mocha Iced Latte", price: 299, desc: "370 ML · chocolate-chilled espresso" },
      { name: "Pistachio Iced Latte", price: 319, desc: "370 ML · nutty and green", tag: "Most Loved" },
    ],
  },
  {
    id: "brew",
    title: "Slow Brew & Cold Brew",
    blurb: "V60, French press & AeroPress across light, medium and dark roasts — plus our signature barrel-aged cold brews.",
    items: [
      { name: "V60 Pour Over", price: 279, desc: "250 ML · bright, floral and complex · 2.5–3.5 min brew", tag: "Barista's choice" },
      { name: "French Press", price: 249, desc: "250 ML · full-bodied and aromatic · coarse grind" },
      { name: "AeroPress", price: 259, desc: "250 ML · clean and balanced · medium grind" },
      { name: "Whiskey Barrel Cold Brew", price: 319, desc: "200 ML · beans aged in whiskey barrels", tag: "Signature" },
      { name: "Rum Barrel Cold Brew", price: 319, desc: "200 ML · rum-cask aged, dark cocoa notes", tag: "Signature" },
      { name: "Ginger Ale / Tonic Cold Brew", price: 299, desc: "350 ML · sparkling botanical twist" },
      { name: "Cranberry / Orange / Apple / Lychee Cold Brew", price: 299, desc: "350 ML · fruit-forward cold brew" },
      { name: "Classic Cold Brew", price: 259, desc: "200 ML · 18-hour slow steep" },
      { name: "Cold Brew Red Bull", price: 329, desc: "350 ML · the late-night kicker" },
      { name: "Almond / Oat Milk Add-on", price: 59, desc: "180 ML · any brew, any milk" },
    ],
  },
  {
    id: "coldcoffee",
    title: "Cold Coffee & Frappé",
    blurb: "Blended classics, 300 ML of chilled comfort.",
    items: [
      { name: "Klatsch Mate Cold Coffee / Frappé", price: 259, desc: "300 ML · our house special", tag: "Signature" },
      { name: "Barista Special", price: 279, desc: "300 ML · ask what's in the shaker today" },
      { name: "Mocha Cold Coffee / Frappé", price: 279, desc: "300 ML · chocolate-blended" },
      { name: "Classic Cold Coffee / Frappé", price: 249, desc: "300 ML · the timeless one" },
    ],
  },
  {
    id: "matcha",
    title: "Matcha & Hot Chocolate",
    blurb: "Ceremonial-grade matcha whisked to order, and thick European-style hot chocolate.",
    items: [
      { name: "Klatsch Mate Special Matcha", price: 299, desc: "50 ML · concentrated ceremonial shot", tag: "Signature" },
      { name: "Blueberry / Strawberry / Raspberry Matcha", price: 319, desc: "350 ML · layered iced matcha", tag: "Most Loved" },
      { name: "Coconut / Mango Matcha", price: 319, desc: "350 ML · tropical iced matcha" },
      { name: "Ice Matcha", price: 289, desc: "350 ML · pure and refreshing" },
      { name: "Classic Matcha — Hot", price: 269, desc: "250 ML · whisked the traditional way" },
      { name: "Classic Hot Chocolate", price: 269, desc: "250 ML · thick and rich" },
      { name: "Pistachio Hot Chocolate", price: 299, desc: "250 ML · roasted pistachio" },
      { name: "Roasted Hazelnut Hot Chocolate", price: 299, desc: "250 ML · nutty warmth" },
      { name: "Zesty Orange Hot Chocolate", price: 289, desc: "250 ML · dark chocolate, bright citrus" },
    ],
  },
  {
    id: "bowls",
    title: "Signature Bowls",
    blurb: "Dishes inspired by flavours from around the world — ramen from Japan, bowls from Provence, heat from Mexico.",
    items: [
      { name: "Ramen Noodles", price: 399, desc: "220 GM · soba noodles in savoury soy broth, shiitake, tofu, bok choy, sesame", tag: "Japan" },
      { name: "Mexican Burrito", price: 379, desc: "220 GM · spiced rice, Mexican beans, guacamole, sour cream, crisp nachos", tag: "Mexico" },
      { name: "Mexican Hotpot", price: 399, desc: "220 GM · slow-simmered tomato base, cheddar, served with nachos", tag: "Mexico" },
      { name: "Pesto Verdure Rice Bowl", price: 379, desc: "220 GM · basil pesto rice, roasted bell pepper, zucchini, broccoli", tag: "Italy" },
      { name: "Bol Provençal à la Ratatouille", price: 399, desc: "220 GM · rustic ratatouille of eggplant, zucchini, bell pepper & tomato", tag: "France" },
      { name: "Bol de Légumes à la Provençale", price: 389, desc: "220 GM · Mediterranean rice, baby potatoes, cherry tomato, provençal herbs", tag: "France" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    blurb: "European-style salads — crisp greens, light dressings, beautifully plated.",
    items: [
      { name: "Salade Verte au Guacamole", price: 329, desc: "150 GM · garden greens, broccoli, zucchini, creamy guacamole, lemon dressing" },
      { name: "Salade César Végétarienne", price: 349, desc: "150 GM · romaine, caesar dressing, croutons, parmesan, jalapeño, balsamic glaze", tag: "Classic" },
      { name: "Insalata di Barbabietole e Feta", price: 349, desc: "150 GM · roasted beetroot, arugula, feta, walnuts, red wine dressing" },
    ],
  },
  {
    id: "pizza",
    title: "Neapolitan Pizza",
    blurb: "Double-zero Italian flour, slow cold-fermented 48–72 hours, baked at 430–500°C in 90–120 seconds. Eggless.",
    items: [
      { name: "Pizza Margherita al Basilico", price: 429, desc: "Tomato sauce, fresh mozzarella, parmesan, basil oil, crisp basil leaves", tag: "Classic" },
      { name: "Pizza al Pesto Genovese", price: 479, desc: "Basil pesto cream, fresh mozzarella, parmesan, cherry tomato, chili oil" },
      { name: "Pizza alle Verdure Saltate", price: 469, desc: "Tomato sauce, mozzarella, sautéed bell pepper & zucchini, parmesan, basil oil" },
      { name: "Pizza Piccante al Paneer", price: 499, desc: "Tomato cream, paneer, fresh mozzarella, parmesan, chili & basil oil", tag: "Spicy" },
      { name: "Pizza Ananas Piccante", price: 479, desc: "Mozzarella, pineapple sauce, onion, garlic, chili, parmesan — sweet meets heat" },
      { name: "Pizza Quattro Formaggi", price: 529, desc: "Fresh mozzarella, parmesan, aged cheddar, mature white cheddar", tag: "Cheese lover" },
      { name: "Pizza al Funghi e Tartufo", price: 549, desc: "Sautéed mushrooms, fresh mozzarella, parmesan, truffle oil", tag: "Chef's Pick" },
      { name: "Extra Toppings", price: 79, desc: "Burrata · mozzarella · paneer · marinara dip · olive oil · chilli oil" },
    ],
  },
  {
    id: "pasta",
    title: "Fresh In-House Pasta",
    blurb: "Handmade and eggless — 100% double-zero flour, never Indian maida. Choose your sauce: pomodoro/marinara, béchamel, pesto, crema di funghi.",
    items: [
      { name: "Spaghetti Classico", price: 429, desc: "Al dente spaghetti tossed in your choice of signature Italian sauce", },
      { name: "Spaghetti Aglio-e-Olio", price: 449, desc: "Garlic, black olive, cherry tomato, parmesan — timeless and elegant" },
      { name: "Fettuccine Fresche", price: 469, desc: "Fresh ribbon pasta with your choice of classic Italian sauce" },
      { name: "Pappardelle", price: 479, desc: "Wide ribbons, delicately seasoned, sauce of your choice" },
      { name: "Ravioli Ripieni", price: 499, desc: "Tender pasta pillows filled with the filling of the day" },
      { name: "Tortellini Emiliani", price: 499, desc: "Emilia-style rings in a comforting bite" },
      { name: "Gnocchi di Patate", price: 469, desc: "Soft potato dumplings, melt-in-your-mouth, classic sauce" },
    ],
  },
  {
    id: "starters",
    title: "Small Plates",
    blurb: "Appetisers, fries & nachos — made for sharing over long conversations.",
    items: [
      { name: "Salted French Fries", price: 199, desc: "180 GM · simply perfect" },
      { name: "Peri Peri French Fries", price: 229, desc: "180 GM · fiery coating" },
      { name: "Loaded Fries", price: 279, desc: "200 GM · house-cut fries, melted cheese, sautéed peppers, zucchini, jalapeño, broccoli" },
      { name: "Nachos Fiesta", price: 249, desc: "150 GM · corn chips with side dips of salsa" },
      { name: "Loaded Nachos Royale", price: 349, desc: "200 GM · melted cheese, jalapeño, veggies & olives, salsa, guacamole, sour cream, Mexican beans", tag: "Shareable" },
      { name: "Arancini al Formaggio", price: 299, desc: "5 PC · crispy golden risotto balls with mozzarella" },
      { name: "Banana Croquettes", price: 279, desc: "6 PC · raw banana, sautéed peppers, melted mozzarella" },
      { name: "Citrus Glazed Lotus Crunch", price: 289, desc: "100 GM · crispy lotus stem in a citrus glaze", tag: "Chef's Pick" },
    ],
  },
  {
    id: "toast",
    title: "Toast, Panini & Cheese Boats",
    blurb: "Sourdough toasts, grilled focaccia panini and Georgian khachapuri cheese boats.",
    items: [
      { name: "Avocado Tartine", price: 329, desc: "2 PC · sourdough, creamy guacamole, lemon, jalapeño, onion" },
      { name: "Falafel Mediterraneo Toast", price: 329, desc: "2 PC · crispy falafel on creamy hummus, sourdough" },
      { name: "Bruschetta Caprese", price: 299, desc: "4 PC · baguette, fresh tomato, mozzarella, basil, olive oil" },
      { name: "Bruschetta alla Ratatouille", price: 319, desc: "4 PC · baguette topped with rustic ratatouille" },
      { name: "Classic Georgian Cheese Boat", price: 329, desc: "1 PC · khachapuri, molten cheese" },
      { name: "Mushroom Georgian Cheese Boat", price: 349, desc: "1 PC · khachapuri, sautéed mushrooms" },
      { name: "Spicy Paneer Georgian Cheese Boat", price: 359, desc: "1 PC · khachapuri, spiced paneer" },
      { name: "Sautéed Vegetables Georgian Cheese Boat", price: 349, desc: "1 PC · khachapuri, garden vegetables" },
      { name: "Panini al Paneer Affumicato", price: 349, desc: "2 PC · smoked paneer, lettuce, cheddar, sriracha mayo, warm focaccia" },
      { name: "Panini Marinara alle Verdure", price: 329, desc: "2 PC · grilled focaccia, sautéed peppers, zucchini, marinara, melted cheddar" },
      { name: "Panini ai Funghi Cremosi", price: 339, desc: "2 PC · creamy mushrooms, mozzarella, sour cream, crisp lettuce" },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    blurb: "European comfort in a bowl — 180 ML each.",
    items: [
      { name: "Zuppa di Lenticchie", price: 249, desc: "Hearty lentils, vegetables, garlic, olive oil, coconut cream" },
      { name: "Cappuccino di Funghi", price: 269, desc: "Creamy mushroom soup, truffle oil, milk foam — served cappuccino style", tag: "Signature" },
      { name: "Soupe de Tomate à la Ratatouille", price: 249, desc: "Rich tomato, eggplant, bell pepper, onion, zucchini, herbs" },
      { name: "Kartoffel-Lauch-Suppe", price: 259, desc: "German potato & leek soup finished with cream" },
    ],
  },
  {
    id: "biryani",
    title: "Indian — Dum Biryani",
    blurb: "Authentic Hyderabadi dum biryani, slow-cooked with saffron and hand-ground spices.",
    items: [
      { name: "Paneer Dum Biryani", price: 379, desc: "350 GM · marinated paneer cubes, aromatic spices, saffron basmati", tag: "Creamy" },
      { name: "Soya Dum Biryani", price: 349, desc: "350 GM · protein-rich soya chunks, robust hand-ground masala" },
      { name: "Veg Dum Biryani", price: 349, desc: "350 GM · seasonal vegetables dum-cooked with herbs and spices" },
    ],
  },
  {
    id: "mocktails",
    title: "Iced Tea, Mojito & Mocktails",
    blurb: "Coolers and zero-proof mixes for the long evenings.",
    items: [
      { name: "Lemon Iced Tea", price: 199, desc: "300 ML · add-on flavours: green apple, strawberry, peach, blueberry, cranberry" },
      { name: "Watermelon Basil Tea", price: 219, desc: "300 ML · refreshing summer pairing" },
      { name: "Classic Mojito", price: 229, desc: "300 ML · mint, lime, soda · add-on flavours available" },
      { name: "Red Wine Sangria (NA)", price: 249, desc: "200 ML · non-alcoholic sangria" },
      { name: "Non-Alcoholic Beer", price: 229, desc: "350 ML · zero-proof brew" },
      { name: "Basil Kiwi", price: 249, desc: "350 ML · green and garden-fresh" },
      { name: "Tokyo Titan", price: 269, desc: "350 ML · bold house mocktail" },
      { name: "Yuzu Berry", price: 269, desc: "350 ML · citrus-berry sparkler" },
      { name: "Purple Dragon", price: 269, desc: "350 ML · dragon fruit layered cooler" },
      { name: "Feel on the Beach", price: 249, desc: "250 ML · the classic, minus the rum" },
    ],
  },
  {
    id: "shakes",
    title: "Shakes",
    blurb: "Thick shakes for the sweet tooth.",
    items: [
      { name: "Ferrero Rocher", price: 329, desc: "280 ML · hazelnut-chocolate indulgence", tag: "Most Loved" },
      { name: "Nutella", price: 309, desc: "280 ML · pure hazelnut spread, blended" },
      { name: "Biscoff / Tiramisu", price: 309, desc: "260 ML · caramelised biscuit or espresso-cream" },
      { name: "Chocolate / Choco Chips / KitKat / Oreo", price: 289, desc: "280 ML · the classics" },
      { name: "Strawberry / Blueberry", price: 279, desc: "280 ML · fruity and fresh" },
    ],
  },
];

export const MENU_PAGES = Array.from({ length: 19 }, (_, i) => ({
  src: `/assets/menu/menu-${String(i + 1).padStart(2, "0")}.jpeg`,
  page: i + 1,
}));

/** Poster frames for videos (by video src) — extracted from the videos themselves. */
export const VIDEO_POSTERS: Record<string, string> = {
  "/assets/video1.mp4": "/assets/poster-video1.jpg",
  "/assets/video2.mp4": "/assets/hero-still.jpeg",
  "/assets/video3.mp4": "/assets/poster-video3.jpg",
  "/assets/reels/reel-01.mp4": "/assets/reels/reel-01.jpg",
  "/assets/reels/reel-02.mp4": "/assets/reels/reel-02.jpg",
  "/assets/reels/reel-03.mp4": "/assets/reels/reel-03.jpg",
  "/assets/reels/reel-04.mp4": "/assets/reels/reel-04.jpg",
  "/assets/reels/reel-05.mp4": "/assets/reels/reel-05.jpg",
  "/assets/reels/reel-06.mp4": "/assets/reels/reel-06.jpg",
  "/assets/reels/reel-07.mp4": "/assets/reels/reel-07.jpg",
  "/assets/reels/reel-08.mp4": "/assets/reels/reel-08.jpg",
};

/**
 * The cafe's own photography — gallery shots from "More photos" plus the
 * original cafe photos. No stock imagery.
 */
export const GALLERY = [
  { src: "/assets/hero-still.jpeg", alt: "Klatsch Mate café" },
  { src: "/assets/gallery/gallery-01.jpg", alt: "At Klatsch Mate café" },
  { src: "/assets/gallery/gallery-02.jpg", alt: "At Klatsch Mate café" },
  { src: "/assets/video2.mp4", alt: "Café reel", type: "video" as const },
  { src: "/assets/gallery/gallery-03.jpg", alt: "At Klatsch Mate café" },
  { src: "/assets/gallery/gallery-04.jpg", alt: "At Klatsch Mate café" },
  { src: "/assets/gallery/gallery-05.jpg", alt: "At Klatsch Mate café" },
  { src: "/assets/video1.mp4", alt: "Kitchen reel", type: "video" as const },
  { src: "/assets/gallery/gallery-06.jpg", alt: "At Klatsch Mate café" },
  { src: "/assets/photo1.jpeg", alt: "Specialty coffee at Klatsch Mate" },
  { src: "/assets/photo2.jpeg", alt: "Dish served at Klatsch Mate" },
  { src: "/assets/video3.mp4", alt: "Café reel", type: "video" as const },
  { src: "/assets/logo.jpeg", alt: "Klatsch Mate logo art" },
];

export const TESTIMONIALS = [
  {
    name: "Aarav Shah",
    role: "Food blogger, Ahmedabad",
    quote:
      "The Whiskey Barrel Cold Brew alone is worth the trip to Chandkheda. Add a blistered Neapolitan crust and you've got my favourite corner of the city.",
    rating: 5,
  },
  {
    name: "Priya Desai",
    role: "Regular since day one",
    quote:
      "Healthy food that doesn't taste 'healthy'. The Bol Provençal tastes like something I had in Paris — but it's right here opposite SMS Hospital.",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    role: "Matcha convert",
    quote:
      "I came for coffee, stayed for the Raspberry Matcha. Open till 1 AM means it's our default late-night hangout after work.",
    rating: 5,
  },
  {
    name: "Nishita Patel",
    role: "Board-game nights regular",
    quote:
      "Jain and Swaminarayan options, board games, brunch events — this team actually listens. The Mate Club is the best café community in Ahmedabad.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "Do you have Jain / Swaminarayan food options?",
    a: "Yes — Jain and Swaminarayan preparations are available across most of the menu. Just tell your server while ordering.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open every day from 11:00 AM to 1:00 AM — the latest-night café in Chandkheda.",
  },
  {
    q: "Do you take table reservations?",
    a: "Yes! Use the Book a Table button on this site, WhatsApp us, or call. We recommend booking for weekends and board-game nights.",
  },
  {
    q: "Do you host events?",
    a: "We run brunches, board-game meetups and the Mate Club community events. Register through our Instagram links or WhatsApp channel.",
  },
  {
    q: "Is there parking available?",
    a: "Yes, free parking is available at Akshar 111 Commercial Hub.",
  },
];

export const STATS = [
  { value: "87+", label: "Instagram posts of pure craft" },
  { value: "1,300+", label: "Mate Club community members" },
  { value: "450°C", label: "Pizza oven, 48-hr dough" },
  { value: "14 hrs", label: "Open daily, 11 AM – 1 AM" },
];
