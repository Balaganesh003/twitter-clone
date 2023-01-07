import React, { SVGProps } from 'react';

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div className="flex gap-4  items-center px-4 py-3 cursor-pointer hover:shadow-md rounded-full transition-all duration-200 group active:scale-90">
      <Icon className="w-8 h-8" />
      <p className="group-hover:text-twitter lg:text-xl font-semibold  text-base hidden md:inline ">
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
