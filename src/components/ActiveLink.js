import { useRouter } from 'next/router';
import React, { Children } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const router = useRouter();
  const child = Children.only(children);

  let className = child.props.className || '';
  const { href } = props;
  if (router.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <a {...props}>{React.cloneElement(child, { className })}</a>;
};

export default ActiveLink;
