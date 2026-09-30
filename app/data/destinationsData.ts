export interface DestinationSeason {
  name: string;
  months: string;
  temperature: string;
  tag: "Peak Season" | "Shoulder Season" | "Winter Snow" | "Monsoon Magic" | "Pleasant Season";
  description: string;
}

export interface DestinationExperience {
  title: string;
  description: string;
  badge?: string;
  image?: string;
}

export interface DestinationFaq {
  question: string;
  answer: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  featured: boolean;
  toursCount: number;
  bestTimeToVisit: string;
  highlights: string[];

  // Rich Travel Guide Details
  heroSubtitle?: string;
  idealDuration?: string;
  altitude?: string;
  nearestAirport?: string;
  nearestRailway?: string;
  networkConnectivity?: string;
  tripVibe?: string;
  gallery?: string[];
  experiences?: DestinationExperience[];
  seasons?: DestinationSeason[];
  packingEssentials?: string[];
  travelTips?: string[];
  faqs?: DestinationFaq[];
  curatorNote?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: "manali",
    slug: "manali",
    name: "Manali & Kasol",
    tagline: "Pine forests, river streams & mountain music.",
    description: "Himachal's iconic mountain escape. Experience Old Manali cafe culture, Solang snow sports, Atal Tunnel Lahaul view, and Kasol riverside campfires.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    toursCount: 1,
    bestTimeToVisit: "Round the Year",
    highlights: ["Atal Tunnel & Sissu", "Solang Valley Snow", "Kasol Bonfire Night", "Hadimba Temple"],
    heroSubtitle: "Where serene Himalayan rivers meet soulful backpacker culture and ancient deodar groves.",
    idealDuration: "5 - 6 Days",
    altitude: "6,726 ft (Manali) to 10,000+ ft (Solang / Sissu)",
    nearestAirport: "Bhuntar (KUU) - 50 km / Chandigarh (IXC) - 290 km",
    nearestRailway: "Chandigarh Railway Station (CDG)",
    networkConnectivity: "4G/5G available (Airtel & Jio excellent in town; intermittent on remote trails)",
    tripVibe: "Adventure, Cafe Culture & Nature",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    ],
    curatorNote: {
      quote: "Manali and Kasol hold a special corner of my heart. The aroma of cedar wood, steaming thukpa in Old Manali, and guitar jams beside the roaring Parvati river create bonds that turn strangers into lifelong travel companions.",
      author: "Sonali Palekar",
      role: "Founder & Lead Explorer",
    },
    experiences: [
      {
        title: "Atal Tunnel & Sissu Valley Drive",
        description: "Traverse the 9km engineering wonder beneath the Pir Panjal range and emerge into the breathtaking, high-altitude lunar landscapes of Sissu with its roaring waterfall.",
        badge: "Must-Do",
      },
      {
        title: "Kasol Riverside Strolls & Parvati Valley Vibe",
        description: "Wander along the turquoise waters of Parvati river, explore Israeli bakeries, savor authentic shakshuka, and unwind around evening campfires under starry skies.",
        badge: "Soulful",
      },
      {
        title: "Old Manali Wooden Cafes & Hadimba Temple",
        description: "Stroll along historic cobblestone paths lined with artistic cafes, cedar forests, live acoustic performances, and the 500-year-old wooden pagoda Hadimba Temple.",
        badge: "Heritage",
      },
      {
        title: "Solang Valley Snow & Adventure Thrills",
        description: "Experience paragliding with panoramic views of snow-clad Himalayan giants, zorbing, and winter snowmobiling in the valley of thrills.",
        badge: "Adventure",
      },
    ],
    seasons: [
      {
        name: "Summer Sunshine & Greenery",
        months: "April to June",
        temperature: "10°C to 25°C",
        tag: "Peak Season",
        description: "Perfect mountain escape from summer plains. Rohtang Pass opens, wild flowers blossom across valleys, and pleasant days make cafe-hopping a joy.",
      },
      {
        name: "Monsoon Mist & Apple Orchards",
        months: "July to August",
        temperature: "14°C to 22°C",
        tag: "Monsoon Magic",
        description: "Lush emerald valleys and ripe apple trees. Ideal for slow travellers seeking peace, mist-shrouded peaks, and quiet rainy afternoons.",
      },
      {
        name: "Winter Wonderland & Snowfall",
        months: "December to February",
        temperature: "-5°C to 10°C",
        tag: "Winter Snow",
        description: "The entire valley transforms into a fairytale blanket of snow. Enjoy skiing, building snowmen, and sipping hot cider by the fireplace.",
      },
    ],
    packingEssentials: [
      "Layered warm fleece & windproof down jacket",
      "Sturdy hiking shoes with solid grip",
      "UV-protective sunglasses & lip balm with SPF",
      "Thermal base layer (for winter & high passes)",
      "Power bank & personal reusable water bottle",
      "Personal medical kit (anti-motion sickness meds)",
    ],
    travelTips: [
      "Carry sufficient cash as small village cafes in Kasol and Tosh might face card connectivity issues.",
      "Dress in easily peelable layers since mountain temperatures change rapidly when the sun ducks behind clouds.",
      "Respect local Himalayan customs, sacred groves, and strictly avoid leaving plastic litter behind.",
      "Start early morning for Atal Tunnel and Sissu to beat tourist traffic near the tunnel entrance.",
    ],
    faqs: [
      {
        question: "Is Kasol safe for solo women and first-time travelers?",
        answer: "Yes, Kasol and the Parvati Valley have a very warm, welcoming backpacker community. Our group tours are led by experienced trip leaders who ensure a comfortable, safe, and respectful environment.",
      },
      {
        question: "When is the best time to see snow in Manali?",
        answer: "Fresh snowfall is most common between late December and early February. Solang Valley and Sissu often retain snow patches well into April and May.",
      },
      {
        question: "Do I need special permits to visit Atal Tunnel and Sissu?",
        answer: "No special permits are required for Indian tourists visiting Sissu via Atal Tunnel. Our tour team takes care of all vehicle registrations and logistics.",
      },
    ],
  },
  {
    id: "kedarnath",
    slug: "kedarnath",
    name: "Kedarnath Dham",
    tagline: "Isn't just a destination. It's a journey you'll remember.",
    description: "Nestled among snow-draped Himalayan mountains in Garhwal Uttarakhand, Kedarnath offers a profound spiritual trek combined with majestic nature.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    toursCount: 3,
    bestTimeToVisit: "May to October",
    highlights: ["Himalayan Trek", "12th Jyotirlinga", "Devprayag Sangam", "Evening Aarti"],
    heroSubtitle: "The sacred 12th Jyotirlinga standing steadfast against towering snow peaks at 11,755 ft.",
    idealDuration: "5 - 7 Days (Ex-Rishikesh / Haridwar)",
    altitude: "11,755 ft (3,583 m) above sea level",
    nearestAirport: "Jolly Grant Airport, Dehradun (DED) - 240 km to Sonprayag",
    nearestRailway: "Rishikesh / Haridwar Railway Station",
    networkConnectivity: "Jio & BSNL have 4G coverage near Temple premise; intermittent on the 16km trek route",
    tripVibe: "Spiritual Pilgrimage & Himalayan Trek",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    ],
    curatorNote: {
      quote: "Standing before Kedarnath temple as the evening aarti echoes across the snow-capped Kedar Dome is an experience that humbles your soul. Every footstep on that mountain path strips away your worries and leaves you with profound peace.",
      author: "Sonali Palekar",
      role: "Founder & Lead Explorer",
    },
    experiences: [
      {
        title: "The Soulful 16km Himalayan Trek from Gaurikund",
        description: "Walk alongside pilgrims chanting 'Har Har Mahadev' as the roaring Mandakini river echoes through the valley with dramatic hanging glaciers above.",
        badge: "Sacred",
      },
      {
        title: "Evening Aarti in Front of Ancient Granite Shrine",
        description: "Gather with hundreds of devoted souls wrapped in warm woolens as butter lamps flicker and ancient Sanskrit shlokas resonate under starlit Himalayan skies.",
        badge: "Divine",
      },
      {
        title: "Devprayag Sangam & Panch Prayag Confluences",
        description: "Witness the sacred confluence of the turquoise Bhagirathi and Alaknanda rivers coming together to form Mother Ganga, surrounded by temple bells.",
        badge: "Heritage",
      },
      {
        title: "Morning Darshan & Bhairavnath Temple Hike",
        description: "Experience the sublime serenity of morning darshan and a short uphill hike to Bhairavnath Temple offering a complete 360-degree aerial view of the Kedarnath bowl.",
        badge: "Panorama",
      },
    ],
    seasons: [
      {
        name: "Spring & Temple Opening (Kapat Utsav)",
        months: "May to June",
        temperature: "5°C to 18°C",
        tag: "Peak Season",
        description: "Temples open around Akshaya Tritiya. Snow patches remain along the trail, days are crisp and sunny, and the atmosphere is electric with pilgrim devotion.",
      },
      {
        name: "Monsoon Rain & Waterfall Season",
        months: "July to August",
        temperature: "8°C to 16°C",
        tag: "Monsoon Magic",
        description: "High rainfall with lush greenery and gushing waterfalls. Requires reliable waterproof gear and flexible schedules due to possible hill road delays.",
      },
      {
        name: "Golden Autumn & Crystal Skies",
        months: "September to October",
        temperature: "-2°C to 14°C",
        tag: "Pleasant Season",
        description: "Crisp mountain air, crystal-clear views of snow-draped Kedar Dome, and comparatively thinner crowds make this one of the most serene times to visit.",
      },
    ],
    packingEssentials: [
      "Thermal base layer (top & bottom) plus down jacket",
      "Sturdy waterproof trekking boots with ankle support",
      "Heavy-duty waterproof raincoat or rain poncho",
      "Trekking pole (highly helpful for steep descent)",
      "Woolen cap, neck warmer, and insulated gloves",
      "Government Photo ID & Yatra Biometric Registration slip",
    ],
    travelTips: [
      "Mandatory biometric Yatra registration is strictly enforced; our team arranges this prior to departure.",
      "Start the trek from Gaurikund very early in the morning (5:00 AM) to comfortably reach the temple before sunset.",
      "Stay hydrated with lukewarm water and take short 2-minute breathers rather than long exhausting breaks.",
      "Carry camphor (kapoor) in a cloth pouch to inhale at higher altitudes if feeling slight breathlessness.",
    ],
    faqs: [
      {
        question: "How physically fit do I need to be for the Kedarnath trek?",
        answer: "The trek is 16-18 km with steep uphill sections. While beginners can do it, we strongly suggest walking 4-5 km daily or doing basic cardio for 3-4 weeks before the trip.",
      },
      {
        question: "Are ponies, doli, or helicopters available if someone gets tired?",
        answer: "Yes, government-regulated ponies, pithus (porters), and palanquins (dolis) are available at Gaurikund. Helicopter tickets from Guptkashi/Phata can also be booked through the official IRCTC portal.",
      },
      {
        question: "Where do we stay overnight in Kedarnath?",
        answer: "Accommodations at Kedarnath top consist of GMVN guest houses, private dormitories, and pre-booked alpine camps equipped with warm blankets and basic heating.",
      },
    ],
  },
  {
    id: "spiti",
    slug: "spiti",
    name: "Spiti Valley",
    tagline: "High passes, ancient monasteries & moon lakes.",
    description: "The cold high-altitude desert of Himachal Pradesh home to ancient Tibetan monasteries, Hikkim highest post office, and turquoise Chandratal Lake.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    toursCount: 1,
    bestTimeToVisit: "June to September",
    highlights: ["Hikkim Highest Post Office", "Key Monastery", "Chandratal Lake", "Chicham Bridge"],
    heroSubtitle: "A raw, high-altitude lunar kingdom where prayer flags flutter in the thin Himalayan breeze.",
    idealDuration: "7 - 9 Days",
    altitude: "10,000 ft (Tabo) to 15,000 ft (Komic & Chandratal)",
    nearestAirport: "Kullu (KUU) - 245 km / Chandigarh (IXC) - 450 km",
    nearestRailway: "Chandigarh Railway Station (CDG) / Shimla",
    networkConnectivity: "BSNL & Jio 4G in Kaza; zero network at Chandratal, Kunzum La, and high remote passes",
    tripVibe: "Raw Off-Road Adventure & Cultural Immersion",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    ],
    curatorNote: {
      quote: "Spiti is the closest you can get to being on another planet without leaving Earth. When you stand on the shores of Chandratal under millions of stars in the Milky Way, you realize how wondrous and vast this world truly is.",
      author: "Sonali Palekar",
      role: "Founder & Lead Explorer",
    },
    experiences: [
      {
        title: "Key Monastery & Lama Chants",
        description: "Visit the iconic 11th-century cliffside fortress monastery, interact with young Buddhist monks, and sip traditional butter tea in ancient stone corridors.",
        badge: "Iconic",
      },
      {
        title: "Chandratal 'Lake of the Moon' Camping",
        description: "Camp beneath an unpolluted canopy of the Milky Way galaxy next to the crescent-shaped turquoise glacial lake perched at 14,100 ft.",
        badge: "Bucket-List",
      },
      {
        title: "Postcards from Hikkim (14,567 ft)",
        description: "Drop a handwritten postcard to your dearest friends from the world's highest operational post office nestled high in the Spitian highlands.",
        badge: "Special",
      },
      {
        title: "Chicham Bridge & Komic Highest Village",
        description: "Drive across Asia's highest suspension bridge spanning a 1,000 ft vertical gorge, and visit Komic, the highest motorable village in the world.",
        badge: "Adventure",
      },
    ],
    seasons: [
      {
        name: "Peak Summer Road Trip",
        months: "June to September",
        temperature: "8°C to 20°C (day) / 0°C to 5°C (night)",
        tag: "Peak Season",
        description: "All passes including Kunzum La and Rohtang are fully open. Chandratal lake is shimmering blue, homestays are thriving, and roads are accessible.",
      },
      {
        name: "Golden Autumn & Stark Solitude",
        months: "October",
        temperature: "-5°C to 12°C",
        tag: "Shoulder Season",
        description: "The poplar trees turn fiery gold and the skies are electric cobalt blue. High passes begin receiving first dustings of winter snow.",
      },
      {
        name: "White Spiti Winter Expedition",
        months: "December to March",
        temperature: "-25°C to -5°C",
        tag: "Winter Snow",
        description: "For the brave-hearted extreme explorer. Frozen waterfalls, snow leopard tracking in Kibber wildlife sanctuary, and warm wood stoves in homestays.",
      },
    ],
    packingEssentials: [
      "Sub-zero down jacket & windproof shell trousers",
      "UV-400 polarized sunglasses (essential against high-altitude glare)",
      "High-SPF sunscreen (50+) & heavy petroleum jelly/lip balm",
      "Thermos insulated flask for hot drinking water",
      "Acclimatization medications (Diamox) & rehydration electrolytes",
      "Portable power bank (cold weather depletes phone batteries fast)",
    ],
    travelTips: [
      "Take altitude acclimatization very seriously. Rest completely on Day 1 in Kaza and drink 3-4 liters of water daily.",
      "Carry ample hard cash as Kaza's only two ATMs are frequently out of cash or affected by power cuts.",
      "Embrace digital detox; Chandratal, Kunzum, and remote villages have zero cell network.",
      "Always respect Tibetan Buddhist monasteries: walk clockwise around stupas and remove shoes inside prayer halls.",
    ],
    faqs: [
      {
        question: "How do we prevent Acute Mountain Sickness (AMS) in Spiti?",
        answer: "Our curated itinerary takes the gradual ascent route via Shimla and Kalpa rather than rushing through Manali, ensuring your body naturally adapts to the altitude.",
      },
      {
        question: "Are washrooms available at Chandratal camp?",
        answer: "Yes, our campsite near Chandratal provides clean dry/wet pit toilet tents equipped with running water in accordance with eco-conservation norms.",
      },
      {
        question: "Can we charge camera and phone batteries in Spiti?",
        answer: "Homestays in Kaza, Tabo, and Kalpa have electricity. At Chandratal camps, electricity is solar-powered and limited, so high-capacity power banks are essential.",
      },
    ],
  },
  {
    id: "meghalaya",
    slug: "meghalaya",
    name: "Mystic Meghalaya",
    tagline: "Cloudy mountains, crystal rivers & root bridges.",
    description: "Discover Northeast India's rain paradise — transparent Umngot River in Dawki, Cherrapunjee waterfalls, and Double Decker Living Root Bridges.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    toursCount: 1,
    bestTimeToVisit: "October to May",
    highlights: ["Dawki Transparent River", "Double Decker Root Bridge", "Nohkalikai Falls", "Laitlum Canyon"],
    heroSubtitle: "The mystical Abode of Clouds where bio-engineered bridges live, breathe, and grow.",
    idealDuration: "6 - 7 Days",
    altitude: "4,908 ft (Shillong) to 4,265 ft (Cherrapunjee)",
    nearestAirport: "Guwahati Airport (GAU) - 120 km / Shillong Umroi (SHL) - 30 km",
    nearestRailway: "Guwahati Railway Station (GHY)",
    networkConnectivity: "Excellent 4G/5G across Shillong & Cherrapunjee; spotty inside deep river gorges",
    tripVibe: "Lush Waterfalls, Tribal Living & Rainforest Treks",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    ],
    curatorNote: {
      quote: "Meghalaya feels like a secret garden preserved by the gentle Khasi elders. From swimming in natural rainbow turquoise pools beneath double-decker living root bridges to floating on Dawki's glass-like river, every day is pure magic.",
      author: "Sonali Palekar",
      role: "Founder & Lead Explorer",
    },
    experiences: [
      {
        title: "Double Decker Living Root Bridge Hike",
        description: "Trek down 3,500 stone stairs into the rainforest of Nongriat to cross bio-engineered bridges woven from live Ficus elastica roots over centuries.",
        badge: "UNESCO Wonder",
      },
      {
        title: "Boating on Crystal Transparent Umngot River, Dawki",
        description: "Glide over crystal-clear waters where your wooden country boat appears to float in mid-air above riverbed pebbles and swimming fish.",
        badge: "Unreal",
      },
      {
        title: "Nohkalikai Falls & Cherrapunjee Canyons",
        description: "Stand at the edge of the world overlooking India's tallest plunge waterfall cascading 1,115 feet into an emerald pool draped in swirling clouds.",
        badge: "Epic",
      },
      {
        title: "Mawlynnong Village & Laitlum Canyon",
        description: "Explore Asia's cleanest village with bamboo dustbins and flower gardens, followed by panoramic vistas at the edge of Laitlum 'End of Hills' canyon.",
        badge: "Culture",
      },
    ],
    seasons: [
      {
        name: "Crystal Waters & Crisp Skies",
        months: "October to April",
        temperature: "12°C to 24°C",
        tag: "Peak Season",
        description: "The premier time for Dawki boat rides (the water is at its most transparent), cave exploration in Mawsmai & Krem Chympe, and comfortable trekking.",
      },
      {
        name: "Monsoon Symphony & Raging Falls",
        months: "May to September",
        temperature: "16°C to 25°C",
        tag: "Monsoon Magic",
        description: "Witness the wettest place on earth in its supreme glory. Waterfalls rage with thunderous force and rainforests are impossibly vibrant green.",
      },
    ],
    packingEssentials: [
      "Water-resistant trekking shoes with strong rubber grip (stairs get slippery)",
      "Quick-dry hiking tees and convertible trekking pants",
      "Lightweight rain poncho / umbrella",
      "Swimwear & quick-dry microfiber towel for natural stream pools",
      "Waterproof dry pouch for phones and cameras",
      "Eco-friendly insect repellent",
    ],
    travelTips: [
      "Wear sports shoes with deep tread; the 3,500 stairs to Nongriat root bridges can be slick with morning dew.",
      "Meghalaya has a respectful matrilineal culture—always ask before photographing local village elders and children.",
      "Do not litter anywhere in Meghalaya; villages take immense civic pride in cleanliness and enforce strict fines.",
      "Try local Khasi delicacies like Jadoh, Tungrymbai, and fresh wild bamboo shoots.",
    ],
    faqs: [
      {
        question: "How difficult is the Double Decker Living Root Bridge trek?",
        answer: "The trek involves descending and climbing approximately 3,500 stairs each way. It takes about 2 hours to descend and 2.5 hours to return. Anyone with average fitness who takes steady breaks can complete it safely.",
      },
      {
        question: "When is the Dawki river water completely transparent?",
        answer: "The river is crystal-clear like glass from November through late March. During peak monsoon (June to August), silt turns the water brown.",
      },
      {
        question: "Can vegetarian and Jain food be arranged on this tour?",
        answer: "Yes, our team ensures delicious, freshly prepared vegetarian meals at all homestays and restaurants throughout the journey.",
      },
    ],
  },
  {
    id: "nepal",
    slug: "nepal",
    name: "Nepal & Muktinath",
    tagline: "Himalayan peaks, serene lakes & sacred temples.",
    description: "A breathtaking cross-border journey to Kathmandu, Pokhara, and holy Muktinath Temple amidst Annapurna and Dhaulagiri mountain views.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    toursCount: 1,
    bestTimeToVisit: "September to May",
    highlights: ["Muktinath Darshan", "Pashupatinath Temple", "Phewa Lake Boating", "Jomsom Valley"],
    heroSubtitle: "Sacred bells, mirror lakes, and the soaring 8,000m giants of the Annapurna and Dhaulagiri ranges.",
    idealDuration: "7 - 8 Days",
    altitude: "4,593 ft (Kathmandu) to 12,172 ft (Muktinath)",
    nearestAirport: "Tribhuvan International Airport, Kathmandu (KTM)",
    nearestRailway: "Gorakhpur Junction (GKP) - 100 km to border",
    networkConnectivity: "Local Ncell/Namaste 4G SIM cards easily available; hotel WiFi widely accessible",
    tripVibe: "Spiritual Pilgrimage, Culture & Alpine Lakes",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    ],
    curatorNote: {
      quote: "Nepal has an ancient rhythm that captures you immediately. From taking the sacred holy dip under the 108 spouts at Muktinath to watching the sunset turn the Annapurna range golden from Pokhara's Phewa Lake, this journey stays with you forever.",
      author: "Sonali Palekar",
      role: "Founder & Lead Explorer",
    },
    experiences: [
      {
        title: "Holy Bath at 108 Sacred Waterspouts in Muktinath",
        description: "Take the sacred holy bath under the 108 stone cow-shaped spouts at 12,172 ft in the high Mustang valley, revered by both Hindus and Buddhists.",
        badge: "Sacred Moksha",
      },
      {
        title: "Sunset Boat Ride on Phewa Lake Pokhara",
        description: "Paddle across the calm waters of Phewa Lake with the reflection of sacred Mt. Machapuchare (Fishtail) dancing on the water's surface.",
        badge: "Serene",
      },
      {
        title: "Evening Aarti at Pashupatinath by Bagmati River",
        description: "Experience the deeply moving evening Maha Aarti with ceremonial brass lamps, conch shells, and sacred hymns on the banks of Bagmati River.",
        badge: "Divine",
      },
      {
        title: "Scenic Trans-Himalayan Flight through Kali Gandaki",
        description: "Fly or drive between Pokhara and Jomsom through the deepest gorge on earth, flanked on both sides by Annapurna (8,091m) and Dhaulagiri (8,167m).",
        badge: "Spectacular",
      },
    ],
    seasons: [
      {
        name: "Autumn Clearness & Festive Joy",
        months: "September to November",
        temperature: "12°C to 24°C",
        tag: "Peak Season",
        description: "The absolute best season in Nepal. Crystal-clear skies reveal towering 8,000m peaks, vibrant Dashain and Tihar festivals light up Kathmandu.",
      },
      {
        name: "Spring Rhododendrons & Mild Days",
        months: "March to May",
        temperature: "15°C to 28°C",
        tag: "Pleasant Season",
        description: "Wild rhododendron flowers coat the hillsides in vibrant scarlet and pink. Great weather for boating, temple visits, and mountain sightseeing.",
      },
      {
        name: "Winter Chill & Snow Views",
        months: "December to February",
        temperature: "2°C to 18°C",
        tag: "Winter Snow",
        description: "Crisp mornings with snow at Muktinath. Warm sunny afternoons in Pokhara and Kathmandu make it a pleasant low-crowd alternative.",
      },
    ],
    packingEssentials: [
      "Original Voter ID Card or Valid Passport (mandatory for Indian travelers)",
      "Layered warm fleece & windproof jacket for Muktinath & Jomsom",
      "Comfortable slip-on shoes for temple touring and stone stairs",
      "Universal travel adapter (Type C/D/M plugs)",
      "Personal medicine kit including altitude sickness precautions",
      "Cash (Indian ₹100 notes are widely accepted across Nepal)",
    ],
    travelTips: [
      "Indian citizens do not need a visa; an original Voter ID card or Passport is sufficient for entry at borders/airports (Aadhaar is not valid for Nepal entry).",
      "Winds pick up dramatically in Jomsom after 11:00 AM; flights and road journeys are always planned for early morning hours.",
      "Respect temple sanctum rules: leather belts, wallets, and bags must be removed before entering Pashupatinath main temple.",
      "Carry sufficient small-denomination Indian notes (₹100) or exchange for Nepalese Rupees (NPR).",
    ],
    faqs: [
      {
        question: "Do Indian passport holders need a visa to visit Nepal?",
        answer: "No visa is required for Indian citizens. You only need to carry an original Voter ID Card or valid Indian Passport.",
      },
      {
        question: "How do we travel from Pokhara to Muktinath?",
        answer: "We either arrange scenic mountain flights between Pokhara and Jomsom (subject to weather) followed by a 4WD jeep drive to Muktinath, or travel via scenic 4WD mountain convoy along the Kali Gandaki highway.",
      },
      {
        question: "What is the climate like at Muktinath Temple?",
        answer: "Muktinath is located at 12,172 ft and can be windy and brisk even during sunny afternoons. Warm layered clothing, thermal socks, and windcheaters are recommended.",
      },
    ],
  },
  {
    id: "tirupati",
    slug: "tirupati",
    name: "Tirupati Balaji",
    tagline: "Divine blessings at Lord Venkateswara's abode.",
    description: "Experience divine South Indian temple heritage at Sri Venkateswara Temple Tirumala, Kalahasti Temple, and Padmavathi Temple.",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    toursCount: 1,
    bestTimeToVisit: "Round the Year",
    highlights: ["Tirumala Balaji Darshan", "Shri Kalahasti Temple", "Padmavathi Temple", "ISKCON Temple"],
    heroSubtitle: "The sacred Seven Hills of Tirumala and the divine grace of Lord Venkateswara Balaji.",
    idealDuration: "3 - 4 Days",
    altitude: "2,799 ft (Tirumala Hills)",
    nearestAirport: "Tirupati Airport (TIR) - 15 km / Chennai Airport (MAA) - 130 km",
    nearestRailway: "Tirupati Main (TPTY) / Renigunta Junction (RU)",
    networkConnectivity: "High-speed 4G/5G coverage throughout Tirupati and Tirumala hills",
    tripVibe: "Divine Pilgrimage & South Indian Temple Architecture",
    gallery: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    ],
    curatorNote: {
      quote: "The divine silence and spiritual vibration inside the Sanctum Sanctorum of Tirumala Balaji cannot be put into words. It rejuvenates your spirit and fills you with unmatched positivity and gratitude.",
      author: "Sonali Palekar",
      role: "Founder & Lead Explorer",
    },
    experiences: [
      {
        title: "Special Entry Darshan at Sri Venkateswara Temple",
        description: "Walk through the golden Ananda Nilayam vimana to catch the divine glimpse of Lord Balaji adorned in priceless rubies, diamonds, and fresh flowers.",
        badge: "Divine Bliss",
      },
      {
        title: "Tasting the Authentic Tirupati Laddu Prasadam",
        description: "Savor the world-renowned GI-tagged Tirupati Laddu made with pure country cow ghee, green cardamom, cashews, raisins, and sugar crystals.",
        badge: "Sacred Prasadam",
      },
      {
        title: "Vayu Lingam Darshan at Sri Kalahasteeswara Temple",
        description: "Visit the ancient temple dedicated to Lord Shiva as the element of Air (Vayu), famed for effective Rahu-Ketu dosha poojas and Dravidian rock carvings.",
        badge: "Pancha Bhoota",
      },
      {
        title: "Alipiri Mettu Traditional Hill Steps Walk",
        description: "For eager devotees, walk the traditional stone step trail through the deer park with ancient carved pavilions up to Tirumala hills.",
        badge: "Sacred Walk",
      },
    ],
    seasons: [
      {
        name: "Cool Winter & Festive Grandeur",
        months: "September to February",
        temperature: "18°C to 30°C",
        tag: "Peak Season",
        description: "Pleasant breezes at the top of Tirumala Hills, cool morning temperatures, and the grand festive celebrations of Brahmotsavam.",
      },
      {
        name: "Summer Darshan & Temple Visits",
        months: "March to June",
        temperature: "26°C to 38°C",
        tag: "Pleasant Season",
        description: "Hot during the day in the lower plains; evenings atop Tirumala remain pleasantly breezy. Early morning darshan batches are recommended.",
      },
    ],
    packingEssentials: [
      "Strict traditional attire (Dhoti/Kurta or Pyjama for men; Saree or Chudidar with Dupatta for women)",
      "Physical Original Aadhaar Card / Passport (mandatory for TTD darshan verification)",
      "Comfortable slip-on footwear (shoes are deposited before temple lines)",
      "Cotton clothing suitable for temple queues and warm days",
      "Cloth bag / tote for receiving sanctified Laddu prasadam",
    ],
    travelTips: [
      "TTD strictly enforces traditional dress code: jeans, shorts, sleeveless tops, and western wear are strictly prohibited inside the temple queue.",
      "Mobile phones, smartwatches, cameras, and luggage must be deposited at official TTD counters before entering the Vaikuntam queue complex.",
      "Always keep your physical government ID matching your darshan ticket name readily accessible.",
      "Keep yourself hydrated while waiting in queue halls; free milk, water, and food prasadam are served by TTD seva volunteers.",
    ],
    faqs: [
      {
        question: "How are darshan tickets arranged?",
        answer: "Special Entry Darshan (₹300) tickets are managed and coordinated in advance by our team to ensure smooth, hassle-free temple entry for the group.",
      },
      {
        question: "What is the mandatory dress code for Tirumala temple?",
        answer: "Men must wear Dhoti with shirt or Kurta-Pyjama. Women must wear Saree or Salwar Kameez/Churidar with Dupatta. Western clothes are strictly forbidden.",
      },
      {
        question: "How much time does the darshan typically take?",
        answer: "With Special Entry Darshan tickets, the process typically takes between 2 to 3.5 hours depending on daily pilgrim footfall.",
      },
    ],
  },
  {
    id: "kashmir",
    slug: "kashmir",
    name: "Kashmir Valley",
    tagline: "Paradise on Earth, Dal Lake & snow-capped peaks.",
    description: "Experience the timeless magic of Kashmir — tranquil shikara rides on Dal Lake, staying in handcrafted cedar houseboats, riding the Gulmarg Gondola over snowy pines, and walking through saffron fields in Pampore.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    toursCount: 1,
    bestTimeToVisit: "March to October & Winter Snow",
    highlights: ["Dal Lake Shikara & Houseboat", "Gulmarg Gondola Ride", "Pahalgam Betaab Valley", "Sonamarg Thajiwas Glacier"],
    heroSubtitle: "Emerald alpine meadows, floating wooden houseboats, and snow-crowned Himalayan valleys.",
    idealDuration: "6 - 7 Days",
    altitude: "5,200 ft (Srinagar) to 13,780 ft (Apharwat Peak Gulmarg)",
    nearestAirport: "Sheikh ul-Alam International Airport, Srinagar (SXR)",
    nearestRailway: "Jammu Tawi (JAT) / Udhampur (UHP)",
    networkConnectivity: "Postpaid SIMs (Jio & Airtel) work seamlessly across Srinagar, Gulmarg, and Pahalgam. Outside prepaid SIMs do not function per Govt. telecom rules.",
    tripVibe: "Alpine Romance, Meadows & Houseboat Living",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    ],
    curatorNote: {
      quote: "Sitting on the deck of a wooden houseboat on Nigeen Lake with steaming saffron Kahwa as the morning mist rises off the water is an experience of sheer serenity. Kashmir has a warmth in its people that touches you deeply.",
      author: "Sonali Palekar",
      role: "Founder & Lead Explorer",
    },
    experiences: [
      {
        title: "Shikara Ride & Floating Flower Market at Dawn",
        description: "Glide silently across lotus-filled waterways as sunrise bathes the Pir Panjal mountains in gold, visiting floating vegetable markets and wooden craft workshops.",
        badge: "Iconic",
      },
      {
        title: "Gulmarg Gondola to Apharwat Peak (13,780 ft)",
        description: "Ride one of the world's highest operational cable cars up to Apharwat Peak for panoramic snow views, pristine powder snow, and winter skiing.",
        badge: "Must-Do",
      },
      {
        title: "Betaab Valley & Aru Pine Trails in Pahalgam",
        description: "Walk through whispering deodar forests, clear gushing Lidder river streams, and rolling shepherd meadows surrounded by jagged peaks.",
        badge: "Nature",
      },
      {
        title: "Wazwan Tasting & Saffron Heritage in Pampore",
        description: "Savor authentic multi-course Kashmiri Wazwan feasts and walk through purple-blooming saffron fields in historical Pampore.",
        badge: "Culinary",
      },
    ],
    seasons: [
      {
        name: "Spring Blooms & Tulip Season",
        months: "April to June",
        temperature: "14°C to 28°C",
        tag: "Peak Season",
        description: "Asia's largest Tulip Garden opens in Srinagar, Mughal Gardens are in full bloom, and pleasant days make Shikara rides and pony treks delightful.",
      },
      {
        name: "Golden Autumn & Chinar Season",
        months: "September to November",
        temperature: "8°C to 22°C",
        tag: "Pleasant Season",
        description: "Chinar trees turn blazing shades of crimson and gold. Crisp, dry weather, fresh Kashmiri apples, walnuts, and clear mountain vistas.",
      },
      {
        name: "Winter Wonderland & Snowfall",
        months: "December to February",
        temperature: "-6°C to 8°C",
        tag: "Winter Snow",
        description: "Gulmarg and Pahalgam transform into a fairytale snow kingdom. World-class skiing, snowboarding, and cozy evenings around traditional bukhari stoves.",
      },
    ],
    packingEssentials: [
      "Postpaid SIM card (mandatory: outside prepaid SIMs do not work in J&K)",
      "Layered warm jackets, thermals, and windproof shell",
      "Sturdy walking shoes with reliable rubber grip",
      "Valid Government Photo ID (Aadhaar or Passport)",
      "UV sunglasses and cold-weather lip balm/moisturiser",
      "Camera with extra batteries (cold temperatures drain batteries quickly)",
    ],
    travelTips: [
      "Ensure you have a postpaid mobile connection (Airtel, Jio, or BSNL); prepaid SIMs from outside J&K do not work due to telecom regulations.",
      "Book Gulmarg Gondola Phase 1 & Phase 2 tickets well in advance as daily slots sell out weeks ahead during peak season.",
      "Keep cash handy for local shikara rides, pony rentals, and local saffron or dry fruit shopping.",
      "Drink traditional Kahwa tea infused with saffron, cardamom, and sliced almonds to stay warm and energized.",
    ],
    faqs: [
      {
        question: "Do prepaid SIM cards work in Kashmir?",
        answer: "No, prepaid SIM cards issued outside Jammu & Kashmir are blocked as per government telecom directives. Carry a postpaid SIM (Jio, Airtel, or BSNL) or purchase a local J&K SIM at Srinagar airport upon arrival.",
      },
      {
        question: "Is Kashmir safe for solo women and family travelers?",
        answer: "Yes, Kashmir is deeply hospitable and safe for tourists. Our curated group tours have experienced local trip coordinators managing all stays, internal transfers, and activities.",
      },
      {
        question: "How do we book the Gulmarg Gondola?",
        answer: "Gondola tickets are issued exclusively through the official J&K Cable Car Corporation portal. On our organized group tours, we handle tickets and queue coordination for the group.",
      },
    ],
  },
  {
    id: "rajasthan",
    slug: "rajasthan",
    name: "Rajasthan Desert & Forts",
    tagline: "Golden dunes, royal palaces & desert starry nights.",
    description: "Journey through the land of royals — golden sunsets over Thar desert sand dunes, majestic amber forts, sunset lakes of Udaipur, and authentic folk music around desert campfires.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    toursCount: 1,
    bestTimeToVisit: "October to March",
    highlights: ["Sam Sand Dunes Desert Camp", "Jaisalmer Golden Fort", "Jaipur Amber Fort", "Udaipur Lake Pichola"],
    heroSubtitle: "Sun-drenched golden dunes, centuries-old royal palaces, and vibrant Rajasthani hospitality.",
    idealDuration: "6 - 7 Days",
    altitude: "750 ft (Jaisalmer) to 1,900 ft (Udaipur)",
    nearestAirport: "Jaipur International Airport (JAI) / Jodhpur Airport (JDH)",
    nearestRailway: "Jaipur Junction / Jodhpur / Jaisalmer Railway Station",
    networkConnectivity: "Strong 4G/5G coverage throughout all cities, forts, and desert camps",
    tripVibe: "Desert Camping, Royalty & Folk Music",
    gallery: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    ],
    curatorNote: {
      quote: "Sitting on the golden dunes of the Thar desert as the sun melts into amber horizons, listening to soulful Manganiyar melodies around a crackling campfire, is pure magic. Rajasthan makes you feel like royalty at every turn.",
      author: "Sonali Palekar",
      role: "Founder & Lead Explorer",
    },
    experiences: [
      {
        title: "Desert Glamping & Sunset Camel Safari in Thar",
        description: "Ride into the golden ripples of Sam Sand Dunes on camelback and sleep under a sky full of stars in traditional Swiss tents with live folk performances.",
        badge: "Bucket-List",
      },
      {
        title: "Living Golden Fort of Jaisalmer (Sonar Qila)",
        description: "Explore the only living fort in India where a quarter of the city's population still resides in carved sandstone havelis and ancient Jain temples.",
        badge: "UNESCO Heritage",
      },
      {
        title: "Sunset Boat Cruise on Lake Pichola, Udaipur",
        description: "Glide past the majestic Lake Palace and Jag Mandir as evening lamps reflect across tranquil waters beneath the Aravalli hills.",
        badge: "Romantic",
      },
      {
        title: "Amber Fort & Colorful Bazaars in Jaipur",
        description: "Marvel at the mirror-mosaic Sheesh Mahal and wander through vibrant Johari and Bapu Bazaars for handcrafted blue pottery, bandhani, and silver.",
        badge: "Royal Culture",
      },
    ],
    seasons: [
      {
        name: "Winter Royal Season",
        months: "November to February",
        temperature: "10°C to 26°C",
        tag: "Peak Season",
        description: "The premier time for Rajasthan travel. Crisp, sunny days and cool evenings make fort exploration, camel safaris, and campfire nights idyllic.",
      },
      {
        name: "Autumn & Spring Serenity",
        months: "October & March",
        temperature: "18°C to 32°C",
        tag: "Pleasant Season",
        description: "Pleasant weather with fewer tourists at major palaces and forts. Great for photography and slow cultural exploration.",
      },
      {
        name: "Monsoon Romance in Udaipur",
        months: "July to September",
        temperature: "24°C to 34°C",
        tag: "Monsoon Magic",
        description: "The Aravalli hills turn emerald green and Udaipur's lakes fill to the brim, making the City of Lakes surprisingly lush and atmospheric.",
      },
    ],
    packingEssentials: [
      "Comfortable breathable cotton clothes for daytime sightseeing",
      "Light jacket or woolen shawl (desert nights get chilly)",
      "Sturdy walking shoes for climbing fort ramps and cobblestone paths",
      "Wide-brim hat, UV sunglasses, and high-SPF sunscreen",
      "Personal hydration bottle and electrolytes",
      "Camera with wide-angle lens for palaces and sunsets",
    ],
    travelTips: [
      "Desert nights can drop to 6°C-10°C in winter; always pack a warm layer for evening camel safaris and tent stays.",
      "Wear broken-in walking shoes since exploring forts like Mehrangarh and Amber involves extensive uphill stone ramps.",
      "Relish local heritage cuisine such as Dal Baati Churma, Gatte ki Sabzi, Ker Sangri, and freshly made Ghevar.",
      "Carry cash for small street purchases in old city bazaars where digital payments can occasionally fail.",
    ],
    faqs: [
      {
        question: "How cold does it get in the desert at night?",
        answer: "Between November and February, night temperatures in Thar desert (Jaisalmer) can drop to 6°C to 10°C, while days remain pleasantly warm around 22°C to 26°C.",
      },
      {
        question: "Are the desert tents comfortable and secure?",
        answer: "Yes, our luxury Swiss desert camps feature attached western bathrooms, running hot water, double beds, clean linens, and 24/7 hospitality.",
      },
      {
        question: "Can vegetarian and Jain food be arranged on this tour?",
        answer: "Rajasthan is world-famous for vegetarian cuisine. Pure vegetarian and Jain meal options are readily available and thoughtfully arranged on all our group tours.",
      },
    ],
  },
];
