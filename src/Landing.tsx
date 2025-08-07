import { EventCallout } from './components/EventCallout';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Participants } from './components/Participants';
import { Steps } from './components/Steps';
import { TICKER_TEXT } from './shared/const/ticker';
import { Ticker } from './shared/ui/ticker/Ticker';
import { GlobalStyles } from './styles/global';
import * as S from './styles/main'

export const App = () => {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <S.AllContent>
        <Header />
        <Ticker text={TICKER_TEXT}/>
        <EventCallout />
        <Steps />
        <Participants />
        <Ticker text={TICKER_TEXT}/>
        <Footer />
      </S.AllContent>
    </S.Wrapper>
  )
};
