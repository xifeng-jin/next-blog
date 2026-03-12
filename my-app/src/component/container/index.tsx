import type { ReactNode } from "react";

import classNames from "classnames";
type ContainerProps = {
    children: ReactNode;
    className?: string;
    num?: number;
}

export function Container({
    children,
    className,
    num = 1,
}: ContainerProps){
    const defaultClass = `grid-cols-${num}`
    return (
        <div className={classNames('grid place-content-center gap-x-4 sm:gap-x-6', defaultClass, className)}>{children}</div>
    )
}
