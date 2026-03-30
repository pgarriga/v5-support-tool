import sharp from 'sharp'
import { readFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const svg = readFileSync(resolve(root, 'public/favicon.svg'))

mkdirSync(resolve(root, 'public'), { recursive: true })

const sizes = [
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'pwa-192.png',          size: 192 },
  { file: 'pwa-512.png',          size: 512 },
]

for (const { file, size } of sizes) {
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(resolve(root, 'public', file))
  console.log(`✓ ${file} (${size}×${size})`)
}
