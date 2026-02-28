import { defaultColors, TextStateFeature } from '@payloadcms/richtext-lexical'

type TextState = NonNullable<Parameters<typeof TextStateFeature>[0]>['state']

export const textState: TextState = {
  color: {
    //...defaultColors.text,
    dark: {
      label: 'Dark',
      css: {
        color: '#22232a',
      },
    },
        light: {
      label: 'Clair',
      css: {
        'color': '#f9f6f1',
      },
    },
    green: {
      label: 'Vert',
      css: {
        'color': '#52d1a4',
      },
    },
    pink: {
      label: 'Rose',
      css: {
        'color': '#dd2c6a',
      },
    },
  },
  background: {
    //...defaultColors.background,
    lightbkg: {
      label: 'Clair',
      css: {
        'background-color': '#f9f6f1',
      },
    },
    greenbkg: {
      label: 'Vert',
      css: {
        'background-color': '#52d1a4',
      },
    },
    pinkbkg: {
      label: 'Rose',
      css: {
        'background-color': '#dd2c6a',
      },
    },
  },
  size: {
    large: {
      label: 'Grand texte',
      css: {
        'font-size': 'larger',
      },
    },
    small: {
      label: 'Petit texte',
      css: {
        'font-size': 'smaller',
      },
    },
  },
}
