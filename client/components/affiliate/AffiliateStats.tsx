import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, MousePointerClick, Users, TrendingUp } from "lucide-react";

export const AffiliateStats = () => {
  const stats = [
    {
      title: "Total Earnings",
      value: "$1,234.56",
      change: "+12% from last month",
      icon: DollarSign,
    },
    {
      title: "Total Clicks",
      value: "856",
      change: "+25% from last month",
      icon: MousePointerClick,
    },
    {
      title: "Active Referrals",
      value: "23",
      change: "+4 new this week",
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: "2.4%",
      change: "+0.5% from last month",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
