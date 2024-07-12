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

const getAvatarUrl = (name: string) => `图片链接`

export const creators: Creator[] = [
  {
    name: '你猜',
    avatar: '',
    username: 'nekomeowww',
    title: '不需要的',
    desc: '看过来就好',
    links: [
      { type: 'QQ', icon: 'github', link: 'https://space.bilibili.com/475115156' },
      { type: '微信', icon: 'twitter', link: '链接地址' },
    ],
    nameAliases: ['nekomeowww', '你猜', '是嘛', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['neko@ayaka.moe'],
  },

].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
