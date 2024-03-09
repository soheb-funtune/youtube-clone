import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { SiYoutubetv } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { TfiMenu } from "react-icons/tfi";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { SiDsautomobiles } from "react-icons/si";
import { BiSolidCameraMovie } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { IoMdMusicalNotes } from "react-icons/io";
import { TbBrandBlogger } from "react-icons/tb";
import { ImNewspaper } from "react-icons/im";
import { MdSubscriptions } from "react-icons/md";
import { useMediaQuery } from "@mui/material";

export const sidebarItemList = () => {
  return [
    { ReactIcon: IoHomeOutline, categoryId: 0, text: "Home" },
    {
      ReactIcon: MdOutlineSportsBasketball,
      categoryId: 17,
      text: "Shorts",
    },
    {
      ReactIcon: SiYoutubegaming,
      categoryId: 20,
      text: "Gaming",
    },
    // {
    //   ReactIcon: SiDsautomobiles,
    //   categoryId: 2,
    //   text: "Auto-Mobiles",
    // },

    // {
    //   ReactIcon: BiSolidCameraMovie,
    //   categoryId: 24,
    //   text: "Intertainments",
    // },
    {
      ReactIcon: GrTechnology,
      categoryId: 28,
      text: "Technology",
    },
    {
      ReactIcon: IoMdMusicalNotes,
      categoryId: 10,
      text: "Music",
    },
    {
      ReactIcon: TbBrandBlogger,
      categoryId: 22,
      text: "Blogs",
    },
    { ReactIcon: ImNewspaper, categoryId: 25, text: "News" },
    // { ReactIcon: MdSubscriptions, categoryId: 0, text: "Subscription" },
    // { ReactIcon: CiYoutube, categoryId: 0, text: "You" },
  ];
};

export const handleView = (value) => {
  if (value > 1000000) {
    return Math.round(value / 1000000) + "M";
  } else if (value > 100000) {
    return Math.round(value / 100000) + "L";
  } else if (value > 1000) {
    return Math.round(value / 1000) + "K";
  } else {
    return value;
  }
};
