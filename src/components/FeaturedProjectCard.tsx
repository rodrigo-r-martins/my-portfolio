import { motion } from "framer-motion";

export const FeaturedProjectCard = ({
  title,
  description,
  technologies,
}: {
  title: string;
  description: string;
  technologies: string[];
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      {...fadeInUp}
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex h-full flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-silver-tree-100 px-2.5 py-0.5 text-xs font-medium text-silver-tree-800 dark:bg-silver-tree-900 dark:text-silver-tree-200"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
