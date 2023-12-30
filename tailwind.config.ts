import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem'
      }
    },
    screens: {
      xss: '420px',
      xs: '520px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1436px'
    }
  },
  darkMode: 'class',
  plugins: [
    typography,
    nextui({
      themes: {
        dark: {
          colors: {
            default: {
              50: '#141414',
              100: '#18181b',
              200: '#27272a'
            }
          }
        }
      },
      layout: {
        radius: {
          small: '6px',
          medium: '8px',
          large: '12px'
        }
      }
    })
  ]
}
export default config
