import Avatar from "@components/Avatar";
import Row from "@components/Row";
import Text from "@components/Text";
import React from "react";
import avatarImage from "@../public/avatar.jpeg";

const Navbar = () => {
  return (
    <Row bg="white" className="px-8 py-4 border-b border-b-gray w-full justify-between">
      <Text subtitle bold>
        Hello Ti-Medi 👋
      </Text>
      <Avatar src={avatarImage} />
    </Row>
  );
};

export default Navbar;
