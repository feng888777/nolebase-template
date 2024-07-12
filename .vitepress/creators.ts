export interface SocialEntry {
  type: 'QQ' | 'QQ' | 'email'
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

const getAvatarUrl = (name: string) => `https://th.bing.com/th/id/OIP.vYQVj8k3Q2zLNhLWNW2caQHaaa?rs=1&pid=ImgDetMain`

export const creators: Creator[] = [
  {
    name: '你猜',
    avatar: '',
    username: 'nekomeowww',
    title: '不需要的',
    desc: '看过来就好',
    links: [
      { type: 'github', icon: 'github', link: 'https://space.bilibili.com/475115156' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
    ],
    nameAliases: ['nekomeowww', '你猜', '是嘛', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['neko@ayaka.moe'],
  },
  {
    name: '絢香音',
    avatar: '',
    username: 'LittleSound',
    title: 'Nólëbase 原始创作者',
    desc: '开源开发者，专注于前端，以及前端相关工具库和工具链开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/LittleSound' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/OikawaRizumu' },
    ],
    nameAliases: ['LittleSound', '绚香音', '絢香音', 'Rizumu Oikawa', 'Rizumu Ayaka', 'Ayaka Rizumu', 'Rizumu'],
    emailAliases: ['rizumu@ayaka.moe', 'rizumu@oqo.moe'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
