const { Product } = require("../models");
const ProductData = [
  {
    product_name: "SilkSoothe Body Lotion",
    price: 12.99,
    stock: 25,
    image_url: "4.png",
    category_id: 1,
    quick_description: "Luxurious hydrating lotion for smooth, supple skin",
    isFeatured: true,
    long_description:
      "Indulge in our SilkSoothe Body Lotion, enriched with natural extracts to deeply nourish and moisturize your skin. Say goodbye to dryness and hello to silky, touchable skin.",
  },
  {
    product_name: "FreshGlow Body Scrub",
    price: 15.49,
    stock: 15,
    image_url: "22.png",
    category_id: 1,
    isFeatured: false,
    quick_description: "Exfoliating scrub for radiant, refreshed skin.",
    long_description:
      "Our FreshGlow Body Scrub gently buffs away dead skin cells, revealing a radiant and smoother complexion. Infused with invigorating scents, it leaves you feeling refreshed and rejuvenated.",
  },
  {
    product_name: "DewyDreams Face Serum",
    price: 19.99,
    stock: 30,
    image_url: "2.png",
    category_id: 2,
    quick_description: "Nourishing serum for a glowing complexion.",
    long_description:
      "Experience the magic of DewyDreams Face Serum, a powerhouse formula packed with antioxidants and hydrating ingredients. Achieve a dewy, luminous complexion that glows from within.",
  },
  {
    product_name: "ClearCalm Face Cleanser",
    price: 9.99,
    stock: 20,
    image_url: "5.png",
    category_id: 2,
    isFeatured: false,
    quick_description: "Gentle Cleanser topurify and soothe sensitive skin",
    long_description:
      "Our ClearCalm Face Cleanser gently cleanses while calming sensitive skin with its soothing formula. Say hello to clean, refreshed skin without any irritation.",
  },
  {
    product_name: "TwinkleEyes Eye Cream",
    price: 17.99,
    stock: 45,
    image_url: "6.png",
    category_id: 3,
    quick_description: "Revitalizing cream for brighter, awakened eyes.",
    long_description:
      "Awaken your eyes with TwinkleEyes Eye Cream, a rejuvenating formula that reduces puffiness and dark circles, leaving your eyes looking refreshed and radiant.",
  },
  {
    product_name: "LashLuxe Mascara",
    price: 14.49,
    stock: 22,
    image_url: "21.png",
    category_id: 3,
    isFeatured: false,
    quick_description:
      "Lengthening and volumizing mascara for stunning lashes.",
    long_description:
      "Lengthening and volumizing mascara for stunning lashes. Get lashes that steal the show with LashLuxe Mascara! This volumizing formula lengthens and defines lashes for a dramatic, eye-catching look. ",
  },
  {
    product_name: "VelvetKiss Lip Balm",
    price: 6.99,
    stock: 35,
    image_url: "23.png",
    category_id: 5,
    isFeatured: true,
    quick_description: "Hydrating balm for soft and kissable lips.",
    long_description:
      "Keep your lips soft and supple with VelvetKiss Lip Balm, enriched with nourishing ingredients to lock in moisture and maintain irresistibly smooth lips.",
  },
  {
    product_name: "PlumpPout Lip Gloss",
    price: 8.99,
    stock: 28,
    image_url: "24.png",
    isFeatured: false,
    category_id: 5,
    quick_description: "Glossy formula for fuller, luscious lips.",
    long_description:
      "Achieve the perfect pout with PlumpPout Lip Gloss, a non-sticky formula that adds shine and volume for irresistibly fuller-looking lips.",
  },
  {
    product_name: "SilkShine Hair Oil",
    price: 11.99,
    stock: 40,
    image_url: "10.png",
    category_id: 4,
    isFeatured: true,
    quick_description: "Nourishing oil for shiny, frizz-free hair.",
    long_description:
      "Transform dull, frizzy hair into silky, smooth locks with SilkShine Hair Oil. This lightweight formula adds shine and tames flyaways for a sleek finish.",
  },
  {
    product_name: "CurlContain Stying Cream",
    price: 19.99,
    stock: 32,
    isFeatured: false,
    image_url: "20.png",
    category_id: 4,
    quick_description:
      "Defines and enhances natural curls for a beautiful look.",
    long_description:
      "Embrace your natural curls with CurlCraze Styling Cream, designed to define and nourish curls for bouncy, manageable hair that turns heads.",
  },
  {
    product_name: "SunnyShield Sunscreen SPF 30",
    price: 14.99,
    stock: 20,
    image_url: "18.png",
    category_id: 1,
    isFeatured: true,
    quick_description: "Broad-spectrum sunscreen for ultimate protection.",
    long_description:
      "Get ultimate sun protection with SunnyShield Sunscreen SPF 30. This broad-spectrum sunscreen defends against harmful UVA and UVB rays, keeping your skin safe and radiant.",
  },
  {
    product_name: "ScentSational Perfume",
    price: 29.99,
    stock: 25,
    image_url: "25.png",
    category_id: 1,
    isFeatured: true,
    quick_description: "Captivating fragrance for an alluring aura.",
    long_description:
      "Indulge in the alluring aura of ScentSational Perfume. This captivating fragrance leaves a lasting impression, combining floral and woody notes for an enchanting scent experience.",
  },
  {
    product_name: "SilkSuds Gentle Soap",
    price: 8.49,
    stock: 30,
    image_url: "8.png",
    category_id: 1,
    isFeatured: true,
    quick_description: "Gentle and moisturizing soap for clean, soft skin.",
    long_description:
      "Pamper your skin with SilkSuds Gentle Soap. Formulated with moisturizing ingredients, this soap gently cleanses while leaving your skin feeling soft and refreshed.",
  },
  {
    product_name: "Velvet Glow Bronzer Body Oil",
    price: 24.99,
    stock: 18,
    image_url: "9.png",
    category_id: 1,
    isFeatured: true,
    quick_description: "Bronzing body oil for a radiant sun-kissed glow.",
    long_description:
      "Achieve a sun-kissed glow with Velvet Glow Bronzer Body Oil. Infused with bronzing agents and hydrating oils, this body oil nourishes your skin while imparting a radiant, bronzed finish.",
  },
  {
    product_name: "CucumberCool Facial Mist",
    price: 12.49,
    stock: 25,
    image_url: "17.png",
    category_id: 2,
    isFeatured: false,
    quick_description: "Refreshing mist for instant hydration.",
    long_description:
      "Revitalize your skin with CucumberCool Facial Mist. Infused with cucumber extracts, this mist delivers an instant burst of hydration, leaving your skin feeling refreshed and rejuvenated.",
  },
  {
    product_name: "HydraGlow Hyaluronic Acid Serum",
    price: 22.99,
    stock: 30,
    image_url: "12.png",
    category_id: 2,
    isFeatured: true,
    quick_description: "Intensely hydrating serum for plump skin.",
    long_description:
      "Quench your skin's thirst with HydraGlow Hyaluronic Acid Serum. Formulated with potent hyaluronic acid, this serum deeply moisturizes, leaving your skin looking plump and radiant.",
  },
  {
    product_name: "Rose Revive Toner",
    price: 14.99,
    stock: 20,
    image_url: "14.png",
    category_id: 2,
    isFeatured: false,
    quick_description: "Balancing toner for refreshed skin.",
    long_description:
      "Restore skin's balance with Rose Revive Toner. Enriched with rose extracts, this toner gently tones and refreshes, prepping your skin for better absorption of skincare products.",
  },
  {
    product_name: "AquaBurst Night Cream",
    price: 26.99,
    stock: 22,
    image_url: "15.png",
    category_id: 2,
    isFeatured: true,
    quick_description: "Hydrating night cream for overnight renewal.",
    long_description:
      "Wake up to refreshed skin with AquaBurst Night Cream. Its rich, hydrating formula works overnight to replenish moisture, leaving your skin soft and rejuvenated by morning.",
  },
  {
    product_name: "EssentialC Elixir Vitamin C Serum",
    price: 19.49,
    stock: 18,
    image_url: "16.png",
    category_id: 2,
    isFeatured: false,
    quick_description: "Brightening serum with Vitamin C boost.",
    long_description:
      "Illuminate your skin with EssentialC Elixir Vitamin C Serum. Packed with Vitamin C, this serum brightens, evens skin tone, and protects against environmental stressors.",
  },
  {
    product_name: "GlowBloom Exfoliating Mask",
    price: 16.49,
    stock: 28,
    image_url: "22.png",
    category_id: 2,
    isFeatured: true,
    quick_description: "Exfoliating mask for radiant skin.",
    long_description:
      "Reveal radiant skin with GlowBloom Exfoliating Mask. This mask gently exfoliates, removing dead skin cells and impurities, leaving your skin smooth and glowing.",
  },
  {
    product_name: "Calm Under The Eye Mask",
    price: 20.49,
    stock: 52,
    image_url: "26.png",
    category_id: 3,
    isFeatured: true,
    quick_description: "Brightening Under Eye Patch with Vitamin C boost.",
    long_description:
      "Reveal radiant eyes with Calm Under The Eye Mask. This mask gently calms and removes puffiness leaving your eyes smooth and glowing.",
  },
];

const seedProducts = () => Product.bulkCreate(ProductData);
module.exports = seedProducts;
