import { useState } from "react";
import Form, { Group, Check } from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const checkboxLabel = (
  <span>
    I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
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
