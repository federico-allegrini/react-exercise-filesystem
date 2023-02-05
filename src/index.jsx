import React from 'react'
import ReactDOM from 'react-dom/client'

import DirectoryStructure from './components/DirectoryStructure'

import { name, files } from './data/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DirectoryStructure name={name} files={files} />
  </React.StrictMode>
)