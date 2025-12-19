import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = join(__dirname, '../components');
const distDir = join(__dirname, '../../dist');

function copyDirectory(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else if (entry.isFile() && /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(entry.name)) {
      copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
}

// 复制所有组件目录中的 assets 文件夹
function copyAssets() {
  const components = readdirSync(srcDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);

  for (const component of components) {
    const componentSrcDir = join(srcDir, component);
    const componentDistDir = join(distDir, component);
    const assetsSrcDir = join(componentSrcDir, 'assets');

    if (existsSync(assetsSrcDir) && statSync(assetsSrcDir).isDirectory()) {
      const assetsDistDir = join(componentDistDir, 'assets');
      copyDirectory(assetsSrcDir, assetsDistDir);
    }
  }
}

copyAssets();
console.log('Assets copied successfully!');

