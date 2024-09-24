// import { ClassValue,  } from "clsx";
import {clsx} from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}