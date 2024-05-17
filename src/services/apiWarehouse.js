const API_URL = "https://retoolapi.dev/qLGPzJ/orders";
// const API_CLIENT_ID = "oudfd2d56m4tf8jj8cf7zrwgmmpd00";
// const API_CLIENT_AUTH = "8ce9fc9770504bedaca0a27e634fb6d4";

const FAKE_API = [
  {
    id: 1,
    name: "The Witcher 3: Wild Hunt",
    unitPrice: 29.99,
    imageUrl:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    genres: ["Action", "RPG"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",

      "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",

      "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",

      "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",

      "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",

      "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Portal 2",
    unitPrice: 5.79,
    imageUrl:
      "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    genres: ["Shooter", "Puzzle"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",

      "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",

      "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",

      "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg",

      "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg",

      "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
        },
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Red Dead Redemption 2",
    unitPrice: 59.99,
    imageUrl:
      "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    genres: ["Shooter", "Adventure", "Action"],
    soldOut: true,
    screenshots: [
      "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg",

      "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg",

      "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg",

      "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg",

      "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg",

      "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
    ],
  },
  {
    id: 4,
    name: "God of War (2018)",
    unitPrice: 49.99,
    imageUrl:
      "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    genres: ["Action"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg",

      "https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg",

      "https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg",

      "https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg",

      "https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg",

      "https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
    ],
  },
  {
    id: 5,
    name: "The Last of Us",
    unitPrice: 59.99,
    imageUrl:
      "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg",
    genres: ["Adventure", "Action"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/e58/e5851e0c9b08172369dc1a1814b1c275.jpg",

      "https://media.rawg.io/media/screenshots/4a8/4a8bc73ffc37e6794fd962736d0a5436.jpg",

      "https://media.rawg.io/media/screenshots/fd5/fd5e75708c5d123519f5329344d0a376.jpg",

      "https://media.rawg.io/media/screenshots/bf4/bf4453d613de19b737fbd5e6f5e1a069.jpg",

      "https://media.rawg.io/media/screenshots/e2e/e2e3d4facc46efbded4898106db91cc6.jpg",

      "https://media.rawg.io/media/screenshots/d07/d077fc6929186334ef47716abd5fd119.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
        },
      },
    ],
  },
  {
    id: 6,
    name: "Baldur's Gate 3",
    unitPrice: 34.99,
    imageUrl:
      "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg",
    genres: ["Strategy", "Adventure", "RPG"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/a67/a676cdec0eadc42a133ac49e7f2e1aac.jpg",

      "https://media.rawg.io/media/screenshots/705/705846f6583a6da009a0ae7fcdece36d.jpg",

      "https://media.rawg.io/media/screenshots/d29/d29b1d2726d69432d2b4180a79b9ee9d.jpg",

      "https://media.rawg.io/media/screenshots/ed1/ed19ec8ce43f9dd3553df4a6d9301f61.jpg",

      "https://media.rawg.io/media/screenshots/6c8/6c8983d658a4a24dc8eb9d2f88f1dabf.jpg",

      "https://media.rawg.io/media/screenshots/92c/92cbe16a795afbc9d9837ed9eae4f22b.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
    ],
  },
  {
    id: 7,
    name: "The Legend of Zelda: Breath of the Wild",
    unitPrice: 59.99,
    imageUrl:
      "https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg",
    genres: ["Adventure", "Action", "RPG"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/3c4/3c4a8f6b1994def75e73e1cb64624e7f.jpg",

      "https://media.rawg.io/media/screenshots/8f5/8f5d4264b12090bb7aa5626fcfb5be18.jpg",

      "https://media.rawg.io/media/screenshots/b77/b771adc0585c655f8a747d3160e5325a.jpg",

      "https://media.rawg.io/media/screenshots/ef7/ef7d89471e5c0dc5553c249b2c34d9cd.jpg",

      "https://media.rawg.io/media/screenshots/1e5/1e58e8a064da6906f09dba1edb3fdea6.jpg",

      "https://media.rawg.io/media/screenshots/bef/bef44f5547b97d44c5e14f8773f9876c.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
        },
      },
      {
        platform: {
          id: 10,
          name: "Wii U",
          slug: "wii-u",
        },
      },
    ],
  },
  {
    id: 8,
    name: "It Takes Two",
    unitPrice: 39.99,
    imageUrl:
      "https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg",
    genres: ["Platformer", "Adventure", "Action"],
    soldOut: true,
    screenshots: [
      "https://media.rawg.io/media/screenshots/252/252844a85405a3147440806709a47f79.jpg",

      "https://media.rawg.io/media/screenshots/88a/88a0a4d7a1f4dbe78c2c34810afcaffa.jpg",

      "https://media.rawg.io/media/screenshots/bef/bef5d6085129fda4d26a2293b9edb30e.jpg",

      "https://media.rawg.io/media/screenshots/0f1/0f157efb373e3c5da268f2ecdb03701e.jpg",

      "https://media.rawg.io/media/screenshots/5f4/5f429ee02d86be1822963fd0a77a71ab.jpg",

      "https://media.rawg.io/media/screenshots/c01/c01d8a0c413b3a065ea52b80f1ad6212.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
        },
      },
    ],
  },
  {
    id: 9,
    name: "God of War: Ragnarök",
    unitPrice: 59.99,
    imageUrl:
      "https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg",
    genres: ["Action"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/55f/55fe715e129d5365b48b35b5fc8052be.jpg",

      "https://media.rawg.io/media/screenshots/c3e/c3e2f128960ffdac8d91f097ebf213e4.jpg",

      "https://media.rawg.io/media/screenshots/ab5/ab5dce69619658d010c7342523c63d69_fmTr8dx.jpg",

      "https://media.rawg.io/media/screenshots/d19/d193a94e600261aa6a35883ae7258687.jpg",

      "https://media.rawg.io/media/screenshots/87d/87d0502ad973a922615bb585ead18661.jpg",

      "https://media.rawg.io/media/screenshots/001/00156acba9a5a3316893c22f4bd15edf.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
    ],
  },
  {
    id: 10,
    name: "Portal",
    unitPrice: 5.55,
    imageUrl:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    genres: ["Action", "Puzzle"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg",

      "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg",

      "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg",

      "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg",

      "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg",

      "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
        },
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
        },
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
        },
      },
    ],
  },
  {
    id: 11,
    name: "Uncharted 4: A Thief's End",
    unitPrice: 49.99,
    imageUrl:
      "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
    genres: ["Shooter", "Action"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/fd5/fd5451e27048c3e416de1737047e4684.jpg",

      "https://media.rawg.io/media/screenshots/63f/63f551c55bb44ec41dbcab6898cdd264.jpg",

      "https://media.rawg.io/media/screenshots/30b/30bfd42d8bfe46301dbef56ba526b3ed.jpg",

      "https://media.rawg.io/media/screenshots/fd2/fd2ae2bc22f4fefeeb6f4b6f1587e128.jpg",

      "https://media.rawg.io/media/screenshots/66c/66c2aecdd80e940ea7a2d64c17cff843.jpg",

      "https://media.rawg.io/media/screenshots/89c/89c96f28e032d3434bab7b9247e01fe3.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
    ],
  },
  {
    id: 12,
    name: "Ori and the Will of the Wisps",
    unitPrice: 29.99,
    imageUrl:
      "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg",
    genres: ["Platformer", "Adventure", "Action"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/85d/85dcab4cda43f9b04a7c266d888b0d2a.jpeg",

      "https://media.rawg.io/media/screenshots/787/78717a4bd40ff4490bf779903c999807.jpeg",

      "https://media.rawg.io/media/screenshots/943/943907c512a780b1a4db86cef846ee37.jpeg",

      "https://media.rawg.io/media/screenshots/1d6/1d692afa0ccd7a5741a5a85859155dfb.jpg",

      "https://media.rawg.io/media/screenshots/3d1/3d15ad60c52476284fa6ca6a276ba280.jpg",

      "https://media.rawg.io/media/screenshots/fe0/fe0f31e9e413d2a35df07159916e909d.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
        },
      },
    ],
  },
  {
    id: 13,
    name: "Ghost of Tsushima: Director's Cut",
    unitPrice: 59.99,
    imageUrl:
      "https://media.rawg.io/media/games/193/193c9fe23ca026914fdf41d551ff3df9.jpg",
    genres: ["Adventure", "Action", "RPG"],
    soldOut: true,
    screenshots: [
      "https://media.rawg.io/media/screenshots/1cd/1cdf1d9089d53f415a97bf1c35a15b0d.jpg",

      "https://media.rawg.io/media/screenshots/b7e/b7efca7c5c4489a13a19e6d1ced1a50d.jpg",

      "https://media.rawg.io/media/screenshots/738/738d80f1a79b15b4374aeb5e855d5dbf.jpg",

      "https://media.rawg.io/media/screenshots/d51/d517f8bad0e83cef487e21bbb58e1012.jpg",

      "https://media.rawg.io/media/screenshots/97e/97e69ff05e89c0f77e3d5b01798a945b.jpg",

      "https://media.rawg.io/media/screenshots/81e/81ea0e76c5d671735410f29b1fb934ee.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
    ],
  },
  {
    id: 14,
    name: "Final Fantasy VI",
    unitPrice: 13.99,
    imageUrl:
      "https://media.rawg.io/media/games/98c/98c87b286cd2a2ba942167df384a9bd3.jpg",
    genres: ["RPG"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/db1/db1beccccb2303093d3a0cb2866a4686.jpg",

      "https://media.rawg.io/media/screenshots/009/009c64f14ccb0bc39f5f6e2e3609e4ae.jpg",

      "https://media.rawg.io/media/screenshots/3f9/3f92a9c70c19e8b9dab4fb8e477031c5.jpg",

      "https://media.rawg.io/media/screenshots/0e1/0e1020a7624cf06e20cf01cc65f9513d.jpg",

      "https://media.rawg.io/media/screenshots/aa3/aa3c64cb594b78e758c012e5697567ac.jpg",

      "https://media.rawg.io/media/screenshots/623/6237299dcf068ba6a485b36379a58f50.jpeg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 24,
          name: "Game Boy Advance",
          slug: "game-boy-advance",
        },
      },
      {
        platform: {
          id: 79,
          name: "SNES",
          slug: "snes",
        },
      },
    ],
  },
  {
    id: 15,
    name: "Stardew Valley",
    unitPrice: 4.99,
    imageUrl:
      "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
    genres: ["Indie", "RPG", "Simulation"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/b72/b722b1746256f64ce5e15558d1ac7613.jpg",

      "https://media.rawg.io/media/screenshots/733/7330aea66ef9de06bb201e1d3f10ff70.jpg",

      "https://media.rawg.io/media/screenshots/0a6/0a6dfc3ef9ac018b737427405e686e23.jpg",

      "https://media.rawg.io/media/screenshots/366/3668bbdd41a682c76370fc81691150bc.jpg",

      "https://media.rawg.io/media/screenshots/e25/e25137cf398c743153d64993160487f1.jpg",

      "https://media.rawg.io/media/screenshots/b64/b6419e71b81f36ab7bc62a6614cb5b85.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
        },
      },
      {
        platform: {
          id: 19,
          name: "PS Vita",
          slug: "ps-vita",
        },
      },
    ],
  },
  {
    id: 16,
    name: "Chrono Trigger",
    unitPrice: 11.99,
    imageUrl:
      "https://media.rawg.io/media/games/ae4/ae404f4e0f504131199703c09111bb78.jpg",
    genres: ["RPG"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/162/16230fceae21851f8e89da6d6241541d.jpg",

      "https://media.rawg.io/media/screenshots/e3e/e3e62cea4c544d6be2dc9664716cd1c9.jpg",

      "https://media.rawg.io/media/screenshots/101/101bc8e2152f8377ba4e7cca8277219d.jpg",

      "https://media.rawg.io/media/screenshots/e28/e283b0528945068e0ae0fb6e2cccfab5.jpg",

      "https://media.rawg.io/media/screenshots/492/492df7f8f68f0a3f2d414f857c30c07d.jpg",

      "https://media.rawg.io/media/screenshots/7f6/7f6ef0603fe22002db4798e504f7c858.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 9,
          name: "Nintendo DS",
          slug: "nintendo-ds",
        },
      },
      {
        platform: {
          id: 11,
          name: "Wii",
          slug: "wii",
        },
      },
      {
        platform: {
          id: 79,
          name: "SNES",
          slug: "snes",
        },
      },
    ],
  },
  {
    id: 17,
    name: "ELDEN RING",
    unitPrice: 47.99,
    imageUrl:
      "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
    genres: ["Action", "RPG"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/36f/36f941f72e2b2a41629f5fb3bd448688.jpg",

      "https://media.rawg.io/media/screenshots/290/29096848622521df7555850000236cb6.jpg",

      "https://media.rawg.io/media/screenshots/807/807685454ea8fb87363eedd49677f49b.jpg",

      "https://media.rawg.io/media/screenshots/2ee/2eea4d4cce2836f689d9d39d2a4a94d5.jpg",

      "https://media.rawg.io/media/screenshots/de9/de9b28bdd0bdb9937c7f82e55f845bb6.jpg",

      "https://media.rawg.io/media/screenshots/3a2/3a2e5f31e2061bc566bcfd30fda56a17.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
    ],
  },
  {
    id: 18,
    name: "Grand Theft Auto V",
    unitPrice: 14.98,
    imageUrl:
      "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    genres: ["Action"],
    soldOut: false,
    screenshots: [
      "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",

      "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",

      "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",

      "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",

      "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",

      "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg",
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
        },
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
        },
      },
    ],
  },
];

