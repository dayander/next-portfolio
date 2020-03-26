import React from 'react';
import Link from 'next/link';
import theme from '../../theme';

interface LinkedProps {
  href: string;
  styles?: object;
  className?: string;
  prefetch?: boolean;
}

const Linked: React.FC<LinkedProps> = ({ children, href, prefetch = false, className, styles }) => (
  <Link href={href} passHref prefetch={prefetch}>
    <a
      className={className ? className : ''}
      style={styles ? styles : { color: theme.palette.common.white }}
    >
      {children}
    </a>
  </Link>
);

export default Linked;
