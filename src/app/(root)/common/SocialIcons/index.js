import { Facebook, Instagram, LinkedinIcon, MessageCircleHeart, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import './index.scss'

export default function SocialIcons({ className, colored }) {
  return (
    <ul className={`${className} social-icons`}>
      <li>
        <Link
          style={{ color: colored && "#2463ac" }}
          href="https://www.facebook.com/profile.php?id=100094981643316&mibextid=ZbWKwL"
        >
          <Facebook />
        </Link>
      </li>
      <li>
        <Link
          style={{ color: colored && "#2463ac" }}
          href="https://www.linkedin.com/company/99188355/admin/feed/posts/"
        >
          <LinkedinIcon />
        </Link>
      </li>
      <li>
        <Link
          style={{ color: colored && "#2463ac" }}
          href="https://twitter.com/DocHomoeo"
        >
          <Twitter />
        </Link>
      </li>
      <li>
        <Link
          style={{ color: colored && "#2463ac" }}
          href="https://in.pinterest.com/dochomoeo/"
        >
          <MessageCircleHeart />
        </Link>
      </li>
      <li>
        <Link
          style={{ color: colored && "#2463ac" }}
          href="https://www.youtube.com/channel/UC5jJrNIThYsBzB35P_nt1-A"
        >
          <Youtube />
        </Link>
      </li>
      {/* <li>
      
     
        <a style={{ color: colored && "#00c4fc" }} href="https://twitter.com">
          <i className="fab fa-twitter" />
        </a>
      </li> */}
      <li>
        <Link
          style={{ color: colored && "#dd34c1" }}
          href="https://instagram.com/dochomoeo?igshid=OGQ5ZDc2ODk2ZA=="
        >
          <Instagram />
        </Link>
      </li>
      {/* <li>
        <a
          style={{ color: colored && "#ff081c" }}
          href="https://www.youtube.com/"
        >
          <i className="fab fa-youtube" />
        </a>
      </li> */}
    </ul>
  );
}
