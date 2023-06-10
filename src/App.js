import React, { useState, useEffect } from 'react';
import SearchComponent from './SearchComponent.js';
import './style.css';

export default function App() {
  return (
    <div class="container">
      <SearchComponent />
      <SearchComponent />
    </div>
  );
}
