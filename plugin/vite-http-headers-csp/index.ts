
import { ViteDevServer } from 'vite'

export interface ContentSecurityPolicyConfig {
  "default-src"?: string[]
  "frame-ancestors"?: string[]
  "form-action"?: string[]
  "connect-src"?: string[]
  "img-src"?: string[]
  "script-src"?: string[]
  "style-src"?: string[]
}

export function HttpHeaderCSP(contentSecurityPolicyConfig: ContentSecurityPolicyConfig){
  return {
    name: 'http-header-csp',
    configureServer: (server: ViteDevServer) => {
      const value = Object.entries(contentSecurityPolicyConfig)
        .map(([key, value]) => `${key} ${value.join(' ')}`)
        .join("; ");
      server.middlewares.use((_req, res, next) => {
        res.setHeader('content-security-policy', value);
        next();
      });
    }
  }
}