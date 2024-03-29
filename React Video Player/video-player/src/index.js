import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import '../src/Styles/style.css';

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);