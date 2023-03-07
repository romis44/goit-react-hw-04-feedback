import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Layout.styled';

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
