import { SearchManufacturer } from "@/components";
import { manufacturers } from "@/constants";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}


export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturers: string) => void;
}