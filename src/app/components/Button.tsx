import React, {FC, HTMLAttributes} from 'react';

type Props = HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "primary-outline" | "secondary-outline" | "light"
    size?: "" | "sm"
    rounded?: boolean
    className?: string
}
const Button: FC<Props> = ({className = "", rounded = false, variant = "primary", size = "", ...attr}) => {
    return (
        <button className={`btn ${rounded ? "btn-rounded" : ""} btn-${size} btn-${variant} ${className}`} {...attr} />
    );
};

export default Button;