export async function getCatalogue() {
  // let allGames = [];
  // let filteredGames = [];
  // // let filteredGamesWithPrice = [];

  // const params = {
  //   key: API_CLIENT_AUTH,
  //   ordering: "-rating",
  //   page_size: 250,
  //   exclude_additions: true, // Exclude DLC
  //   page: 1,
  // };

  // async function getGames() {
  //   // Construct the URL with parameters
  //   const url = new URL(`${API_URL}/games`);
  //   url.search = new URLSearchParams(params).toString();

  //   const res = await fetch(url);

  //   // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  //   if (!res.ok) throw Error("Failed getting catalogue");

  //   const data = await res.json();

  //   allGames.push(data.results);

  //   if (data.next !== null && params.page < 8) {
  //     params.page = params.page + 1;
  //     await getGames();
  //   } else {
  //     return;
  //   }
  //   return;
  // }

  // await getGames();

  // const filteredResults = allGames.flat().filter((game) => {
  //   // no adult stuff
  //   if (game.esrb_rating && game.esrb_rating.id === 5) {
  //     return false;
  //   }

  //   // no adult stuff
  //   if (
  //     game.tags &&
  //     game.tags.some((tag) => [312, 1081, 890, 18188].includes(tag.id))
  //   ) {
  //     return false;
  //   }

  //   // exclude unreleased titles
  //   if (game.released === null) {
  //     return false;
  //   }

  //   // no low ratings count
  //   if (game.ratings_count < 100) {
  //     return false;
  //   }

  //   return true;
  // });

  // filteredGames.push(filteredResults);

  // return filteredGames;
  return FAKE_API;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const data = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
