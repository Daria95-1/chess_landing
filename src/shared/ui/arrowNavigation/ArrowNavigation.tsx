import type { ArrowNavigationProps } from '../../const/interfaces';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import * as S from '../../../styles/arrowNavigation';

export const ArrowNavigation = ({
  onPrev,
  onNext,
  disabledPrev,
  disabledNext,
  showPagination = null,
}: ArrowNavigationProps) => {
  return (
    <S.ArrowWrapper>
      <S.ArrowButton
        onClick={onPrev}
        disabled={disabledPrev}
        aria-label="Previous Slide"
      >
        <IconChevronLeft size={24} />
      </S.ArrowButton>

      {showPagination}

      <S.ArrowButton
        onClick={onNext}
        disabled={disabledNext}
        aria-label="Next Slide"
      >
        <IconChevronRight size={24} />
      </S.ArrowButton>
    </S.ArrowWrapper>
  );
};
