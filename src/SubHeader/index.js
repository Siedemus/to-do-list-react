import { MiniorHeader } from "./styled";

const SubHeader = ({ title, extraContent }) => (
  <MiniorHeader subHeader={extraContent}>{title}</MiniorHeader>
);

export default SubHeader;
