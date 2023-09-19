import { css } from 'styled-components'

import RobotoRegular from '@renderer/assets/font/Roboto-Regular.ttf'
import RobotoItalic from '@renderer/assets/font/Roboto-Italic.ttf'
import RobotoBold from '@renderer/assets/font/Roboto-Bold.ttf'
import RobotoBoldItalic from '@renderer/assets/font/Roboto-BoldItalic.ttf'
import RobotoLight from '@renderer/assets/font/Roboto-Light.ttf'
import RobotoLightItalic from '@renderer/assets/font/Roboto-LightItalic.ttf'
import RobotoMedium from '@renderer/assets/font/Roboto-Medium.ttf'
import RobotoMediumItalic from '@renderer/assets/font/Roboto-MediumItalic.ttf'
import RobotoThin from '@renderer/assets/font/Roboto-Thin.ttf'
import RobotoThinItalic from '@renderer/assets/font/Roboto-ThinItalic.ttf'
import RobotoBlack from '@renderer/assets/font/Roboto-Black.ttf'
import RobotoBlackItalic from '@renderer/assets/font/Roboto-BlackItalic.ttf'

export const fontFaceCSS = css`
  /* Roboto Regular */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /* Roboto Italic */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  /* Roboto Bold */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  /* Roboto Bold Italic */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  /* Roboto Light */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  /* Roboto Light Italic */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  /* Roboto Medium */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  /* Roboto Medium Italic */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  /* Roboto Thin */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  /* Roboto Thin Italic */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThinItalic}) format('truetype');
    font-weight: 100;
    font-style: italic;
  }

  /* Roboto Black */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  /* Roboto Black Italic */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlackItalic}) format('truetype');
    font-weight: 900;
    font-style: italic;
  }
`
