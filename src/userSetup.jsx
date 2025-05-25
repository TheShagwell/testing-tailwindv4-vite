import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "John Amaka",
    email: "john.amaka@itandtsolutions.com",
    avatar: "https://via.placeholder.com/100",
    job: "Customer Representative",
  });

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h2 className="text-xl font-bold">Profile Settings</h2>
      <Card className="shadow-lg">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.avatar} alt="Profile Picture" />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="w-full space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input type="text" value={user.name} readOnly className="cursor-not-allowed" />
            <label className="text-sm font-medium">Email</label>
            <Input type="email" value={user.email} readOnly className="cursor-not-allowed" />
            <label className="text-sm font-medium">Job</label>
            <Input type="text" value={user.job} readOnly className="cursor-not-allowed" />
          </div>
          <Button>Edit Profile Detail</Button>
        </CardContent>
      </Card>
    </div>
  );
}
