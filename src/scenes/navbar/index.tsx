import Logo from "@/assets/logo.svg";
import CustomBtn from "@/shared/CustomBtn";
import Links from "./Links";
import { SelectedPage } from "@/shared/types";
import Bars from "@/assets/icon-hamburger.svg";
import XMark from "@/assets/icon-close.svg";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(true);
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <nav className="fixed top-0 z-40   w-full bg-white p-8">
      <div className="mx-auto flex w-5/6 items-center justify-between ">
        {/* logo */}

        <img src={Logo} alt="logo" />

        {/* nav links */}
        {isAboveMediaScreens && (
          <div className="relative ">
            <ul className="relative flex items-center justify-center gap-8">
              {["home", "about", "blog", "careers"].map((items: string) => (
                <Links
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                  isAboveMediaScreens={isAboveMediaScreens}
                  selectPage={selectPage}
                  setSelectedPage={setSelectedPage}
                  items={items}
                  key={items}
                />
              ))}
            </ul>
          </div>
        )}
        {isAboveMediaScreens ? (
          <div>
            <CustomBtn>request invite</CustomBtn>
          </div>
        ) : (
          <div>
            {isMenuToggled ? (
              <img
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                src={Bars}
                alt="hamburger"
                className="h-6 w-6 transition duration-500 "
              />
            ) : (
              <img
                className="  h-6 w-6 transition duration-500 "
                src={XMark}
                alt="close"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
            )}
          </div>
        )}
      </div>
      {!isAboveMediaScreens && !isMenuToggled && (
        <div className=" fixed top-20 left-0 right-0 bottom-0   bg-slate-600 bg-opacity-80   ">
          <div className=" mx-auto mt-5 w-5/6  rounded-md bg-white p-6 ">
            <ul className="relative flex flex-col items-center justify-center gap-8">
              {["home", "about", "blog", "careers"].map((items: string) => (
                <Links
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                  isAboveMediaScreens={isAboveMediaScreens}
                  selectPage={selectPage}
                  setSelectedPage={setSelectedPage}
                  items={items}
                  key={items}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
