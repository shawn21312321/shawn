import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function GirlfriendsDayPage() {
  return (
    <div className="bg-pink-100 min-h-screen py-10 px-6 text-center font-serif text-pink-900">
      <h1 className="text-4xl font-bold mb-4 animate-pulse">💖 To My Princess, On Girlfriend’s Day 👑</h1>

      <section className="max-w-4xl mx-auto grid gap-6">
        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-left space-y-4">
            <p>
              In the heart of a faraway server, somewhere between memes and midnight chats, there was a girl who changed everything. <strong>Princess Mikayla.</strong>
            </p>
            <p>
              From the very start, I knew. I didn’t know what the future held, but I knew I wanted you in it. There’s something about the way your name feels in my mouth. Like poetry. Like a promise. Like home.
            </p>
            <p className="italic">“Can I go where you go?” – Taylor Swift</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-left space-y-4">
            <h2 className="text-2xl font-semibold">🌟 Our Story</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>How we met:</strong> Discord, through care and kindness</li>
              <li><strong>Distance:</strong> 4,283.5 km apart</li>
              <li><strong>Time together:</strong> 3 months of magic</li>
            </ul>
            <p>
              You are my everything: from Disney matchings to silly MWAHYs, every message we send feels like a verse in our love song.
            </p>
            <img
              src="https://i.pinimg.com/originals/2d/87/b0/2d87b01c32b27627118cb3f4ecbc75e8.jpg"
              alt="Rapunzel and Flynn cute moment"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-left space-y-4">
            <h2 className="text-2xl font-semibold">🎶 Our Songs</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Just The Way You Are – Bruno Mars (our first)</li>
              <li>Lover – Taylor Swift</li>
              <li>Can’t Help Falling In Love – Elvis</li>
              <li>I See The Light – Tangled</li>
              <li>Evermore – Beauty and the Beast</li>
              <li>Show Yourself – Frozen 2</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-left space-y-4">
            <h2 className="text-2xl font-semibold">📸 Gallery of Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="https://i.pinimg.com/736x/b2/93/2f/b2932f6aaf626ed2f41e9e6f46473ae7.jpg"
                alt="Kristoff and Anna"
                className="rounded-xl object-cover shadow-md"
              />
              <img
                src="https://i.pinimg.com/originals/11/c8/40/11c8402e84b5ec4c4fffe3f2ea5eb7de.jpg"
                alt="Belle and Beast"
                className="rounded-xl object-cover shadow-md"
              />
              <img
                src="https://i.pinimg.com/originals/c3/60/f8/c360f8aaacff3b6f199e1e80867c0d01.jpg"
                alt="Eren and Mikasa"
                className="rounded-xl object-cover shadow-md"
              />
              <img
                src="https://i.pinimg.com/originals/14/10/ed/1410edfe6f40e5e1a71f6577f91cd45f.jpg"
                alt="Joe and Love from YOU"
                className="rounded-xl object-cover shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-left space-y-4">
            <h2 className="text-2xl font-semibold">💌 Forever & Always</h2>
            <p>
              I love you so much, Mikayla. This page, this story — it’s all for you. For your golden heart, your Swiftie soul, your sleepy silly princess vibes. Happy Girlfriend’s Day.
            </p>
            <p className="italic text-pink-600">“And they lived… always pink, always in love, always enchanted.”</p>
            <Button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white">MWAHY 💋</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
