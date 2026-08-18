import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  AttractionCategory,
  categoryLabels,
  categoryIcons,
} from "@/data/attractions";

const categories: AttractionCategory[] = [
  "beach",
  "nature",
  "trail",
  "history",
  "culture",
  "natural_formation",
  "heritage",
];

export const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <Card
            onClick={() => navigate(`/descobrir?categoria=${category}`)}
            className="p-5 text-center border border-border shadow-soft hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            <div className="text-2xl mb-2">{categoryIcons[category]}</div>
            <p className="text-xs font-light text-foreground">
              {categoryLabels[category]}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
