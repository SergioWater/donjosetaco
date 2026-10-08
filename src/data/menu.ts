export const PHONE = '+16693016355';
export const PHONE_LABEL = '(669) 301-6355';
export const MAPS_URL = 'https://www.google.com/maps?cid=18161075907930803973';
export const STREET_ADDRESS = '3365 Keaton Loop';
export const FULL_ADDRESS = STREET_ADDRESS + ', San Jose, CA';
export const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(FULL_ADDRESS);
export const MAP_EMBED_URL = 'https://maps.google.com/maps?q=' + encodeURIComponent(FULL_ADDRESS) + '&z=16&output=embed';
export const BUSINESS_HOURS = [
 {label:'Sunday',display:'9 AM – 7 PM',days:['Sunday'],opens:'09:00',closes:'19:00'},
 {label:'Monday',display:'9 AM – 4 PM',days:['Monday'],opens:'09:00',closes:'16:00'},
 {label:'Tuesday – Saturday',display:'9 AM – 9 PM',days:['Tuesday','Wednesday','Thursday','Friday','Saturday'],opens:'09:00',closes:'21:00'},
];
export type Filling = { name: string; translation: string };
export const MEAT_OPTIONS: Filling[] = [
 {name:'Asada',translation:'Grilled beef'},
 {name:'Pastor',translation:'Marinated pork'},
 {name:'Lengua',translation:'Beef tongue'},
 {name:'Cabeza',translation:'Beef head'},
 {name:'Chorizo',translation:'Mexican sausage'},
 {name:'Tripa',translation:'Beef tripe'},
];
export const SHRIMP_FILLING: Filling = {name:'Camarón',translation:'Shrimp'};
export const VEGETARIAN_FILLING: Filling = {name:'Vegetariana',translation:'Vegetarian'};
export const STANDARD_FILLINGS = [...MEAT_OPTIONS, VEGETARIAN_FILLING];
export const CORN_QUESADILLA_FILLINGS: Filling[] = [
 {name:'Flor de calabaza',translation:'Squash blossom'},
 {name:'Huitlacoche',translation:'Corn truffle'},
 {name:'Chicharrón prensado',translation:'Pressed pork rind'},
];
export type MenuItem = {name:string;translation:string;description:string;featured?:boolean;fillings?:Filling[]};
export type MenuSection = {id:string;title:string;subtitle:string;items:MenuItem[]};
export const MENU_SECTIONS: MenuSection[] = [
 {id:'tacos',title:'Tacos',subtitle:'The reason you came.',items:[
  {name:'Tacos de Camarón',translation:'Shrimp tacos',description:'Our signature: shrimp, a golden tortilla, melted cheese, tomato, onion, cilantro, and crema.',featured:true,fillings:[SHRIMP_FILLING]},
  {name:'Tacos',translation:'Choose your favorite filling',description:'Pick your meat or vegetarian option below.',fillings:STANDARD_FILLINGS}
 ]},
 {id:'burritos',title:'Burritos',subtitle:'A little more of everything.',items:[
  {name:'Burrito',translation:'The classic',description:'Your choice of meat or vegetarian filling.',fillings:STANDARD_FILLINGS},
  {name:'Burrito Super',translation:'Go super',description:'Your choice of filling, plus avocado and sour cream.',fillings:STANDARD_FILLINGS}
 ]},
 {id:'quesadillas',title:'Quesadillas & Mulitas',subtitle:'Straight from the plancha.',items:[
  {name:'Quesadilla de Camarón',translation:'Shrimp quesadilla',description:'For shrimp lovers who want a quesadilla.',fillings:[SHRIMP_FILLING]},
  {name:'Quesadilla de Harina',translation:'Flour tortilla quesadilla',description:'Choose your meat or vegetarian filling.',fillings:STANDARD_FILLINGS},
  {name:'Quesadilla de Maíz',translation:'Corn tortilla quesadilla',description:'Choose from these specialty fillings.',fillings:CORN_QUESADILLA_FILLINGS},
  {name:'Mulitas',translation:'Your choice of filling',description:'Choose your meat or vegetarian filling.',fillings:STANDARD_FILLINGS}
 ]},
 {id:'specials',title:'Specials',subtitle:'Ask what’s cooking today.',items:[
  {name:'Barbacoa',translation:'Weekend favorite',description:'Featured on our weekend menu. Call to confirm availability.'},
  {name:'Platillos',translation:'Plates',description:'Ask about today’s available plates.'},
  {name:'Consomé',translation:'Broth',description:'Call to check today’s availability.'}
 ]},
 {id:'drinks',title:'Drinks',subtitle:'Something cold on the side.',items:[
  {name:'Sodas Mexicanas',translation:'Mexican sodas',description:'Ask about the flavors available today.'},
  {name:'Sodas de Lata',translation:'Canned sodas',description:'Add a cold soda to your order.'}
 ]}
];
