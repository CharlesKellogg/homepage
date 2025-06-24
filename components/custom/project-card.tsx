import { Project } from "@/data/projects";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="w-full h-32 relative">
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            fill
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <CardTitle className="pt-4">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-row gap-2">
        {project.websiteUrl && (
          <Link href={project.websiteUrl}>
            <Button>
              <FontAwesomeIcon icon={faGlobe} />
              Website
            </Button>
          </Link>
        )}
        {project.githubUrl && (
          <Link href={project.githubUrl}>
            <Button>
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
