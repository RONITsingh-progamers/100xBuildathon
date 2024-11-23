"use client";

import { usePathname } from "next/navigation";
import Nav from "./components/common/navbar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludeRoutes = [
    "/login",
    "/register",
    "/dashboard",
    "/dashboard/advance",
  ]; // Add other routes you want to exclude

  const shouldRenderNavAndFooter = !excludeRoutes.includes(pathname);

  return (
    <>
      {shouldRenderNavAndFooter && <Nav />}
      {children}
    </>
  );
};

export default ClientLayout;
