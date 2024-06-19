
import React from 'react'
import PageLayout from '../../components/PageLayout'
import servicesData from './servicesData'
import { Link } from 'react-router-dom';
import ServiceProfileCard from './components/ServiceProfileCard';

export default function Services() {
  return (
    <PageLayout>
      {/*list of services*/}
      <div className="my-10 flex items-center justify-center space-x-10">
        {servicesData.listOfServices.map((listOfService) => (
          <Link
            to={listOfService.to}
            className="flex flex-col items-center justify-center hover:scale-105"
          >
            <span className="cpitalize text-sm">{listOfService.name}</span>
            <img
              src={listOfService.icon}
              alt=""
            />
          </Link>
        ))}
      </div>

      {/*list of services*/}
      <div className="grid grid-cols-[300px_300px_300px_300px] place-center gap-8">
        {servicesData.servicesProfiles.map((servicesProfile) => (
          <ServiceProfileCard
            image={servicesProfile.image}
            rating={servicesProfile.stars}
            name={servicesProfile.name}
            service={servicesProfile.service}
            profile={servicesProfile.profile}
            message={servicesProfile.message}
            profileLink={servicesProfile.profileLink}
          />
        ))}
      </div>
    </PageLayout>
  );
}
