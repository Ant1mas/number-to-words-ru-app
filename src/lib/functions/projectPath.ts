import nextConfig from 'next.config'

export default function projectPath(path: string) {
  const basePath = nextConfig.basePath ?? './'
  return basePath + path
}
