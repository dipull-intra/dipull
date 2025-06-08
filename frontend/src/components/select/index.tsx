import Col from "./col";
import Row from "./row";

export interface SelectProps {
  value?: string;
  label?: string;
  options?: string[] | readonly string[];
  values?: string[] | readonly string[];
  placeholder?: string;
  onClick?: (_value: string, _index: number, _values_value: string | undefined) => void | Promise<void>;
};

const Select = {
  Col, Row
};

export default Select;