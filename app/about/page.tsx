import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "This is an app designed to learn Next13",
    keywords: "nextjs, next13, about",
    
};

export default async function About() {
    return (
        <main>
            <h1>About</h1>
            <p>This is an app designed to learn Next13</p>
        </main>
    )
}