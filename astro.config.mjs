import { defineConfig, sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://next.tonysull.co',
    experimental: {
        assets: true
    },
    image: {
        service: sharpImageService()
    }
});
