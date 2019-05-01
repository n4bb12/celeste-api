window.onload = function () {
  window.ui = SwaggerUIBundle({
    url: "swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: false,
    displayOperationId: false,
    defaultModelsExpandDepth: 1,
    defaultModelExpandDepth: 1,
    defaultModelRendering: "example",
    displayRequestDuration: true,
    docExpansion: "list",
    filter: false,
    showExtensions: false,
    showCommonExtensions: false,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  })
}
