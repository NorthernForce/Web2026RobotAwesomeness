import {
  Shield,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const leftButtons = [
    "Our Team",
    "Contact",
    "Donate",
    "Design",
  ];
  const rightButtons = ["News", "Links", "Memorial"];

  return (
    <nav className="bg-black border-b-4 border-pink-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 h-20">
          {/* Left buttons */}
          <div className="flex items-center gap-2">
            {leftButtons.map((button) => (
              button === 'Design' ? (
                <Link
                  key={button}
                  to="/design"
                  className="px-4 py-2 text-white hover:text-pink-500 transition-colors text-[1.05rem]"
                >
                  {button}
                </Link>
              ) : (
                <button
                  key={button}
                  className="px-4 py-2 text-white hover:text-pink-500 transition-colors text-[1.05rem]"
                >
                  {button}
                </button>
              )
            ))}
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-2">
            {rightButtons.map((button) => (
              <button
                key={button}
                className="px-4 py-2 text-white hover:text-pink-500 transition-colors text-[1.05rem]"
              >
                {button}
              </button>
            ))}

            {/* Social media icons */}
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-700">
              <a
                href="#"
                className="text-white hover:text-pink-500 transition-colors p-2"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-500 transition-colors p-2"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-500 transition-colors p-2"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}