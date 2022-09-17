import { IconLink } from "../components/IconLink";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            © Copyright 2022. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-8">
            <IconLink
              link="https://github.com/jackso-bytes"
              icon={faGithub}
              text="GitHub"
            />
            <IconLink
              link="https://www.youtube.com/watch?v=9l3r0EFp9ow&t=1235s"
              icon={faYoutube}
              iconColorClass="text-red-500"
              text="YouTube"
            />
            <IconLink
              link="https://www.linkedin.com/in/tom-jackson-9200429b/"
              icon={faLinkedin}
              iconColorClass="text-sky-700"
              text="LinkedIn"
            />
            <IconLink
              link="https://twitter.com/Tom0901S"
              icon={faTwitter}
              iconColorClass="text-sky-500"
              text="Twitter"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
