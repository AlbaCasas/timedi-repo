import React from "react";

import Row from "@components/Row";
import Text from "@components/Text";

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <Row className="rounded-sm px-3 py-1 border border-gray bg-lightBackground">
      <Text tag color="darkBackground">
        {children}
      </Text>
    </Row>
  );
};

export default Tag;
