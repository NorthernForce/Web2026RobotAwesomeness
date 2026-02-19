import {
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import blueAllianceLogo from "/images/BlueAllianceReg.png";

export function Navigation() {
  const leftButtons = [
    "Our Team",
    "Contact",
    "Donate",
    "Design",
  ];

  const rightButtons = [
    "News",
    "Coliseum", 
    "Memorial",
    //Socials
  ];

  return (
    <nav className="bg-black border-b-4 border-pink-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 h-20">
          {/* Left buttons */}
          <div className="flex items-center gap-2">
            {leftButtons.map((button) => {
              let path = "/comingsoonpage";
              if (button === 'Design') path = "/design";
              if (button === 'Contact') path = "/contact";
              
              return (
                <Link
                  key={button}
                  to={path}
                  className="px-4 py-2 text-white hover:text-pink-500 transition-colors text-[1.05rem]"
                >
                  {button}
                </Link>
              );
            })}
          </div>

          {/* Center logo */}
          <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <img src="./images/172logo_layers_pink.png" alt="Northern Force 172 Logo" className="w-16 h-16 object-contain" />
          </Link>

          {/* Right buttons */}
          <div className="flex items-center gap-2">
            {rightButtons.map((button) => {
              let path = "/comingsoonpage";
              if (button === 'News') path = "/news";
              //if (button === 'Coliseum') path = "/coliseum";
              if (button === 'Memorial') path = "/memorial";
              
              return (
                <Link
                  key={button}
                  to={path}
                  className="px-4 py-2 text-white hover:text-pink-500 transition-colors text-[1.05rem]"
                >
                  {button}
                </Link>
              );
            })}

            {/* Social media icons */}
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-700">
              <a
                href="https://www.facebook.com/falgor172/"
                className="text-white hover:text-pink-500 transition-colors p-2"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/the_northern_force/"
                className="text-white hover:text-pink-500 transition-colors p-2"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.thebluealliance.com/team/172"
                className="text-white hover:opacity-75 transition-opacity p-2"
              >
                <img src={blueAllianceLogo} alt="The Blue Alliance" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}