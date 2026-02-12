import plugin from 'tailwindcss/plugin'
import { PluginAPI } from 'tailwindcss/types/config'

type Animation = {
  [index: string]: {
    [value: string]: string
  }
}

type AnimationElement = [string, string]

module.exports = plugin(({ addComponents, theme }: PluginAPI): void => {
    let anim: Animation = {
      '.anim': {
        transitionProperty: 'transform, opacity, visibility',
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease',
      },
    }
    Object.entries(theme('anim')).map(([key, value]: AnimationElement): void => {
      anim = {
        ...anim,
        [`.anim-${key}:not([data-anim="show"])`]: {
          transform: `${value}`,
          visibility: 'hidden',
          opacity: '0',
        },
      }
    })
    addComponents(anim)
  },
  {
    theme: {
      anim: {
        fade: 'none',
        increase: 'scale(0)',
        decrease: 'scale(1.3)',
        circle: 'rotate(1turn)',
        up: 'translateY(3.5rem)',
        down: 'translateY(-3.5rem)',
        left: 'translateX(3.5rem)',
        right: 'translateX(-3.5rem)',
      },
    },
  }
)
export default class animation {
}