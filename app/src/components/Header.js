import home from "../icons-svg/home.svg"
import burger from "../icons-svg/burger.svg"
// should contain a logo , website name or company name in the middle and socials and menu on the right side

export default function Header(){
    return (
        <header className="
            flex flex-row w-screen h-fit justify-between items-center fixed top-0 z-10 bg-black text-white text-lg 
            sm:px-20
        ">
            <div className="p-4">
                <img src={home} alt="logo" className="object-cover aspect-square" />
            </div>
            <div className="">
                Company Name
            </div>
            <nav>
                <button className="p-4">
                    <img src={burger} alt="menu" className="object-cover aspect-square" />
                </button>
            </nav>
        </header>
    )
}