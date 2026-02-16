const articles = [
  {
    category: "NAILS",
    date: "23/06/2023",
    image: "https://images.unsplash.com/photo-1600962815726-457c5c517ed8",
    title: "Vanilla chrome is the main manicure of this summer",
    description: "Shimmering and metallic nail shades dominate this summer...",
    fullText: "The trend of shimmering metallic nails continues this summer, bringing warm vanilla tones to life inspired by Hailey Bieber’s glazed donut style.",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Cooper",
    role: "Beauty Blogger"
  },
  {
    category: "TECH",
    date: "01/09/2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "AI revolutionizing the workplace",
    description: "Artificial Intelligence is changing how businesses operate...",
    fullText: "Artificial Intelligence is revolutionizing workflows by automating repetitive tasks, increasing productivity, and reshaping the global job market with smart tools.",
    profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Liam Torres",
    role: "Tech Writer"
  },
  {
    category: "TRAVEL",
    date: "12/07/2024",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Hidden beaches of Bali you must visit",
    description: "Bali holds secret locations that remain untouched by mass tourism...",
    fullText: "Beyond Kuta and Seminyak, Bali’s hidden beaches like Nyang Nyang and Amed offer serenity, turquoise waters, and unspoiled sands for travelers seeking peace.",
    profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Emily Watson",
    role: "Travel Blogger"
  },
  {
    category: "EDUCATION",
    date: "25/05/2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    title: "Top 5 study habits for college success",
    description: "Good study habits make all the difference in academic life...",
    fullText: "Effective time management, active recall, spaced repetition, group discussions, and proper sleep form the foundation of successful study routines.",
    profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Michael Smith",
    role: "Education Expert"
  },
  {
    category: "FITNESS",
    date: "18/08/2024",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
    title: "The perfect morning yoga routine",
    description: "Start your day with calmness and flexibility through yoga...",
    fullText: "Morning yoga enhances circulation, flexibility, and focus. Sun salutations and controlled breathing help energize both body and mind.",
    profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Sophia Green",
    role: "Fitness Coach"
  },
  {
    category: "GAMING",
    date: "03/09/2025",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5",
    title: "Why retro games are making a comeback",
    description: "Retro gaming culture is thriving again in 2025...",
    fullText: "Nostalgia and simplicity are bringing retro games back. Gamers are rediscovering pixel art, chiptunes, and storytelling-driven classics.",
    profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Noah Brooks",
    role: "Game Reviewer"
  },
  {
    category: "NEWS",
    date: "15/06/2025",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    title: "Global economy sees slow recovery",
    description: "After two years of turbulence, the world economy stabilizes...",
    fullText: "The IMF reports moderate growth in major economies, with digital innovation and sustainable energy investments driving the rebound.",
    profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "James Carter",
    role: "Economist"
  },
  {
    category: "LIFESTYLE",
    date: "02/04/2024",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
    title: "Minimalism: Living with less",
    description: "Decluttering your life leads to mental peace and clarity...",
    fullText: "Minimalism isn’t about deprivation; it’s about prioritizing what truly matters — owning fewer things but having richer experiences.",
    profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Ava Johnson",
    role: "Lifestyle Coach"
  },
  {
    category: "MUSIC",
    date: "28/03/2024",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    title: "The rise of independent artists",
    description: "Streaming has opened doors for independent creators...",
    fullText: "With platforms like Spotify and SoundCloud, indie musicians now reach global audiences without record label support.",
    profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
    name: "David White",
    role: "Music Journalist"
  },
  {
    category: "TECH",
    date: "09/02/2025",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    title: "The future of smartphones in 2025",
    description: "Foldables, AI assistants, and holographic displays are here...",
    fullText: "Next-gen smartphones will feature foldable OLEDs, on-device AI, and advanced security sensors — redefining connectivity and interaction.",
    profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
    name: "Ryan Adams",
    role: "Tech Analyst"
  },
  {
    category: "EDUCATION",
    date: "12/01/2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "How to stay motivated during exams",
    description: "Exam stress can be managed with proper techniques...",
    fullText: "Short breaks, realistic goals, healthy diet, and reward systems can keep motivation high throughout exam preparation.",
    profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
    name: "Maya Singh",
    role: "Academic Advisor"
  },
  {
    category: "SPORTS",
    date: "30/06/2024",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    title: "Why teamwork matters in sports",
    description: "Great teams rely on chemistry, not just talent...",
    fullText: "Teamwork enhances performance, communication, and leadership, creating stronger and more resilient athletes.",
    profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Alex Turner",
    role: "Sports Coach"
  },
  {
    category: "FITNESS",
    date: "11/07/2025",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
    title: "HIIT vs. cardio — which is better?",
    description: "Both exercise types have unique benefits...",
    fullText: "HIIT burns more calories in less time, but steady cardio improves endurance. The best routine mixes both methods smartly.",
    profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
    name: "Chloe Rivera",
    role: "Trainer"
  },
  {
    category: "MOVIES",
    date: "08/09/2025",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    title: "Top 10 films that defined 2025",
    description: "Cinema this year explored AI, identity, and the future...",
    fullText: "From indie hits to blockbuster sci-fi, 2025’s films showcased creativity blending storytelling and visual innovation.",
    profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
    name: "Lucas Brown",
    role: "Film Critic"
  },
  {
    category: "TRAVEL",
    date: "04/08/2025",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    title: "Exploring Japan’s cultural heritage",
    description: "Japan’s mix of modernity and tradition attracts millions...",
    fullText: "From Kyoto’s temples to Tokyo’s neon streets, Japan’s harmony of culture and technology mesmerizes travelers worldwide.",
    profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
    name: "Hiro Tanaka",
    role: "Travel Writer"
  },
  {
    category: "GAMING",
    date: "22/03/2025",
    image: "https://images.unsplash.com/photo-1606813902915-9ac0cb7c14b1",
    title: "VR gaming in 2025: What’s next?",
    description: "Virtual reality continues to evolve rapidly...",
    fullText: "Immersive VR experiences are now accessible at home. Haptic gloves and AI-driven worlds bring gaming closer to reality.",
    profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Ethan Gray",
    role: "Game Developer"
  },
  {
    category: "LIFESTYLE",
    date: "10/05/2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Work-life balance in a remote world",
    description: "Remote work reshaped how people manage daily life...",
    fullText: "Maintaining clear boundaries, scheduled breaks, and dedicated spaces are key to a healthy remote lifestyle.",
    profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
    name: "Sarah Wilson",
    role: "Life Coach"
  },
  {
    category: "NEWS",
    date: "01/07/2025",
    image: "https://images.unsplash.com/photo-1543185377-99c79b05ad39",
    title: "Global tech summit announces new regulations",
    description: "World leaders discuss the future of AI and data privacy...",
    fullText: "The 2025 Global Tech Summit focused on ethical AI and data privacy frameworks, pushing transparency and accountability.",
    profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
    name: "Mark Evans",
    role: "News Editor"
  },
  {
    category: "SCIENCE",
    date: "19/02/2025",
    image: "https://images.unsplash.com/photo-1581091012184-5c1b1f31d043",
    title: "Breakthrough in quantum computing",
    description: "Quantum processors achieve record-breaking stability...",
    fullText: "Scientists developed new error-correction techniques, making quantum systems more reliable and closer to commercial use.",
    profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
    name: "Dr. Emma Reed",
    role: "Science Journalist"
  }
]

var container = document.body;

articles.forEach(article => {
  var card = document.createElement("div");
  card.className = "card";

  var img = document.createElement("img");
  img.src = article.image;
  card.appendChild(img);

  var info = document.createElement("div");
  info.className = "info";

  var header = document.createElement("div");
  header.className = "info-header";
  header.innerHTML = `<span>${article.category}</span><span>${article.date}</span>`;
  info.appendChild(header);

  var title = document.createElement("div");
  title.className = "title";
  title.textContent = article.title;
  info.appendChild(title);

  var desc = document.createElement("div");
  desc.className = "desc";
  desc.textContent = article.description;
  info.appendChild(desc);

  // click to expand text
  title.onclick = function() {
    desc.textContent = article.fullText;
    title.style.pointerEvents = "none";
    title.style.color = "#000";
  };

  var profile = document.createElement("div");
  profile.className = "profile";
  profile.innerHTML = `
    <img src="${article.profileImage}" alt="">
    <div>
      <span>${article.name}</span>
      <span class="role">${article.role}</span>
    </div>
  `;
  info.appendChild(profile);

  card.appendChild(info);
  container.appendChild(card);
});

