import { MEDIA_CATEGORIES, type MediaCategory } from '../data/categories';
export type MediaItem = {id:string;src:string;type:'image';alt:string};
export type LoadedCategory = MediaCategory & {items:MediaItem[];cover?:string};
const shrimp:MediaItem={id:'shrimp-taco-ai',src:'/images/shrimp-taco-ai.webp',type:'image',alt:'Taco de camarón with shrimp, cheese, tomato, cilantro, and crema'};
const quesadilla:MediaItem={id:'quesadilla-ai',src:'/images/quesadilla-ai.webp',type:'image',alt:'Corn tortilla quesadilla with filling, grilled onions, and lime'};
const menu:MediaItem={id:'menu-clean-ai',src:'/images/menu-clean-ai.webp',type:'image',alt:'Don Jose Tacos menu artwork'};
export const UPLOADED_PHOTOS: MediaItem[] = [
  {
    "id": "tacos-with-crema",
    "src": "/images/tacos-with-crema.webp",
    "type": "image",
    "alt": "Tacos topped with tomato, cilantro, and crema, served with grilled onions and lime"
  },
  {
    "id": "meat-tacos-with-salsa",
    "src": "/images/meat-tacos-with-salsa.webp",
    "type": "image",
    "alt": "Meat tacos with onion and cilantro, served with salsa, grilled onion, a green chile, and lime"
  },
  {
    "id": "grilled-sandwich",
    "src": "/images/grilled-sandwich.webp",
    "type": "image",
    "alt": "Grilled sandwich with filling, served on checkered paper with lime wedges and salsa"
  },
  {
    "id": "bottled-mexican-cola",
    "src": "/images/bottled-mexican-cola.webp",
    "type": "image",
    "alt": "A glass bottle of Coca-Cola from Mexico"
  },
  {
    "id": "burrito-chips-salsa",
    "src": "/images/burrito-chips-salsa.webp",
    "type": "image",
    "alt": "Foil-wrapped burrito served with tortilla chips and salsa"
  }
];
export function loadCategory(category:MediaCategory):LoadedCategory{const items=category.slug==='menu'?[menu]:category.slug==='tacos'?[...UPLOADED_PHOTOS.slice(0,2),shrimp]:[...UPLOADED_PHOTOS,shrimp,quesadilla];return {...category,items,cover:items[0]?.src};}
export function loadAllCategories(){return MEDIA_CATEGORIES.map(loadCategory);}
export function countMedia(categories:LoadedCategory[]){return categories.reduce((total,category)=>total+category.items.length,0);}
