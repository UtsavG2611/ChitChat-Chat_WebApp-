import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {

  const {authUser} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    
  }
  return <>
  <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg border border-gray-200 shadow-sm">
  <div className="max-w-7x1 mx-auto px-4 h-16">
    <div className="flex items-center justify-between h-full">
      {/* LEFT LOGO*/}
      <div className="flex item-center gap-8">
        <Link to={"/"} className="flex items-center gap-2.5 hover:opacity-80 transition">
        <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
          <MessageSquare className="w-5h-5 text-blue-600"/>
        </div>
        <h1 className="text-lg font-bold text-gray-800">ChitChat</h1>
        </Link>
      </div>
    </div>
  </div>
  </header>
  </>;
};

export default Navbar;
