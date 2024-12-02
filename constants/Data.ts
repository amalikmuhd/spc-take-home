import { Item } from "@/types";
import { IMAGES } from "./Images";

export const dummyData: Item[] = [
  {
    id: 1,
    name: "Kylee Danford",
    title: "House Cleaning",
    amount: "₦ 1,100",
    starRate: "4.8",
    reviews: "8,289",
  },
  {
    id: 2,
    name: "Kylee Danford",
    title: "House Cleaning",
    amount: "₦ 10,100",
    starRate: "5.0",
    reviews: "80,289",
  },
  {
    id: 3,
    name: "Kylee Danford",
    title: "House Cleaning",
    amount: "₦ 2,100",
    starRate: "3.8",
    reviews: "2,289",
  },
];

export const categoriesOne = [
  { iconName: IMAGES.broom, label: "Cleaning" },
  { iconName: IMAGES.wrench, label: "Repairing" },
  { iconName: IMAGES.brush, label: "Painting" },
  { iconName: IMAGES.washingMachine, label: "Laundry" },
];

export const categoriesTwo = [
  { iconName: IMAGES.wrench, label: "Appliance" },
  { iconName: IMAGES.plumber, label: "Plumbing" },
  { iconName: IMAGES.mover, label: "Movers" },
  { iconName: IMAGES.manSalon, label: "Men's Salon" },
];

export const buttons = [
  "All",
  "Cleaning",
  "Repairing",
  "Painting",
  "Laundry",
  "Appliance",
  "Plumbing",
  "Movers",
  "Men Saloon",
];
