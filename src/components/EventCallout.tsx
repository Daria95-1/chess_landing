import { imageApp } from '../shared/const/image';
import { tableData } from '../shared/const/tableData';
import { CustomTable } from '../shared/ui/table/CustomTable';
import * as S from '../styles/eventCallout'

export const EventCallout = () => {
  return (
    <S.Container>
      <S.Section>
        <S.Text>
          <S.DarkText>
            Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему: 
          </S.DarkText>

          <S.LightText>
            «Плодотворная дебютная идея»
          </S.LightText>
        </S.Text>

        <img src={imageApp.image_1} alt="Шахматисты играют в шахматы" />
      </S.Section>

      <S.Section>
        <img src={imageApp.image_2} alt="Шахматист играет в шахматы" />

        <S.Content>
          <S.TextSecondary>
            <S.DarkText>И сеанс </S.DarkText>
            <S.LightText>одновременной игры в шахматы на 160 досках </S.LightText>
            <S.DarkText>гроссмейстера О. Бендера</S.DarkText>
          </S.TextSecondary>

          <CustomTable data={tableData} />
          
          <S.SubTitle>По всем вопросам обращаться в администрацию к К. Михельсону</S.SubTitle>
        </S.Content>
      </S.Section>
    </S.Container>
  )
};