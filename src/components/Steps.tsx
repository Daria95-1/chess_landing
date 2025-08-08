import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import * as S from '../styles/steps'
import { stepsData } from '../shared/const/stepsData'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

export const Steps: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 870)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const customGroupedSteps = [
    stepsData.slice(0, 2),
    stepsData.slice(2, 3),
    stepsData.slice(3, 5),
    stepsData.slice(5, 6),
    stepsData.slice(6, 7),
  ]

  return (
    <S.Container>
      <S.TextDesktopContainer>
        <S.FirstTitle>Этапы преображения</S.FirstTitle>
        <S.TextContainer>
          <S.SecondTitle>Васюков</S.SecondTitle>
          <S.SubTitle>Будущие источники обогащения васюкинцев</S.SubTitle>
        </S.TextContainer>
      </S.TextDesktopContainer>

      <S.TextMobilContainer>
        <S.FirstTitle>Этапы преображения Васюков</S.FirstTitle>
        <S.TextContainer>
          <S.SubTitle>Будущие источники обогащения васюкинцев</S.SubTitle>
        </S.TextContainer>
      </S.TextMobilContainer>

      <S.BlockContainer>
        {!isMobile && (
          <>
            <S.Column>
              <S.Item>
                <S.Circle>1</S.Circle>
                <div>Строительство ж/д магистрали Москва-Васюки</div>
              </S.Item>
              <S.Item>
                <S.Circle>4</S.Circle>
                <div>Строительство дворца для турнира</div>
              </S.Item>
              <S.Item>
                <S.Circle>6</S.Circle>
                <div>
                  Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов
                </div>
              </S.Item>
            </S.Column>
            <S.Column>
              <S.Item>
                <S.Circle>2</S.Circle>
                <div>Открытие гостиницы «Проходная пешка» и других небоскрёбов</div>
              </S.Item>
              <S.Item>
                <S.Circle>5</S.Circle>
                <div>Размещение гаражей для гостевого автотранспорта</div>
              </S.Item>
              <S.ItemSpan2Cols>
                <S.Circle>7</S.Circle>
                <S.TextLimit>
                  Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов во все концы света
                </S.TextLimit>
              </S.ItemSpan2Cols>
            </S.Column>
            <S.Column>
              <S.ItemSpan2Rows>
                <S.Circle>3</S.Circle>
                <div>Поднятие сельского хозяйства: овощи, фрукты, икра, шоколадные конфеты</div>
              </S.ItemSpan2Rows>
            </S.Column>
          </>
        )}
      </S.BlockContainer>

      {isMobile && (
        <S.SwiperSlideWrapper>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {customGroupedSteps.map((group, index) => (
              <SwiperSlide key={index}>
                <S.SlideColumn>
                  {group.map((step) => {
                    const Comp =
                      step.type === 'span2rows'
                        ? S.ItemSpan2Rows
                        : step.type === 'span2cols'
                        ? S.ItemSpan2Cols
                        : S.Item

                    return (
                      <Comp key={step.number}>
                        <S.Circle>{step.number}</S.Circle>
                        <div>{step.value}</div>
                      </Comp>
                    )
                  })}
                </S.SlideColumn>
              </SwiperSlide>
            ))}
          </Swiper>

          <S.ArrowWrapper>
            <S.Arrow
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={activeIndex === 0}
              aria-label="Previous Slide"
            >
              <IconChevronLeft size={24} />
            </S.Arrow>

            <S.Pagination className="custom-swiper-pagination" />

            <S.Arrow
              onClick={() => swiperRef.current?.slideNext()}
              disabled={activeIndex === customGroupedSteps.length - 1}
              aria-label="Next Slide"
            >
              <IconChevronRight size={24} />
            </S.Arrow>
          </S.ArrowWrapper>
        </S.SwiperSlideWrapper>
      )}
    </S.Container>
  )
}
