import { defaultColors, TextStateFeature } from '@payloadcms/richtext-lexical'

type TextState = NonNullable<Parameters<typeof TextStateFeature>[0]>['state']

export const textState: TextState = {
  color: {
    ...defaultColors.text,
    black: {
      label: 'Black',
      css: {
        color: '#000000',
      },
    },
  },
  background: {
    ...defaultColors.background,
    greenmw: {
      label: 'Green - MW',
      css: {
        'background-color': '#00ECAE',
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
    }
  },
}
