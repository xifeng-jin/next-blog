import type { ReactNode } from "react";

import classNames from "classnames";
type ContainerProps = {
    children: ReactNode;
    className?: string;
    num?: number;
}

export default function Container({
    children,
    className,
    num = 1,
}: ContainerProps){
    const defaultClass = `grid-cols-${num}`
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="hidden sm:block sm:col-span-2"></div>
            <div className="col-span-12 sm:col-span-8">
                {children}
            </div>
            <div className="hidden sm:block sm:col-span-2"></div>
        </div>
    )
}
