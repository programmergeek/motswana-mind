import { Facebook, Instagram, MailOpen, Phone, Copyright } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div>
    <div className="grid w-full md:grid-cols-2 lg:grid-cols-4 bg-neutral-800 px-5 py-10 text-white xl:px-10">
      <div className="col-span-2">
        <p className="pt-5 text-3xl font-bold xl:w-full">
          Let's explore{" "}
          <span className="font-finger-paint font-normal">
            Number & Operations
          </span>{" "}
          together
        </p>
      </div>

        <div className="mt-5 pl-16">
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
      
      <div>
        
        <div className="mt-5 flex flex-col gap-3 pl-16">
          <p className=" text-xl">Quick Links</p>
          <p>Home</p>
          <p>Learn</p>
          <p>Resources</p>
          <p>Events</p>
        </div>
      </div>

      
    </div>
      <div className="w-full bg-black p-3 text-white flex justify-center">
        <Copyright />
        <p className="">2024 Motswana Mind</p>
      </div>
    </div>
  );
};

export default Footer;
