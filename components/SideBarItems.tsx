import Link from "next/link";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

interface SideBarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}
const SideBarItems = ({ icon :Icon , label, active, href }: SideBarItemProps) => {
  return (
    <div>
      <Link
        href={href}
        className={twMerge(
          `
        flex h-auto
        items-center
        w-full
        gap-x-4
        font-medium
        cursor-pointer
        transition
        text-neutral-400
        py-1
        `,
          active && "text-white"
        )}>
        <p className="truncate w-full">{label}</p>
        <Icon size={26} />
      </Link>
    </div>
  );
};

export default SideBarItems;
