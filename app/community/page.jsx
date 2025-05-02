import BenefitsCommunity from '@/components/community/BenefitsCommunity';
import HeroCommunity from '@/components/community/HeroCommunity';
import HowToJoin from '@/components/community/HowToJoin';
import ReviewsCommunity from '@/components/community/ReviewsCommunity';
import SocialMediaBreaker from '@/components/community/SocialMediaBreaker';
import Videocommunity from '@/components/community/Videocommunity';
import BrandLogos from '@/components/services/BrandLogos';
import React from 'react';

export default function page() {
  return (
    <>
    <HeroCommunity/>
    <Videocommunity/>
    <HowToJoin/>
    <SocialMediaBreaker/>
    <BenefitsCommunity/>
    <ReviewsCommunity/>
    </>
  );
}
