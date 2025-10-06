"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Copy, Edit3, Check, Upload, Trash2, User } from "lucide-react";

type ProfileSettingsCardProps = {
  user?: {
    name: string;
    email: string;
    username: string;
    phone: string;
    avatar?: string;
    isVerified?: boolean;
  };
};

const ProfileSettingsCard = ({
  user = {
    name: "Muhammad Insan Kamil",
    email: "muhammadinsankamil18@gmail.com",
    username: "insank18",
    phone: "+62 87881122440",
    isVerified: true,
  },
}: ProfileSettingsCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    username: user.username,
    phone: user.phone,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCopyLink = () => {
    // Copy profile link to clipboard
    navigator.clipboard.writeText(
      `${window.location.origin}/profile/${user.username}`,
    );
  };

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false);
    // Here you would typically make an API call to save the changes
  };

  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
      name: user.name,
      email: user.email,
      username: user.username,
      phone: user.phone,
    });
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    // Handle account deletion
    console.log("Delete account clicked");
  };

  const handleUploadImage = () => {
    // Handle image upload
    console.log("Upload image clicked");
  };

  const handleDeleteImage = () => {
    // Handle image deletion
    console.log("Delete image clicked");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="border-b">
          <div className="flex items-start gap-4">
            <Avatar className="size-16">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-emerald-100 text-emerald-700">
                <User className="size-8" />
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold">{user.name}</h1>
                  {user.isVerified && (
                    <Badge
                      variant="secondary"
                      className="bg-emerald-100 text-emerald-700 border-emerald-200"
                    >
                      <Check className="size-3" />
                      Verified Account
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopyLink}>
                  <Copy className="size-4" />
                  Copy Link
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit3 className="size-4" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          {/* Form Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                disabled={!isEditing}
                className={!isEditing ? "bg-muted" : ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={!isEditing}
                  className={!isEditing ? "bg-muted" : ""}
                />
                <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4 text-emerald-500" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
                  disabled={!isEditing}
                  className={!isEditing ? "bg-muted" : ""}
                />
                <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4 text-emerald-500" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                disabled={!isEditing}
                className={!isEditing ? "bg-muted" : ""}
              />
            </div>
          </div>

          {/* Profile Picture Section */}
          <div className="space-y-2">
            <Label>Profile Picture</Label>
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-emerald-100 text-emerald-700">
                  <User className="size-6" />
                </AvatarFallback>
              </Avatar>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleUploadImage}>
                  <Upload className="size-4" />
                  Upload Image
                </Button>
                <Button variant="outline" size="sm" onClick={handleDeleteImage}>
                  <Trash2 className="size-4" />
                  Delete
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              We only support JPEG, JPEG, or PNG file. 1 mb max.
            </p>
          </div>
        </CardContent>

        {/* Action Buttons */}
        <div className="flex items-center justify-between p-6 border-t">
          <Button
            variant="destructive"
            onClick={handleDeleteAccount}
            className="flex items-center gap-2"
          >
            <Trash2 className="size-4" />
            Delete Account
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileSettingsCard;
