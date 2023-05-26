const posts = [
    {
        title: "Exploring the Wonders of Nature",
        slug: "exploring-the-wonders-of-nature",
        content: "In this post, we embark on an exciting journey through lush forests, majestic mountains, and breathtaking waterfalls. Join us as we discover the beauty and serenity of nature."
      },
      {
        title: "The Art of Culinary Delights",
        slug: "the-art-of-culinary-delights",
        content: "In this post, we delve into the world of gastronomy, exploring unique flavors, innovative recipes, and exquisite culinary experiences. Prepare to tantalize your taste buds!"
      },
      {
        title: "Unveiling the Secrets of the Cosmos",
        slug: "unveiling-the-secrets-of-the-cosmos",
        content: "In this post, we take a cosmic journey to unravel the mysteries of the universe. From distant galaxies to black holes, we explore the wonders of space and its infinite possibilities."
      },
      {
        title: "A Guide to Mindful Living",
        slug: "a-guide-to-mindful-living",
        content: "In this post, we delve into the practice of mindfulness, offering tips and techniques to cultivate a calmer and more present state of being. Discover the transformative power of living in the moment."
      },
      {
        title: "The Thrill of Adventure Sports",
        slug: "the-thrill-of-adventure-sports",
        content: "In this post, we dive into the adrenaline-pumping world of adventure sports. From skydiving to rock climbing, we explore the exhilarating activities that push boundaries and ignite the spirit of adventure."
      },
      {
        title: "Unlocking the Secrets of Ancient Civilizations",
        slug: "unlocking-the-secrets-of-ancient-civilizations",
        content: "In this post, we travel back in time to unravel the enigmatic tales of ancient civilizations. From the Egyptian pyramids to the Mayan temples, we uncover the mysteries of the past."
      },
      {
        title: "The Power of Positive Thinking",
        slug: "the-power-of-positive-thinking",
        content: "In this post, we explore the profound impact of positive thinking on our lives. Learn how to cultivate a positive mindset, overcome challenges, and embrace a happier, more fulfilling existence."
      },
      {
        title: "The World of Sustainable Fashion",
        slug: "the-world-of-sustainable-fashion",
        content: "In this post, we delve into the realm of sustainable fashion, showcasing eco-friendly brands, ethical manufacturing practices, and the importance of conscious consumerism in creating a greener future."
      },
      {
        title: "Capturing Moments: The Art of Photography",
        slug: "capturing-moments-the-art-of-photography",
        content: "In this post, we celebrate the art of photography, exploring techniques, storytelling through images, and the profound ability of a photograph to capture a single moment for eternity."
      },
      {
        title: "The Magic of Music: A Universal Language",
        slug: "the-magic-of-music-a-universal-language",
        content: "In this post, we immerse ourselves in the enchanting world of music. From classical compositions to global beats, we discover how music transcends barriers and speaks to the soul."
      }
];

import { getServerSession } from 'next-auth';
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}