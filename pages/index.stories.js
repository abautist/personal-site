import React from 'react'
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from 'pcln-design-system'
import Layout from '../components/Layout'
import Home from '.'

export default { title: 'Home', decorators: [withA11y] }

export const fullLayout = () => (
  <ThemeProvider>
    <Layout>
      <Home />
    </Layout>
  </ThemeProvider>
)
