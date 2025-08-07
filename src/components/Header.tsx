import { imageApp } from '../shared/const/image';
import { CustomButton } from '../shared/ui/button/Button';
import * as S from '../styles/header'
    
export const Header = () => {
  return (
    <S.WrapperMainBlock>
      <S.Logo src={imageApp.logo} alt="Логотип" />
      
      <S.CityLayer />
      
      <S.Content>
        <S.TitleWrapper>
          <S.TitlePartOne>Превратите уездный город</S.TitlePartOne>
          <S.TitlePartTwo>в столицу</S.TitlePartTwo>
          <S.TitlePartThree>земного шара</S.TitlePartThree>
        </S.TitleWrapper>

        <S.Section>
            <S.TextBlock>Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам</S.TextBlock>
            
          <S.Buttons>
            <CustomButton
              bgColor="var(--color-black)"
              textColor="var(--color-white)"
              borderColor="var(--color-black)"
              hoverBgColor="var(--color-yellow)"
              hoverTextColor="var(--color-black)"
            >
              Поддержать шахматную мысль
            </CustomButton>

            <CustomButton
              bgColor="transparent"
              textColor="var(--color-black)"
              borderColor="var(--color-black)"
              hoverBgColor="var(--color-black)"
              hoverTextColor="var(--color-white)"
            >
              Подробнее о турнире
            </CustomButton>
          </S.Buttons>
        </S.Section>
      </S.Content>
    </S.WrapperMainBlock>
  )
};
