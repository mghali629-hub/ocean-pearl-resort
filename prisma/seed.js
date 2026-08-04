const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Ocean Pearl Resort DB...');

  await prisma.roomSuite.deleteMany();
  await prisma.restaurant.deleteMany();

  const rooms = [
    { name: 'Presidential Overwater Sanctuary Villa', price: '$4,800 / night', guests: '4 Guests', sqm: '320 sqm', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop', description: 'Glass floor ocean viewport, infinity private pool, direct lagoon access, and 24/7 personal butler service.' },
    { name: 'Sunset Ocean Haven Pool Residence', price: '$3,200 / night', guests: '2 Guests', sqm: '240 sqm', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', description: 'Overwater hammock lounge, outdoor marble soaking bathtub, and unobstructed western sunset views.' }
  ];

  for (const r of rooms) {
    await prisma.roomSuite.create({ data: r });
  }

  await prisma.restaurant.createMany({
    data: [
      { name: 'Subsix Underwater Fine Dining', cuisine: 'Michelin Seafood & Caviar', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', description: 'Dine 6 meters below ocean surface surrounded by vibrant coral reefs and marine life.' }
    ]
  });

  console.log('Ocean Pearl Resort DB seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
