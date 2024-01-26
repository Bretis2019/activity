import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import {useState} from "react";

const projects = [
  {name: "Profile Page", taskCount: 5},
  {name: "Contact Page", taskCount: 8},
  {name: "Landing Page", taskCount: 2}
]


export function ProjectSelector() {

  const [project, setProject] = useState({name: "", taskCount: null})

  return (
    (<div
      className="flex flex-col items-center justify-center h-screen md:px-0 px-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Project Selector</h1>
      <div className="w-full max-w-md">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full" variant="outline">
              {project.name === "" ? "Select Project": project.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Projects</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {projects.map(project => {
              return (
                  <DropdownMenuItem key={project.name} onClick={() => setProject(project)}>{project.name}</DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="mt-4 w-full">Submit</Button>
      </div>
      {project.taskCount && <p className="text-gray-600 dark:text-gray-400 mt-4">Total Tasks: {project.taskCount}</p>}
    </div>)
  );
}
