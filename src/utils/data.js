import Yoghurt from "../img/yoghurt.png";
import Juice from "../img/juice.png";
import Zobo from "../img/zobo.png";
import GreekYoghurt from "../img/ice-cream.png";

export const heroData = [
  {
    id: 1,
    name: "Yogo Fura",
    description: "Yoghurt & Fura",
    price: "1,000",
    image: Yoghurt,
  },
  {
    id: 2,
    name: "Greek Yoghurt",
    description: "Yoghurt",
    price: "4,500",
    image: GreekYoghurt,
  },
  {
    id: 3,
    name: "Watermelon Special",
    description: "Watermelon, P.apple & Grape",
    price: "1,200",
    image: Juice,
  },
  {
    id: 4,
    name: "Zobo Drink",
    description: "P.apple, Ginger, Hibiscus & Date",
    price: "600",
    image: Zobo,
  },
];

export const categories = [
  {
    id: 1,
    name: "Parfait",
    urlParamName: "parfait",
  },

  {
    id: 2,
    name: "Juices",
    urlParamName: "juices",
  },
  {
    id: 3,
    name: "Smoothies",
    urlParamName: "smoothies",
  },
  {
    id: 4,
    name: "Drinks",
    urlParamName: "drinks",
  },
];
