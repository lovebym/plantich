export const plantQueries = {
  // Get all plants
  getAll: `*[_type == "plant"] | order(name asc) {
    _id,
    name,
    latinName,
    slug,
    description,
    "imageUrl": image.asset->url,
    category,
    uses,
    "conditionCount": count(conditions)
  }`,

  // Get single plant by slug
  getBySlug: `*[_type == "plant" && slug.current == $slug][0] {
    _id,
    name,
    latinName,
    slug,
    description,
    "imageUrl": image.asset->url,
    category,
    uses,
    researchLinks,
    affiliateLink,
    conditions[]-> {
      _id,
      name,
      slug,
      description
    }
  }`,

  // Search plants
  search: `*[_type == "plant" && (
    name match $searchTerm + "*" ||
    latinName match $searchTerm + "*" ||
    description match "*" + $searchTerm + "*"
  )] | order(name asc) {
    _id,
    name,
    latinName,
    slug,
    description,
    "imageUrl": image.asset->url,
    category,
    uses
  }`,

  // Get plants by category
  getByCategory: `*[_type == "plant" && category == $category] | order(name asc) {
    _id,
    name,
    latinName,
    slug,
    description,
    "imageUrl": image.asset->url,
    category,
    uses
  }`
}

export const conditionQueries = {
  // Get all conditions
  getAll: `*[_type == "condition"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    category,
    "plantCount": count(relatedPlants)
  }`,

  // Get single condition by slug
  getBySlug: `*[_type == "condition" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    category,
    relatedPlants[]-> {
      _id,
      name,
      latinName,
      slug,
      description,
      "imageUrl": image.asset->url,
      uses
    }
  }`,

  // Search conditions
  search: `*[_type == "condition" && (
    name match $searchTerm + "*" ||
    description match "*" + $searchTerm + "*"
  )] | order(name asc) {
    _id,
    name,
    slug,
    description,
    category,
    "plantCount": count(relatedPlants)
  }`,

  // Get conditions by category
  getByCategory: `*[_type == "condition" && category == $category] | order(name asc) {
    _id,
    name,
    slug,
    description,
    category,
    "plantCount": count(relatedPlants)
  }`
}

// Combined search for both plants and conditions
export const searchQuery = `
  {
    "plants": ${plantQueries.search},
    "conditions": ${conditionQueries.search}
  }
`
