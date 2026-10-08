import sharp from 'sharp';
import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
for (const name of ['shrimp-taco-ai','quesadilla-ai','menu-clean-ai']) {
 const source = new URL('../public/images/' + name + '.png', import.meta.url);
 const output = new URL('../public/images/' + name + '.webp', import.meta.url);
 await sharp(fileURLToPath(source)).webp({quality:85}).toFile(fileURLToPath(output));
 console.log(name, (await stat(source)).size, '→', (await stat(output)).size, 'bytes');
}
