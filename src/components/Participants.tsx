import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { chessChampions } from '../shared/const/chessChampions';
import * as S from '../styles/participants';
import SwiperClass from 'swiper';
import { CustomButton } from '../shared/ui/button/Button';
import { ArrowNavigation } from '../shared/ui/arrowNavigation/ArrowNavigation';

export const Participants = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const totalParticipants = chessChampions.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setItemsPerSlide(width <= 830 ? 1 : width <= 1200 ? 2 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  const totalSlides = Math.ceil(totalParticipants / itemsPerSlide);
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === totalSlides - 1;
  const shownParticipants = Math.min((activeIndex + 1) * itemsPerSlide, totalParticipants);

  return (
    <S.Container>
      <S.FirstBlock>
        <S.Title>Участники турнира</S.Title>
        <S.DesktopCounterNav>
          <S.CounterWrapper>
            <S.CounterNumber>{shownParticipants}</S.CounterNumber>
            <S.CounterTotal $isLast={isLast}>/{totalParticipants}</S.CounterTotal>
          </S.CounterWrapper>
          <ArrowNavigation
            onPrev={() => swiperInstance?.slidePrev()}
            onNext={() => swiperInstance?.slideNext()}
            disabledPrev={isFirst}
            disabledNext={isLast}
          />
        </S.DesktopCounterNav>
      </S.FirstBlock>

      <S.SwiperSlideWrapper>
        <Swiper
          modules={[Navigation]}
          slidesPerView={itemsPerSlide}
          spaceBetween={30}
          onSwiper={setSwiperInstance}
          onSlideChange={onSlideChange}
          navigation={false}
          loop={false}
          observer={true}
          observeParents={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            831: { slidesPerView: 2 },
            1201: { slidesPerView: 3 },
          }}
        >
          {chessChampions.map((chessman, idx) => (
            <SwiperSlide key={idx}>
              <S.Card>
                <S.CircleBackground>
                  <S.PlayerImage src={chessman.image} alt={chessman.name} />
                </S.CircleBackground>
                <S.Name>{chessman.name}</S.Name>
                <S.Role>{chessman.title}</S.Role>
                <CustomButton
                  width="113px !important"
                  height="35px"
                  bgColor="transparent"
                  textColor="var(--color-blue)"
                  borderColor="var(--color-blue)"
                  hoverBgColor="var(--color-blue)"
                  hoverTextColor="var(--color-white)"
                >
                  Подробнее
                </CustomButton>
              </S.Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <S.MobileCounterNav>
          <S.CounterWrapper>
            <S.CounterNumber>{shownParticipants}</S.CounterNumber>
            <S.CounterTotal $isLast={isLast}>/{totalParticipants}</S.CounterTotal>
          </S.CounterWrapper>
          <ArrowNavigation
            onPrev={() => swiperInstance?.slidePrev()}
            onNext={() => swiperInstance?.slideNext()}
            disabledPrev={isFirst}
            disabledNext={isLast}
          />
        </S.MobileCounterNav>
      </S.SwiperSlideWrapper>
    </S.Container>
  );
};
