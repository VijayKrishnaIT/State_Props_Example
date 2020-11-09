import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles,
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

//theme is predefined object
const useStyles = makeStyles((theme) => ({
  root: {
    //spacing(1) means 8px, spacing(5) means 40 px
    margin: theme.spacing(5),
    padding: theme.spacing(2),
  },
  tableHead: {
    backgroundColor: theme.palette.common.black,
    color: "red",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

//display the data in 3D effect.
//for loop use .map()
function Second(props) {
  const { key1 } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <TableContainer>
          <Table>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <StyledTableCell>SNO</StyledTableCell>
                <StyledTableCell>P_ID</StyledTableCell>
                <StyledTableCell>P_NAME</StyledTableCell>
                <StyledTableCell>P_COST</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {key1.map((element, index) => (
                <StyledTableRow>
                  <StyledTableCell>{index}</StyledTableCell>
                  <StyledTableCell>{element.p_id}</StyledTableCell>
                  <StyledTableCell>{element.p_name}</StyledTableCell>
                  <StyledTableCell>{element.p_cost}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
}

export default Second;
