/* Your real menu.
   type: "veg" | "nonveg"
   badge: "" | "chef" | "family" | "bestseller" | "new"
   spice: 0-3 */

const MENU_DATA = [
  {
    category: "Starters",
    items: [
      { id: "st1", name: "Shawarma", desc: "Spiced grilled chicken wrap with garlic sauce.", price: 140, type: "nonveg", badge: "bestseller", spice: 1 },
      { id: "st2", name: "Egg Roll", desc: "Rolled paratha layered with spiced egg.", price: 180, type: "nonveg", badge: "", spice: 1 }
    ]
  },
  {
    category: "Biryani & Mandi",
    items: [
      { id: "bm1", name: "Chicken Biryani", desc: "Dum-cooked basmati rice layered with spiced chicken.", price: 410, type: "nonveg", badge: "bestseller", spice: 2 },
      { id: "bm2", name: "Mutton Biryani", desc: "Slow-cooked basmati rice with tender mutton.", price: 680, type: "nonveg", badge: "chef", spice: 2 },
      { id: "bm3", name: "Chicken Mandi", desc: "Yemeni-style rice with tender roasted chicken.", price: 360, type: "nonveg", badge: "", spice: 1 },
      { id: "bm4", name: "Chicken Mandi (2 Piece)", desc: "Yemeni-style rice with two generous chicken pieces.", price: 680, type: "nonveg", badge: "family", spice: 1 }
    ]
  },
  {
    category: "Main Course",
    items: [
      { id: "mc1", name: "Chicken Gravy", desc: "Chicken simmered in a rich, spiced curry.", price: 280, type: "nonveg", badge: "", spice: 2 },
      { id: "mc2", name: "Mutton Gravy", desc: "Mutton slow-cooked in a robust, spiced curry.", price: 560, type: "nonveg", badge: "chef", spice: 2 },
      { id: "mc3", name: "Dal Tadka", desc: "Yellow lentils tempered with ghee and spices.", price: 160, type: "veg", badge: "", spice: 1 },
      { id: "mc4", name: "Khichdi", desc: "Comforting rice and lentils cooked with mild spices.", price: 280, type: "veg", badge: "", spice: 0 }
    ]
  },
  {
    category: "Rice & Bread",
    items: [
      { id: "rb1", name: "Rice", desc: "Steamed basmati rice.", price: 130, type: "veg", badge: "", spice: 0 },
      { id: "rb2", name: "Roti", desc: "Whole wheat flatbread, tandoor-baked.", price: 25, type: "veg", badge: "", spice: 0 }
    ]
  },
  {
    category: "Salads",
    items: [
      { id: "sl1", name: "Fruit Salad", desc: "Fresh seasonal fruits, lightly tossed.", price: 200, type: "veg", badge: "", spice: 0 },
      { id: "sl2", name: "Veggie Salad", desc: "Crisp fresh vegetables, lightly seasoned.", price: 190, type: "veg", badge: "", spice: 0 }
    ]
  },
  {
    category: "Beverages",
    items: [
      { id: "bv1", name: "Cappuccino Coffee", desc: "Espresso with steamed, frothed milk.", price: 130, type: "veg", badge: "", spice: 0 },
      { id: "bv2", name: "Black Coffee", desc: "Freshly brewed, no milk.", price: 55, type: "veg", badge: "", spice: 0 },
      { id: "bv3", name: "Hot Coffee", desc: "Classic hot milk coffee.", price: 55, type: "veg", badge: "", spice: 0 },
      { id: "bv4", name: "Tea", desc: "Freshly brewed milk tea.", price: 30, type: "veg", badge: "", spice: 0 },
      { id: "bv5", name: "Cold Drink", desc: "Chilled soft drink.", price: 50, type: "veg", badge: "", spice: 0 }
    ]
  }
];

window.MENU_DATA = MENU_DATA;
