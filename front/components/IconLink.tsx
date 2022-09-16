import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconLinkProps {
  link?: string;
  icon: IconDefinition;
  iconColorClass?: string;
  text: string;
}

export const IconLink = ({
  link,
  icon,
  iconColorClass,
  text,
}: IconLinkProps) => {
  return (
    <a href={link} className="flex items-center pt-2">
      <FontAwesomeIcon icon={icon} className={`pr-4 ${iconColorClass}`} />
      <p>{text}</p>
    </a>
  );
};
