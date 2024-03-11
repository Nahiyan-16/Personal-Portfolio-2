import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProjectItem } from "./navbar-menu";
import { cn } from "../utils/cn";
import dashboardImg from "../images/dashboard.png";
import webCrawlerImg from "../images/webCrawler.png";
import planYourDayImg from "../images/PlanYourDay.png";
import nanotronicsImg from "../images/Nanotronics.jpg";

const NavbarMenu = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-5" />
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed lg:inset-x-0 lg:w-[30%] w-[100%] mr-auto ml-auto z-50 flex justify-center",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Links">
          <div className="flex flex-col space-y-4 text-sm lg:text-md">
            <HoveredLink href="https://www.linkedin.com/in/nahiyanahmed/">
              LinkedIn
            </HoveredLink>
            <HoveredLink href="https://github.com/Nahiyan-16/">
              GitHub
            </HoveredLink>
            <HoveredLink href="https://www.instagram.com/nahiyan16/">
              Instagram
            </HoveredLink>
            <HoveredLink href="https://www.youtube.com/channel/UC9zr1Q2LtQtxtlKc45P7kMA">
              YouTube
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid lg:grid-cols-2 grid-cols-1 gap-10 p-4">
            <ProjectItem
              title="Plan Your Day"
              href="#planYourDay"
              src={planYourDayImg}
              description="A personalized planning web application"
            />
            <ProjectItem
              title="nAnalysis Converter"
              href="#nAnalysisConverter"
              src={nanotronicsImg}
              description="A C++ and MFC application designed to update databases"
            />
            <ProjectItem
              title="Personal Dashboard"
              href="#dashboard"
              src={dashboardImg}
              description="A customizable dashboard made to enliven the user experience"
            />
            <ProjectItem
              title="Web Crawler"
              href="#webCrawler"
              src={webCrawlerImg}
              description="A java application created to gather images from websites"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">About</HoveredLink>
            <HoveredLink href="#contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarMenu;
