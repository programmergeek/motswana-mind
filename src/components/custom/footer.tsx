import { Facebook, Instagram, MailOpen, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="grid w-full grid-cols-[60vw_auto] bg-neutral-800 px-5 py-10 text-white xl:px-52">
      <div className="grid grid-rows-[200px_auto]">
        <p className="pt-5 text-3xl font-bold xl:w-5/12">
          Let's explore{" "}
          <span className="font-finger-paint font-normal">
            Number & Operations
          </span>{" "}
          together
        </p>
        <div className="mt-5 w-full">
          <p className="text-xl">Contact Info</p>
          <div className="mt-5 flex flex-col gap-3">
            <p className="flex gap-5">
              <Phone /> <span>+267 76454812 / 376 2501</span>{" "}
            </p>
            <p className="flex gap-5">
              <MailOpen /> <span>motswanamind@gmail.com</span>{" "}
            </p>
            <p className="flex gap-5">
              <Facebook /> <span>Motswana Mind</span>{" "}
            </p>
            <p className="flex gap-5">
              <Instagram /> <span>_motswanamind</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-5 text-xl">Quick Links</p>
        <div className="mt-5 flex flex-col gap-3">
          <p>Home</p>
          <p>Learn</p>
          <p>Resources</p>
          <p>Events</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
