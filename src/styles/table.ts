import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin-top: 40px;
  font-size: 20px;
  max-width: 1130px;
  table-layout: fixed;
  width: 100%;

  @media (max-width: 800px) {
    width: 335px;
    margin-top: -20px;
  }

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

  @media (max-width: 900px) {
    display: block;

    tbody {
      display: block;
    }

    tr {
      display: block;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--color-grey);
      padding-bottom: 10px;
    }

    td {
      display: block;
      width: 100%;
      border: none;
      padding: 5px 0;
    }

    td:first-child {
      color: var(--color-text-grey);
      font-weight: 400;
      border: none;
      margin-bottom: 5px;
    }

    tr:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;

export const Strikethrough = styled.span`
  color: var(--color-text);
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
  margin-right: 8px;
`;
