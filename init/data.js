const sampleListings = [
  {
    title: "Goa Beach Room",
    description: "Relax near the beach.",
    image: { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop", filename: "1" },
    price: 2000,
    location: "Goa",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [73.8278, 15.4989] }
  },
  {
    title: "Manali Snow Room",
    description: "Snow mountain stay.",
    image: { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop", filename: "2" },
    price: 1800,
    location: "Manali",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [77.1887, 32.2432] }
  },
  {
    title: "Mumbai Apartment",
    description: "Modern city stay.",
    image: { url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop", filename: "3" },
    price: 3500,
    location: "Mumbai",
    country: "India",
    category: "Apartments",
    geometry: { type: "Point", coordinates: [72.8777, 19.076] }
  },
  {
    title: "Delhi Townhouse",
    description: "Urban comfort.",
    image: { url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop", filename: "4" },
    price: 4500,
    location: "Delhi",
    country: "India",
    category: "Townhouses",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Rishikesh Camp",
    description: "Riverside camping.",
    image: { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop", filename: "5" },
    price: 2500,
    location: "Rishikesh",
    country: "India",
    category: "Camps",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
  },
  {
    title: "Jaipur Palace Stay",
    description: "Royal heritage stay.",
    image: { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop", filename: "6" },
    price: 9000,
    location: "Jaipur",
    country: "India",
    category: "Historic",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Dubai Luxury Suite",
    description: "Skyline luxury.",
    image: { url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&auto=format&fit=crop", filename: "7" },
    price: 20000,
    location: "Dubai",
    country: "UAE",
    category: "Luxury",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Paris Apartment",
    description: "Romantic stay.",
    image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop", filename: "8" },
    price: 12000,
    location: "Paris",
    country: "France",
    category: "Apartments",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Bali Pool Villa",
    description: "Private pool villa.",
    image: { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop", filename: "9" },
    price: 10000,
    location: "Bali",
    country: "Indonesia",
    category: "Villas",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "New York Room",
    description: "Budget NYC stay.",
    image: { url: "https://images.unsplash.com/photo-1551776235-dde6d4829808?w=800&auto=format&fit=crop", filename: "10" },
    price: 7000,
    location: "New York",
    country: "USA",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
  },

  {
    title: "Sydney Apartment",
    description: "Harbour view.",
    image: { url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop", filename: "11" },
    price: 14000,
    location: "Sydney",
    country: "Australia",
    category: "Apartments",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] }
  },
  {
    title: "Swiss Chalet",
    description: "Mountain luxury.",
    image: { url: "https://images.unsplash.com/photo-1507086186422-97b2c7d9c48f?w=800&auto=format&fit=crop", filename: "12" },
    price: 18000,
    location: "Zermatt",
    country: "Switzerland",
    category: "Luxury",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
  },
  {
    title: "Rome Historic Stay",
    description: "Ancient vibes.",
    image: { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop", filename: "13" },
    price: 11000,
    location: "Rome",
    country: "Italy",
    category: "Historic",
    geometry: { type: "Point", coordinates: [12.4964, 41.9028] }
  },
  {
    title: "Goa Luxury Villa",
    description: "Beachside luxury villa.",
    image: { url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&auto=format&fit=crop", filename: "14" },
    price: 8000,
    location: "Goa",
    country: "India",
    category: "Villas",
    geometry: { type: "Point", coordinates: [73.8278, 15.4989] }
  },
  {
    title: "Bangkok Apartment",
    description: "Affordable stay.",
    image: { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop", filename: "15" },
    price: 4000,
    location: "Bangkok",
    country: "Thailand",
    category: "Apartments",
    geometry: { type: "Point", coordinates: [100.5018, 13.7563] }
  },
  {
    title: "Cape Town Villa",
    description: "Ocean-facing villa.",
    image: { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop", filename: "16" },
    price: 13000,
    location: "Cape Town",
    country: "South Africa",
    category: "Villas",
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] }
  },
  {
    title: "Tokyo Apartment",
    description: "Compact modern stay.",
    image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop", filename: "17" },
    price: 9000,
    location: "Tokyo",
    country: "Japan",
    category: "Apartments",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Lonavala Villa",
    description: "Weekend hill villa.",
    image: { url: "https://images.unsplash.com/photo-1507089947367-19c1da9775ae?w=800&auto=format&fit=crop", filename: "18" },
    price: 6000,
    location: "Lonavala",
    country: "India",
    category: "Villas",
    geometry: { type: "Point", coordinates: [73.4062, 18.7546] }
  },
  {
    title: "Berlin Apartment",
    description: "European city living.",
    image: { url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop", filename: "19" },
    price: 8500,
    location: "Berlin",
    country: "Germany",
    category: "Apartments",
    geometry: { type: "Point", coordinates: [13.4050, 52.5200] }
  },
  {
    title: "Kerala Backwater Room",
    description: "Nature stay.",
    image: { url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&auto=format&fit=crop", filename: "20" },
    price: 2200,
    location: "Alleppey",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] }
  },

  {
    title: "Iceland Camp",
    description: "Snow camping.",
    image: { url: "https://images.unsplash.com/photo-1507086186422-97b2c7d9c48f?w=800&auto=format&fit=crop", filename: "21" },
    price: 15000,
    location: "Reykjavik",
    country: "Iceland",
    category: "Camps",
    geometry: { type: "Point", coordinates: [-21.8277, 64.1265] }
  },
  {
    title: "Amsterdam Townhouse",
    description: "Canal-side home.",
    image: { url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop", filename: "22" },
    price: 11000,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Townhouses",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
  },
  {
    title: "Singapore Luxury Suite",
    description: "Skyline living.",
    image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop", filename: "23" },
    price: 26000,
    location: "Singapore",
    country: "Singapore",
    category: "Luxury",
    geometry: { type: "Point", coordinates: [103.8198, 1.3521] }
  },
  {
    title: "Varanasi Heritage Stay",
    description: "Spiritual experience.",
    image: { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop", filename: "24" },
    price: 5000,
    location: "Varanasi",
    country: "India",
    category: "Historic",
    geometry: { type: "Point", coordinates: [83.0082, 25.3176] }
  },
  {
    title: "Maldives Water Villa",
    description: "Overwater luxury.",
    image: { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop", filename: "25" },
    price: 40000,
    location: "Maldives",
    country: "Maldives",
    category: "Luxury",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "San Francisco Townhouse",
    description: "City lifestyle.",
    image: { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop", filename: "26" },
    price: 14000,
    location: "San Francisco",
    country: "USA",
    category: "Townhouses",
    geometry: { type: "Point", coordinates: [-122.4194, 37.7749] }
  },
  {
    title: "Spiti Camp",
    description: "Adventure camping.",
    image: { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop", filename: "27" },
    price: 3000,
    location: "Spiti",
    country: "India",
    category: "Camps",
    geometry: { type: "Point", coordinates: [78.0176, 32.2462] }
  },
  {
    title: "Madrid Apartment",
    description: "European charm.",
    image: { url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop", filename: "28" },
    price: 8500,
    location: "Madrid",
    country: "Spain",
    category: "Apartments",
    geometry: { type: "Point", coordinates: [-3.7038, 40.4168] }
  },
  {
    title: "Udaipur Lake Villa",
    description: "Lake view luxury.",
    image: { url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&auto=format&fit=crop", filename: "29" },
    price: 9000,
    location: "Udaipur",
    country: "India",
    category: "Villas",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "London Luxury Apartment",
    description: "Premium city stay.",
    image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop", filename: "30" },
    price: 15000,
    location: "London",
    country: "UK",
    category: "Apartments",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5074] }
  }
];

module.exports = { data: sampleListings };