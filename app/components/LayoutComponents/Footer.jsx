// ! ----------------------------- imports start ---------------------------------- //
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterLogo from "@/assets/icons/FooterLogo";
import Email from "@/assets/icons/socials/Email";
import Facebook from "@/assets/icons/socials/Facebook";
import Instagram from "@/assets/icons/socials/Instagram";
import Phone from "@/assets/icons/socials/Phone";
import Twitter from "@/assets/icons/socials/Twitter";
import YouTube from "@/assets/icons/socials/YouTube";

import "@/styles/components/footer.scss";
// ! ----------------------------- imports End ---------------------------------- //

const Footer = () => {
  // ^ ----------------------------- constants start ---------------------------------- //

  const cols = [
    {
      title: "الوصول السريع",
      links: [
        { name: "خدماتنا", href: "#" },
        { name: "اطلب خدمة", href: "#" },
      ],
    },
    {
      title: "حول موقعنا",
      links: [
        { name: "من نحن", href: "#" },
        { name: "تواصل معنا", href: "#" },
        { name: "الشروط والأحكام", href: "#" },
        { name: "سياسة الخصوصية", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <Facebook />, href: "#" },
    { icon: <YouTube />, href: "#" },
    { icon: <Instagram />, href: "#" },
    { icon: <Twitter />, href: "#" },
  ];
  // ^ ----------------------------- constants End ---------------------------------- //

  return (
    // * ---------------------------- template start --------------------------------- //
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* First Column: Logo and Socials */}
          <div className="footer__logo-section animate__animated">
            <FooterLogo />
            <p className="footer__description">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى
            </p>
            <div className="footer__social-icons">
              {socialIcons?.map((social, index) => (
                <Link key={`social-${index}`} href={social.href} className="icon-hover">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__contact animate__animated">
            <h3 className="footer__title">هل لديك أسئلة</h3>
            <Link href="#" className="footer__contact-link mb-[22px]">
              <Email /> contact@company.com
            </Link>
            <Link href="#" className="footer__contact-link">
              <Phone /> 414 687 - 5892
            </Link>
          </div>

          {cols.map((section, index) => (
            <div key={`col-${index}`} className="footer__section animate__animated">
              <h3 className="footer__title">{section.title}</h3>
              <ul className="footer__links">
                {section?.links?.map((link, linkIndex) => (
                  <li key={`link-${linkIndex}`} className="footer__link-item">
                    <Link href={link.href} className="footer__link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer__buttons animate__animated">
          <Link href="#">
            <Image width={105} height={38} alt="play-store-btn" src="/images/google-btn.png" />
          </Link>
          <Link href="#">
            <Image width={105} height={38} alt="play-store-btn" src="/images/apple-btn.png" />
          </Link>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="footer__bottom ">
        جميع الحقوق محفوظة - موقع كشف تسربات
      </div>
    </footer>
    // * ---------------------------- template end --------------------------------- //

  );
};

export default Footer;
