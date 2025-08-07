import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as S from '../../../styles/ticker';

interface TickerProps {
  text: string;
}

export const Ticker: React.FC<TickerProps> = ({ text }) => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;

    const animation = gsap.fromTo(
      el,
      { xPercent: 0 },
      {
        xPercent: -100,
        duration: 20,
        ease: 'linear',
        repeat: -1,
      }
    );

    return () => {
      animation.kill();
    };
  }, [text]);

  return (
    <S.TickerWrapper>
      <S.TickerContent ref={tickerRef}>
        <span>{text}</span>
      </S.TickerContent>
    </S.TickerWrapper>
  );
};
