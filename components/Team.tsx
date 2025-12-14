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
    img: "/team/cine.png",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Mayank Banna",
    role: "Video Editor",
    img: "/team/edit.png",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Abhay Thankur",
    role: "Backend Developer",
    img: "/team/backend.png",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Rishabh Mandal",
    role: "PPC Specialist",
    img: "/team/ppc.png",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Aryan Mishra",
    role: "AI Engineer",
    img: "/team/ai.png",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Renu Chaturvedi",
    role: "CHRO",
    img: "/team/chro.png",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Riya Karn",
    role: "HR",
    img: "/team/hr.png",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
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
                  <Link href={m.instagram} target="_blank" className="team-social-icon insta">
                    <Image src="/team/insta.png" alt="Instagram" width={28} height={28} />
                  </Link>
                )}
                {m.facebook && (
                  <Link href={m.facebook} target="_blank" className="team-social-icon fb">
                    <Image src="/team/facebook.png" alt="Facebook" width={28} height={28} />
                  </Link>
                )}
                {m.twitter && (
                  <Link href={m.twitter} target="_blank" className="team-social-icon tw">
                    <Image src="/team/twitter.png" alt="Twitter" width={28} height={28} />
                  </Link>
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