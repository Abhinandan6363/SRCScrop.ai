// src/data/fertilizers.js

const fertilizers = {
  // ------------------------------------
  // PADDY
  // ------------------------------------
  Paddy: [
    { 
      type: "Urea", 
      qty: "80–100 kg/acre", 
      usage: "Enhances vegetative growth and increases tillering." 
    },
    { 
      type: "DAP", 
      qty: "40–50 kg/acre", 
      usage: "Improves strong root development in early stages." 
    },
    { 
      type: "MOP (Potash)", 
      qty: "20–25 kg/acre", 
      usage: "Boosts grain filling and disease resistance." 
    }
  ],

  // ------------------------------------
  // MAIZE
  // ------------------------------------
  Maize: [
    { 
      type: "NPK 15-15-15", 
      qty: "50 kg/acre", 
      usage: "Supports early growth, flowering, and cob formation." 
    },
    { 
      type: "Urea", 
      qty: "30–40 kg/acre", 
      usage: "Boosts nitrogen for leaf development." 
    }
  ],

  // ------------------------------------
  // WHEAT
  // ------------------------------------
  Wheat: [
    { 
      type: "NPK 20-20-20", 
      qty: "40–50 kg/acre", 
      usage: "Provides balanced nutrients for root and stem growth." 
    },
    { 
      type: "Urea", 
      qty: "70–90 kg/acre", 
      usage: "Boosts vegetative growth and tiller formation." 
    }
  ],

  // ------------------------------------
  // MUSTARD
  // ------------------------------------
  Mustard: [
    { 
      type: "DAP", 
      qty: "40 kg/acre", 
      usage: "Enhances root strength and early crop establishment." 
    },
    { 
      type: "Urea", 
      qty: "20–25 kg/acre", 
      usage: "Improves vegetative growth and flowering." 
    },
    { 
      type: "Potash", 
      qty: "10–15 kg/acre", 
      usage: "Improves oil content and seed quality." 
    }
  ],

  // ------------------------------------
  // VEGETABLES (GENERAL)
  // ------------------------------------
  Vegetables: [
    { 
      type: "NPK 12-32-16", 
      qty: "40–60 kg/acre", 
      usage: "Useful for fruit and root vegetables." 
    },
    { 
      type: "Compost / FYM", 
      qty: "1–2 tons/acre", 
      usage: "Improves soil health, structure, and moisture retention." 
    },
    { 
      type: "Urea", 
      qty: "15–20 kg/acre", 
      usage: "Boosts leaf and vegetative growth in early stages." 
    }
  ],

  // ------------------------------------
  // RICE (separate from Paddy)
  // ------------------------------------
  Rice: [
    { 
      type: "Urea", 
      qty: "80–100 kg/acre", 
      usage: "Provides nitrogen for rapid tiller formation." 
    },
    { 
      type: "DAP", 
      qty: "50 kg/acre", 
      usage: "Strengthens early root growth." 
    }
  ],

  // ------------------------------------
  // BARLEY
  // ------------------------------------
  Barley: [
    { 
      type: "Urea", 
      qty: "40–50 kg/acre", 
      usage: "Boosts tiller formation and vegetative growth." 
    },
    { 
      type: "Single Super Phosphate (SSP)", 
      qty: "30–35 kg/acre", 
      usage: "Improves root strength and nutrient absorption." 
    }
  ],
};

export default fertilizers;
