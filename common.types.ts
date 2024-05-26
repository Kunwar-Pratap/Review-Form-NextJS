import { ReactNode } from "react";

export type THero = {
    children: ReactNode;
}

export interface IReviewCard {
    children: ReactNode;
}

export interface IStarRating {
    totalStarsValue: number;
    localStorageName: string;
}
