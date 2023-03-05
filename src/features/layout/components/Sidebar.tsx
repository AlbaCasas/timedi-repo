import Link from "next/link";
import React from "react";

import Column from "@components/Column";
import IconComponent from "@components/Icon";
import type { Icon } from "@components/Icon/icons";
import Row from "@components/Row";
import Text from "@components/Text";
import { cls } from "@core/styles/cls";

const Item = ({
  title,
  icon,
  active,
  href,
  external,
}: {
  title: string;
  icon: Icon;
  active?: boolean;
  href: string;
  external?: boolean;
}) => {
  return (
    <Link href={href} target={external ? "_blank" : "_self"}>
      <Row
        className={cls("px-4 gap-4 py-3 w-full bg-dark bg-opacity-0 md:px-5", {
          "bg-opacity-20": active,
        })}
      >
        <IconComponent color="lighterText" name={icon} className="text-lg md:text-md" />
        <Text color="lighterText" className="hidden md:block">
          {title}
        </Text>
        {external && (
          <IconComponent color="lighterText" name="externalLink" className="ml-auto hidden md:block" size="small" />
        )}
      </Row>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <Column bg="darkBackground" className="w-fit min-h-[100vh] py-8 items-center gap-7 md:min-w-[255px] md:py-6">
      <Text title color="white" className="hidden max-w-[148px] text-center md:block">
        Repo Search
      </Text>
      <Column className="w-full">
        <Item href="/" title="Repositories" icon="github" active />
        <Item href="https://www.linkedin.com/in/alba-casas/" title="Alba Casas" icon="linkedin" external />
      </Column>
    </Column>
  );
};

export default Sidebar;
