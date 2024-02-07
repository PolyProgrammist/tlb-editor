import { resolve } from 'path';
import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			plugins: inject({
				include: ['node_modules/@ledgerhq/**'],
				modules: { Buffer: ['buffer', 'Buffer'] },
			}),
		},
	},

	base: '/tlb-editor/',
});
