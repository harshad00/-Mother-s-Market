
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const data = [
  {
    id: "1",
    title: "Greenfield Farms",
    img: "/img/farm.jpg", // Assuming the image is in the public folder
    text: `Greenfield Farms is known for its sustainable farming practices and delicious, organic produce.
     From juicy strawberries to crisp lettuce, they offer a wide variety of fresh fruits and vegetables.`,
    link: "https://greenfieldfarmllc.com/",
  },
  {
    id: "2",
    title: "Baker's Delight",
    img: "/img/baker.jpg", // Assuming the image is in the public folder
    text: "Baker’s Delight brings freshly baked breads, pastries, and sweet treats to Mother's Market. Their sourdough bread and chocolate croissants are market favorites",
    link: "https://www.bakersdelight.com.au/",
  },
  {
    id: "3",
    title: "Sunshine Dairy",
    img: "/img/deary.jpg", // Assuming the image is in the public folder
    text: "Crafty Creations features a unique selection of handmade crafts, including jewelry, pottery, and home decor items, perfect for gifts or personal treasures.",
    link: "https://www.indiamart.com/proddetail/dairy-management-software-16569609255.html",
  },
];


export function Slider() {
  return (
    <Carousel className="rounded-xl">
      {data.map((d) => (
        <div key={d.id}>
          <div className="relative h-full w-full">
            <img
              src={d.img}
              alt="image 1"
              className=" h-[30rem] w-full object-cover"
            />
            <div className="absolute inset-0 grid  w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center   md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl  md:text-4xl lg:text-5xl"
                >
                  {d.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  {d.text}
                </Typography>
                <div className="flex justify-center gap-2">
                  <Link to={`${d.link}`} target="_blank">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                  </Link>
                  {/* <Button size="lg" color="white" variant="text">
                        Gallery
                      </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
