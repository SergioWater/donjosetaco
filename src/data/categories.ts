export const SITE_NAME = 'Don Jose Tacos';
export type MediaKind = 'image';
export type MediaCategory = {slug:string;title:string;description:string;folder:string;kind:MediaKind};
export const MEDIA_CATEGORIES: MediaCategory[] = [
 {slug:'menu',title:'Menu',description:'Explore our tacos, burritos, quesadillas, mulitas, specials, and drinks.',folder:'menu',kind:'image'},
 {slug:'food-and-drinks',title:'Food & drinks',description:'A closer look at the food from our truck.',folder:'food-and-drinks',kind:'image'},
 {slug:'tacos',title:'Tacos',description:'Meet our signature tacos de camarón — shrimp tacos.',folder:'tacos',kind:'image'}
];
export function getCategory(slug:string){return MEDIA_CATEGORIES.find(category=>category.slug===slug);}
