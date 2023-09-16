import { Label } from '@renderer/components/atoms/Label/Label'
import { FieldValues, useController } from 'react-hook-form'
import { IDatePickerProps } from './DatePicker.types'

import * as S from './DatePicker.style'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'

export const DatePicker = <T extends FieldValues>({ label, ...props }: IDatePickerProps<T>) => {
  const { field } = useController(props)

  const {
    palette: { primary }
  } = useTheme()

  return (
    <S.DatePickerWrapper>
      {label && <Label asPlaceholder={!field.value} label={label} />}
      <S.DatePickerButtonsWrapper>
        <Button
          variant={EButtonVariants.roundTransparent}
          onClick={() => {
            console.log('calendar')
          }}
          iconVariant={EIconVariants.CALENDAR}
          iconColor={primary}
          iconActiveColor={primary}
        />
        <Button
          variant={EButtonVariants.roundTransparent}
          onClick={() => {
            console.log('clock')
          }}
          iconVariant={EIconVariants.CLOCK}
          iconColor={primary}
          iconActiveColor={primary}
        />
      </S.DatePickerButtonsWrapper>

      <S.SDatePicker {...field} readOnly />
    </S.DatePickerWrapper>
  )
}
