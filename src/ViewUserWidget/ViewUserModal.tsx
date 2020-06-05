import React, { Fragment } from "react";
import {
  Modal,
  Button,
  Box,
  Divider,
  TypeBase,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TypeTableHeader,
  TableBody,
  Paper,
  TypeHelper,
} from "@c2fo/components";
import { VendorDetails } from "./ViewUser.schema";
import { useStyles } from "./ViewUserModal.style";
import { Grid } from "@material-ui/core";

const TESTID_ROOT = "viewUser-modal";
const TABLE_ROOT = "viewUser-detail:table";

export const testIds = {
  modalBody: `${TESTID_ROOT}:modalBody`,
  closeViewUserModal: `${TESTID_ROOT}:closeViewUserModal`,
  modalCloseButton: `${TESTID_ROOT}:modalCloseButton`,
  table: TABLE_ROOT,
  head: {
    userEmail: `${TABLE_ROOT}:userEmail`,
    userName: `${TABLE_ROOT}:userName`,
    title: `${TABLE_ROOT}:title`,
    phone: `${TABLE_ROOT}:phone`,
    status: `${TABLE_ROOT}:status`,
  },
} as const;

interface ViewUserModalProps {
  onModalClose(): void;
  userName?: string;
  userDetails?: VendorDetails[];
}
type Align = "left" | "right" | "inherit" | "center" | "justify" | undefined;

interface HeadCell {
  disablePadding: boolean;
  id: string;
  defaultText: string;
  align: Align;
  testId: string;
  colSpan?: number;
}

export const ViewUserModal: React.FC<ViewUserModalProps> = ({
  onModalClose,
  userName,
  userDetails,
}) => {
  // TODO: Add translations
  const VendorTitle = userName;
  const classes = useStyles();

  const headerCells: HeadCell[] = [
    {
      id: "userEmail",
      align: "left",
      disablePadding: false,
      defaultText: "Email Address",
      testId: testIds.head.userEmail,
      colSpan: 8,
    },
    {
      id: "userName",
      align: "left",
      disablePadding: false,
      defaultText: "Full Name",
      testId: testIds.head.userName,
      colSpan: 4,
    },
    {
      id: "title",
      align: "left",
      disablePadding: false,
      defaultText: "Title",
      testId: testIds.head.title,
      colSpan: 5,
    },
    {
      id: "phone",
      align: "left",
      disablePadding: false,
      defaultText: "Phone",
      testId: testIds.head.phone,
      colSpan: 3,
    },
    {
      id: "status",
      align: "left",
      disablePadding: false,
      defaultText: "Status",
      testId: testIds.head.status,
      colSpan: 3,
    },
  ];

  const ViewUserTable: React.FC = () => {
    const viewUserTableHeader = headerCells.map((headCell) => (
      <TableCell
        key={headCell.id}
        align={"left"}
        padding={headCell.disablePadding ? "none" : "default"}
        data-testid={headCell.id}
        colSpan={headCell.colSpan}
      >
        <TypeTableHeader component="span">
          {headCell.defaultText}
        </TypeTableHeader>
      </TableCell>
    ));

    const viewUserTableBody = userDetails &&
      userDetails.map((stats) => {
        return (
          <TableRow key={stats.email} hover>
            <TableCell colSpan={8}>
              <TypeBase classes={{ root: classes.viewUserCellContent }}>
                {stats.email}
              </TypeBase>
            </TableCell>
            <TableCell colSpan={4}>
              <TypeBase classes={{ root: classes.viewUserCellContent }}>
                {stats.name}
              </TypeBase>
            </TableCell>
            <TableCell colSpan={5}>
              <TypeBase classes={{ root: classes.viewUserCellContent }}>
                {stats.title}
              </TypeBase>
            </TableCell>
            <TableCell colSpan={3}>
              <TypeBase classes={{ root: classes.viewUserCellContent }}>
                {stats.phone}
              </TypeBase>
            </TableCell>
            <TableCell colSpan={3}>
              <TypeBase classes={{ root: classes.viewUserCellContent }}>
                {stats.status}
              </TypeBase>
            </TableCell>
          </TableRow>
        );
      })

    return (
      <TableContainer component={Paper}>
        <Table
          aria-label="view user table"
          size={"small"}
          data-testid={testIds.table}
          className={classes.tableContainer}
        >
          <TableHead>
            <TableRow>{viewUserTableHeader}</TableRow>
          </TableHead>
          <TableBody>{viewUserTableBody}</TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Fragment>
      <Modal
        aria-labelledby="view-user-modal-title"
        open={!!userName}
        onClose={onModalClose}
        // TODO: Update trsanlation
        modalTitle="View Contacts"
        closeButtonTestId={testIds.modalCloseButton}
        actionsContent={
          <Grid className={classes.footerContainer}>
             {/* TODO: Update trsanlation */}
            <TypeHelper
              data-testid="srm-widget:name"
              classes={{ root: classes.footerNote }}
            >
              Do not copy data from this page. The information above would be
              considerd personal information under GDRP regulation. Any user
              data copied from this screen will require an Article 13 notice to
              the individual user within a calender month of such action.
            </TypeHelper>
             {/* TODO: Update trsanlation */}
            <Button
              size="large"
              onClick={onModalClose}
              data-testid={testIds.closeViewUserModal}
              className={classes.closeButton}
            >
              Close
            </Button>
          </Grid>
        }
      >
        <div data-testid={testIds.modalBody}>
          <Box mb={1}>
            <TypeBase isEmphasis classes={{ root: classes.userNameContainer }}>
              {VendorTitle}
            </TypeBase>
          </Box>
          <Divider />

          <Box mt={4}>
            <ViewUserTable />
          </Box>
        </div>
      </Modal>
    </Fragment>
  );
};
