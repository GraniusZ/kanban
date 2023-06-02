import {FC} from "react";
import {NotFoundLabel} from "@modules/NotFoundLabel";
import {usePageTitle} from "@hooks/usePageTitle.ts";

export const NotFound: FC = () => {
    usePageTitle("Not Found");
    return (
        <div className="w-full h-full bg-gradient-to-br from-1 via-2 to-3 flex items-center"><NotFoundLabel/></div>

    );
};