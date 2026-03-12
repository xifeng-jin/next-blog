
import plugin from 'eslint-plugin-import';
import importPlugin from 'eslint-plugin-import';

export default {
    files: ["**/*.{ts,tsx}"],
    plugins: {
        import: importPlugin,
    },
    rules: {
        "import/order": [
            
        ]
    }
}
