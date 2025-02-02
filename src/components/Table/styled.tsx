import styled from "styled-components";
import {
  Heading,
  TableHeader,
  TableRow,
  TableColumnHeader,
  TableBody,
  TableCell,
  TableRoot,
} from "@chakra-ui/react";

export const StyledHeading = styled(Heading)`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-top: 15px;
`;

export const StyledTableScrollArea = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4b6cb7;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;

export const StyledTableRoot = styled(TableRoot)`
  width: 100%;
  border-collapse: collapse;
  background: #fafafa;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledTableHeader = styled(TableHeader)`
  background-color: #6983be;
  color: #fff;
  text-align: left;
  font-size: 16px;
  font-weight: bold;

  & > tr {
    border-bottom: 2px solid #ddd;
  }
`;

export const StyledTableBody = styled(TableBody)`
  background: #fff;
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-child(even) {
    background-color: #eef2ff;
  }
`;

export const StyledTableColumnHeader = styled(TableColumnHeader)`
  padding: 12px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: white;
  border-bottom: 2px solid #ddd;
  text-align: left;
`;

export const StyledTableCell = styled(TableCell)`
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 1rem;
  color: #333;
  text-align: left;

  &:last-child {
    text-align: right;
  }
`;

export const AmountCell = styled(StyledTableCell)<{ isDeposit: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.isDeposit ? "#2ecc71" : "#e74c3c")};
  text-align: right;
`;
