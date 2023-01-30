import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  let users = await prisma.users.findFirst();
  if (!users) {
    users = await prisma.users.create({
      data:{
        name:"Matheus"
      }
    });
  }

  console.log({ users });

  let movie = await prisma.movies.findFirst();

  if (!movie) {
    movie = await prisma.movies.create({
      data:{
        name:"Naruto",
        rating:5,
        genre: "Anime",
        streaming:"Crunchyroll"
      }
    });
  }

  console.log({ movie });

  let rating = await prisma.ratings.findFirst({
    where:{
        userId: users.id,
    }
  });

  if (!rating) {
    rating = await prisma.ratings.create({
      data:{
        movies:{connect:{id:movie.id}},
        users:{connect:{id:users.id}},
        rating: 5,
        comment: "Melhor anime de todos os tempos facilmente"
      }
    });
  }

  console.log({ rating });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
 