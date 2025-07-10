"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import EnvelopeIcon from "./icons/tech/EnvelopeIcon";
import HouseIcon from "./icons/tech/HouseIcon";
import MonitorIcon from "./icons/socials/MonitorIcon";
import UserIcon from "./icons/socials/UserIcon";
import GitHubIcon from "./icons/socials/GitHubIcon";
import LinkedInIcon from "./icons/socials/LinkedInIcon";
import InstagramIcon from "./icons/socials/InstagramIcon";

const navLinks = [
  {
    icon: <HouseIcon />,
    label: "Home",
    href: "/",
  },
  {
    icon: <UserIcon />,
    label: "About",
    href: "/about",
  },
  {
    icon: <MonitorIcon />,
    label: "Projects",
    href: "/projects",
  },
  {
    icon: <EnvelopeIcon />,
    label: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    href: "https://github.com/joewardperalta",
  },
  {
    icon: <GitHubIcon />,
    href: "https://www.linkedin.com/in/joewardperalta/",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/peraltajoeward/",
  },
];

export default function Navbar() {
  return (
    <div className="flex flex-col justify-between p-4 w-full max-w-[272px] h-screen fixed left-0 top-0 border-r border-tertiary-dark">
      <div>
        <ProfileSection />
        <Nav />
      </div>

      <div>
        <SocialSection />
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="flex items-center pb-4 border-b border-dashed border-tertiary-dark w-full">
      <Image
        className="w-12 h-12 object-cover rounded-md"
        src="/images/joewardperalta.jpg"
        width={120}
        height={120}
        alt="Author's profile picture wearing a formal turtle neck."
      />
      <div className="ml-3">
        <p>
          <strong className="text-secondary text-lg font-medium">
            Joeward
          </strong>
        </p>
        <p className="text-sm">Full Stack Developer</p>
      </div>
    </div>
  );
}

function Nav() {
  const pathname = usePathname();

  return (
    <nav className="pt-12 pr-8">
      <ol className="flex flex-col gap-3">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border border-primary text-sm hover:text-secondary transition-all duration-300 ${
                pathname === link.href
                  ? "bg-primary-light border-tertiary-dark text-secondary"
                  : "bg-transparent"
              }`}
              href={link.href}
            >
              <div className="w-4 h-4">{link.icon}</div>
              {link.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function SocialSection() {
  return (
    <div>
      <p className="pb-1 border-b border-dashed text-sm border-tertiary-dark ">
        Follow me
      </p>

      <ul className="flex gap-6 pt-4">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <Link
              className="hover:text-secondary transition-all duration-300"
              href={link.href}
            >
              <div className="w-4 h-4">{link.icon}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
