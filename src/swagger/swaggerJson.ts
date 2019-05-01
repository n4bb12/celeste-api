import { readJson, writeJson } from "fs-extra"
import { Spec } from "swagger-schema-official"

export async function buildSwaggerJson() {
  const pkg = await readJson("./package.json")
  const swagger: Spec = await readJson("./src/swagger/swagger.json")

  swagger.info.version = pkg.version
  swagger.info.title = pkg.description

  await writeJson("./dist/public/swagger.json", swagger)
}
