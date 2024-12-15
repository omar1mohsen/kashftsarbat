// ! ----------------------------- imports start ---------------------------------- //
import { Logo } from "@/assets/icons/Logo";
import NotificationBing from "@/assets/icons/NotificationBing";
import Link from "next/link";
import AppButton from "../SharedComponents/UiComponents/Button/Button";
import Auth from "@/components/Auth/Auth";
import LangIcon from "@/assets/icons/LangIcon";
import { Row } from "antd";

import "@/styles/components/header.scss";
// ! ----------------------------- imports End ---------------------------------- //
const Header = () => {
  return (
    // * ---------------------------- template start --------------------------------- //

    <header className="bg-main-500">
      <main className="header-wrapper">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="header-links">
          <Link href="/" className="active">
            الرئيسية
          </Link>
          <Link href="/">خدمات</Link>
          <Link href="/">من نحن</Link>
          <Link href="/">تواصل معانا</Link>
        </ul>
        <div className="flex items-center gap-4 md:gap-6">
          <Row className="header-actions">
            <AppButton className="notification-btn">
              <NotificationBing />
            </AppButton>
            <Auth />
          </Row>
          <div className="flex items-center gap-2 text-white max-md:text-xs">
            EN
            <LangIcon />
          </div>
        </div>
      </main>
    </header>
    // * ---------------------------- template end --------------------------------- //

  );
};

export default Header;
