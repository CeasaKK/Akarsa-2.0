// components/Team.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Member = {
  name: string;
  role: string;
  img: string;       // headshot image
  instagram?: string;
  facebook?: string;
  twitter?: string;
};

const TEAM: Member[] = [
  {
    name: "Bhupendra Yadav",
    role: "Cinematographer",
    img: "/team-1.jpg",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "John Doe",
    role: "Creative Director",
    img: "/team-2.jpg",
  },
  {
    name: "Aisha Malhotra",
    role: "Brand Strategist",
    img: "/team-3.jpg",
  },
  {
    name: "Karan Sethi",
    role: "Lead Developer",
    img: "/team-4.jpg",
  },
  {
    name: "Meera Patel",
    role: "Designer",
    img: "/team-5.jpg",
  },
  {
    name: "Rohit Verma",
    role: "Marketing Lead",
    img: "/team-6.jpg",
  },
  {
    name: "Sana Qureshi",
    role: "Copywriter",
    img: "/team-7.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="team-section">
      <p className="section-heading-eyebrow">Our Team</p>
      <h2 className="section-heading-title">The Creative Minds Driving Your Success</h2>

      <div className="team-grid">
        {TEAM.map((m) => (
          <div key={m.name} className="team-card">
            <div className="team-img-wrap">
              <Image
                src={m.img}
                alt={m.name}
                width={500}
                height={500}
                className="team-img"
              />

              <div className="team-socials">
                {m.instagram && (
                  <Link href={m.instagram} target="_blank" className="team-social-icon insta" />
                )}
                {m.facebook && (
                  <Link href={m.facebook} target="_blank" className="team-social-icon fb" />
                )}
                {m.twitter && (
                  <Link href={m.twitter} target="_blank" className="team-social-icon tw" />
                )}
              </div>
            </div>

            <div className="team-info">
              <h3 className="team-name">{m.name}</h3>
              <p className="team-role">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}