import frfiBackgroundImage from 'assets/images/portfolio/frfiBackgroundImage.png'
import gravisBackgroundImage from 'assets/images/portfolio/gravisBackgroundImage.png'
import kotelovBackgroundImage from 'assets/images/portfolio/kotelovBackgroundImage.png'
import immersivePlayerBackgroundImage from 'assets/images/portfolio/imersivePlayerBackgroundImage.png'
import erpBackgroundImage from 'assets/images/portfolio/erpBackgroundImage.png'
import telegramBotsBackgroundImage from 'assets/images/portfolio/telegramBotsBackgroundImage.png'
import { LinkedInIcon } from 'assets/svg-icons/Icons/LinkedInIcon'
import React, { ReactNode } from 'react'
import { UpWorkIcon } from 'assets/svg-icons/Icons/UpWorkIcon'

export type PortfolioItemType = {
  title: string
  description: string
  backgroundImage: string
  href: string
  key: string
}

export enum PORTFOLIO_KEYS {
  FRFI = 'frfi',
  GRAVIS = 'gravis',
  KOTELOV = 'kotelov',
  INTERACTIVE_PLAYER = 'interactivePlayer',
  ERP = 'erp',
  TELEGRAM_BOTS = 'telegramBots'
}

export const portfolioItems: PortfolioItemType[] = [
  {
    key: PORTFOLIO_KEYS.FRFI,
    title: 'FairFi',
    description: 'Frfi project',
    backgroundImage: frfiBackgroundImage,
    href: 'frfi'
  },
  {
    key: PORTFOLIO_KEYS.GRAVIS,
    title: 'Gravis',
    description: 'Gravis project',
    backgroundImage: gravisBackgroundImage,
    href: 'gravis'
  },
  {
    key: PORTFOLIO_KEYS.KOTELOV,
    title: 'Kotelov',
    description: 'Kotelov project',
    backgroundImage: kotelovBackgroundImage,
    href: 'kotelov'
  },
  {
    key: PORTFOLIO_KEYS.INTERACTIVE_PLAYER,
    title: 'Interactive Player',
    description: 'Interactive Player project',
    backgroundImage: immersivePlayerBackgroundImage,
    href: 'interactive-player'
  },
  {
    key: PORTFOLIO_KEYS.ERP,
    title: 'ERP',
    description: 'ERP project',
    backgroundImage: erpBackgroundImage,
    href: 'erp'
  },
  {
    key: PORTFOLIO_KEYS.TELEGRAM_BOTS,
    title: 'Telegram bots',
    description: 'Telegram bots project',
    backgroundImage: telegramBotsBackgroundImage,
    href: 'telegram-bots'
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
}

export const socialLinks: SocialLinkType[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrei-zotov-b162511b8/',
    icon: LinkedInIcon
  },
  {
    name: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01d4412668bcfccf42',
    icon: UpWorkIcon
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
    company: 'FairFi',
    site: 'https://frfi.io',
    description:
      "Took part in the finalization of smart contracts based on the mechanism of auto-investment (autofarming) of user funds through a standard farming from different dexes. Created the system of creating conditions for Safe Farming mechanism, which provides withdrawal or deposit of user's funds depending on the price of one or another token and suggests the possibility of splitting the deposited LP token into two different ones. Also participated in creating a list of tokens with the ability to view the history of price changes and the implementation of AI token price prediction. Developed a system where user token balances were taken from different chains. Developed systems for approves and signatures to deposit any available user token into the desired pool, as well as calculating the price impact for the selected token.",
    fromTo: 'Jul 2022 - April 2022'
  },
  {
    title: 'Middle Front-End Developer',
    company: 'Gravis Finance',
    site: 'https://gravis.finance',
    description:
      "Took part in the finalization of smart contracts based on the mechanism of auto-investment (autofarming) of user funds through a standard farming from different dexes. Created the system of creating conditions for Safe Farming mechanism, which provides withdrawal or deposit of user's funds depending on the price of one or another token and suggests the possibility of splitting the deposited LP token into two different ones. Also participated in creating a list of tokens with the ability to view the history of price changes and the implementation of AI token price prediction. Developed a system where user token balances were taken from different chains. Developed systems for approves and signatures to deposit any available user token into the desired pool, as well as calculating the price impact for the selected token.",
    fromTo: 'Sep 2021 - Jul 2022'
  },
  {
    title: 'Middle Front-End Developer',
    company: 'Kotelov',
    site: 'https://kotelov.com',
    description:
      "Took part in the finalization of smart contracts based on the mechanism of auto-investment (autofarming) of user funds through a standard farming from different dexes. Created the system of creating conditions for Safe Farming mechanism, which provides withdrawal or deposit of user's funds depending on the price of one or another token and suggests the possibility of splitting the deposited LP token into two different ones. Also participated in creating a list of tokens with the ability to view the history of price changes and the implementation of AI token price prediction. Developed a system where user token balances were taken from different chains. Developed systems for approves and signatures to deposit any available user token into the desired pool, as well as calculating the price impact for the selected token.",
    fromTo: 'Aug 2021 - Sep 2021'
  },
  {
    title: 'Junior Front-End Developer',
    company: 'Sixhands',
    site: 'https://sixhands.co',
    description:
      "Took part in the finalization of smart contracts based on the mechanism of auto-investment (autofarming) of user funds through a standard farming from different dexes. Created the system of creating conditions for Safe Farming mechanism, which provides withdrawal or deposit of user's funds depending on the price of one or another token and suggests the possibility of splitting the deposited LP token into two different ones. Also participated in creating a list of tokens with the ability to view the history of price changes and the implementation of AI token price prediction. Developed a system where user token balances were taken from different chains. Developed systems for approves and signatures to deposit any available user token into the desired pool, as well as calculating the price impact for the selected token.",
    fromTo: 'Sep 2020 - Aug 2021'
  }
]
