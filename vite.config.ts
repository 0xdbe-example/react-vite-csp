import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ContentSecurityPolicyConfig, HttpHeaderCSP} from './plugin/vite-http-headers-csp'

const contentSecurityPolicyConfig: ContentSecurityPolicyConfig = {
  "default-src": ["'none'"],
  "frame-ancestors": ["'none'"],
  "form-action": ["'none'"],
  "connect-src":  [
    "'self'" // for ws://localhost:xxxx and http://localhost:xxxx/ 
  ],
  "img-src": [
    "'self'" // for http://localhost:xxxx/vite.svg
  ],
  "script-src": [
    "'self'",
    "'sha256-8ZgGo/nOlaDknQkDUYiedLuFRSGJwIz6LAzsOrNxhmU='" //@react-refresh (only for development environment)
  ],
  "style-src": [ "'self'", "'unsafe-inline'"]
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    HttpHeaderCSP(contentSecurityPolicyConfig)
  ],
})
