import { Button, Card } from "antd";
import { useState } from "react";

export const TranslationToolTip = ({ defs }) => {
  const [showMax, setShowMax] = useState(5);
  const [definitions, setDefinitions] = useState(defs);
  return (
    <Card
      size="small"
      title=""
      extra={<Button onClick={() => {}}>More</Button>}
      style={{ width: 300 }}
    >
      {definitions.map((defi, idx) => {
        return <p key={idx}>{defi}</p>;
      })}
    </Card>
  );
};
