import { NextResponse } from 'next/server'

export async function GET() {
  const openapi = {
    openapi: "3.0.0",
    info: {
      title: "Plantich LLM API",
      description: "Nordic herbal medicine data for AI agents",
      version: "1.0.0",
      contact: {
        name: "Plantich",
        url: "https://plantich.com",
        email: "hello@plantich.com"
      },
      license: {
        name: "CC BY 4.0",
        url: "https://creativecommons.org/licenses/by/4.0/"
      }
    },
    servers: [
      {
        url: "https://plantich.com/api/llm",
        description: "Production server"
      }
    ],
    paths: {
      "/plants": {
        get: {
          summary: "Get all plants",
          description: "Returns a list of all herbal plants with basic information",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      license: { type: "string" },
                      lastUpdated: { type: "string", format: "date-time" },
                      total: { type: "integer" },
                      items: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            slug: { type: "string" },
                            name: { type: "string" },
                            latinName: { type: "string" },
                            description: { type: "string" },
                            uses: { type: "array", items: { type: "string" } },
                            dosage: { type: "string" },
                            url: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/remedies": {
        get: {
          summary: "Get all remedies",
          description: "Returns a list of all health conditions and their herbal remedies",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      license: { type: "string" },
                      lastUpdated: { type: "string", format: "date-time" },
                      total: { type: "integer" },
                      items: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            slug: { type: "string" },
                            name: { type: "string" },
                            description: { type: "string" },
                            symptoms: { type: "array", items: { type: "string" } },
                            plants: { type: "array", items: { type: "string" } },
                            approach: { type: "string" },
                            url: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/doc/{slug}": {
        get: {
          summary: "Get document by slug",
          description: "Returns detailed information about a specific plant or remedy",
          parameters: [
            {
              name: "slug",
              in: "path",
              required: true,
              schema: { type: "string" },
              description: "The slug of the plant or remedy"
            }
          ],
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      license: { type: "string" },
                      lastUpdated: { type: "string", format: "date-time" },
                      slug: { type: "string" },
                      type: { type: "string", enum: ["plant", "remedy"] },
                      data: { type: "object" },
                      sourceUrl: { type: "string" }
                    }
                  }
                }
              }
            },
            "404": {
              description: "Document not found"
            }
          }
        }
      },
      "/changes": {
        get: {
          summary: "Get recent changes",
          description: "Returns a list of recently updated plants and remedies",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      license: { type: "string" },
                      lastUpdated: { type: "string", format: "date-time" },
                      total: { type: "integer" },
                      items: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            type: { type: "string", enum: ["plant", "remedy"] },
                            slug: { type: "string" },
                            title: { type: "string" },
                            lastUpdated: { type: "string", format: "date-time" },
                            url: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return NextResponse.json(openapi, {
    headers: {
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}
