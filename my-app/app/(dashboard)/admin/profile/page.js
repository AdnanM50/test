
"use client";
import ProfileInfo from '@/app/components/admin/profile/profile-info';
import React, { useState } from 'react';

const page = () => {

  const [tab, setTab] = useState('profile')

  return (
    <div>
      <ProfileInfo></ProfileInfo>
    </div>
  );
};

export default page;