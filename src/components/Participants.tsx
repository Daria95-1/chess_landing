import { useState, useRef, useEffect } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { chessChampions } from '../shared/const/chessChampions';
import * as S from '../styles/participants';
import SwiperClass from 'swiper';
import { CustomButton } from '../shared/ui/button/Button';

export const Participants = () => {
  const itemsPerSlide = 3;
  const totalParticipants = chessChampions.length;
  const totalSlides = Math.ceil(totalParticipants / itemsPerSlide);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      typeof swiperInstance.params.navigation === 'object' &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const onSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === totalSlides - 1;
  const shownParticipants = Math.min((activeIndex + 1) * itemsPerSlide, totalParticipants);

  return (
    <S.Container>
      <S.FirstBlock>
        <S.Title>Участники турнира</S.Title>
        <S.CounterNav>
          <S.CounterWrapper>
            <S.CounterNumber>{shownParticipants}</S.CounterNumber>
            <S.CounterTotal $isLast={isLast}>/{totalParticipants}</S.CounterTotal>
          </S.CounterWrapper>
          <S.ArrowWrapper>
            <S.Arrow ref={prevRef} disabled={isFirst} aria-label="Предыдущий слайд">
              <IconChevronLeft size={24} />
            </S.Arrow>
            <S.Arrow ref={nextRef} disabled={isLast} aria-label="Следующий слайд">
              <IconChevronRight size={24} />
            </S.Arrow>
          </S.ArrowWrapper>
        </S.CounterNav>
      </S.FirstBlock>

      <S.SwiperSlideWrapper>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          onSwiper={setSwiperInstance}
          onSlideChange={onSlideChange}
          navigation={false}
          loop={false}
          observer={true}
          observeParents={true}
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
                  width="113px"
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
      </S.SwiperSlideWrapper>
    </S.Container>
  );
};
