import React from "react";
import { TouristForm } from "../../features/UserTourist";
import ProfileLayout from "../../routes/ProfileLayout";

export default function TouristCreate() {
  return <ProfileLayout children={<TouristForm />} />;
}
