# Instructions for this Template of Swagger

## File swagger.js

You don't need change anything in this file.

You can see the end-point

```http
  GET /api-doc
```
Used in the API, and can check the route when the server is on.

## File swagger.yaml

In this file you can change the Title and Description on the swagger ui page, the version or append other URLs in the "servers" section.

```yaml
openapi: 3.0.1
info:
  title: Here you need change the Title
  description: Here you need change the Description
  version: 1.0.0
servers:
- url: http://localhost:4000
  description: Local test URL
```

You can add more Schemas you want with this example:

```yaml
components: 
  schemas:
    templateSchema:
      type: object
      properties:
        text:
          type: String
          description: example to property in schema
      example:
        text: I'm a test
```

You can add your end-points for swagger documentation and referal your schemas in this format:

```yaml
paths:
  "/":
    get:
      description: Template Get
      tags:
      - Template Requets
      responses:
        '200':
          description: Template Get Result
          content:
            application/json; charset=utf-8:
              schema:
                type: array
                items:
                  "$ref": "#/components/schemas/templateSchema"
```

>If you need see the official doc for swagger:

[Documentation](https://swagger.io/specification/)
