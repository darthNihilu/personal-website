import frfiBackgroundImage from 'assets/images/portfolio/frfiBackgroundImage.png'
import gravisBackgroundImage from 'assets/images/portfolio/gravisBackgroundImage.png'
import kotelovBackgroundImage from 'assets/images/portfolio/kotelovBackgroundImage.png'
import immersivePlayerBackgroundImage from 'assets/images/portfolio/imersivePlayerBackgroundImage.png'
import erpBackgroundImage from 'assets/images/portfolio/erpBackgroundImage.png'
import telegramBotsBackgroundImage from 'assets/images/portfolio/telegramBotsBackgroundImage.png'
import { LinkedInIcon } from 'assets/svg-icons/Icons/LinkedInIcon'
import React from 'react'
import { UpWorkIcon } from 'assets/svg-icons/Icons/UpWorkIcon'
import { TelegramIcon } from 'assets/svg-icons/Icons/TelegramIcon'
import { MailIcon } from 'assets/svg-icons/Icons/MailIcon'

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
    description: 'AI-powered yield farming',
    backgroundImage: frfiBackgroundImage,
    href: 'frfi'
  },
  {
    key: PORTFOLIO_KEYS.GRAVIS,
    title: 'Gravis Finance',
    description:
      'An ecosystem that unites DeFi platform, NFT marketplace, and Evervoid game',
    backgroundImage: gravisBackgroundImage,
    href: 'gravis'
  },
  {
    key: PORTFOLIO_KEYS.KOTELOV,
    title: 'Complex monitoring system',
    description:
      'Quick-access and editing system for monitoring and managing employee data',
    backgroundImage: kotelovBackgroundImage,
    href: 'kotelov'
  },
  {
    key: PORTFOLIO_KEYS.INTERACTIVE_PLAYER,
    title: 'Interactive Player',
    description: 'A video player for playing interactive movies',
    backgroundImage: immersivePlayerBackgroundImage,
    href: 'interactive-player'
  },
  {
    key: PORTFOLIO_KEYS.ERP,
    title: 'ERP',
    description: 'Enterprise resource planning (ERP) for organization',
    backgroundImage: erpBackgroundImage,
    href: 'erp'
  },
  {
    key: PORTFOLIO_KEYS.TELEGRAM_BOTS,
    title: 'Telegram bots',
    description: 'List of pet projects built on on Telegram API',
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
  width: number
  height: number
  top?: number
  left?: number
}

export const socialLinks: SocialLinkType[] = [
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
      'Took part in the redesign and development of the mechanisms of our own DEX. Developed solutions and made calculations for the accrual of user rewards. Created interfaces for the space game Evervoid using NFT. Optimized performance of received data from public RPC nodes, improving speed and reliability of information processing. Experienced in implementing cross-chain linking technology to simplify interactions between different blockchains. Developed an NFT marketplace involving gaming items as well as hosting NFT tokens of our partners. Reworked Farming from another exchange adding Autofarming mechanisms. Participated in the development of a steering system for in-game NFTs, providing additional motivation for long-term retention of assets. Integrated smart contracts to ensure transaction security and guarantee execution of transaction terms on the platform. Implemented an adaptive interface for the DEX exchange, taking into account the specifics of using different devices and screens to ensure user convenience and comfort. Developed modular architecture for the front-end, ensuring flexibility and scalability of implementing new features and components. Used modern frameworks and tools, such as React and Next.js, to create high-performance and responsive user interfaces that meet audience needs and market demands.',
    fromTo: 'Sep 2021 - Jul 2022'
  },
  {
    title: 'Middle Front-End Developer',
    company: 'Kotelov',
    site: 'https://kotelov.com',
    description:
      "As part of the project to implement an employee monitoring tool for the construction company Brusnika, a unique resource management and task control system was created. The system allowed to categorize expenses by items, optimize payroll allocation, and control budget execution. For the convenience of employees, a personal office was developed with integration of login through a Google account and Google Calendar connection for easy tracking of colleagues' birthdays and planning corporate events. In addition to work schedule, company news was available in the employee's office, providing prompt information about important events and changes within the organization. Such a system made it possible to increase work efficiency, simplify communication between employees and improve control over the company's expenses and budget.",
    fromTo: 'Aug 2021 - Sep 2021'
  },
  {
    title: 'Junior Front-End Developer',
    company: 'Sixhands',
    site: 'https://sixhands.co',
    description:
      "While working for this company, I participated in the development of such a project as an ERP system, which included primarily a Kanban task board that was divided into different Workspaces that each user could create to distribute tasks to specific projects. For the tasks themselves, it was possible to assign an executor and a verifier, add comments, photos or videos, set a priority and category, and set a deadline. There was also a user page which displayed a list of all the tasks that had been set for it, this page had filtering by all possible fields on the task with the filters being saved when the page was reloaded. There was a section with the user's daily reports, where each employee had to mark what he did for the day and on which project. There was a Leads section where advertisements from various freelance exchanges were delivered. It was possible to generate estimates and communicate with the customer through a single interface, also assigning managers to the taken projects. There were also sections with users, where it was possible to change all the data of a single user and a section with the Knowledge Base of the company, where the most important articles were located. I was also involved in a project at this company to develop a video player for interactive cinema. This player implemented seamless switching between different videos, voice recording and processing functionality via Speech-to-text and subsequent selection of the necessary track depending on the user's response. A video editor was also developed to edit the behavior of the interactive movie, where you could arrange the branches of viewing behavior.",
    fromTo: 'Sep 2020 - Aug 2021'
  }
]
