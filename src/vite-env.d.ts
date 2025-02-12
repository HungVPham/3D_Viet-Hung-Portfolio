/* eslint-disable @typescript-eslint/naming-convention */
interface ImportMetaEnv {
    readonly VITE_APP_EMAILJS_SERVICE_ID: string
    readonly VITE_APP_EMAILJS_TEMPLATE_ID: string
    readonly VITE_APP_EMAILJS_PUBLIC_KEY: string
    readonly VITE_SUPABASE_URL: string
    readonly VITE_SUPABASE_KEY: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
