import type { InfoTableProps } from '../../const/interfaces';
import * as S from '../../../styles/table'

export const CustomTable: React.FC<InfoTableProps> = ({ data }) => {
  return (
    <S.StyledTable>
      <tbody>
        {data.map(({ label, value }, idx) => (
          <tr key={idx}>
            <td>{label}</td>
            <td>
              {label === "Взнос на телеграммы:" ? (
                <>
                  <S.Strikethrough>100 руб.</S.Strikethrough>
                  {value}
                </>
              ) : (
                value
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </S.StyledTable>
  );
};