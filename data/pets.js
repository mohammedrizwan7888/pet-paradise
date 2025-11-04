export const pets = [
  {
    id: 1,
    name: "Golden Retriever Puppy",
    category: "dogs",
    price: 1200,
    age: "8 weeks",
    breed: "Golden Retriever",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1547407139-3c921a71905c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&h=600&fit=crop"
    ],
    description: "Friendly and intelligent puppy, fully vaccinated and health checked. This adorable Golden Retriever puppy is ready to bring joy and companionship to your family. Known for their gentle and friendly nature, Golden Retrievers are excellent family pets and great with children.",
    longDescription: "This beautiful Golden Retriever puppy is the perfect addition to any loving family. Raised in a nurturing environment, this puppy has been socialized with people and other pets. They are fully vaccinated, health checked by a licensed veterinarian, and come with all necessary documentation including pedigree papers.",
    features: ["Vaccinated", "Health Checked", "Microchipped", "Pedigree Papers"],
    vaccinationDetails: {
      dhpp: "Completed (2 doses)",
      rabies: "Not yet required (will be due at 16 weeks)",
      bordatella: "Completed",
      deworming: "Current (completed 2 rounds)"
    },
    sellerInfo: {
      name: "Premium Pet Breeders",
      phone: "(555) 123-4567",
      email: "contact@premiumpets.com",
      location: "Seattle, WA",
      rating: 4.9,
      verified: true
    },
    healthInfo: {
      weight: "12 lbs",
      gender: "Male",
      color: "Golden",
      healthGuarantee: true
    }
  },
  {
    id: 2,
    name: "Persian Cat Kitten",
    category: "cats",
    price: 800,
    age: "12 weeks",
    breed: "Persian",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop"
    ],
    description: "Beautiful long-haired Persian kitten with calm temperament.",
    longDescription: "This elegant Persian kitten is known for its luxurious long coat and gentle, calm personality. This sweet-natured kitten is perfect for those seeking a low-energy companion who loves to cuddle and relax.",
    features: ["Vaccinated", "Health Checked", "Pedigree Papers", "Litter Trained"],
    vaccinationDetails: {
      fvrcp: "Completed (2 doses)",
      rabies: "Not yet required (will be due at 16 weeks)",
      felv: "Completed",
      deworming: "Current (completed 2 rounds)"
    },
    sellerInfo: {
      name: "Elite Cat Breeders",
      phone: "(555) 234-5678",
      email: "info@elitecats.com",
      location: "Portland, OR",
      rating: 4.8,
      verified: true
    },
    healthInfo: {
      weight: "3 lbs",
      gender: "Female",
      color: "White",
      healthGuarantee: true
    }
  },
  {
    id: 3,
    name: "Budgerigar Pair",
    category: "birds",
    price: 150,
    age: "6 months",
    breed: "Budgerigar",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    description: "Colorful and social budgie pair, perfect for beginners.",
    features: ["Hand Tamed", "Cage Included", "Food Starter Pack", "Health Guarantee"]
  },
  {
    id: 4,
    name: "Holland Lop Rabbit",
    category: "rabbits",
    price: 200,
    age: "4 months",
    breed: "Holland Lop",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop",
    description: "Adorable lop-eared rabbit, great with children and other pets.",
    features: ["Litter Trained", "Health Checked", "Starter Kit", "Care Guide"]
  },
  {
    id: 5,
    name: "German Shepherd Puppy",
    category: "dogs",
    price: 1500,
    age: "10 weeks",
    breed: "German Shepherd",
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop",
    description: "Loyal and protective German Shepherd puppy, excellent family dog.",
    features: ["Vaccinated", "Health Checked", "Microchipped", "Training Started"]
  },
  {
    id: 6,
    name: "Maine Coon Kitten",
    category: "cats",
    price: 1000,
    age: "14 weeks",
    breed: "Maine Coon",
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop",
    description: "Large and gentle Maine Coon kitten, known for their friendly nature.",
    features: ["Vaccinated", "Health Checked", "Pedigree Papers", "Socialized"]
  },
  {
    id: 7,
    name: "Cockatiel",
    category: "birds",
    price: 300,
    age: "8 months",
    breed: "Cockatiel",
    image: "https://images.unsplash.com/photo-1549608276-57867763e6c4?w=400&h=300&fit=crop",
    description: "Friendly and intelligent cockatiel, loves to whistle and interact.",
    features: ["Hand Tamed", "Cage Included", "Toys Included", "Health Guarantee"]
  },
  {
    id: 8,
    name: "Netherland Dwarf Rabbit",
    category: "rabbits",
    price: 180,
    age: "3 months",
    breed: "Netherland Dwarf",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop",
    description: "Tiny and cute Netherland Dwarf, perfect for apartment living.",
    features: ["Litter Trained", "Health Checked", "Starter Kit", "Care Guide"]
  },
  {
    id: 9,
    name: "French Bulldog Puppy",
    category: "dogs",
    price: 2500,
    age: "12 weeks",
    breed: "French Bulldog",
    image: "https://images.unsplash.com/photo-1547407139-3c921a71905c?w=400&h=300&fit=crop",
    description: "Charming French Bulldog puppy with a playful personality.",
    features: ["Vaccinated", "Health Checked", "Microchipped", "Pedigree Papers"]
  },
  {
    id: 10,
    name: "Siamese Kitten",
    category: "cats",
    price: 900,
    age: "10 weeks",
    breed: "Siamese",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    description: "Elegant Siamese kitten with striking blue eyes and vocal personality.",
    features: ["Vaccinated", "Health Checked", "Pedigree Papers", "Socialized"]
  },
  {
    id: 11,
    name: "Canary",
    category: "birds",
    price: 80,
    age: "1 year",
    breed: "Canary",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    description: "Beautiful singing canary with melodious voice, great for bird enthusiasts.",
    features: ["Cage Included", "Food Starter Pack", "Health Guarantee", "Care Guide"]
  },
  {
    id: 12,
    name: "Flemish Giant Rabbit",
    category: "rabbits",
    price: 250,
    age: "6 months",
    breed: "Flemish Giant",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop",
    description: "Gentle giant rabbit, perfect for families who want a larger pet.",
    features: ["Litter Trained", "Health Checked", "Starter Kit", "Care Guide"]
  }
];

export const categories = [
  { id: 'all', name: 'All Pets', icon: '🐾' },
  { id: 'dogs', name: 'Dogs', icon: '🐕' },
  { id: 'cats', name: 'Cats', icon: '🐱' },
  { id: 'birds', name: 'Birds', icon: '🐦' },
  { id: 'rabbits', name: 'Rabbits', icon: '🐰' }
];
