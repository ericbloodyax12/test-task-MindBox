import React from 'react';

import "./index.scss"

type TFooterProps = {
  height?: number
}

export const Footer: React.FC<TFooterProps> = ({}) => {
  return (
    <footer className={'app-footer-container'}>
      <p>© 2024 Barsegyan&Co. All rights reserved.</p>
    </footer>
  );
}