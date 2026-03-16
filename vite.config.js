import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        riskFreezeRates: resolve(__dirname, 'risk-freeze-rates.html'),
        invoicesNullState: resolve(__dirname, 'invoices-null-state.html'),
        automatticDesignSystem: resolve(__dirname, 'automattic-design-system.html'),
        wordpressDigitalIdentity: resolve(__dirname, 'wordpress-digital-identity.html'),
        wordpressSocialAds: resolve(__dirname, 'wordpress-social-ads.html'),
        contracts: resolve(__dirname, 'contracts.html'),
        servicesSellers: resolve(__dirname, 'services-sellers.html'),
      },
    },
  },
});
