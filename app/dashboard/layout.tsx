import Navbar from "../ui/dashboard/nav-bar";

export default function Layout({ children } : { children : React.ReactNode }){
    return (
      <html className=" h-full overflow-hidden">
        <div className=" shadow-md ">
          <Navbar />
        </div>
        <div className=" bg-gray-300 h-full "> {children} </div>
      </html>
    );
}