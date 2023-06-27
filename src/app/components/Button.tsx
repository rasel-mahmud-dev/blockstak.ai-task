import React, {FC, HTMLAttributes} from 'react';

type Props = HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "primary-outline"
}
const Button: FC<Props> = ({variant = "primary", ...attr}) => {
    return (
        <button className={`btn btn-${variant}`} {...attr} />
    );
};

export default Button;