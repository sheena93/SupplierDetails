import React, { useState } from "react";
import { ViewUserModal } from "./ViewUserModal";
import { VendorDetails } from "./ViewUser.schema";
import { Button } from "@c2fo/components";
import { MockViewVendoreData } from "./UserMockData";

export const ContactManagerPage: React.FC = () => {
  const [selectedVendorForViewUser, setSelectedVendorForViewUser] = useState<
    string | undefined
  >();
  const [
    selectedVendorDetailsForViewUser,
    setSelectedVendorDetailsForViewUser,
  ] = useState<VendorDetails[]>();

  const onModalClose = () => {
    setSelectedVendorForViewUser(undefined);
  };

  return (
    <div>
      <Button
        size="large"
        onClick={() => {
          setSelectedVendorForViewUser("FEDERAL CORP");
          setSelectedVendorDetailsForViewUser(MockViewVendoreData);
        }}
      >
        View Vendors
      </Button>
      <ViewUserModal
        userName={selectedVendorForViewUser}
        onModalClose={onModalClose}
        userDetails={selectedVendorDetailsForViewUser}
      />
    </div>
  );
};
