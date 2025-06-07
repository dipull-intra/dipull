import Col from "./col";
import Row from "./row";

export interface SelectProps {
  value?: string;
  label?: string;
  options?: string[];
  placeholder?: string;
  onClick?: (_value: string, _index: number) => void | Promise<void>;
};

const Select = {
  Col, Row
};

export default Select;