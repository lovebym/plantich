import { sanityClient } from './sanity.client';
import { plantBySlug, remedyBySlug } from './queries';

export async function getPlantBySlug(slug:string){
  return sanityClient.fetch(plantBySlug, { slug });
}
export async function getRemedyBySlug(slug:string){
  return sanityClient.fetch(remedyBySlug, { slug });
}
