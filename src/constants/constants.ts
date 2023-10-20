import frfiBackgroundImage from 'assets/images/portfolio/frfiBackgroundImage.webp'
import gravisBackgroundImage from 'assets/images/portfolio/gravisBackgroundImage.webp'
import kotelovBackgroundImage from 'assets/images/portfolio/kotelovBackgroundImage.webp'
import immersivePlayerBackgroundImage from 'assets/images/portfolio/imersivePlayerBackgroundImage.webp'
import erpBackgroundImage from 'assets/images/portfolio/erpBackgroundImage.webp'
import telegramBotsBackgroundImage from 'assets/images/portfolio/telegramBotsBackgroundImage.webp'
import { LinkedInIcon } from 'assets/svg-icons/Icons/LinkedInIcon'
import React from 'react'
import { UpWorkIcon } from 'assets/svg-icons/Icons/UpWorkIcon'
import { TelegramIcon } from 'assets/svg-icons/Icons/TelegramIcon'
import { MailIcon } from 'assets/svg-icons/Icons/MailIcon'
import { GithubIcon } from 'assets/svg-icons/Icons/GithubIcon'

export type PortfolioItemType = {
  title: string
  backgroundImage: string
  href: string
  key: string
  disabled?: boolean
}

export enum PORTFOLIO_KEYS {
  FRFI = 'frfi',
  GRAVIS = 'gravis',
  KOTELOV = 'kotelov',
  INTERACTIVE_PLAYER = 'interactivePlayer',
  ERP = 'erp',
  TELEGRAM_BOTS = 'telegramBots',
}

export const portfolioItems: PortfolioItemType[] = [{
    key: PORTFOLIO_KEYS.FRFI,
    title: 'FairFi',
    backgroundImage: frfiBackgroundImage,
    href: 'frfi'
  },
  {
    key: PORTFOLIO_KEYS.GRAVIS,
    title: 'Gravis Finance',
    backgroundImage: gravisBackgroundImage,
    href: 'gravis'
  },
  {
    key: PORTFOLIO_KEYS.KOTELOV,
    title: 'Complex monitoring system',
    backgroundImage: kotelovBackgroundImage,
    href: 'kotelov',
    disabled: true
  },
  {
    key: PORTFOLIO_KEYS.INTERACTIVE_PLAYER,
    title: 'Interactive Player',
    backgroundImage: immersivePlayerBackgroundImage,
    href: 'interactive-player',
    disabled: true
  },
  {
    key: PORTFOLIO_KEYS.ERP,
    title: 'ERP',
    backgroundImage: erpBackgroundImage,
    href: 'erp'
  },
  {
    key: PORTFOLIO_KEYS.TELEGRAM_BOTS,
    title: 'Telegram bots',
    backgroundImage: telegramBotsBackgroundImage,
    href: 'telegram-bots',
    disabled: true
  }
]

export const portfolioItemsByKey = portfolioItems.reduce((acc, curr) => {
  acc[curr.key as PORTFOLIO_KEYS] = curr
  return acc
}, {} as { [key in PORTFOLIO_KEYS]: PortfolioItemType })

export type SocialLinkType = {
  name: string
  href: string
  icon: React.FC
  width: number
  height: number
  top?: number
  left?: number
}

export const socialLinks: SocialLinkType[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/darthNihilu',
    icon: GithubIcon,
    width: 16,
    height: 16
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrei-zotov-b162511b8/',
    icon: LinkedInIcon,
    width: 14,
    height: 14
  },
  {
    name: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01d4412668bcfccf42',
    icon: UpWorkIcon,
    width: 18,
    height: 18,
    top: 1
  },
  {
    name: 'Telegram',
    href: 'https://t.me/adronim',
    icon: TelegramIcon,
    width: 16,
    height: 16,
    left: -1
  },
  {
    name: 'E-mail',
    href: 'mailto:zotovprog@gmail.com',
    icon: MailIcon,
    width: 14,
    height: 14
  }
]

export type WorkHistoryItemType = {
  title: string
  company: string
  site: string
  description: string
  fromTo: string
}

export const workHistoryItems: WorkHistoryItemType[] = [
  {
    title: 'Middle Front-End Developer',
    company: 'SPIKS',
    site: 'https://spiks.ru',
    description: 'spiks',
    fromTo: 'May 2023 - Now'
  },
  {
    title: 'Middle Front-End Developer',
    company: 'FairFi',
    site: 'https://frfi.io',
    description: 'frfi',
    fromTo: 'Jul 2022 - April 2023'
  },
  {
    title: 'Middle Front-End Developer',
    company: 'Gravis Finance',
    site: 'https://gravis.finance',
    description: 'gravis',
    fromTo: 'Sep 2021 - Jul 2022'
  },
  {
    title: 'Middle Front-End Developer',
    company: 'Kotelov',
    site: 'https://kotelov.com',
    description: 'kotelov',
    fromTo: 'Aug 2021 - Sep 2021'
  },
  {
    title: 'Junior Front-End Developer',
    company: 'Sixhands',
    site: 'https://sixhands.co',
    description: 'sixhands',
    fromTo: 'Sep 2020 - Aug 2021'
  }
]
