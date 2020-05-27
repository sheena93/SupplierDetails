import React, { ReactNode, useState } from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  TypeBase,
  TypeHelper,
} from "@c2fo/components";
import { Vendors } from "../../../schemas/contactManager.schema";
import { T } from "../../../../i18n";
import AddIcon from "@material-ui/icons/Add";
import addressBookSvg from "./addressBook.svg";

type VendorInfoTableBodyProps = {
  children?: ReactNode;
  vendors: Vendors[] | undefined;
};

export const VendorInfoTableBody: React.FC<VendorInfoTableBodyProps> = ({
  vendors,
}) => {
  const renderUserStatus = (vendor: Vendors) => {
    let status = <T k="maker.contactsManager.unregistered">Unregistered</T>;

    if (vendor.userCount === 0) {
      status = <T k="maker.noUsers">No users</T>;
    } else if (vendor.active > 0) {
      status = (
        <T k="maker.contactsManager.registeredParticipating">
          Registered and participating
        </T>
      );
    } else if (vendor.registeredUserCount > 0) {
      status = (
        <T k="maker.contactsManager.registeredNotParticipating">
          Registered and not participating
        </T>
      );
    }

    return status;
  };

  return (
    <TableBody>
      {vendors?.map((vendor: Vendors) => {
        return (
          <TableRow key={vendor.name} hover>
            <TableCell colSpan={1} align={"center"}>
              <TypeBase>{vendor.name}</TypeBase>
              <TypeHelper>{vendor.companyId}</TypeHelper>
            </TableCell>
            <TableCell colSpan={3}>
              <TypeBase align="leading" noWrap={true}>
                {vendor.priority}
              </TypeBase>
            </TableCell>
            <TableCell colSpan={1}>{renderUserStatus(vendor)}</TableCell>
            <TableCell colSpan={1}>
              <AddIcon />
            </TableCell>
            <TableCell colSpan={1}>
              <img
                alt="AddressBook"
                data-testid="contactManager-screen:address-logo"
                src={addressBookSvg}
              />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};
