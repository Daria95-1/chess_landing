import styled from 'styled-components';

export const StyledTable  = styled.table`
  border-collapse: collapse;
  margin-top: 40px;
  font-size: 20px;
  width: 1130px;
  table-layout: fixed;

  td {
    padding: 10px 10px;
    border-bottom: 1px solid var(--color-grey);
  }

  td:first-child {
    width: 50%;
    color: var(--color-text-grey);
    border-right: 1px solid var(--color-grey);
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const Strikethrough = styled.span`
  color: var(--color-text);
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
  margin-right: 8px;
`;
