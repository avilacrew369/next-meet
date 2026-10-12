import React from 'react'
import Hero from '../../src/shared/components/ui/Hero'
import { Metadata } from "next";
import { generatePageTitle } from '../../src/shared/utils/metadata';

export const metadata: Metadata = {
  title: generatePageTitle('Inicio')
};

export default function Home() {
  return (
    <>
     <Hero />
     
    </>
  )
}
