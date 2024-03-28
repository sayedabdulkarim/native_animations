import { ImageSourcePropType } from "react-native";

export interface Data {
  id: number;
  image: ImageSourcePropType;
  name: string;
  exp: string;
  visa: ImageSourcePropType;
}

const data: Data[] = [
  {
    id: 1,
    image: require("../assets/images/gradient1.png"),
    name: "Card One",
    exp: "1/29",
    visa: require("../assets/images/visa.png"),
  },
  {
    id: 2,
    image: require("../assets/images/gradient2.png"),
    name: "Card Two",
    exp: "1/29",
    visa: require("../assets/images/visa.png"),
  },
  {
    id: 3,
    image: require("../assets/images/gradient3.png"),
    name: "Card Three",
    exp: "1/29",
    visa: require("../assets/images/visa.png"),
  },
  {
    id: 4,
    image: require("../assets/images/gradient4.png"),
    name: "Card Four",
    exp: "1/29",
    visa: require("../assets/images/visa.png"),
  },
  {
    id: 5,
    image: require("../assets/images/gradient5.png"),
    name: "Card Five",
    exp: "1/29",
    visa: require("../assets/images/visa.png"),
  },

  {
    id: 6,
    image: require("../assets/images/gradient6.png"),
    name: "Rakha Wibowo",
    exp: "1/29",
    visa: require("../assets/images/visa.png"),
  },
];

export { data };
