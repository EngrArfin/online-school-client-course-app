import { Link } from "@heroui/link";

import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/src/config/site";
import { title } from "@/src/components/primitives";

const Header = () => {
  return (
    <section className=" min-h-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Softmax Online School&nbsp;</span> <br />
        <span className={title({ color: "violet" })}> 1-10 Class&nbsp;</span>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
};

export default Header;
