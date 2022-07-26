import LogoIMG from "../../public/Logo.png";
import LogoExtensiveIMG from "../../public/LogoExtensive.png";
import Image from "next/image";

type LogoProps = {
    variant?: "small" | "extended";
    width?: number;
    height?: number;
};

export const Logo = ({ variant, width, height = 30 }: LogoProps) => {
    return (
        <>
            {variant === "small" ? (
                <Image src={LogoIMG} width={width || 25} alt="logo" />
            ) : (
                <Image src={LogoExtensiveIMG} height={height} alt="logo" />
            )}
        </>
    );
};
