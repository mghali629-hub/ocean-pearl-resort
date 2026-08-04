import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Ocean Pearl Resort database...');

  await prisma.roomSuite.deleteMany();
  await prisma.activity.deleteMany();

  await prisma.roomSuite.createMany({
    data: [
      {
        name: 'Presidential 3-Bedroom Overwater Villa',
        price: '$4,800/night',
        guests: 'Up to 6 Guests',
        sqm: '420 sqm',
        description: 'Glass-floor living room, private infinity pool, dedicated butler service, ocean access.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80',
      },
      {
        name: 'Sunset Lagoon Water Suite',
        price: '$2,600/night',
        guests: 'Up to 3 Guests',
        sqm: '210 sqm',
        description: 'Direct lagoon access, private plunge pool, and unobstructed sunset views.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
      },
    ],
  });

  await prisma.activity.createMany({
    data: [
      {
        name: 'Manta Ray & Whale Shark Guided Marine Safari',
        category: 'Excursion',
        price: '$450/person',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
      },
      {
        name: 'Private Sunset Catamaran Cruise & Champagne',
        category: 'Charter',
        price: '$1,200/couple',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
      },
    ],
  });

  console.log('Ocean Pearl Resort database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
