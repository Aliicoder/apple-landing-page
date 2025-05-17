import { footerLinks } from "../../constants";
import cn from "../../utils/cn";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div
        className={cn(
          "px-8 py-16 gap-4 mx-auto container flex",
          "max-md:flex-col"
        )}
      >
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store </span>
            or <span className="underline text-blue">other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex flex-col  justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}
                {i < footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
