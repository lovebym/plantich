export const plantQueries = {
  all: `*[_type == "plant"] {
    _id,
    name,
    latinName,
    description,
    swedishDescription,
    uses,
    swedishUses,
    conditions[]->{
      _id,
      name,
      description,
      swedishDescription
    },
    affiliateLink,
    slug
  }`,
  
  bySlug: `*[_type == "plant" && slug.current == $slug][0] {
    _id,
    name,
    latinName,
    description,
    swedishDescription,
    uses,
    swedishUses,
    conditions[]->{
      _id,
      name,
      description,
      swedishDescription
    },
    affiliateLink,
    slug
  }`
}

export const conditionQueries = {
  all: `*[_type == "condition"] {
    _id,
    name,
    description,
    swedishDescription,
    slug
  }`,
  
  bySlug: `*[_type == "condition" && slug.current == $slug][0] {
    _id,
    name,
    description,
    swedishDescription,
    slug
  }`
}
