import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Footprints, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Attraction,
  categoryLabels,
  trailLevelLabels,
  calculateDistance,
} from "@/data/attractions";

interface AttractionCardProps {
  attraction: Attraction;
  userLocation?: { lat: number; lon: number } | null;
  index?: number;
}

export const AttractionCard = ({
  attraction,
  userLocation,
  index = 0,
}: AttractionCardProps) => {
  const distance = userLocation
    ? calculateDistance(
        userLocation.lat,
        userLocation.lon,
        attraction.latitude,
        attraction.longitude
      )
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link to={`/ponto/${attraction.slug}`}>
        <Card className="group overflow-hidden border border-border shadow-soft hover:shadow-md transition-shadow duration-300">
          <div className="aspect-[16/10] overflow-hidden bg-muted">
            {attraction.images[0] ? (
              <img
                src={attraction.images[0]}
                alt={attraction.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-light">
                Sem imagem
              </div>
            )}
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-lg font-light text-foreground leading-tight">
                {attraction.name}
              </h3>
              <Badge variant="outline" className="text-[10px] font-normal shrink-0">
                {categoryLabels[attraction.category]}
              </Badge>
            </div>

            <div className="space-y-1.5 text-sm text-muted-foreground font-light">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>
                  {attraction.municipality}, {attraction.region}
                </span>
              </div>

              {distance !== null && (
                <div className="flex items-center gap-1.5">
                  <Compass className="h-3.5 w-3.5" />
                  <span>{distance.toFixed(1)} km de distância</span>
                </div>
              )}

              {attraction.trailLevel !== "none" && (
                <div className="flex items-center gap-1.5">
                  <Footprints className="h-3.5 w-3.5" />
                  <span>Trilha {trailLevelLabels[attraction.trailLevel].toLowerCase()}</span>
                </div>
              )}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
