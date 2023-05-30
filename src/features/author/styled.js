import styled from "styled-components";

const TableContainer = styled.div`
  overflow: auto;
  padding: 1px;
`;

const StyledTable = styled.table`
  text-align: center;
  margin: 30px auto 30px auto;
  border: 2px solid black;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 15px;
  border: 2px solid black;
`;

const TableCell = styled.th`
  padding: 15px;
  border: 2px solid black;
`;

export { StyledTable, TableCell, TableHeader, TableContainer };
