import Navbar from "../ui/dashboard/nav-bar";

export default function Layout({ children } : { children : React.ReactNode }){
    return (
      <div className="overflow-hidden">
        <div className=" shadow-md ">
          <Navbar />
        </div>
        <div className=" bg-gray-300 max-w-screen min-h-screen "> {children} </div>
      </div>
    );
}