import * as S from '../styles/steps'

export const Steps = () => {
  return (
    <S.Container>
      <S.FirstTitle>Этапы преображения</S.FirstTitle>
      <S.TextContainer>
        <S.SecondTitle>Васюков</S.SecondTitle>
        <S.SubTitle>Будущие источники обогащения васюкинцев</S.SubTitle>
      </S.TextContainer>

      <S.BlockContainer>
        <S.Column>
          <S.Item>
            <S.Circle>1</S.Circle>
            <div>Строительство железнодорожной магистрали Москва-Васюки</div>
          </S.Item>
          <S.Item>
            <S.Circle>4</S.Circle>
            <div>Строительство дворца для турнира</div>
          </S.Item>
          <S.Item>
            <S.Circle>6</S.Circle>
            <div>Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов</div>
          </S.Item>
        </S.Column>

        <S.Column>
          <S.Item>
            <S.Circle>2</S.Circle>
            <div>Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов</div>
          </S.Item>
          <S.Item>
            <S.Circle>5</S.Circle>
            <div>Размещение гаражей для гостевого автотранспорта</div>
          </S.Item>
          <S.ItemSpan2Cols>
            <S.Circle>7</S.Circle>
            <S.TextLimit>
              Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн
            </S.TextLimit>
          </S.ItemSpan2Cols>
        </S.Column>

        <S.Column>
          <S.ItemSpan2Rows>
            <S.Circle>3</S.Circle>
            <div>
              Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет
            </div>
          </S.ItemSpan2Rows>
        </S.Column>
      </S.BlockContainer>
    </S.Container>
  )
}

