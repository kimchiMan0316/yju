import { Outlet, ScrollRestoration } from "react-router-dom";
import { TopNav } from "./topNav";
import { Footer } from "./footer";
import ProtectedRoute from "../../auth/protectedRoute";

const DefaultLayout = () => {
  return (
    <ProtectedRoute>
      <div className="w-screen h-auto">
        <TopNav />
        <div className="pt-16 pb-16 min-h-[calc(100vh-9rem)]">
          <Outlet />
          <ScrollRestoration />
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default DefaultLayout;
