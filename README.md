# TypeScript Project with Functional Programming

A TypeScript project template with Node.js, Jest, and functional programming libraries (fp-ts).

## Prerequisites / ข้อกำหนดเบื้องต้น

### System Requirements / ข้อกำหนดของระบบ
- Node.js v18.x or later
- npm v9.x or later
- Visual Studio Code (Latest version)

### Verify Installation / ตรวจสอบการติดตั้ง
```bash
# Check Node.js version
node --version  # Should be v18.x or later

# Check npm version
npm --version   # Should be v9.x or later
```

## Installation / การติดตั้ง

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts / สคริปต์ที่ใช้งานได้

- `npm run dev` - Start development server with hot reload
- `npm test` - Run tests with Jest (watch mode and coverage)
- `npm run build` - Build TypeScript project

## Project Structure / โครงสร้างโปรเจค

```
src/
  ├── app.ts        # Main application entry point
  ├── __tests__/   # Test files
  └── ...          # Other source files
```

## Dependencies / ไลบรารี่ที่ใช้

### Main Dependencies
- fp-ts: Functional programming utilities
- ts-pattern: Pattern matching for TypeScript
- ws: WebSocket client & server
- papaparse: CSV parsing
- node-xlsx: Excel file handling

### Development Dependencies
- TypeScript
- Jest (with ts-jest)
- ESLint
- Nodemon

## Development Setup / การตั้งค่าสำหรับการพัฒนา

### VSCode Extensions / เอ็กซ์เทนชั่นสำหรับ VSCode

#### Essential Extensions
Install these extensions from VSCode Marketplace:
1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. [TypeScript and JavaScript Language Features](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
3. [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
4. [Vitest](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer)
5. [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)
6. [Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)
7. [Jest Test Explorer](https://marketplace.visualstudio.com/items?itemName=kavod-io.vscode-jest-test-adapter)

#### Configure VSCode Settings
1. Open VSCode settings (File > Preferences > Settings)
2. Click on the "Open Settings (JSON)" icon in the top right
3. Add the following configuration:

```json
{
  "editor.formatOnSave": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "jest.autoRun": {
    "watch": true,
    "onSave": "test-file"
  },
  "vitest.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

### Verify Development Setup / ตรวจสอบการตั้งค่าสำหรับการพัฒนา

1. Verify TypeScript:
```bash
npx tsc --version
```

2. Verify Jest:
```bash
npx jest --version
```

3. Verify ESLint:
```bash
npx eslint --version
```

## Testing / การทดสอบ

Tests are written using Jest and can be run with:
```bash
npm test
```

This will:
- Run tests in watch mode
- Generate coverage reports
- Watch for file changes

### Test Configuration / การตั้งค่าการทดสอบ

The project uses the following test configuration:
- Jest for testing
- ts-jest for TypeScript support
- Coverage reporting enabled
- Watch mode enabled by default

## License / ใบอนุญาต

ISC License
