import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/common/navbar/Navbar";

export default function RootLayout() {
  const location = useLocation();

  // 네비게이션 바가 필요 없는 경로
  const noNavbarPaths = ["/recipe/detail", "/refrigerator/add-ingredient"];

  return (
    <>
      <Outlet />
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
    </>
  );
}
