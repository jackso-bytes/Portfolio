import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconLinkProps {
  link?: string;
  icon: IconDefinition;
  text: string;
}

export const IconLink = ({ link, icon, text }: IconLinkProps) => {
  return (
    <a href={link} className="flex items-center pt-2">
      <FontAwesomeIcon icon={icon} className="pr-4" />
      <p>{text}</p>
    </a>
  );
};
