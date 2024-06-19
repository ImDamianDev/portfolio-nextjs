import { Inter, Oswald, Roboto } from "next/font/google";

//export const inter = Inter({ subsets: ["latin"] });

export const inter = Roboto({
    subsets: ['latin'],
    weight: ['100','300','400','500', '700']
})

export const titleFont = Oswald({
    subsets: ['latin'],
    weight: ['400', '700']
})