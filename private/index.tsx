import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from '../src/components/Hello';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Hello name="TypeScript" enthusiasmLevel={10} />);