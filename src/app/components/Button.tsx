import React, {FC, HTMLAttributes} from 'react';

type Props = HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "primary-outline" | "secondary-outline"
    size?: "" | "sm"
    rounded?: boolean
}
const Button: FC<Props> = ({rounded = false, variant = "primary",  size="", ...attr}) => {
    return (
        <button className={`btn ${rounded ? "btn-rounded" : ""} btn-${size} btn-${variant}`} {...attr} />
    );
};

export default Button;