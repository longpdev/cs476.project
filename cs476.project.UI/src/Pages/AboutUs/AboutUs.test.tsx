import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs'; 
import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { ChakraProvider } from '@chakra-ui/react';

describe('AboutUs', () => {
  const renderAboutUsPage = () => {
    return render(
        <ChakraProvider>
          <AboutUs />
        </ChakraProvider>
    );
  };

  it('should render the main heading', () => {
    renderAboutUsPage();
    const heading = screen.getByRole('heading', { name: /Connecting Pets with Loving Homes/i });
    expect(heading).toBeInTheDocument();
  });

  it('should render images in the grid', () => {
    renderAboutUsPage();
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
    expect(images[0]).toBeInTheDocument();
  });

  it('should render the statistics section', () => {
    renderAboutUsPage();
    const stats = screen.getAllByRole('heading', { level: 2 });
    expect(stats.length).toBeGreaterThan(0);
  });
});
