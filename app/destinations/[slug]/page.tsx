import React, { use } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DestinationDetailClientView from "./DestinationDetailClientView";
import { getDestinationBySlug, getToursByDestination, getDestinations } from "@/lib/sanity/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: "Destination Not Found | Travel With Sonali",
      description: "The requested destination could not be found.",
    };
  }

  return {
    title: `${destination.name} - Travel Guide & Tours | Travel With Sonali`,
    description: destination.tagline || destination.description.slice(0, 160),
    openGraph: {
      title: `${destination.name} - Travel With Sonali`,
      description: destination.tagline || destination.description.slice(0, 160),
      images: [
        {
          url: destination.image,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
  };
}

export default function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const destination = use(getDestinationBySlug(slug));
  const tours = use(getToursByDestination(slug));
  const allDestinations = use(getDestinations());

  if (!destination) {
    notFound();
  }

  const relatedDestinations = allDestinations.filter((d) => d.slug !== slug).slice(0, 3);

  return (
    <DestinationDetailClientView
      destination={destination}
      tours={tours}
      relatedDestinations={relatedDestinations}
    />
  );
}
