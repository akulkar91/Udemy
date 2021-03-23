import { useState } from "react";
import Form, { Group, Check } from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
      No ice cream will actually be delivered
    </Popover.Content>
  </Popover>
);

const checkboxLabel = (
  <span>
    I agree to <OverlayTrigger trigger="hover" placement="right" overlay={popover} ><span style={{ color: "blue" }}>Terms and Conditions</span></OverlayTrigger>
  </span>
);
const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Form>
      <Group controlId="terms-and-conditions">
        <Check
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Group>
      <Button variant="primary" type="submit" disabled={!isChecked}>
        Confirm order
      </Button>
    </Form>
  );
};
export default SummaryForm;
