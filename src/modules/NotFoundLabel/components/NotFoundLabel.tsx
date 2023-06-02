import {FC} from "react";
import {Link} from "react-router-dom";

export const NotFoundLabel: FC = () => {
    return (
        <div className="w-full h-full flex justify-center items-center font-mono mx-6">
            <div  className="m-auto max-w-2xl w-full flex items-center justify-center flex-col bg-1 rounded-xl px-8 py-5 gap-4">
                <span className="text-4 text-4xl">404</span>
                <span className="text-center text-4 text-3xl">Page not found</span>
                <Link to={"/"} className="text-3 text-3xl cursor-pointer">
                    To your boards
                </Link>
            </div>
        </div>
    );
};