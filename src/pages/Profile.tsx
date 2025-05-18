
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CreditCard, Edit, Gavel, Shield, UserCircle } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <Button variant="secondary" size="sm">
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Manage your personal details and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="" />
                <AvatarFallback className="text-xl">JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-lg">John Doe</h3>
                <p className="text-muted-foreground">john.doe@example.com</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-muted-foreground">Full Name:</div>
                <div className="text-sm">John Doe</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-muted-foreground">Email:</div>
                <div className="text-sm">john.doe@example.com</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-muted-foreground">Phone:</div>
                <div className="text-sm">+1 (555) 123-4567</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-muted-foreground">Company:</div>
                <div className="text-sm">Acme Legal Services</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-muted-foreground">Location:</div>
                <div className="text-sm">Toronto, Ontario, Canada</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Account Summary</CardTitle>
            <CardDescription>Your account status and activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <UserCircle className="h-8 w-8 text-primary mr-3" />
              <div>
                <h3 className="font-medium">Premium Account</h3>
                <p className="text-sm text-muted-foreground">Valid until Dec 31, 2025</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Gavel className="h-8 w-8 text-primary mr-3" />
              <div>
                <h3 className="font-medium">Cases Analyzed</h3>
                <p className="text-sm text-muted-foreground">12 cases processed</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-primary mr-3" />
              <div>
                <h3 className="font-medium">Billing Information</h3>
                <p className="text-sm text-muted-foreground">Visa ending in 4242</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <div>
                <h3 className="font-medium">Security Settings</h3>
                <p className="text-sm text-muted-foreground">2FA enabled</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
