import React from "react";

import Avatar from "@components/Avatar";
import Row from "@components/Row";
import Text from "@components/Text";
import avatarImage from "@../public/avatar.jpeg";

const Navbar = () => {
  return (
    <Row bg="white" className="px-4 md:px-8 py-3 md:py-4 border-b border-b-gray justify-between flex-wrap">
      <Row className="gap-1">
        <Text subtitle bold>
          <span className="hidden md:inline">Hello </span>
          Ti-Medi 👋
        </Text>
      </Row>
      <Avatar src={avatarImage} />
    </Row>
  );
};

export default Navbar;
