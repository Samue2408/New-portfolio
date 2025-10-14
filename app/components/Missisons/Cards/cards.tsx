// components/ProjectCard.tsx
"use client";

import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import styles from "@/styles/Missions.module.scss";

interface Project {
  id: string;
  title: string;
  img: string;
  github: string;
  github_backend?: string;
  web?: string;
  deployed?: boolean;
  status: string;
}

interface Props {
  project: Project;
  onFocus: (id: string) => void;
  direction?: "left" | "right";
}

const ProjectCard = memo(({ project, onFocus, direction = "left" }: Props) => {
  const handleClick = useCallback(() => {
    onFocus(project.id);
  }, [onFocus, project.id]);

  return (
    <motion.div
      className={styles.card}
      onClick={handleClick}
      initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.img_container}>
        <Image
          alt={project.title}
          src={project.img}
          width={500}
          height={301}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/blur-placeholder.png"
        />
        <motion.div className={styles.links_icon_container}>
          <a title="frontend" target="_blank" href={project.github}>
            <FaGithub className={styles.links_icon} />
          </a>

          {project.github_backend && (
            <a title="backend" target="_blank" href={project.github_backend}>
              <LuGithub className={styles.links_icon} />
            </a>
          )}

          {project.web && (
            <a title="web" target="_blank" href={project.web}>
              <MdLanguage className={styles.links_icon} />
            </a>
          )}
        </motion.div>
      </div>

      <div className={styles.card_description}>
        <h3>{project.title}</h3>
        <div className={styles.status}>
          {project.deployed ? <span>🟢</span> : <span>🔵</span>}
          <p>{project.status}</p>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
