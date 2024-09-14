
export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '',
    avatar: '',
    username: '',
    title: ' ',
    desc: '',
    links: [
      { type: 'github', icon: 'github', link: '' },
      { type: 'twitter', icon: 'twitter', link: '' },
    ],
    nameAliases: ['nekomeowww', '', '', ' ', ' '],
    emailAliases: [''],
  },
  {
    name: '',
    avatar: '',
    username: '',
    title: '',
    desc: '',
    links: [
      { type: 'github', icon: 'github', link: '' },
      { type: 'twitter', icon: 'twitter', link: '' },
    ],
    nameAliases: ['LittleSound', '', '', ' ', ' ', ' ', ''],
    emailAliases: ['', ''],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
