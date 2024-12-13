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
function AboutMeDialog({ open, setOpen }) {
    const {isLight} = useContext(ThemeContext);
  return (
    
    <Dialog   open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className = 'text-black'>More About me</DialogTitle>
          <DialogDescription>
          I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    
  );
}

export default AboutMeDialog;
