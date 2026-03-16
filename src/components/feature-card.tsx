import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeatureCard({
  icon,
  title,
  description,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Card>, "children"> & {
  icon?: React.ReactNode
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        {icon && <div className="text-primary [&_svg]:size-6">{icon}</div>}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  )
}
