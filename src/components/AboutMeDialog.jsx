import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContext } from "react";
import { ThemeContext } from "../context";
function AboutMeDialog({ open, setOpen , dialogWidth = "w-7/12" }) {
  return (
    
    <Dialog   open={open} onOpenChange={setOpen} className = 'w-1/4'>
        <DialogContent className={`${dialogWidth}`}>
        <DialogHeader>
          <DialogTitle className = 'text-black mb-5'>More About me</DialogTitle>
          <DialogDescription>
          I am a passionate MERN stack developer with a Master’s degree in Computer Applications from SRM University. Known for my ability to adapt quickly to new environments and technologies, I thrive in dynamic and fast-paced settings. As a quick learner, I am always eager to expand my skills and contribute effectively to innovative projects. My expertise in modern web and mobile development ensures the delivery of efficient and scalable solutions.          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    
  );
}

export default AboutMeDialog;
