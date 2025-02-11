import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

function Container({ children, className, ...props }: IProps) {
  return (
    <section {...props} className={cn("max-w-7xl mx-auto px-4", className)}>
      {children}
    </section>
  );
}

export default Container;
